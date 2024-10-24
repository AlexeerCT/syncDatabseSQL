const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('GAAduanalPersonal', {
    CLAVEAA: {
      type: DataTypes.STRING(5),
      allowNull: false,
      primaryKey: true
    },
    LINEA: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    NOMBRE: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    RFC: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    CURP: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    PUESTO: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    PATENTE: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    NOMBRES: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    APELLIDOPATERNO: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    APELLIDOMATERNO: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    EMAIL: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'GAAduanalPersonal',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "AgeAduP_PKClaveAALin",
        unique: true,
        fields: [
          { name: "CLAVEAA" },
          { name: "LINEA" },
        ]
      },
    ]
  });
};
