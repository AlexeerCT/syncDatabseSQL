const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SVerBOMEnc', {
    VERSION: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    NUMPARTE: {
      type: DataTypes.STRING(70),
      allowNull: false,
      primaryKey: true
    },
    FECHA: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    IDENTIFICADOR: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    FECHAFINAL: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SVerBOMEnc',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "VEncBOM_PKNumParteVer",
        unique: true,
        fields: [
          { name: "NUMPARTE" },
          { name: "VERSION" },
        ]
      },
    ]
  });
};
