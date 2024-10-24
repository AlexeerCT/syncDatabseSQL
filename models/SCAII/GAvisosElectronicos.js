const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('GAvisosElectronicos', {
    SYSID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    NUMERODEAVISO: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    ANIO: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    PATENTE: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    PEDIMENTO: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    ARCHIVOENVIADO: {
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    ARCHIVORESPUESTA: {
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    ESTATUS: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    FACTURA: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ACUSEVALIDACION: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    FEA: {
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    NUMCERTIFICADO: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'GAvisosElectronicos',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "GAvE_NumAviso",
        fields: [
          { name: "NUMERODEAVISO" },
        ]
      },
      {
        name: "GAvE_SysIDAE",
        unique: true,
        fields: [
          { name: "SYSID" },
        ]
      },
    ]
  });
};
