const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('QPermisoSECON', {
    CONSECUTIVO: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    NUMOFICIO: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    PERMISO: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    FECHA: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'QPermisoSECON',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "EqiSic_FKOficioPerm",
        unique: true,
        fields: [
          { name: "NUMOFICIO" },
          { name: "PERMISO" },
        ]
      },
      {
        name: "EqiSic_FKPermiso",
        fields: [
          { name: "PERMISO" },
        ]
      },
      {
        name: "EqiSic_PKConsecutivo",
        unique: true,
        fields: [
          { name: "CONSECUTIVO" },
        ]
      },
    ]
  });
};
