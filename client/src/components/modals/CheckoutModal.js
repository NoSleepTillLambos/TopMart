import React, { useEffect } from "react";
import logo from "../../assets/logo.png";
import "../modals/CheckoutModal.css";
import { AiOutlineCloseSquare } from "react-icons/ai";
import { Button } from "@mui/material";
import ozow from "../../assets/ozow.png";
import axios from "axios";

function CheckoutModal(props) {
  let productId = sessionStorage.getItem("productId");

  const style = {
    float: "right",
    fontSize: "2.2rem",
  };
  const closeModal = () => {
    props.close();
  };

  const placeOrder = () => {
    {
      axios
        .delete("http://localhost:5000/api/deleteproduct/" + productId)
        .then((res) => {
          if (res) {
            console.log("Deleted: " + props.name);
          }
        });
    }
  };
  const removeItem = () => {
    window.location.reload();
    sessionStorage.removeItem("cart");
  };
  return (
    <>
      <div className="checkoutModal">
        <div className="innerCon">
          <AiOutlineCloseSquare style={style} onClick={closeModal} />
          <img src={logo} id="checkoutLogo"></img>
          <h2>Checkout</h2>
          <hr />
          <form>
            <input type="text" placeholder="name" />
            <input type="text" placeholder="surname" />
          </form>
          <Button
            variant="outlined"
            style={{ margin: "auto", display: "block", marginTop: "30px" }}
            onClick={(placeOrder, closeModal, removeItem)}
          >
            Place order
          </Button>

          <img src={ozow} id="ozow"></img>
        </div>
      </div>
    </>
  );
}

export default CheckoutModal;
