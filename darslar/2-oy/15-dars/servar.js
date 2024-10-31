import express from "express"
import { basicAuthMid } from "./middlewere.js"
const app = express()

app.post("/api/v1/users", basicAuthMid,(req, res) =>{
    res.send("ok")
})

app.listen(3000, ()=>{
    console.log(3000);
})