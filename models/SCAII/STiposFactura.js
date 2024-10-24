const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('STiposFactura', {
    CLAVE: {
      type: DataTypes.STRING(5),
      allowNull: false,
      primaryKey: true
    },
    DESCRIPCION: {
      type: DataTypes.CHAR(50),
      allowNull: true
    },
    OBSERVACION: {
      type: DataTypes.CHAR(500),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'STiposFactura',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "GTFACT_PKClave",
        unique: true,
        fields: [
          { name: "CLAVE" },
        ]
      },
    ]
  });
};
