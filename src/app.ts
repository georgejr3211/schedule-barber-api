import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import { clienteRouter } from "./routes/cliente.route";
import "./database/connection";

export const app = express();

app.use(express.json());
app.use(cors());

app.use("/clientes", clienteRouter);
