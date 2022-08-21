const mongoose = require("mongoose");

const { Schema, model } = mongoose;

const productsSchema = new Schema({
    updatedAt: String,
    createdAt: String,
    reviews: Number,
    price: Number,
    styles: String,
    imageUrl: String,
    name: String,
    brand: String,
    details: String,
    productBadge: String,
    description: String,
    pdpImages: String,
    discountText: String,
    originalPrice: String,
    brandDescription: String,
    ratingsHtml: String,
    ratingsText: String,
    ratingsSplit: String,
    productId: String,
    categoryId: String,
    categoryName: String,
});

const Products = model("Products", productsSchema);
module.exports = Products;