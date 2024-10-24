const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('GConCobranza', {
    CONCEPTO: {
      type: DataTypes.STRING(100),
      allowNull: false,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'GConCobranza',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "ConCob_PKConcepto",
        unique: true,
        fields: [
          { name: "CONCEPTO" },
        ]
      },
    ]
  });
};
