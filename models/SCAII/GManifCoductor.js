const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('GManifCoductor', {
    MANIFIESTO: {
      type: DataTypes.STRING(15),
      allowNull: false,
      primaryKey: true
    },
    CONDUCTOR: {
      type: DataTypes.STRING(80),
      allowNull: false,
      primaryKey: true
    },
    TIPO: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    DIRECCION1: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    DIRECCION2: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    CIUDAD: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    ESTADO: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    CODIGOPOSTAL: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    PAIS: {
      type: DataTypes.STRING(3),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'GManifCoductor',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "ManCon_PKManifConductor",
        unique: true,
        fields: [
          { name: "MANIFIESTO" },
          { name: "CONDUCTOR" },
        ]
      },
    ]
  });
};
