// models>marker.ts

import { DataTypes } from 'sequelize';
import db from '../db/connection';


const Marker = db.define('markers', {
 color: {
  type: DataTypes.STRING
 },
 lng: {
  type: DataTypes.STRING
 },
 lat: {
  type: DataTypes.STRING
 },
 category: {
  type: DataTypes.STRING
 },
})

export default Marker;