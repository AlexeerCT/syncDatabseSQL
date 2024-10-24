const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('GParFacturas', {
    CONSECUTIVO: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    FACTURA: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    LINEA: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    NUMPARTE: {
      type: DataTypes.STRING(70),
      allowNull: true
    },
    CANTIDAD: {
      type: DataTypes.DECIMAL(19,8),
      allowNull: true
    },
    UNIMED: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    COSTOUNITARIOMC: {
      type: DataTypes.DECIMAL(23,8),
      allowNull: true
    },
    NUMPERMISO: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    PAGRENGLON: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    PAISORIGEN: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    PESONETO: {
      type: DataTypes.DECIMAL(19,8),
      allowNull: true
    },
    PESOBRUTO: {
      type: DataTypes.DECIMAL(19,8),
      allowNull: true
    },
    CLAVEBULTOS: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    CANTBULTOS: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    FRACCIONIMPO: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    TIPOFRACCIMPO: {
      type: DataTypes.STRING(7),
      allowNull: true
    },
    TIENECO: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    SECTOR: {
      type: DataTypes.STRING(8),
      allowNull: true
    },
    FRACCIONAMERICANA: {
      type: DataTypes.STRING(16),
      allowNull: true
    },
    ORDENCOMPRAVENTA: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    DESCRIPCIONPARTE: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    VALORAGREGADO: {
      type: DataTypes.DECIMAL(23,8),
      allowNull: true
    },
    TIPOVA: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    VALEMPAQUEUS: {
      type: DataTypes.DECIMAL(23,8),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'GParFacturas',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "MatPar_PKConsecLinea",
        unique: true,
        fields: [
          { name: "CONSECUTIVO" },
          { name: "LINEA" },
        ]
      },
    ]
  });
};
