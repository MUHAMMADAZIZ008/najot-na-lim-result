import express from "express"
import routesIndex from "./routes/index.routes.js"
import dotenv from "dotenv"
const app = express()


dotenv.config()
app.use(express.json())
app.use(express.static("./public"))

app.use("/api/v1", routesIndex)


const port = process.env.PORT
app.listen(port, () =>{
    console.log(`Dasturimz ${port}-portda ishga tushdi`);
})