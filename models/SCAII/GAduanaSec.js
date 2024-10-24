const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('GAduanaSec', {
    ADUANASECCION: {
      type: DataTypes.STRING(3),
      allowNull: false,
      primaryKey: true
    },
    NOMBRE: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'GAduanaSec',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "AduSec_PKAduanaSec",
        unique: true,
        fields: [
          { name: "ADUANASECCION" },
        ]
      },
    ]
  });
};
