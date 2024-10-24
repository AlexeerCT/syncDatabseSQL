const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SDescargaSM', {
    CONSECUTIVO: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    REMISIONENTRADA: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    REMISIONSALIDA: {
      type: DataTypes.STRING(15),
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
    FECHAENT: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    NUMPARTEEXPO: {
      type: DataTypes.STRING(70),
      allowNull: true
    },
    LINEA: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SDescargaSM',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "DesEnt_FKEIPaLin",
        unique: true,
        fields: [
          { name: "REMISIONENTRADA" },
          { name: "REMISIONSALIDA" },
          { name: "NUMPARTE" },
          { name: "LINEA" },
        ]
      },
      {
        name: "DesEnt_FKRemEntradaParte",
        fields: [
          { name: "REMISIONENTRADA" },
          { name: "NUMPARTE" },
        ]
      },
      {
        name: "DesEnt_PKConsecutivo",
        unique: true,
        fields: [
          { name: "CONSECUTIVO" },
        ]
      },
      {
        name: "FKREMSALPARTE",
        fields: [
          { name: "REMISIONSALIDA" },
          { name: "NUMPARTE" },
        ]
      },
    ]
  });
};
