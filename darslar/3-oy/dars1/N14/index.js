import express from "express";
import dotenv from "dotenv";
import routes from "./routes/index.routes.js";
import mongoose from "mongoose"
dotenv.config();
const app = express();

app.use(express.json());
app.use(express.static("public"));

app.use("/api/v1", routes);

const port = process.env.PORT || 3001;
const db_url = "mongodb+srv://ismoil:muhiddinovismoil@mongodb-demo.oo2yq.mongodb.net/"
app.listen(port, async() => {
  try{
    await mongoose.connect(db_url)
    console.log("connect to db");
    console.log("Project is running on port:" + port);
  }
  catch(e){
    console.log(e);
  }
});
