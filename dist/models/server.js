"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const usuario_1 = __importDefault(require("../routes/usuario"));
const marker_1 = __importDefault(require("../routes/marker"));
const event_1 = __importDefault(require("../routes/event"));
const sales_1 = __importDefault(require("../routes/sales"));
const connection_1 = __importDefault(require("../db/connection"));
class Server {
    constructor() {
        this.apiPaths = {
            usuarios: '/api/usuarios',
            markers: '/api/markers',
            events: '/api/events',
            sales: '/api/sales',
        };
        this.app = (0, express_1.default)();
        this.port = process.env.PORT || '8000';
        // Métodos iniciales
        this.dbConnection();
        this.middlewares();
        this.routes(); // Definir mis rutas
    }
    // Conectar a la base de datos
    dbConnection() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield connection_1.default.authenticate();
                // console.log("Database online");
            }
            catch (error) {
                throw new Error(error);
            }
        });
    }
    // middlewares, son funciones que se van a ejecutar antes de que pasen nuestras rutas
    middlewares() {
        // Configurar CORS
        this.app.use((0, cors_1.default)());
        // Parseo del body, lectura del body
        this.app.use(express_1.default.json());
        // Carpeta pública, es para servir contenido estatico
        this.app.use(express_1.default.static('public'));
    }
    routes() {
        this.app.use(this.apiPaths.usuarios, usuario_1.default);
        this.app.use(this.apiPaths.markers, marker_1.default);
        this.app.use(this.apiPaths.events, event_1.default);
        this.app.use(this.apiPaths.sales, sales_1.default);
    }
    //Levantar el servidor
    listen() {
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en puerto!!! ' + this.port);
        });
    }
}
// le decimos a typescript que esta `Server` es la clase que vamos a exportar por defecto
exports.default = Server;
//# sourceMappingURL=server.js.map