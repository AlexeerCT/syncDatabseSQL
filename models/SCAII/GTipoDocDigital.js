const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('GTipoDocDigital', {
    IDTIPODOCUMENTO: {
      type: DataTypes.STRING(9),
      allowNull: false,
      primaryKey: true
    },
    TIPODOCUMENTO: {
      type: DataTypes.STRING(500),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'GTipoDocDigital',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "TDogDig_PKIDTipoDoc",
        unique: true,
        fields: [
          { name: "IDTIPODOCUMENTO" },
        ]
      },
    ]
  });
};
