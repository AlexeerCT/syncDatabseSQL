const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('GTipoCambio', {
    FECHA: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    VALOR: {
      type: DataTypes.DECIMAL(13,6),
      allowNull: true
    },
    TIPOMN: {
      type: DataTypes.STRING(7),
      allowNull: true
    },
    TIPOME: {
      type: DataTypes.STRING(7),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'GTipoCambio',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "GenTC_AKFecha_Desc",
        fields: [
          { name: "FECHA", order: "DESC" },
        ]
      },
      {
        name: "GenTC_PKFecha_Asc",
        unique: true,
        fields: [
          { name: "FECHA" },
        ]
      },
    ]
  });
};
