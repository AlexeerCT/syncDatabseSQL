const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('GCodigosFDA23', {
    CLAVEFDA: {
      type: DataTypes.STRING(20),
      allowNull: false,
      primaryKey: true
    },
    LINEA: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    FDA23AOCCODE: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    FDA23AOCQUAL: {
      type: DataTypes.STRING(30),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'GCodigosFDA23',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "FDA23ClaveLinea",
        unique: true,
        fields: [
          { name: "CLAVEFDA" },
          { name: "LINEA" },
        ]
      },
    ]
  });
};
