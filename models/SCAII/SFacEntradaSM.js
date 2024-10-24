const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SFacEntradaSM', {
    CONSECUTIVO: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    FACTURAREMISION: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    FECHAENTRADA: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ENVIADOPOR: {
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
    VALORENTMN: {
      type: DataTypes.DECIMAL(23,8),
      allowNull: true
    },
    VALORENTME: {
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
    tableName: 'SFacEntradaSM',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "EntMaq_FKFacturaRemision",
        unique: true,
        fields: [
          { name: "FACTURAREMISION" },
        ]
      },
      {
        name: "EntMaq_PKConsecutivo",
        unique: true,
        fields: [
          { name: "CONSECUTIVO" },
        ]
      },
    ]
  });
};
