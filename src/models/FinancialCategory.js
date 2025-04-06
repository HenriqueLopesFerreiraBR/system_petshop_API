const { DataTypes } = require('sequelize');
const {sequelize} = require('../config/database');



const FinancialCategory = sequelize.define('FinancialCategory',
  {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false, // "entrada" ou "saida"
    },
    description: {
      type: DataTypes.STRING,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = FinancialCategory;
