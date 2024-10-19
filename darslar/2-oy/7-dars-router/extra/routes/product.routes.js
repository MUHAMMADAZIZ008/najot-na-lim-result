import express from "express"
import { createData, getAllData, getDataById, updateData } from "../controller/product.controller.js"

const router = express.Router()


router.get("/", getAllData)

router.get("/:id", getDataById)

router.post("/", createData)

router.put("/", updateData)


export default router