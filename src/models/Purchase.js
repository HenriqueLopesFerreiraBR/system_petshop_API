const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');

const Purchase = sequelize.define('Purchase', {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  supplierId: { type: DataTypes.INTEGER, allowNull: false },
  nf: { type: DataTypes.INTEGER },
  productId:{ type: DataTypes.INTEGER, allowNull: false },
  unit_value: { type: DataTypes.FLOAT, allowNull: false },
  quantity: { type: DataTypes.FLOAT, allowNull: false },
  total_value: { type: DataTypes.FLOAT, allowNull: false },
},{timestamps:true});

module.exports =new Purchase;