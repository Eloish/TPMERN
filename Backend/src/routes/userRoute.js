import express from "express";
import {
  registerUser,
  loginUser,
  getUser,
} from "../controllers/userController.js";
import authMiddleware from "../middleware/authMiddleware.js";
import { userValidation } from "../models/User.js"; // Import du schéma de validation

const router = express.Router();

router.post(
  "/register",
  (req, res, next) => {
    const { error } = userValidation.validate(req.body);
    if (error) {
      return res.status(400).json({ message: error.details[0].message });
    }
    next(); // Si la validation réussit, passer au contrôleur
  },
  registerUser
);

router.post("/login", loginUser);
router.get("/me", authMiddleware, getUser);

export default router;
