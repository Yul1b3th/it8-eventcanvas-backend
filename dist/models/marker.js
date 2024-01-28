"use strict";
// models>marker.ts
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const Marker = connection_1.default.define('markers', {
    color: {
        type: sequelize_1.DataTypes.STRING
    },
    lng: {
        type: sequelize_1.DataTypes.STRING
    },
    lat: {
        type: sequelize_1.DataTypes.STRING
    },
    category: {
        type: sequelize_1.DataTypes.STRING
    },
});
exports.default = Marker;
//# sourceMappingURL=marker.js.map