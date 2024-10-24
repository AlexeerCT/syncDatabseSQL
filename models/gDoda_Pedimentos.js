const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('gDoda_Pedimentos', {
    DODASYSID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    LINEAPEDIMENTO: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    PATENTEAUTORIZACION: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    DOCUMENTO: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    REMESA: {
      type: DataTypes.STRING(11),
      allowNull: true
    },
    COVE: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    UMC: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    IMPORTEEFECTIODOLARES: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: true
    },
    IMPORTEDIFERENCIADOLARES: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: true
    },
    DTA_NIU: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    ARTICULO7: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    SYSIDPEDIMENTO: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    LINEAFACTURA: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    LINEAPARTEII: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    TIPOPEDIMENTO: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    VALIDACIONEMPAQUEZERO: {
      type: DataTypes.TINYINT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'gDoda_Pedimentos',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PKSQLDDPED_ID_LN",
        unique: true,
        fields: [
          { name: "DODASYSID" },
          { name: "LINEAPEDIMENTO" },
        ]
      },
    ]
  });
};
