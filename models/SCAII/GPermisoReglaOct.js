const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('GPermisoReglaOct', {
    PERMISO: {
      type: DataTypes.STRING(20),
      allowNull: false,
      primaryKey: true
    },
    FECHAINICIO: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    FECHAFINAL: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    SECTOR: {
      type: DataTypes.STRING(8),
      allowNull: true
    },
    SISTEMA: {
      type: DataTypes.STRING(5),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'GPermisoReglaOct',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "RegOct_PKPermiso",
        unique: true,
        fields: [
          { name: "PERMISO" },
        ]
      },
    ]
  });
};
