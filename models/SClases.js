const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SClases', {
    CLASE: {
      type: DataTypes.STRING(8),
      allowNull: false,
      primaryKey: true
    },
    DESCRIPCIONE: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    DESCRIPCIONI: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    TIPOMAT: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    UNIMED: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    UMEXISTENCIA: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    FRACCION: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    FRACCIONAME: {
      type: DataTypes.STRING(16),
      allowNull: true
    },
    MATERIALPPAL: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    CLAVESUB: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    REVFISICA: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    FRACCIONEXENTAIVA: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    FRACCIONAMERICANAUSA: {
      type: DataTypes.STRING(19),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SClases',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "ClaMat_PKClase",
        unique: true,
        fields: [
          { name: "CLASE" },
        ]
      },
    ]
  });
};
