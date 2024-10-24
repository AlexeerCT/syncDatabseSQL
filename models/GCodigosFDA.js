const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('GCodigosFDA', {
    CLAVEFDA: {
      type: DataTypes.STRING(20),
      allowNull: false,
      primaryKey: true
    },
    DESCRIPCION: {
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    CODIGOPRO: {
      type: DataTypes.STRING(7),
      allowNull: true
    },
    REQUERIMIENTOS: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    MANUFACTERID: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    PAISORIGEN: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    STATUSALMACEN: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    CODIGOAFI1: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    CALIFAFI1: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    CODIGOAFI2: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    CALIFAFI2: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    CODIGOAFI3: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    CALIFAFI3: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    CODIGOAFI4: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    CALIFAFI4: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    CODIGOAFI5: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    CALIFAFI5: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    FDA01PRODCODE: {
      type: DataTypes.STRING(7),
      allowNull: true
    },
    FDA01COMODITYDESC: {
      type: DataTypes.STRING(57),
      allowNull: true
    },
    FDA01BRANDNAME: {
      type: DataTypes.STRING(35),
      allowNull: true
    },
    FDA01DISCLAIMER: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    FDA01PGMCODE: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    FDA01PROCCODE: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    FDA01INTNDUSECODE: {
      type: DataTypes.STRING(7),
      allowNull: true
    },
    FDA01INTNDUSEDESC: {
      type: DataTypes.STRING(22),
      allowNull: true
    },
    FDA01TEMPQUAL: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    FDA01TEMPTYPE: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    FDA01TEMPDEGREES: {
      type: DataTypes.DECIMAL(5,2),
      allowNull: true
    },
    FDA01TEMPNEGATIVE: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    FDA01TEMPLOCATION: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    FDA01QUANTITY1: {
      type: DataTypes.DECIMAL(9,2),
      allowNull: true
    },
    FDA01QTYUOM1: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    FDA01QUANTITY2: {
      type: DataTypes.DECIMAL(9,2),
      allowNull: true
    },
    FDA01QTYUOM2: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    FDA01QUANTITY3: {
      type: DataTypes.DECIMAL(9,2),
      allowNull: true
    },
    FDA01QTYUOM3: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    FDA01LACFCONT1: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    FDA01LACFCONT2: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    FDA01LACFCONT3: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    FDA01CTRYPROD: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    FDA01CTRYSOURCE: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    FDA01CTRYGROWTH: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    FDA01CTRYREFUSAL: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    FDA01CTRYSHIPPING: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    FDA01MANUFKEY: {
      type: DataTypes.STRING(9),
      allowNull: true
    },
    FDA01SHIPPERKEY: {
      type: DataTypes.STRING(9),
      allowNull: true
    },
    FDA01UITCONSKEY: {
      type: DataTypes.STRING(9),
      allowNull: true
    },
    FDA01FDAIMPKEY: {
      type: DataTypes.STRING(9),
      allowNull: true
    },
    FDA01PNSUBMKEY: {
      type: DataTypes.STRING(9),
      allowNull: true
    },
    FDA01CONSOLKEY: {
      type: DataTypes.STRING(9),
      allowNull: true
    },
    FDA01PRODUCERKEY: {
      type: DataTypes.STRING(9),
      allowNull: true
    },
    FDA01OWNERKEY: {
      type: DataTypes.STRING(9),
      allowNull: true
    },
    FDA01DELIPARTYKEY: {
      type: DataTypes.STRING(9),
      allowNull: true
    },
    FDA01GROWERKEY: {
      type: DataTypes.STRING(9),
      allowNull: true
    },
    FDA01DEVINIIMPKEY: {
      type: DataTypes.STRING(9),
      allowNull: true
    },
    FDA01PNTRANSMITTERKEY: {
      type: DataTypes.STRING(19),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'GCodigosFDA',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "CodFDA_PKCodigo",
        unique: true,
        fields: [
          { name: "CLAVEFDA" },
        ]
      },
    ]
  });
};
