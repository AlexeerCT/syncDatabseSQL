const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SSaldoDef', {
    TIPOSALDO: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    FACTURAIMPO: {
      type: DataTypes.STRING(15),
      allowNull: false,
      primaryKey: true
    },
    PEDIMENTOIMPODEF: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    FECHAFACTURA: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    SUBEMPRESA: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    CLASE: {
      type: DataTypes.STRING(8),
      allowNull: true
    },
    NUMPARTE: {
      type: DataTypes.STRING(70),
      allowNull: false,
      primaryKey: true
    },
    DESCRIPCIONE: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    PAISORIGEN: {
      type: DataTypes.STRING(3),
      allowNull: false,
      primaryKey: true
    },
    ESNAFTA: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    NOCERTIFICADO: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    CANTIDADCLASE: {
      type: DataTypes.DECIMAL(19,8),
      allowNull: true
    },
    UNIMEDCLASE: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    CANTUSADA: {
      type: DataTypes.DECIMAL(19,8),
      allowNull: true
    },
    CANTUSADADESP: {
      type: DataTypes.DECIMAL(19,8),
      allowNull: true
    },
    PESONETO: {
      type: DataTypes.DECIMAL(19,8),
      allowNull: true
    },
    PESOUSADO: {
      type: DataTypes.DECIMAL(19,8),
      allowNull: true
    },
    PESOBRUTO: {
      type: DataTypes.DECIMAL(19,8),
      allowNull: true
    },
    PESOBRUTOUSADO: {
      type: DataTypes.DECIMAL(19,8),
      allowNull: true
    },
    CANTEXITENCIA: {
      type: DataTypes.DECIMAL(19,8),
      allowNull: true
    },
    CANTGENDESP: {
      type: DataTypes.DECIMAL(19,8),
      allowNull: true
    },
    UMEXITENCIA: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    CANTPARTIDA: {
      type: DataTypes.DECIMAL(19,8),
      allowNull: true
    },
    UMPARTIDA: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    CLAVEBULTOS: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    DESCBULTO: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    CANTBULTOS: {
      type: DataTypes.INTEGER,
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
    VALORIMPOMN: {
      type: DataTypes.DECIMAL(23,8),
      allowNull: true
    },
    VALORUSADOMN: {
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
    VALORIMPOME: {
      type: DataTypes.DECIMAL(23,8),
      allowNull: true
    },
    VALORUSADOME: {
      type: DataTypes.DECIMAL(23,8),
      allowNull: true
    },
    NUMSOLICITUD: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    PAGRENGLON: {
      type: DataTypes.STRING(8),
      allowNull: true
    },
    FRACCIONIMPO: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    ADVIMPO: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    TIPOFRACIMPO: {
      type: DataTypes.STRING(7),
      allowNull: false,
      primaryKey: true
    },
    FRACCIONAMERICANA: {
      type: DataTypes.STRING(16),
      allowNull: true
    },
    SECTOR: {
      type: DataTypes.STRING(8),
      allowNull: false,
      primaryKey: true
    },
    CANTALTERNA: {
      type: DataTypes.DECIMAL(19,8),
      allowNull: true
    },
    UMALTERNA: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    MONTOIGI: {
      type: DataTypes.DECIMAL(23,8),
      allowNull: true
    },
    MONTOIGIUSADO: {
      type: DataTypes.DECIMAL(23,8),
      allowNull: true
    },
    FORMAPAGO: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    PAGOIMPUESTO: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    CANTAUXILIAR: {
      type: DataTypes.DECIMAL(19,8),
      allowNull: true
    },
    UMAUXILIAR: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    VALORAUXILIARIMPOME: {
      type: DataTypes.DECIMAL(23,8),
      allowNull: true
    },
    ORDENCOMPRA: {
      type: DataTypes.STRING(150),
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
    ESREPARACION: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    FECHAFACTURA_ISO: {
      type: DataTypes.DATE,
      allowNull: true
    },
    FECHAVENC_ISO: {
      type: DataTypes.DATE,
      allowNull: true
    },
    NUMPARTECOM: {
      type: DataTypes.STRING(70),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SSaldoDef',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "ConPdf_FKClase",
        fields: [
          { name: "CLASE" },
        ]
      },
      {
        name: "ConPdf_FKClaseFecha",
        fields: [
          { name: "CLASE" },
          { name: "FECHAFACTURA" },
        ]
      },
      {
        name: "ConPdf_FKFacImpParte",
        fields: [
          { name: "FACTURAIMPO" },
          { name: "NUMPARTE" },
        ]
      },
      {
        name: "ConPdf_FKFechaFact",
        fields: [
          { name: "FECHAFACTURA" },
        ]
      },
      {
        name: "ConPdf_FKNumParte",
        fields: [
          { name: "NUMPARTE" },
        ]
      },
      {
        name: "ConPdf_FKParteFecha",
        fields: [
          { name: "NUMPARTE" },
          { name: "FECHAFACTURA" },
        ]
      },
      {
        name: "ConPdf_FKPedImpClase",
        fields: [
          { name: "PEDIMENTOIMPODEF" },
          { name: "CLASE" },
        ]
      },
      {
        name: "ConPdf_FKPedImpParte",
        fields: [
          { name: "PEDIMENTOIMPODEF" },
          { name: "NUMPARTE" },
        ]
      },
      {
        name: "ConPdf_PKFaParPaiTiSe",
        unique: true,
        fields: [
          { name: "FACTURAIMPO" },
          { name: "NUMPARTE" },
          { name: "PAISORIGEN" },
          { name: "TIPOFRACIMPO" },
          { name: "SECTOR" },
        ]
      },
    ]
  });
};
