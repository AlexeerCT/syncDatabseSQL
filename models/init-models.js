var DataTypes = require("sequelize").DataTypes;
var _AConfiguracion = require("./AConfiguracion");
var _ADescargas = require("./ADescargas");
var _ETipoMat = require("./ETipoMat");
var _GAAduanal = require("./GAAduanal");
var _GAAduanalPersonal = require("./GAAduanalPersonal");
var _GAccesos = require("./GAccesos");
var _GAccesosModulos = require("./GAccesosModulos");
var _GAduanaSec = require("./GAduanaSec");
var _GAgencyTariffCodes = require("./GAgencyTariffCodes");
var _GAnexo22App3 = require("./GAnexo22App3");
var _GAphis = require("./GAphis");
var _GAphisContainers = require("./GAphisContainers");
var _GAphisEntities = require("./GAphisEntities");
var _GAphisItemsChr = require("./GAphisItemsChr");
var _GAphisLpcos = require("./GAphisLpcos");
var _GAphisPItems = require("./GAphisPItems");
var _GAphisRoutings = require("./GAphisRoutings");
var _GArchivosConsecutivos = require("./GArchivosConsecutivos");
var _GArchivosDescargaSifra = require("./GArchivosDescargaSifra");
var _GArchivosSIAA = require("./GArchivosSIAA");
var _GAvisosElectronicos = require("./GAvisosElectronicos");
var _GBasedeDatos = require("./GBasedeDatos");
var _GBitacora = require("./GBitacora");
var _GBotonLeyendas = require("./GBotonLeyendas");
var _GBultos = require("./GBultos");
var _GCatErrores = require("./GCatErrores");
var _GCatErroresClas = require("./GCatErroresClas");
var _GCertOrigen = require("./GCertOrigen");
var _GClavePed = require("./GClavePed");
var _GClavePedRegimen = require("./GClavePedRegimen");
var _GClientesPro = require("./GClientesPro");
var _GCodigosFCC = require("./GCodigosFCC");
var _GCodigosFDA = require("./GCodigosFDA");
var _GCodigosFDA04 = require("./GCodigosFDA04");
var _GCodigosFDA23 = require("./GCodigosFDA23");
var _GCodigosFDA25 = require("./GCodigosFDA25");
var _GCodigosProductoCP = require("./GCodigosProductoCP");
var _GConCobranza = require("./GConCobranza");
var _GConceptos = require("./GConceptos");
var _GConceptosAAduanal = require("./GConceptosAAduanal");
var _GConceptosClasif = require("./GConceptosClasif");
var _GConductor = require("./GConductor");
var _GConfigReportes = require("./GConfigReportes");
var _GConfigTablas = require("./GConfigTablas");
var _GContenedores = require("./GContenedores");
var _GControlDeCredito = require("./GControlDeCredito");
var _GConversiones = require("./GConversiones");
var _GDestinoAduanero = require("./GDestinoAduanero");
var _GDestruccion = require("./GDestruccion");
var _GDivisionPeligro = require("./GDivisionPeligro");
var _GDocumentosDigital = require("./GDocumentosDigital");
var _GDotInformation = require("./GDotInformation");
var _GDotInformation08 = require("./GDotInformation08");
var _GDotInformation14 = require("./GDotInformation14");
var _GEmails = require("./GEmails");
var _GEmpresa = require("./GEmpresa");
var _GEncAnexo = require("./GEncAnexo");
var _GEncFacturas = require("./GEncFacturas");
var _GEquivPartidas = require("./GEquivPartidas");
var _GEquivalenteEnc = require("./GEquivalenteEnc");
var _GErroresFac = require("./GErroresFac");
var _GEstados = require("./GEstados");
var _GExpedienteElecEnc = require("./GExpedienteElecEnc");
var _GExpedienteElecPartidas = require("./GExpedienteElecPartidas");
var _GFacProforma = require("./GFacProforma");
var _GFiltros = require("./GFiltros");
var _GFirmas = require("./GFirmas");
var _GFormaPago = require("./GFormaPago");
var _GFracAme = require("./GFracAme");
var _GFracEUACan = require("./GFracEUACan");
var _GFracROctava = require("./GFracROctava");
var _GFraccionesHistorico = require("./GFraccionesHistorico");
var _GINPC = require("./GINPC");
var _GIdentificadores = require("./GIdentificadores");
var _GIdentificadoresPartidas = require("./GIdentificadoresPartidas");
var _GIncoterm = require("./GIncoterm");
var _GLeyendas = require("./GLeyendas");
var _GManifCoductor = require("./GManifCoductor");
var _GManifestacionAnexo = require("./GManifestacionAnexo");
var _GManifestacionConcepto = require("./GManifestacionConcepto");
var _GManifestacionValor = require("./GManifestacionValor");
var _GManifiesto = require("./GManifiesto");
var _GMetValor = require("./GMetValor");
var _GModTransporte = require("./GModTransporte");
var _GNivelesSeguridad = require("./GNivelesSeguridad");
var _GNivelesSeguridadTablas = require("./GNivelesSeguridadTablas");
var _GPaisReglaOct = require("./GPaisReglaOct");
var _GPaises = require("./GPaises");
var _GPaisesGrupoSifra = require("./GPaisesGrupoSifra");
var _GParAnexo = require("./GParAnexo");
var _GParFacturas = require("./GParFacturas");
var _GPartidasCO = require("./GPartidasCO");
var _GPeriodoAnexo31 = require("./GPeriodoAnexo31");
var _GPermisoReglaOct = require("./GPermisoReglaOct");
var _GPrecintos = require("./GPrecintos");
var _GPrevalidadores = require("./GPrevalidadores");
var _GProcesos = require("./GProcesos");
var _GPuertoEnt = require("./GPuertoEnt");
var _GRecintos = require("./GRecintos");
var _GRegimenPed = require("./GRegimenPed");
var _GRelFacFacturas = require("./GRelFacFacturas");
var _GRelacionFacturas = require("./GRelacionFacturas");
var _GRutasGenerales = require("./GRutasGenerales");
var _GSIAA = require("./GSIAA");
var _GSQLFile = require("./GSQLFile");
var _GSQLFile2 = require("./GSQLFile2");
var _GSQLFile3 = require("./GSQLFile3");
var _GSectores = require("./GSectores");
var _GSisManifiesto = require("./GSisManifiesto");
var _GSisMultiples = require("./GSisMultiples");
var _GSubEmpresa = require("./GSubEmpresa");
var _GTipoCambio = require("./GTipoCambio");
var _GTipoCambioMM = require("./GTipoCambioMM");
var _GTipoDoc = require("./GTipoDoc");
var _GTipoDocDigital = require("./GTipoDocDigital");
var _GTipoMultiMoneda = require("./GTipoMultiMoneda");
var _GTipoTrailer = require("./GTipoTrailer");
var _GTipoTransportes = require("./GTipoTransportes");
var _GTiposMoneda = require("./GTiposMoneda");
var _GTrailers = require("./GTrailers");
var _GTransportes = require("./GTransportes");
var _GTransportista = require("./GTransportista");
var _GUMAduana = require("./GUMAduana");
var _GUMAme = require("./GUMAme");
var _GUMOMA = require("./GUMOMA");
var _GUniMed = require("./GUniMed");
var _GUniMedACE = require("./GUniMedACE");
var _GUniMedida = require("./GUniMedida");
var _GUsuarios = require("./GUsuarios");
var _PedimentosAmericanos = require("./PedimentosAmericanos");
var _QAssetTag = require("./QAssetTag");
var _QClaAct = require("./QClaAct");
var _QClasePermiso = require("./QClasePermiso");
var _QConfiguracion = require("./QConfiguracion");
var _QEqeMaq = require("./QEqeMaq");
var _QEqeMaqRep = require("./QEqeMaqRep");
var _QEqiDef = require("./QEqiDef");
var _QEqiMaq = require("./QEqiMaq");
var _QEqiMaqRep = require("./QEqiMaqRep");
var _QFacExp = require("./QFacExp");
var _QFacExpCobranza = require("./QFacExpCobranza");
var _QFacExpRep = require("./QFacExpRep");
var _QFacImp = require("./QFacImp");
var _QFacImpCobranza = require("./QFacImpCobranza");
var _QFacImpDef = require("./QFacImpDef");
var _QFacImpRep = require("./QFacImpRep");
var _QInfDepre = require("./QInfDepre");
var _QLocalizacion = require("./QLocalizacion");
var _QLocalizacionExt = require("./QLocalizacionExt");
var _QNiveles = require("./QNiveles");
var _QPartes = require("./QPartes");
var _QPedimentos = require("./QPedimentos");
var _QPedimentosAA = require("./QPedimentosAA");
var _QPedimentosConcep = require("./QPedimentosConcep");
var _QPermiso = require("./QPermiso");
var _QPermisoClase = require("./QPermisoClase");
var _QPermisoPR = require("./QPermisoPR");
var _QPermisoSECON = require("./QPermisoSECON");
var _QRepMovimientos = require("./QRepMovimientos");
var _QSeriesDef = require("./QSeriesDef");
var _QSeriesExpo = require("./QSeriesExpo");
var _QSeriesExpoRep = require("./QSeriesExpoRep");
var _QSeriesImpo = require("./QSeriesImpo");
var _QSeriesImpoRep = require("./QSeriesImpoRep");
var _QSisCMex = require("./QSisCMex");
var _QSisDef = require("./QSisDef");
var _QSisExpo = require("./QSisExpo");
var _QSisExpoRep = require("./QSisExpoRep");
var _QSisGen = require("./QSisGen");
var _QSisImpo = require("./QSisImpo");
var _QSisImpoRep = require("./QSisImpoRep");
var _QTipoActFijo = require("./QTipoActFijo");
var _QTiposFactura = require("./QTiposFactura");
var _SAceesos = require("./SAceesos");
var _SBOMVer = require("./SBOMVer");
var _SBackFlashPL = require("./SBackFlashPL");
var _SCTM = require("./SCTM");
var _SClasePermiso = require("./SClasePermiso");
var _SClases = require("./SClases");
var _SComprasMexID = require("./SComprasMexID");
var _SConfigFTP = require("./SConfigFTP");
var _SConfiguracion = require("./SConfiguracion");
var _SDescargaCTM = require("./SDescargaCTM");
var _SDescargaD = require("./SDescargaD");
var _SDescargaM = require("./SDescargaM");
var _SDescargaMerDes = require("./SDescargaMerDes");
var _SDescargaR = require("./SDescargaR");
var _SDescargaS = require("./SDescargaS");
var _SDescargaSM = require("./SDescargaSM");
var _SDescargaT = require("./SDescargaT");
var _SFacEntradaSM = require("./SFacEntradaSM");
var _SFacEnviaCTM = require("./SFacEnviaCTM");
var _SFacExp = require("./SFacExp");
var _SFacExpCobranza = require("./SFacExpCobranza");
var _SFacImp = require("./SFacImp");
var _SFacImpCobranza = require("./SFacImpCobranza");
var _SFacOrdenVenta = require("./SFacOrdenVenta");
var _SFacReciboCTM = require("./SFacReciboCTM");
var _SFacRep = require("./SFacRep");
var _SFacSalidaSM = require("./SFacSalidaSM");
var _SFracAmeFact = require("./SFracAmeFact");
var _SFracAmeParte = require("./SFracAmeParte");
var _SFraccionesAnterioresN = require("./SFraccionesAnterioresN");
var _SIdentificadoresPedimento = require("./SIdentificadoresPedimento");
var _SImplosion = require("./SImplosion");
var _SLocalizacion = require("./SLocalizacion");
var _SMatBOM = require("./SMatBOM");
var _SMatBOMClase = require("./SMatBOMClase");
var _SMermaDesp = require("./SMermaDesp");
var _SModificaciones = require("./SModificaciones");
var _SPackingList = require("./SPackingList");
var _SParPruSuf = require("./SParPruSuf");
var _SParteCliente = require("./SParteCliente");
var _SPartePais = require("./SPartePais");
var _SPartes = require("./SPartes");
var _SPartesClientes = require("./SPartesClientes");
var _SPartesSustitutos = require("./SPartesSustitutos");
var _SPartidasCM = require("./SPartidasCM");
var _SPartidasEntradaSM = require("./SPartidasEntradaSM");
var _SPartidasEnviaCTM = require("./SPartidasEnviaCTM");
var _SPartidasExpo = require("./SPartidasExpo");
var _SPartidasImpo = require("./SPartidasImpo");
var _SPartidasImposion = require("./SPartidasImposion");
var _SPartidasPackingList = require("./SPartidasPackingList");
var _SPartidasReciboCTM = require("./SPartidasReciboCTM");
var _SPartidasRep = require("./SPartidasRep");
var _SPartidasSalidaSM = require("./SPartidasSalidaSM");
var _SPedimentos = require("./SPedimentos");
var _SPedimentosAA = require("./SPedimentosAA");
var _SPedimentosConcep = require("./SPedimentosConcep");
var _SPedimentosEDocument = require("./SPedimentosEDocument");
var _SPermisoSECON = require("./SPermisoSECON");
var _SRegulaciones = require("./SRegulaciones");
var _SSaldoCTM = require("./SSaldoCTM");
var _SSaldoDef = require("./SSaldoDef");
var _SSaldoRep = require("./SSaldoRep");
var _SSaldoSalidaSM = require("./SSaldoSalidaSM");
var _SSaldoTem = require("./SSaldoTem");
var _SSaldosBultos = require("./SSaldosBultos");
var _SSaldosDetallado = require("./SSaldosDetallado");
var _SSaldosReglaOctava = require("./SSaldosReglaOctava");
var _SSeriesExpo = require("./SSeriesExpo");
var _SSisCMex = require("./SSisCMex");
var _SSisDef = require("./SSisDef");
var _SSisExpo = require("./SSisExpo");
var _SSisGen = require("./SSisGen");
var _SSisImpo = require("./SSisImpo");
var _STipoMat = require("./STipoMat");
var _STiposFactura = require("./STiposFactura");
var _SVerBOM = require("./SVerBOM");
var _SVerBOMEnc = require("./SVerBOMEnc");
var _gDODA = require("./gDODA");
var _gDoda_Contenedores = require("./gDoda_Contenedores");
var _gDoda_Contenedores_Candados = require("./gDoda_Contenedores_Candados");
var _gDoda_PedimentoAmericano = require("./gDoda_PedimentoAmericano");
var _gDoda_Pedimentos = require("./gDoda_Pedimentos");
var _gMSSQLFile = require("./gMSSQLFile");
var _sAladi2 = require("./sAladi2");
var _sArchivosDescargados = require("./sArchivosDescargados");
var _sArchivosProcesados = require("./sArchivosProcesados");
var _sFracciones = require("./sFracciones");
var _sFraccionesAnteriores = require("./sFraccionesAnteriores");
var _sFraccionesCortas = require("./sFraccionesCortas");
var _sFraccionesResumidas = require("./sFraccionesResumidas");
var _sFracciones_USA = require("./sFracciones_USA");
var _sHistoricoReit = require("./sHistoricoReit");
var _sProsec = require("./sProsec");
var _sRCG2 = require("./sRCG2");
var _sREIT = require("./sREIT");
var _sRequisitoPrevio = require("./sRequisitoPrevio");
var _sTLCS = require("./sTLCS");

