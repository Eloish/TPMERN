import express from "express";
import connectDB from "./src/db/dbConnect.js";
import productRoutes from "./src/routes/ProduitRoutes.js";
import userRoutes from "./src/routes/userRoute.js";
import errorHandler from "./src/middleware/errorHandler.js";
import * as dotenv from "dotenv";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

connectDB();

app.use(express.json());

app.use("/products", productRoutes);
app.use("/users", userRoutes);

app.use(errorHandler);

app.listen(PORT, () => console.log(`Serveur sur le port ${PORT}`));
