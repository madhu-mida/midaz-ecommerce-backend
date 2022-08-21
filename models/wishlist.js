const mongoose = require("mongoose");

const { Schema, model } = mongoose;

const wishlistSchema = new Schema({
    //userId: String,
    products: Array,
    user: { type: mongoose.Types.ObjectId, ref: "User" }
});

const Wishlist = model("Wishlist", wishlistSchema);

module.exports = Wishlist;