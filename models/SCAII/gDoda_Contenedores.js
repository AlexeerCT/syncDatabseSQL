const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('gDoda_Contenedores', {
    DODASYSID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    LINEACONTENEDOR: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    VALORCONTENEDOR: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    PRECINTOS: {
      type: DataTypes.STRING(254),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'gDoda_Contenedores',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PKSQLDDCT_ID_LN",
        unique: true,
        fields: [
          { name: "DODASYSID" },
          { name: "LINEACONTENEDOR" },
        ]
      },
    ]
  });
};
