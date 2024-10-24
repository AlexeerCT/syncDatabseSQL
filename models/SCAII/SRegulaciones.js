const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SRegulaciones', {
    SYSID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    FRACCION: {
      type: DataTypes.STRING(8),
      allowNull: true
    },
    IMPORTACION: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    EXPORTACION: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    PERMISO: {
      type: DataTypes.STRING(19),
      allowNull: true
    },
    ACUERDO: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    CONDICION: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    FUNDAMENTO: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    DOF: {
      type: DataTypes.STRING(8),
      allowNull: true
    },
    FORMATONOM: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    INSTRUCCIONES: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    CRITERIO: {
      type: DataTypes.STRING(254),
      allowNull: true
    },
    COMPLEMENTO: {
      type: DataTypes.STRING(999),
      allowNull: true
    },
    CRITERIOESPECIAL: {
      type: DataTypes.STRING(2000),
      allowNull: true
    },
    PAIS: {
      type: DataTypes.STRING(3),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SRegulaciones',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "SReg_PKSYSID",
        unique: true,
        fields: [
          { name: "SYSID" },
        ]
      },
    ]
  });
};
