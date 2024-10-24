const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('GNivelesSeguridad', {
    SYSID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    CLAVE: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    DESCRIPCION: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    SISTEMA: {
      type: DataTypes.STRING(19),
      allowNull: true
    },
    ACCAMBIOREGIMEN: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    ACCOMPRASMEXICANAS: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    ACREMISIONESENTRADA: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    ACFACTURASSALIDA: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    ACFACTURASREPARACION: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    ACFACTURAIMPOTEMPORAL: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    ACFACTURAIMPODEFINITIVA: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    ACREMISIONSALIDA: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    ACFACTINTEGRACIONCTM: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    ACREMRECIBOCTM: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    ACREMENVIOCTM: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    PERMITECAMBIARCLASE: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    PERMITEDESSEG: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    PERMITEDESCOSTOFIJO: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    RESTRINGIRMODCOSTOFIJO: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    RESTRINGEDESHABILITARDESCPARTE: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    PAREXCANTPESODESVSFAC: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    CANTSERIEVSCANT: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    PERMITEACTREVCLASE: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    DESHABILITAUMPARTIDAIMPO: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    RESTRINGEMODVU: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    RESTRINGEMODEDOCOPEADEN: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    RESTRINGEMODFIRMACERFIEL: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    REPOPEPORNIVEL: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    ACFACTURASMODULOCTM: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    AUTACTUALIZAREXPO: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    PERMITIRMODIFICARPEDIMENTOSPREVIOSALAFECHAACTUAL: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    SOLICITARPERMISOADMINAGREGARPED: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    MODIFICARFECHASDEPEDIMENTO: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    ESTATUSPED: {
      type: DataTypes.TINYINT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'GNivelesSeguridad',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "GNiv_AKClave",
        unique: true,
        fields: [
          { name: "CLAVE" },
          { name: "SISTEMA" },
        ]
      },
      {
        name: "GNiv_PKSysID",
        unique: true,
        fields: [
          { name: "SYSID" },
        ]
      },
    ]
  });
};
