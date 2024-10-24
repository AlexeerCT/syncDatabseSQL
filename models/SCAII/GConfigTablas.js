const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('GConfigTablas', {
    TABLA: {
      type: DataTypes.STRING(100),
      allowNull: false,
      primaryKey: true
    },
    CAMPO: {
      type: DataTypes.STRING(100),
      allowNull: false,
      primaryKey: true
    },
    VENTANA: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'GConfigTablas',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "GConTab_PKTablaCampo",
        unique: true,
        fields: [
          { name: "TABLA" },
          { name: "CAMPO" },
        ]
      },
    ]
  });
};
