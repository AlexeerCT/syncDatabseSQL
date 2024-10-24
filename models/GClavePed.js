const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('GClavePed', {
    CLAVEPED: {
      type: DataTypes.STRING(2),
      allowNull: false,
      primaryKey: true
    },
    DESCRIPCION: {
      type: DataTypes.STRING(250),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'GClavePed',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "ClaPed_PKClavePed",
        unique: true,
        fields: [
          { name: "CLAVEPED" },
        ]
      },
    ]
  });
};
