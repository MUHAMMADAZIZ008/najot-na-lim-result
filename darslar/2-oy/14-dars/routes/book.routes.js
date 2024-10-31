import { Router } from "express";
import { createData, deleteData, getAllData, getById, searchData, updataData }from "../controller/index.js"
export const router = Router()

router.get("/", getAllData)
router.get("/search", searchData)
router.get("/:id", getById)
router.post("/", createData)
router.put("/:id", updataData)
router.delete("/:id", deleteData)
