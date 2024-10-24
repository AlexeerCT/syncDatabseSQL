const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('QSeriesDef', {
    CONSECUTIVO: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    FACTURAIMPODEF: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    SERIEEXPO: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    LINEAIMPODEF: {
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
    tableName: 'QSeriesDef',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "SerDef_PKConsec_Lin_Ren",
        unique: true,
        fields: [
          { name: "CONSECUTIVO" },
          { name: "LINEAIMPODEF" },
          { name: "RENGLON" },
        ]
      },
    ]
  });
};
