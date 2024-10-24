const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SParteCliente', {
    NUMPARTE: {
      type: DataTypes.STRING(70),
      allowNull: false,
      primaryKey: true
    },
    CLIENTE: {
      type: DataTypes.STRING(8),
      allowNull: false,
      primaryKey: true
    },
    ESTATUS: {
      type: DataTypes.STRING(10),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SParteCliente',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "ParCli_PKParteCliente",
        unique: true,
        fields: [
          { name: "NUMPARTE" },
          { name: "CLIENTE" },
        ]
      },
    ]
  });
};
