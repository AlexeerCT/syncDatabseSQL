const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SPartidasImpo', {
    CONSECUTIVO: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    FACTURAIMPO: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    LINEAIMPO: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    FECHAFACTURA: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    NUMPARTE: {
      type: DataTypes.STRING(70),
      allowNull: true
    },
    CLASE: {
      type: DataTypes.STRING(8),
      allowNull: true
    },
    CANTIMPO: {
      type: DataTypes.DECIMAL(19,8),
      allowNull: true
    },
    UNIMED: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    CANTALTERNA: {
      type: DataTypes.DECIMAL(19,8),
      allowNull: true
    },
    UNIMEDALTERNA: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    COSTOUNITARIOME: {
      type: DataTypes.DECIMAL(23,8),
      allowNull: true
    },
    COSTOUNITARIOMN: {
      type: DataTypes.DECIMAL(23,8),
      allowNull: true
    },
    COSTOUNITARIOMC: {
      type: DataTypes.DECIMAL(23,8),
      allowNull: true
    },
    VALORIMPOMN: {
      type: DataTypes.DECIMAL(23,8),
      allowNull: true
    },
    VALORIMPOME: {
      type: DataTypes.DECIMAL(23,8),
      allowNull: true
    },
    VALORIMPOMC: {
      type: DataTypes.DECIMAL(23,8),
      allowNull: true
    },
    VALORIVAMN: {
      type: DataTypes.DECIMAL(23,8),
      allowNull: true
    },
    VALORIVAME: {
      type: DataTypes.DECIMAL(23,8),
      allowNull: true
    },
    NUMPERMISO: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    PAGRENGLON: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    PAISORIGEN: {
      type: DataTypes.STRING(3),
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
    FRACCIONIMPO: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    TIPOFRACCIMPO: {
      type: DataTypes.STRING(7),
      allowNull: true
    },
    ADVIMPO: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    ADVIMPONUM: {
      type: DataTypes.DECIMAL(7,2),
      allowNull: true
    },
    TIENECO: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    NOCERTIFICADO: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    SECTOR: {
      type: DataTypes.STRING(8),
      allowNull: true
    },
    FRACCIONAMERICANA: {
      type: DataTypes.STRING(16),
      allowNull: true
    },
    ADVAME: {
      type: DataTypes.DECIMAL(5,2),
      allowNull: true
    },
    ORDENCOMPRA: {
      type: DataTypes.STRING(50),
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
    MONTOIGI: {
      type: DataTypes.DECIMAL(19,8),
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
    NUMEROGUIA: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    PROVEEDOR: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    CANTIMPOAUXILIAR: {
      type: DataTypes.DECIMAL(19,8),
      allowNull: true
    },
    UNIMEDAUXILIAR: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    COSTOUAUXILIARME: {
      type: DataTypes.DECIMAL(23,8),
      allowNull: true
    },
    VALORIMPOAUXILIARME: {
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
    CLIENTEFACTURAR: {
      type: DataTypes.STRING(8),
      allowNull: true
    },
    FRACCIONROCTAVA: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    PERMISOROCTAVA: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    BODEGA: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    REQUISITOR: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    LINEARO: {
      type: DataTypes.INTEGER,
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
    CAMPOCOMODIN: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    ESMCIAMILITAR: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    METVALOR: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    DESCRIPCIONPARTE: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    CANTIMPOUMA: {
      type: DataTypes.DECIMAL(19,8),
      allowNull: true
    },
    CLAVEUMA: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    NUMPARTECOM: {
      type: DataTypes.STRING(70),
      allowNull: true
    },
    NOCAJAS: {
      type: DataTypes.STRING(30),
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
    METVALORACIONVALORDETERMINADO: {
      type: DataTypes.DECIMAL(29,8),
      allowNull: true
    },
    METVALORACIONMOTIVODEUSO: {
      type: DataTypes.STRING(500),
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
    LOTE: {
      type: DataTypes.STRING(254),
      allowNull: true
    },
    FORMAPAGOTIGI: {
      type: DataTypes.STRING(9),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SPartidasImpo',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "MatPim_FKNumParte",
        fields: [
          { name: "NUMPARTE" },
        ]
      },
      {
        name: "MatPim_FKParPaiTipSecCons",
        fields: [
          { name: "NUMPARTE" },
          { name: "PAISORIGEN" },
          { name: "TIPOFRACCIMPO" },
          { name: "SECTOR" },
          { name: "CONSECUTIVO" },
        ]
      },
    ]
  });
};
