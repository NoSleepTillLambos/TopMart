import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ProductCard.css";
import IndividualClub from "../../pages/IndividualClub";
import { Button } from "@mui/material";
import EditProductCard from "../EditProduct/EditProductCard";
import { MdGolfCourse } from "react-icons/md";
import { AiFillDelete } from "react-icons/ai";
import axios from "axios";

function ProductCard(props) {
  const style = { backgroundColor: "black", float: "right" };
  const navigate = useNavigate();

  const [editModal, setEditModal] = useState();

  const viewProduct = () => {
    sessionStorage.setItem("productId", props.productId);
    navigate("/IndividualClub");
  };

  //   useEffect(() => {
  //     if (props.discount > 0) {
  //       setSale(
  //         <SaleProductCard
  //           id={props.id}
  //           discount={props.discount}
  //           price={props.price}
  //         />
  //       );
  //     } else {
  //       setNoSale(<NoSaleProductCard id={props.id} price={props.price} />);
  //     }
  //   }, []);

  const editProduct = () => {
    setEditModal(
      <EditProductCard
        close={setEditModal}
        id={props.productId}
        productName={props.productName}
        productRating={props.productRating}
        productPrice={props.productPrice}
        productDescription={props.productDescription}
        hand={props.hand}
        editRender={props.editRender}
      />
    );
  };

  const deleteItem = () => {
    if (
      window.confirm(
        "Are you sure you want to delete: " + props.productName
      ) === true
    ) {
      axios
        .delete("http://localhost:5000/api/deleteproduct/" + props.productId)
        .then((res) => {
          if (res) {
            console.log("Deleted: " + props.productName);
            props.editRender(true);
          }
        });
    }
  };

  return (
    <>
      <div className="productCard">
        <img src={props.image} alt="irons" id="cardImg" />
        <AiFillDelete style={style} onClick={deleteItem} />
        <div className="cardInfo">
          <h3 className="productName" style={{ marginTop: "10px" }}>
            {props.productName}
          </h3>
          <p>R{props.productPrice}</p>
          <p id="prodDesc">{props.productDescription}</p>

          <p style={{ fontSize: "10px" }}>Rating: {props.productRating}</p>
          <p style={{ fontSize: "10px" }}>Hand: {props.hand}</p>
          <Button
            variant="contained"
            style={{
              height: "30px",
              width: "80px",
              marginTop: "6px",
              marginLeft: "10px",
            }}
            onClick={viewProduct}
          >
            View
          </Button>
          <Button
            variant="outlined"
            style={{
              height: "30px",
              width: "80px",
              marginTop: "6px",
              marginLeft: "30px",
              color: "white",
            }}
            onClick={editProduct}
          >
            Edit
          </Button>

          {editModal}
        </div>
      </div>
    </>
  );
}

export default ProductCard;