function initModels(sequelize) {
  var AConfiguracion = _AConfiguracion(sequelize, DataTypes);
  var ADescargas = _ADescargas(sequelize, DataTypes);
  var ETipoMat = _ETipoMat(sequelize, DataTypes);
  var GAAduanal = _GAAduanal(sequelize, DataTypes);
  var GAAduanalPersonal = _GAAduanalPersonal(sequelize, DataTypes);
  var GAccesos = _GAccesos(sequelize, DataTypes);
  var GAccesosModulos = _GAccesosModulos(sequelize, DataTypes);
  var GAduanaSec = _GAduanaSec(sequelize, DataTypes);
  var GAgencyTariffCodes = _GAgencyTariffCodes(sequelize, DataTypes);
  var GAnexo22App3 = _GAnexo22App3(sequelize, DataTypes);
  var GAphis = _GAphis(sequelize, DataTypes);
  var GAphisContainers = _GAphisContainers(sequelize, DataTypes);
  var GAphisEntities = _GAphisEntities(sequelize, DataTypes);
  var GAphisItemsChr = _GAphisItemsChr(sequelize, DataTypes);
  var GAphisLpcos = _GAphisLpcos(sequelize, DataTypes);
  var GAphisPItems = _GAphisPItems(sequelize, DataTypes);
  var GAphisRoutings = _GAphisRoutings(sequelize, DataTypes);
  var GArchivosConsecutivos = _GArchivosConsecutivos(sequelize, DataTypes);
  var GArchivosDescargaSifra = _GArchivosDescargaSifra(sequelize, DataTypes);
  var GArchivosSIAA = _GArchivosSIAA(sequelize, DataTypes);
  var GAvisosElectronicos = _GAvisosElectronicos(sequelize, DataTypes);
  var GBasedeDatos = _GBasedeDatos(sequelize, DataTypes);
  var GBitacora = _GBitacora(sequelize, DataTypes);
  var GBotonLeyendas = _GBotonLeyendas(sequelize, DataTypes);
  var GBultos = _GBultos(sequelize, DataTypes);
  var GCatErrores = _GCatErrores(sequelize, DataTypes);
  var GCatErroresClas = _GCatErroresClas(sequelize, DataTypes);
  var GCertOrigen = _GCertOrigen(sequelize, DataTypes);
  var GClavePed = _GClavePed(sequelize, DataTypes);
  var GClavePedRegimen = _GClavePedRegimen(sequelize, DataTypes);
  var GClientesPro = _GClientesPro(sequelize, DataTypes);
  var GCodigosFCC = _GCodigosFCC(sequelize, DataTypes);
  var GCodigosFDA = _GCodigosFDA(sequelize, DataTypes);
  var GCodigosFDA04 = _GCodigosFDA04(sequelize, DataTypes);
  var GCodigosFDA23 = _GCodigosFDA23(sequelize, DataTypes);
  var GCodigosFDA25 = _GCodigosFDA25(sequelize, DataTypes);
  var GCodigosProductoCP = _GCodigosProductoCP(sequelize, DataTypes);
  var GConCobranza = _GConCobranza(sequelize, DataTypes);
  var GConceptos = _GConceptos(sequelize, DataTypes);
  var GConceptosAAduanal = _GConceptosAAduanal(sequelize, DataTypes);
  var GConceptosClasif = _GConceptosClasif(sequelize, DataTypes);
  var GConductor = _GConductor(sequelize, DataTypes);
  var GConfigReportes = _GConfigReportes(sequelize, DataTypes);
  var GConfigTablas = _GConfigTablas(sequelize, DataTypes);
  var GContenedores = _GContenedores(sequelize, DataTypes);
  var GControlDeCredito = _GControlDeCredito(sequelize, DataTypes);
  var GConversiones = _GConversiones(sequelize, DataTypes);
  var GDestinoAduanero = _GDestinoAduanero(sequelize, DataTypes);
  var GDestruccion = _GDestruccion(sequelize, DataTypes);
  var GDivisionPeligro = _GDivisionPeligro(sequelize, DataTypes);
  var GDocumentosDigital = _GDocumentosDigital(sequelize, DataTypes);
  var GDotInformation = _GDotInformation(sequelize, DataTypes);
  var GDotInformation08 = _GDotInformation08(sequelize, DataTypes);
  var GDotInformation14 = _GDotInformation14(sequelize, DataTypes);
  var GEmails = _GEmails(sequelize, DataTypes);
  var GEmpresa = _GEmpresa(sequelize, DataTypes);
  var GEncAnexo = _GEncAnexo(sequelize, DataTypes);
  var GEncFacturas = _GEncFacturas(sequelize, DataTypes);
  var GEquivPartidas = _GEquivPartidas(sequelize, DataTypes);
  var GEquivalenteEnc = _GEquivalenteEnc(sequelize, DataTypes);
  var GErroresFac = _GErroresFac(sequelize, DataTypes);
  var GEstados = _GEstados(sequelize, DataTypes);
  var GExpedienteElecEnc = _GExpedienteElecEnc(sequelize, DataTypes);
  var GExpedienteElecPartidas = _GExpedienteElecPartidas(sequelize, DataTypes);
  var GFacProforma = _GFacProforma(sequelize, DataTypes);
  var GFiltros = _GFiltros(sequelize, DataTypes);
  var GFirmas = _GFirmas(sequelize, DataTypes);
  var GFormaPago = _GFormaPago(sequelize, DataTypes);
  var GFracAme = _GFracAme(sequelize, DataTypes);
  var GFracEUACan = _GFracEUACan(sequelize, DataTypes);
  var GFracROctava = _GFracROctava(sequelize, DataTypes);
  var GFraccionesHistorico = _GFraccionesHistorico(sequelize, DataTypes);
  var GINPC = _GINPC(sequelize, DataTypes);
  var GIdentificadores = _GIdentificadores(sequelize, DataTypes);
  var GIdentificadoresPartidas = _GIdentificadoresPartidas(sequelize, DataTypes);
  var GIncoterm = _GIncoterm(sequelize, DataTypes);
  var GLeyendas = _GLeyendas(sequelize, DataTypes);
  var GManifCoductor = _GManifCoductor(sequelize, DataTypes);
  var GManifestacionAnexo = _GManifestacionAnexo(sequelize, DataTypes);
  var GManifestacionConcepto = _GManifestacionConcepto(sequelize, DataTypes);
  var GManifestacionValor = _GManifestacionValor(sequelize, DataTypes);
  var GManifiesto = _GManifiesto(sequelize, DataTypes);
  var GMetValor = _GMetValor(sequelize, DataTypes);
  var GModTransporte = _GModTransporte(sequelize, DataTypes);
  var GNivelesSeguridad = _GNivelesSeguridad(sequelize, DataTypes);
  var GNivelesSeguridadTablas = _GNivelesSeguridadTablas(sequelize, DataTypes);
  var GPaisReglaOct = _GPaisReglaOct(sequelize, DataTypes);
  var GPaises = _GPaises(sequelize, DataTypes);
  var GPaisesGrupoSifra = _GPaisesGrupoSifra(sequelize, DataTypes);
  var GParAnexo = _GParAnexo(sequelize, DataTypes);
  var GParFacturas = _GParFacturas(sequelize, DataTypes);
  var GPartidasCO = _GPartidasCO(sequelize, DataTypes);
  var GPeriodoAnexo31 = _GPeriodoAnexo31(sequelize, DataTypes);
  var GPermisoReglaOct = _GPermisoReglaOct(sequelize, DataTypes);
  var GPrecintos = _GPrecintos(sequelize, DataTypes);
  var GPrevalidadores = _GPrevalidadores(sequelize, DataTypes);
  var GProcesos = _GProcesos(sequelize, DataTypes);
  var GPuertoEnt = _GPuertoEnt(sequelize, DataTypes);
  var GRecintos = _GRecintos(sequelize, DataTypes);
  var GRegimenPed = _GRegimenPed(sequelize, DataTypes);
  var GRelFacFacturas = _GRelFacFacturas(sequelize, DataTypes);
  var GRelacionFacturas = _GRelacionFacturas(sequelize, DataTypes);
  var GRutasGenerales = _GRutasGenerales(sequelize, DataTypes);
  var GSIAA = _GSIAA(sequelize, DataTypes);
  var GSQLFile = _GSQLFile(sequelize, DataTypes);
  var GSQLFile2 = _GSQLFile2(sequelize, DataTypes);
  var GSQLFile3 = _GSQLFile3(sequelize, DataTypes);
  var GSectores = _GSectores(sequelize, DataTypes);
  var GSisManifiesto = _GSisManifiesto(sequelize, DataTypes);
  var GSisMultiples = _GSisMultiples(sequelize, DataTypes);
  var GSubEmpresa = _GSubEmpresa(sequelize, DataTypes);
  var GTipoCambio = _GTipoCambio(sequelize, DataTypes);
  var GTipoCambioMM = _GTipoCambioMM(sequelize, DataTypes);
  var GTipoDoc = _GTipoDoc(sequelize, DataTypes);
  var GTipoDocDigital = _GTipoDocDigital(sequelize, DataTypes);
  var GTipoMultiMoneda = _GTipoMultiMoneda(sequelize, DataTypes);
  var GTipoTrailer = _GTipoTrailer(sequelize, DataTypes);
  var GTipoTransportes = _GTipoTransportes(sequelize, DataTypes);
  var GTiposMoneda = _GTiposMoneda(sequelize, DataTypes);
  var GTrailers = _GTrailers(sequelize, DataTypes);
  var GTransportes = _GTransportes(sequelize, DataTypes);
  var GTransportista = _GTransportista(sequelize, DataTypes);
  var GUMAduana = _GUMAduana(sequelize, DataTypes);
  var GUMAme = _GUMAme(sequelize, DataTypes);
  var GUMOMA = _GUMOMA(sequelize, DataTypes);
  var GUniMed = _GUniMed(sequelize, DataTypes);
  var GUniMedACE = _GUniMedACE(sequelize, DataTypes);
  var GUniMedida = _GUniMedida(sequelize, DataTypes);
  var GUsuarios = _GUsuarios(sequelize, DataTypes);
  var PedimentosAmericanos = _PedimentosAmericanos(sequelize, DataTypes);
  var QAssetTag = _QAssetTag(sequelize, DataTypes);
  var QClaAct = _QClaAct(sequelize, DataTypes);
  var QClasePermiso = _QClasePermiso(sequelize, DataTypes);
  var QConfiguracion = _QConfiguracion(sequelize, DataTypes);
  var QEqeMaq = _QEqeMaq(sequelize, DataTypes);
  var QEqeMaqRep = _QEqeMaqRep(sequelize, DataTypes);
  var QEqiDef = _QEqiDef(sequelize, DataTypes);
  var QEqiMaq = _QEqiMaq(sequelize, DataTypes);
  var QEqiMaqRep = _QEqiMaqRep(sequelize, DataTypes);
  var QFacExp = _QFacExp(sequelize, DataTypes);
  var QFacExpCobranza = _QFacExpCobranza(sequelize, DataTypes);
  var QFacExpRep = _QFacExpRep(sequelize, DataTypes);
  var QFacImp = _QFacImp(sequelize, DataTypes);
  var QFacImpCobranza = _QFacImpCobranza(sequelize, DataTypes);
  var QFacImpDef = _QFacImpDef(sequelize, DataTypes);
  var QFacImpRep = _QFacImpRep(sequelize, DataTypes);
  var QInfDepre = _QInfDepre(sequelize, DataTypes);
  var QLocalizacion = _QLocalizacion(sequelize, DataTypes);
  var QLocalizacionExt = _QLocalizacionExt(sequelize, DataTypes);
  var QNiveles = _QNiveles(sequelize, DataTypes);
  var QPartes = _QPartes(sequelize, DataTypes);
  var QPedimentos = _QPedimentos(sequelize, DataTypes);
  var QPedimentosAA = _QPedimentosAA(sequelize, DataTypes);
  var QPedimentosConcep = _QPedimentosConcep(sequelize, DataTypes);
  var QPermiso = _QPermiso(sequelize, DataTypes);
  var QPermisoClase = _QPermisoClase(sequelize, DataTypes);
  var QPermisoPR = _QPermisoPR(sequelize, DataTypes);
  var QPermisoSECON = _QPermisoSECON(sequelize, DataTypes);
  var QRepMovimientos = _QRepMovimientos(sequelize, DataTypes);
  var QSeriesDef = _QSeriesDef(sequelize, DataTypes);
  var QSeriesExpo = _QSeriesExpo(sequelize, DataTypes);
  var QSeriesExpoRep = _QSeriesExpoRep(sequelize, DataTypes);
  var QSeriesImpo = _QSeriesImpo(sequelize, DataTypes);
  var QSeriesImpoRep = _QSeriesImpoRep(sequelize, DataTypes);
  var QSisCMex = _QSisCMex(sequelize, DataTypes);
  var QSisDef = _QSisDef(sequelize, DataTypes);
  var QSisExpo = _QSisExpo(sequelize, DataTypes);
  var QSisExpoRep = _QSisExpoRep(sequelize, DataTypes);
  var QSisGen = _QSisGen(sequelize, DataTypes);
  var QSisImpo = _QSisImpo(sequelize, DataTypes);
  var QSisImpoRep = _QSisImpoRep(sequelize, DataTypes);
  var QTipoActFijo = _QTipoActFijo(sequelize, DataTypes);
  var QTiposFactura = _QTiposFactura(sequelize, DataTypes);
  var SAceesos = _SAceesos(sequelize, DataTypes);
  var SBOMVer = _SBOMVer(sequelize, DataTypes);
  var SBackFlashPL = _SBackFlashPL(sequelize, DataTypes);
  var SCTM = _SCTM(sequelize, DataTypes);
  var SClasePermiso = _SClasePermiso(sequelize, DataTypes);
  var SClases = _SClases(sequelize, DataTypes);
  var SComprasMexID = _SComprasMexID(sequelize, DataTypes);
  var SConfigFTP = _SConfigFTP(sequelize, DataTypes);
  var SConfiguracion = _SConfiguracion(sequelize, DataTypes);
  var SDescargaCTM = _SDescargaCTM(sequelize, DataTypes);
  var SDescargaD = _SDescargaD(sequelize, DataTypes);
  var SDescargaM = _SDescargaM(sequelize, DataTypes);
  var SDescargaMerDes = _SDescargaMerDes(sequelize, DataTypes);
  var SDescargaR = _SDescargaR(sequelize, DataTypes);
  var SDescargaS = _SDescargaS(sequelize, DataTypes);
  var SDescargaSM = _SDescargaSM(sequelize, DataTypes);
  var SDescargaT = _SDescargaT(sequelize, DataTypes);
  var SFacEntradaSM = _SFacEntradaSM(sequelize, DataTypes);
  var SFacEnviaCTM = _SFacEnviaCTM(sequelize, DataTypes);
  var SFacExp = _SFacExp(sequelize, DataTypes);
  var SFacExpCobranza = _SFacExpCobranza(sequelize, DataTypes);
  var SFacImp = _SFacImp(sequelize, DataTypes);
  var SFacImpCobranza = _SFacImpCobranza(sequelize, DataTypes);
  var SFacOrdenVenta = _SFacOrdenVenta(sequelize, DataTypes);
  var SFacReciboCTM = _SFacReciboCTM(sequelize, DataTypes);
  var SFacRep = _SFacRep(sequelize, DataTypes);
  var SFacSalidaSM = _SFacSalidaSM(sequelize, DataTypes);
  var SFracAmeFact = _SFracAmeFact(sequelize, DataTypes);
  var SFracAmeParte = _SFracAmeParte(sequelize, DataTypes);
  var SFraccionesAnterioresN = _SFraccionesAnterioresN(sequelize, DataTypes);
  var SIdentificadoresPedimento = _SIdentificadoresPedimento(sequelize, DataTypes);
  var SImplosion = _SImplosion(sequelize, DataTypes);
  var SLocalizacion = _SLocalizacion(sequelize, DataTypes);
  var SMatBOM = _SMatBOM(sequelize, DataTypes);
  var SMatBOMClase = _SMatBOMClase(sequelize, DataTypes);
  var SMermaDesp = _SMermaDesp(sequelize, DataTypes);
  var SModificaciones = _SModificaciones(sequelize, DataTypes);
  var SPackingList = _SPackingList(sequelize, DataTypes);
  var SParPruSuf = _SParPruSuf(sequelize, DataTypes);
  var SParteCliente = _SParteCliente(sequelize, DataTypes);
  var SPartePais = _SPartePais(sequelize, DataTypes);
  var SPartes = _SPartes(sequelize, DataTypes);
  var SPartesClientes = _SPartesClientes(sequelize, DataTypes);
  var SPartesSustitutos = _SPartesSustitutos(sequelize, DataTypes);
  var SPartidasCM = _SPartidasCM(sequelize, DataTypes);
  var SPartidasEntradaSM = _SPartidasEntradaSM(sequelize, DataTypes);
  var SPartidasEnviaCTM = _SPartidasEnviaCTM(sequelize, DataTypes);
  var SPartidasExpo = _SPartidasExpo(sequelize, DataTypes);
  var SPartidasImpo = _SPartidasImpo(sequelize, DataTypes);
  var SPartidasImposion = _SPartidasImposion(sequelize, DataTypes);
  var SPartidasPackingList = _SPartidasPackingList(sequelize, DataTypes);
  var SPartidasReciboCTM = _SPartidasReciboCTM(sequelize, DataTypes);
  var SPartidasRep = _SPartidasRep(sequelize, DataTypes);
  var SPartidasSalidaSM = _SPartidasSalidaSM(sequelize, DataTypes);
  var SPedimentos = _SPedimentos(sequelize, DataTypes);
  var SPedimentosAA = _SPedimentosAA(sequelize, DataTypes);
  var SPedimentosConcep = _SPedimentosConcep(sequelize, DataTypes);
  var SPedimentosEDocument = _SPedimentosEDocument(sequelize, DataTypes);
  var SPermisoSECON = _SPermisoSECON(sequelize, DataTypes);
  var SRegulaciones = _SRegulaciones(sequelize, DataTypes);
  var SSaldoCTM = _SSaldoCTM(sequelize, DataTypes);
  var SSaldoDef = _SSaldoDef(sequelize, DataTypes);
  var SSaldoRep = _SSaldoRep(sequelize, DataTypes);
  var SSaldoSalidaSM = _SSaldoSalidaSM(sequelize, DataTypes);
  var SSaldoTem = _SSaldoTem(sequelize, DataTypes);
  var SSaldosBultos = _SSaldosBultos(sequelize, DataTypes);
  var SSaldosDetallado = _SSaldosDetallado(sequelize, DataTypes);
  var SSaldosReglaOctava = _SSaldosReglaOctava(sequelize, DataTypes);
  var SSeriesExpo = _SSeriesExpo(sequelize, DataTypes);
  var SSisCMex = _SSisCMex(sequelize, DataTypes);
  var SSisDef = _SSisDef(sequelize, DataTypes);
  var SSisExpo = _SSisExpo(sequelize, DataTypes);
  var SSisGen = _SSisGen(sequelize, DataTypes);
  var SSisImpo = _SSisImpo(sequelize, DataTypes);
  var STipoMat = _STipoMat(sequelize, DataTypes);
  var STiposFactura = _STiposFactura(sequelize, DataTypes);
  var SVerBOM = _SVerBOM(sequelize, DataTypes);
  var SVerBOMEnc = _SVerBOMEnc(sequelize, DataTypes);
  var gDODA = _gDODA(sequelize, DataTypes);
  var gDoda_Contenedores = _gDoda_Contenedores(sequelize, DataTypes);
  var gDoda_Contenedores_Candados = _gDoda_Contenedores_Candados(sequelize, DataTypes);
  var gDoda_PedimentoAmericano = _gDoda_PedimentoAmericano(sequelize, DataTypes);
  var gDoda_Pedimentos = _gDoda_Pedimentos(sequelize, DataTypes);
  var gMSSQLFile = _gMSSQLFile(sequelize, DataTypes);
  var sAladi2 = _sAladi2(sequelize, DataTypes);
  var sArchivosDescargados = _sArchivosDescargados(sequelize, DataTypes);
  var sArchivosProcesados = _sArchivosProcesados(sequelize, DataTypes);
  var sFracciones = _sFracciones(sequelize, DataTypes);
  var sFraccionesAnteriores = _sFraccionesAnteriores(sequelize, DataTypes);
  var sFraccionesCortas = _sFraccionesCortas(sequelize, DataTypes);
  var sFraccionesResumidas = _sFraccionesResumidas(sequelize, DataTypes);
  var sFracciones_USA = _sFracciones_USA(sequelize, DataTypes);
  var sHistoricoReit = _sHistoricoReit(sequelize, DataTypes);
  var sProsec = _sProsec(sequelize, DataTypes);
  var sRCG2 = _sRCG2(sequelize, DataTypes);
  var sREIT = _sREIT(sequelize, DataTypes);
  var sRequisitoPrevio = _sRequisitoPrevio(sequelize, DataTypes);
  var sTLCS = _sTLCS(sequelize, DataTypes);


  return {
    AConfiguracion,
    ADescargas,
    ETipoMat,
    GAAduanal,
    GAAduanalPersonal,
    GAccesos,
    GAccesosModulos,
    GAduanaSec,
    GAgencyTariffCodes,
    GAnexo22App3,
    GAphis,
    GAphisContainers,
    GAphisEntities,
    GAphisItemsChr,
    GAphisLpcos,
    GAphisPItems,
    GAphisRoutings,
    GArchivosConsecutivos,
    GArchivosDescargaSifra,
    GArchivosSIAA,
    GAvisosElectronicos,
    GBasedeDatos,
    GBitacora,
    GBotonLeyendas,
    GBultos,
    GCatErrores,
    GCatErroresClas,
    GCertOrigen,
    GClavePed,
    GClavePedRegimen,
    GClientesPro,
    GCodigosFCC,
    GCodigosFDA,
    GCodigosFDA04,
    GCodigosFDA23,
    GCodigosFDA25,
    GCodigosProductoCP,
    GConCobranza,
    GConceptos,
    GConceptosAAduanal,
    GConceptosClasif,
    GConductor,
    GConfigReportes,
    GConfigTablas,
    GContenedores,
    GControlDeCredito,
    GConversiones,
    GDestinoAduanero,
    GDestruccion,
    GDivisionPeligro,
    GDocumentosDigital,
    GDotInformation,
    GDotInformation08,
    GDotInformation14,
    GEmails,
    GEmpresa,
    GEncAnexo,
    GEncFacturas,
    GEquivPartidas,
    GEquivalenteEnc,
    GErroresFac,
    GEstados,
    GExpedienteElecEnc,
    GExpedienteElecPartidas,
    GFacProforma,
    GFiltros,
    GFirmas,
    GFormaPago,
    GFracAme,
    GFracEUACan,
    GFracROctava,
    GFraccionesHistorico,
    GINPC,
    GIdentificadores,
    GIdentificadoresPartidas,
    GIncoterm,
    GLeyendas,
    GManifCoductor,
    GManifestacionAnexo,
    GManifestacionConcepto,
    GManifestacionValor,
    GManifiesto,
    GMetValor,
    GModTransporte,
    GNivelesSeguridad,
    GNivelesSeguridadTablas,
    GPaisReglaOct,
    GPaises,
    GPaisesGrupoSifra,
    GParAnexo,
    GParFacturas,
    GPartidasCO,
    GPeriodoAnexo31,
    GPermisoReglaOct,
    GPrecintos,
    GPrevalidadores,
    GProcesos,
    GPuertoEnt,
    GRecintos,
    GRegimenPed,
    GRelFacFacturas,
    GRelacionFacturas,
    GRutasGenerales,
    GSIAA,
    GSQLFile,
    GSQLFile2,
    GSQLFile3,
    GSectores,
    GSisManifiesto,
    GSisMultiples,
    GSubEmpresa,
    GTipoCambio,
    GTipoCambioMM,
    GTipoDoc,
    GTipoDocDigital,
    GTipoMultiMoneda,
    GTipoTrailer,
    GTipoTransportes,
    GTiposMoneda,
    GTrailers,
    GTransportes,
    GTransportista,
    GUMAduana,
    GUMAme,
    GUMOMA,
    GUniMed,
    GUniMedACE,
    GUniMedida,
    GUsuarios,
    PedimentosAmericanos,
    QAssetTag,
    QClaAct,
    QClasePermiso,
    QConfiguracion,
    QEqeMaq,
    QEqeMaqRep,
    QEqiDef,
    QEqiMaq,
    QEqiMaqRep,
    QFacExp,
    QFacExpCobranza,
    QFacExpRep,
    QFacImp,
    QFacImpCobranza,
    QFacImpDef,
    QFacImpRep,
    QInfDepre,
    QLocalizacion,
    QLocalizacionExt,
    QNiveles,
    QPartes,
    QPedimentos,
    QPedimentosAA,
    QPedimentosConcep,
    QPermiso,
    QPermisoClase,
    QPermisoPR,
    QPermisoSECON,
    QRepMovimientos,
    QSeriesDef,
    QSeriesExpo,
    QSeriesExpoRep,
    QSeriesImpo,
    QSeriesImpoRep,
    QSisCMex,
    QSisDef,
    QSisExpo,
    QSisExpoRep,
    QSisGen,
    QSisImpo,
    QSisImpoRep,
    QTipoActFijo,
    QTiposFactura,
    SAceesos,
    SBOMVer,
    SBackFlashPL,
    SCTM,
    SClasePermiso,
    SClases,
    SComprasMexID,
    SConfigFTP,
    SConfiguracion,
    SDescargaCTM,
    SDescargaD,
    SDescargaM,
    SDescargaMerDes,
    SDescargaR,
    SDescargaS,
    SDescargaSM,
    SDescargaT,
    SFacEntradaSM,
    SFacEnviaCTM,
    SFacExp,
    SFacExpCobranza,
    SFacImp,
    SFacImpCobranza,
    SFacOrdenVenta,
    SFacReciboCTM,
    SFacRep,
    SFacSalidaSM,
    SFracAmeFact,
    SFracAmeParte,
    SFraccionesAnterioresN,
    SIdentificadoresPedimento,
    SImplosion,
    SLocalizacion,
    SMatBOM,
    SMatBOMClase,
    SMermaDesp,
    SModificaciones,
    SPackingList,
    SParPruSuf,
    SParteCliente,
    SPartePais,
    SPartes,
    SPartesClientes,
    SPartesSustitutos,
    SPartidasCM,
    SPartidasEntradaSM,
    SPartidasEnviaCTM,
    SPartidasExpo,
    SPartidasImpo,
    SPartidasImposion,
    SPartidasPackingList,
    SPartidasReciboCTM,
    SPartidasRep,
    SPartidasSalidaSM,
    SPedimentos,
    SPedimentosAA,
    SPedimentosConcep,
    SPedimentosEDocument,
    SPermisoSECON,
    SRegulaciones,
    SSaldoCTM,
    SSaldoDef,
    SSaldoRep,
    SSaldoSalidaSM,
    SSaldoTem,
    SSaldosBultos,
    SSaldosDetallado,
    SSaldosReglaOctava,
    SSeriesExpo,
    SSisCMex,
    SSisDef,
    SSisExpo,
    SSisGen,
    SSisImpo,
    STipoMat,
    STiposFactura,
    SVerBOM,
    SVerBOMEnc,
    gDODA,
    gDoda_Contenedores,
    gDoda_Contenedores_Candados,
    gDoda_PedimentoAmericano,
    gDoda_Pedimentos,
    gMSSQLFile,
    sAladi2,
    sArchivosDescargados,
    sArchivosProcesados,
    sFracciones,
    sFraccionesAnteriores,
    sFraccionesCortas,
    sFraccionesResumidas,
    sFracciones_USA,
    sHistoricoReit,
    sProsec,
    sRCG2,
    sREIT,
    sRequisitoPrevio,
    sTLCS,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
