const { DataTypes} = require('sequelize');
const {sequelize} = require('../config/database');


const Transaction = sequelize.define('Transaction',
  {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    value: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    date: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    description: {
      type: DataTypes.STRING,
    },
    category: {
      type: DataTypes.STRING,
    },
    paymentMethod: {
      type: DataTypes.STRING,
    },
    status: {
      type: DataTypes.STRING,
      defaultValue: 'pendente',
    },
  },
  {
    timestamps: true, // Desabilitar timestamps automáticos
  }
);

module.exports = Transaction;
