const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sFracciones_USA', {
    CONSECUTIVO: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    FRACCION_SIN_PUNTO: {
      type: DataTypes.STRING(19),
      allowNull: true
    },
    FRACCION_CON_PUNTO: {
      type: DataTypes.STRING(19),
      allowNull: true
    },
    FRACCION_MOSTRAR: {
      type: DataTypes.STRING(19),
      allowNull: true
    },
    ESPECIFICO: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    NIVEL: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    DESCRIPCION: {
      type: DataTypes.STRING(5000),
      allowNull: true
    },
    UNIDADCANTIDAD: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    TARIFA1: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    TLC: {
      type: DataTypes.STRING(5000),
      allowNull: true
    },
    TARIFA2: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    NOTAS: {
      type: DataTypes.STRING(7998),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'sFracciones_USA',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "SFR_PKID",
        unique: true,
        fields: [
          { name: "CONSECUTIVO" },
        ]
      },
    ]
  });
};
