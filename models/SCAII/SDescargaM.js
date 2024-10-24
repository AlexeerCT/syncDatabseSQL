const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SDescargaM', {
    CONSECUTIVO: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    CONSECUTIVOEXPO: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    FACTURAEXPO: {
      type: DataTypes.STRING(19),
      allowNull: true
    },
    LINEA: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    NUMPARTE: {
      type: DataTypes.STRING(70),
      allowNull: true
    },
    CLASE: {
      type: DataTypes.STRING(8),
      allowNull: true
    },
    CANTIDAD: {
      type: DataTypes.DECIMAL(19,8),
      allowNull: true
    },
    UNIMED: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    FACTURAIMPO: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    NUMPARTEMP: {
      type: DataTypes.STRING(70),
      allowNull: true
    },
    VALORIMPOMN: {
      type: DataTypes.DECIMAL(23,8),
      allowNull: true
    },
    VALORIMPOME: {
      type: DataTypes.DECIMAL(23,8),
      allowNull: true
    },
    PAIS: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    PESONETO: {
      type: DataTypes.DECIMAL(19,8),
      allowNull: true
    },
    PESOBRUTO: {
      type: DataTypes.DECIMAL(19,8),
      allowNull: true
    },
    TIPOFRACCION: {
      type: DataTypes.STRING(7),
      allowNull: true
    },
    SECTOR: {
      type: DataTypes.STRING(8),
      allowNull: true
    },
    FACTURADEF: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    PROCEDENCIA: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    FACTURA: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    TIPODESPERDICIO: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    ORDENVENTA: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    TOMARSALDOBASEALPT: {
      type: DataTypes.STRING(2),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SDescargaM',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "DesMan_FKConsExpoLinea",
        fields: [
          { name: "CONSECUTIVOEXPO" },
          { name: "LINEA" },
        ]
      },
      {
        name: "DesMan_FKExImPrPiTiSe",
        fields: [
          { name: "CONSECUTIVOEXPO" },
          { name: "FACTURA" },
          { name: "NUMPARTE" },
          { name: "PAIS" },
          { name: "TIPOFRACCION" },
          { name: "SECTOR" },
        ]
      },
      {
        name: "DesMan_PKConsecutivo",
        unique: true,
        fields: [
          { name: "CONSECUTIVO" },
        ]
      },
    ]
  });
};
