const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('GCodigosProductoCP', {
    SYSID: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    CODIGO: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    DESCRIPCION: {
      type: DataTypes.STRING(5001),
      allowNull: true
    },
    PALABRASSIMILARES: {
      type: DataTypes.STRING(5001),
      allowNull: true
    },
    MATPELIGROSO: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    FECHAINICIOVIGENCIA: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    FECHAFINVIGENCIA: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'GCodigosProductoCP',
    schema: 'dbo',
    timestamps: false
  });
};
