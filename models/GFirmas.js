const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('GFirmas', {
    CLAVEFIRMA: {
      type: DataTypes.STRING(10),
      allowNull: false,
      primaryKey: true
    },
    FIRMA: {
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    PATHFOTO: {
      type: DataTypes.STRING(1000),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'GFirmas',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "GFirm_PKClaveFirma",
        unique: true,
        fields: [
          { name: "CLAVEFIRMA" },
        ]
      },
    ]
  });
};
