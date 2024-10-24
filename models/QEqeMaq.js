const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('QEqeMaq', {
    CONSECUTIVO: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    FACTURAEXPO: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    LINEAEXPO: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    NUMPARTE: {
      type: DataTypes.STRING(70),
      allowNull: true
    },
    FACTURAIMPO: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    LINEAIMPO: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    TIPOMOVIMPO: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    FECHAFACTURA: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    CANTEXPO: {
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
    COSTOUCOMDLLS: {
      type: DataTypes.DECIMAL(23,8),
      allowNull: true
    },
    COSTOACTUALDLLS: {
      type: DataTypes.DECIMAL(23,8),
      allowNull: true
    },
    COSTODEPRECME: {
      type: DataTypes.DECIMAL(23,8),
      allowNull: true
    },
    COSTOUNITARIOPESOS: {
      type: DataTypes.DECIMAL(23,8),
      allowNull: true
    },
    COSTOUCOMPESOS: {
      type: DataTypes.DECIMAL(23,8),
      allowNull: true
    },
    COSTOACTUALMN: {
      type: DataTypes.DECIMAL(23,8),
      allowNull: true
    },
    COSTODEPRECMN: {
      type: DataTypes.DECIMAL(23,8),
      allowNull: true
    },
    VALOREXPOMN: {
      type: DataTypes.DECIMAL(23,8),
      allowNull: true
    },
    VALOREXPOCOMMN: {
      type: DataTypes.DECIMAL(23,8),
      allowNull: true
    },
    VALORACTUALIZADOMN: {
      type: DataTypes.DECIMAL(23,8),
      allowNull: true
    },
    VALOREXPOME: {
      type: DataTypes.DECIMAL(23,8),
      allowNull: true
    },
    VALOREXPOCOMME: {
      type: DataTypes.DECIMAL(23,8),
      allowNull: true
    },
    VALORACTUALIZADOME: {
      type: DataTypes.DECIMAL(23,8),
      allowNull: true
    },
    CLASE: {
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
    FRACCIONEXPO: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    TIPOFRACCION: {
      type: DataTypes.STRING(7),
      allowNull: true
    },
    TASAEX: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    SECTOR: {
      type: DataTypes.STRING(8),
      allowNull: true
    },
    ADVEXPO: {
      type: DataTypes.DECIMAL(5,2),
      allowNull: true
    },
    TIPOFRAC: {
      type: DataTypes.STRING(6),
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
    DESCARGA: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    IDENTIFICADOR: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    RECTIFICACION: {
      type: DataTypes.SMALLINT,
      allowNull: true
    },
    CANT_SERIES: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ORDENCOMPRA: {
      type: DataTypes.STRING(50),
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
    SUBPARTIDA: {
      type: DataTypes.SMALLINT,
      allowNull: true
    },
    INCUYESUBPARTIDAS: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    LLEVACODFDA: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    CLAVEFDA: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    PROCEDENCIA: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    TASADEPRECIA: {
      type: DataTypes.DECIMAL(5,2),
      allowNull: true
    },
    FRACCIONREFERENCIA: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    DESCRIPCIONEEXTRA: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ENVIADOA: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    VALORADUANASMN: {
      type: DataTypes.DECIMAL(23,8),
      allowNull: true
    },
    VALORADUANASME: {
      type: DataTypes.DECIMAL(19,8),
      allowNull: true
    },
    TIPOBUSQUEDA: {
      type: DataTypes.STRING(10),
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
    PAGOIMPUESTO: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    FORMAPAGO: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    ADVALORMELINEAPED: {
      type: DataTypes.DECIMAL(19,8),
      allowNull: true
    },
    ADVALORMNLINEAPED: {
      type: DataTypes.DECIMAL(19,8),
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
    CLAVEFCC: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    TIPOFACTURAASSET: {
      type: DataTypes.STRING(6),
      allowNull: true
    },
    CANTEXPOUMA: {
      type: DataTypes.DECIMAL(19,8),
      allowNull: true
    },
    CLAVEUMA: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    VALOREXPOMC: {
      type: DataTypes.DECIMAL(29,8),
      allowNull: true
    },
    METVALOR: {
      type: DataTypes.STRING(2),
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
    CONTENEDORREGLA: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    CONSECUTIVOAPHIS: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'QEqeMaq',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "EqiPex_AKConsLinTipoAs",
        fields: [
          { name: "CONSECUTIVO" },
          { name: "LINEAEXPO" },
          { name: "TIPOFACTURAASSET" },
        ]
      },
      {
        name: "EqiPex_FKFacImpLinImp",
        fields: [
          { name: "FACTURAIMPO" },
          { name: "LINEAIMPO" },
        ]
      },
      {
        name: "EqiPex_PKConsecLinea",
        unique: true,
        fields: [
          { name: "CONSECUTIVO" },
          { name: "LINEAEXPO" },
        ]
      },
    ]
  });
};
