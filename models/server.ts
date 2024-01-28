import express, { Application } from 'express';

import cors from 'cors';

import userRoutes from '../routes/usuario';
import markerRoutes from '../routes/marker';
import markerEvents from '../routes/event';
import markerSales from '../routes/sales';

import db from '../db/connection';

class Server {
 private app: Application;
 private port: string;
 private apiPaths = {
  usuarios: '/api/usuarios',
  markers: '/api/markers',
  events: '/api/events',
  sales: '/api/sales',
 }

 constructor() {
  this.app = express();
  this.port = process.env.PORT || '8000';

  // Métodos iniciales
  this.dbConnection();
  this.middlewares();
  this.routes();   // Definir mis rutas
 }

 // Conectar a la base de datos
 async dbConnection() {
  try {
   await db.authenticate();
   // console.log("Database online");
  } catch (error: any) {
   throw new Error(error);
  }
 }

 // middlewares, son funciones que se van a ejecutar antes de que pasen nuestras rutas
 middlewares() {
  // Configurar CORS
  this.app.use(cors())
  // Parseo del body, lectura del body
  this.app.use(express.json());
  // Carpeta pública, es para servir contenido estatico
  this.app.use(express.static('public'));
 }

 routes() {
  this.app.use(this.apiPaths.usuarios, userRoutes)
  this.app.use(this.apiPaths.markers, markerRoutes)
  this.app.use(this.apiPaths.events, markerEvents)
  this.app.use(this.apiPaths.sales, markerSales)
 }

 //Levantar el servidor
 listen() {
  this.app.listen(this.port, () => {
   console.log('Servidor corriendo en puerto!!! ' + this.port);
  })
 }
}

// le decimos a typescript que esta `Server` es la clase que vamos a exportar por defecto
export default Server;