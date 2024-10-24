const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('GArchivosConsecutivos', {
    ARCHIVO: {
      type: DataTypes.STRING(100),
      allowNull: false,
      primaryKey: true
    },
    CONSECUTIVO: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'GArchivosConsecutivos',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PKARCHIVO",
        unique: true,
        fields: [
          { name: "ARCHIVO" },
        ]
      },
    ]
  });
};
