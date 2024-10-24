const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('GModTransporte', {
    CLAVEMOD: {
      type: DataTypes.STRING(3),
      allowNull: false,
      primaryKey: true
    },
    MODOTRANS: {
      type: DataTypes.STRING(30),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'GModTransporte',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "ModTra_PKClaveMod",
        unique: true,
        fields: [
          { name: "CLAVEMOD" },
        ]
      },
    ]
  });
};
