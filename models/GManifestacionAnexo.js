const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('GManifestacionAnexo', {
    CONSECUTIVO: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    LINEA: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    TIPOANEXO: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    NUMERO: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    DOCANEXADO: {
      type: DataTypes.STRING(200),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'GManifestacionAnexo',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "MVAnex_PorConsecutivoLin",
        unique: true,
        fields: [
          { name: "CONSECUTIVO" },
          { name: "LINEA" },
        ]
      },
    ]
  });
};
