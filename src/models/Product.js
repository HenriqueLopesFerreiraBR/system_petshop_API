const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/database");
const Category = require("./Category");

const Product = sequelize.define(
    "Product",
    {
        id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
        name: { type: DataTypes.STRING, allowNull: false },
        description: { type: DataTypes.STRING },
        saleValue: { type: DataTypes.FLOAT, allowNull: false },
        weightKg:{type:DataTypes.FLOAT},
        // stock_id: { type: DataTypes.INTEGER, allowNull: false },
    },
    { timestamps: true }
);
 Product.sync({force:false})
module.exports = Product;
