const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('QLocalizacionExt', {
    CLAVE: {
      type: DataTypes.STRING(6),
      allowNull: true
    },
    DEPARTAMENTO: {
      type: DataTypes.STRING(1001),
      allowNull: true
    },
    RESPONSABLE: {
      type: DataTypes.STRING(1001),
      allowNull: true
    },
    OBSERVACIONES: {
      type: DataTypes.STRING(1001),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'QLocalizacionExt',
    schema: 'dbo',
    timestamps: false
  });
};
