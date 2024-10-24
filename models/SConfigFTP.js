const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SConfigFTP', {
    CONSECUTIVO: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    SERVIDOR_FTP: {
      type: DataTypes.STRING(19),
      allowNull: true
    },
    USUARIO_FTP: {
      type: DataTypes.STRING(19),
      allowNull: true
    },
    CLAVEACCESSO_FTP: {
      type: DataTypes.STRING(19),
      allowNull: true
    },
    DIRECTORIO_FTP: {
      type: DataTypes.STRING(999),
      allowNull: true
    },
    FOLDER_LLEGADA_FTP: {
      type: DataTypes.STRING(1999),
      allowNull: true
    },
    FOLDER_HISTORICO_LOCAL: {
      type: DataTypes.STRING(1999),
      allowNull: true
    },
    PUERTO: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    FTPTRANSBINARIA: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    TIPOFACTURA: {
      type: DataTypes.STRING(19),
      allowNull: true
    },
    CONSOLIDAFACTURA: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    TIPOMONEDA: {
      type: DataTypes.STRING(2),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SConfigFTP',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "SCoFTP_PKConsecutivo",
        unique: true,
        fields: [
          { name: "CONSECUTIVO" },
        ]
      },
    ]
  });
};
