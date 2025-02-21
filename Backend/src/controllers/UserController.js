import { User, userValidation } from "../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const registerUser = async (req, res) => {
    try {
        const { username, email, password } = req.body;

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new User({ username, email, password: hashedPassword });
        const savedUser = await newUser.save();

        // Optionnel : Générer un token JWT directement après l'inscription
        const token = jwt.sign({ userId: savedUser._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.status(201).json({ user: savedUser, token }); // Envoyer l'utilisateur et le token

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).json({ message: "Email ou mot de passe incorrect" });
        }

        const validPassword = await bcrypt.compare(password, user.password);
        if (!validPassword) {
            return res.status(401).json({ message: "Email ou mot de passe incorrect" });
        }

        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.json({ token });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getUser = async (req, res) => {
    try {
        const user = await User.findById(req.user).select("-password"); // req.user contient l'id
        res.json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export { registerUser, loginUser, getUser };