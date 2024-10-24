const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('GAphisPItems', {
    CONSECUTIVOAPHIS: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    LINEAPITEM: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    SOURCETYPECODE: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    COUNTRYCODE: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    GEOLOCATION: {
      type: DataTypes.STRING(24),
      allowNull: true
    },
    PROCESSINGSTART: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    PROCESSINGEND: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    PROCESSINGTYPE: {
      type: DataTypes.STRING(9),
      allowNull: true
    },
    PROCESSINGDESC: {
      type: DataTypes.STRING(49),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'GAphisPItems',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "GAPI_ConsecLineaIt",
        unique: true,
        fields: [
          { name: "CONSECUTIVOAPHIS" },
          { name: "LINEAPITEM" },
        ]
      },
    ]
  });
};
