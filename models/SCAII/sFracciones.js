const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sFracciones', {
    SYSID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    FRACCION: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    FRACCIONPUNTO: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    DESCRIPCION: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    UMCLAVE: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    UMABREVIACION: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    ADVIMPOTXT: {
      type: DataTypes.STRING(19),
      allowNull: true
    },
    ADVIMPONUM: {
      type: DataTypes.DECIMAL(7,2),
      allowNull: true
    },
    TIPOTASAADVIMPO: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ADVEXPOTXT: {
      type: DataTypes.STRING(19),
      allowNull: true
    },
    ADVEXPONUM: {
      type: DataTypes.DECIMAL(7,2),
      allowNull: true
    },
    TIPOTASAADVEXPO: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    TASAIVAFRANJA: {
      type: DataTypes.DECIMAL(7,2),
      allowNull: true
    },
    TASAIVAINTERIOR: {
      type: DataTypes.DECIMAL(7,2),
      allowNull: true
    },
    TASAISAN: {
      type: DataTypes.DECIMAL(7,2),
      allowNull: true
    },
    ARANCELMIXTO: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    TASAMIXTA: {
      type: DataTypes.DECIMAL(11,6),
      allowNull: true
    },
    DOF: {
      type: DataTypes.CHAR(8),
      allowNull: true
    },
    NOTAS: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    HISTORICO: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ARANCELESPECIFICO: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    TIPOVEHICULO: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    APLICAISAN: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    APLICAIEPS: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    NIVEL: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'sFracciones',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "sFracc_AKFraccionSysID",
        unique: true,
        fields: [
          { name: "FRACCION" },
          { name: "SYSID" },
        ]
      },
      {
        name: "sFracc_PKSysID",
        unique: true,
        fields: [
          { name: "SYSID" },
        ]
      },
    ]
  });
};
