import React from "react";
import "../css/Upload.css";
import { useState, useRef } from "react";
import { AiOutlineCloudUpload } from "react-icons/ai";
import { IconContext } from "react-icons";
import axios from "axios";

function Upload() {
  const [productName, setProductName] = useState();
  const [productPrice, setPrice] = useState();
  const [productDescription, setProductDescription] = useState();
  const [productImg, setProductImg] = useState();
  const [productRating, setProductRating] = useState();
  const [productOrientation, setProductOrientation] = useState();

  const getName = (e) => {
    let value = e.target.value;
    setProductName(value);
  };

  const getPrice = (e) => {
    let value = e.target.value;
    setPrice(value);
  };

  const getProductDescription = (e) => {
    let value = e.target.value;
    setProductDescription(value);
  };
  const getRating = (e) => {
    let value = +e.target.value;
    setProductRating(value);
  };

  const getOrientation = (e) => {
    let value = e.target.value;
    setProductOrientation(value);
  };

  const addProduct = (e) => {
    e.preventDefault();

    let payload = {
      productName: productName,
      productPrice: productPrice,
      productDescription: productDescription,
      // productImg: req.body.productImg,
      productRating: productRating,
      hand: {
        orientation: productOrientation,
      },
    };

    axios.post("http://localhost:5000/api/newProduct", payload);

    document.getElementById("pName").value = "";
    document.getElementById("price").value = "";
    document.getElementById("orientation").value = "";
    document.getElementById("rating").value = "";
    document.getElementById("productDescription").value = "";
  };

  return (
    <>
      <div className="display-products">
        <h3>Products currently on display: </h3>
      </div>
      <div className="AddProduct">
        <h3>Add products below</h3>
        <hr />
        <IconContext.Provider value={{ color: "black", size: "50px" }}>
          <div>
            <AiOutlineCloudUpload />
          </div>
        </IconContext.Provider>
        <h5>Upload image</h5>
        <form>
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
            onChange={getOrientation}
            id="orientation"
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
          <button onClick={addProduct}>Add Product!</button>
        </form>
      </div>
      <div className="products"></div>
    </>
  );
}

export default Upload;
