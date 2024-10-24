const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SDescargaS', {
    FACTEXPO: {
      type: DataTypes.STRING(15),
      allowNull: false,
      primaryKey: true
    },
    FACTURAEXPO: {
      type: DataTypes.STRING(19),
      allowNull: false,
      primaryKey: true
    },
    NUMPARTE: {
      type: DataTypes.STRING(70),
      allowNull: false,
      primaryKey: true
    },
    TIPO: {
      type: DataTypes.STRING(1),
      allowNull: false,
      primaryKey: true
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
    }
  }, {
    sequelize,
    tableName: 'SDescargaS',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "DesScr_PKOrigExpoParteTipo",
        unique: true,
        fields: [
          { name: "FACTEXPO" },
          { name: "FACTURAEXPO" },
          { name: "NUMPARTE" },
          { name: "TIPO" },
        ]
      },
    ]
  });
};
