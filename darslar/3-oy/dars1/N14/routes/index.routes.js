import { Router } from "express";
import bookRoutes from "./book.routes.js";
const router = Router();

router.use("/book", bookRoutes);

export default router;
