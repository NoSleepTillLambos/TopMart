import React, { useState } from "react";
import "../css/Upload.css";
import { Typography, Form, Input } from "antd";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import FileUpload from "../components/utils/FileUpload";

const { Title } = Typography;
const { TextArea } = Input;

function Item() {
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productDescription, setProductDescription] = useState(0);

  const onTitleChange = (event) => {
    setProductName(event.currentTarget.value);
  };

  const onDescriptionChange = (event) => {
    setProductDescription(event.currentTarget.value);
  };

  const onPriceChange = (event) => {
    setProductPrice(event.currentTarget.value);
  };
  return (
    <>
      <div className="create">
        <h2>Add a New Product</h2>
        <form>
          <label>Product Name:</label>
          <input type="text" required />
          <label>Product Price:</label>
          <textarea required></textarea>
          <label>Product:</label>
          <select>
            <option value="mario">mario</option>
            <option value="yoshi">yoshi</option>
          </select>
          <button>Add Product</button>
        </form>
      </div>
    </>
  );
}

export default Item;
