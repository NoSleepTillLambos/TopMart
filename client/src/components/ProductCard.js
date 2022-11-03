// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import SaleProductCard from "../Components/SubComponents/SaleProductCard";
// import NoSaleProductCard from "./SubComponents/NoSaleProductCard";

// function ProductCard(props) {
//   const navigate = useNavigate();
//   const [sale, setSale] = useState();
//   const [noSale, setNoSale] = useState();

//   const viewProduct = () => {
//     sessionStorage.setItem("productId", props.productId);
//     navigate("/IndividualProduct");
//   };

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

//   return (
//     <>
//       <div className="productCard" onClick={viewProduct}>
//         <img src={props.image} alt="palnt-image" />
//         <div className="cardInfo">
//           <h2 className="productName">{props.productName}</h2>

//           {sale}
//           {noSale}
//         </div>
//       </div>
//     </>
//   );
// }

// export default ProductCard;
