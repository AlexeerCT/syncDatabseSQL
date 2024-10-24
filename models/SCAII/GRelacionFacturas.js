const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('GRelacionFacturas', {
    FOLIO: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    FECHAEXP: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    PEDIMENTO: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    CONTENEDORESTIPO: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    DATOSVEHICULO: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    NUMERONIU: {
      type: DataTypes.STRING(19),
      allowNull: true
    },
    CANTGUIASEMBARQUE: {
      type: DataTypes.STRING(12),
      allowNull: true
    },
    EDOCUMENT: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    OBSERVACIONESVU: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    NUMOPERACIONVU: {
      type: DataTypes.STRING(19),
      allowNull: true
    },
    AADUANAL: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    LINEAPERSONAAA: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    FIRMAELECTRONICA: {
      type: DataTypes.STRING(999),
      allowNull: true
    },
    NUMEROCERTIFICADO: {
      type: DataTypes.STRING(99),
      allowNull: true
    },
    TIPOIANOIA: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    ESFERROCARRIL: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    ADENDAVU: {
      type: DataTypes.STRING(204),
      allowNull: true
    },
    NUMTRASPORTE: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    IMPORTADOREXPORTADOR: {
      type: DataTypes.STRING(8),
      allowNull: true
    },
    ESAGRANEL: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    DESTINOORIGENCOVE: {
      type: DataTypes.STRING(19),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'GRelacionFacturas',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "RelFac_PKFolio",
        unique: true,
        fields: [
          { name: "FOLIO" },
        ]
      },
    ]
  });
};
