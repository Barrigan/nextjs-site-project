import React, { useState } from "react";
import classes from "./image-upload-form.module.css";

function ImageUploadForm() {
  const [fileData, setFileData] = useState();

  const fileChangeHandler = (e) => {
    setFileData(e.target.files[0]);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();

    // Handle File Data from the state Before Snding
    const data = new FormData();

    data.append("image", fileData);

    fetch("api/uploadImage", {
      method: "POST",
      body: data,
    })
      .then((result) => {
        console.log("File Sent Successful");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <div className={classes.uploadFile}>
      <h1>File Uplading Form</h1>
      <form className={classes.form} onSubmit={onSubmitHandler}>
        <input type="file" onChange={fileChangeHandler} />
        <br />
        <br />
        <div className={classes.actions}>
          <button type="submit">Submit File to Backend</button>
        </div>
      </form>
    </div>
  );
}

export default ImageUploadForm;
