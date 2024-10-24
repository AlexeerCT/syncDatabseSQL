const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('GUMOMA', {
    CLAVEUM: {
      type: DataTypes.STRING(10),
      allowNull: false,
      primaryKey: true
    },
    DESCRIPCION: {
      type: DataTypes.STRING(200),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'GUMOMA',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "UMOMA_PKClaveUM",
        unique: true,
        fields: [
          { name: "CLAVEUM" },
        ]
      },
    ]
  });
};
