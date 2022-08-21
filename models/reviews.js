const mongoose = require("mongoose");

const { Schema, model } = mongoose;

const reviewsSchema = new Schema({
    user: { type: mongoose.Types.ObjectId, ref: "User" },
    product: { type: mongoose.Types.ObjectId, ref: "Product" },
    review: Array,
});

const Reviews = model("Reviews", reviewsSchema);
module.exports = Reviews;