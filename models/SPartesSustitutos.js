const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SPartesSustitutos', {
    NUMPARTE: {
      type: DataTypes.STRING(99),
      allowNull: false,
      primaryKey: true
    },
    NUMPARTESUSTITUTO: {
      type: DataTypes.STRING(99),
      allowNull: false,
      primaryKey: true
    },
    FACTORCONVERSION: {
      type: DataTypes.DECIMAL(13,6),
      allowNull: true
    },
    UNIDADMEDIDA1: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    UNIDADMEDIDA2: {
      type: DataTypes.STRING(5),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SPartesSustitutos',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "SPaSu_NumParte_NPS",
        unique: true,
        fields: [
          { name: "NUMPARTE" },
          { name: "NUMPARTESUSTITUTO" },
        ]
      },
    ]
  });
};
