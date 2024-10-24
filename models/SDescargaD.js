const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SDescargaD', {
    CONSECUTIVO: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    FACTEXPO: {
      type: DataTypes.STRING(19),
      allowNull: true
    },
    FACREFERENCIA: {
      type: DataTypes.STRING(19),
      allowNull: true
    },
    FACTIMPODEF: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    PEDIMENTOIMPODEF: {
      type: DataTypes.STRING(15),
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
    NUMPARTE: {
      type: DataTypes.STRING(70),
      allowNull: true
    },
    CANTDESC: {
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
    PAISMERCANCIA: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    FECHADESC: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    TIPOFRACCION: {
      type: DataTypes.STRING(7),
      allowNull: true
    },
    ADVALOREMIMPO: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    SECTOR: {
      type: DataTypes.STRING(8),
      allowNull: true
    },
    NUMPARTEEXPO: {
      type: DataTypes.STRING(70),
      allowNull: true
    },
    LINEAEXPO: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    PARTEORIGINAL: {
      type: DataTypes.STRING(70),
      allowNull: true
    },
    TIPODESC: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    MONTOIGI: {
      type: DataTypes.DECIMAL(23,8),
      allowNull: true
    },
    PAGOIMPUESTO: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    TIENECERT: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    ORDENVENTA: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    ACTUALREPARACION: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    TIPOMATEXPO: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    CONSECPARCIAL: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    LINEAEXPOREF: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    APARTADOCTM: {
      type: DataTypes.CHAR(3),
      allowNull: true
    },
    PORUTILERIA: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    DESCARGASM: {
      type: DataTypes.STRING(4),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SDescargaD',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "DesDef_FKClase",
        fields: [
          { name: "CLASE" },
        ]
      },
      {
        name: "DesDef_FKEIPaPiTiSeOrRefLin",
        fields: [
          { name: "FACTEXPO" },
          { name: "FACTIMPODEF" },
          { name: "NUMPARTE" },
          { name: "PAISMERCANCIA" },
          { name: "TIPOFRACCION" },
          { name: "SECTOR" },
          { name: "PARTEORIGINAL" },
          { name: "FACREFERENCIA" },
          { name: "LINEAEXPO" },
        ]
      },
      {
        name: "DesDef_FKFacImpClase",
        fields: [
          { name: "FACTIMPODEF" },
          { name: "CLASE" },
        ]
      },
      {
        name: "DesDef_FKFacImpParte",
        fields: [
          { name: "FACTIMPODEF" },
          { name: "NUMPARTE" },
        ]
      },
      {
        name: "DesDef_FKFactExpo",
        fields: [
          { name: "FACTEXPO" },
        ]
      },
      {
        name: "DesDef_FKFactImpo",
        fields: [
          { name: "FACTIMPODEF" },
        ]
      },
      {
        name: "DesDef_FKFactReferencia",
        fields: [
          { name: "FACREFERENCIA" },
        ]
      },
      {
        name: "DesDef_FKFecha",
        fields: [
          { name: "FECHADESC" },
        ]
      },
      {
        name: "DesDef_FKImpParPaiTipSec",
        fields: [
          { name: "FACTIMPODEF" },
          { name: "NUMPARTE" },
          { name: "PAISMERCANCIA" },
          { name: "TIPOFRACCION" },
          { name: "SECTOR" },
        ]
      },
      {
        name: "DesDef_FKOrdVentaParte",
        fields: [
          { name: "ORDENVENTA" },
          { name: "NUMPARTE" },
        ]
      },
      {
        name: "DesDef_FKParte",
        fields: [
          { name: "NUMPARTE" },
        ]
      },
      {
        name: "DesDef_FKPedExpo",
        fields: [
          { name: "PEDIMENTOEXPO" },
        ]
      },
      {
        name: "DesDef_FKPedImpoFecha",
        fields: [
          { name: "PEDIMENTOIMPODEF" },
          { name: "FECHADESC" },
        ]
      },
      {
        name: "DesDef_PKConsecutivo",
        unique: true,
        fields: [
          { name: "CONSECUTIVO" },
        ]
      },
    ]
  });
};
