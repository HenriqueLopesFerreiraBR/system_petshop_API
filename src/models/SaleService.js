const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/database");

const Service = require("./Service");
const OrderService = require("./OrderService");


const SaleService = sequelize.define(
    "SaleService",
    {
        id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
        clientId: { type: DataTypes.INTEGER, allowNull: false },
        orderServiceId: { type: DataTypes.INTEGER, allowNull: false },
        total: { type: DataTypes.FLOAT, allowNull: false },
    },
    { timestamps: true }
);

// SaleService -> Service: uma venda pertence a um Servicee
SaleService.belongsTo(Service, { foreignKey: 'serviceId' });
Service.hasMany(SaleService, { foreignKey: 'serviceId' });

// SaleService -> Order: uma venda pertence a um pedido
SaleService.belongsTo(OrderService, { foreignKey: 'orderServiceId' });
OrderService.hasMany(SaleService, { foreignKey: 'orderServiceId' });

SaleService.sync({force:false})

module.exports = SaleService;
