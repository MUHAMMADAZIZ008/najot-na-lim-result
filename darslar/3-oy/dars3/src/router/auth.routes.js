import express from "express"
import { loginContoller, registerContoller } from "../controller/index.js"
import { authGuard } from "../middleware/authMid.js"
import { roleGuard } from "../middleware/guardMidd.js"


export const authRouter = express.Router()

authRouter.post("/regiter", registerContoller)
authRouter.post("/login", loginContoller)
authRouter.get("/me", authGuard, roleGuard(["admin", "moderator"]), (req,res) =>{
    res.send("ok")
})

