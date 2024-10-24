const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('QSisDef', {
    CONSECUTIVO: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    PREFIJOIMPO: {
      type: DataTypes.STRING(9),
      allowNull: true
    },
    CONSECUTIVOIMPO: {
      type: DataTypes.STRING(6),
      allowNull: true
    },
    PEDIMENTO: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    TIPO: {
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
    INCOTERM: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    FLETE: {
      type: DataTypes.DECIMAL(17,6),
      allowNull: true
    },
    IDENTIFICADOR: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    FIRMAFMEX: {
      type: DataTypes.STRING(350),
      allowNull: true
    },
    FIRMAFAME: {
      type: DataTypes.STRING(350),
      allowNull: true
    },
    GENERARASSETTAG: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    CODIGOBARRAS: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    FRACCIONIMP: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    TASAFRACCMEX: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    TIPOFRACCMEX: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    FRACCIONAME: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    PAISORIGENMEX: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    PAISORIGENAME: {
      type: DataTypes.TINYINT,
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
    TIPOMN: {
      type: DataTypes.STRING(7),
      allowNull: true
    },
    TIPOME: {
      type: DataTypes.STRING(7),
      allowNull: true
    },
    CLAVEMONEDA: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    CONTROLREMESA: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    REMESAINICIO: {
      type: DataTypes.SMALLINT,
      allowNull: true
    },
    REMESAFINAL: {
      type: DataTypes.SMALLINT,
      allowNull: true
    },
    CANTLIMITE: {
      type: DataTypes.DECIMAL(19,8),
      allowNull: true
    },
    PESOLIMITE: {
      type: DataTypes.DECIMAL(19,8),
      allowNull: true
    },
    VALORLIMITE: {
      type: DataTypes.DECIMAL(23,8),
      allowNull: true
    },
    METVALOR: {
      type: DataTypes.STRING(2),
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
    TRANSPORTISTA: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    AADUANALAME: {
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
    NUMPARTEMEX: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    NUMPARTEAME: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    CANTLIMITEMIN: {
      type: DataTypes.DECIMAL(19,8),
      allowNull: true
    },
    PESOLIMITEMIN: {
      type: DataTypes.DECIMAL(19,8),
      allowNull: true
    },
    VALORLIMITEMIN: {
      type: DataTypes.DECIMAL(23,8),
      allowNull: true
    },
    ACTUALIZARPARTEPARTIDA: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    PACKINGORDENCOMPRA: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    SOLICITARCONTRASENAADMINISTRADOR: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    IMPRIMIRLOTE: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    IMPRIMIRNUMENTRADA: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'QSisDef',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "SisDef_PKConsecutivo",
        unique: true,
        fields: [
          { name: "CONSECUTIVO" },
        ]
      },
    ]
  });
};
