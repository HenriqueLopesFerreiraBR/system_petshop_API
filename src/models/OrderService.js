const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/database");

const OrderService = sequelize.define(
    "OrderService",
    {
        id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
        total: { type: DataTypes.FLOAT, allowNull: false },
    },
    { timestamps: true }
);

OrderService.sync({force:false})

module.exports = OrderService;
