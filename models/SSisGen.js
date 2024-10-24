const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SSisGen', {
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
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    PATHARCHTRANSMISION: {
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    PATHTRANSEXPO: {
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    PATHRESPUESTA: {
      type: DataTypes.STRING(1000),
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
    DIAVENCIMIENTO: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    MENSAJEVENC: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    FECHADES: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    FACTORIVA: {
      type: DataTypes.DECIMAL(17,4),
      allowNull: true
    },
    VALIDASIFRA: {
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
    CALVALBASETCPED: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    CALVALBASETCPEDEXPO: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    FILTROCANTIDAD: {
      type: DataTypes.DECIMAL(19,8),
      allowNull: true
    },
    MUESTRAARCHCODBARRAS: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    DATOSHIST: {
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
    COSTOPLANTA: {
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
    COSTOIMPOFIJO: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    TOMARSALDOSVENC: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    VALPARTEEXISTE: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    VALMANIFUSADO: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    TEMPORALFECHAPAGO: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    ASIGNADIASANTDESC: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    DIASANTDESC: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    DESHABILITARDESCPARTE: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    DESHABILITARDESCPARTEING: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    ASIGNAFRACAMEPARTE: {
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
    CALCDUTYPACKING: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    PARAMMULTIPLES: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    FRACCNIVELPAIS: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    COVEFECHAEMISION: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    VALORDLLSTCFACTURAEXPO: {
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
    COMPONENTEBOM: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    LIMITESUBENSAMBLE: {
      type: DataTypes.INTEGER,
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
    NOIMPRIMIRCONS: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    MOSTRARADVERTENCIAROVALOR: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    PARTESYPEDIMENTOSPORCLIENTE: {
      type: DataTypes.STRING(1),
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
    OMITIREMPAQUEENCODIGOBARRAS: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    RESTRINGEPAISIMPO: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    RESTRINGPAISEXPO: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    BLOQUEOALDESACTIVARNUMERODEPARTE: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    GENINFORMEANEXO31: {
      type: DataTypes.STRING(8),
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
    UTILIZAREQUIVALENCIASDEUMPORNUMERODEPARTE: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    USARFACTORCONVERSIONPORNUMERODEPARTE: {
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
    SOLICITARCONTRASENAADMINISTRADOR: {
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
    USARVALORAGREGADOENFACTURAAMERICANA: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    OCULTARINFORMACIONFRACCION: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    VALORAGREGADOENFACTURAMEXICANA: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    RESALTARSALDOSTEMPCONCOLOR: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    VALIDARSECTORPROSECR8: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    AGREGARSUBTOTALINTERFAZAA: {
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
    TOMARDECIMALESCOMPLETOS: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    INCLUIRREMESAENINTERFAZAAWINSAAI: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    CAMBIARPESOSPORCOSTOUNITARIO: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    UTILIZARSOLOPARTESNAFTAENCO: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    BLOQUEODEEDICIONDEFACTURAS: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    REASIGNAFRACCIONCLASE: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    CALCULARCOSTOUNITARIOENBASEAVALORTOTAL: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    PARAMETROAUXILIAR: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    USARCONTROLDEFECHASDEVERSION: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    DESACTIVACIONDEMODULOS: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    IMPRIMIRFACTURAALTERNA: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    ACTIVAREXPEDIENTEELECTRONICO: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    INFORMACIONAMERICANASUBTOTAL: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    ACTIVARCATALOGOFRACCIONESAMERICANASSIFRA: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    MOSTRARPROGRAMAIMMEXPROSEC: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    COSTOUNITARIOPOREMPAQUEFAC: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    TRANSMITIRFACALTERNA: {
      type: DataTypes.TINYINT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SSisGen',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "SSGen_PKConsecutivo",
        unique: true,
        fields: [
          { name: "CONSECUTIVO" },
        ]
      },
    ]
  });
};
