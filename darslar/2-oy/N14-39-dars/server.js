import express from "express";
import { config } from "dotenv";
import { application, db } from "./src/config/index.js";
import {
  authRoutes,
  categoryRoutes,
  marketRoutes,
  productRoutes,
} from "./src/routes/index.js";
import mongoose, { connect } from "mongoose";

config()
const app = express();

app.use(express.json());

try {
  connect(db.uri);
  mongoose.connection.on("connected", () => console.log("connected"));
} catch (error) {
  mongoose.connection.on("error", (err) => {
    console.error(err);
  });
}

app.use("/auth", authRoutes);
app.use("/category", categoryRoutes);
app.use("/product", productRoutes);
app.use("/market", marketRoutes);

app.use((err, req, res, next) => {
  console.error(err.message);
  res.status(500).send("Something broke!");
});
// app.use((err, res, req , next) => {

//   if (err) {
//     return res.status(404).send(err.message);
//   }

//   return res.status(404).send("UZIRASIZ!");
// });

if (application.node_env === "development") {
  console.log("DEVELOPMENT");
}

app.listen(application.port, () => {
  console.log(`server is running on port ${application.port}`);
});
