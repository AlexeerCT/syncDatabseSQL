const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('GAphis', {
    CONSECUTIVOAPHIS: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    PROGRAMCODE: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    PROCESSINGCODE: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    APHISTYPE: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    DISCLAIMER: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    ELECTRONICIMAGE: {
      type: DataTypes.CHAR(3),
      allowNull: true
    },
    CONFIDENTIAL: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    GLOBALPRODUCTID: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    INTENDEDUSECODE: {
      type: DataTypes.STRING(19),
      allowNull: true
    },
    INTENDEDUSEDESCRIPTION: {
      type: DataTypes.STRING(24),
      allowNull: true
    },
    ITEMTYPE: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    PRODUCTCODE: {
      type: DataTypes.STRING(24),
      allowNull: true
    },
    PRODUCTCODE2: {
      type: DataTypes.STRING(19),
      allowNull: true
    },
    PRODUCTCODE3: {
      type: DataTypes.STRING(19),
      allowNull: true
    },
    SCIENTIFICGENUSNAME: {
      type: DataTypes.STRING(24),
      allowNull: true
    },
    SCIENTIFICSPECIESNAME: {
      type: DataTypes.STRING(24),
      allowNull: true
    },
    SCIENTIFICSUBSPECIESNAME: {
      type: DataTypes.STRING(19),
      allowNull: true
    },
    COMMONNAMESPECIFIC: {
      type: DataTypes.STRING(34),
      allowNull: true
    },
    COMMONNAMEGENERAL: {
      type: DataTypes.STRING(34),
      allowNull: true
    },
    SIGNEDDOC: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    SIGNEDDOCDATE: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    SIGNEDDOCID: {
      type: DataTypes.STRING(9),
      allowNull: true
    },
    INVOICENUMBER: {
      type: DataTypes.STRING(19),
      allowNull: true
    },
    QUANTITY1: {
      type: DataTypes.DECIMAL(19,8),
      allowNull: true
    },
    QUANTITY2: {
      type: DataTypes.DECIMAL(19,8),
      allowNull: true
    },
    QUANTITY3: {
      type: DataTypes.DECIMAL(19,8),
      allowNull: true
    },
    INSPECTION: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    INSPECTIONDATE: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    INSPECTIONLOCCODE: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    INSPECTIONLOCATION: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    CTRYPROD: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    CTRYSRC: {
      type: DataTypes.STRING(4),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'GAphis',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "GAps_Consecutivo",
        unique: true,
        fields: [
          { name: "CONSECUTIVOAPHIS" },
        ]
      },
    ]
  });
};
