const { Sequelize } = require('sequelize');

// Conexión a la base de datos local (en el cliente)
const localDb = new Sequelize('db_local', 'user_local', 'password_local', {
  host: 'localhost',
  dialect: 'mysql', // O el dialecto que estés usando (mysql, postgres, mssql)
});

// Conexión a la base de datos central (en el servidor)
const centralDb = new Sequelize('db_central', 'user_central', 'password_central', {
  host: 'remote-server.com',
  dialect: 'mysql', // Cambia esto según el motor que uses
});

module.exports = { localDb, centralDb };
