const mongoose = require("mongoose");
const Cart = require("./cart");
const Wishlist = require("./wishlist");

const { Schema, model } = mongoose;

const userSchema = new Schema({
    userId: String,
    name: String,
    email: String,
    password: String,
    dob: Date,
    addressLine1: String,
    addressLine2: String,
    city: String,
    state: String,
    zipCode: String,
    phoneNo: String,
})


const User = model("User", userSchema);
module.exports = User;