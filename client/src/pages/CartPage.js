import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import { useState, useEffect } from "react";
import CartComponent from "../components/Cart/CartComponent";
import EmptyCart from "../components/EmptyCart/EmptyCart";
import "../css/cartPage.css";

function CartPage(props) {
  let cartItem = JSON.parse(sessionStorage.getItem("cart"));
  const [cart, setCart] = useState();
  const [noItems, setNoItems] = useState();
  // all styling is in app.css
  const styles = {
    margin: "auto",
    width: "40%",
    marginLeft: "470px",
    marginTop: "50px",
    backgroundColor: "#74bde0",
  };
  const navigate = useNavigate();

  const back = () => {
    sessionStorage.removeItem("productId");
    navigate("/AllProducts");
  };

  useEffect(() => {
    if (cartItem === "" || cartItem === undefined || cartItem === null) {
      setNoItems(<EmptyCart />);
    } else {
      let userCart = cartItem.map((item) => (
        <CartComponent
          key={item.id}
          rerender={setCart}
          name={item.name}
          img={item.image}
          price={item.price}
          id={item.id}
          qty={item.qty}
        />
      ));
      setCart(userCart);
    }
  }, [props.Rerender]);

  return (
    <>
      <div style={{ width: "100%" }}>
        <h2 style={{ textAlign: "center", padding: "20px" }}>Your cart</h2>

        <hr style={{ marginBottom: "30px" }} />
        {noItems}
        {cart}
      </div>
      <div className="cartFooter">
        <p>Terms and conditions</p>
        <p>
          <a
            href="malito: sales@topmart.co.za"
            style={{ textDecoration: "none", color: "white" }}
          >
            Contact us
          </a>
        </p>
        <p>Privacy policy</p>
        <p>Payment options</p>
        <p>Delivery options</p>
        <hr />
        <h3>&copy; Top Mart 2022</h3>
      </div>
    </>
  );
}

export default CartPage;
