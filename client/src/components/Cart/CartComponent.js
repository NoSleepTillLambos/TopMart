import React from "react";
import "../Cart/CartComponent.css";

function CartComponent(props) {
  return (
    <div className="fillCart">
      <div className="cartSec">
        <h2>{props.name}</h2>
        <img src={props.imgUrl}></img>
      </div>
    </div>
  );
}

export default CartComponent;
