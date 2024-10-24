const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SPartidasSalidaSM', {
    CONSECUTIVO: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    FACTURASALIDA: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    LINEASALIDA: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    NUMPARTE: {
      type: DataTypes.STRING(70),
      allowNull: true
    },
    CANTSALIDA: {
      type: DataTypes.DECIMAL(19,8),
      allowNull: true
    },
    UNIDADMEDIDA: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    COSTOUNITARIOMC: {
      type: DataTypes.DECIMAL(23,8),
      allowNull: true
    },
    COSTOMN: {
      type: DataTypes.DECIMAL(23,8),
      allowNull: true
    },
    COSTOME: {
      type: DataTypes.DECIMAL(23,8),
      allowNull: true
    },
    VALORSALMN: {
      type: DataTypes.DECIMAL(23,8),
      allowNull: true
    },
    VALORSALME: {
      type: DataTypes.DECIMAL(23,8),
      allowNull: true
    },
    TIPODENUMPARTE: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    TIPODEORDEN: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    CONCEPTODELAPARTIDA: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    FRACCIONDELAPARTIDA: {
      type: DataTypes.STRING(19),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SPartidasSalidaSM',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "SalPSM_PKConsecLinea",
        unique: true,
        fields: [
          { name: "CONSECUTIVO" },
          { name: "LINEASALIDA" },
        ]
      },
    ]
  });
};
