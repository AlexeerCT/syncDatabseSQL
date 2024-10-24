const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('GIdentificadores', {
    CLAVE: {
      type: DataTypes.STRING(2),
      allowNull: false,
      primaryKey: true
    },
    DESCRIPCION: {
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    NIVEL: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    COMPLEMENTO: {
      type: DataTypes.STRING(5000),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'GIdentificadores',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "Identi_PKClave",
        unique: true,
        fields: [
          { name: "CLAVE" },
        ]
      },
    ]
  });
};
