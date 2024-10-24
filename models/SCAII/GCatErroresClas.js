const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('GCatErroresClas', {
    CLASIFICACION: {
      type: DataTypes.STRING(100),
      allowNull: false,
      primaryKey: true
    },
    NIVEL: {
      type: DataTypes.STRING(3),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'GCatErroresClas',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "ClaErr_PKClasificacion",
        unique: true,
        fields: [
          { name: "CLASIFICACION" },
        ]
      },
    ]
  });
};
