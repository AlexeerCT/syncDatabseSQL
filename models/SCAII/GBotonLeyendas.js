const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('GBotonLeyendas', {
    NUMBOTON: {
      type: DataTypes.TINYINT,
      allowNull: false,
      primaryKey: true
    },
    BOTONLEYENDA: {
      type: DataTypes.STRING(19),
      allowNull: true
    },
    BOTONLEYENDA2: {
      type: DataTypes.STRING(19),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'GBotonLeyendas',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "BOTLEY_PKNumBoton",
        unique: true,
        fields: [
          { name: "NUMBOTON" },
        ]
      },
    ]
  });
};
