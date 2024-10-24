const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SSisExpo', {
    TIPOFACTURA: {
      type: DataTypes.STRING(5),
      allowNull: false,
      primaryKey: true
    },
    PORPARTECLASEMEX: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    PORPARTECLASEAME: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    PREFIJOEXPO: {
      type: DataTypes.STRING(9),
      allowNull: true
    },
    CONSECUTIVOEXPO: {
      type: DataTypes.STRING(6),
      allowNull: true
    },
    PEDIMENTO: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    PROVEEDOR: {
      type: DataTypes.STRING(8),
      allowNull: true
    },
    VENDIDOCONSIGNADO: {
      type: DataTypes.STRING(13),
      allowNull: true
    },
    VENDIDOA: {
      type: DataTypes.STRING(8),
      allowNull: true
    },
    ENVIADOTRANSFERIDO: {
      type: DataTypes.STRING(14),
      allowNull: true
    },
    ENVIADOA: {
      type: DataTypes.STRING(8),
      allowNull: true
    },
    VENDIDOPOR: {
      type: DataTypes.STRING(8),
      allowNull: true
    },
    AADUANAL: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    TIPO: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    INCOTERM: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    FLETE: {
      type: DataTypes.DECIMAL(17,6),
      allowNull: true
    },
    IDENTIFICADOR: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    TIPOMONEDA: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    MONEDA: {
      type: DataTypes.STRING(10),
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
    DECIMALESCOSTO: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    NUMPARTEMEX: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    PAISORIGENMEX: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    FRACCIONEXP: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    TASAFRACCMEX: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    COSTOUNITMEX: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    ORDENCOMPMEX: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    CONSFACMEX: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    UMEQUIVALENTEMEX: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    OCULTAREMPAQUEMEX: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    OCULTAREMPAQUEAME: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    COSTOUNITMPMEX: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    CODIGOBARRAS: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    PARTECOMPLEMENTARIAMEX: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    VALORDLLSMEXPESOS: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    CANTPNCODBAR: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    DTACEROCODBAR: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    FIRMAFMEX: {
      type: DataTypes.STRING(350),
      allowNull: true
    },
    NUMPARTEAME: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    FIRMAFAME: {
      type: DataTypes.STRING(350),
      allowNull: true
    },
    FRACCIONAME: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    PAISORIGENAME: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    ORDENCOMPAME: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    UMEQUIVALENTEAME: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    FDAINFORMACIONAME: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    PAISOPCAME: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    MUESTRAFREE: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    FRACCMEXDES: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    TIPOFRACCMEXDES: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    COLVALORDES: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    COLPESODES: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    DESCARGACLASE: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    DESCARGASUST: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    DESCARGADEF: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    VENTQUEUEACT: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    CODIGOSCAC: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    FORMADESPERDICIO: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    CALVALORBASECOSTO: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    CALVABASECAPT: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    CALPESOBASEDESCARGA: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    CALEMPAQUEBASECAPT: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    OCULTCANTCONS: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    PREFIJOFRACCMULT: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    CANTLIMITE: {
      type: DataTypes.DECIMAL(19,8),
      allowNull: true
    },
    PESOLIMITE: {
      type: DataTypes.DECIMAL(19,8),
      allowNull: true
    },
    VALORLIMITE: {
      type: DataTypes.DECIMAL(23,8),
      allowNull: true
    },
    COSTAMEPAISPARTE: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    BASECOSTOMPOTOTAL: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    UMEQUIVALENTEMEX2: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    UMEQUIVALENTEAME2: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    TOTALEQUIVMEX: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    TOTALEQUIVAME: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    INFOADICIONAL: {
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    RESTRINGEEXPOMP: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    CALVATOTAGREMP: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    ACTIVAADVPEDRTV1: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    ASIGNAFRACC9801: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    VALOREXCFRACC9801: {
      type: DataTypes.DECIMAL(19,8),
      allowNull: true
    },
    PAGOIMPUESTO: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    FORMAPAGO: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    SCRAPSOLONODUTY: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    DESCEXTRAAMEPARTES: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    INCAMBIOREGDESC: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    ESCAMBIOREGIMEN: {
      type: DataTypes.STRING(2),
      allowNull: false,
      primaryKey: true
    },
    DESCNOCONTEMCANT: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    METVALOR: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    TRANSPORTISTA: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    AADUANALAME: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    PESONETODESDIFFAC: {
      type: DataTypes.DECIMAL(19,8),
      allowNull: true
    },
    ENVIADOPORVENDIDOPOR: {
      type: DataTypes.STRING(14),
      allowNull: true
    },
    CONDUCTOR: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    TRANSPORTE: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    NUMTRANSPORTE: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    OBSERVACIONE: {
      type: DataTypes.STRING(2000),
      allowNull: true
    },
    OBSERVACIONI: {
      type: DataTypes.STRING(2000),
      allowNull: true
    },
    CLAVEBULTOS: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    OCULTACOLVA: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    CALCCOSTOSAMEBASEMEX: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    PROVEEDOREXPORTADOR: {
      type: DataTypes.STRING(13),
      allowNull: true
    },
    TIPOFRACCMEX: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    PARTECOMPLEMEXPARTIDA: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    VALIDACANTPARCANDES: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    CANTLIMITEMIN: {
      type: DataTypes.DECIMAL(19,8),
      allowNull: true
    },
    PESOLIMITEMIN: {
      type: DataTypes.DECIMAL(19,8),
      allowNull: true
    },
    VALORLIMITEMIN: {
      type: DataTypes.DECIMAL(23,8),
      allowNull: true
    },
    COSTOSAMEPAIS: {
      type: DataTypes.CHAR(20),
      allowNull: true
    },
    INCLUIRFRACAMEBIL: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    SOLICITARPSWDACTUAL: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    SOLICITARPSWDDESACTUAL: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    BUSCARSALDOSRECIENTES: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    PACKINGORDENVENTA: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    IMPRIMIRORDENVENTA: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    FIRMAELECTRONICA: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    MPF: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    VALORMPF: {
      type: DataTypes.DECIMAL(19,8),
      allowNull: true
    },
    COLCANTPORPESO: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    PACKINGPEDCLAVE: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    GENERAFACTURAIMD: {
      type: DataTypes.STRING(19),
      allowNull: true
    },
    GENERAFACTURAIMDENBASEA: {
      type: DataTypes.STRING(19),
      allowNull: true
    },
    SOLICITARCONTRASENAADMINISTRADOR: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    INCLUIRLINEADELPO: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    VALORPACKING1DLLS: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    TOMARVALORMEXENFACAME: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    LINEAPERSONAAA: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    CALAMEBASEMEXMP: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    CALAMEBASEMEXVA: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    CALAMEBASEMEXEMPAQUE: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    USARVAENFACTURAAMERICANA: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    ACTIVARFECHACORTESALDOS: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    FECHACORTESALDOS: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    IMPRIMIRLOTE: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    IMPRIMIRNUMENTRADA: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    RESPALDARDESCARGAENDESCARGAM: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    OCULTARFECHAHORA: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    CALCULARVALORESAMERICANOSENBASEAPARTIDA: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    VALIDARESTATUSPED: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    DESCAPAIS: {
      type: DataTypes.TINYINT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SSisExpo',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "SSExpo_PKTipoFacturaEsCR",
        unique: true,
        fields: [
          { name: "TIPOFACTURA" },
          { name: "ESCAMBIOREGIMEN" },
        ]
      },
    ]
  });
};
