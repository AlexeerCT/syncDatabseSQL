const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SSaldoSalidaSM', {
    REMISIONSALIDA: {
      type: DataTypes.STRING(15),
      allowNull: false,
      primaryKey: true
    },
    FECHASALIDA: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    NUMPARTE: {
      type: DataTypes.STRING(70),
      allowNull: false,
      primaryKey: true
    },
    DESCRIPCIONE: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    CANTUSADA: {
      type: DataTypes.DECIMAL(19,8),
      allowNull: true
    },
    CANTEXITENCIA: {
      type: DataTypes.DECIMAL(19,8),
      allowNull: true
    },
    UMEXITENCIA: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    CANTPARTIDA: {
      type: DataTypes.DECIMAL(19,8),
      allowNull: true
    },
    UMPARTIDA: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    VALORIMPOMN: {
      type: DataTypes.DECIMAL(23,8),
      allowNull: true
    },
    VALORIMPOME: {
      type: DataTypes.DECIMAL(23,8),
      allowNull: true
    },
    VALORUSADOMN: {
      type: DataTypes.DECIMAL(23,8),
      allowNull: true
    },
    VALORUSADOME: {
      type: DataTypes.DECIMAL(23,8),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SSaldoSalidaSM',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "SalSal_PKRemSalidaParte",
        unique: true,
        fields: [
          { name: "REMISIONSALIDA" },
          { name: "NUMPARTE" },
        ]
      },
    ]
  });
};
