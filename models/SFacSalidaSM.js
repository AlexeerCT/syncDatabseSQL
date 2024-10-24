const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SFacSalidaSM', {
    CONSECUTIVO: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    FACTURASALIDA: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    FECHAENVIO: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ENVIADOPOR: {
      type: DataTypes.STRING(8),
      allowNull: true
    },
    ENVIADOTRANSFERIDO: {
      type: DataTypes.STRING(14),
      allowNull: true
    },
    ENVIADOA: {
      type: DataTypes.STRING(8),
      allowNull: true
    },
    ESTATUS: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    TIPOCAMBIO: {
      type: DataTypes.DECIMAL(13,6),
      allowNull: true
    },
    TIPOMONEDA: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    VALORSALMN: {
      type: DataTypes.DECIMAL(23,8),
      allowNull: true
    },
    VALORSALME: {
      type: DataTypes.DECIMAL(23,8),
      allowNull: true
    },
    FECHAACTUAL: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    HORAACTUAL: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    USUARIOACT: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    USUARIOCAP: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    FECHACAPTURA: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    PEDIMENTO: {
      type: DataTypes.STRING(19),
      allowNull: true
    },
    SEM: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SFacSalidaSM',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "SalMaq_FKFacturaSalida",
        unique: true,
        fields: [
          { name: "FACTURASALIDA" },
        ]
      },
      {
        name: "SalMaq_PKConsecutivo",
        unique: true,
        fields: [
          { name: "CONSECUTIVO" },
        ]
      },
    ]
  });
};
