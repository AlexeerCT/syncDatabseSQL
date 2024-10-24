const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SPartidasReciboCTM', {
    CONSECUTIVO: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    LINEARECIBO: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    NUMPARTE: {
      type: DataTypes.STRING(70),
      allowNull: true
    },
    CANTENVIO: {
      type: DataTypes.DECIMAL(19,8),
      allowNull: true
    },
    UNIDADMEDIDA: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    COSTOUNITARIOMC: {
      type: DataTypes.DECIMAL(23,8),
      allowNull: true
    },
    COSTOMN: {
      type: DataTypes.DECIMAL(23,8),
      allowNull: true
    },
    COSTOME: {
      type: DataTypes.DECIMAL(23,8),
      allowNull: true
    },
    VALORMN: {
      type: DataTypes.DECIMAL(23,8),
      allowNull: true
    },
    VALORME: {
      type: DataTypes.DECIMAL(23,8),
      allowNull: true
    },
    PESONETO: {
      type: DataTypes.DECIMAL(19,8),
      allowNull: true
    },
    MARCA: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    MODELO: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    SERIES: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    OPCION: {
      type: DataTypes.CHAR(3),
      allowNull: true
    },
    FACTURASALIDA: {
      type: DataTypes.STRING(19),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SPartidasReciboCTM',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "ParRec_PKConsecLinea",
        unique: true,
        fields: [
          { name: "CONSECUTIVO" },
          { name: "LINEARECIBO" },
        ]
      },
    ]
  });
};
