const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ADescargas', {
    CONSECUTIVO: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    NUMORDEN: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    FACTURAENTRADA: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    LINEAREQ: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    NUMPARTEPAR: {
      type: DataTypes.STRING(70),
      allowNull: true
    },
    NUMPARTECOM: {
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
    LINEACOMPONENTE: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'ADescargas',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "Descar_FKFacEntNumComp",
        fields: [
          { name: "FACTURAENTRADA" },
          { name: "NUMPARTECOM" },
        ]
      },
      {
        name: "Descar_FKNumParte",
        fields: [
          { name: "NUMPARTECOM" },
        ]
      },
      {
        name: "Descar_FKOrdFacEntParLin",
        unique: true,
        fields: [
          { name: "NUMORDEN" },
          { name: "FACTURAENTRADA" },
          { name: "NUMPARTECOM" },
          { name: "LINEAREQ" },
          { name: "LINEACOMPONENTE" },
        ]
      },
      {
        name: "Descar_PKConsecutivo",
        unique: true,
        fields: [
          { name: "CONSECUTIVO" },
        ]
      },
    ]
  });
};
