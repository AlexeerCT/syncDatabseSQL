const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('GManifestacionValor', {
    CONSECUTIVO: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    NUMEROMANVAL: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    PEDIMENTO: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    PERIODICIDAD: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    SEMESTRE: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    ANIO: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    TIPOPEDIMENTO: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    CLAVEAA: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    PATENTE: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    NOMBRES: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    APELLIDOPATERNO: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    APELLIDOMATERNO: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    CANTMETODOSUTIL: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    METVALPORMCIAPRO: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    'VALORTRANSACCIÓN': {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    VALTRAMCIASIDENTICAS: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    VALTRAMCIASSIMILARES: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    VALPREUNIVENTA: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    VALRECONSTRUIDO: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    VALDETART78: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    VALDECLARACIONVALORPROV: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    PRESENTAANEXOS: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    NUMHOJASANEX: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    PRECIOPAGADOMETVALTRANS: {
      type: DataTypes.DECIMAL(19,8),
      allowNull: true
    },
    PRECIOPREFAC: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    PRECIOOTROSDOC: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    CONCEPSENALART66: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    CONCEPART66DESGLOSAODOS: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    ANEXORELART66: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    PREPAGADOMCIASART65: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    ANEXORELART65: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    BASEGRAVNOCOMPRAVENTA: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    EXISTECIRCDISTART67Y71: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    ANEXOVALADUANA: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    VALDETPROVISIONAL: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    ANEXOCONSTAVALMCIA: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    RFCREPLEGAL: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    REPRESANTANTELEGAL: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    FECHA: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    FACTURASELECCIONADA: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    OPCIONFACTURA: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    IMPORTADORAUSAR: {
      type: DataTypes.STRING(8),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'GManifestacionValor',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "ManVal_NumeroManVal",
        unique: true,
        fields: [
          { name: "NUMEROMANVAL" },
        ]
      },
      {
        name: "ManVal_PKConsecutivo",
        unique: true,
        fields: [
          { name: "CONSECUTIVO" },
        ]
      },
    ]
  });
};
