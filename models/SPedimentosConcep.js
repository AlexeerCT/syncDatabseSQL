const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SPedimentosConcep', {
    PEDIMENTO: {
      type: DataTypes.STRING(15),
      allowNull: false,
      primaryKey: true
    },
    CLAVEAA: {
      type: DataTypes.STRING(5),
      allowNull: false,
      primaryKey: true
    },
    CONCEPTO: {
      type: DataTypes.STRING(15),
      allowNull: false,
      primaryKey: true
    },
    IMPORTE: {
      type: DataTypes.DECIMAL(11,2),
      allowNull: true
    },
    TIPO: {
      type: DataTypes.STRING(9),
      allowNull: true
    },
    TIPOMONEDA: {
      type: DataTypes.STRING(9),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SPedimentosConcep',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PedMCon_PKPedAAConcepto",
        unique: true,
        fields: [
          { name: "PEDIMENTO" },
          { name: "CLAVEAA" },
          { name: "CONCEPTO" },
        ]
      },
    ]
  });
};
