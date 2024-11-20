import { Router } from "express";
import {
  getAllData,
  searchData,
  getById,
  createData,
  updateData,
  removeData,
  loginData,
  refreshToken,
  checkOtp,
  activeUser,
  restorePassword,
} from "../controllers/user.controllers.js";
import { checkUserGuard } from "../middlewares/authUser.guard.js";
import { roleGuard } from "../middlewares/role.guard.js";
import { isSelfOrAdminGuard } from "../middlewares/isSelfOrAdmin.guard.js";
const router = Router();

router.get("/", checkUserGuard, roleGuard, getAllData);
router.get("/search", searchData);
router.get("/refresh", refreshToken);
router.get("/avtivate/:id", activeUser);
router.get("/:id", getById);
router.post("/signup", createData);
router.post("/check-otp", checkOtp);
router.post("/login", loginData);
router.post("/restorePassword", restorePassword);
router.put("/:id", checkUserGuard, isSelfOrAdminGuard, updateData);
router.delete("/:id", checkUserGuard, roleGuard, removeData);

export default router;
