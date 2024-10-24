const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('GDivisionPeligro', {
    CLASEDEPELIGRO: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    DESCRIPCION: {
      type: DataTypes.STRING(499),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'GDivisionPeligro',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "DivPel_PKClaseDiv",
        fields: [
          { name: "CLASEDEPELIGRO" },
        ]
      },
    ]
  });
};
