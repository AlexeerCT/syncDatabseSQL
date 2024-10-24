const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('PedimentosAmericanos', {
    CLAVE: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    DESCRIPCION: {
      type: DataTypes.STRING(249),
      allowNull: true
    },
    TIPOOPERACION: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'PedimentosAmericanos',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PKClavePedAme",
        unique: true,
        fields: [
          { name: "CLAVE" },
        ]
      },
    ]
  });
};
