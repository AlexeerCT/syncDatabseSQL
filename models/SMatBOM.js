const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SMatBOM', {
    CONSECUTIVO: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    NUMPARTE: {
      type: DataTypes.STRING(70),
      allowNull: true
    },
    NUMPARTEBOM: {
      type: DataTypes.STRING(70),
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
    PROCEDENCIA: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    CANTMP: {
      type: DataTypes.DECIMAL(19,8),
      allowNull: true
    },
    CANTDESP: {
      type: DataTypes.DECIMAL(19,8),
      allowNull: true
    },
    CANTMERMA: {
      type: DataTypes.DECIMAL(19,8),
      allowNull: true
    },
    CANTEQUIVALENTE: {
      type: DataTypes.DECIMAL(19,8),
      allowNull: true
    },
    UMEQUIVALENTE: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    CANTDESPEQUI: {
      type: DataTypes.DECIMAL(19,8),
      allowNull: true
    },
    CANTMERMAEQUI: {
      type: DataTypes.DECIMAL(19,8),
      allowNull: true
    },
    DESCDESPAPARTADO: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    PORCENTAJEMP: {
      type: DataTypes.DECIMAL(7,2),
      allowNull: true
    },
    PORCENTAJEDESP: {
      type: DataTypes.DECIMAL(7,2),
      allowNull: true
    },
    PORCENTAJEMERMA: {
      type: DataTypes.DECIMAL(7,2),
      allowNull: true
    },
    TIPODESPMERMA: {
      type: DataTypes.STRING(19),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SMatBOM',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "MatBOM_FKNumParteConsec",
        unique: true,
        fields: [
          { name: "NUMPARTE" },
          { name: "CONSECUTIVO" },
        ]
      },
      {
        name: "MatBOM_FKNumParteParteBOM",
        fields: [
          { name: "NUMPARTE" },
          { name: "NUMPARTEBOM" },
        ]
      },
      {
        name: "MatBOM_FKParteBOM",
        fields: [
          { name: "NUMPARTEBOM" },
        ]
      },
      {
        name: "MatBOM_PKConsecutivo",
        unique: true,
        fields: [
          { name: "CONSECUTIVO" },
        ]
      },
    ]
  });
};
