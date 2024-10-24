const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sRCG2', {
    SYSID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    FRACCION: {
      type: DataTypes.STRING(19),
      allowNull: true
    },
    ANEXO: {
      type: DataTypes.STRING(19),
      allowNull: true
    },
    SECTOR: {
      type: DataTypes.STRING(7999),
      allowNull: true
    },
    REGIMEN: {
      type: DataTypes.STRING(1999),
      allowNull: true
    },
    CONDICION: {
      type: DataTypes.STRING(7999),
      allowNull: true
    },
    ADUANAS: {
      type: DataTypes.STRING(999),
      allowNull: true
    },
    DOF: {
      type: DataTypes.CHAR(8),
      allowNull: true
    },
    ARCHIVOCRITERIO: {
      type: DataTypes.STRING(999),
      allowNull: true
    },
    TIPO: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    IMPO: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    EXPO: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    WEB_DOCUMENTO_ID: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'sRCG2',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "SRCG_SYSID",
        unique: true,
        fields: [
          { name: "SYSID" },
        ]
      },
    ]
  });
};
