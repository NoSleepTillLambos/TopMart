import React from "react";
import DropZone from "react-dropzone";
import { AiOutlineFileAdd } from "react-icons/ai";

function FileUpload() {
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <DropZone>
        {({ getRootProps, getInputProps }) => {
          <div
            style={{
              width: "300px",
              height: "240px",
              border: "1px solid lightgray",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            {...getRootProps()}
          >
            {console.log("getRootProps", { ...getRootProps() })}
            {console.log("getInputProps", { ...getInputProps() })}
            <input {...getInputProps()} />
            <AiOutlineFileAdd type="plus" style={{ fontSize: "3rem" }} />
          </div>;
        }}
      </DropZone>
    </div>
  );
}

export default FileUpload;
