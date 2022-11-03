import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/individualClub.css";

function IndividualClub(props) {
  const navigate = useNavigate();

  let productId = sessionStorage.getItem("productId");
  const [imgUrl, setImgUrl] = useState();

  const [productData, setProductData] = useState({
    productName: "",
    productPrice: "",
    productDescription: "",
    productRating: "",
    variationLeft: "",
    variationRight: "",
  });

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/oneproduct" + productId)
      .then((res) => {
        let data = res.data;
        setProductData({
          productName: data.productName,
          productPrice: +data.productPrice,
          productDescription: data.productDescription,
          productRating: +data.productRating,
          variationLeft: data.variations.variationLeft,
          variationRight: data.variations.variationRight,
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
        <div className="productDetails">
          <h2>{props.productName}</h2>
          <img></img>
        </div>
      </div>
    </>
  );
}

export default IndividualClub;
