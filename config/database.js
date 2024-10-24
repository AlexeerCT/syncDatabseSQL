// config/database.js
require('dotenv').config();
const { Sequelize } = require('sequelize');

const { DB_NAME, DB_USER, DB_PASSWORD, DB_HOST, DB_PORT } = process.env;

// Conexión a la base de datos central
const sequelizeCentral = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
  host: DB_HOST,
  port: DB_PORT,
  dialect: 'mssql',
  logging: false,
});


// Exportar la conexión central
module.exports = { sequelizeCentral };
