const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const { getClientConnection } = require('./config/connectionManager');

// Función para cargar los modelos para un cliente específico
const loadClientModels = async (clientId) => {
  const clientDB = await getClientConnection(clientId);

  const models = {};

  // Cargar los modelos
  fs.readdirSync(path.join(__dirname, 'models'))
    .filter(file => file.endsWith('.js'))
    .forEach(file => {
      const model = require(path.join(__dirname, 'models', file))(clientDB, Sequelize.DataTypes);
      models[model.name] = model;
    });

  // Asignar relaciones si existen (opcional)
  Object.keys(models).forEach(modelName => {
    if (models[modelName].associate) {
      models[modelName].associate(models);
    }
  });

  return models;
};

module.exports = { loadClientModels };
