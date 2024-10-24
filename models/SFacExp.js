const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SFacExp', {
    CONSECUTIVO: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    PED_PENDIENTE_ASIGNAR: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    PEDIMENTOEXPO: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    PEDIMENTOR1: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    PEDIMENTOK1: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    REMESA: {
      type: DataTypes.SMALLINT,
      allowNull: true
    },
    FACTURAEXPO: {
      type: DataTypes.STRING(19),
      allowNull: true
    },
    FECHAFACTURA: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    TIPOCAMBIO: {
      type: DataTypes.DECIMAL(13,6),
      allowNull: true
    },
    TIPODOC: {
      type: DataTypes.STRING(5),
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
    MANIFIESTO: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    ESTATUS: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    ESTATUSREC: {
      type: DataTypes.TINYINT,
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
    VALOREXPOMN: {
      type: DataTypes.DECIMAL(23,8),
      allowNull: true
    },
    VALORMPMN: {
      type: DataTypes.DECIMAL(23,8),
      allowNull: true
    },
    VALORAGREMN: {
      type: DataTypes.DECIMAL(23,8),
      allowNull: true
    },
    IVAEXPOMN: {
      type: DataTypes.DECIMAL(23,8),
      allowNull: true
    },
    VALORVMEXMN: {
      type: DataTypes.DECIMAL(23,8),
      allowNull: true
    },
    VALEMPAQUENACMN: {
      type: DataTypes.DECIMAL(23,8),
      allowNull: true
    },
    VALOREXPOME: {
      type: DataTypes.DECIMAL(23,8),
      allowNull: true
    },
    VALORMPME: {
      type: DataTypes.DECIMAL(23,8),
      allowNull: true
    },
    VALORAGREME: {
      type: DataTypes.DECIMAL(23,8),
      allowNull: true
    },
    IVAEXPOME: {
      type: DataTypes.DECIMAL(23,8),
      allowNull: true
    },
    VALORVMEXME: {
      type: DataTypes.DECIMAL(23,8),
      allowNull: true
    },
    VALEMPAQUENACME: {
      type: DataTypes.DECIMAL(23,8),
      allowNull: true
    },
    FACTORIVA: {
      type: DataTypes.DECIMAL(17,4),
      allowNull: true
    },
    CANTEXPO: {
      type: DataTypes.DECIMAL(19,8),
      allowNull: true
    },
    CANT_PARTIDAS: {
      type: DataTypes.SMALLINT,
      allowNull: true
    },
    TRANSPORTISTA: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    TRANSPORTISTAAME: {
      type: DataTypes.STRING(5),
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
    NUMTRASPORTE: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    NUMTRASPORTECOMPLE: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    INCOTERM: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    IDENTIFICADOR: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    COMPLEMENTO1: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    IDENTIFICADOR2: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    COMPLEMENTO2: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    PRECINTO: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    SUBEMPRESA: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    FLETE: {
      type: DataTypes.DECIMAL(19,8),
      allowNull: true
    },
    VALSEGUROS: {
      type: DataTypes.DECIMAL(19,8),
      allowNull: true
    },
    SEGUROS: {
      type: DataTypes.DECIMAL(19,8),
      allowNull: true
    },
    EMBALAJES: {
      type: DataTypes.DECIMAL(19,8),
      allowNull: true
    },
    OTROSINCREMENTA: {
      type: DataTypes.DECIMAL(19,8),
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
    TIPOMONEDA: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    CLAVEMONEDA: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    TIPOFACTURA: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    GENERAID: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    ACTVALOR: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    MODTRANS: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    BILLNUMBER: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    APLICADESCMANUAL: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    DESTINOMCIA: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    FECHAPAGO: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    NUMRECIBOPAGO: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    VALORIMPUESTOME: {
      type: DataTypes.DECIMAL(23,8),
      allowNull: true
    },
    TIPODESPERDICIO: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    ESCAMBIOREGIMEN: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    CUALTIPOCAMBIO: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    TOTALINCREMMN: {
      type: DataTypes.DECIMAL(23,8),
      allowNull: true
    },
    TOTALINCREMME: {
      type: DataTypes.DECIMAL(23,8),
      allowNull: true
    },
    VALORADUANASMN: {
      type: DataTypes.DECIMAL(23,8),
      allowNull: true
    },
    VALORADUANASME: {
      type: DataTypes.DECIMAL(23,8),
      allowNull: true
    },
    ESTATUSREP: {
      type: DataTypes.STRING(2),
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
    DESCARGASUST: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    DESCARGACLASE: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    DESCARGADEF: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    ESAGRANEL: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    NUMEROPROFORMA: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    NUMEROGUIA: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    NUMEMBARQUE: {
      type: DataTypes.STRING(19),
      allowNull: true
    },
    RECIBIDOPOR: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    FECHAENTREGA: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ENTREGADO: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    NUMTRAILER: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    ENVIADOPORVENDIDOPOR: {
      type: DataTypes.STRING(14),
      allowNull: true
    },
    NUMREFERENCIA: {
      type: DataTypes.STRING(14),
      allowNull: true
    },
    OFICIO: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    AADUANALAME: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    TIPOPESO: {
      type: DataTypes.STRING(6),
      allowNull: true
    },
    ADUANA_CRUCE: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    TIPOMOVIMIENTO: {
      type: DataTypes.STRING(34),
      allowNull: true
    },
    FACTURAALTERNA: {
      type: DataTypes.STRING(99),
      allowNull: true
    },
    USUARIOACT: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    USUARIOCAP: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    FECHACAPTURA: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    COMENTARIOSESTATUS: {
      type: DataTypes.STRING(5000),
      allowNull: true
    },
    SEMAFORO: {
      type: DataTypes.STRING(9),
      allowNull: true
    },
    NUMPROYECTO: {
      type: DataTypes.STRING(14),
      allowNull: true
    },
    METVALOR: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    TIPOSCRAP: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    NUMFACTURABROKER: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    FECHAFACBROKER: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    IDRELDOC: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    CLAVEFIRMA: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    GENDESCPARTIDAS: {
      type: DataTypes.STRING(12),
      allowNull: true
    },
    FECHAFACTURA_ISO: {
      type: DataTypes.DATE,
      allowNull: true
    },
    COMOFUEPROCESADA: {
      type: DataTypes.STRING(300),
      allowNull: true
    },
    FACTURAEXPOREF: {
      type: DataTypes.STRING(19),
      allowNull: true
    },
    ESMIXTO: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    PROVEEDOREXPORTADOR: {
      type: DataTypes.STRING(13),
      allowNull: true
    },
    EDOCUMENT: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    NUMOPERACIONVU: {
      type: DataTypes.STRING(19),
      allowNull: true
    },
    LINEAPERSONAAA: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    TIPOCAMBIOMM: {
      type: DataTypes.DECIMAL(13,6),
      allowNull: true
    },
    VALOREXPOMC: {
      type: DataTypes.DECIMAL(23,8),
      allowNull: true
    },
    VALORAGREMC: {
      type: DataTypes.DECIMAL(23,8),
      allowNull: true
    },
    IVAEXPOMC: {
      type: DataTypes.DECIMAL(23,8),
      allowNull: true
    },
    VALEMPAQUENACMC: {
      type: DataTypes.DECIMAL(23,8),
      allowNull: true
    },
    VALORVMEXMC: {
      type: DataTypes.DECIMAL(23,8),
      allowNull: true
    },
    OBSERVACIONESVU: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    ORIGENUBICACION: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    DESTINOUBICACION: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    ITINERARIOTRANPORTE: {
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    SETRATAPROCESOCTM: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    FIRMAELECTRONICA: {
      type: DataTypes.STRING(999),
      allowNull: true
    },
    NUMEROCERTIFICADO: {
      type: DataTypes.STRING(99),
      allowNull: true
    },
    CONTENEDORESTIPO: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    DATOSVEHICULO: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    NUMERONIU: {
      type: DataTypes.STRING(19),
      allowNull: true
    },
    CANTGUIASEMBARQUE: {
      type: DataTypes.STRING(12),
      allowNull: true
    },
    ADENDAVU: {
      type: DataTypes.STRING(204),
      allowNull: true
    },
    ESFERROCARRIL: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    DESTINOORIGENCOVE: {
      type: DataTypes.STRING(19),
      allowNull: true
    },
    FECHAEMISION: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    MODOCONTINGENCIA: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    RAZONEXPORTACION: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    ORDENCOMPRA: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    TERMINOSPAGO: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    MANIOBRAS: {
      type: DataTypes.DECIMAL(19,8),
      allowNull: true
    },
    RECINTO: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    SEMAFOROEXPO: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    OPCIONIV18: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    TIPODEGUIAAIDENTIFICAR: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    LOCALIZACION: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    CFDIUUID: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    CFDIPATHPDF: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    CFDIPATHXML: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    CLAVEDOT: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    SUBDIVISION: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    FUNGECOMOCO: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    ENAJENACIONBIENES: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    APENDICE17: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    TIPOMOV: {
      type: DataTypes.STRING(31),
      allowNull: true
    },
    IDFERRORCARRIL: {
      type: DataTypes.STRING(31),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SFacExp',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "MatFex_FKFacProforma",
        fields: [
          { name: "NUMEROPROFORMA" },
        ]
      },
      {
        name: "MatFex_FKFacturaExpo",
        unique: true,
        fields: [
          { name: "FACTURAEXPO" },
        ]
      },
      {
        name: "MatFex_FKManFacExp",
        fields: [
          { name: "MANIFIESTO" },
          { name: "FACTURAEXPO" },
        ]
      },
      {
        name: "MatFex_FKPedExpRem",
        fields: [
          { name: "PEDIMENTOEXPO" },
          { name: "REMESA" },
        ]
      },
      {
        name: "MatFex_FKPedimento",
        fields: [
          { name: "PEDIMENTOEXPO" },
        ]
      },
      {
        name: "MatFex_PKConsecutivo",
        unique: true,
        fields: [
          { name: "CONSECUTIVO" },
        ]
      },
    ]
  });
};
