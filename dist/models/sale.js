"use strict";
// models>sale.ts
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const Sale = connection_1.default.define('sales', {
    year: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    amount: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    colorcode: {
        type: sequelize_1.DataTypes.STRING,
    },
    state: {
        type: sequelize_1.DataTypes.BOOLEAN,
    },
});
exports.default = Sale;
//# sourceMappingURL=sale.js.map