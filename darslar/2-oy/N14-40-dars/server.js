import express from "express";
import path from "path"
import { application, db } from "./src/config/index.js";
import { authRoutes } from "./src/routes/index.js";
import mongoose, { connect } from "mongoose";
import cors from "cors"

const app = express();

app.use(cors({
  origin:"*",
  methods: "GET, HEAD, PUT,  PATCH,  POST, DELETE",
  preflightContinue: false,
  optionsSuccessStatus: 204
}))

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use("/static", express.static(path.join(import.meta.dirname, "src", "public")));

try {
  connect(db.uri);
  mongoose.connection.on("connected", () => console.log("connected"));
} catch (error) {
  mongoose.connection.on("error", (err) => {
    console.error(err);
  });
}

app.use("/auth", authRoutes);

app.use((err, req, res, next) => {
  console.error(err.message);
  res.status(500).send("Something broke!");
});

if (application.node_env === "development") {
  console.log("DEVELOPMENT");
}

app.listen(application.port, () => {
  console.log(`server is running on port ${application.port}`);
});
