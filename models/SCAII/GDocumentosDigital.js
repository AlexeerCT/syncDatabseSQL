const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('GDocumentosDigital', {
    CONSECUTIVO: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    IDTIPODOCUMENTO: {
      type: DataTypes.STRING(9),
      allowNull: true
    },
    NOMBREARCHIVO: {
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    EDOCUMENT: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    FECHADIGITALIZACION: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    INDENTIFICADOR: {
      type: DataTypes.STRING(70),
      allowNull: true
    },
    NUMOPERACIONVU: {
      type: DataTypes.STRING(19),
      allowNull: true
    },
    MODULO: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    CLAVEAA: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    DESCRIPCION: {
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    RUTAENVIOXML: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    RUTARESPUESTAXML: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    RFCCONSULTA: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    CADENAORIGINALDOC: {
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    SELLODIGITALSOLICITANTE: {
      type: DataTypes.STRING(2499),
      allowNull: true
    },
    SELLODIGITALVU: {
      type: DataTypes.STRING(1800),
      allowNull: true
    },
    FOLIOSOLICITUD: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    PEDIMENTO: {
      type: DataTypes.STRING(15),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'GDocumentosDigital',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "DocDig_PKConsecutivo",
        unique: true,
        fields: [
          { name: "CONSECUTIVO" },
        ]
      },
    ]
  });
};
