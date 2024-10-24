const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SPartes', {
    NUMPARTE: {
      type: DataTypes.STRING(70),
      allowNull: false,
      primaryKey: true
    },
    TIPOPARTE: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    NUMPARTECOM: {
      type: DataTypes.STRING(70),
      allowNull: true
    },
    NUMPARTEREF: {
      type: DataTypes.STRING(70),
      allowNull: true
    },
    DESCRIPCIONE: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    DESCRIPCIONI: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    CLASE: {
      type: DataTypes.STRING(8),
      allowNull: true
    },
    UNIMED: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    UNIMEDEQUIV: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    FACTORCONV: {
      type: DataTypes.DECIMAL(19,8),
      allowNull: true
    },
    COSTOUNITARIO: {
      type: DataTypes.DECIMAL(23,8),
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
    PESOUNITARIO: {
      type: DataTypes.DECIMAL(19,8),
      allowNull: true
    },
    TIPOMAT: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    FRACCION: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    FRACCIONAME: {
      type: DataTypes.STRING(16),
      allowNull: true
    },
    ADVALOREMAME: {
      type: DataTypes.DECIMAL(5,2),
      allowNull: true
    },
    FRACCAMEEXPONDUTY: {
      type: DataTypes.STRING(16),
      allowNull: true
    },
    FRACEUA: {
      type: DataTypes.STRING(13),
      allowNull: true
    },
    FRACCANADA: {
      type: DataTypes.STRING(13),
      allowNull: true
    },
    SUBEMPRESA: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    UMEXISTENCIA: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    VALORAGREGADO: {
      type: DataTypes.DECIMAL(23,8),
      allowNull: true
    },
    TIPOVA: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    FECHAMODIFICA: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    UNIMEDALTERNA: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    CLAVEFDA: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    LEYENDASEG: {
      type: DataTypes.STRING(1500),
      allowNull: true
    },
    VALORNOORIG: {
      type: DataTypes.DECIMAL(23,8),
      allowNull: true
    },
    IMPPAGAR: {
      type: DataTypes.DECIMAL(19,8),
      allowNull: true
    },
    DESCESPSCRAP: {
      type: DataTypes.STRING(499),
      allowNull: true
    },
    DESCINGSCRAP: {
      type: DataTypes.STRING(499),
      allowNull: true
    },
    FRACEXPOSCRAP: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    FRACAMESCRAP: {
      type: DataTypes.STRING(16),
      allowNull: true
    },
    FECHACOSTO: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    FOTOPARTE: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    CAPXUMAUXILIAR: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    FACTORAUXILIAR: {
      type: DataTypes.DECIMAL(13,6),
      allowNull: true
    },
    UMAUXILIAR: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    COSTOUAUXILIAR: {
      type: DataTypes.DECIMAL(23,8),
      allowNull: true
    },
    CAPTXKILO: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    CANTKILO: {
      type: DataTypes.DECIMAL(19,8),
      allowNull: true
    },
    COSTOVENTA: {
      type: DataTypes.DECIMAL(19,8),
      allowNull: true
    },
    CANTPZXCJ: {
      type: DataTypes.DECIMAL(15,0),
      allowNull: true
    },
    VERSIONBILL: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    NUMPARTESUS: {
      type: DataTypes.STRING(70),
      allowNull: true
    },
    ESREPARACION: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    COSTOUNITARIOREP: {
      type: DataTypes.DECIMAL(23,8),
      allowNull: true
    },
    USACANTALTERNA: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    FECHAMODBOM: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    FECHAMODFRACAME: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    VALORAGREGADOREP: {
      type: DataTypes.DECIMAL(23,8),
      allowNull: true
    },
    ESMATPELIGROSO: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    NUMEMERGENCIA: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    CLASEDEPELIGRO: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    NUMIDENTIFICACIONUN: {
      type: DataTypes.STRING(6),
      allowNull: true
    },
    GRUPOEMBALAJE: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    NOMAPROPIADOEMB: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    NOTASMATPELIGROSO: {
      type: DataTypes.STRING(499),
      allowNull: true
    },
    VALORDUTY: {
      type: DataTypes.DECIMAL(23,8),
      allowNull: true
    },
    FLETEDUTY: {
      type: DataTypes.DECIMAL(23,8),
      allowNull: true
    },
    VALORTOTALDUTY: {
      type: DataTypes.DECIMAL(23,8),
      allowNull: true
    },
    VALORNODUTY: {
      type: DataTypes.DECIMAL(23,8),
      allowNull: true
    },
    FLETENODUTY: {
      type: DataTypes.DECIMAL(23,8),
      allowNull: true
    },
    VALORTOTALNDUTY: {
      type: DataTypes.DECIMAL(23,8),
      allowNull: true
    },
    VALORTOTAL: {
      type: DataTypes.DECIMAL(23,8),
      allowNull: true
    },
    TRABAJODIREC: {
      type: DataTypes.DECIMAL(23,8),
      allowNull: true
    },
    GASTOGRALES: {
      type: DataTypes.DECIMAL(23,8),
      allowNull: true
    },
    OTROSGASTOS: {
      type: DataTypes.DECIMAL(23,8),
      allowNull: true
    },
    TOTALGASTOS: {
      type: DataTypes.DECIMAL(23,8),
      allowNull: true
    },
    DEPRECIACION: {
      type: DataTypes.DECIMAL(23,8),
      allowNull: true
    },
    TOOLING: {
      type: DataTypes.DECIMAL(23,8),
      allowNull: true
    },
    MATCONSUMED: {
      type: DataTypes.DECIMAL(23,8),
      allowNull: true
    },
    VALORSCRAP: {
      type: DataTypes.DECIMAL(23,8),
      allowNull: true
    },
    FORENGDESDEV: {
      type: DataTypes.DECIMAL(23,8),
      allowNull: true
    },
    VALTOTALASIST: {
      type: DataTypes.DECIMAL(23,8),
      allowNull: true
    },
    VALEMPAQUEFOR: {
      type: DataTypes.DECIMAL(23,8),
      allowNull: true
    },
    GANANCIA: {
      type: DataTypes.DECIMAL(23,8),
      allowNull: true
    },
    DUTIABLEVALUE7: {
      type: DataTypes.DECIMAL(23,8),
      allowNull: true
    },
    OTROSNDUTIABLE: {
      type: DataTypes.DECIMAL(23,8),
      allowNull: true
    },
    COSTOESTIMADO: {
      type: DataTypes.DECIMAL(23,8),
      allowNull: true
    },
    TOTALNDUTIABLE: {
      type: DataTypes.DECIMAL(23,8),
      allowNull: true
    },
    ACTUALDUTIABLE: {
      type: DataTypes.DECIMAL(23,8),
      allowNull: true
    },
    VALEMPAQUEUS: {
      type: DataTypes.DECIMAL(23,8),
      allowNull: true
    },
    VALEMPAQUENAC: {
      type: DataTypes.DECIMAL(23,8),
      allowNull: true
    },
    FECHACOSTOAME: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ESTEXTIL: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    PROVEEDOR: {
      type: DataTypes.STRING(8),
      allowNull: true
    },
    ECCN: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    SIMBOLOEXCLIC: {
      type: DataTypes.STRING(19),
      allowNull: true
    },
    CAMPOOPCIONAL: {
      type: DataTypes.STRING(800),
      allowNull: true
    },
    UNIMEDEQUIV2: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    FACTORCONV2: {
      type: DataTypes.DECIMAL(19,8),
      allowNull: true
    },
    LABORCOST: {
      type: DataTypes.DECIMAL(19,8),
      allowNull: true
    },
    EXPORTCODE: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    LICENSECODE: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    CAMPOOPCIONALBOM: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    TIPOPESO: {
      type: DataTypes.STRING(6),
      allowNull: true
    },
    TIPOIMMEX: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    CLAVEFCC: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    NUMPARTESCRAP: {
      type: DataTypes.STRING(70),
      allowNull: true
    },
    NUMPARTEMERMA: {
      type: DataTypes.STRING(70),
      allowNull: true
    },
    FACTORDESP: {
      type: DataTypes.DECIMAL(19,8),
      allowNull: true
    },
    HABILITADADESHABILITADA: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    FECHAMODIFICA_ISO: {
      type: DataTypes.DATE,
      allowNull: true
    },
    VERSIONBOM: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ORDENVENTA: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    CLIENTEASIGNADO: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ANCHURA: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ESPESOR: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    SPEC: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    FACTORCONVERSION: {
      type: DataTypes.DECIMAL(19,8),
      allowNull: true
    },
    UMCONVERSION: {
      type: DataTypes.STRING(9),
      allowNull: true
    },
    NOTIFICARSIPARTEUSAREGLA8VA: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    FECHACREACIONPARTE: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    LLENARINFOSUGERIDAR8: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    RESULTADOCALCULONAFTA: {
      type: DataTypes.STRING(19),
      allowNull: true
    },
    PORCENTAJECALCULONAFTA: {
      type: DataTypes.DECIMAL(5,2),
      allowNull: true
    },
    MDI: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    CONSECUTIVOATF: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    FRACCIONAMERICANASIFRA: {
      type: DataTypes.STRING(19),
      allowNull: true
    },
    NUMPARTEREFFLEX: {
      type: DataTypes.STRING(120),
      allowNull: true
    },
    DTA: {
      type: DataTypes.STRING(19),
      allowNull: true
    },
    DTB: {
      type: DataTypes.STRING(19),
      allowNull: true
    },
    DTG: {
      type: DataTypes.STRING(19),
      allowNull: true
    },
    IDENTIFICADOR: {
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    CONSECUTIVOAPHIS: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SPartes',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "Partes_PKNumParte",
        unique: true,
        fields: [
          { name: "NUMPARTE" },
        ]
      },
    ]
  });
};
