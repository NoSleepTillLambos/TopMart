const productSchema = require("../models/products");
const UserSchema = require("../models/clients");
const bcrypt = require("bcrypt");

// GETTING A SINGLE PRODUCT
const getOneProduct = async (req, res) => {
  const findProduct = await productSchema.findById(req.params.id);

  if (!findProduct) {
    return res.status(404).json({ error: "Product does not exist" });
  }
  res.status(200).json(findProduct);
};
// CREATING A PRODUCT

// DELETE A PRODUCT
const deleteProduct = async (req, res) => {
  const delProduct = await productSchema.remove({ _id: req.params.id });
  res.json(delProduct);
};
// UPDATING A PRODUCT
const updateProduct = async (req, res) => {
  const updateProduct = await productSchema.updateOne(
    { _id: req.params.id },
    {
      $set: {
        productName: req.body.productName,
      },
    }
  );
  res.json(updateProduct);
};

const registerUser = (req, res) => {
  const newUser = new UserSchema(req.body);

  newUser
    .save()
    .then((item) => {
      res.json(item);
    })
    .catch((err) => {
      res.status(400).json({ msg: "There is an error", err });
    });
};

const loginUser = async (req, res) => {
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
};

module.exports = {
  getOneProduct,
  deleteProduct,
  updateProduct,
  registerUser,
  loginUser,
};

// EXPORTING ALL PRODUCTS AND KEEPING CODE SIMPLE
