const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SModificaciones', {
    MOVIMIENTO: {
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    LINEA: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    TABLA: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    CAMPOREF1: {
      type: DataTypes.STRING(19),
      allowNull: true
    },
    CAMPOREF2: {
      type: DataTypes.STRING(19),
      allowNull: true
    },
    FECHA: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    HORA: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    LOGIN: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    CLAVE_ACCESO: {
      type: DataTypes.STRING(10),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SModificaciones',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "ModDiv_FKCampoRef1",
        fields: [
          { name: "CAMPOREF1" },
        ]
      },
      {
        name: "ModDiv_FKFechaHora",
        fields: [
          { name: "FECHA" },
          { name: "HORA" },
        ]
      },
      {
        name: "ModDiv_FKLogin",
        fields: [
          { name: "LOGIN" },
        ]
      },
      {
        name: "ModDiv_FKMovimiento",
        fields: [
          { name: "MOVIMIENTO" },
        ]
      },
      {
        name: "ModDiv_FKMovR2TablaR1",
        fields: [
          { name: "MOVIMIENTO" },
          { name: "CAMPOREF2" },
          { name: "TABLA" },
          { name: "CAMPOREF1" },
        ]
      },
      {
        name: "ModDiv_FKReferencia2",
        fields: [
          { name: "CAMPOREF2" },
        ]
      },
      {
        name: "ModDiv_FKTabla",
        fields: [
          { name: "TABLA" },
        ]
      },
      {
        name: "ModDiv_PKLinea",
        unique: true,
        fields: [
          { name: "LINEA" },
        ]
      },
    ]
  });
};
