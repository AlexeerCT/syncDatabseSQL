const { Sequelize } = require('sequelize');

// Conexión a la base de datos local
const localDB = new Sequelize('nombre_base_local', 'usuario_local', 'contraseña_local', {
  host: 'localhost',
  dialect: 'mssql',
  port: 1433, // o el puerto que uses para SQL Server
  logging: false,
  dialectOptions: {
    options: {
      encrypt: false,
      trustServerCertificate: true,
    },
  },
});

// Conexión a la base de datos del cliente
const clientDB = new Sequelize('nombre_base_cliente', 'usuario_cliente', 'contraseña_cliente', {
  host: 'direccion_cliente', // El host remoto de la base de datos del cliente
  dialect: 'mssql',
  port: 1433, // o el puerto que uses
  logging: false,
  dialectOptions: {
    options: {
      encrypt: false, // Esto depende de si la base de datos del cliente usa SSL
      trustServerCertificate: true,
    },
  },
});

// Exportar ambas conexiones
module.exports = { localDB, clientDB };
