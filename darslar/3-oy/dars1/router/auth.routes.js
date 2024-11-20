import express from "express"
import { LoginSchema, RegisteraSchema } from "../schema/index.js"

const authRouter = express.Router()


router.post("/register", authMiddleweare(RegisteraSchema))
router.post("/login", authMiddleweare(LoginSchema))
