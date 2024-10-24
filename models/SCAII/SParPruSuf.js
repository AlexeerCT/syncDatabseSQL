const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SParPruSuf', {
    FACTURAEXPO: {
      type: DataTypes.STRING(19),
      allowNull: false,
      primaryKey: true
    },
    LINEA: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    LINEAEXPO: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    ADVALOREM: {
      type: DataTypes.DECIMAL(5,2),
      allowNull: true
    },
    VALORME: {
      type: DataTypes.DECIMAL(23,8),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SParPruSuf',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "ParPru_PKFacParLinea",
        unique: true,
        fields: [
          { name: "FACTURAEXPO" },
          { name: "LINEAEXPO" },
          { name: "LINEA" },
        ]
      },
    ]
  });
};
