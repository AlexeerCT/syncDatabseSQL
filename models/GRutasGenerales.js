const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('GRutasGenerales', {
    NOMBRERUTA: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    RUTA: {
      type: DataTypes.STRING(1500),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'GRutasGenerales',
    schema: 'dbo',
    timestamps: false
  });
};
