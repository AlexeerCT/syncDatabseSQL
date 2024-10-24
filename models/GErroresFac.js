const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('GErroresFac', {
    CONSECUTIVO: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    LINEA: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    CLAVE: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    DESCRIPCION: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    MODULO: {
      type: DataTypes.STRING(50),
      allowNull: false,
      primaryKey: true
    },
    CANTIDAD: {
      type: DataTypes.DECIMAL(7,0),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'GErroresFac',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "ErrFac_PKConsecModLinea",
        unique: true,
        fields: [
          { name: "CONSECUTIVO" },
          { name: "MODULO" },
          { name: "LINEA" },
        ]
      },
    ]
  });
};
