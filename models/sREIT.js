const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sREIT', {
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
    PERMISO: {
      type: DataTypes.CHAR(2),
      allowNull: true
    },
    DOF: {
      type: DataTypes.CHAR(8),
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
    TEMPORALIDADSERVICIO: {
      type: DataTypes.SMALLINT,
      allowNull: true
    },
    TEMPORALIDADCERTIFICADA: {
      type: DataTypes.SMALLINT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'sREIT',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "sReit_AKFraccionSysID",
        unique: true,
        fields: [
          { name: "FRACCION" },
          { name: "SYSID" },
        ]
      },
      {
        name: "sReit_PKSysID",
        unique: true,
        fields: [
          { name: "SYSID" },
        ]
      },
    ]
  });
};
