const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('GControlDeCredito', {
    FRACCION: {
      type: DataTypes.STRING(10),
      allowNull: false,
      primaryKey: true
    },
    CARGA: {
      type: DataTypes.DECIMAL(29,8),
      allowNull: true
    },
    ABONO: {
      type: DataTypes.DECIMAL(29,8),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'GControlDeCredito',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "GCONTR_PK_FraccionControlCredito",
        unique: true,
        fields: [
          { name: "FRACCION" },
        ]
      },
    ]
  });
};
