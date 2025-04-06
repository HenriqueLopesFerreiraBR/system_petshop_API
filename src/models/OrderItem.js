const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/database");


const Order = require("./Order");
const Product = require("./Product");

const OrderItem = sequelize.define(
    "OrderItem",
    {
        id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
        orderId:{ type: DataTypes.INTEGER, allowNull: false },
        productId: { type: DataTypes.INTEGER, allowNull: false },
        quantity: { type: DataTypes.INTEGER, allowNull: false },
        value: { type: DataTypes.FLOAT, allowNull: false },
        total: { type: DataTypes.FLOAT, allowNull: false },
        
    },
    { timestamps: true }
);

// OrderItem -> Product: um item de pedido pertence a um produto
OrderItem.belongsTo(Product, { foreignKey: 'productId' }); 
Product.hasMany(OrderItem, { foreignKey: 'productId' });

// OrderItem -> Order: um item de pedido pertence a um pedido
OrderItem.belongsTo(Order, { foreignKey: 'orderId' });
Order.hasMany(OrderItem, { foreignKey: 'orderId' });

OrderItem.sync({force:false})

module.exports =  OrderItem;
