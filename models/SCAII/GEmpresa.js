const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('GEmpresa', {
    CONSECUTIVO: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    NOMBRE: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    RFC: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    CALLES: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    CALLESIND: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    NUMEXT: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    NUMEXTIND: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    CODIGOPOSTAL: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    CODIGOPOSTALIND: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    COLONIA: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    COLONIAIND: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    CIUDAD: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    CIUDADIND: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    ESTADO: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    ESTADOIND: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    TELEFONO: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    TELEFONOIND: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    NUMFAX: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    NUMFAXIND: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    EMAIL: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    EMAILIND: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    ACTPREPONDERANTE: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    PROGRAMA: {
      type: DataTypes.STRING(7),
      allowNull: true
    },
    NUMEROPROGRAMA: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    PROSEC: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    AUTORIZACIONPROSEC: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    SECTOR1: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    SECTOR2: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    SECTOR3: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    MANUFACTERID: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    BROKER: {
      type: DataTypes.STRING(6),
      allowNull: true
    },
    RESPONSABLE: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    RFCRESPONSABLE: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    RESPPATERNO: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    RESPMATERNO: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    RESPNOMBRE: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    PUESTO: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    LOGO: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    ACTETIQUETAS: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    CLAVEFTP: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    ACTFRACCIONES: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    RUTASIFRA: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    BUFETEINTERNACIONAL: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    TIPOVERSION: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    ESEMPRESACERTIFICADA: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    REGISTROEMPCERT: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    TIENELINEAEXPRESS: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    TIPOFORMATOPED: {
      type: DataTypes.STRING(19),
      allowNull: true
    },
    CODIGOANTERIOR: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    ACTIVACAAT: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    INTERFASETRANS: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    COSTOSAMERICANOS: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    SCAFSOLOLECTURA: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    ESEMPRESASERVICIO: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    SUSTPARTES: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    NOMBRECLIENTE: {
      type: DataTypes.STRING(300),
      allowNull: true
    },
    ACTFACMEXAME: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    PARTEREFERENCIA: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    SQLLENGUAJE: {
      type: DataTypes.STRING(19),
      allowNull: true
    },
    MODOSUBMAQUILA: {
      type: DataTypes.STRING(7),
      allowNull: true
    },
    FECHAINICIALEMPCERT: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    FECHAFINALEMPCERT: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    MODOOPERACIONSALDO: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    CURP: {
      type: DataTypes.STRING(19),
      allowNull: true
    },
    RUTAARCHCER: {
      type: DataTypes.STRING(1499),
      allowNull: true
    },
    RUTAARCHKEY: {
      type: DataTypes.STRING(1499),
      allowNull: true
    },
    CLAVEACCESOFIEL: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    USUARIOWEBSERVICEVU: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    CLAVEACCESOWEBSERVICEVU: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    EMAILVU: {
      type: DataTypes.STRING(800),
      allowNull: true
    },
    NOMBREBDINTER: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    TIPOFIGURAVU: {
      type: DataTypes.STRING(29),
      allowNull: true
    },
    RUTAVUCENTRAL: {
      type: DataTypes.STRING(1499),
      allowNull: true
    },
    RUTAARCHIVOSXML: {
      type: DataTypes.STRING(1499),
      allowNull: true
    },
    RFCCONSULTA: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    TOMACONFIGURACIONVU: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    VUUNIDADESMEDIDA: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    RFCVALIDACIONVU: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    CTPAT_SVI: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    FECHACERTIFICACIONANEXO31: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    NUMEROCERTIFICACIONANEXO31: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    MODALIDADANEXO31: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    TIPOEMPRESAANEXO31: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    EMPRESANEEC: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    RUTAARCHIVOCERCFDI: {
      type: DataTypes.STRING(5000),
      allowNull: true
    },
    RUTAARCHIVOKEYCFDI: {
      type: DataTypes.STRING(5000),
      allowNull: true
    },
    FECHAVENCCERCFDI: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    FECHAVENCKEYCFDI: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    'CONTRASEÑACFDI': {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    RUTAGUARDARXML: {
      type: DataTypes.STRING(5000),
      allowNull: true
    },
    RUTAAPPCFDI: {
      type: DataTypes.STRING(5000),
      allowNull: true
    },
    RUTAAPPPAC: {
      type: DataTypes.STRING(5000),
      allowNull: true
    },
    RUTAARCHIVOCANCELACION: {
      type: DataTypes.STRING(5000),
      allowNull: true
    },
    'CONTRASEÑACANCELACION': {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    NUMDEEXPORTADORCONFIABLE: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    NUMINTERIOR: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    NUMINTIND: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    MUNICIPIO: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    MUNICIPIOIND: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    PAIS: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    PAISIND: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    FECHARENOVACIONCERTIFICACIONA31: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    FECHAFINALCERTIFICACIONA31: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    EMPRESAOEA: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    CALLESIND2: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    COLONIAIND2: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    CODIGOPOSTALIND2: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    CIUDADIND2: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    TELEFONOIND2: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    MUNICIPIOIND2: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    NUMEXTIND2: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    ESTADOIND2: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    NUMFAXIND2: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    PAISIND2: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    EMAILIND2: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    ADUANAPREVALIDADOR: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    CLAVEPREVALIDADOR: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    PATENTEPREVALIDADOR: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    DESCRIPCIONPREVALIDADOR: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    FOLDERENTRADAAELECTRONICO: {
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    FOLDERSALIDAAELECTRONICO: {
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    MASCARAENVIARAELECTRONICO: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    MASCARARESPAELECTRONICO: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    EXTENSIONRESPUESTAAELECTRONICO: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    INICIOCONTADORAELECTRONICO: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    FINALCONTADORAELECTRONICO: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    SIGUIENTECONTADORAELECTRONICO: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'GEmpresa',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "DatEmp_PKConsecutivo",
        unique: true,
        fields: [
          { name: "CONSECUTIVO" },
        ]
      },
    ]
  });
};
