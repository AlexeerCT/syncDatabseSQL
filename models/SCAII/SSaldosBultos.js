const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SSaldosBultos', {
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
    CLASE: {
      type: DataTypes.STRING(8),
      allowNull: true
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
    PROCEDENCIA: {
      type: DataTypes.STRING(3),
      allowNull: false,
      primaryKey: true
    },
    CANTBULTOS: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    CLAVEBULTOS: {
      type: DataTypes.STRING(5),
      allowNull: false,
      primaryKey: true
    },
    DESCBULTO: {
      type: DataTypes.STRING(40),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SSaldosBultos',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "BulSal_FKFaClPstiSePro",
        fields: [
          { name: "FACTURAIMPO" },
          { name: "CLASE" },
          { name: "PAISORIGEN" },
          { name: "TIPOFRACIMPO" },
          { name: "SECTOR" },
          { name: "PROCEDENCIA" },
        ]
      },
      {
        name: "BulSal_PKFaPaPsTiSeProBu",
        unique: true,
        fields: [
          { name: "FACTURAIMPO" },
          { name: "NUMPARTE" },
          { name: "PAISORIGEN" },
          { name: "TIPOFRACIMPO" },
          { name: "SECTOR" },
          { name: "PROCEDENCIA" },
          { name: "CLAVEBULTOS" },
        ]
      },
    ]
  });
};
