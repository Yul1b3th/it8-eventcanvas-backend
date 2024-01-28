// app.ts

import dotenv from "dotenv";
import Server from "./models/server";

// Configurar dot.env
dotenv.config();

/* export const nombre = 'Yuli';
console.log(nombre); */

const server = new Server

server.listen();
