const review = require("../models/reviewSchema");
const express = require("express");
const router = express();

// Get All articles
router.get("/api/getarticles", (req, res) => {
  article
    .find()
    .sort({ date: -1 })
    .then((article) => res.json(article))
    .catch((err) => res.status(400).json(`Error: ${err}`));
});
