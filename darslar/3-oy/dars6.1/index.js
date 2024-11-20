import express from "express";
import dotenv from "dotenv";
import routes from "./routes/index.routes.js";
import mongoose from "mongoose";
import helmet from "helmet";
import rateLimit from "express-rate-limit";

dotenv.config();
const app = express();

const limiter = rateLimit({
  windowMs: 1000 * 60,
  max: 100,
  message: "Ushbu IP dan so'rov ko'payib ketdi",
});

app.use(express.json());
app.use(express.static("public"));
app.use(helmet());
app.use(limiter);

app.use("/api/v1", routes);

// Catch-all for undefined routes
app.use((req, res, next) => {
  res.status(404).json({ error: "Route not found" });
});

// Error-handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    message: "Oops, something went wrong.",
    error: err.message,
  });
});

const port = process.env.PORT || 3001;
const db_url = process.env.DATABASE_URI;
app.listen(port, async () => {
  try {
    await mongoose.connect(db_url);
    console.log("Connecting to DB");
    console.log("Project is running on port:" + port);
  } catch (error) {
    console.log(error);
  }
});
