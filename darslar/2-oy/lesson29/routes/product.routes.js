import express from "express";
import {
  getAllData,
  getDataById,
  createNewData,
  updateData,
  searchData,
} from "../controllers/product.controllers.js";

const router = express.Router();

router.get("/", getAllData);
router.get("/search", searchData);
router.get("/:id", getDataById);
router.post("/", createNewData);
router.put("/:id", updateData);

export default router;
