const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SPackingList', {
    CONSECUTIVO: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    NUMPACKINGLIST: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    EXPORTADOR: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    EXPORTADOA: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ENVIADOA: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ENVIADOPOR: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    TRANSPORTISTA: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    AADUANAL: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    FECHA: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    FACTURAREFERENCIA: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    ESTATUS: {
      type: DataTypes.STRING(4),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SPackingList',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "XXX_NumPackingList",
        fields: [
          { name: "NUMPACKINGLIST" },
        ]
      },
      {
        name: "XXX_PKConsecutivo",
        unique: true,
        fields: [
          { name: "CONSECUTIVO" },
        ]
      },
    ]
  });
};
