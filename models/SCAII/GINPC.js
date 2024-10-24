const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('GINPC', {
    ANIO: {
      type: DataTypes.STRING(4),
      allowNull: false,
      primaryKey: true
    },
    MES: {
      type: DataTypes.STRING(2),
      allowNull: false,
      primaryKey: true
    },
    VALOR: {
      type: DataTypes.DECIMAL(19,8),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'GINPC',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "GeINPC_PKAnioMes",
        unique: true,
        fields: [
          { name: "ANIO" },
          { name: "MES" },
        ]
      },
    ]
  });
};
