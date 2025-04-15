const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');
const Supplier = require("./Supplier"); // Assumindo que você já tenha o modelo Fornecedor

const AccountsPay = sequelize.define("AccountsPay",{
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
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
      defaultValue: "Pendente",
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

// Relacionamento com o Fornecedor
AccountsPay.belongsTo(Supplier, { foreignKey: "supplier_id" });

module.exports = AccountsPay;
