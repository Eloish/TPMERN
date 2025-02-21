import { User, userValidation } from "../models/User.js";
import bcrypt from "bcrypt"; // Pour le hashage des mots de passe
import jwt from "jsonwebtoken"; // Pour l'authentification JWT

// Fonction pour la validation des données utilisateur
const validateUser = (req, res, next) => {
  const { error } = userValidation.validate(req.body);
  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }
  next(); // Si la validation réussit, passer au contrôleur
};

// Inscription d'un nouvel utilisateur
const registerUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // Hacher le mot de passe avant de l'enregistrer
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });

    const savedUser = await newUser.save();
    res.status(201).json(savedUser); // 201 Created
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Connexion d'un utilisateur
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Trouver l'utilisateur par email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: "Email ou mot de passe incorrect" }); // 401 Unauthorized
    }

    // Vérifier le mot de passe
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      return res.status(401).json({ message: "Email ou mot de passe incorrect" });
    }

    // Créer et attribuer un token JWT
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET); // JWT_SECRET dans .env
    res.json({ token });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Récupérer les informations de l'utilisateur (protégé par authentification)
const getUser = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password"); // Exclure le mot de passe
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export { registerUser, loginUser, getUser, validateUser };