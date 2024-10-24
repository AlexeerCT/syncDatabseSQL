const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('GEquivalenteEnc', {
    IDENTIFICADOR: {
      type: DataTypes.STRING(10),
      allowNull: false,
      primaryKey: true
    },
    DESCRIPCION: {
      type: DataTypes.STRING(200),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'GEquivalenteEnc',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "GEQ_PK_Id",
        unique: true,
        fields: [
          { name: "IDENTIFICADOR" },
        ]
      },
    ]
  });
};
