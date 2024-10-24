const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sHistoricoReit', {
    SYSID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    FRACCION: {
      type: DataTypes.STRING(8),
      allowNull: true
    },
    ARTICULO: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    FUNDAMENTO: {
      type: DataTypes.STRING(1500),
      allowNull: true
    },
    ACUERDO: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    DOF: {
      type: DataTypes.CHAR(8),
      allowNull: true
    },
    DOF2: {
      type: DataTypes.CHAR(8),
      allowNull: true
    },
    DOF3: {
      type: DataTypes.CHAR(8),
      allowNull: true
    },
    PERMISO: {
      type: DataTypes.CHAR(2),
      allowNull: true
    },
    DOCUMENTO: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    TEMPORALIDAD: {
      type: DataTypes.SMALLINT,
      allowNull: true
    },
    TEMPORALIDADSERVICIOS: {
      type: DataTypes.SMALLINT,
      allowNull: true
    },
    TEMPORALIDADEMPRESACERTIFICADA: {
      type: DataTypes.SMALLINT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'sHistoricoReit',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "sReitH_AKFraccionSysID",
        unique: true,
        fields: [
          { name: "FRACCION" },
          { name: "SYSID" },
        ]
      },
      {
        name: "sReitH_PKSysID",
        unique: true,
        fields: [
          { name: "SYSID" },
        ]
      },
    ]
  });
};
