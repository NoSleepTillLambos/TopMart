import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../SubComps/ProductCard.css";
import IndividualClub from "../../pages/IndividualClub";
import { Button } from "@mui/material";

function ProductCard(props) {
  const navigate = useNavigate();
  //   const [sale, setSale] = useState();
  //   const [noSale, setNoSale] = useState();

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

  return (
    <>
      <div className="productCard">
        <img src={props.image} alt="irons" id="cardImg" />
        <div className="cardInfo">
          <h3 className="productName" style={{ marginTop: "10px" }}>
            {props.productName}
          </h3>
          <p>R{props.productPrice}</p>
          <p>{props.productDescription}</p>

          <Button
            variant="contained"
            style={{
              height: "30px",
              width: "80px",
              marginTop: "15px",
              marginLeft: "10px",
            }}
            onClick={viewProduct}
          >
            View
          </Button>

          {/* {sale}
          {noSale} */}
        </div>
      </div>
    </>
  );
}

export default ProductCard;
