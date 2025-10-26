const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT || 5432, // porta padrão do PostgreSQL
    dialect: 'postgres', // ← aqui muda de 'mysql' para 'postgres'
    logging: false, // opcional, desativa logs SQL
  }
);

module.exports = { sequelize };
