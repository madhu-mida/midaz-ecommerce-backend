const mongoose = require("mongoose");

const { Schema, model } = mongoose;

const paymentSchema = new Schema({
    user: { type: mongoose.Types.ObjectId, ref: "User" },
    cardNo: String,
    expirationDate: String,
    addressLine1: String,
    addressLine2: String,
    city: String,
    state: String,
    zipCode: String,
    phone: String,
})


const Payment = model("User", paymentSchema);
module.exports = Payment;