const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('GIdentificadoresPartidas', {
    CONSECUTIVOFACTURA: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    LINEAPARTIDA: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ID: {
      type: DataTypes.STRING(2),
      allowNull: true,
      primaryKey: true
    },
    MODULO: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    COMPLEMENTO1: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    COMPLEMENTO2: {
      type: DataTypes.CHAR(51),
      allowNull: true
    },
    COMPLEMENTO3: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'GIdentificadoresPartidas',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_MODULO_CONSFAC_LINEA_ID",
        unique: true,
        fields: [
          { name: "CONSECUTIVOFACTURA" },
          { name: "LINEAPARTIDA" },
          { name: "ID" },
          { name: "MODULO" },
        ]
      },
    ]
  });
};
