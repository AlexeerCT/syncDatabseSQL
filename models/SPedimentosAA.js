const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SPedimentosAA', {
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
    FACTURA: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    FECHAFAC: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    FECHAREC: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    FECHAENT: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    FECHAVENC: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    SECCION: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SPedimentosAA',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PedMAA_PKPedAAduanal",
        unique: true,
        fields: [
          { name: "PEDIMENTO" },
          { name: "CLAVEAA" },
        ]
      },
    ]
  });
};
