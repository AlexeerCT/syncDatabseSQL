const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('QFacImpCobranza', {
    CONSECUTIVO: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    FACTURA: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    LINEA: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    CONCEPTO: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    COBRADO: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    FECHACOBRANZA: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    VALOR: {
      type: DataTypes.DECIMAL(23,8),
      allowNull: true
    },
    DEPTOCOBRANZA: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    FACTCOBRADOR: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    NOMBRECOBRADOR: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'QFacImpCobranza',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "QCobImT_PKConsecLinea",
        unique: true,
        fields: [
          { name: "CONSECUTIVO" },
          { name: "LINEA" },
        ]
      },
    ]
  });
};
