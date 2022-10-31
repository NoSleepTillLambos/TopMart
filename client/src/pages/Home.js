import React from "react";
import "../App.css";
import CarouselContainer from "../components/CarouselContainer";
import CardComponent from "../components/CardComponent";

function Home() {
  return (
    <>
      <CarouselContainer />

      <div className="introduction">
        <p>Browse our collections below</p>
        <br />
        <h2>Welcome to Top Mart</h2>
        <br />
        <p>We offer the top golfing products on the market today</p>
      </div>
      <CardComponent />
    </>
  );
}

export default Home;
