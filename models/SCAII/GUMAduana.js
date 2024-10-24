const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('GUMAduana', {
    CLAVE: {
      type: DataTypes.STRING(2),
      allowNull: false,
      primaryKey: true
    },
    DESCRIPCION: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    UNIDADSCAII: {
      type: DataTypes.STRING(5),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'GUMAduana',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "GenUMA_PKClave",
        unique: true,
        fields: [
          { name: "CLAVE" },
        ]
      },
    ]
  });
};
