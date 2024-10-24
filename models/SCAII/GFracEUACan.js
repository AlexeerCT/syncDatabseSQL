const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('GFracEUACan', {
    FRACCION: {
      type: DataTypes.STRING(13),
      allowNull: false,
      primaryKey: true
    },
    ADV: {
      type: DataTypes.DECIMAL(5,2),
      allowNull: true
    },
    UNIDAD: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    CLAVEM3: {
      type: DataTypes.STRING(3),
      allowNull: false,
      primaryKey: true
    },
    DESCRIPCION: {
      type: DataTypes.STRING(1000),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'GFracEUACan',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "FraEUC_PKFraccionPais",
        unique: true,
        fields: [
          { name: "FRACCION" },
          { name: "CLAVEM3" },
        ]
      },
    ]
  });
};
