const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sTLCS', {
    SYSID: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    FRACCION: {
      type: DataTypes.STRING(10),
      allowNull: false,
      primaryKey: true
    },
    PAIS: {
      type: DataTypes.STRING(3),
      allowNull: false,
      primaryKey: true
    },
    ORDEN: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    TASATXT: {
      type: DataTypes.STRING(44),
      allowNull: true
    },
    TIPOTASA: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    TASA1NUM: {
      type: DataTypes.DECIMAL(7,2),
      allowNull: true
    },
    FACTOR1: {
      type: DataTypes.DECIMAL(13,8),
      allowNull: true
    },
    TASA2NUM: {
      type: DataTypes.DECIMAL(7,2),
      allowNull: true
    },
    FACTOR2: {
      type: DataTypes.DECIMAL(13,8),
      allowNull: true
    },
    DOF: {
      type: DataTypes.CHAR(8),
      allowNull: true
    },
    NOTAS: {
      type: DataTypes.STRING(1000),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'sTLCS',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "sTlc_AKSysID",
        unique: true,
        fields: [
          { name: "SYSID" },
        ]
      },
      {
        name: "sTlc_PKFraccionPais",
        unique: true,
        fields: [
          { name: "FRACCION" },
          { name: "PAIS" },
        ]
      },
    ]
  });
};
