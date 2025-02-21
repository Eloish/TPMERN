import express from "express";
import cors from "cors";
import connectDB from "./src/db/dbConnect.js";
import { date, monPath } from "./src/middleware/middleware.js";
import routes from "./src/routes/ProduitRoutes.js";
import userRoutes from "./src/routes/userRoute.js";
import errorHandler from "./src/middleware/errorHandler.js";
import * as dotenv from "dotenv";

import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

dotenv.config();
connectDB();

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

app.use(monPath);
app.use(routes);
app.use("/users", userRoutes);

app.use(errorHandler);

app.listen(port, () =>
  console.log(`Le serveur est a l'écoute sur le port ${port}`)
);
