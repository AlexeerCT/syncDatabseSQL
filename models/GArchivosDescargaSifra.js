const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('GArchivosDescargaSifra', {
    ARCHIVO: {
      type: DataTypes.STRING(99),
      allowNull: false,
      primaryKey: true
    },
    FECHA: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    TIPO: {
      type: DataTypes.CHAR(20),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'GArchivosDescargaSifra',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "GAR_PKArchivo",
        unique: true,
        fields: [
          { name: "ARCHIVO" },
        ]
      },
    ]
  });
};
