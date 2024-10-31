import express from "express"
import dotenv from "dotenv"
import {router} from "./routes/index.routes.js"

dotenv.config()

const app = express()

app.use("/book", router)

const port = process.env.port
app.listen(port, () =>{
    console.log(`running`);
})