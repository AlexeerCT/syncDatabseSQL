const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('GUsuarios', {
    USUARIO: {
      type: DataTypes.STRING(20),
      allowNull: false,
      primaryKey: true
    },
    NOMBRE: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    NIVELSEG: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    PUESTO: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    LOGIN: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    CLAVE_ACCESO: {
      type: DataTypes.STRING(10),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'GUsuarios',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "USU_FKNivelSeg",
        fields: [
          { name: "NIVELSEG" },
        ]
      },
      {
        name: "USU_PKUsuario",
        unique: true,
        fields: [
          { name: "USUARIO" },
        ]
      },
    ]
  });
};
