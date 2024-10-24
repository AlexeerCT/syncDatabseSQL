const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ETipoMat', {
    TIPO: {
      type: DataTypes.STRING(4),
      allowNull: false,
      primaryKey: true
    },
    DESCRIPCION: {
      type: DataTypes.STRING(20),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'ETipoMat',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "ETipos_PKTipoMat",
        unique: true,
        fields: [
          { name: "TIPO" },
        ]
      },
    ]
  });
};
