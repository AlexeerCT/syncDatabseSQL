const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SPartidasRep', {
    FACTURAIMPO: {
      type: DataTypes.STRING(15),
      allowNull: false,
      primaryKey: true
    },
    LINEAIMPO: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    FECHAFACTURA: {
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
    CANTIMPO: {
      type: DataTypes.DECIMAL(19,8),
      allowNull: true
    },
    UNIMED: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    CANTALTERNA: {
      type: DataTypes.DECIMAL(19,8),
      allowNull: true
    },
    UNIMEDALTERNA: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    COSTOUNITARIOME: {
      type: DataTypes.DECIMAL(23,8),
      allowNull: true
    },
    COSTOUNITARIOMN: {
      type: DataTypes.DECIMAL(23,8),
      allowNull: true
    },
    COSTOUNITARIOMC: {
      type: DataTypes.DECIMAL(23,8),
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
    VALORIMPOMC: {
      type: DataTypes.DECIMAL(23,8),
      allowNull: true
    },
    NUMPERMISO: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    PAGRENGLON: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    PAISORIGEN: {
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
    CLAVEBULTOS: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    CANTBULTOS: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    DESCBULTOS: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    FRACCIONIMPO: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    TIPOFRACCIMPO: {
      type: DataTypes.STRING(7),
      allowNull: true
    },
    ADVIMPO: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    TIENECO: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    NOCERTIFICADO: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    SECTOR: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    FRACCIONAMERICANA: {
      type: DataTypes.STRING(16),
      allowNull: true
    },
    ADVAME: {
      type: DataTypes.DECIMAL(5,2),
      allowNull: true
    },
    ORDENCOMPRA: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    INFOADICIONESP: {
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    INFOADICIONING: {
      type: DataTypes.STRING(1000),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SPartidasRep',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "ParRep_FKClase",
        fields: [
          { name: "CLASE" },
        ]
      },
      {
        name: "ParRep_FKClaveBultos",
        fields: [
          { name: "CLAVEBULTOS" },
        ]
      },
      {
        name: "ParRep_FKFacturaImpo",
        fields: [
          { name: "FACTURAIMPO" },
        ]
      },
      {
        name: "ParRep_FKFraccAme",
        fields: [
          { name: "FRACCIONAMERICANA" },
        ]
      },
      {
        name: "ParRep_FKNumParte",
        fields: [
          { name: "NUMPARTE" },
        ]
      },
      {
        name: "ParRep_FKNumParteFact",
        fields: [
          { name: "NUMPARTE" },
          { name: "FACTURAIMPO" },
        ]
      },
      {
        name: "ParRep_FKParPaiTipSec",
        fields: [
          { name: "NUMPARTE" },
          { name: "PAISORIGEN" },
          { name: "TIPOFRACCIMPO" },
          { name: "SECTOR" },
        ]
      },
      {
        name: "ParRep_FKUnidadMed",
        fields: [
          { name: "UNIMED" },
        ]
      },
      {
        name: "ParRep_PKFactLinea",
        unique: true,
        fields: [
          { name: "FACTURAIMPO" },
          { name: "LINEAIMPO" },
        ]
      },
    ]
  });
};
