const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('GClientesPro', {
    TIPOEXTNAC: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    CLIENTE: {
      type: DataTypes.STRING(8),
      allowNull: false,
      primaryKey: true
    },
    NOMBRE: {
      type: DataTypes.STRING(256),
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
    NUMEXT: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    NUMINT: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    CODIGOPOSTAL: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    COLONIA: {
      type: DataTypes.STRING(40),
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
    TELEFONO: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    NUMFAX: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    EMAIL: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    CURP: {
      type: DataTypes.STRING(19),
      allowNull: true
    },
    CLIENTE_O_PROV: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    PROGRAMA: {
      type: DataTypes.STRING(7),
      allowNull: true
    },
    NUMEROPROGRAMA: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    PROSEC: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    AUTORIZACIONPROSEC: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    FECHAAUTSECON: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    MANUFACTERID: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    TAXID: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    BROKER: {
      type: DataTypes.STRING(6),
      allowNull: true
    },
    BROKERIMPO: {
      type: DataTypes.STRING(6),
      allowNull: true
    },
    CLAVETRANSFER: {
      type: DataTypes.STRING(8),
      allowNull: true
    },
    CLAVEWEB: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    TRASFORMASUBMAQ: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    AUTORIZACIONSECON: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    PROPORCIONAPLICADA: {
      type: DataTypes.DECIMAL(7,2),
      allowNull: true
    },
    VINCULACION: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    ESEMPRESACERTIFICADA: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    REGISTROEMPCERT: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    INFORMACIONEXTRA: {
      type: DataTypes.STRING(399),
      allowNull: true
    },
    CONTACTO: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    NUMAUTDONACION: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    NOMBRECORTO: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    ESPROVNACIONAL: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    MUNICIPIO: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    CTPAT_SVI: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    RESPONSABLE: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    PUESTO: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    HABILITADODESAHABILITADO: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    NUMREGLTRIBUTARIO: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    REFERENCIA: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    INCOTERM: {
      type: DataTypes.STRING(19),
      allowNull: true
    },
    SERVICIOSUBMAQ: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    FECHASAUTSE: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    NUMAUTSE: {
      type: DataTypes.STRING(300),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'GClientesPro',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "CliPro_FKPaisEstado",
        fields: [
          { name: "PAIS" },
          { name: "ESTADO" },
        ]
      },
      {
        name: "CliPro_PKCliente",
        unique: true,
        fields: [
          { name: "CLIENTE" },
        ]
      },
    ]
  });
};
