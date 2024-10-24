const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SSaldoTem', {
    FACTURAIMPO: {
      type: DataTypes.STRING(15),
      allowNull: false,
      primaryKey: true
    },
    PEDIMENTOIMPO: {
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
    PESONETO: {
      type: DataTypes.DECIMAL(19,8),
      allowNull: true
    },
    PESOBRUTO: {
      type: DataTypes.DECIMAL(19,8),
      allowNull: true
    },
    PESOUSADO: {
      type: DataTypes.DECIMAL(19,8),
      allowNull: true
    },
    PESOBRUTOUSADO: {
      type: DataTypes.DECIMAL(19,8),
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
    VALORIMPOMN: {
      type: DataTypes.DECIMAL(23,8),
      allowNull: true
    },
    VALORIMPOME: {
      type: DataTypes.DECIMAL(23,8),
      allowNull: true
    },
    VALORUSADOMN: {
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
    VALORIVAMN: {
      type: DataTypes.DECIMAL(23,8),
      allowNull: true
    },
    VALORIVAME: {
      type: DataTypes.DECIMAL(23,8),
      allowNull: true
    },
    VALORIVAMNUSADO: {
      type: DataTypes.DECIMAL(23,8),
      allowNull: true
    },
    VALORIVAMEUSADO: {
      type: DataTypes.DECIMAL(23,8),
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
    ADVALOREMIMPO: {
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
      type: DataTypes.STRING(5),
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
    FECHAVENC: {
      type: DataTypes.INTEGER,
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
    SALDOSIMPLOSION: {
      type: DataTypes.STRING(2),
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
    tableName: 'SSaldoTem',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "ConPim_FKClase",
        fields: [
          { name: "CLASE" },
        ]
      },
      {
        name: "ConPim_FKClaseFecha",
        fields: [
          { name: "CLASE" },
          { name: "FECHAFACTURA" },
        ]
      },
      {
        name: "ConPim_FKFacImpParte",
        fields: [
          { name: "FACTURAIMPO" },
          { name: "NUMPARTE" },
        ]
      },
      {
        name: "ConPim_FKFechaFact",
        fields: [
          { name: "FECHAFACTURA" },
        ]
      },
      {
        name: "ConPim_FKFechaVenc",
        fields: [
          { name: "FECHAVENC" },
        ]
      },
      {
        name: "ConPim_FKNumParte",
        fields: [
          { name: "NUMPARTE" },
        ]
      },
      {
        name: "ConPim_FKParteFecha",
        fields: [
          { name: "NUMPARTE" },
          { name: "FECHAFACTURA" },
        ]
      },
      {
        name: "ConPim_FKPedImpClase",
        fields: [
          { name: "PEDIMENTOIMPO" },
          { name: "CLASE" },
        ]
      },
      {
        name: "ConPim_FKPedImpParte",
        fields: [
          { name: "PEDIMENTOIMPO" },
          { name: "NUMPARTE" },
        ]
      },
      {
        name: "ConPim_PKFaParPaiTiSe",
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
