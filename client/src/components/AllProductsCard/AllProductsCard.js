import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../ProductCard/ProductCard.css";
import IndividualClub from "../../pages/IndividualClub";
import { Button } from "@mui/material";
import EditProductCard from "../EditProduct/EditProductCard";
import { AiFillDelete } from "react-icons/ai";
import axios from "axios";
import "../AllProductsCard/AllProductsCard.css";

function AllProductsCard(props) {
  const style = { backgroundColor: "black", float: "right" };
  const navigate = useNavigate();

  const viewProduct = () => {
    sessionStorage.setItem("productId", props.productId);
    navigate("/IndividualClub");
  };

  return (
    <>
      <div className="allProductsCard" onClick={viewProduct}>
        <img src={props.image} alt="irons" id="cardImg" />

        <div className="cardInfo">
          <h3 className="productName" style={{ marginTop: "10px" }}>
            {props.productName}
          </h3>
          <p>R{props.productPrice}</p>
          <p id="prodDesc">{props.productDescription}</p>

          <p>Rating: {props.productRating}</p>
          <p>Hand: {props.variations}</p>
        </div>
      </div>
    </>
  );
}

export default AllProductsCard;
