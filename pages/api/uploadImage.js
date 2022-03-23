const multer = require("multer");

//import { MongoClient } from "mongodb";

const fileStorageEngine = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "/images");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "--" + file.originalname);
  },
});

const upload = multer({ storage: fileStorageEngine });

function uploadImage(req, res) {
  if (req.method === "POST") {
    const { file } = req.body;

    console.log("req.body: ", req.body);
    console.log("req.body.file: ", req.body.file);
    console.log("req.body.image: ", req.body.image);
    console.log("Uploading image...");

    try {
      let uploadedFile = upload.single("image");
      console.log("Uploaded File:", uploadedFile);
      //res.send("Single File upload success");
      res.status(200).json({ message: "Single File upload success" });
    } catch (error) {
      res.status(500).json({ message: "Error uploading Single File" });
    } /*

    /* UP TO HERE UPDATED */ /*
    /*
    if (
      !email ||
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !message ||
      message.trim() === ""
    ) {
      res.status(422).json({ message: "Invalid input." });
      return;
    }

    // Store it in a database
    const newMessage = { email, name, message };

    let client;

    const connectionString = `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@${process.env.mongodb_clustername}.l9qi7.mongodb.net/${process.env.mongodb_database}?retryWrites=true&w=majority`;

    try {
      client = await MongoClient.connect(connectionString);
      / * client = await MongoClient.connect(
        "mongodb+srv://nextjs-user:L0ngAndBeautifulPassw0rd!@cluster0.l9qi7.mongodb.net/NextJSSection11?retryWrites=true&w=majority"
      ); * / 
    } catch (error) {
      res.status(500).json({ message: "Cold not connect to the database" });
      return;
    }

    const db = client.db(process.env.mongodb_database);
    try {
      const result = await db.collection("form-messages").insertOne(newMessage);
      newMessage.id = result.insertedId;
    } catch (error) {
      client.close();
      res.status(500).json({ message: "Storing message failed!" });
      return;
    }

    client.close();

    console.log(newMessage);
    res
    .status(201)
    .json({ message: "Successfully stored message!", message: newMessage });
    */
  }
}

export default uploadImage;
