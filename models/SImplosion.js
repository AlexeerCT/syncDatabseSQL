const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SImplosion', {
    CONSECUTIVO: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    FOLIOIMPLOSION: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    FECHAIMPOSION: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    TIPOCAMBIO: {
      type: DataTypes.DECIMAL(13,6),
      allowNull: true
    },
    ESTATUS: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    PESONETO: {
      type: DataTypes.DECIMAL(19,8),
      allowNull: true
    },
    PESOBRUTO: {
      type: DataTypes.DECIMAL(19,8),
      allowNull: true
    },
    CANTBULTOS: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    VALORIMPOMN: {
      type: DataTypes.DECIMAL(23,8),
      allowNull: true
    },
    VALORIMPOME: {
      type: DataTypes.DECIMAL(23,8),
      allowNull: true
    },
    VALORIMPOMC: {
      type: DataTypes.DECIMAL(23,8),
      allowNull: true
    },
    CANTIMPLO: {
      type: DataTypes.DECIMAL(19,8),
      allowNull: true
    },
    CANT_PARTIDAS: {
      type: DataTypes.SMALLINT,
      allowNull: true
    },
    OBSERVACIONE: {
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    OBSERVACIONI: {
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    TIPOMONEDA: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    CLAVEMONEDA: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    FECHAACTUAL: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    HORAACTUAL: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    TIPOPESO: {
      type: DataTypes.STRING(6),
      allowNull: true
    },
    FACTURAIMPO: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    NUMPARTE: {
      type: DataTypes.STRING(70),
      allowNull: true
    },
    PAISORIGEN: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    TIPOFRACIMPO: {
      type: DataTypes.STRING(7),
      allowNull: true
    },
    SECTOR: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    PROCEDENCIA: {
      type: DataTypes.STRING(3),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SImplosion',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "ImpFac_FolioImplosion",
        unique: true,
        fields: [
          { name: "FOLIOIMPLOSION" },
        ]
      },
      {
        name: "ImpFac_PKConsecutivo",
        unique: true,
        fields: [
          { name: "CONSECUTIVO" },
        ]
      },
    ]
  });
};
