const mongoose = require("mongoose");

const { Schema, model } = mongoose;

const orderSchema = new Schema({
    orderId: String,
    emailId: String,
    products: Array,
    orderDate: Date,
    orderTotal: Number,
    orderTax: Number,
    orderSubTotal: Number,
    shippigAddress: Object,
    user: { type: mongoose.Types.ObjectId, ref: "User" }
});

const Order = model("Order", orderSchema);
module.exports = Order;