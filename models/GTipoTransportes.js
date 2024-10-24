const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('GTipoTransportes', {
    CLAVETRANSPORTE: {
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
    tableName: 'GTipoTransportes',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "TipTran_PKClaveTrans",
        unique: true,
        fields: [
          { name: "CLAVETRANSPORTE" },
        ]
      },
    ]
  });
};
