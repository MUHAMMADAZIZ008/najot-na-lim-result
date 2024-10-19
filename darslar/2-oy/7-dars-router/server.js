import express from "express"
import userRouter from "./routes/users.router.js"
import productRouter from "./routes/product.router.js"

const app = express()
app.use("/users", userRouter)
app.use("/products", productRouter)

app.use((err, req, res, next) =>{
    const {masage, name, stack} = err
    res.status(401).send({masage, name, stack})
})

app.listen(3000, () =>{
    console.log(3000);
})