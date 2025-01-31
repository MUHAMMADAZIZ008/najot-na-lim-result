import { Router } from "express";
import {
  getAllData,
  searchData,
  getById,
  createData,
  updateData,
  removeData,
} from "../controllers/index.js";
import upload, { createDataMidd } from "../middlewares/uploadFile.js";
import { valSchema } from "../models/book.model.js";
const router = Router();

router.get("/", getAllData);
router.get("/search", searchData);
router.get("/:id", getById);
// router.post("/", upload.single("avatar"), createData);
router.post("/", createDataMidd(valSchema), createData);
router.put("/:id", upload.single("avatar"), updateData);
router.delete("/:id", removeData);

export default router;
