const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SPartesClientes', {
    NUMPARTE: {
      type: DataTypes.STRING(70),
      allowNull: true
    },
    CLIENTE: {
      type: DataTypes.STRING(8),
      allowNull: true
    },
    NOMBREPARTECLIENTE: {
      type: DataTypes.STRING(200),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SPartesClientes',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PARCLI_ParteCliente",
        unique: true,
        fields: [
          { name: "NUMPARTE" },
          { name: "CLIENTE" },
        ]
      },
    ]
  });
};
