const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');

const EnterProduct = sequelize.define("EnterProduct", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  productId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  entryDate: {
    type: DataTypes.DATE,
    // allowNull: false,
  },
  invoiceNumber: {
    type: DataTypes.STRING,
    // allowNull: false,
  },
  supplier: {
    type: DataTypes.STRING,
    // allowNull: false,
  },
  transporter: {
    type: DataTypes.STRING,
    // allowNull: false,
  },
  price: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  tax: {
    type: DataTypes.DECIMAL(10, 2),
    // allowNull: false,
  },
  totalValue: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
}, {
  timestamps: true,
});

EnterProduct.sync({force:false})


module.exports = EnterProduct;
