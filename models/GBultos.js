const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('GBultos', {
    CLAVE: {
      type: DataTypes.STRING(5),
      allowNull: false,
      primaryKey: true
    },
    DESCRIPCION: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    DESCRIPCIONI: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    PESOUNI: {
      type: DataTypes.DECIMAL(19,8),
      allowNull: true
    },
    PLURALES: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    PLURALIN: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    CLAVEACE: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    CLAVEAAMEX: {
      type: DataTypes.STRING(9),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'GBultos',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "GenBul_PKClave",
        unique: true,
        fields: [
          { name: "CLAVE" },
        ]
      },
    ]
  });
};
