import mongoose from "mongoose";
import Joi from "joi";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  nom: {
    type: String,
    required: true,
  },
});

const User = mongoose.model("User", userSchema);

const userValidation = Joi.object({
  username: Joi.string().required().trim().messages({
    "string.empty": "Le nom d'utilisateur est obligatoire",
  }),
  password: Joi.string().required().messages({
    "string.empty": "Le mot de passe est obligatoire",
  }),
  email: Joi.string().email().required().trim().messages({
    "string.empty": "L'email est obligatoire",
    "string.email": "L'email n'est pas valide",
  }),
  nom: Joi.string().required().trim().messages({
    "string.empty": "Le nom est obligatoire",
  }),
  // ... validation des autres champs
});

export { User, userValidation };
