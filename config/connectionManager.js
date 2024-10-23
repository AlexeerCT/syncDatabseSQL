const { Sequelize } = require('sequelize');
const adminDB = require('./adminDB'); // Conexión a la base de datos de administración

// Función para crear una conexión a la base de datos del cliente
const getClientConnection = async (clientId) => {
  // Obtener la información de la base de datos del cliente desde la DB de administración
  const clientConfig = await adminDB.query(`SELECT * FROM Clientes WHERE id_cliente = ${clientId}`, {
    type: adminDB.QueryTypes.SELECT,
  });

  if (clientConfig.length === 0) {
    throw new Error('No se encontró la configuración para este cliente');
  }

  const config = clientConfig[0];

  // Crear la conexión para el cliente
  const clientDB = new Sequelize(config.db_name, config.user, config.password, {
    host: config.host,
    dialect: 'mssql',
    port: config.puerto,
    logging: false,
    dialectOptions: {
      options: {
        encrypt: true, 
        trustServerCertificate: true,
      },
    },
  });

  return clientDB;
};

module.exports = { getClientConnection };
