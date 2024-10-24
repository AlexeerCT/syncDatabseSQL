const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SPartidasExpo', {
    CONSECUTIVO: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    FACTURAEXPO: {
      type: DataTypes.STRING(19),
      allowNull: true
    },
    LINEA: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    NUMPARTE: {
      type: DataTypes.STRING(70),
      allowNull: true
    },
    CLASE: {
      type: DataTypes.STRING(8),
      allowNull: true
    },
    CANTEXPO: {
      type: DataTypes.DECIMAL(19,8),
      allowNull: true
    },
    UNIMED: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    PAISDESTINO: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    CLAVEBULTOS: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    CANTBULTOS: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    DESCBULTOS: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    PESONETO: {
      type: DataTypes.DECIMAL(19,8),
      allowNull: true
    },
    PESONETOKGS: {
      type: DataTypes.DECIMAL(19,8),
      allowNull: true
    },
    PESONETOLBS: {
      type: DataTypes.DECIMAL(19,8),
      allowNull: true
    },
    PESOBRUTO: {
      type: DataTypes.DECIMAL(19,8),
      allowNull: true
    },
    PESOBRUTOKGS: {
      type: DataTypes.DECIMAL(19,8),
      allowNull: true
    },
    PESOBRUTOLBS: {
      type: DataTypes.DECIMAL(19,8),
      allowNull: true
    },
    DESCRIPCIONPARTE: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    DESCRIPCIONCLASE: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    COSTOUNITARIOMC: {
      type: DataTypes.DECIMAL(23,8),
      allowNull: true
    },
    COSTOUNITARIOME: {
      type: DataTypes.DECIMAL(23,8),
      allowNull: true
    },
    COSTOVENTAME: {
      type: DataTypes.DECIMAL(23,8),
      allowNull: true
    },
    VALORTOTALME: {
      type: DataTypes.DECIMAL(23,8),
      allowNull: true
    },
    VALORMPTEMPME: {
      type: DataTypes.DECIMAL(23,8),
      allowNull: true
    },
    VALORAGREME: {
      type: DataTypes.DECIMAL(23,8),
      allowNull: true
    },
    VALORMPDEFME: {
      type: DataTypes.DECIMAL(23,8),
      allowNull: true
    },
    IVAEXPOME: {
      type: DataTypes.DECIMAL(23,8),
      allowNull: true
    },
    COSTOVENTAMN: {
      type: DataTypes.DECIMAL(23,8),
      allowNull: true
    },
    VALORTOTALMN: {
      type: DataTypes.DECIMAL(23,8),
      allowNull: true
    },
    VALORMPTEMPMN: {
      type: DataTypes.DECIMAL(23,8),
      allowNull: true
    },
    COSTOUNITARIOMN: {
      type: DataTypes.DECIMAL(23,8),
      allowNull: true
    },
    VALORAGREMN: {
      type: DataTypes.DECIMAL(23,8),
      allowNull: true
    },
    VALORMPDEFMN: {
      type: DataTypes.DECIMAL(23,8),
      allowNull: true
    },
    IVAEXPOMN: {
      type: DataTypes.DECIMAL(23,8),
      allowNull: true
    },
    CANTBULCONT: {
      type: DataTypes.SMALLINT,
      allowNull: true
    },
    DESCCONTENEDOR: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    ORDENCOMPRA: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    CANTEXISTENCIA: {
      type: DataTypes.DECIMAL(19,8),
      allowNull: true
    },
    UNIMEDEXISTENCIA: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    INFOADICIONESP: {
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    INFOADICIONING: {
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    FRACCIONEXPO: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    ADVALOREMEXPO: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    TIPOFRACEXPO: {
      type: DataTypes.STRING(7),
      allowNull: true
    },
    VERSIONBILL: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    FRACCIONTLCAN: {
      type: DataTypes.STRING(13),
      allowNull: true
    },
    ADVTLCAN: {
      type: DataTypes.DECIMAL(5,2),
      allowNull: true
    },
    VALORTLCAN: {
      type: DataTypes.DECIMAL(23,8),
      allowNull: true
    },
    VALORNOORIGINARIOME: {
      type: DataTypes.DECIMAL(23,8),
      allowNull: true
    },
    VALORORIGINARIOME: {
      type: DataTypes.DECIMAL(23,8),
      allowNull: true
    },
    MONTOIGIME: {
      type: DataTypes.DECIMAL(23,8),
      allowNull: true
    },
    MONTOEXCENTOME: {
      type: DataTypes.DECIMAL(23,8),
      allowNull: true
    },
    PAISORIGEN: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    TIENECO: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    FACTURASCRAP: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    CONSECUTIVODES: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    COSTOUNICOMERCIAL: {
      type: DataTypes.DECIMAL(23,8),
      allowNull: true
    },
    VALORTOTALCOMERCIAL: {
      type: DataTypes.DECIMAL(23,8),
      allowNull: true
    },
    PROCSCRAP: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    VALORAGREMC: {
      type: DataTypes.DECIMAL(23,8),
      allowNull: true
    },
    VALORADUANASMN: {
      type: DataTypes.DECIMAL(23,8),
      allowNull: true
    },
    VALORADUANASME: {
      type: DataTypes.DECIMAL(23,8),
      allowNull: true
    },
    SECTOR: {
      type: DataTypes.STRING(8),
      allowNull: true
    },
    PAISOPCIONAL: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    ENVIADOA: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    VALEMPAQUENACMN: {
      type: DataTypes.DECIMAL(23,8),
      allowNull: true
    },
    VALEMPAQUENACME: {
      type: DataTypes.DECIMAL(23,8),
      allowNull: true
    },
    VALEMPAQUENACMC: {
      type: DataTypes.DECIMAL(23,8),
      allowNull: true
    },
    VALEMPAQUEUSME: {
      type: DataTypes.DECIMAL(23,8),
      allowNull: true
    },
    PAGOIMPUESTO: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    FORMAPAGO: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    ADVALORMELINEAPED: {
      type: DataTypes.DECIMAL(19,8),
      allowNull: true
    },
    ADVALORMNLINEAPED: {
      type: DataTypes.DECIMAL(19,8),
      allowNull: true
    },
    PERMISOSPED: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    LINEAPED: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    REVISARDESP: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    CANTEXPOUMA: {
      type: DataTypes.DECIMAL(19,8),
      allowNull: true
    },
    CLAVEUMA: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    VALORTOTALMC: {
      type: DataTypes.DECIMAL(23,8),
      allowNull: true
    },
    VALORMPTEMPMC: {
      type: DataTypes.DECIMAL(23,8),
      allowNull: true
    },
    VALORMPDEFMC: {
      type: DataTypes.DECIMAL(23,8),
      allowNull: true
    },
    IVAEXPOMC: {
      type: DataTypes.DECIMAL(23,8),
      allowNull: true
    },
    APARTADOCTM: {
      type: DataTypes.CHAR(3),
      allowNull: true
    },
    NUMPARTECOM: {
      type: DataTypes.STRING(70),
      allowNull: true
    },
    VERSIONBOM: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    METVALOR: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    METVALORVALORDETERMINADO: {
      type: DataTypes.DECIMAL(29,8),
      allowNull: true
    },
    METVALORMOTIVODEUSO: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    VALIDACIONZERO: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    VALIDACIONUNO: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    NUMERODEGUIA: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    CLIENTEASIGNADO: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    NUMERODEENTRADA: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    LOCALIZACION: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    TOMARCOMOPT: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    FRACAMESELEXTRA: {
      type: DataTypes.STRING(16),
      allowNull: true
    },
    LOTE: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    PALLET2: {
      type: DataTypes.SMALLINT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SPartidasExpo',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "MatPex_FKFacLineParte",
        fields: [
          { name: "FACTURAEXPO" },
          { name: "LINEA" },
          { name: "NUMPARTE" },
        ]
      },
      {
        name: "MatPex_FKFacPenParte",
        fields: [
          { name: "FACTURASCRAP" },
          { name: "NUMPARTE" },
        ]
      },
      {
        name: "MatPex_FKFactParte",
        fields: [
          { name: "FACTURAEXPO" },
          { name: "NUMPARTE" },
        ]
      },
      {
        name: "MatPex_PKConsecLinea",
        unique: true,
        fields: [
          { name: "CONSECUTIVO" },
          { name: "LINEA" },
        ]
      },
    ]
  });
};
