const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('GConductor', {
    CLAVETRANS: {
      type: DataTypes.STRING(5),
      allowNull: false,
      primaryKey: true
    },
    LINEA: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    CONDUCTOR: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    NUMLICENCIA: {
      type: DataTypes.STRING(29),
      allowNull: true
    },
    IDLINEAEXPRESS: {
      type: DataTypes.STRING(17),
      allowNull: true
    },
    IDENTIFICACIONACE: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    FECHANAC: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    SEXO: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    PAISNACIMIENTO: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    AUTTRANSMATPELIGROSO: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    ESTADOMATPELIGROSO: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    NOMBRE: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    APELLIDOPATERNO: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    CLAVEID1: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    NUMEROID1: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    ESTADOID1: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    PAISID1: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    CLAVEID2: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    NUMEROID2: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    ESTADOID2: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    PAISID2: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    NUMGAFETE: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    CLASE: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    NUMGAFETEUNICO: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'GConductor',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "Conduc_FKTranspCoduc",
        fields: [
          { name: "CLAVETRANS" },
          { name: "CONDUCTOR" },
        ]
      },
      {
        name: "Conduc_PKTransLinea",
        unique: true,
        fields: [
          { name: "CLAVETRANS" },
          { name: "LINEA" },
        ]
      },
    ]
  });
};
