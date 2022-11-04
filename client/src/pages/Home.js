import React from "react";
import "../App.css";
import { useState, useEffect } from "react";
import CarouselContainer from "../components/CarouselContainer";
import CardComponent from "../components/CardComponent";
import AllProductsCard from "../components/AllProductsCard/AllProductsCard";
import axios from "axios";
import "../components/AllProductsCard/AllProductsCard.css";

function Home(props) {
  const [renderProducts, setRenderProducts] = useState(false);
  const [products, setProducts] = useState();
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/allProducts")
      .then((res) => {
        let productData = res.data;
        let URL = "http://localhost:5000/productImages/";
        let renderProducts = productData.map(
          (item, idx) =>
            idx < 5 && (
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
            )
        );
        setProducts(renderProducts);
        setRenderProducts(false);
      })
      .catch((err) => console.log(err));
  }, [renderProducts]);
  return (
    <>
      <CarouselContainer />
      <div className="homeCon">
        <div className="introduction">
          <p>Browse our collections below</p>
          <br />
          <h2>Welcome to Top Mart</h2>
          <br />
          <p>We offer the top golfing products on the market today</p>
          <div style={{ marginTop: "-120px" }}>
            <CardComponent style={{ marginTop: "-100px" }} />
          </div>
        </div>

        <div className="latestProds">
          <h3>Our latest products on the market</h3>
          <hr style={{ marginTop: "20px" }} />
          {products}
        </div>

        <div className="homeFooter">
          <hr />
          <h3>&copy; Top Mart 2022</h3>
        </div>
      </div>
    </>
  );
}

export default Home;
