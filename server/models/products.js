const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  productName: {
    type: String,
    required: true,
  },
  productPrice: {
    type: Number,
    required: true,
  },
  productDescription: {
    type: String,
    required: true,
  },
  productImg: {
    type: String,
    required: true,
  },
  productRating: {
    type: Number,
    required: true,
  },
  hand: [
    {
      orientation: { type: String, required: true },
    },
  ],
  Date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("products", productSchema);
