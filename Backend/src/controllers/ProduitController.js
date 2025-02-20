import { Product, productValidation } from "../models/produit.js";

/**
 * Route Get pour récupérer la liste des produits
 * @param {} req
 * @param {*} res La liste des produits
 */
export const getProducts = async (req, res) => {
  const products = await Product.find();
  res.send(products);
};

/**
 * Middleware pour récupérer un produit par son id
 * @param {*} req
 * @param {*} res
 * @returns
 */
export const getProductByID = async (req, res) => {
  try {
    const productID = req.params.id.trim().replace(/^:/, "");
    const product = await Product.findById(productID);

    if (!product) {
      return res.status(404).json({ message: "Produit non trouvé" });
    }
    res.status(200).json(product);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Une erreur est survenue" });
  }
};

/**
 * Middleware pour ajouter un produit
 * @param {} req
 * @param {*} res
 * @returns
 */
export const newProduct = async (req, res) => {
  try {
    const { error, value } = productValidation.validate(req.body);

    if (error) {
      return res.status(400).json({ message: error.details[0].message });
    }

    const newProduct = new Product(req.body);
    const savedProduct = await newProduct.save();
    res.status(201).json(savedProduct);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Une erreur est survenue lors de la sauvegarde" });
  }
};

export const delProduct = async (req, res) => {
  try {
    const deletedProduct = await Product.findByIdAndDelete(req.params.id);
    if (!deletedProduct) {
      return res.status(404).json({ message: "Produit non trouvé" });
    }
    res.status(204).end({message: "Produit supprimé avec succès" });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Une erreur est survenue lors de la suppression",
    });
  }
};

import mongoose from "mongoose"; // Assurez-vous d'importer mongoose

export const updateProduct = async (req, res) => {
  try {
    const { error, value } = productValidation.validate(req.body);
    if (error) {
      return res.status(400).json({ message: error.details[0].message });
    }

    const productId = req.params.id.replace(":", ""); // Nettoyage de l'ID
    if (!mongoose.Types.ObjectId.isValid(productId)) {
      return res.status(400).json({ message: "ID de produit invalide" });
    }

    const updatedProduct = await Product.findByIdAndUpdate(
      productId,
      {
        name: req.body.name,
        price: req.body.price,
        description: req.body.description,
        category: req.body.category,
        stock: req.body.stock,
      },
      { new: true }
    );

    if (!updatedProduct) {
      return res.status(404).json({ message: "Produit non trouvé" });
    }
    res.status(200).json(updatedProduct);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Une erreur est survenue lors de la mise à jour",
    });
  }
};
