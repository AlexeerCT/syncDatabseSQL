const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('QPermisoClase', {
    NUMSOLICITUD: {
      type: DataTypes.STRING(10),
      allowNull: false,
      primaryKey: true
    },
    FECHA_ENTREGA: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    LINEA: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      primaryKey: true
    },
    PAGINARENGLON: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    CLASE: {
      type: DataTypes.STRING(9),
      allowNull: false,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'QPermisoClase',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PerCla_FKClase",
        fields: [
          { name: "CLASE" },
        ]
      },
      {
        name: "PerCla_FKClase_Fecha",
        fields: [
          { name: "CLASE" },
          { name: "FECHA_ENTREGA" },
        ]
      },
      {
        name: "PerCla_FKSolic_Clase",
        unique: true,
        fields: [
          { name: "NUMSOLICITUD" },
          { name: "CLASE" },
        ]
      },
      {
        name: "PerCla_PKSolFecLinCl",
        unique: true,
        fields: [
          { name: "NUMSOLICITUD" },
          { name: "FECHA_ENTREGA" },
          { name: "LINEA" },
          { name: "CLASE" },
        ]
      },
    ]
  });
};
