const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const router = express();
const productSchema = require("../models/products");
const UserSchema = require("../models/clients");
const {
  createProduct,
  getAllProducts,
  getOneProduct,
  updateProduct,
  deleteProduct,
  registerUser,
  loginUser,
} = require("../controllers/productController");

// POSTING A SINGLE PRODUCT
router.post("/api/newProduct", (req, res) => {
  const newProduct = new productSchema({
    productName: req.body.productName,
    productPrice: req.body.productPrice,
    productDescription: req.body.productDescription,
    productImg: req.body.productImg,
    productRating: req.body.productRating,
    hand: {
      orientation: req.body.hand.orientation,
    },
  });
  newProduct
    .save()
    .then((item) => {
      res.json(item);
    })
    .catch((err) => {
      res.status(400).json({ msg: "There was an error", err: err });
    });
});

// GETTING ALL PRODUCTS
router.get("/api/allproducts", async (req, res) => {
  const findProducts = await productSchema.find();
  res.json(findProducts);
});

// REGISTER USERS
router.post("/api/registeruser", (req, res) => {
  const newUser = new UserSchema(req.body);

  newUser
    .save()
    .then((item) => {
      res.json(item);
    })
    .catch((err) => {
      res.status(400).json({ msg: "There is an error", err });
    });
});

// LOGIN WITH JSON WEBTKN
router.post("/api/loginuser", async (req, res) => {
  const findUser = await UserSchema.findOne({
    username: req.body.username,
  });

  if (findUser) {
    if (await bcrypt.compare(req.body.password, findUser.password)) {
      res.json({ user: true });
    } else {
      res.json({ user: false });
    }
  } else {
    res.json({ msg: "user not found" });
  }
});

// GETTING ONE PRODUCT
router.get("/api/oneproduct/:id", getOneProduct);

// DELETING PRODUCT
router.delete("/api/deleteproduct/:id", deleteProduct);

// UPDATING PRODUCT
router.patch("/api/updateproduct/:id", updateProduct);

module.exports = router;
