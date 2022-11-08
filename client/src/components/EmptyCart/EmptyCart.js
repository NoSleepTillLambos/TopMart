import React from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

function EmptyCart() {
  // use navigate
  const navigate = useNavigate();

  const styles = {
    margin: "auto",
    width: "40%",
    marginLeft: "470px",
    marginTop: "50px",
    backgroundColor: "#74bde0",
  };

  const back = () => {
    sessionStorage.removeItem("productId");
    navigate("/AllProducts");
  };
  return (
    <>
      <div style={{ width: "100%" }}>
        <h2 style={{ textAlign: "center", marginTop: "180px" }}>
          There is nothing in your cart at the moment...
        </h2>
        <Button
          type="submit"
          variant="contained"
          id="add-cart"
          onClick={back}
          style={styles}
        >
          Continue shopping !
        </Button>
      </div>
      ;
    </>
  );
}

export default EmptyCart;
