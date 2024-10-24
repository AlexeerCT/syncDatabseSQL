const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('GAphisContainers', {
    CONSECUTIVOAPHIS: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    LINEAAPHIS: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    CONTAINERNUMBER: {
      type: DataTypes.STRING(24),
      allowNull: true
    },
    TYPE: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    LENGTH: {
      type: DataTypes.DECIMAL(19,8),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'GAphisContainers',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "GACO_ConsecAphis_LinCont",
        unique: true,
        fields: [
          { name: "CONSECUTIVOAPHIS" },
          { name: "LINEAAPHIS" },
        ]
      },
    ]
  });
};
