const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SPartidasEnviaCTM', {
    CONSECUTIVO: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    LINEAENVIO: {
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
    PESOBRUTO: {
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
    PAISORIGEN: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    VALORAGREMC: {
      type: DataTypes.DECIMAL(23,8),
      allowNull: true
    },
    VALORAGREME: {
      type: DataTypes.DECIMAL(23,8),
      allowNull: true
    },
    VALORAGREMN: {
      type: DataTypes.DECIMAL(23,8),
      allowNull: true
    },
    VALEMPAQUENACMC: {
      type: DataTypes.DECIMAL(23,8),
      allowNull: true
    },
    VALEMPAQUENACME: {
      type: DataTypes.DECIMAL(23,8),
      allowNull: true
    },
    VALEMPAQUENACMN: {
      type: DataTypes.DECIMAL(23,8),
      allowNull: true
    },
    CANTBULTOS: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    CLAVEBULTOS: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    ORDENVENTA: {
      type: DataTypes.STRING(20),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SPartidasEnviaCTM',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "ParEnv_PKConsecLinea",
        unique: true,
        fields: [
          { name: "CONSECUTIVO" },
          { name: "LINEAENVIO" },
        ]
      },
    ]
  });
};
