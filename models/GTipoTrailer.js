const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('GTipoTrailer', {
    CLAVETRAILER: {
      type: DataTypes.STRING(2),
      allowNull: false,
      primaryKey: true
    },
    DESCRIPCION: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'GTipoTrailer',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "TipTra_PKClaveTrailer",
        unique: true,
        fields: [
          { name: "CLAVETRAILER" },
        ]
      },
    ]
  });
};
