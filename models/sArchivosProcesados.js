const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sArchivosProcesados', {
    ARCHIVO: {
      type: DataTypes.STRING(1000),
      allowNull: false,
      primaryKey: true
    },
    FECHA: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    HORA: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'sArchivosProcesados',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "sArcPro_PKArchivo",
        unique: true,
        fields: [
          { name: "ARCHIVO" },
        ]
      },
    ]
  });
};
