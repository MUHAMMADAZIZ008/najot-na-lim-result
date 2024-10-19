import express from "express";
import {
  getAllData,
  getDataById,
  createNewData,
  updateData,
} from "../controllers/books.controllers.js";

const router = express.Router();

router.get("/", getAllData);
router.get("/:id", getDataById);
router.post("/", createNewData);
router.put("/:id", updateData);

export default router;
