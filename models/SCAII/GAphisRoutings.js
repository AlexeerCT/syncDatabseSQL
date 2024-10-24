const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('GAphisRoutings', {
    APHISCONSEC: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    LINEAROUTING: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    TYPE: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    COUNTRY: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    NAME: {
      type: DataTypes.STRING(59),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'GAphisRoutings',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "GARO_ConsecAphis_LinRouting",
        unique: true,
        fields: [
          { name: "APHISCONSEC" },
          { name: "LINEAROUTING" },
        ]
      },
    ]
  });
};
