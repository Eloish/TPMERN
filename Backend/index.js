import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./src/db/dbConnect.js";
import { date, monPath } from "./src/middleware/middleware.js";
import routes from "./src/routes/ProduitRoutes.js";

dotenv.config();
connectDB();

const app = express();

const port = process.env.PORT;
app.use(express.json());
app.use(cors())

app.use(monPath);
app.use(routes);

app.listen(port, () =>
  console.log(`Le serveur est a l'écoute sur le port ${port}`)
);
