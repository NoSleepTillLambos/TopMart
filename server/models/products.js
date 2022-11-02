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
  productRating: {
    type: Number,
    required: true,
  },
  variations: {
    right: { type: String, required: true },
    left: { type: String, required: true },
  },
  // image: {
  //   type: String,
  //   required: true,
  // },
});

module.exports = mongoose.model("products", productSchema);
