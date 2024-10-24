const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SCTM', {
    CONSECUTIVO: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    FOLIO: {
      type: DataTypes.STRING(19),
      allowNull: true
    },
    FECHAINICIO: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    FECHAEXPEDICION: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ENVIADOA: {
      type: DataTypes.STRING(8),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SCTM',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "SCTM_PKConsecutivo",
        unique: true,
        fields: [
          { name: "CONSECUTIVO" },
        ]
      },
    ]
  });
};
