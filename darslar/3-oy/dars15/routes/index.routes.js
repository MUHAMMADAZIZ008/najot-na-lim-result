import { Router } from "express";
import bookRoutes from "./book.routes.js";
import userRoutes from "./user.routes.js";
const router = Router();

router.use("/book", bookRoutes);
router.use("/user", userRoutes);

export default router;
