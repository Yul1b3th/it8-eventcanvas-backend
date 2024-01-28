"use strict";
// models>usuario.ts
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const Event = connection_1.default.define('events', {
    title: {
        type: sequelize_1.DataTypes.STRING,
        // allowNull: false
    },
    start_date: {
        type: sequelize_1.DataTypes.DATE,
        // allowNull: false
    },
    end_date: {
        type: sequelize_1.DataTypes.DATE,
        // allowNull: true
    },
    all_day: {
        type: sequelize_1.DataTypes.BOOLEAN,
        // defaultValue: false
    },
    description: {
        type: sequelize_1.DataTypes.TEXT,
        // allowNull: true
    },
    location: {
        type: sequelize_1.DataTypes.STRING,
        // allowNull: true
    },
    color: {
        type: sequelize_1.DataTypes.STRING,
        // allowNull: true
    },
    state: {
        type: sequelize_1.DataTypes.BOOLEAN
    },
});
exports.default = Event;
//# sourceMappingURL=event.js.map