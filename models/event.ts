// models>usuario.ts

import { DataTypes } from 'sequelize';
import db from '../db/connection';

const Event = db.define('events', {
 title: {
  type: DataTypes.STRING,
  // allowNull: false
 },
 start_date: {
  type: DataTypes.DATE,
  // allowNull: false
 },
 end_date: {
  type: DataTypes.DATE,
  // allowNull: true
 },
 all_day: {
  type: DataTypes.BOOLEAN,
  // defaultValue: false
 },
 description: {
  type: DataTypes.TEXT,
  // allowNull: true
 },
 location: {
  type: DataTypes.STRING,
  // allowNull: true
 },
 color: {
  type: DataTypes.STRING,
  // allowNull: true
 },
 state: {
  type: DataTypes.BOOLEAN
 },
});

export default Event;