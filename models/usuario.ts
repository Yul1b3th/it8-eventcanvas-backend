// models>usuario.ts

import { DataTypes } from 'sequelize';
import db from '../db/connection';


const Usuario = db.define('users', {
 first_name: {
  type: DataTypes.STRING
 },
 last_name: {
  type: DataTypes.STRING
 },
 email: {
  type: DataTypes.STRING
 },
 phone: {
  type: DataTypes.STRING
 },
 location: {
  type: DataTypes.STRING
 },
 state: {
  type: DataTypes.BOOLEAN
 },

})

export default Usuario;