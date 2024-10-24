const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('GEncAnexo', {
    MODULO: {
      type: DataTypes.STRING(2),
      allowNull: false,
      primaryKey: true
    },
    TITULO: {
      type: DataTypes.STRING(256),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'GEncAnexo',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "EAnexo_PKModulo",
        unique: true,
        fields: [
          { name: "MODULO" },
        ]
      },
    ]
  });
};
