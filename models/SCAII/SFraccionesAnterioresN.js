const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SFraccionesAnterioresN', {
    SysID: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    FraccionActual: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    FraccionAnterior: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SFraccionesAnterioresN',
    schema: 'dbo',
    timestamps: false
  });
};
