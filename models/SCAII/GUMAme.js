const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('GUMAme', {
    CLAVE: {
      type: DataTypes.STRING(3),
      allowNull: false,
      primaryKey: true
    },
    DESCRIPCION: {
      type: DataTypes.STRING(40),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'GUMAme',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "UMAAme_PKClave",
        unique: true,
        fields: [
          { name: "CLAVE" },
        ]
      },
    ]
  });
};
