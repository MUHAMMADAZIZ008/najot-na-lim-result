import express from "express";
import morgan from "morgan";
import { authRouter, blogRouter, usersRouter } from "./routes/index.js";
import { config } from "dotenv";
import helmet from "helmet";
import{rateLimit} from "express-rate-limit"
config()
const app = express();

const limit = retaLimit({
    windowMs: 1000,
    max: 3,
    message: "ushu IP dan so'rov ko'payib ketti"
})

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(helmet());
app.use(limit);

app.use("/auth", authRouter);
app.use("/blog", blogRouter);
app.use("/api/v1/users", usersRouter);

app.use((err, req, res, next) => {
  if (err) {
    return res.status(500).send(err.message);
  }
});

export default app