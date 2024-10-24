const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('GFracAme', {
    FRACCION: {
      type: DataTypes.STRING(16),
      allowNull: false,
      primaryKey: true
    },
    PREFIJO: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    ADV: {
      type: DataTypes.DECIMAL(5,2),
      allowNull: true
    },
    UNIDAD: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    DESCRIPCION: {
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    TIPOADV: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    ADVCOSTOFIJO: {
      type: DataTypes.DECIMAL(23,8),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'GFracAme',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "FraAme_PKFraccion",
        unique: true,
        fields: [
          { name: "FRACCION" },
        ]
      },
    ]
  });
};
