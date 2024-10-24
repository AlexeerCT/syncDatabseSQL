const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('GSectores', {
    CLAVE: {
      type: DataTypes.STRING(8),
      allowNull: false,
      primaryKey: true
    },
    DESCRIPCION: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    AUTORIZADO: {
      type: DataTypes.TINYINT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'GSectores',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "Sector_PKClave",
        unique: true,
        fields: [
          { name: "CLAVE" },
        ]
      },
    ]
  });
};
