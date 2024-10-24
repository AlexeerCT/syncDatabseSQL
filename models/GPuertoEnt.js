const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('GPuertoEnt', {
    PUERTO: {
      type: DataTypes.STRING(6),
      allowNull: false,
      primaryKey: true
    },
    DESCRIPCION: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    LOCALIZACION: {
      type: DataTypes.STRING(4),
      allowNull: false,
      primaryKey: true
    },
    DESCLOCALIZACION: {
      type: DataTypes.STRING(20),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'GPuertoEnt',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PueEnt_PKPuertoLoc",
        unique: true,
        fields: [
          { name: "PUERTO" },
          { name: "LOCALIZACION" },
        ]
      },
    ]
  });
};
