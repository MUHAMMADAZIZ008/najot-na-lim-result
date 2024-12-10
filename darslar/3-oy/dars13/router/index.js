import { Router } from "express";


export const todoRouter = new Router()

todoRouter.get("/todo")
todoRouter.get("/todo/:id")
todoRouter.post("/todo")
todoRouter.put("/todo/:id")
todoRouter.delete("/todo/:id")