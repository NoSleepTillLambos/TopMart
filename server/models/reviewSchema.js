const mongoose = require("mongoose");

const answer = mongoose.Schema({
  name: {
    type: Number,
    default: 0,
  },
  review: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("answer", answer);
