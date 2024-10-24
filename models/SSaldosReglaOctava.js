const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SSaldosReglaOctava', {
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
    PERMISOROCTAVA: {
      type: DataTypes.STRING(20),
      allowNull: false,
      primaryKey: true
    },
    LINEA: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    CANTEXITENCIA: {
      type: DataTypes.DECIMAL(19,8),
      allowNull: true
    },
    UNIMED: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    CLASE: {
      type: DataTypes.STRING(8),
      allowNull: true
    },
    FRACCIONIMPO: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    FRACCIONROCTAVA: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    VALORME: {
      type: DataTypes.DECIMAL(23,8),
      allowNull: true
    },
    PROCEDENCIA: {
      type: DataTypes.STRING(3),
      allowNull: false,
      primaryKey: true
    },
    SISTEMA: {
      type: DataTypes.STRING(5),
      allowNull: false,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'SSaldosReglaOctava',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "ROctSal_FKPermisoRO",
        fields: [
          { name: "PERMISOROCTAVA" },
        ]
      },
      {
        name: "ROctSal_PKFaParPaiTiSeROProSisLin",
        unique: true,
        fields: [
          { name: "FACTURAIMPO" },
          { name: "NUMPARTE" },
          { name: "PAISORIGEN" },
          { name: "TIPOFRACIMPO" },
          { name: "SECTOR" },
          { name: "PERMISOROCTAVA" },
          { name: "PROCEDENCIA" },
          { name: "SISTEMA" },
          { name: "LINEA" },
        ]
      },
    ]
  });
};
