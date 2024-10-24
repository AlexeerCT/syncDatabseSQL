const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('GRegimenPed', {
    REGIMENPED: {
      type: DataTypes.STRING(3),
      allowNull: false,
      primaryKey: true
    },
    DESCRIPCION: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'GRegimenPed',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "GenCPed1_PKRegimenPed",
        unique: true,
        fields: [
          { name: "REGIMENPED" },
        ]
      },
    ]
  });
};
