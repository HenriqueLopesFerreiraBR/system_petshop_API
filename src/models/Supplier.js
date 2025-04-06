const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');

const Supplier = sequelize.define('Supplier', {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  name: { type: DataTypes.STRING, allowNull: false },
  cnpj: { type: DataTypes.STRING },
  email: { type: DataTypes.STRING },
  adress: { type: DataTypes.STRING },
  contact: { type: DataTypes.STRING },
});

module.exports = Supplier;