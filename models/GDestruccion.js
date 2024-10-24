const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('GDestruccion', {
    OFICIO: {
      type: DataTypes.STRING(30),
      allowNull: false,
      primaryKey: true
    },
    FECHADESTRUCCION: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'GDestruccion',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "AKFECHA",
        fields: [
          { name: "FECHADESTRUCCION" },
        ]
      },
      {
        name: "PKOFICIO",
        unique: true,
        fields: [
          { name: "OFICIO" },
        ]
      },
    ]
  });
};
