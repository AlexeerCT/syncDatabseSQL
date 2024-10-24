const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SDescargaMerDes', {
    CONSECUTIVO: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    FACTURAEXPO: {
      type: DataTypes.STRING(19),
      allowNull: true
    },
    PEDIMENTOEXPO: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    NUMPARTEPAREXPO: {
      type: DataTypes.STRING(70),
      allowNull: true
    },
    FACTEXPOSCRAP: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    PEDIMENTOEXPOSCRAP: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    CLASE: {
      type: DataTypes.STRING(8),
      allowNull: true
    },
    TIPO: {
      type: DataTypes.STRING(1),
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
    FECHADESC: {
      type: DataTypes.INTEGER,
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
    PROCEDENCIA: {
      type: DataTypes.STRING(3),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SDescargaMerDes',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "DesMeDe_FKFacSCProTipParLin",
        fields: [
          { name: "FACTEXPOSCRAP" },
          { name: "FACTURAEXPO" },
          { name: "PROCEDENCIA" },
          { name: "TIPO" },
          { name: "NUMPARTE" },
          { name: "NUMPARTEPAREXPO" },
          { name: "LINEAEXPO" },
        ]
      },
      {
        name: "DesMeDe_PKConsecutivo",
        unique: true,
        fields: [
          { name: "CONSECUTIVO" },
        ]
      },
    ]
  });
};
