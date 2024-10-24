const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('GAgencyTariffCodes', {
    CONSECUTIVO: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    TARIFFFLAGCODE: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    AGENCYCODE: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    REQUIREDMAYBEREQUIRED: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    PROGRAMCODE: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    TARIFFFLAGCODEDEFINITION: {
      type: DataTypes.STRING(1000),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'GAgencyTariffCodes',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_CONSECUTIVO",
        unique: true,
        fields: [
          { name: "CONSECUTIVO" },
        ]
      },
    ]
  });
};
