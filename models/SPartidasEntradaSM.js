const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SPartidasEntradaSM', {
    CONSECUTIVO: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    FACTURAREMISION: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    LINEAREMISION: {
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
      allowNull: true
    },
    NUMPARTE: {
      type: DataTypes.STRING(70),
      allowNull: true
    },
    CANTENTRADA: {
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
    VALORENTMN: {
      type: DataTypes.DECIMAL(23,8),
      allowNull: true
    },
    VALORENTME: {
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
    FRACCIONDELAPRENDA: {
      type: DataTypes.STRING(19),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SPartidasEntradaSM',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "EntPSM_FKFacLineaSalida",
        fields: [
          { name: "FACTURASALIDA" },
          { name: "LINEASALIDA" },
        ]
      },
      {
        name: "EntPSM_PKConsecLinea",
        unique: true,
        fields: [
          { name: "CONSECUTIVO" },
          { name: "LINEAREMISION" },
        ]
      },
    ]
  });
};
