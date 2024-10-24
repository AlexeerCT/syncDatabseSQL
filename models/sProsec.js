const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sProsec', {
    SYSID: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    FRACCION: {
      type: DataTypes.STRING(8),
      allowNull: false,
      primaryKey: true
    },
    ARTICULO: {
      type: DataTypes.STRING(3),
      allowNull: false,
      primaryKey: true
    },
    SECTOR: {
      type: DataTypes.STRING(6),
      allowNull: false,
      primaryKey: true
    },
    TASATXT: {
      type: DataTypes.STRING(19),
      allowNull: true
    },
    TASANUM: {
      type: DataTypes.DECIMAL(7,2),
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
    OBSERVACION: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'sProsec',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "sProc_AKSysID",
        unique: true,
        fields: [
          { name: "SYSID" },
        ]
      },
      {
        name: "sProc_PKFraccionArtSector",
        unique: true,
        fields: [
          { name: "FRACCION" },
          { name: "ARTICULO" },
          { name: "SECTOR" },
        ]
      },
    ]
  });
};
