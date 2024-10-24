const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('GEquivPartidas', {
    ID: {
      type: DataTypes.STRING(10),
      allowNull: false,
      primaryKey: true
    },
    CAMPOORIG: {
      type: DataTypes.STRING(100),
      allowNull: false,
      primaryKey: true
    },
    CAMPOEXT: {
      type: DataTypes.STRING(100),
      allowNull: false,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'GEquivPartidas',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "GEPar_FK_IDCampoOrg",
        fields: [
          { name: "ID" },
          { name: "CAMPOORIG" },
        ]
      },
      {
        name: "GEPar_PKId_Orig_Ext",
        unique: true,
        fields: [
          { name: "ID" },
          { name: "CAMPOORIG" },
          { name: "CAMPOEXT" },
        ]
      },
    ]
  });
};
