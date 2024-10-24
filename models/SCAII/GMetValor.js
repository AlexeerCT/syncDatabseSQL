const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('GMetValor', {
    CLAVE: {
      type: DataTypes.STRING(2),
      allowNull: false,
      primaryKey: true
    },
    DESCRIPCION: {
      type: DataTypes.STRING(200),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'GMetValor',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "MetVal_PKClave",
        unique: true,
        fields: [
          { name: "CLAVE" },
        ]
      },
    ]
  });
};
