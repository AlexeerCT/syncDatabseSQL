const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('GProcesos', {
    CONSECUTIVO: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    SISTEMA: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    IDPROCESO: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    DESCRIPCION: {
      type: DataTypes.STRING(1000),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'GProcesos',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "GProces_FKSistemaIDPro",
        fields: [
          { name: "SISTEMA" },
          { name: "IDPROCESO" },
        ]
      },
      {
        name: "GProces_PKConsecutivo",
        unique: true,
        fields: [
          { name: "CONSECUTIVO" },
        ]
      },
    ]
  });
};
