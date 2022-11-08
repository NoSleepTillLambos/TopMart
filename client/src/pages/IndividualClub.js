import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import "../css/individualClub.css";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Rating } from "@mui/material";

function IndividualClub(props) {
  const navigate = useNavigate();

  let productId = sessionStorage.getItem("productId");
  const [imgUrl, setImgUrl] = useState();

  const [productData, setProductData] = useState({
    productName: "",
    productPrice: "",
    productDescription: "",
    productRating: "",
    hand: "",
  });

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/oneproduct/" + productId)
      .then((res) => {
        let data = res.data;
        setProductData({
          productName: data.productName,
          productPrice: +data.productPrice,
          productDescription: data.productDescription,
          productRating: +data.productRating,
          hand: data.hand,
        });
        let URL = "http://localhost:5000/productImages/" + data.image;
        setImgUrl(URL);
      });
  });

  const back = () => {
    sessionStorage.removeItem("productId");
    navigate("/AllProducts");
  };

  // ADDING ITEMS TO CART

  const addToCart = () => {
    let cart = sessionStorage.getItem("cart");
    let user = sessionStorage.getItem("username");

    if (user === "" || user === null) {
      alert("Please login first.");
      navigate("/SignIn");
    } else {
      let cartArray = [];

      if (cart === "" || cart === null) {
        let addToCart = {
          name: productData.productName,
          img: imgUrl,
          price: productData.price,
          id: productId,
          qty: 1,
        };

        cartArray.push(addToCart);
        sessionStorage.setItem("cart", JSON.stringify(cartArray));
      } else {
        let addToCart = {
          name: productData.productName,
          img: imgUrl,
          price: productData.productPrice,
          id: productId,
          qty: 1,
        };

        cartArray.push(addToCart);
        sessionStorage.setItem("cart", JSON.stringify(cartArray));
      }
    }
  };

  return (
    <>
      <div className="individualContainer">
        <Button
          variant="outlined"
          onClick={back}
          style={{ marginLeft: "20px", marginTop: "20px" }}
        >
          Back to products
        </Button>
        <div className="productContainer">
          <h5>{props.productId}</h5>
          <img src={imgUrl} id="individualImg"></img>
          <div className="productDetails">
            <h2>{productData.productName}</h2>
            <hr />
            <h5>Rate our product:</h5>
            <Rating
              name="half-rating"
              defaultValue={2.5}
              precision={0.5}
              style={{ marginLeft: "100px", paddingTop: "20px" }}
            />
            <h4>{productData.productDescription}</h4>
            <h4>R{productData.productPrice}</h4>
            <h5>{productData.productRating}</h5>

            <Button
              type="submit"
              variant="contained"
              id="add-cart"
              onClick={addToCart}
            >
              Add to cart
              <AiOutlineShoppingCart style={{ marginLeft: "12px" }} />
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default IndividualClub;
