import express from "express"
import { config } from "dotenv"
import { authRouter, blogRouter } from "./src/router/index.js"
import { connectMonog } from "./src/db/db.js"


config()


const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: true}))


app.use("/auth", authRouter)
app.use("/blogs", blogRouter)

app.use((err, req, res, next) =>{
    if(err){
        return res.status(500).send("somthing wring")
    }
})

const port = process.env.PORT
const mongo_uri = process.env.MONGO_URI
app.listen(port, async() =>{
    await connectMonog(mongo_uri)
    console.log(`server is runnig on ${port}`);
})