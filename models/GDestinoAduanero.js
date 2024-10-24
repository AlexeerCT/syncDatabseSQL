const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('GDestinoAduanero', {
    ID: {
      type: DataTypes.STRING(2),
      allowNull: false,
      primaryKey: true
    },
    CLAVE: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    DESTINOADUANERO: {
      type: DataTypes.STRING(500),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'GDestinoAduanero',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "GDEADU_PKIDDestinoAduanero",
        unique: true,
        fields: [
          { name: "ID" },
        ]
      },
    ]
  });
};
