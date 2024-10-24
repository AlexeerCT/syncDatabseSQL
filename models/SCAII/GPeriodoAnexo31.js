const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('GPeriodoAnexo31', {
    CLAVE: {
      type: DataTypes.STRING(2),
      allowNull: false,
      primaryKey: true
    },
    PERIODO: {
      type: DataTypes.STRING(200),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'GPeriodoAnexo31',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "GPEA31_PKPeriodoAnexo31",
        unique: true,
        fields: [
          { name: "CLAVE" },
        ]
      },
    ]
  });
};
