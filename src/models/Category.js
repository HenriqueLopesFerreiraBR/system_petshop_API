// === models/Category.js ===
const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');
const Product = require('./Product');


const Category = sequelize.define('Category', {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  name: { type: DataTypes.STRING, allowNull: false },
});



module.exports = new Category;