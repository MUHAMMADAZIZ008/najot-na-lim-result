import express from "express"
import { authGuard, checkSchema, roleGuard } from "../middlewares/index.js"
import { loginSchema, userSchema } from "../modelsSchema/index.js"
import { adminController, checkOtp, loginAuthController, refreshTokenController, registerAuthController } from "../controller/index.js"

export const authRouter = express.Router()


authRouter.post("/register", checkSchema(userSchema), registerAuthController)
authRouter.post("/login", checkSchema(loginSchema), loginAuthController)
authRouter.post("/refreshToken", refreshTokenController)
authRouter.post("/admin", authGuard, roleGuard(["SuperAdmin"]), adminController)
authRouter.post("/vrifyOtp", checkOtp)