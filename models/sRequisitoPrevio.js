const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sRequisitoPrevio', {
    SYSID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    FRACCION: {
      type: DataTypes.STRING(8),
      allowNull: true
    },
    DESCRIPCION: {
      type: DataTypes.STRING(1999),
      allowNull: true
    },
    OBSERVACION: {
      type: DataTypes.STRING(1999),
      allowNull: true
    },
    DOF: {
      type: DataTypes.CHAR(8),
      allowNull: true
    },
    VIGENCIA: {
      type: DataTypes.CHAR(8),
      allowNull: true
    },
    PERMISO: {
      type: DataTypes.CHAR(2),
      allowNull: true
    },
    NUMEROACUERDO: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    NUMEROCRITERIO: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    NUMEROFORMATO: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    NUMEROINSTRUCCIONES: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    HISTORICO: {
      type: DataTypes.STRING(2000),
      allowNull: true
    },
    NOTA: {
      type: DataTypes.STRING(1000),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'sRequisitoPrevio',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "sReqPre_AKFraccionSysID",
        unique: true,
        fields: [
          { name: "FRACCION" },
          { name: "SYSID" },
        ]
      },
      {
        name: "sReqPre_PKSysID",
        unique: true,
        fields: [
          { name: "SYSID" },
        ]
      },
    ]
  });
};
