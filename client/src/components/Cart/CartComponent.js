import { Button } from "@mui/material";
import React, { useState } from "react";
import "../Cart/CartComponent.css";
import CheckoutModal from "../modals/CheckoutModal";

function CartComponent(props) {
  // checkout modal
  const [checkoutModal, setCheckoutModal] = useState();

  const removeItem = () => {
    window.location.reload();
    sessionStorage.removeItem("cart");
  };

  const checkout = () => {
    setCheckoutModal(
      <CheckoutModal close={setCheckoutModal} name={props.name} />
    );
  };
  return (
    <div className="fillCart">
      <div className="cartSec">
        <h2>{props.name}</h2>
        <h4>R{props.price}</h4>
        <h4>Qty: {props.qty}</h4>
        <h4>Item id: {props.id}</h4>
        <Button variant="contained" id="checkoutBtn" onClick={checkout}>
          Checkout
        </Button>
        <Button
          onClick={removeItem}
          style={{
            backgroundColor: "coral",
            color: "white",
            marginLeft: "2%",
          }}
        >
          Remove item
        </Button>
      </div>
      {checkoutModal}
    </div>
  );
}

export default CartComponent;
