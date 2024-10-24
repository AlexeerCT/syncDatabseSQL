// models/index.js
const fs = require('fs');
const path = require('path');
const { Sequelize } = require('sequelize');

// Función para cargar todos los modelos
const loadModels = (sequelize) => {
  const models = {};
  const modelFiles = fs.readdirSync(__dirname).filter(file => {
    return (file.indexOf('.') !== 0) && (file !== 'index.js') && (file.slice(-3) === '.js');
  });

  modelFiles.forEach((file) => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    models[model.name] = model;
  });

  return models;
};

module.exports = loadModels;
