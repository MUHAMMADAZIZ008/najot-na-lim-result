import express from "express"
import { creatUser, deleteUser, getAllUser, getUserById } from "../controller/user.contoller.js"

const router = express.Router()

router.get("/", getAllUser)


router.post("/", getUserById)

router.post("/:id", creatUser)

router.delete("/:id", deleteUser)



export default router