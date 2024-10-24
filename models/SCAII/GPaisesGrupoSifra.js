const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('GPaisesGrupoSifra', {
    GRUPO: {
      type: DataTypes.STRING(3),
      allowNull: false,
      primaryKey: true
    },
    PAIS: {
      type: DataTypes.STRING(3),
      allowNull: false,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'GPaisesGrupoSifra',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PaiG_PKGrupoPais",
        unique: true,
        fields: [
          { name: "GRUPO" },
          { name: "PAIS" },
        ]
      },
    ]
  });
};
