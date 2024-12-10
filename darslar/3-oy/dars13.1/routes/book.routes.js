import { Router } from "express";
import {
  getAllData,
  searchData,
  getById,
  createData,
  updateData,
  removeData,
} from "../controllers/book.controllers.js";
import upload from "../middlewares/uploadFile.js";
const router = Router();

router.get("/", getAllData);
router.get("/search", searchData);
router.get("/:id", getById);
router.post("/", upload.single("avatar"), createData);
router.put("/:id", upload.single("avatar"), updateData);
router.delete("/:id", removeData);

export default router;
