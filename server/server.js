const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes/routes");
const cors = require("cors");
const app = express();
require("dotenv").config();
// express app

app.use(
  cors({
    origin: "http://localhost:3001",
  })
);

// MULTER IMAGE HANDLING
app.use(express.static("productImages"));
app.use("/productImages", express.static("productImages"));

// MIDDLEWARE
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(routes);

// connecting to db
mongoose.connect(process.env.MONGO_URI, (err) => {
  if (err) {
    console.log("Connection error:" + err);
  } else {
    console.log("Mongo connection established");
  }
});

// FETCHING AND PROTECTING PORT
const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server started on port: ${PORT}`);
});
