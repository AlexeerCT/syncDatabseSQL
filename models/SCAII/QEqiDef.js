const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('QEqiDef', {
    CONSECUTIVO: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    FACTURAIMPODEF: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    LINEAIMPODEF: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    FECHAFACTURA: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    NUMPARTE: {
      type: DataTypes.STRING(70),
      allowNull: true
    },
    CLASE: {
      type: DataTypes.STRING(8),
      allowNull: true
    },
    CANTIMPODEF: {
      type: DataTypes.DECIMAL(19,8),
      allowNull: true
    },
    CANTEXPOTEMP: {
      type: DataTypes.DECIMAL(19,8),
      allowNull: true
    },
    CANTEXISTENCIA: {
      type: DataTypes.DECIMAL(19,8),
      allowNull: true
    },
    UNIDADMEDIDA: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    COSTOUNITARIOCAPTURA: {
      type: DataTypes.DECIMAL(23,8),
      allowNull: true
    },
    COSTOUNITARIODLLS: {
      type: DataTypes.DECIMAL(23,8),
      allowNull: true
    },
    COSTOUNITARIOPESOS: {
      type: DataTypes.DECIMAL(23,8),
      allowNull: true
    },
    COSTOUNITARIOSUBPDLLS: {
      type: DataTypes.DECIMAL(23,8),
      allowNull: true
    },
    COSTOUNITARIOSUBPPESOS: {
      type: DataTypes.DECIMAL(23,8),
      allowNull: true
    },
    VALORMN: {
      type: DataTypes.DECIMAL(23,8),
      allowNull: true
    },
    VALORSUBPMN: {
      type: DataTypes.DECIMAL(23,8),
      allowNull: true
    },
    SUBVALORIMPOMN: {
      type: DataTypes.DECIMAL(23,8),
      allowNull: true
    },
    IVAIMPOMN: {
      type: DataTypes.DECIMAL(23,8),
      allowNull: true
    },
    VALORME: {
      type: DataTypes.DECIMAL(23,8),
      allowNull: true
    },
    VALORSUBPME: {
      type: DataTypes.DECIMAL(23,8),
      allowNull: true
    },
    SUBVALORIMPOME: {
      type: DataTypes.DECIMAL(23,8),
      allowNull: true
    },
    IVAIMPOME: {
      type: DataTypes.DECIMAL(23,8),
      allowNull: true
    },
    VALORIMPOMC: {
      type: DataTypes.DECIMAL(23,8),
      allowNull: true
    },
    SUBVALORIMPOMC: {
      type: DataTypes.DECIMAL(23,8),
      allowNull: true
    },
    IVAIMPOMC: {
      type: DataTypes.DECIMAL(23,8),
      allowNull: true
    },
    NUMPERMISO: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    PAGRENGLON: {
      type: DataTypes.STRING(8),
      allowNull: true
    },
    PAISORIGEN: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    PESONETO: {
      type: DataTypes.DECIMAL(19,8),
      allowNull: true
    },
    PESONETOKGS: {
      type: DataTypes.DECIMAL(19,8),
      allowNull: true
    },
    PESONETOLBS: {
      type: DataTypes.DECIMAL(19,8),
      allowNull: true
    },
    PESOBRUTO: {
      type: DataTypes.DECIMAL(19,8),
      allowNull: true
    },
    PESOBRUTOKGS: {
      type: DataTypes.DECIMAL(19,8),
      allowNull: true
    },
    PESOBRUTOLBS: {
      type: DataTypes.DECIMAL(19,8),
      allowNull: true
    },
    DESCRIPCIONE: {
      type: DataTypes.STRING(900),
      allowNull: true
    },
    DESCRIPCIONI: {
      type: DataTypes.STRING(900),
      allowNull: true
    },
    CLAVEBULTOS: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    CANTBULTOS: {
      type: DataTypes.SMALLINT,
      allowNull: true
    },
    DESCBULTOS: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    FRACCION: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    TIPOFRACCION: {
      type: DataTypes.STRING(7),
      allowNull: true
    },
    TASAIM: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    SECTOR: {
      type: DataTypes.STRING(8),
      allowNull: true
    },
    FRACCIONIMPO: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    TIPOFRACCIMPO: {
      type: DataTypes.STRING(6),
      allowNull: true
    },
    ADVIMPO: {
      type: DataTypes.DECIMAL(5,2),
      allowNull: true
    },
    FRACCIONAMERICANA: {
      type: DataTypes.STRING(16),
      allowNull: true
    },
    ADVAME: {
      type: DataTypes.DECIMAL(5,2),
      allowNull: true
    },
    MARCA: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    MODELO: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    LLEVASERIE: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    CANTRETORNADA: {
      type: DataTypes.DECIMAL(19,8),
      allowNull: true
    },
    CANTRETORNADATEMP: {
      type: DataTypes.DECIMAL(19,8),
      allowNull: true
    },
    VALORRETORNADOMN: {
      type: DataTypes.DECIMAL(23,8),
      allowNull: true
    },
    VALORRETORNADOME: {
      type: DataTypes.DECIMAL(23,8),
      allowNull: true
    },
    RECTIFICACION: {
      type: DataTypes.SMALLINT,
      allowNull: true
    },
    LOCALIZACION: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    ESSUBPARTIDA: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    CONTIENESUBP: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    SUBPARTIDA: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ESREPARACION: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    ORDENCOMPRA: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    CERTORIGEN: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    NOCERTIFICADO: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    ASSETNUMBER: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    EQI_MENSAJE: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    EQUIPOPROPIO: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    NUMREFERENCIA: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    CANT_SERIESDEF: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    FOTOACTIVOFIJO: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    CLAVETIPOIV32: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    NUMEROIV32: {
      type: DataTypes.STRING(35),
      allowNull: true
    },
    BODEGA: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    PROVEEDOR: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    REQUISITOR: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    PERMISOROCTAVA: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    FRACCIONROCTAVA: {
      type: DataTypes.STRING(10),
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
    MONTOIGI: {
      type: DataTypes.DECIMAL(19,8),
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
    LINEARO: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ADVALORMELINEAPED: {
      type: DataTypes.DECIMAL(23,8),
      allowNull: true
    },
    ADVALORMNLINEAPED: {
      type: DataTypes.DECIMAL(23,8),
      allowNull: true
    },
    PERMISOSPED: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    LINEAPED: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    TIPOFACTURAASSET: {
      type: DataTypes.STRING(6),
      allowNull: true
    },
    DESCRIPCIONEEXTRA: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    METVALOR: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    CANTIMPOUMA: {
      type: DataTypes.DECIMAL(19,8),
      allowNull: true
    },
    CLAVEUMA: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    ESMCIAMILITAR: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    METVALORVALORDETERMINADO: {
      type: DataTypes.DECIMAL(29,8),
      allowNull: true
    },
    METVALORMOTIVODEUSO: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    LOTE: {
      type: DataTypes.STRING(254),
      allowNull: true
    },
    NUMENTRADA: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    CONTENEDORPARTESII: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    TIPOMAT: {
      type: DataTypes.STRING(30),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'QEqiDef',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "EqiPdf_AKConsLinTipoAs",
        fields: [
          { name: "CONSECUTIVO" },
          { name: "LINEAIMPODEF" },
          { name: "TIPOFACTURAASSET" },
        ]
      },
      {
        name: "EqiPdf_PKConsecLinea",
        unique: true,
        fields: [
          { name: "CONSECUTIVO" },
          { name: "LINEAIMPODEF" },
        ]
      },
      {
        name: "SQL_FK_CLASE_IMPDEF",
        fields: [
          { name: "CLASE" },
        ]
      },
    ]
  });
};
