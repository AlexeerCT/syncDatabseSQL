const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('GPrevalidadores', {
    CLAVE: {
      type: DataTypes.STRING(20),
      allowNull: false,
      primaryKey: true
    },
    ADUANAPREVALIDADOR: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    PATENTEPREVALIDADOR: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    DESCRIPCIONPREVALIDADOR: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'GPrevalidadores',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_ClavePrevAElec",
        unique: true,
        fields: [
          { name: "CLAVE" },
        ]
      },
    ]
  });
};
