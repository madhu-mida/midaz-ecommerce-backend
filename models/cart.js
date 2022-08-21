const mongoose = require("mongoose");

const { Schema, model } = mongoose;

const cartSchema = new Schema({
    //userId: String,
    products: Array,
    user: { type: mongoose.Types.ObjectId, ref: "User" }
});

const Cart = model("Cart", cartSchema);
module.exports = Cart;