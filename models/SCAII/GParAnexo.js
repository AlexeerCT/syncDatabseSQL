const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('GParAnexo', {
    MODULO: {
      type: DataTypes.STRING(2),
      allowNull: false,
      primaryKey: true
    },
    LINEA: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    TITULO: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    DESCRIPCION: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'GParAnexo',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PAnexo_FKModuloLinea",
        unique: true,
        fields: [
          { name: "MODULO" },
          { name: "LINEA" },
        ]
      },
    ]
  });
};
