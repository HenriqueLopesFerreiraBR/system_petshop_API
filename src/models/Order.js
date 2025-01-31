const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/database");

const Order = sequelize.define(
    "Order",
    {
        id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
        idProduct: { type: DataTypes.INTEGER, allowNull: false },
        quantity: { type: DataTypes.INTEGER, allowNull: false },
        value: { type: DataTypes.FLOAT, allowNull: false },
        total: { type: DataTypes.FLOAT, allowNull: false },
    },
    { timestamps: true }
);

module.exports = new Order();
