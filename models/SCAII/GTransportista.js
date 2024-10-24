const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('GTransportista', {
    CLAVETRANS: {
      type: DataTypes.STRING(5),
      allowNull: false,
      primaryKey: true
    },
    NOMBRE: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    NOMBRECORTO: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    RESPONSABLE: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    RFC: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    CALLES: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    CODIGOPOSTAL: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    CIUDAD: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    ESTADO: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    PAIS: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    CODCARGADOR: {
      type: DataTypes.STRING(9),
      allowNull: true
    },
    CODIGOCAAT: {
      type: DataTypes.STRING(49),
      allowNull: true
    },
    CODIGOTRANS: {
      type: DataTypes.STRING(8),
      allowNull: true
    },
    TIPOINTERFASETRANS: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    SERVIDOR_FTP: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    USUARIO_FTP: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    CLAVEACCESSO_FTP: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    DIRECTORIO_FTP: {
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    FILLERCODE: {
      type: DataTypes.STRING(4),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'GTransportista',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "GenTra_PKClaveTrans",
        unique: true,
        fields: [
          { name: "CLAVETRANS" },
        ]
      },
    ]
  });
};
