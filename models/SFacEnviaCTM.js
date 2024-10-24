const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SFacEnviaCTM', {
    CONSECUTIVO: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    FACTURAENVIO: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    FECHAENVIO: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    NUMVEHICULO: {
      type: DataTypes.STRING(20),
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
    ESTATUS: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    ENVIADOPOR: {
      type: DataTypes.STRING(8),
      allowNull: true
    },
    ENVIADOA: {
      type: DataTypes.STRING(8),
      allowNull: true
    },
    TRANSPORTISTA: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    NUMTRAILER: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    CONDUCTOR: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    TRANSPORTE: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    NUMTRASPORTE: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    OBSERVACIONE: {
      type: DataTypes.STRING(2000),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SFacEnviaCTM',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "FacEnv_FKFacturaEnvio",
        unique: true,
        fields: [
          { name: "FACTURAENVIO" },
        ]
      },
      {
        name: "FacEnv_PKConsecutivo",
        unique: true,
        fields: [
          { name: "CONSECUTIVO" },
        ]
      },
    ]
  });
};
