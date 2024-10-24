const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SBOMVer', {
    NUMPARTE: {
      type: DataTypes.STRING(70),
      allowNull: false,
      primaryKey: true
    },
    VERSION: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    FECHAMODIFICA: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SBOMVer',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "BOMVer_PKNumParteVer",
        unique: true,
        fields: [
          { name: "NUMPARTE" },
          { name: "VERSION" },
        ]
      },
    ]
  });
};
