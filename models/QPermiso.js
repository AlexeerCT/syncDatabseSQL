const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('QPermiso', {
    NUMSOLICITUD: {
      type: DataTypes.STRING(20),
      allowNull: false,
      primaryKey: true
    },
    FECHA_ENTREGA: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    PERMISO: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    FECHA_INICIO: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'QPermiso',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "Permiso_AKNumSolicitud",
        fields: [
          { name: "NUMSOLICITUD" },
        ]
      },
      {
        name: "Permiso_FKPermiso",
        fields: [
          { name: "PERMISO" },
        ]
      },
      {
        name: "Permiso_PKSoli_FechaE",
        unique: true,
        fields: [
          { name: "NUMSOLICITUD" },
          { name: "FECHA_ENTREGA" },
        ]
      },
    ]
  });
};
