const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SPartePais', {
    NUMPARTE: {
      type: DataTypes.STRING(70),
      allowNull: false,
      primaryKey: true
    },
    FRACCION: {
      type: DataTypes.STRING(10),
      allowNull: false,
      primaryKey: true
    },
    PAISDEFAULT: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    PAISDEFAULTEXPO: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    PAIS: {
      type: DataTypes.STRING(3),
      allowNull: false,
      primaryKey: true
    },
    TIPOFRACCION: {
      type: DataTypes.STRING(7),
      allowNull: false,
      primaryKey: true
    },
    TASAIM: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    TASAEX: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    TIENECERT: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    NOCERTIFICADO: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    FECHAFINALCO: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    SECTOR: {
      type: DataTypes.STRING(8),
      allowNull: false,
      primaryKey: true
    },
    TASAIMNUM: {
      type: DataTypes.DECIMAL(7,2),
      allowNull: true
    },
    TASAEXNUM: {
      type: DataTypes.DECIMAL(7,2),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SPartePais',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "ParPai_FKNumParte",
        fields: [
          { name: "NUMPARTE" },
        ]
      },
      {
        name: "ParPai_FKParPaiTipSec",
        fields: [
          { name: "NUMPARTE" },
          { name: "PAIS" },
          { name: "TIPOFRACCION" },
          { name: "SECTOR" },
        ]
      },
      {
        name: "ParPai_PKPaFrPaTiSec",
        unique: true,
        fields: [
          { name: "NUMPARTE" },
          { name: "FRACCION" },
          { name: "PAIS" },
          { name: "TIPOFRACCION" },
          { name: "SECTOR" },
        ]
      },
    ]
  });
};
