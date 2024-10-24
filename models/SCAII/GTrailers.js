const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('GTrailers', {
    NUMTRAILER: {
      type: DataTypes.STRING(20),
      allowNull: false,
      primaryKey: true
    },
    NUMTRAILERACE: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    TIPOTRAILER: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    PRECINTO: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    CODENTIDADIIT: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    NUMEROPLACAS: {
      type: DataTypes.STRING(17),
      allowNull: true
    },
    ESTADO: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    PAIS: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    CLAVECONTENEDOR: {
      type: DataTypes.STRING(3),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'GTrailers',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "Traila_PKNumTrailer",
        unique: true,
        fields: [
          { name: "NUMTRAILER" },
        ]
      },
    ]
  });
};
