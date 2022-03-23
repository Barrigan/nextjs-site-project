import { Fragment } from "react";
import Head from "next/head";
import ImageUploadForm from "../components/upload-events/image-upload-form";

function UploadImageForm() {
  return (
    <Fragment>
      <Head>
        <title>Upload Image Form</title>
        <meta name="description" content="Form to Upload Images" />
      </Head>
      <ImageUploadForm />
    </Fragment>
  );
}

export default UploadImageForm;
