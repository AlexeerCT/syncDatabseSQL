const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('GRelFacFacturas', {
    FOLIO: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    LINEA: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    FACTURA: {
      type: DataTypes.STRING(19),
      allowNull: true
    },
    SISTEMA: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    MODULO: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'GRelFacFacturas',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "RelFac_PKFolioLinea",
        unique: true,
        fields: [
          { name: "FOLIO" },
          { name: "LINEA" },
        ]
      },
    ]
  });
};
