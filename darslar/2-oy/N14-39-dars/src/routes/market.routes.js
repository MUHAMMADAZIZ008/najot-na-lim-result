import { Router } from "express";
import { createMarketCon, getAllMarketCon, getByIdMarketCon, removeByIdMarketCon, updateMarketCon } from "../controllers/index.js";

export const marketRoutes = new Router();

marketRoutes.post("/", createMarketCon);
marketRoutes.get("/", getAllMarketCon);
marketRoutes.put("/:id", updateMarketCon);
marketRoutes.delete("/:id", removeByIdMarketCon);
marketRoutes.get("/:id", getByIdMarketCon);
