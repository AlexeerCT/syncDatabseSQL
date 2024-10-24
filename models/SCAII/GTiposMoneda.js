const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('GTiposMoneda', {
    CLAVE: {
      type: DataTypes.STRING(3),
      allowNull: false,
      primaryKey: true
    },
    MONEDA: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    DESCPAIS: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'GTiposMoneda',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "TIPMON_PKClave",
        unique: true,
        fields: [
          { name: "CLAVE" },
        ]
      },
    ]
  });
};
