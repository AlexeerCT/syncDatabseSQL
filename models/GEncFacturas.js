const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('GEncFacturas', {
    CONSECUTIVO: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    PEDIMENTO: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    REMESA: {
      type: DataTypes.SMALLINT,
      allowNull: true
    },
    FACTURA: {
      type: DataTypes.STRING(100),
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
    AADUANAL: {
      type: DataTypes.STRING(5),
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
    TIPOMONEDA: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    CLAVEMONEDA: {
      type: DataTypes.STRING(3),
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
    NUMTRAILER: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    MANIFIESTO: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    ESTATUS: {
      type: DataTypes.STRING(19),
      allowNull: true
    },
    MARCAR: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    SISTEMA: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    MODULO: {
      type: DataTypes.STRING(19),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'GEncFacturas',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "ApoFac_PKConsecutivo",
        unique: true,
        fields: [
          { name: "CONSECUTIVO" },
        ]
      },
    ]
  });
};
