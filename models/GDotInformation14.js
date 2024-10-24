const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('GDotInformation14', {
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
    TRANSTYPE: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    LPCOTYPE: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    LPCONUMBER: {
      type: DataTypes.STRING(33),
      allowNull: true
    },
    LPCODTQUAL: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    LPCODT: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    LPCOQTY: {
      type: DataTypes.DECIMAL(21,4),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'GDotInformation14',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "DOT14ClaveDotLinea",
        unique: true,
        fields: [
          { name: "CLAVEDOT" },
          { name: "LINEA" },
        ]
      },
    ]
  });
};
