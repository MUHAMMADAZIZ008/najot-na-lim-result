import express from "express"
import { loginCon, logoutCon, registerCon } from "../controller/auth.controller.js"
import { loginMiddlewars, registerMiddlewars } from "../middleware/index.js"


export const authRouter = express.Router()

authRouter.post("/register", registerMiddlewars, registerCon)
authRouter.post("/login", loginMiddlewars, loginCon)
authRouter.post("/logut", logoutCon)
