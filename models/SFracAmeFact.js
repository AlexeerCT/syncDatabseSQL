const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SFracAmeFact', {
    CONSECUTIVO: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    CONSECUTIVOEXPO: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    FACTURAEXPO: {
      type: DataTypes.STRING(19),
      allowNull: true
    },
    LINEA: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    LINEAPARTE: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    NUMPARTE: {
      type: DataTypes.STRING(70),
      allowNull: true
    },
    FRACCIONAME: {
      type: DataTypes.STRING(16),
      allowNull: true
    },
    TASA: {
      type: DataTypes.DECIMAL(19,8),
      allowNull: true
    },
    VALOR: {
      type: DataTypes.DECIMAL(23,8),
      allowNull: true
    },
    TIPOVALOR: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    PAIS: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    TIPOADVALOREM: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    PREFIJO: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    AR: {
      type: DataTypes.DECIMAL(23,8),
      allowNull: true
    },
    OH: {
      type: DataTypes.DECIMAL(23,8),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SFracAmeFact',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "FraFac_AKConsExpoLineaTV",
        fields: [
          { name: "CONSECUTIVOEXPO" },
          { name: "LINEA" },
          { name: "TIPOVALOR" },
        ]
      },
      {
        name: "FraFac_FKConsExpoLineas",
        fields: [
          { name: "CONSECUTIVOEXPO" },
          { name: "LINEA" },
          { name: "LINEAPARTE" },
        ]
      },
      {
        name: "FraFac_PKConsecutivo",
        unique: true,
        fields: [
          { name: "CONSECUTIVO" },
        ]
      },
    ]
  });
};
