const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('GConversiones', {
    CLAVEUNI1: {
      type: DataTypes.STRING(5),
      allowNull: false,
      primaryKey: true
    },
    FACTORCONV: {
      type: DataTypes.DECIMAL(13,6),
      allowNull: true
    },
    CLAVEUNI2: {
      type: DataTypes.STRING(5),
      allowNull: false,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'GConversiones',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "GConve_FKClaveUni1",
        fields: [
          { name: "CLAVEUNI1" },
        ]
      },
      {
        name: "GConve_FKClaveUni2",
        fields: [
          { name: "CLAVEUNI2" },
        ]
      },
      {
        name: "GConve_FKUnidades12",
        unique: true,
        fields: [
          { name: "CLAVEUNI1" },
          { name: "CLAVEUNI2" },
        ]
      },
      {
        name: "GConve_FKUnidades21",
        fields: [
          { name: "CLAVEUNI2" },
          { name: "CLAVEUNI1" },
        ]
      },
    ]
  });
};
