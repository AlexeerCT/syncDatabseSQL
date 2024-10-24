const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('GSQLFile3', {
    C1: {
      type: DataTypes.STRING(499),
      allowNull: true
    },
    C2: {
      type: DataTypes.STRING(499),
      allowNull: true
    },
    C3: {
      type: DataTypes.STRING(499),
      allowNull: true
    },
    C4: {
      type: DataTypes.STRING(499),
      allowNull: true
    },
    C5: {
      type: DataTypes.STRING(499),
      allowNull: true
    },
    C6: {
      type: DataTypes.STRING(499),
      allowNull: true
    },
    C7: {
      type: DataTypes.STRING(499),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'GSQLFile3',
    schema: 'dbo',
    timestamps: false
  });
};
