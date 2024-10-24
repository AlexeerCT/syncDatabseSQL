const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('GUniMedACE', {
    CLAVEACE: {
      type: DataTypes.STRING(4),
      allowNull: false,
      primaryKey: true
    },
    DESCRIPCION: {
      type: DataTypes.STRING(49),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'GUniMedACE',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "UMACE_PKClaveACE",
        unique: true,
        fields: [
          { name: "CLAVEACE" },
        ]
      },
    ]
  });
};
