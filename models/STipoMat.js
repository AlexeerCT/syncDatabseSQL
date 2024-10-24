const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('STipoMat', {
    CLAVE: {
      type: DataTypes.STRING(10),
      allowNull: false,
      primaryKey: true
    },
    DESCRIPCION: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    TIPOMAT: {
      type: DataTypes.STRING(10),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'STipoMat',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "TipMat_PKClave",
        unique: true,
        fields: [
          { name: "CLAVE" },
        ]
      },
    ]
  });
};
