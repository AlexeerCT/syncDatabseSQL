const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('GFacProforma', {
    NUMEROPROFORMA: {
      type: DataTypes.STRING(20),
      allowNull: false,
      primaryKey: true
    },
    NUMERODUNS: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    FECHA: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    PESOBRUTO: {
      type: DataTypes.DECIMAL(19,8),
      allowNull: true
    },
    PESONETO: {
      type: DataTypes.DECIMAL(19,8),
      allowNull: true
    },
    VALORTOTALME: {
      type: DataTypes.DECIMAL(23,8),
      allowNull: true
    },
    VALORTOTALMN: {
      type: DataTypes.DECIMAL(23,8),
      allowNull: true
    },
    TIPOCAMBIO: {
      type: DataTypes.DECIMAL(13,6),
      allowNull: true
    },
    PROVEEDORNAC: {
      type: DataTypes.STRING(8),
      allowNull: true
    },
    VENDIDOA: {
      type: DataTypes.STRING(8),
      allowNull: true
    },
    REMITIDOA: {
      type: DataTypes.STRING(8),
      allowNull: true
    },
    PROVEEDOR: {
      type: DataTypes.STRING(8),
      allowNull: true
    },
    CLAVECLIENTE: {
      type: DataTypes.STRING(8),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'GFacProforma',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "FacPro_PorNumProforma",
        unique: true,
        fields: [
          { name: "NUMEROPROFORMA" },
        ]
      },
    ]
  });
};
