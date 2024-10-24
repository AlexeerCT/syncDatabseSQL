const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('QLocalizacion', {
    CLAVE: {
      type: DataTypes.STRING(5),
      allowNull: false,
      primaryKey: true
    },
    LOCALIZACION: {
      type: DataTypes.STRING(200),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'QLocalizacion',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "EqiLoc_PKClave",
        unique: true,
        fields: [
          { name: "CLAVE" },
        ]
      },
    ]
  });
};
