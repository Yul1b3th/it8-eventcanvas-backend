"use strict";
// app.ts
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const server_1 = __importDefault(require("./models/server"));
// Configurar dot.env
dotenv_1.default.config();
/* export const nombre = 'Yuli';
console.log(nombre); */
const server = new server_1.default;
server.listen();
//# sourceMappingURL=app.js.map