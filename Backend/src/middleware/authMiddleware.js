import jwt from "jsonwebtoken";

const authMiddleware = (req, res, next) => {
  const token = req.header("x-auth-token"); // Récupérer le token depuis le header

  if (!token) {
    return res
      .status(401)
      .json({ message: "Pas de token, autorisation refusée" }); // 401 Unauthorized
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // Ajouter l'utilisateur décodé à la requête
    next();
  } catch (error) {
    res.status(401).json({ message: "Token invalide" });
  }
};

export default authMiddleware;
