const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');

const Stock = sequelize.define('Stock', {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  productId: { type: DataTypes.INTEGER, allowNull: false },
  quantity: { type: DataTypes.INTEGER, allowNull: false },
},{timestamps:true});

module.exports = Stock;