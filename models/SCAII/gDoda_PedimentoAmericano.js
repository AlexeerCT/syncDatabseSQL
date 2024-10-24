const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('gDoda_PedimentoAmericano', {
    DODASYSID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    LINEAPEDAME: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    TIPOPEDIMENTOAMERICANO: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    VALORPEDIMENTOAMERICANO: {
      type: DataTypes.STRING(20),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'gDoda_PedimentoAmericano',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PKSQLDDPA_ID_LIN",
        unique: true,
        fields: [
          { name: "DODASYSID" },
          { name: "LINEAPEDAME" },
        ]
      },
    ]
  });
};
