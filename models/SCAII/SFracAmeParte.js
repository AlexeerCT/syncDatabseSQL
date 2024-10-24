const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SFracAmeParte', {
    CONSECUTIVO: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    NUMPARTE: {
      type: DataTypes.STRING(70),
      allowNull: true
    },
    FRACCIONAME: {
      type: DataTypes.STRING(16),
      allowNull: true
    },
    VALOR: {
      type: DataTypes.DECIMAL(23,8),
      allowNull: true
    },
    TIPOVALOR: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    PAIS: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    PREFIJO: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    FRACCIONAMERICANASIFRA: {
      type: DataTypes.STRING(19),
      allowNull: true
    },
    AR: {
      type: DataTypes.DECIMAL(23,8),
      allowNull: true
    },
    OH: {
      type: DataTypes.DECIMAL(23,8),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SFracAmeParte',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "FKPARTEFRACPAIS",
        fields: [
          { name: "NUMPARTE" },
          { name: "FRACCIONAME" },
          { name: "PAIS" },
        ]
      },
      {
        name: "FKPARTEFRACTIPO",
        fields: [
          { name: "NUMPARTE" },
          { name: "FRACCIONAME" },
          { name: "TIPOVALOR" },
        ]
      },
      {
        name: "FraPar_FKParte",
        fields: [
          { name: "NUMPARTE" },
        ]
      },
      {
        name: "FraPar_FKParteConsec",
        unique: true,
        fields: [
          { name: "NUMPARTE" },
          { name: "CONSECUTIVO" },
        ]
      },
      {
        name: "FraPar_PKConsecutivo",
        unique: true,
        fields: [
          { name: "CONSECUTIVO" },
        ]
      },
    ]
  });
};
