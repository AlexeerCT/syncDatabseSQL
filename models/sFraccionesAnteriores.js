const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sFraccionesAnteriores', {
    SYSID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    FRACCIONACTUAL: {
      type: DataTypes.STRING(8),
      allowNull: true
    },
    FRACCIONANTERIOR: {
      type: DataTypes.STRING(8),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'sFraccionesAnteriores',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "sFracAnt_AKFracActFracAnt",
        unique: true,
        fields: [
          { name: "FRACCIONACTUAL" },
          { name: "FRACCIONANTERIOR" },
        ]
      },
      {
        name: "sFracAnt_PKSysID",
        unique: true,
        fields: [
          { name: "SYSID" },
        ]
      },
    ]
  });
};
