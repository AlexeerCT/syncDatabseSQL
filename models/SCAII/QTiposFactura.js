const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('QTiposFactura', {
    CLAVE: {
      type: DataTypes.STRING(5),
      allowNull: false,
      primaryKey: true
    },
    DESCRIPCION: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    OBSERVACION: {
      type: DataTypes.STRING(500),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'QTiposFactura',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "QTFACT_PKClave",
        unique: true,
        fields: [
          { name: "CLAVE" },
        ]
      },
    ]
  });
};
