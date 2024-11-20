import express from "express";
import dotenv from "dotenv";
import routes from "./routes/index.routes.js";
import mongoose from "mongoose";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import { logger } from "./helpers/logger.js";

dotenv.config();
const app = express();

// logger.info("Info log")
// logger.log("info", "Info log")

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


//unhadles error

process.on("unhandledRejection", (err) =>{
  console.log(`unhandledRejection: ${err.message}`);
  process.exit(1)
  
})

//uncaughtException
process.on("uncaughtException", (err) =>{
  console.log(`uncaughtException: ${err.message}`);
  process.exit(1)
  
})

const port = process.env.PORT || 3001;
const db_url = process.env.DATABASE_URI;
app.listen(port, async () => {
  try {
    await mongoose.connect(db_url);
    logger.info("Connecting to DB")
    logger.info(`Project is running on port: ${port}`)
  } catch (error) {
    console.log(error);
  }
});
