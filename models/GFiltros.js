const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('GFiltros', {
    FILTRO: {
      type: DataTypes.STRING(200),
      allowNull: false,
      primaryKey: true
    },
    DESCRIPCION: {
      type: DataTypes.STRING(300),
      allowNull: true
    },
    TIPO: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'GFiltros',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "Gfiltro_PKFiltro",
        unique: true,
        fields: [
          { name: "FILTRO" },
        ]
      },
    ]
  });
};
