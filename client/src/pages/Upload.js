import React from "react";
import "../css/Upload.css";
import { useState, useRef, useEffect } from "react";
import axios from "axios";
import "../App.css";
import { Button } from "@mui/material";
import ProductCard from "../components/SubComps/ProductCard";

function Upload() {
  const [products, setProducts] = useState();
  const [updateProducts, setUpdateProducts] = useState(false);

  // RENDERING PRODUCTS ON CHANGE
  const [renderProducts, setRenderProducts] = useState();

  const productName = useRef(),
    productDescription = useRef(),
    productPrice = useRef(),
    productRating = useRef(),
    variationLeft = useRef(),
    variationRight = useRef();

  const [imageName, setImageName] = useState("Please upload an image");
  const [productImage, setProductImage] = useState();

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/allProducts")
      .then((res) => {
        let productData = res.data;
        console.log(productData);
        let URL = "http://localhost:5000/productImages/";
        let renderProducts = productData.map((item) => (
          <ProductCard
            key={item._id}
            productId={item._id}
            productName={item.productName}
            productDescription={item.productDescription}
            productPrice={item.productPrice}
            image={URL + item.image}
            editRender={setRenderProducts}
          />
        ));
        setProducts(renderProducts);
        setUpdateProducts(false);
      })
      .catch((err) => console.log(err));
  }, [updateProducts]);

  const getImageValue = (e) => {
    // where multer comes in
    let imageFile = e.target.files[0];
    setProductImage(imageFile);

    let value = e.target.value;
    let imageName = value.substring(12);
    setImageName(imageName);
    let reader = new FileReader();

    reader.onload = () => {
      let output = document.getElementById("imgPrev");
      output.src = reader.result;
    };

    reader.readAsDataURL(e.target.files[0]);
  };

  const addProduct = (e) => {
    e.preventDefault();

    const payloadData = new FormData();

    let payload = {
      productName: productName.current.value,
      productPrice: productPrice.current.value,
      productDescription: productDescription.current.value,
      productRating: productRating.current.value,
      variations: {
        right: variationRight.current.value,
        left: variationLeft.current.value,
      },
    };

    payloadData.append("information", JSON.stringify(payload));
    payloadData.append("image", productImage);

    axios.post("http://localhost:5000/api/newProduct", payloadData);

    // renders true after useffect
    setUpdateProducts(true);
    document.getElementById("pName").value = "";
    document.getElementById("price").value = "";
    document.getElementById("right").value = "";
    document.getElementById("left").value = "";
    document.getElementById("rating").value = "";
    document.getElementById("productDescription").value = "";
    document.getElementById("imgPrev").value = "";
  };

  return (
    <>
      <div className="display-products">
        <h3>Products currently on display: </h3>
        {products}
      </div>
      <div className="AddProduct">
        <hr />
        Upload File
        <input type="file" id="imgUpload" onChange={getImageValue} />
        <div className="imgPrev">
          <img id="imgPrev"></img>
        </div>
        <p>{imageName}</p>
        <form onSubmit={addProduct}>
          <input
            id="pName"
            ref={productName}
            placeholder="Product Name..."
            type="text"
          />
          <input
            id="price"
            ref={productPrice}
            placeholder="price"
            type="number"
          />

          <br />

          <label>Orientation</label>
          <input
            className="qty"
            ref={variationRight}
            id="right"
            placeholder="right"
            type="text"
          />
          <input
            className="qty"
            ref={variationLeft}
            id="left"
            placeholder="left"
            type="text"
          />
          <br />

          <label>Rating</label>
          <input
            className="qty"
            ref={productRating}
            id="rating"
            placeholder="Rating"
            type="number"
          />
          <br />

          <textarea
            id="productDescription"
            ref={productDescription}
            placeholder="Product Description..."
          />

          <br />
          <Button type="submit">Add Product!</Button>
        </form>
      </div>
      <div className="products"></div>
    </>
  );
}

export default Upload;
