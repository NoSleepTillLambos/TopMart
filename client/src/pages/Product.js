import React, { useEffect, useState } from "react";
import "../css/callaway.css";
import "../App.css";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import callaway1 from "../assets/individualIrons/callaway1.png";
import callaway2 from "../assets/individualIrons/callaway2.png";
import callaway3 from "../assets/individualIrons/callaway3.png";
import callaway4 from "../assets/individualIrons/callaway4.png";

import taylormade1 from "../assets/individualIrons/taylormade1.png";
import taylormade2 from "../assets/individualIrons/taylormade2.png";
import taylormade3 from "../assets/individualIrons/taylormade3.png";
import taylormade4 from "../assets/individualIrons/taylormade4.png";

import cobra1 from "../assets/individualIrons/cobra1.png";
import cobra2 from "../assets/individualIrons/cobra2.png";
import cobra3 from "../assets/individualIrons/cobra3.png";
import cobra4 from "../assets/individualIrons/cobra4.png";

import titelist1 from "../assets/individualIrons/titelist1.png";
import titelist2 from "../assets/individualIrons/titelist2.png";
import titelist3 from "../assets/individualIrons/titelist3.png";
import titelist4 from "../assets/individualIrons/titelist4.png";

function Product() {
  const styles = {
    imageOne: {
      backgroundImage: `url(${callaway1})`,
    },
    imageTwo: {
      backgroundImage: `url(${callaway2})`,
    },
    imageThree: {
      backgroundImage: `url(${callaway3})`,
    },
    imageFour: {
      backgroundImage: `url(${callaway4})`,
    },
  };

  const taylormadeStyles = {
    tOne: {
      backgroundImage: `url(${taylormade1})`,
    },
    tTwo: {
      backgroundImage: `url(${taylormade2})`,
    },
    tThree: {
      backgroundImage: `url(${taylormade3})`,
    },
    tFour: {
      backgroundImage: `url(${taylormade4})`,
    },
  };

  const cobraStyles = {
    cOne: {
      backgroundImage: `url(${cobra1})`,
    },
    cTwo: {
      backgroundImage: `url(${cobra2})`,
    },
    cThree: {
      backgroundImage: `url(${cobra3})`,
    },
    cFour: {
      backgroundImage: `url(${cobra4})`,
    },
  };

  const titelistStyles = {
    tiOne: {
      backgroundImage: `url(${titelist1})`,
    },
    tiTwo: {
      backgroundImage: `url(${titelist2})`,
    },
    tiThree: {
      backgroundImage: `url(${titelist3})`,
    },
    tiFour: {
      backgroundImage: `url(${titelist4})`,
    },
  };

  useEffect(() => {});

  return (
    <>
      <h3>Callaway Products</h3>
      <hr />
      <div className="callaway-products">
        <Box
          className="box"
          sx={{
            objectFit: "contain",
            display: "flex",
            flexWrap: "wrap",
            "& > :not(style)": {
              m: 1,
              marginLeft: "5px",
              width: 300,
              height: 300,
            },
          }}
        >
          <Paper style={styles.imageOne} elevation={2}></Paper>
          <Paper style={styles.imageTwo} elevation={2}></Paper>
          <Paper style={styles.imageThree} elevation={2}></Paper>
          <Paper style={styles.imageFour} elevation={2}></Paper>
        </Box>
      </div>

      <h3>Taylormade Products</h3>
      <hr />
      <div className="taylormade-products">
        <Box
          className="box"
          sx={{
            display: "flex",
            flexWrap: "wrap",
            "& > :not(style)": {
              m: 1,
              marginLeft: "5px",
              width: 300,
              height: 300,
            },
          }}
        >
          <Paper style={taylormadeStyles.tOne} elevation={2}></Paper>
          <Paper style={taylormadeStyles.tTwo} elevation={2}></Paper>
          <Paper style={taylormadeStyles.tThree} elevation={2}></Paper>
          <Paper style={taylormadeStyles.tFour} elevation={2}></Paper>
        </Box>
      </div>

      <h3>Cobra Products</h3>
      <hr />
      <div className="cobra-products">
        <Box
          className="box"
          sx={{
            display: "flex",
            flexWrap: "wrap",
            "& > :not(style)": {
              m: 1,
              marginLeft: "5px",
              width: 300,
              height: 300,
            },
          }}
        >
          <Paper style={cobraStyles.cOne} elevation={2}></Paper>
          <Paper style={cobraStyles.cTwo} elevation={2}></Paper>
          <Paper style={cobraStyles.cThree} elevation={2}></Paper>
          <Paper style={cobraStyles.cFour} elevation={2}></Paper>
        </Box>
      </div>

      <h3>Titelist Products</h3>
      <hr />
      <div className="titelist-products">
        <Box
          className="box"
          sx={{
            display: "flex",
            flexWrap: "wrap",
            "& > :not(style)": {
              m: 1,
              marginLeft: "5px",
              width: 300,
              height: 300,
            },
          }}
        >
          <Paper style={titelistStyles.tiOne} elevation={2}></Paper>
          <Paper style={titelistStyles.tiTwo} elevation={2}></Paper>
          <Paper style={titelistStyles.tiThree} elevation={2}></Paper>
          <Paper style={titelistStyles.tiFour} elevation={2}></Paper>
        </Box>
      </div>
    </>
  );
}

export default Product;
