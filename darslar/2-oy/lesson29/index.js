import express from "express";
import routes from "./routes/index.routes.js";
import dotenv from "dotenv";

dotenv.config();
const app = express();
app.use(express.json());
app.use(express.static("./public"));

app.use("/api/v1", routes);

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Dasturimiz ${port}-portda ishga tushdi`);
});
