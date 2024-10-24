const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SSaldosDetallado', {
    FACTURAIMPO: {
      type: DataTypes.STRING(15),
      allowNull: false,
      primaryKey: true
    },
    NUMPARTE: {
      type: DataTypes.STRING(70),
      allowNull: false,
      primaryKey: true
    },
    PAISORIGEN: {
      type: DataTypes.STRING(3),
      allowNull: false,
      primaryKey: true
    },
    TIPOFRACIMPO: {
      type: DataTypes.STRING(7),
      allowNull: false,
      primaryKey: true
    },
    SECTOR: {
      type: DataTypes.STRING(8),
      allowNull: false,
      primaryKey: true
    },
    CAMPOCOMODIN: {
      type: DataTypes.STRING(100),
      allowNull: false,
      primaryKey: true
    },
    PROCEDENCIA: {
      type: DataTypes.STRING(3),
      allowNull: false,
      primaryKey: true
    },
    CANTEXISTENCIA: {
      type: DataTypes.DECIMAL(19,8),
      allowNull: true
    },
    CANTUSADA: {
      type: DataTypes.DECIMAL(19,8),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SSaldosDetallado',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "SalDet_PKFaPaPsTiSeCCPro",
        unique: true,
        fields: [
          { name: "FACTURAIMPO" },
          { name: "NUMPARTE" },
          { name: "PAISORIGEN" },
          { name: "TIPOFRACIMPO" },
          { name: "SECTOR" },
          { name: "CAMPOCOMODIN" },
          { name: "PROCEDENCIA" },
        ]
      },
    ]
  });
};
