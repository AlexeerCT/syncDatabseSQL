const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('GExpedienteElecEnc', {
    CONSECUTIVO: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    FACTOR: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    DESCRIPCION: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    SISTEMA: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    MOVIMIENTO: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    TIPOFACTURA: {
      type: DataTypes.STRING(30),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'GExpedienteElecEnc',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "FKConsecutivoFactor",
        fields: [
          { name: "CONSECUTIVO" },
          { name: "FACTOR" },
        ]
      },
      {
        name: "PKConsecutivoExpediente",
        unique: true,
        fields: [
          { name: "CONSECUTIVO" },
        ]
      },
    ]
  });
};
