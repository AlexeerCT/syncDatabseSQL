const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('GIncoterm', {
    INCOTERM: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    DESCESPANOL: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    DESCINGLES: {
      type: DataTypes.STRING(256),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'GIncoterm',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "Incote_PKIncoterm",
        fields: [
          { name: "INCOTERM" },
        ]
      },
    ]
  });
};
