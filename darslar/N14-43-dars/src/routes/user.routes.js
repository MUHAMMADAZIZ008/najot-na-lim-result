import express from "express"
import { authGuard, isSelfGuard, roleGuard } from "../middleware/index.js"
import { userController, userUpdateController } from "../controllers/user.controller.js"

export const usersRouter = express.Router()

usersRouter.post("/profile", authGuard, roleGuard(["admin"]), userController)
usersRouter.put("/profile/:id", authGuard, roleGuard(["admin", "user"]), isSelfGuard, userUpdateController)