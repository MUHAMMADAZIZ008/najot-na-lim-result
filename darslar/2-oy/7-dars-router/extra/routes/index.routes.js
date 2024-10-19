import express from "express"
import praductRouter from "./product.routes.js"
import booksRouter from "./books.routes.js"
const router = express()

router.use("/products", praductRouter)
router.use("/books", booksRouter)

export default router