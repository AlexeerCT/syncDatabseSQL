const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('GCodigosFDA04', {
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
    FDA04ELENAME: {
      type: DataTypes.STRING(51),
      allowNull: true
    },
    FDA04ELEQTY: {
      type: DataTypes.DECIMAL(11,2),
      allowNull: true
    },
    FDA04ELEQTYUOM: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    FDA04ELEPCTG: {
      type: DataTypes.DECIMAL(5,4),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'GCodigosFDA04',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "FDA04ClaveLinea",
        unique: true,
        fields: [
          { name: "CLAVEFDA" },
          { name: "LINEA" },
        ]
      },
    ]
  });
};
