import express from "express";
import productRoutes from "./product.routes.js";
import booksRoutes from "./books.routes.js";

const router = express.Router();

router.use("/products", productRoutes);
router.use("/books", booksRoutes);

export default router;
