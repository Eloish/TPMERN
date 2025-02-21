import express from "express";
import {
  registerUser,
  loginUser,
  getUser,
} from "../controllers/userController.js";
import authMiddleware from "../middleware/authMiddleware.js";
import { userValidation } from "../models/User.js"; // Import du schéma de validation

const router = express.Router();

// Validation des données d'inscription
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
); // Route d'inscription

router.post("/login", loginUser); // Route de connexion
router.get("/me", authMiddleware, getUser); // Route protégée pour récupérer les infos de l'utilisateur

export default router;