const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('GNivelesSeguridadTablas', {
    SYSIDNIVEL: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    TABLA: {
      type: DataTypes.STRING(49),
      allowNull: false,
      primaryKey: true
    },
    INSERTAR: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    EDITAR: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    BORRAR: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    PROIMP: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    TIPO: {
      type: DataTypes.STRING(20),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'GNivelesSeguridadTablas',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "GNivTab_AKSysIDTabla",
        fields: [
          { name: "SYSIDNIVEL" },
          { name: "TABLA" },
        ]
      },
      {
        name: "GNivTab_PkNivelTabla",
        unique: true,
        fields: [
          { name: "SYSIDNIVEL" },
          { name: "TABLA" },
        ]
      },
    ]
  });
};
