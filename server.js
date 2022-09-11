require("dotenv").config();
const express = require("express");
const app = express();
const { PORT = 4001, DATABASE_URL } = process.env;
const mongoose = require("mongoose");
const connectDB = require('./config/connection');
const cors = require("cors");
const morgan = require("morgan");


const Products = require('./models/products');
const User = require("./models/user");
const Cart = require("./models/cart")
const Wishlist = require("./models/wishlist")
const Reviews = require("./models/reviews")
const Order = require("./models/order")


// Middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(express.json())
app.use(express.urlencoded({ extended: true }));


// test route
app.get("/", (req, res) => {
    res.send("Welcome to Midaz!!!")
})

app.post("/user", async (req, res) => {
    try {
        res.json(await User.create(req.body))
    } catch (error) {
        res.status(400).json(error)
    }
})

app.put("/user/update", async (req, res) => {
    try {
        res.json(await User.findByIdAndUpdate(
            req.body._id,
            req.body
        ))
    } catch (error) {
        res.status(400).json(error)
    }
})


app.get("/user", async (req, res) => {
    try {
        let data = res.json(await User.find({ email: req.query.emailParams }))
        console.log(data)
    } catch (error) {
        res.status(400).json(error)
    }
})


app.get("/products/search", async (req, res) => {
    try {
        console.log("req.params.searchTerm", req.query.searchTerm);
        res.json(await Products.find({ name: { $regex: req.query.searchTerm, $options: 'i' } }));
    } catch (error) {
        res.status(400).json(error)
    }
})

app.get("/products/:catId", async (req, res) => {
    try {
        res.json(await Products.find({ categoryId: req.params.catId }))
    } catch (error) {
        res.status(400).json(error)
    }
})

app.get("/product/:id", async (req, res) => {
    try {
        console.log(req.params.id)
        res.json(await Products.find({ productId: req.params.id }));
    } catch (error) {
        res.status(400).json(error)
    }
})



// Cart
app.put("/cart", async (req, res) => {
    console.log("cartObj", req.body)
    try {
        if (req.body.user) {
            let query = {
                user: req.body.user
            };
            let update = { products: req.body.products };
            let options = { upsert: true, new: true, setDefaultsOnInsert: true };
            let resModel = await Cart.findOneAndUpdate(query, update, options);
            res.json(resModel)
        }
        else {
            res.json("");
        }
    } catch (error) {
        res.status(400).json(error)
    }
})

app.get("/cart", async (req, res) => {
    try {
        console.log("RequestdId", req.query.userIdParams)
        let data = res.json(await Cart.find({ user: req.query.userIdParams }))
        console.log("getCartData", data)
    } catch (error) {
        res.status(400).json(error)
    }
})

// WishList
app.put("/wishlist", async (req, res) => {
    try {
        if (req.body.userId) {
            let query = {
                user: req.body.userId
            };

            let update = {
                products: req.body.products
            };

            let options = {
                upsert: true, new: true, setDefaultsOnInsert: true
            }

            let resModel = await Wishlist.findOneAndUpdate(query, update, options);
            res.json(resModel)
        }
    } catch (error) {
        res.status(400).json(error)
    }
})



// Reviews
app.get("/product/reviews", async (req, res) => {
    try {
        res.json(await Reviews.find({ product: req.query.productId }))
    } catch (error) {
        res.status(400).json(error)
    }
})

// Create order
app.post("/user/order", async (req, res) => {
    try {
        res.json(await Order.create(req.body))
    } catch (error) {
        res.status(400).json(error);
    }
})

app.get("/user/order", async (req, res) => {
    try {
        let data = res.json(await Order.find({ emailId: req.query.emailParams }))
        console.log(data)
    } catch (error) {
        res.status(400).json(error)
    }
})

// Server Listener
const start = async () => {
    try {
        connectDB();
        app.listen(PORT, () => {
            console.log(`Server is live on port: ${PORT}`)
        })
    } catch (error) {
        console.log(`Catch error: ${error}`)
    }
}

start();