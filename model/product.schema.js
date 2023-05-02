const mongoose = require('mongoose');
const { Schema } = mongoose;

const productSchema = new Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true,
        min: [50,"price should be minimum 100"]
    },
    discountPercentage: {
        type: Number,
        min: [0, "min discount should be 0"],
        max: [50, "max discout should be 50"]
    },
    rating: {
        type: Number,
        min: [0, "min rating should be 0"],
        max: [5, "maximum rating should be 5"]
    },
    stock: {
        type: Number,
        required: true,
        min: [5, "min stock should be 5"]
    },
    brand: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    thumbnail: {
        type: String,
        required: true,
    },
    images: [String]
})

exports.Product = mongoose.model("Product",productSchema);