const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SFacRep', {
    PED_PENDIENTE_ASIGNAR: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    PEDIMENTOIMPO: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    PEDIMENTOR1: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    REMESA: {
      type: DataTypes.SMALLINT,
      allowNull: true
    },
    FACTURAIMPO: {
      type: DataTypes.STRING(15),
      allowNull: false,
      primaryKey: true
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
    MODTRANS: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    CUALTIPOCAMBIO: {
      type: DataTypes.STRING(5),
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
    SEMAFOROEXPO: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SFacRep',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "FacRep_FKAAduanal",
        fields: [
          { name: "AADUANAL" },
        ]
      },
      {
        name: "FacRep_FKEnviado",
        fields: [
          { name: "ENVIADOA" },
        ]
      },
      {
        name: "FacRep_FKEstatus",
        fields: [
          { name: "ESTATUS" },
        ]
      },
      {
        name: "FacRep_FKFechaFact",
        fields: [
          { name: "FECHAFACTURA" },
        ]
      },
      {
        name: "FacRep_FKIncoterm",
        fields: [
          { name: "INCOTERM" },
        ]
      },
      {
        name: "FacRep_FKModTrans",
        fields: [
          { name: "MODTRANS" },
        ]
      },
      {
        name: "FacRep_FKPedimento",
        fields: [
          { name: "PEDIMENTOIMPO" },
        ]
      },
      {
        name: "FacRep_FKPedImpoRem",
        fields: [
          { name: "PEDIMENTOIMPO" },
          { name: "REMESA" },
        ]
      },
      {
        name: "FacRep_FKProveedor",
        fields: [
          { name: "PROVEEDOR" },
        ]
      },
      {
        name: "FacRep_FKSubEmpresa",
        fields: [
          { name: "SUBEMPRESA" },
        ]
      },
      {
        name: "FacRep_FKTipoDoc",
        fields: [
          { name: "TIPODOC" },
        ]
      },
      {
        name: "FacRep_FKTransCond",
        fields: [
          { name: "TRANSPORTISTA" },
          { name: "CONDUCTOR" },
        ]
      },
      {
        name: "FacRep_FKTransportista",
        fields: [
          { name: "TRANSPORTISTA" },
        ]
      },
      {
        name: "FacRep_FKVendido",
        fields: [
          { name: "VENDIDOA" },
        ]
      },
      {
        name: "FacRep_PKFacturaImpo",
        unique: true,
        fields: [
          { name: "FACTURAIMPO" },
        ]
      },
    ]
  });
};
