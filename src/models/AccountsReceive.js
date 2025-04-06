const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');
const Client = require('./Client'); // Assumindo que você já tenha o modelo Cliente

const AccountsReceive = sequelize.define('AccountsReceive',
  {
    id: { 
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true 
    },
    value: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    vencimento: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING,
      defaultValue: 'pendente',
    },
    paymentMethod: {
      type: DataTypes.STRING,
    },
    installments: {
      type: DataTypes.INTEGER,
      defaultValue: 1,
    },
  },
  {
    timestamps: false,
  }
);

// Relacionamento com o Cliente
AccountsReceive.belongsTo(Client, { foreignKey: 'client_id' });

module.exports = AccountsReceive;
