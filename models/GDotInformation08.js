const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('GDotInformation08', {
    CLAVEDOT: {
      type: DataTypes.STRING(20),
      allowNull: false,
      primaryKey: true
    },
    LINEA: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    IDQUAL: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    IDNUMBER: {
      type: DataTypes.STRING(17),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'GDotInformation08',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "DOT08ClaveDotLinea",
        unique: true,
        fields: [
          { name: "CLAVEDOT" },
          { name: "LINEA" },
        ]
      },
    ]
  });
};
