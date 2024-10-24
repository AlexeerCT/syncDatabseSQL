const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('gDODA', {
    SYSID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    NOINTEGRACION: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    FECHADODA: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    HORADODA: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ADUANADESPACHO: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    ADUANASECCIONES: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    PATENTE: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    PEIDMENTOS: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    CAAT: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    IDENTIFICACIONTRANSPORTE: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    FAST_ID: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    TIPOOPERACION: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    SELECCIONADO: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    USUARIOSELECCIONO: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    ULTIMOUSUARIO: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    RESPONSABLE: {
      type: DataTypes.STRING(14),
      allowNull: true
    },
    TRANSPORTISTA: {
      type: DataTypes.STRING(8),
      allowNull: true
    },
    REMESAS: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    TIPOPEDIMENTO: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    CADENAORIGINAL: {
      type: DataTypes.STRING(5000),
      allowNull: true
    },
    NUMEROSERIE: {
      type: DataTypes.CHAR(21),
      allowNull: true
    },
    FIRMAELECTRONICA: {
      type: DataTypes.STRING(2000),
      allowNull: true
    },
    NOTRANSACCION: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    ESTATUS: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    LINQSATQR: {
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    SAT_CERTIFICADO: {
      type: DataTypes.CHAR(2001),
      allowNull: true
    },
    SAT_SELLODIGITAL: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    PATHXMLDODAENVIO: {
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    PATHXMLDODARESPUESTA: {
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    SAT_CADENAORIGINAL: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    DESPACHOADUANERO: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    NUMEROGAFETEUNICO: {
      type: DataTypes.STRING(250),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'gDODA',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PKSQLDODAID",
        unique: true,
        fields: [
          { name: "SYSID" },
        ]
      },
    ]
  });
};
