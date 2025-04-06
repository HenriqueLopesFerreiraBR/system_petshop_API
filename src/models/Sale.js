const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/database");

const Client = require("./Client");
const Order = require("./Order");


const Sale = sequelize.define(
    "Sale",
    {
        id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
        clientId: { type: DataTypes.INTEGER, allowNull: false },
        orderId: { type: DataTypes.INTEGER, allowNull: false },
        total: { type: DataTypes.FLOAT, allowNull: false },
    },
    { timestamps: true }
);

// Sale -> Client: uma venda pertence a um cliente
Sale.belongsTo(Client, { foreignKey: 'clientId' });
Client.hasMany(Sale, { foreignKey: 'clientId' });

// Sale -> Order: uma venda pertence a um pedido
Sale.belongsTo(Order, { foreignKey: 'orderId' });
Order.hasMany(Sale, { foreignKey: 'orderId' });

Sale.sync({force:false})

module.exports = Sale;
