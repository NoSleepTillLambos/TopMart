const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const router = express();
const productSchema = require("../models/products");
const UserSchema = require("../models/clients");
const multer = require("multer");
const path = require("path");
const { json } = require("body-parser");

// multer middleware
const storedProductImage = multer.diskStorage({
  destination: (req, file, callBack) => {
    callBack(null, "./productImages");
  },

  filename: (req, file, callBack) => {
    callBack(null, Date.now() + path.extname(file.originalname));
  },
});

const uploadProductImage = multer({ storage: storedProductImage });

// END OF MULTER

// POSTING A SINGLE PRODUCT
router.post(
  "/api/newProduct",
  uploadProductImage.single("image"),
  (req, res) => {
    // MULTER IMAGE HANDLING
    let data = JSON.parse(req.body.information);

    // // PRODUCT SCHEMA
    const newProduct = new productSchema({
      productName: data.productName,
      productPrice: data.productPrice,
      productDescription: data.productDescription,
      productRating: data.productRating,
      hand: data.hand,
      image: req.file.filename,
    });
    newProduct
      .save()
      .then((item) => {
        res.json(item);
      })
      .catch((err) => {
        res.status(400).json({ msg: "There was an error", err: err });
      });
  }
);

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
      res.json({
        user: true,
        username: findUser.username,
        password: findUser.password,
      });
    } else {
      res.json({ user: false });
    }
  } else {
    res.json({ msg: "user not found" });
  }
});

// GETTING ONE PRODUCT
router.get("/api/oneproduct/:id", async (req, res) => {
  const findProduct = await productSchema.findById(req.params.id);
  res.json(findProduct);
});

// DELETING PRODUCT
router.delete("/api/deleteproduct/:id", async (req, res) => {
  const delProduct = await productSchema.remove({ _id: req.params.id });
  res.json(delProduct);
});

// UPDATING PRODUCT
router.patch("/api/updateproduct/:id", async (req, res) => {
  console.log(req.body);
  const updateProduct = await productSchema.updateOne(
    { _id: req.params.id },
    {
      $set: {
        productName: req.body.productName,
        productPrice: req.body.productPrice,
        productDescription: req.body.productDescription,
        productRating: req.body.productRating,
        hand: req.body.hand,
      },
    }
  );
  res.json(updateProduct);
});

module.exports = router;
