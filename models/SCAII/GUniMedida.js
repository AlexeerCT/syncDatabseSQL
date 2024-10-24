const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('GUniMedida', {
    CLAVEUNI: {
      type: DataTypes.STRING(5),
      allowNull: false,
      primaryKey: true
    },
    DESCRIPCION: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    DESCRIPCIONINGLES: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    CLAVE_AMEX: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    CLAVE_AAMER: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    CLAVEACE: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    CLAVEOMA: {
      type: DataTypes.STRING(10),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'GUniMedida',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "UniMed_PKUnidad",
        unique: true,
        fields: [
          { name: "CLAVEUNI" },
        ]
      },
    ]
  });
};
