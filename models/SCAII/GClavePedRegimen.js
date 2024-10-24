const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('GClavePedRegimen', {
    CONSECUTIVO: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    CLAVEPED: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    REGIMENPED: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    TIPO: {
      type: DataTypes.STRING(1),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'GClavePedRegimen',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "ClaReg_FKClaPRegTipo",
        fields: [
          { name: "REGIMENPED" },
          { name: "CLAVEPED" },
          { name: "TIPO" },
        ]
      },
      {
        name: "ClaReg_FKClavePed_Tipo",
        fields: [
          { name: "CLAVEPED" },
          { name: "TIPO" },
        ]
      },
      {
        name: "ClaReg_PKConsecutivo",
        unique: true,
        fields: [
          { name: "CONSECUTIVO" },
        ]
      },
    ]
  });
};
