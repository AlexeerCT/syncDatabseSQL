const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('QAssetTag', {
    CONSECUTIVO: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    FACTURAIMPO: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    LINEAIMPO: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    ASSETNUMBER: {
      type: DataTypes.STRING(25),
      allowNull: false,
      primaryKey: true
    },
    TIPOFACTURA: {
      type: DataTypes.STRING(6),
      allowNull: false,
      primaryKey: true
    },
    FOTOPARTE: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'QAssetTag',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "AssetT_PKConsecLinAsset",
        unique: true,
        fields: [
          { name: "CONSECUTIVO" },
          { name: "LINEAIMPO" },
          { name: "TIPOFACTURA" },
          { name: "ASSETNUMBER" },
        ]
      },
    ]
  });
};
