const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('GPrecintos', {
    PRECINTO: {
      type: DataTypes.STRING(15),
      allowNull: false,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'GPrecintos',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "Precin_PKPrecinto",
        unique: true,
        fields: [
          { name: "PRECINTO" },
        ]
      },
    ]
  });
};
