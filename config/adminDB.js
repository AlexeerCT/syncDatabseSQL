const { Sequelize } = require('sequelize');

// Configuración de la base de datos de administración
const adminDB = new Sequelize('nombre_base_administracion', 'usuario_admin', 'password_admin', {
  host: 'host_de_adminDB', // Ejemplo: 'localhost' o el host de tu servidor
  dialect: 'mssql',         // Si usas SQL Server
  port: 1433,               // Puerto de SQL Server (ajústalo si es necesario)
  logging: false,           // Desactivar logging de consultas en consola
  dialectOptions: {
    options: {
      encrypt: true, // Si estás utilizando conexiones encriptadas (SSL)
      trustServerCertificate: true, // Necesario para SQL Server
    },
  },
});

module.exports = adminDB;
