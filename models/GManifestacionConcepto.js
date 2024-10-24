const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('GManifestacionConcepto', {
    CONSECUTIVO: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    LINEA: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    TIPOANEXO: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    NUMERO: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    MCIAOPROV: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    FACODOC: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    IMPORTE: {
      type: DataTypes.DECIMAL(19,8),
      allowNull: true
    },
    MONEDA: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    CONCEPTOCARGO: {
      type: DataTypes.STRING(200),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'GManifestacionConcepto',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "MVCone_PorConsecutivoLin",
        unique: true,
        fields: [
          { name: "CONSECUTIVO" },
          { name: "LINEA" },
        ]
      },
    ]
  });
};
