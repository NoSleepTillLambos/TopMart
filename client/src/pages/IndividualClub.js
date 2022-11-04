import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import "../css/individualClub.css";
import { AiOutlineShoppingCart } from "react-icons/ai";

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
            <h4>{productData.productDescription}</h4>
            <h4>R{productData.productPrice}</h4>
            <h5>{productData.productRating}</h5>

            <Button type="submit" variant="contained" id="add-cart">
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
