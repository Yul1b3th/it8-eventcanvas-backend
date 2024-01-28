// models>sale.ts

import { DataTypes } from 'sequelize';
import db from '../db/connection';

const Sale = db.define('sales', {
 year: {
  type: DataTypes.INTEGER,
 },
 amount: {
  type: DataTypes.INTEGER,
 },
 colorcode: {
  type: DataTypes.STRING,
 },
 state: {
  type: DataTypes.BOOLEAN,
 },
});

export default Sale;