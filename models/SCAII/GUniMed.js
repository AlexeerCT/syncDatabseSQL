const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('GUniMed', {
    UNIDAD: {
      type: DataTypes.STRING(5),
      allowNull: false,
      primaryKey: true
    },
    DESCRIPCION: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    FACTORCONV: {
      type: DataTypes.DECIMAL(13,6),
      allowNull: true
    },
    UNIDAD_MEX: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    UNIDAD_AME: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    CLAVE_ADUANA: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    CLAVEACE: {
      type: DataTypes.STRING(4),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'GUniMed',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "GenUni_PKUnidad",
        unique: true,
        fields: [
          { name: "UNIDAD" },
        ]
      },
    ]
  });
};
