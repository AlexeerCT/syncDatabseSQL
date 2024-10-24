const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('GArchivosSIAA', {
    ARCHIVO: {
      type: DataTypes.STRING(255),
      allowNull: false,
      primaryKey: true
    },
    MEDIDA: {
      type: DataTypes.INTEGER,
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
    NUMFACTURA: {
      type: DataTypes.STRING(21),
      allowNull: true
    },
    TIPO: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    ESTATUS: {
      type: DataTypes.STRING(19),
      allowNull: true
    },
    FOLDER_LLEGADA_FTP: {
      type: DataTypes.STRING(2000),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'GArchivosSIAA',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "gArcSiaa_PKArchivo",
        unique: true,
        fields: [
          { name: "ARCHIVO" },
        ]
      },
    ]
  });
};
