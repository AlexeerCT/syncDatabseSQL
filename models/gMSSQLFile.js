const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('gMSSQLFile', {
    DS_FIELD1: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    DS_FIELD2: {
      type: DataTypes.STRING(250),
      allowNull: false,
      primaryKey: true
    },
    DS_FIELD3: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    DS_FIELD4: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    DS_FIELD5: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    DS_FIELD6: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    DS_FIELD7: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    DS_FIELD8: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    DS_FIELD9: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    DS_FIELD10: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    DS_FIELD11: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    DS_FIELD12: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    DS_FIELD13: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    DS_FIELD14: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    DS_FIELD15: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    DS_FIELD16: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    DS_FIELD17: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    DS_FIELD18: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    DS_FIELD19: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    DS_FIELD20: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    DS_FIELD21: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    DS_FIELD22: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    DS_FIELD23: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    DS_FIELD24: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    DS_FIELD25: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    DS_FIELD26: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    DS_FIELD27: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    DS_FIELD28: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    DS_FIELD29: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    DS_FIELD30: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    DS_FIELD31: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    DS_FIELD32: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    DS_FIELD33: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    DS_FIELD34: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    DS_FIELD35: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    DS_FIELD36: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    DS_FIELD37: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    DS_FIELD38: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    DS_FIELD39: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    DS_FIELD40: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'gMSSQLFile',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__gMSSQLFi__477FB1692AD800AB",
        unique: true,
        fields: [
          { name: "DS_FIELD2" },
        ]
      },
    ]
  });
};
