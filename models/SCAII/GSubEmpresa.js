const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('GSubEmpresa', {
    CLAVESUB: {
      type: DataTypes.STRING(5),
      allowNull: false,
      primaryKey: true
    },
    SUBEMPRESA: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    BROKER: {
      type: DataTypes.STRING(6),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'GSubEmpresa',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "GenSub_PKClaveSub",
        unique: true,
        fields: [
          { name: "CLAVESUB" },
        ]
      },
    ]
  });
};
