const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/database");


const OrderService = require("./OrderService");
const Service = require("./Service");

const OrderServiceItem = sequelize.define(
    "OrderServiceItem",
    {
        id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
        orderServiceId:{ type: DataTypes.INTEGER, allowNull: false },
        serviceId: { type: DataTypes.INTEGER, allowNull: false },
        quantity: { type: DataTypes.INTEGER, allowNull: false },
        value: { type: DataTypes.FLOAT, allowNull: false },
        total: { type: DataTypes.FLOAT, allowNull: false },
        
    },
    { timestamps: true }
);

// OrderServiceItem -> Service: um item de pedido pertence a um produto
OrderServiceItem.belongsTo(Service, { foreignKey: 'serviceId' }); 
Service.hasMany(OrderServiceItem, { foreignKey: 'serviceId' });

// OrderServiceItem -> OrderService: um item de pedido pertence a um pedido
OrderServiceItem.belongsTo(OrderService, { foreignKey: 'orderServiceId' });
OrderService.hasMany(OrderServiceItem, { foreignKey: 'orderServiceId' });

OrderServiceItem.sync({force:false})

module.exports =  OrderServiceItem;
