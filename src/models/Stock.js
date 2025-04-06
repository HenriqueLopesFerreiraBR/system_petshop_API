const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/database");

const Product = require("./Product");

const Stock = sequelize.define(
    "Stock",
    {
        id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
        productId: { type: DataTypes.INTEGER, allowNull: false },
        quantity: { type: DataTypes.INTEGER, allowNull: false },
    },
    { timestamps: true }
);
Stock.sync({force:false})
module.exports = Stock;
