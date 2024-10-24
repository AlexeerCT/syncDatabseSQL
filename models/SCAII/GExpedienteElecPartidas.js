const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('GExpedienteElecPartidas', {
    CONSECUTIVOEXT: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    CONSECUTIVOINT: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    RUTA: {
      type: DataTypes.STRING(2000),
      allowNull: true
    },
    DESCRIPCION: {
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    TIPODOCUMENTO: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'GExpedienteElecPartidas',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PKLlaveporConsecutivoExterno",
        unique: true,
        fields: [
          { name: "CONSECUTIVOEXT" },
          { name: "CONSECUTIVOINT" },
        ]
      },
    ]
  });
};
