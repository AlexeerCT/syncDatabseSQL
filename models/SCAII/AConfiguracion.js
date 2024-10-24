const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('AConfiguracion', {
    CONSECUTIVO: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    RUTASERVIDOR: {
      type: DataTypes.STRING(499),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'AConfiguracion',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "AConfi_PKConsecutivo",
        unique: true,
        fields: [
          { name: "CONSECUTIVO" },
        ]
      },
    ]
  });
};
