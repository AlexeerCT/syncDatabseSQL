const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('QNiveles', {
    NIVEL: {
      type: DataTypes.STRING(10),
      allowNull: false,
      primaryKey: true
    },
    TIPO: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    MENUARCHIVO: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    CONFIGIMPRESORA: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    RESPSCAF: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    IMPLEMENTACION: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    MENUCONFIGURACION: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    DATOSEMPRESA: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    SUBPARAMETROS: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    GENERALES: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    IMPOTEMPORAL: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    IMPODEFINITIVA: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    EXPORTACION: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    MENUCATALOGOS: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    SUBGENERALES: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    SUBEMPRESA: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    LOCALIZACIONES: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    UNIDADESADUANA: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    UNIDADESMEDIDA: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    TIPOSCAMBIO: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    TIPOSMONEDA: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    TIPOSDOCUMENTO: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    PUERTOS: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    PAISES: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    BULTOS: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    IDENTIFICADORES: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    INCOTERMS: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    LEYENDASFIJAS: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    SUBFRACCIONES: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    FRACIMPOEXPO: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    AMERICANAS: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    SECTORES: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    SUBACTIVOFIJO: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    TIPOSAF: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    CLASESAF: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    SUBPEDIMENTOS: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    CATPEDIMENTO: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    REGIMENES: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    CLAVESPED: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    CLIENTESPRO: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    AADUANALES: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    TRANSPORTISTA: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    MENUPERMISO: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    PERSECON: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    SUBREPSECON: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    BOTONCLASES: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    BOTONPERMISO: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    PERACTFIJO: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    SUBREPACTFIJO: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    BOTONCLASESAF: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    BOTONPERMISOAF: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    MENUIMPORTACION: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    SUBTEMPORAL: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    CATIMPOTEMP: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    BITACTUALIZAR: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    BITDESACTUALIZAR: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    SUBREPIMPOTEMP: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    BITBUSQUEDAS: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    BITCONSPED: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    BITRANGOCLASE: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    BITRANGOPED: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    BITVALORDIS: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    BITSAFEH: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    SUBDEFINITIVA: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    CATIMPODEF: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    BIDACTUALIZAR: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    BIDDESACTUALIZAR: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    SUBREPIMPODEF: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    BIDBUSQUEDAS: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    BIDCONSPED: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    BIDRANGOCLASE: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    BIDRANGOPED: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    CATCREGIMEN: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    BCRACTUALIZAR: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    BCRDESCTUALIZAR: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    TRANSELECIMPO: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    BIASIGPEDPEN: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    BIASIGPEDRECT: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    MENUEXPORTACION: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    SUBEXPOTEMPORAL: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    BETACTUALIZAR: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    BETDESACTUALIZAR: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    SUBEXPODEFINITIVO: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    BEDACTUALIZAR: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    BEDDESACTUALIZAR: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    MANIFIESTO: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    TRANSELECEXPO: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    BEASIGPEDPEN: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    BEASIGPEDRECT: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    SUBREPEXPO: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    BEBUSQUEDAS: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    BECONSPED: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    BERANGOCLASE: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    BERANGOPED: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    MENUDIVERSOS: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    SUBREPORTES: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    REPMOVTEM: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    REPMOVDEF: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    HOJACALCULO: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    MANIFESTACION: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    REPANUAL: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    SUBCATALOGOS: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    REPCLASESAF: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    DESCLASESAF: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    REPPEDIMENTOS: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    REPFRACCIONES: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    REPCLIENTES: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    MENUSEGURIDAD: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    NIVELES: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    USUARIOS: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    INSCATALOGOS: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    EDITCATALOGOS: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    BORRARCATALOGOS: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    INSPERMISOS: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    EDITPERMISOS: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    BORRARPERMISOS: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    INSIMPO: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    EDITIMPO: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    BORRARIMPO: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    INSEXPO: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    EDITEXPO: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    BORRAREXPO: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    INSSEG: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    EDITSEG: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    BORRARSEG: {
      type: DataTypes.TINYINT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'QNiveles',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "QNivel_FKTipoNivel",
        fields: [
          { name: "TIPO" },
        ]
      },
      {
        name: "QNivel_PKNivel",
        unique: true,
        fields: [
          { name: "NIVEL" },
        ]
      },
    ]
  });
};
