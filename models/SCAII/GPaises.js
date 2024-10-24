const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('GPaises', {
    CLAVEM3: {
      type: DataTypes.STRING(3),
      allowNull: false,
      primaryKey: true
    },
    PAIS_MEX: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    PAIS_AME: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    DESC_E: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    DESC_I: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'GPaises',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "AKPAIS_AME",
        unique: true,
        fields: [
          { name: "PAIS_AME" },
        ]
      },
      {
        name: "GenPai_PKClaveM3",
        unique: true,
        fields: [
          { name: "CLAVEM3" },
        ]
      },
    ]
  });
};
