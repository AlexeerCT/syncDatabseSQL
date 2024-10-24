const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('QSeriesImpo', {
    CONSECUTIVO: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    FACTURAIMPO: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    SERIEEXPO: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    LINEAIMPO: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    RENGLON: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    SERIEIMPO: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    MODELOIMPO: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    SUBMODELOIMPO: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    PARTEIMPO: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    NUMIDIMPO: {
      type: DataTypes.STRING(70),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'QSeriesImpo',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "SerImp_PKConsec_Lin_Ren",
        unique: true,
        fields: [
          { name: "CONSECUTIVO" },
          { name: "LINEAIMPO" },
          { name: "RENGLON" },
        ]
      },
    ]
  });
};
