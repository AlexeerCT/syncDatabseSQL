const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('GFraccionesHistorico', {
    CONSECUTIVO: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    FRACCIONHISTORICA: {
      type: DataTypes.STRING(8),
      allowNull: true
    },
    UMCLAVE: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    PAIS: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    TIPOFRACCION: {
      type: DataTypes.STRING(7),
      allowNull: true
    },
    SECTOR: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    TASAIMNUM: {
      type: DataTypes.DECIMAL(7,2),
      allowNull: true
    },
    TASAEXNUM: {
      type: DataTypes.DECIMAL(7,2),
      allowNull: true
    },
    FECHAPUBLICACION: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ESIMMEX: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    TEMPORALIDADNORMAL: {
      type: DataTypes.SMALLINT,
      allowNull: true
    },
    TEMPORALIDADSERVICIOS: {
      type: DataTypes.SMALLINT,
      allowNull: true
    },
    TEMPORALIDADCERTIFICADA: {
      type: DataTypes.SMALLINT,
      allowNull: true
    },
    PORLOG: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    FECHATERMINO: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'GFraccionesHistorico',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "sFracHis_AKFracPaiTiSeFe",
        unique: true,
        fields: [
          { name: "FRACCIONHISTORICA" },
          { name: "PAIS" },
          { name: "TIPOFRACCION" },
          { name: "SECTOR" },
          { name: "FECHAPUBLICACION" },
        ]
      },
      {
        name: "sFracHis_PKConsecutivo",
        unique: true,
        fields: [
          { name: "CONSECUTIVO" },
        ]
      },
    ]
  });
};
