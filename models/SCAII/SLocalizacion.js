const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SLocalizacion', {
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
    tableName: 'SLocalizacion',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "SLOCMP_PKClave",
        unique: true,
        fields: [
          { name: "CLAVE" },
        ]
      },
    ]
  });
};
