const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('QPedimentos', {
    PEDIMENTO: {
      type: DataTypes.STRING(15),
      allowNull: false,
      primaryKey: true
    },
    TIPO: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    CLAVEPED: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    REGIMEN: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    FECHA_INICIO: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    FECHA_FIN: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    FECHA_PAGO: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ACUSEELECTRONICO: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    PAIS: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    FACTOR: {
      type: DataTypes.DECIMAL(11,4),
      allowNull: true
    },
    ADUANA_CRUCE: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    PEDRECTIFICA: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    SERECTIFICO: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    OBSRECTIFICA: {
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    INDIVIDUALCONS: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    DTA: {
      type: DataTypes.DECIMAL(15,4),
      allowNull: true
    },
    VALORIVA: {
      type: DataTypes.DECIMAL(23,8),
      allowNull: true
    },
    PEDIMENTODESCARGO: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    PREVALIDACION: {
      type: DataTypes.DECIMAL(23,8),
      allowNull: true
    },
    MONTOTIGIE: {
      type: DataTypes.DECIMAL(23,8),
      allowNull: true
    },
    PAGOIMPUESTO: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    ESMIXTO: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    ESTATUS: {
      type: DataTypes.STRING(19),
      allowNull: true
    },
    SERECTIFICO2: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    PEDRECTIFICA2: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    FECHA_REC_1: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    FECHA_REC_2: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    FECHA_CIERRE: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    FECHA_REVISION: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    FECHA_AUTORIZACION: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    FECHA_RECIBIDO: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ERRORES: {
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    PERSONAREV: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    REPRESANTANTEAA: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    CLAVEDESTORIGEN: {
      type: DataTypes.STRING(8),
      allowNull: true
    },
    VALORME: {
      type: DataTypes.DECIMAL(23,8),
      allowNull: true
    },
    VALORADUANAS: {
      type: DataTypes.DECIMAL(23,8),
      allowNull: true
    },
    CLAVETRANSPORTACION: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    TOTALINCREMMN: {
      type: DataTypes.DECIMAL(23,8),
      allowNull: true
    },
    FACTORINCREMENTABLE: {
      type: DataTypes.DECIMAL(19,8),
      allowNull: true
    },
    FEA: {
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    FECHA_PAGO_ISO: {
      type: DataTypes.DATE,
      allowNull: true
    },
    FECHA_ENTRADARECINTO: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    FECHA_EXTRACCIONRECINTO: {
      type: DataTypes.INTEGER,
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
    FORMAPAGODTA: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    FORMAPAGOPREVAL: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    FORMAPAGOIGI: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    FORMAPAGOIVA: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    RECARGOS: {
      type: DataTypes.DECIMAL(19,8),
      allowNull: true
    },
    IVADEPREV: {
      type: DataTypes.DECIMAL(19,8),
      allowNull: true
    },
    CUOTASCOMPENS: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    MULTAS: {
      type: DataTypes.DECIMAL(19,8),
      allowNull: true
    },
    IDENTIFICADORES: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    CNT: {
      type: DataTypes.DECIMAL(23,8),
      allowNull: true
    },
    IEPS: {
      type: DataTypes.DECIMAL(29,8),
      allowNull: true
    },
    OPCIONDESTINO: {
      type: DataTypes.STRING(19),
      allowNull: true
    },
    TIPOPEDIMENTOTRANSPORTEE: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    TIPOPEDIMENTOTRANSPORTEA: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    TIPOPEDIMENTOTRANSPORTES: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    PEDIMENTO18: {
      type: DataTypes.STRING(18),
      allowNull: true
    },
    IEPS2: {
      type: DataTypes.DECIMAL(29,8),
      allowNull: true
    },
    DTA2: {
      type: DataTypes.DECIMAL(15,4),
      allowNull: true
    },
    IVA2: {
      type: DataTypes.DECIMAL(23,8),
      allowNull: true
    },
    IGI2: {
      type: DataTypes.DECIMAL(23,8),
      allowNull: true
    },
    PREVALIDACION2: {
      type: DataTypes.DECIMAL(19,8),
      allowNull: true
    },
    CNT2: {
      type: DataTypes.DECIMAL(23,8),
      allowNull: true
    },
    IEPS2FP: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    DTA2FP: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    IVA2FP: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    IGI2FP: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    PREVALIDACION2FP: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    CNT2FP: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    IDPEDVIEJONUEVO: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'QPedimentos',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "EqiPed_PKPedimento",
        unique: true,
        fields: [
          { name: "PEDIMENTO" },
        ]
      },
    ]
  });
};
