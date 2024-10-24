const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('GBitacora', {
    SYSID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    REFERENCIA: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    PROCEDIMIENTO: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    MOVIMIENTO: {
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    USUARIO: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    FECHA: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    HORA: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    SISTEMA: {
      type: DataTypes.STRING(29),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'GBitacora',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "Bit_AKFechaHoraSysID",
        unique: true,
        fields: [
          { name: "FECHA", order: "DESC" },
          { name: "HORA", order: "DESC" },
          { name: "SYSID", order: "DESC" },
        ]
      },
      {
        name: "GBit_PKSysID",
        unique: true,
        fields: [
          { name: "SYSID" },
        ]
      },
    ]
  });
};
