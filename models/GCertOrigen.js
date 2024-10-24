const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('GCertOrigen', {
    NUMERO: {
      type: DataTypes.STRING(10),
      allowNull: false,
      primaryKey: true
    },
    EXPORTADOR: {
      type: DataTypes.STRING(8),
      allowNull: true
    },
    FECHAINICIO: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    FECHAFINAL: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    PRODUCTOR: {
      type: DataTypes.STRING(8),
      allowNull: true
    },
    IMPORTADOR: {
      type: DataTypes.STRING(8),
      allowNull: true
    },
    EMPRESA: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    NOMBRE: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    CARGO: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    FECHAGEN: {
      type: DataTypes.INTEGER,
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
    TIPOFRACCION: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    SISTEMA: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    TAXID1: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    TAXID2: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    TAXID3: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    CORREOELECTRONICO: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    NUMEROEMBARQUE: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    CLIENTEASIGNAR: {
      type: DataTypes.STRING(8),
      allowNull: true
    },
    NUMERODEFACTURA: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'GCertOrigen',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "CerOrg_PKNumero",
        unique: true,
        fields: [
          { name: "NUMERO" },
        ]
      },
    ]
  });
};
