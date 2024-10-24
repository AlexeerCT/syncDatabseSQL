const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sArchivosDescargados', {
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
    tableName: 'sArchivosDescargados',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "sArcDes_PKArchivo",
        unique: true,
        fields: [
          { name: "ARCHIVO" },
        ]
      },
    ]
  });
};
