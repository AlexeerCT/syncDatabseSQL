const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('GTipoDoc', {
    CLAVETD: {
      type: DataTypes.STRING(5),
      allowNull: false,
      primaryKey: true
    },
    DESCRIPCION: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'GTipoDoc',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "TPDOC_PKClave",
        unique: true,
        fields: [
          { name: "CLAVETD" },
        ]
      },
    ]
  });
};
