const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIdentificadoresPedimento', {
    PEDIMENTO: {
      type: DataTypes.STRING(19),
      allowNull: true
    },
    CLAVEID: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    COMPLEMENTO1: {
      type: DataTypes.STRING(5000),
      allowNull: true
    },
    COMPLEMENTO2: {
      type: DataTypes.STRING(5000),
      allowNull: true
    },
    COMPLEMENTO3: {
      type: DataTypes.STRING(5000),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SIdentificadoresPedimento',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "SIdP_PedID",
        unique: true,
        fields: [
          { name: "PEDIMENTO" },
          { name: "CLAVEID" },
        ]
      },
    ]
  });
};
