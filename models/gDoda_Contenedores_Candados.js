const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('gDoda_Contenedores_Candados', {
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
    LINEACANDADO: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    VALORCANDADO: {
      type: DataTypes.STRING(21),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'gDoda_Contenedores_Candados',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PKSQLDCCAN_ID_LN_LN",
        unique: true,
        fields: [
          { name: "DODASYSID" },
          { name: "LINEACONTENEDOR" },
          { name: "LINEACANDADO" },
        ]
      },
    ]
  });
};
