const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('GCodigosFCC', {
    CLAVEFCC: {
      type: DataTypes.STRING(30),
      allowNull: false,
      primaryKey: true
    },
    CODIGOFCC: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    MARCA: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    CONDICIONIMP: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    MODELO: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    INSPECCION: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    REQUERIMIENTO: {
      type: DataTypes.STRING(3),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'GCodigosFCC',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "CodFCC_PKClaveFCC",
        unique: true,
        fields: [
          { name: "CLAVEFCC" },
        ]
      },
    ]
  });
};
