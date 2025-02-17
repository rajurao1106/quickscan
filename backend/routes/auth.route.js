import express from "express";
import {
	login,
	logout,
	signup,
	verifyEmail,
	forgotPassword,
	resetPassword,
	checkAuth,
	addData,
	takeData,
	deleteProduct,
} from "../controllers/auth.controller.js";
import { verifyToken } from "../middleware/verifyToken.js";

const router = express.Router();

router.get("/check-auth", verifyToken, checkAuth);

router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);

router.post("/verify-email", verifyEmail);
router.post("/forgot-password", forgotPassword);

router.post("/reset-password/:token", resetPassword);

router.post("/add-data", addData);
router.get("/take-data", takeData);
router.delete("/delete-product/:id", deleteProduct);

export default router;
