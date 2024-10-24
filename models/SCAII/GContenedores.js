const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('GContenedores', {
    CLAVE: {
      type: DataTypes.STRING(3),
      allowNull: false,
      primaryKey: true
    },
    DESCRIPCION: {
      type: DataTypes.STRING(500),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'GContenedores',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "Conten_PKClave",
        unique: true,
        fields: [
          { name: "CLAVE" },
        ]
      },
    ]
  });
};
