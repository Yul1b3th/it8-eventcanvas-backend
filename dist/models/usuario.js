"use strict";
// models>usuario.ts
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const Usuario = connection_1.default.define('users', {
    first_name: {
        type: sequelize_1.DataTypes.STRING
    },
    last_name: {
        type: sequelize_1.DataTypes.STRING
    },
    email: {
        type: sequelize_1.DataTypes.STRING
    },
    phone: {
        type: sequelize_1.DataTypes.STRING
    },
    location: {
        type: sequelize_1.DataTypes.STRING
    },
    state: {
        type: sequelize_1.DataTypes.BOOLEAN
    },
});
exports.default = Usuario;
//# sourceMappingURL=usuario.js.map