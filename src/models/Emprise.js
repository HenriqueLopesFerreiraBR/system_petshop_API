const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');

const Emprise = sequelize.define('Emprise', {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  razaoSocial: { type: DataTypes.STRING, allowNull: false,unique: true },
  nomeFantasia: { type: DataTypes.STRING  },
  email: { type: DataTypes.STRING, unique: true, allowNull: false },
  telefone: { type: DataTypes.STRING, allowNull: false },
  endereco: { type: DataTypes.STRING, allowNull: false },
  cnpj: { type: DataTypes.STRING, allowNull: false },
  inscricaoEstadual: { type: DataTypes.STRING, allowNull: false },

});

 //Emprise.sync({force:true})

module.exports = Emprise;
