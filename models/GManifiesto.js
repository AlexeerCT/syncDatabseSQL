const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('GManifiesto', {
    MANIFIESTO: {
      type: DataTypes.STRING(15),
      allowNull: false,
      primaryKey: true
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
    FECHAENTRADA: {
      type: DataTypes.INTEGER,
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
    VALORTOTAL: {
      type: DataTypes.DECIMAL(19,8),
      allowNull: true
    },
    DESCRIPCION: {
      type: DataTypes.STRING(2500),
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
    PRECINTO: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    HORAENTRADA: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    MATERIALPELIGROSO: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    MODTRANS: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    CLAVETRANSPORTE: {
      type: DataTypes.STRING(14),
      allowNull: true
    },
    NUMTRAILER: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    ESTATUS: {
      type: DataTypes.STRING(14),
      allowNull: true
    },
    DESCRIPCIONESTATUS: {
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    TIPOMANIFIESTO: {
      type: DataTypes.STRING(3),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'GManifiesto',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "GenMan_PKManifiesto",
        unique: true,
        fields: [
          { name: "MANIFIESTO" },
        ]
      },
    ]
  });
};
