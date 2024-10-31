import express from "express"

export const usersRouts = express.Router()

usersRouts.post("/register", usersMiddlewares, usersController)