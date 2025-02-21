import express from "express";
const router = express.Router();
import {
  registerUser,
  loginUser,
  getUser,
  validateUser,
} from "../controllers/UserController.js";
import authMiddleware from "../middleware/authMiddleware.js"; // Middleware d'authentification

// Routes
router.post("/register", validateUser, registerUser);
router.post("/login", loginUser);
router.get("/me", authMiddleware, getUser); // Route protégée

export default router;