const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('GConceptosClasif', {
    CLASIFICACION: {
      type: DataTypes.STRING(30),
      allowNull: false,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'GConceptosClasif',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "ConCla_PKClasificacion",
        unique: true,
        fields: [
          { name: "CLASIFICACION" },
        ]
      },
    ]
  });
};
