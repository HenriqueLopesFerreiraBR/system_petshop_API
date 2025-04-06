const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');



const CashFlow = sequelize.define('CashFlow',
  {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    entry: {
      type: DataTypes.DECIMAL(10, 2),
      defaultValue: 0,
    },
    exit : {
      type: DataTypes.DECIMAL(10, 2),
      defaultValue: 0,
    },
    description: {
      type: DataTypes.STRING,
    },
    balance: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = CashFlow;
