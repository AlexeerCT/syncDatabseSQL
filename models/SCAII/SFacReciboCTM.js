const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SFacReciboCTM', {
    CONSECUTIVO: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    FACTURARECIBO: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    FECHARECIBO: {
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
    }
  }, {
    sequelize,
    tableName: 'SFacReciboCTM',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "FacRec_FKFacturaEnvio",
        unique: true,
        fields: [
          { name: "FACTURARECIBO" },
        ]
      },
      {
        name: "FacRec_PKConsecutivo",
        unique: true,
        fields: [
          { name: "CONSECUTIVO" },
        ]
      },
    ]
  });
};
