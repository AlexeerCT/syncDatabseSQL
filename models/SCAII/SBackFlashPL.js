const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SBackFlashPL', {
    CONSECUTIVO: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    PACKINGLIST: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    NUMPARTE: {
      type: DataTypes.STRING(99),
      allowNull: true
    },
    CANTIDAD: {
      type: DataTypes.DECIMAL(19,8),
      allowNull: true
    },
    UNIMED: {
      type: DataTypes.STRING(5),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SBackFlashPL',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "SBaF",
        unique: true,
        fields: [
          { name: "CONSECUTIVO" },
        ]
      },
      {
        name: "SBaF_PackingNP",
        fields: [
          { name: "PACKINGLIST" },
          { name: "NUMPARTE" },
        ]
      },
    ]
  });
};
