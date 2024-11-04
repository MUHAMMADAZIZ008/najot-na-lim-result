import { Router } from "express";
import { authGetRegisterCon, authLoginCon, authRegisterCon } from "../controllers/index.js";

export const authRoutes = new Router();

authRoutes.post("/register", authRegisterCon);
authRoutes.get("/register", authGetRegisterCon);
authRoutes.post("/login", authLoginCon);
