import { Button } from "@mui/material";
import React from "react";
import "../Cart/CartComponent.css";

function CartComponent(props) {
  const removeItem = () => {
    window.location.reload();
    sessionStorage.removeItem("cart");
  };

  return (
    <div className="fillCart">
      <div className="cartSec">
        <h2>{props.name}</h2>
        <h4>R{props.price}</h4>
        <h4>Qty: {props.qty}</h4>
        <h4>Item id: {props.id}</h4>
        <Button variant="contained" id="checkoutBtn">
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
    </div>
  );
}

export default CartComponent;
