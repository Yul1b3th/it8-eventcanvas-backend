"use strict";
// connection.ts
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db = new sequelize_1.Sequelize('eventcanvas', 'root', '123456', {
    host: 'localhost',
    dialect: 'mariadb',
    // dialect: 'mysql',
    // logging: false
});
exports.default = db;
/* const db = new Sequelize('node', 'root', '123456', {
 host: 'localhost',
 dialect: 'mysql',
 // logging: false
}); */ 
//# sourceMappingURL=connection.js.map