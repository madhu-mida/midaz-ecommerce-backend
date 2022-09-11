const mongoose = require("mongoose");

const { Schema, model } = mongoose;

const userSchema = new Schema({
    userId: String,
    name: String,
    firstName: String,
    lastName: String,
    email: String,
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