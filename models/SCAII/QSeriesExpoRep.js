const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('QSeriesExpoRep', {
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
    PARTEEXPO: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    SERIEIMPO: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    LINEASERIEIMPO: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    NUMIDEXPO: {
      type: DataTypes.STRING(70),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'QSeriesExpoRep',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "SerExR_PKConsec_Lin_Ren",
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
