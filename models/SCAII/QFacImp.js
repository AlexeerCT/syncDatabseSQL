const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('QFacImp', {
    CONSECUTIVO: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    PED_PENDIENTE_ASIGNAR: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    PEDIMENTOIMPO: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    REMESA: {
      type: DataTypes.SMALLINT,
      allowNull: true
    },
    FACTURAIMPO: {
      type: DataTypes.STRING(15),
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
    TIPOCAMBIOMM: {
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
    AADUANAL: {
      type: DataTypes.STRING(5),
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
      type: DataTypes.SMALLINT,
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
    CANTIMPO: {
      type: DataTypes.DECIMAL(19,8),
      allowNull: true
    },
    CANT_PARTIDAS: {
      type: DataTypes.SMALLINT,
      allowNull: true
    },
    CANTRETORNADA: {
      type: DataTypes.DECIMAL(19,8),
      allowNull: true
    },
    TRANSPORTISTA: {
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
    INCOTERM: {
      type: DataTypes.STRING(3),
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
      type: DataTypes.DECIMAL(17,6),
      allowNull: true
    },
    SUJECION: {
      type: DataTypes.STRING(14),
      allowNull: true
    },
    OBSERVACIONES: {
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
    TIPOMN: {
      type: DataTypes.STRING(7),
      allowNull: true
    },
    TIPOME: {
      type: DataTypes.STRING(7),
      allowNull: true
    },
    CLAVETIPOIV18: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    NUMEROIV18: {
      type: DataTypes.STRING(35),
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
    CLAVEMONEDA: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    MODTRANS: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    CUALTIPOCAMBIO: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    FECHAEMISION: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    VALSEGUROS: {
      type: DataTypes.DECIMAL(13,0),
      allowNull: true
    },
    SEGUROS: {
      type: DataTypes.DECIMAL(17,6),
      allowNull: true
    },
    EMBALAJES: {
      type: DataTypes.DECIMAL(17,6),
      allowNull: true
    },
    OTROSINCREMENTA: {
      type: DataTypes.DECIMAL(17,6),
      allowNull: true
    },
    PEDIMENTOR1: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    SELLOVALOR2500: {
      type: DataTypes.TINYINT,
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
    FACTURAALTERNA: {
      type: DataTypes.STRING(99),
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
    TIPOMOVIMIENTO: {
      type: DataTypes.STRING(34),
      allowNull: true
    },
    ADUANA_CRUCE: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    NUMTRAILER: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    ESMIXTO: {
      type: DataTypes.STRING(2),
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
    METVALOR: {
      type: DataTypes.STRING(2),
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
    FECHAFACTURA_ISO: {
      type: DataTypes.DATE,
      allowNull: true
    },
    COMOFUEPROCESADA: {
      type: DataTypes.STRING(300),
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
    OBSERVACIONESVU: {
      type: DataTypes.STRING(500),
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
    PUERTOENTRADA: {
      type: DataTypes.STRING(6),
      allowNull: true
    },
    FUEREVISADAMCIA: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    MODOCONTINGENCIA: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    RECINTO: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    SEMAFOROIMPO: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    FACTORIVA: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    VALORIVAMN: {
      type: DataTypes.DECIMAL(23,8),
      allowNull: true
    },
    VALORIVAME: {
      type: DataTypes.DECIMAL(23,8),
      allowNull: true
    },
    TIPODEGUIAAIDENTIFICAR: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    CLAVEDOT: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    SUBDIVISION: {
      type: DataTypes.STRING(19),
      allowNull: true
    },
    FUNGIRCOMOCO: {
      type: DataTypes.STRING(19),
      allowNull: true
    },
    APENDICE17: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    APLICAPARTESII: {
      type: DataTypes.TINYINT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'QFacImp',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "EqiFim_FKFacturaImpo",
        unique: true,
        fields: [
          { name: "FACTURAIMPO" },
        ]
      },
      {
        name: "EqiFim_FKPedimento",
        fields: [
          { name: "PEDIMENTOIMPO" },
        ]
      },
      {
        name: "EqiFim_FKPedImp_Remes",
        fields: [
          { name: "PEDIMENTOIMPO" },
          { name: "REMESA" },
        ]
      },
      {
        name: "EqiFim_PKConsecutivo",
        unique: true,
        fields: [
          { name: "CONSECUTIVO" },
        ]
      },
    ]
  });
};
