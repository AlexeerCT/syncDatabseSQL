const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('GSisMultiples', {
    IDENTIFICADOR: {
      type: DataTypes.STRING(15),
      allowNull: false,
      primaryKey: true
    },
    PREFIJO: {
      type: DataTypes.STRING(9),
      allowNull: true
    },
    CONSECUTIVOIMPO: {
      type: DataTypes.STRING(6),
      allowNull: true
    },
    PEDIMENTO: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    TIPOMOV: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    PROVEEDOREXPORTADOR: {
      type: DataTypes.STRING(13),
      allowNull: true
    },
    PROVEEDOR: {
      type: DataTypes.STRING(8),
      allowNull: true
    },
    VENDIDOCONSIGNADO: {
      type: DataTypes.STRING(13),
      allowNull: true
    },
    VENDIDOA: {
      type: DataTypes.STRING(8),
      allowNull: true
    },
    ENVIADOTRANSFERIDO: {
      type: DataTypes.STRING(14),
      allowNull: true
    },
    ENVIADOA: {
      type: DataTypes.STRING(8),
      allowNull: true
    },
    ENVIADOPORVENDIDOPOR: {
      type: DataTypes.STRING(14),
      allowNull: true
    },
    VENDIDOPOR: {
      type: DataTypes.STRING(8),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'GSisMultiples',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "SisMul_PKIdentificador",
        unique: true,
        fields: [
          { name: "IDENTIFICADOR" },
        ]
      },
    ]
  });
};
