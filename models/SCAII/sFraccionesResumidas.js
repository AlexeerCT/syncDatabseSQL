const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sFraccionesResumidas', {
    CONSECUTIVO: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    FRACCION_SIN_PUNTO: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    FRACCION_CON_PUNTO: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    DESCRIPCION: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'sFraccionesResumidas',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "FRR_AKFraccionSinPunto",
        fields: [
          { name: "FRACCION_SIN_PUNTO" },
        ]
      },
      {
        name: "FRR_PKLinea",
        unique: true,
        fields: [
          { name: "CONSECUTIVO" },
        ]
      },
    ]
  });
};
