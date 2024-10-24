const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sAladi2', {
    SYSID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    FRACCION: {
      type: DataTypes.STRING(8),
      allowNull: true
    },
    ACUERDO: {
      type: DataTypes.STRING(49),
      allowNull: true
    },
    PAIS: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    TASATXT: {
      type: DataTypes.STRING(19),
      allowNull: true
    },
    TIPOTASA: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    DOF: {
      type: DataTypes.CHAR(8),
      allowNull: true
    },
    NOTAS: {
      type: DataTypes.STRING(499),
      allowNull: true
    },
    OBSERVACIONES: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    TASANUM: {
      type: DataTypes.DECIMAL(7,2),
      allowNull: true
    },
    TASACALCULADA: {
      type: DataTypes.STRING(19),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'sAladi2',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "sAla_AKFraccAcuePaisSysID",
        unique: true,
        fields: [
          { name: "FRACCION" },
          { name: "ACUERDO" },
          { name: "PAIS" },
          { name: "SYSID" },
        ]
      },
      {
        name: "sAla_PKSysID",
        unique: true,
        fields: [
          { name: "SYSID" },
        ]
      },
    ]
  });
};
