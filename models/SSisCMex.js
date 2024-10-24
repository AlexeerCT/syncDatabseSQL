const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SSisCMex', {
    CONSECUTIVO: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    PREFIJOCM: {
      type: DataTypes.STRING(9),
      allowNull: true
    },
    CONSECUTIVOCM: {
      type: DataTypes.STRING(6),
      allowNull: true
    },
    PORPARTECLASEMEX: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    PORPARTECLASEAME: {
      type: DataTypes.STRING(1),
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
    FLETE: {
      type: DataTypes.DECIMAL(17,6),
      allowNull: true
    },
    PAISORIGENMEX: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    NUMPARTEMEX: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    FIRMAFMEX: {
      type: DataTypes.STRING(350),
      allowNull: true
    },
    FRACCIONIMP: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    TIPOFRACCMEX: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    TASAFRACCMEX: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    UMEQUIVALENTEMEX: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    NUMPARTEAME: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    FRACCIONAME: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    PAISORIGENAME: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    UMEQUIVALENTEAME: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    FIRMAFAME: {
      type: DataTypes.STRING(350),
      allowNull: true
    },
    IMPORDENCOMP: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    DECIMALESPESO: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    DECIMALESCANT: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    DECIMALESVALOR: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    DECIMALESCOSTO: {
      type: DataTypes.TINYINT,
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
    UMAUXILIARMEX: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    UMALTERNAMEX: {
      type: DataTypes.TINYINT,
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
    NUMTRANSPORTE: {
      type: DataTypes.STRING(20),
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
    CLAVEBULTOS: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    PACKINGORDENCOMPRA: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    FIRMAELECTRONICA: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    INCLUIRLINEADELPO: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    LINEAPERSONAAA: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    AGREGARVAENPRODTERMINADOS: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    OCULTARFECHAHORA: {
      type: DataTypes.TINYINT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SSisCMex',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "SSICM_PKConsecutivo",
        unique: true,
        fields: [
          { name: "CONSECUTIVO" },
        ]
      },
    ]
  });
};
