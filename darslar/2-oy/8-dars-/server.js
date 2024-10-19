import express from "express"
import { authRouter, debtRouter, profileRouter } from "./routes/index.js"

const app = express()
import dotenv from "dotenv"
dotenv.config()

const PORT = process.env.PORT


app.use("/auth", authRouter)
app.use("/profile", profileRouter)
app.use("/debt", debtRouter)

app.use((err, req, res, next) =>{
    if(err){
        res.status(400).send({massage: err.massage})
    }
})

app.listen(PORT, () =>{
    console.log(`Server ${PORT} da ishlamoqda`);
})