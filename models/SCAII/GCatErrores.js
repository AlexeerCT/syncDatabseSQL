const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('GCatErrores', {
    CLAVE: {
      type: DataTypes.STRING(15),
      allowNull: false,
      primaryKey: true
    },
    DESCRIPCION: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    CLASIFICACION: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'GCatErrores',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "CatErr_PKClave",
        unique: true,
        fields: [
          { name: "CLAVE" },
        ]
      },
    ]
  });
};
