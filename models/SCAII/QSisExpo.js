const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('QSisExpo', {
    TIPOFACTURA: {
      type: DataTypes.STRING(5),
      allowNull: false,
      primaryKey: true
    },
    ESCAMBIOREGIMEN: {
      type: DataTypes.STRING(2),
      allowNull: false,
      primaryKey: true
    },
    PREFIJOEXPO: {
      type: DataTypes.STRING(9),
      allowNull: true
    },
    CONSECUTIVOEXPO: {
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
    VENDIDOPOR: {
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
    CODIGOBARRAS: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    CANTPNCODBAR: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    DTACEROCODBAR: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    CBARRASVALOR: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    FIRMAFMEX: {
      type: DataTypes.STRING(350),
      allowNull: true
    },
    FRACCIONEXP: {
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
    NUMPARTEMEX: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    PAISORIGENMEX: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    COSTOUNITMEX: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    OCULTAREMPAQUEMEX: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    FIRMAFAME: {
      type: DataTypes.STRING(350),
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
    FDAINFORMACIONAME: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    NUMPARTEAME: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    CODIGOSCAC: {
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
    CLAVEMONEDA: {
      type: DataTypes.STRING(3),
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
    MOSTRARVALACT: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    PEPSPORCLASE: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    PEPSPORFRACCION: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    PEPSPORDESCRIPCION: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    PEPSPORFRACCALTERNA: {
      type: DataTypes.TINYINT,
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
    VENTQUEUEACT: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    VALFACTTC: {
      type: DataTypes.STRING(3),
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
    COLCANTPORPESO: {
      type: DataTypes.TINYINT,
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
    ENVIADOPORVENDIDOPOR: {
      type: DataTypes.STRING(14),
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
    PROVEEDOREXPORTADOR: {
      type: DataTypes.STRING(13),
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
    SOLICITARPSWDACTUAL: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    SOLICITARPSWDDESACTUAL: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    PACKINGORDENVENTA: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    IMPRIMIRPO: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    PACKINGPEDCLAVE: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    GENERAFACTURAIMD: {
      type: DataTypes.STRING(19),
      allowNull: true
    },
    GENERAFACTURAIMDENBASEA: {
      type: DataTypes.STRING(19),
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
    tableName: 'QSisExpo',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "SisExp_PKTipoFactura",
        unique: true,
        fields: [
          { name: "TIPOFACTURA" },
          { name: "ESCAMBIOREGIMEN" },
        ]
      },
    ]
  });
};
