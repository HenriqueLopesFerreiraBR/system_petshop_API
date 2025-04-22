// models/FormaPagamento.js
const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/database"); // ajuste o caminho conforme sua estrutura

const PaymentMethod = sequelize.define('PaymentMethod', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    description: {
        type: DataTypes.STRING,
    },
    active: {
        type: DataTypes.ENUM('Ativo', 'Inativo'),
        defaultValue: 'Ativo',
    },
}, 
    {timestamps: true},
);

module.exports = PaymentMethod;
