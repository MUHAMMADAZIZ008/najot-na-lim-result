import express from "express"
import {authRouter} from "./router/indes.js"

const app = express()
app.use(express.json())

app.use("/auth", authRouter)

app.listen(3000, ()=>{
    console.log("server is running");
    
})