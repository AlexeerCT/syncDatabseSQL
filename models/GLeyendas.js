const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('GLeyendas', {
    CLAVELEY: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    DESCLEYENDA: {
      type: DataTypes.STRING(2000),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'GLeyendas',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "GenLey_PKClaveLey",
        unique: true,
        fields: [
          { name: "CLAVELEY" },
        ]
      },
    ]
  });
};
