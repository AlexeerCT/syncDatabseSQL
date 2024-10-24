const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SClasePermiso', {
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
      type: DataTypes.INTEGER,
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
    },
    CANTIDAD: {
      type: DataTypes.DECIMAL(19,8),
      allowNull: true
    },
    CANTUSADA: {
      type: DataTypes.DECIMAL(19,8),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SClasePermiso',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "ClaSEC_AKClaseFecha",
        fields: [
          { name: "CLASE" },
          { name: "FECHA" },
        ]
      },
      {
        name: "ClaSEC_PKConsecClase",
        unique: true,
        fields: [
          { name: "CONSECUTIVO" },
          { name: "CLASE" },
        ]
      },
    ]
  });
};
