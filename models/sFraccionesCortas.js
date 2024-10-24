const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sFraccionesCortas', {
    CONSECUTIVO: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    FRACCION: {
      type: DataTypes.STRING(8),
      allowNull: true
    },
    DECRIPCIONCORTA: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    DESCRIPCIONLARGA: {
      type: DataTypes.STRING(2000),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'sFraccionesCortas',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "FraCor_PKConsecutivo",
        unique: true,
        fields: [
          { name: "CONSECUTIVO" },
        ]
      },
    ]
  });
};
