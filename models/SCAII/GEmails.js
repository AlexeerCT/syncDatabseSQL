const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('GEmails', {
    SYSID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    EMAIL: {
      type: DataTypes.STRING(999),
      allowNull: true
    },
    NOMBRE: {
      type: DataTypes.STRING(199),
      allowNull: true
    },
    EMPRESA: {
      type: DataTypes.STRING(199),
      allowNull: true
    },
    TELEFONOS: {
      type: DataTypes.STRING(199),
      allowNull: true
    },
    CATEGORIA: {
      type: DataTypes.STRING(19),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'GEmails',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "AKEMAILSYSID",
        unique: true,
        fields: [
          { name: "EMAIL" },
          { name: "SYSID" },
        ]
      },
      {
        name: "Email_AKEmail",
        unique: true,
        fields: [
          { name: "EMAIL" },
        ]
      },
      {
        name: "Email_PKSysID",
        unique: true,
        fields: [
          { name: "SYSID" },
        ]
      },
    ]
  });
};
