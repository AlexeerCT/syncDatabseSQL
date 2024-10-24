const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('QRepMovimientos', {
    FACTURAIMPO: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    FECHA: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    PEDIMENTO: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    LINEAIMPO: {
      type: DataTypes.SMALLINT,
      allowNull: true
    },
    DESCRIPCIONE: {
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    CANTIDADIMPO: {
      type: DataTypes.DECIMAL(19,8),
      allowNull: true
    },
    UNIMED: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    VALORIMPOMN: {
      type: DataTypes.DECIMAL(23,8),
      allowNull: true
    },
    CANTRETORNADA: {
      type: DataTypes.DECIMAL(19,8),
      allowNull: true
    },
    VALORRETORNADO: {
      type: DataTypes.DECIMAL(23,8),
      allowNull: true
    },
    CANTSALDO: {
      type: DataTypes.DECIMAL(19,8),
      allowNull: true
    },
    MARCA: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    MODELO: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    SERIE: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'QRepMovimientos',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "EqiRMov_AKFecha",
        fields: [
          { name: "FECHA" },
        ]
      },
      {
        name: "EqiRMov_PKFacIm_LinIm",
        fields: [
          { name: "FACTURAIMPO" },
          { name: "LINEAIMPO" },
        ]
      },
    ]
  });
};
