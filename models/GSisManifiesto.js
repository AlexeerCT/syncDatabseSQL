const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('GSisManifiesto', {
    CONSECUTIVO: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    PREFIJO: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    CONSECUTIVOMAN: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    NOMNUMDESCIMPO: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    NOMPERSACARGO: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    CONSIGNADOA: {
      type: DataTypes.STRING(8),
      allowNull: true
    },
    ENVIADOPOR: {
      type: DataTypes.STRING(8),
      allowNull: true
    },
    PTOEXTSAL: {
      type: DataTypes.STRING(6),
      allowNull: true
    },
    LOCALIZAPTOEXTSAL: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    PTODESTINO: {
      type: DataTypes.STRING(6),
      allowNull: true
    },
    LOCALIZAPTODESTINO: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    PTOENTRADA: {
      type: DataTypes.STRING(6),
      allowNull: true
    },
    LOCALIZAPTOENTRADA: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    CLAVEBROKER: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    CLAVETRANS: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    FACTURAPAG: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    ESCODERCODBARRASSCAC: {
      type: DataTypes.TINYINT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'GSisManifiesto',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "SisMan_PKConsecutivo",
        unique: true,
        fields: [
          { name: "CONSECUTIVO" },
        ]
      },
    ]
  });
};
