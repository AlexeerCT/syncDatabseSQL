const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SAceesos', {
    CONSECUTIVO: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    FECHAENTRADA: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    FECHASALIDA: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    HORAENTRADA: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    HORASALIDA: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    NOMBRECOMPUTADORA: {
      type: DataTypes.CHAR(200),
      allowNull: true
    },
    DIRECCIONIP: {
      type: DataTypes.CHAR(30),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SAceesos',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "SAC_PKConsecutivo",
        unique: true,
        fields: [
          { name: "CONSECUTIVO", order: "DESC" },
        ]
      },
    ]
  });
};
