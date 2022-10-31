const express = require("express");
const {
  createProduct,
  getAllProducts,
  getOneProduct,
  updateProduct,
  deleteProduct,
  registerUser,
  loginUser,
} = require("../controllers/productController");

const router = express();
// POSTING A SINGLE PRODUCT
router.post("/api/addproduct", createProduct);

// REGISTER USERS
router.post("/api/registeruser", registerUser);

// LOGIN WITH JSON WEBTKN
router.post("/api/loginUser", loginUser);

// GETTING ALL PRODUCTS
router.get("/api/allproducts", getAllProducts);

// GETTING ONE PRODUCT
router.get("/api/oneproduct/:id", getOneProduct);

// DELETING PRODUCT
router.delete("/api/deleteproduct/:id", deleteProduct);

// UPDATING PRODUCT
router.patch("/api/updateproduct/:id", updateProduct);

module.exports = router;
