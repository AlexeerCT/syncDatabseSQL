const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('GBasedeDatos', {
    VERSION: {
      type: DataTypes.STRING(19),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'GBasedeDatos',
    schema: 'dbo',
    timestamps: false
  });
};
