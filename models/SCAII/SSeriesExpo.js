const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SSeriesExpo', {
    CONSECUTIVO: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    FACTURAEXPO: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    LINEAEXPO: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    RENGLON: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    SERIEEXPO: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    MODELOEXPO: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    SUBMODELOEXPO: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    MARCA: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    NUMIDEXPO: {
      type: DataTypes.STRING(70),
      allowNull: true
    },
    MARCAEXPO: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SSeriesExpo',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "SerExpo_PKConsec_Lin_RenSCAII",
        unique: true,
        fields: [
          { name: "CONSECUTIVO" },
          { name: "LINEAEXPO" },
          { name: "RENGLON" },
        ]
      },
    ]
  });
};