const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('GTipoCambioMM', {
    CLAVEMONEDA: {
      type: DataTypes.STRING(3),
      allowNull: false,
      primaryKey: true
    },
    ANIO: {
      type: DataTypes.STRING(4),
      allowNull: false,
      primaryKey: true
    },
    ENERO: {
      type: DataTypes.DECIMAL(13,6),
      allowNull: true
    },
    FEBRERO: {
      type: DataTypes.DECIMAL(13,6),
      allowNull: true
    },
    MARZO: {
      type: DataTypes.DECIMAL(13,6),
      allowNull: true
    },
    ABRIL: {
      type: DataTypes.DECIMAL(13,6),
      allowNull: true
    },
    MAYO: {
      type: DataTypes.DECIMAL(13,6),
      allowNull: true
    },
    JUNIO: {
      type: DataTypes.DECIMAL(13,6),
      allowNull: true
    },
    JULIO: {
      type: DataTypes.DECIMAL(13,6),
      allowNull: true
    },
    AGOSTO: {
      type: DataTypes.DECIMAL(13,6),
      allowNull: true
    },
    SEPTIEMBRE: {
      type: DataTypes.DECIMAL(13,6),
      allowNull: true
    },
    OCTUBRE: {
      type: DataTypes.DECIMAL(13,6),
      allowNull: true
    },
    NOVIEMBRE: {
      type: DataTypes.DECIMAL(13,6),
      allowNull: true
    },
    DICIEMBRE: {
      type: DataTypes.DECIMAL(13,6),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'GTipoCambioMM',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "TCMMon_PKClaveMonAnio",
        unique: true,
        fields: [
          { name: "CLAVEMONEDA" },
          { name: "ANIO" },
        ]
      },
    ]
  });
};
