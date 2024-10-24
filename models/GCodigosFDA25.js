const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('GCodigosFDA25', {
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
    FDA25LOTNUMBER: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    FDA25LOTPRODBD: {
      type: DataTypes.STRING(8),
      allowNull: true
    },
    FDA25LOTPRODED: {
      type: DataTypes.STRING(8),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'GCodigosFDA25',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "FDA25ClaveLinea",
        unique: true,
        fields: [
          { name: "CLAVEFDA" },
          { name: "LINEA" },
        ]
      },
    ]
  });
};
