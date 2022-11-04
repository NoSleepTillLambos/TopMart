import React from "react";
import "../css/allProducts.css";
import axios from "axios";
import AllProductsCard from "../components/AllProductsCard/AllProductsCard";
import { useState, useEffect } from "react";

function Product(props) {
  const [renderProducts, setRenderProducts] = useState(false);
  const [products, setProducts] = useState();
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/allProducts")
      .then((res) => {
        let productData = res.data;
        console.log(productData);
        let URL = "http://localhost:5000/productImages/";
        let renderProducts = productData.map((item) => (
          <AllProductsCard
            key={item._id}
            productId={item._id}
            productName={item.productName}
            productDescription={item.productDescription}
            productPrice={item.productPrice}
            productRating={item.productRating}
            image={URL + item.image}
            hand={item.hand}
            editRender={props.setRenderProducts}
          />
        ));
        setProducts(renderProducts);
        setRenderProducts(false);
      })
      .catch((err) => console.log(err));
  }, [renderProducts]);
  return (
    <>
      <div className="productCon">
        <h2>New releases</h2>
        <hr />
        <h3>Browse our latest releases and new products</h3>
        <div>{products}</div>
      </div>
      {/* footer element */}
      <div className="footer">
        <hr />
        <h3>&copy; Top Mart 2022</h3>
      </div>
    </>
  );
}

export default Product;
