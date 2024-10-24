const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SPedimentosEDocument', {
    PEDIMENTO: {
      type: DataTypes.STRING(15),
      allowNull: false,
      primaryKey: true
    },
    CONSECUTIVO: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    EDOCUMENT: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    RUTA_XML: {
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    OPERACION: {
      type: DataTypes.STRING(1),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SPedimentosEDocument',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "SPedED_PKPedimentoConsecutivo",
        unique: true,
        fields: [
          { name: "PEDIMENTO" },
          { name: "CONSECUTIVO" },
        ]
      },
    ]
  });
};
