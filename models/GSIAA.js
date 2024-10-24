const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('GSIAA', {
    SYSID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    SIFRA: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    WINSAAI: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    REMESAS: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    WINVAL: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    FECHAINFORMACIONSIAA: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    TIPOACTUALIZACION: {
      type: DataTypes.STRING(19),
      allowNull: true
    },
    HTTPSERVER: {
      type: DataTypes.STRING(199),
      allowNull: true
    },
    MANUALFOLDER: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    NOAJUSTE: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    SCAII: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    SCAF: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    SCON: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    GERENCIALES: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    UTILERIAS: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    SISET: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    ALMACEN: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    FECHAINFORMACIONSIFRA: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ANEXO31: {
      type: DataTypes.TINYINT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'GSIAA',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "gVer_PKSysID",
        unique: true,
        fields: [
          { name: "SYSID" },
        ]
      },
    ]
  });
};
