const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('GAAduanal', {
    TIPO: {
      type: DataTypes.STRING(9),
      allowNull: true
    },
    CLAVEAA: {
      type: DataTypes.STRING(5),
      allowNull: false,
      primaryKey: true
    },
    NOMBRE: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    DIRECCION: {
      type: DataTypes.STRING(1500),
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
    TELEFONO: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    FAX: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    EMAIL: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    PAIS: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    RFC: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    CURP: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    PUESTO: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    PATENTE: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    EMPRESA: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    CONTACTO: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    RUTAARCHCER: {
      type: DataTypes.STRING(1499),
      allowNull: true
    },
    RUTAARCHKEY: {
      type: DataTypes.STRING(1499),
      allowNull: true
    },
    CLAVEACCESO: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    FORMAGENFIEL: {
      type: DataTypes.STRING(19),
      allowNull: true
    },
    RUTALEERARCHAAFIRMA: {
      type: DataTypes.STRING(1499),
      allowNull: true
    },
    RUTADEPARCHIVO: {
      type: DataTypes.STRING(1499),
      allowNull: true
    },
    CLAVEACCESOFIEL: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    USUARIOWEBSERVICEVU: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    CLAVEACCESOWEBSERVICEVU: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    EMAILVU: {
      type: DataTypes.STRING(800),
      allowNull: true
    },
    TIPOFIGURAVU: {
      type: DataTypes.STRING(29),
      allowNull: true
    },
    RUTAARCHIVOSXML: {
      type: DataTypes.STRING(1499),
      allowNull: true
    },
    RFCCONSULTA: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    RUTAARCHCERDODA: {
      type: DataTypes.STRING(1499),
      allowNull: true
    },
    RUTAARCHKEYDODA: {
      type: DataTypes.STRING(1499),
      allowNull: true
    },
    USUARIOWEBSERVICEDODA: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    CLAVEACCESOWEBSERVICEDODA: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    CLAVEACCESOFIELDODA: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    RUTAARCHIVOSXMLDODA: {
      type: DataTypes.STRING(1499),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'GAAduanal',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "AgeAdu_PKClaveAA",
        unique: true,
        fields: [
          { name: "CLAVEAA" },
        ]
      },
    ]
  });
};
