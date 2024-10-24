const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('QConfiguracion', {
    CONSECUTIVO: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    TIPODEFONDOS: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    ACTIMPLEMENTACION: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    ALTAUSUARIOS: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    RESPALDO: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    FOLDER_LLEGADA: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ACTIVAR_BUSQUEDA: {
      type: DataTypes.STRING(7),
      allowNull: true
    },
    INTERVALO_BUSQUEDA: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    FTP_SERVER: {
      type: DataTypes.STRING(19),
      allowNull: true
    },
    FTP_USERNAME: {
      type: DataTypes.STRING(19),
      allowNull: true
    },
    FTP_PASSWORD: {
      type: DataTypes.STRING(19),
      allowNull: true
    },
    FTP_DIRECTORY: {
      type: DataTypes.STRING(999),
      allowNull: true
    },
    TIPOACTUALIZACION: {
      type: DataTypes.CHAR(20),
      allowNull: true
    },
    DIRECCTORIOMANUALSIFRA: {
      type: DataTypes.STRING(199),
      allowNull: true
    },
    DIRECCIONHTTP: {
      type: DataTypes.CHAR(200),
      allowNull: true
    },
    FTP_FOLDER_LLEGADA: {
      type: DataTypes.STRING(1999),
      allowNull: true
    },
    FECHAACTUALIZACION: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    RUTASERVIDOR: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'QConfiguracion',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "QConfi_PKConsecutivo",
        unique: true,
        fields: [
          { name: "CONSECUTIVO" },
        ]
      },
    ]
  });
};
