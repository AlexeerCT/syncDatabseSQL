const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('GConfigReportes', {
    SISTEMA: {
      type: DataTypes.STRING(19),
      allowNull: false,
      primaryKey: true
    },
    MODULO: {
      type: DataTypes.STRING(20),
      allowNull: false,
      primaryKey: true
    },
    REPORTE: {
      type: DataTypes.STRING(50),
      allowNull: false,
      primaryKey: true
    },
    IMPRIMIR: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    VENTANALLAMAR: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    TIPOFACTURA: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    TIPOUM: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    TIPOMONEDA: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    TIPOPESO: {
      type: DataTypes.STRING(9),
      allowNull: true
    },
    IMPRIMIRAGEN: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    IMPRIMIRTRANSPOR: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    IMPRIMIRIMPORTADOR: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    IMPRIMIRAA: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    CANTCOPIAS: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    GENPDF: {
      type: DataTypes.TINYINT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'GConfigReportes',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "GConRep_PKSisModRep",
        unique: true,
        fields: [
          { name: "SISTEMA" },
          { name: "MODULO" },
          { name: "REPORTE" },
        ]
      },
    ]
  });
};
