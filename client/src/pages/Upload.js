import React from "react";
import "../css/Upload.css";
import { useState, useRef } from "react";
import { AiOutlineCloudUpload } from "react-icons/ai";
import { IconContext } from "react-icons";
import axios from "axios";
import "../App.css";
import { Button } from "@mui/material";

function Upload() {
  const [products, setProducts] = useState();
  const [updateProducts, setUpdateProducts] = useState(false);

  const [productName, setProductName] = useState();
  const [productPrice, setPrice] = useState();
  const [productDescription, setProductDescription] = useState();
  const [productImg, setProductImg] = useState();
  const [productRating, setProductRating] = useState();
  const [variationRight, setVariationRight] = useState();
  const [variationLeft, setVariationLeft] = useState();

  const [imageName, setImageName] = useState("Please upload an image");
  const [productImage, setProductImage] = useState();

  // useEffect(() => {
  //   axios
  //     .get("http://localhost:5000/api/allProducts")
  //     .then((res) => {
  //       let productData = res.data;
  //       console.log(productData);
  //       let URL = "http://localhost:5000/productImages/";
  //       let renderProducts = productData.map((item) => (
  //         <EditProductCard
  //           key={item._id}
  //           productId={item._id}
  //           productName={item.productName}
  //           productDescription={item.productDescription}
  //           price={item.price}
  //           stock={item.stock}
  //            editRender = { setRenderProducts };
  //         />
  //       ));

  //       setProducts(renderProducts);
  //       setUpdateProducts(false);
  //     })
  //     .catch((err) => console.log(err));
  // }, [updateProducts]);

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
  let defaultFormValues = [
    "name",
    "price",
    "left",
    "right",
    "rating",
    "description",
  ];

  const [formValues, setFormValues] = useState(defaultFormValues);

  const getValues = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const addProduct = (e) => {
    e.preventDefault();

    const payloadData = new FormData();

    let payload = {
      name: formValues["name"],
      price: +formValues["price"],
      description: formValues["description"],
      // image: imageName,
      rating: +formValues["rating"],
      variations: {
        right: formValues["right"],
        left: formValues["left"],
      },
    };

    payloadData.append("information", JSON.stringify(payload));
    payloadData.append("image", productImage);
    console.log(payload);
    console.log(payloadData);
    axios.post("http://localhost:5000/api/newProduct", payloadData);

    // renders true after useffect
    setUpdateProducts(true);
    document.getElementById("pName").value = "";
    document.getElementById("price").value = "";
    document.getElementById("right").value = "";
    document.getElementById("left").value = "";
    document.getElementById("rating").value = "";
    document.getElementById("productDescription").value = "";
  };

  return (
    <>
      <div className="display-products">
        <h3>Products currently on display: </h3>
      </div>
      <div className="AddProduct">
        <hr />
        Upload File
        <input type="file" id="imgUpload" onChange={getImageValue} />
        <div className="imgPrev">
          <img id="imgPrev"></img>
        </div>
        <p>{imageName}</p>
        <form>
          <input
            name="name"
            id="pName"
            onChange={getValues}
            placeholder="Product Name..."
            type="text"
          />
          <input
            id="price"
            name="price"
            onChange={getValues}
            placeholder="price"
            type="number"
          />

          <br />

          <label>Orientation</label>
          <input
            name="left"
            className="qty"
            onChange={getValues}
            id="left"
            placeholder="Orientation"
            type="text"
          />
          <input
            className="qty"
            onChange={getValues}
            id="right"
            name="right"
            placeholder="Orientation"
            type="text"
          />
          <br />

          <label>Rating</label>
          <input
            className="qty"
            onChange={getValues}
            id="rating"
            placeholder="Rating"
            name="rating"
          />
          <br />

          <textarea
            id="productDescription"
            name="description"
            onChange={getValues}
            placeholder="Product Description..."
          />

          <br />
          <Button onClick={addProduct}>Add Product!</Button>
        </form>
      </div>
      <div className="products"></div>
    </>
  );
}

export default Upload;
