const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('QClaAct', {
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
    TIPOMAQEQUIPO: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    UNIDADMEDIDA: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    FRACCION: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    FRACCIONIMPO: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    TIPOFRACIMPO: {
      type: DataTypes.STRING(6),
      allowNull: true
    },
    FRACCIONEXPO: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    TIPOFRACEXPO: {
      type: DataTypes.STRING(6),
      allowNull: true
    },
    TASADEPRECIA: {
      type: DataTypes.DECIMAL(5,2),
      allowNull: true
    },
    FRACCIONAME: {
      type: DataTypes.STRING(16),
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
    FDA: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    ECCN: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    HABILITADESHABILITACLASE: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    FRACCIONEXENTAIVA: {
      type: DataTypes.STRING(4),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'QClaAct',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "EqiCla_PKClase",
        unique: true,
        fields: [
          { name: "CLASE" },
        ]
      },
    ]
  });
};
