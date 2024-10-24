const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('GAnexo22App3', {
    CLAVE: {
      type: DataTypes.STRING(3),
      allowNull: false,
      primaryKey: true
    },
    METODOTRANSPORTE: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    TIPOFECHAPAGO: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'GAnexo22App3',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "GAN22_PKClaveAnexo22",
        unique: true,
        fields: [
          { name: "CLAVE" },
        ]
      },
    ]
  });
};
