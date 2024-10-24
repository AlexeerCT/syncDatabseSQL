const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SPermisoSECON', {
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
    },
    FECHAVIGENCIA: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    PROGRAMA: {
      type: DataTypes.STRING(9),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SPermisoSECON',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "MatSic_FKOficioPerm",
        unique: true,
        fields: [
          { name: "NUMOFICIO" },
          { name: "PERMISO" },
        ]
      },
      {
        name: "MatSic_FKPermiso",
        fields: [
          { name: "PERMISO" },
        ]
      },
      {
        name: "MatSic_PKConsecutivo",
        unique: true,
        fields: [
          { name: "CONSECUTIVO" },
        ]
      },
    ]
  });
};
