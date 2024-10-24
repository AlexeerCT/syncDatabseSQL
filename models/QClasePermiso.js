const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('QClasePermiso', {
    CONSECUTIVO: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    NUMOFICIO: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    LINEA: {
      type: DataTypes.SMALLINT,
      allowNull: true
    },
    CLASE: {
      type: DataTypes.STRING(9),
      allowNull: false,
      primaryKey: true
    },
    PAGINARENGLON: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    FECHA: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'QClasePermiso',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "ClaPer_AKClaseFecha",
        fields: [
          { name: "CLASE" },
          { name: "FECHA" },
        ]
      },
      {
        name: "ClaPer_PKConsecClase",
        unique: true,
        fields: [
          { name: "CONSECUTIVO" },
          { name: "CLASE" },
        ]
      },
    ]
  });
};
