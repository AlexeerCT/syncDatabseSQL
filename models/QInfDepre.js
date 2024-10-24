const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('QInfDepre', {
    CONSECUTIVO: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    FRACCION: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    SUPUESTO: {
      type: DataTypes.STRING(800),
      allowNull: true
    },
    PORCENTAJE: {
      type: DataTypes.DECIMAL(5,2),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'QInfDepre',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "QIDp_ConsecIDP",
        unique: true,
        fields: [
          { name: "CONSECUTIVO" },
        ]
      },
    ]
  });
};
