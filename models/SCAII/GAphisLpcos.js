const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('GAphisLpcos', {
    CONSECUTIVOAPHIS: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    LINEALPCOS: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    ISSUER: {
      type: DataTypes.STRING(39),
      allowNull: true
    },
    ISSUERLOCQUA: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    ISSUERLOC: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    ISSUERLOCDESC: {
      type: DataTypes.STRING(29),
      allowNull: true
    },
    TXNTYPE: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    TYPE: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    NUMBER: {
      type: DataTypes.STRING(34),
      allowNull: true
    },
    DATEQUAL: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    DATE: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    QTY: {
      type: DataTypes.DECIMAL(19,8),
      allowNull: true
    },
    UOM: {
      type: DataTypes.STRING(5),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'GAphisLpcos',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "GALP_ConsecAphisLinLp",
        unique: true,
        fields: [
          { name: "CONSECUTIVOAPHIS" },
          { name: "LINEALPCOS" },
        ]
      },
    ]
  });
};
