import React, { useState } from "react";
import "../EditProduct/EditProductCard.css";
import { Button } from "@mui/material";
import { AiOutlineCloseSquare } from "react-icons/ai";
import axios from "axios";

function EditProductCard(props) {
  const style = {
    float: "right",
    fontSize: "1.5rem",
    backgroundColor: "black",
    padding: "-40px",
  };

  let editFormValues = {
    productName: props.productName,
    productPrice: props.productPrice,
    productDescription: props.productDescription,
    productRating: props.productRating,
    productHand: props.hand,
  };

  const [editValues, setEditValues] = useState(editFormValues);

  const updateValues = (e) => {
    const { name, value } = e.target;

    setEditValues({ ...editValues, [name]: value });
  };

  const updateProduct = (e) => {
    e.preventDefault();
    let productId = props.id;

    axios
      .patch("http://localhost:5000/api/updateproduct/" + productId, editValues)
      .then((res) => {
        if (res) {
          console.log("item: " + productId + "has been updated");
          props.close();
          props.editRender(true);
        }
      })
      .catch(function (err) {
        console.log(err);
      });
  };

  const closeModal = () => {
    props.close();
  };

  return (
    <>
      <div className="editModal">
        <div className="innerCon">
          <AiOutlineCloseSquare style={style} onClick={closeModal} />
          <h3>Edit the product below</h3>
          <form>
            <input
              id="pName"
              defaultValue={props.productName}
              placeholder="Product Name..."
              type="text"
              onChange={updateValues}
            />
            <input
              id="price"
              defaultValue={props.productPrice}
              placeholder="price"
              type="number"
              onChange={updateValues}
            />

            <br />

            <label>Orientation</label>
            <input
              className="qty"
              defaultValue={props.hand}
              id="right"
              placeholder="right or left..."
              type="text"
              onChange={updateValues}
            />

            <br />

            <label>Rating</label>
            <input
              className="qty"
              defaultValue={props.productRating}
              id="rating"
              placeholder="Rating"
              type="number"
              onChange={updateValues}
            />
            <br />

            <textarea
              style={{ marginLeft: "180px" }}
              defaultValue={props.productDescription}
              id="productDescription"
              placeholder="Product Description..."
              onChange={updateValues}
            />

            <br />
            <Button
              type="submit"
              variant="contained"
              style={{ marginLeft: "60px", width: "80%" }}
              onClick={updateProduct}
            >
              Update Product
            </Button>
          </form>
        </div>
      </div>
    </>
  );
}

export default EditProductCard;
