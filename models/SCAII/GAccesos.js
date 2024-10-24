const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('GAccesos', {
    CONSECUTIVO: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    FECHAINICIAL: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    FECHAFINAL: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    HORAINICIAL: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    HORAFINAL: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    HORADEUSO: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    MAQUINA: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    IP: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    ESTADO: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    SISTEMA: {
      type: DataTypes.STRING(30),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'GAccesos',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "GAC_PKConsecutivo",
        unique: true,
        fields: [
          { name: "CONSECUTIVO", order: "DESC" },
        ]
      },
    ]
  });
};
