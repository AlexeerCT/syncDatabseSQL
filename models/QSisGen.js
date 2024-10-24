const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('QSisGen', {
    CONSECUTIVO: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    DTA: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    DTAEXPO: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    SUBEMPRESA: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    PATHARCH: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    PATHARCHTRANSMISION: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    PATHRESPUESTA: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    PATHARCHPED: {
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    PATHARCHPEDCONSM: {
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    PATHGENIMPOTEMP: {
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    PATHGENEXPO: {
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    APLICAPERMAT: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    ACTSEGURIDAD: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    CONTROLDES: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    DIADESACTUAL: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    FECHADES: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    UBIPLANTA: {
      type: DataTypes.STRING(6),
      allowNull: true
    },
    DATOSHISTORICOS: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    TIPOVENRO: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    CANTVENRO: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    OMITIRIMPOSUBPCODBARRAS: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    MUESTRAARCHCODBARRAS: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    CALVALBASETCPED: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    CALVALBASETCPEDEXPO: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    DECIMALESPESO: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    DECIMALESCANT: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    DECIMALESVALOR: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    FACTORIVA: {
      type: DataTypes.DECIMAL(17,4),
      allowNull: true
    },
    FILTROCANTIDAD: {
      type: DataTypes.DECIMAL(19,8),
      allowNull: true
    },
    FIRMAPACKING: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    ESCONDAAMEXPACKING: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    ADVERTENCIATM: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    CALCDEPRECIACION: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    VALMANIFUSADO: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    VALIDADECENCANT: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    MOSTRARADVERTENCIARO: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    USARTRANSPAMEDOCAME: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    CANTVSCANTSERIES: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    COVEFECHAEMISION: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    INTERFACEAACONSOLIDADA: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    INTERFACEAATCFPFF: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    INCLUIROBSCOVEOBSIMPO: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    AGREGARINCREIMPO: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    REPDESCARGOLINEAL: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    IDENTIFICADORNODOSERIECOVE: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    ACTPDFREPORTES: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    PATHARCHPDFIMPO: {
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    PATHARCHPDFEXPO: {
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    MENSAJESVURFC: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    MOSTRARPACKINGLISTINGLES: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ENVIARSUBPARTIDASCOVE: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    RESTRINGEPAISIMPO: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    RESTRINGEPAISEXPO: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    UTILIZARFECHAPAGOPEDDEUNDIAANTERIOR: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    UTILIZARTITULOSALTERNATIVOSIMPRESIONFACTURA: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    USARTCDELAFECHAPAGOPEDIMPOENDESCARGA: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    USARVUDE128O256: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    AGREGARNUMEROEMBARQUE: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    UTILIZARUMDEEXISTENCIAENTRANSMISIONVU: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    UTILIZARCODIGODEBROKERDECLIENTEENMAINX30: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    HOJACALCULOSEPARARINCREMENTABLESANEXO3: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    HOJACALCULODESGLOSEFACTURAANEXO3: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    UTILIZARNOMBREGENERICOMAINX30: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    UTILIZARTCRESPECTOATIPOPED: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    UTILIZARSOLOPARTESNAFTAENCO: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    CAMBIARPESOSPORCOSTOUNITARIO: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    BLOQUEODEEDICIONDEFACTURAS: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    CALCULARCOSTOUNITARIOENBASEAVALORTOTALSCAF: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    IMPRESIONFACTURAALTERNA: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    TRANSMITIRFACALTERNA: {
      type: DataTypes.TINYINT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'QSisGen',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "SisGen_PKConsecutivo",
        unique: true,
        fields: [
          { name: "CONSECUTIVO" },
        ]
      },
    ]
  });
};
