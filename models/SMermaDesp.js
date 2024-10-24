const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SMermaDesp', {
    FACTURAEXPO: {
      type: DataTypes.STRING(19),
      allowNull: false,
      primaryKey: true
    },
    FECHAEXPO: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    PEDIMENTOEXPO: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    CLASE: {
      type: DataTypes.STRING(8),
      allowNull: true
    },
    TIPO: {
      type: DataTypes.STRING(1),
      allowNull: false,
      primaryKey: true
    },
    NUMPARTE: {
      type: DataTypes.STRING(70),
      allowNull: false,
      primaryKey: true
    },
    NUMPARTEPAREXPO: {
      type: DataTypes.STRING(70),
      allowNull: false,
      primaryKey: true
    },
    CANTIDAD: {
      type: DataTypes.DECIMAL(19,8),
      allowNull: true
    },
    CANTIDADUSADA: {
      type: DataTypes.DECIMAL(19,8),
      allowNull: true
    },
    UNIMED: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    VALORMN: {
      type: DataTypes.DECIMAL(23,8),
      allowNull: true
    },
    VALORUSADOMN: {
      type: DataTypes.DECIMAL(23,8),
      allowNull: true
    },
    VALORME: {
      type: DataTypes.DECIMAL(23,8),
      allowNull: true
    },
    VALORUSADOME: {
      type: DataTypes.DECIMAL(23,8),
      allowNull: true
    },
    PESONETO: {
      type: DataTypes.DECIMAL(19,8),
      allowNull: true
    },
    PESOUSADO: {
      type: DataTypes.DECIMAL(19,8),
      allowNull: true
    },
    PROCEDENCIA: {
      type: DataTypes.STRING(3),
      allowNull: false,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'SMermaDesp',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "MerDes_PKExpoParteTipo",
        unique: true,
        fields: [
          { name: "FACTURAEXPO" },
          { name: "NUMPARTE" },
          { name: "TIPO" },
          { name: "PROCEDENCIA" },
          { name: "NUMPARTEPAREXPO" },
        ]
      },
    ]
  });
};
