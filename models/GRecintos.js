const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('GRecintos', {
    CLAVE: {
      type: DataTypes.STRING(3),
      allowNull: false,
      primaryKey: true
    },
    ADUANA: {
      type: DataTypes.STRING(100),
      allowNull: false,
      primaryKey: true
    },
    RECINTOFISCALIZADO: {
      type: DataTypes.STRING(1000),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'GRecintos',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PKRECINTO",
        unique: true,
        fields: [
          { name: "CLAVE" },
          { name: "ADUANA" },
        ]
      },
    ]
  });
};
