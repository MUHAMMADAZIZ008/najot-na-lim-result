import express from "express"
import { blogContorller } from "../controller/blog.controller.js"


export const blogRouter = express.Router()

blogRouter.get("/", blogContorller)

