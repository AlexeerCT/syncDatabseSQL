const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('GTipoMultiMoneda', {
    CLAVE: {
      type: DataTypes.STRING(3),
      allowNull: false,
      primaryKey: true
    },
    PAIS: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    FACTORCONV: {
      type: DataTypes.DECIMAL(13,6),
      allowNull: true
    },
    FECHAPUBLICACION: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'GTipoMultiMoneda',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "TipoMM_PKClaveFecha",
        unique: true,
        fields: [
          { name: "CLAVE" },
          { name: "FECHAPUBLICACION" },
        ]
      },
    ]
  });
};
