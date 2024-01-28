// connection.ts

import { Sequelize } from 'sequelize';

const db = new Sequelize('eventcanvas', 'root', '123456', {
 host: 'localhost',
 dialect: 'mariadb',
 // dialect: 'mysql',
 // logging: false
});


export default db;



/* const db = new Sequelize('node', 'root', '123456', {
 host: 'localhost',
 dialect: 'mysql',
 // logging: false
}); */ 