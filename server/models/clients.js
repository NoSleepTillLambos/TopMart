const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const UserSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  status: {
    type: String,
  },
});

UserSchema.pre("save", async function (next) {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashPass = await bcrypt.hash(this.password, salt);
    this.password = hashPass;
    next();
  } catch (error) {
    next(error);
  }
});

UserSchema.methods.comparePassword = function (plainPass, cb) {
  bcrypt.compare(plainPass, this.password, function (err, isMatch) {
    if (err) {
      return cb(err);
      cb(null, isMatch);
    }
  });
};

UserSchema.methods.generateToken = function (cb) {
  const client = this;
  const token = jwt.sign(client._id.toHexString(), "secret");

  client.token = token;
  client.save(function (err, client) {
    if (err) return cb(err);
    cb(null, client);
  });
};

module.exports = mongoose.model("users", UserSchema);
