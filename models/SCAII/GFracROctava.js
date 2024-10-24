const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('GFracROctava', {
    PERMISO: {
      type: DataTypes.STRING(20),
      allowNull: false,
      primaryKey: true
    },
    LINEA: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    FRACCION: {
      type: DataTypes.STRING(10),
      allowNull: false,
      primaryKey: true
    },
    CANTIDADCUPO: {
      type: DataTypes.DECIMAL(19,8),
      allowNull: true
    },
    CANTUSADA: {
      type: DataTypes.DECIMAL(23,8),
      allowNull: true
    },
    VALORCUPO: {
      type: DataTypes.DECIMAL(23,8),
      allowNull: true
    },
    VALORUSADA: {
      type: DataTypes.DECIMAL(23,8),
      allowNull: true
    },
    COSTOUNITARIOME: {
      type: DataTypes.DECIMAL(23,8),
      allowNull: true
    },
    UNIMED: {
      type: DataTypes.STRING(5),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'GFracROctava',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "FraOct_FKPermLin",
        unique: true,
        fields: [
          { name: "PERMISO" },
          { name: "LINEA" },
        ]
      },
      {
        name: "FraOct_PKPermFracLin",
        unique: true,
        fields: [
          { name: "PERMISO" },
          { name: "LINEA" },
          { name: "FRACCION" },
        ]
      },
    ]
  });
};
