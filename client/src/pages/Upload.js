import React from "react";
import "../css/Upload.css";
import { useState, useRef } from "react";
import { AiOutlineCloudUpload } from "react-icons/ai";
import { IconContext } from "react-icons";
import axios from "axios";
import "../App.css";
import { Button } from "@mui/material";

function Upload() {
  const [productName, setProductName] = useState();
  const [productPrice, setPrice] = useState();
  const [productDescription, setProductDescription] = useState();
  const [productImg, setProductImg] = useState();
  const [productRating, setProductRating] = useState();
  const [variationRight, setVariationRight] = useState();
  const [variationLeft, setVariationLeft] = useState();

  const [imageName, setImageName] = useState("Please upload an image");

  const getImageValue = (e) => {
    // where multer comes in

    let value = e.target.value;
    let imageName = value.substring(12);
    setImageName(imageName);
    let reader = new FileReader();

    reader.onload = () => {
      let output = document.getElementById("imgPrev");
      output.src = reader.result;
    };

    reader.readAsDataURL(e.target.files[0]);
  };
  const getName = (e) => {
    let value = e.target.value;
    setProductName(value);
  };

  const getPrice = (e) => {
    let value = e.target.value;
    setPrice(value);
  };
  const getImage = (e) => {
    let value = e.target.value;
    setImageName(value);
  };

  const getProductDescription = (e) => {
    let value = e.target.value;
    setProductDescription(value);
  };
  const getRating = (e) => {
    let value = +e.target.value;
    setProductRating(value);
  };

  const getVariationRight = (e) => {
    let value = e.target.value;
    setVariationRight(value);
  };
  const getVariationLeft = (e) => {
    let value = e.target.value;
    setVariationLeft(value);
  };

  const addProduct = (e) => {
    e.preventDefault();

    let payload = {
      name: productName,
      price: productPrice,
      description: productDescription,
      image: imageName,
      rating: productRating,
      variations: {
        right: variationRight,
        left: variationLeft,
      },
    };

    axios.post("http://localhost:5000/api/newProduct", payload);

    document.getElementById("pName").value = "";
    document.getElementById("price").value = "";
    document.getElementById("right").value = "";
    document.getElementById("left").value = "";
    document.getElementById("image").value = "";
    document.getElementById("rating").value = "";
    document.getElementById("productDescription").value = "";
  };

  return (
    <>
      <div className="display-products">
        <h3>Products currently on display: </h3>
      </div>
      <div className="AddProduct">
        <hr />
        Upload File
        <input type="file" id="imgUpload" onChange={getImageValue} />
        <div className="imgPrev">
          <img id="imgPrev"></img>
        </div>
        <p>{imageName}</p>
        <form>
          <input
            id="image"
            onChange={getImage}
            placeholder="Product Name..."
            type="text"
          />
          <input
            id="pName"
            onChange={getName}
            placeholder="Product Name..."
            type="text"
          />
          <input
            id="price"
            onChange={getPrice}
            placeholder="price"
            type="number"
          />

          <br />

          <label>Orientation</label>
          <input
            className="qty"
            onChange={getVariationRight}
            id="left"
            placeholder="Orientation"
            type="text"
          />
          <input
            className="qty"
            onChange={getVariationLeft}
            id="right"
            placeholder="Orientation"
            type="text"
          />
          <br />

          <label>Rating</label>
          <input
            className="qty"
            onChange={getRating}
            id="rating"
            placeholder="Rating"
            type="number"
          />
          <br />

          <textarea
            id="productDescription"
            onChange={getProductDescription}
            placeholder="Product Description..."
          />

          <br />
          <Button onClick={addProduct}>Add Product!</Button>
        </form>
      </div>
      <div className="products"></div>
    </>
  );
}

export default Upload;
