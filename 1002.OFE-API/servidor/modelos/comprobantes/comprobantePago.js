/**
 * persistencia de la tabla t_comprobantepago en la variable ComprobantePago
 * Modificado --- creado --/--/----
 * @author Renato creado 14/12/2017
 * @argument 1 sobrenombre de la tabla
 * @argument 2 campos de la tabla
 * @argument 3 tabla sqlite
 */
var ComprobantePago = conexion.define('ComprobantePago',
  {
    id:{
        type: sequelize.TEXT,
        field: "in_idcomprobantepago",
        unique: true,
        primaryKey: true,
        allowNull:false
    },
    numeroComprobantePago: {
      type: sequelize.TEXT(30),
      field: "ch_numerocomprobantepago",
      allowNull:false
    },
    idUsuarioProveedor: {
      type: sequelize.INTEGER(32),
      field: "in_idusuarioproveedor",
      allowNull:false
    },
    idOrganizacionCompradora: {
      type: sequelize.INTEGER(32),
      field: "in_idorganizacioncompradora",
      allowNull:false
    },
    idOrganizacionProveedora: {
      type: sequelize.INTEGER(32),
      field: "in_idorganizacionproveedora",
      allowNull:false
    },
    rucProveedor: {
      type: sequelize.TEXT(30),
      field: "ch_rucproveedor",
      allowNull:false
    },
    rucComprador: {
      type: sequelize.TEXT(30),
      field: "ch_ruccomprador",
      allowNull:false
    },
    estadoComprobantePago: {
      type: sequelize.TEXT(30),
      field: "ch_estadocomprobantepago",
      allowNull:false
    },
    flagPlazoPago: {
      type: sequelize.TEXT(1),
      field: "ch_flagplazopago",
      allowNull:false
    },
    flagRegistroEliminado: {
      type: sequelize.TEXT(1),
      field: "ch_flagregistroeliminado",
      allowNull:false
    },
    flagOrigenComprobantePago: {
      type: sequelize.TEXT(1),
      field: "ch_flagorigencomprobantepago",
      allowNull:false
    },
    flagorIGencreacion: {
      type: sequelize.TEXT(1),
      field: "ch_flagorigencreacion",
      allowNull:false
    },
    idGuia: {
      type: sequelize.INTEGER(32),
      field: "in_idguia",
      allowNull:false
    },
    iDoc: {
      type: sequelize.INTEGER(32),
      field: "in_idoc",
    },
    idUsuarioCreacion: {
      type: sequelize.INTEGER(32),
      field: "in_idusuariocreacion",
      allowNull:false
    },
    idUsuarioModificacion: {
      type: sequelize.INTEGER(32),
      field: "in_idusuariomodificacion",
      allowNull:false
    },
    idOrganizacionCreacion: {
      type: sequelize.INTEGER(32),
      field: "in_idorganizacioncreacion",
      allowNull:false
    },
    idOrganizacionModificacion: {
      type: sequelize.INTEGER(32),
      field: "in_idorganizacionmodificacion",
      allowNull:false
    },
    razonSocialProveedora: {
      type: sequelize.TEXT(100),
      field: "vc_razonsocialproveedora",
    },
    razonSocialCompradora: {
      type: sequelize.TEXT(100),
      field: "vc_razonsocialcompradora",
    },
    monedaComprobantePago: {
      type: sequelize.TEXT(30),
      field: "ch_monedacomprobantepago_",
    },
    fechaProgPagoComprobantePag: {
      type: sequelize.TEXT,
      field: "ts_fechaprogpagocomprobantepag",
    },
    fechaPagoComprobantePago: {
      type: sequelize.TEXT,
      field: "ts_fechapagocomprobantepago",
    },
    fechaCreacion: {
      type: sequelize.TEXT(6),
      field: "ts_fechacreacion",
    },
    fechaRegistro: {
      type: sequelize.TEXT(6),
      field: "ts_fecharegistro",
    },
    fechaEmision: {
      type: sequelize.TEXT(6),
      field: "ts_fechaemision",
    },
    fechaRecepcionComprobantePa: {
      type: sequelize.TEXT(6),
      field: "ts_fecharecepcioncomprobantepa",
    },
    fechaVencimiento: {
      type: sequelize.TEXT,
      field: "ts_fechavencimiento",
    },
    fechaEnvio: {
      type: sequelize.TEXT,
      field: "ts_fechaenvio",
    },
    fechaCambioEstado: {
      type: sequelize.TEXT,
      field: "ts_fechacambioestado",
    },
    obsComprobantePago: {
      type: sequelize.TEXT,
      field: "vc_obscomprobantepago",
    },
    obsPagoComprobantePago: {
      type: sequelize.TEXT,
      field: "vc_obspagocomprobantepago",
    },
    condicionPago: {
      type: sequelize.TEXT(100),
      field: "vc_condicionpago",
    },
    tiempoPlazo: {
      type: sequelize.TEXT(30),
      field: "ch_tiempoplazo",
    },
    documentoPago: {
      type: sequelize.TEXT(50),
      field: "vc_documentopago",
    },
    documentoSap: {
      type: sequelize.TEXT(50),
      field: "vc_documentosap",
    },
    formaPago: {
      type: sequelize.TEXT(50),
      field: "vc_formapago",
    },
    tipoComprobante: {
      type: sequelize.TEXT(100),
      field: "vc_tipocomprobante",
    },
    estadoComprobantePagoComp: {
      type: sequelize.TEXT(30),
      field: "ch_estadocomprobantepagocomp",
    },
    version: {
      type: sequelize.INTEGER(32),
      field: "in_version",
    },
    idUsuarioComprador: {
      type: sequelize.INTEGER(32),
      field: "in_idusuariocomprador",
    },
    numoc: {
      type: sequelize.TEXT(20),
      field: "vc_numoc",
    },
    numGuia: {
      type: sequelize.TEXT(20),
      field: "vc_numguia",
    },
    montoComprobantePago: {
      type: sequelize.TEXT(250),
      field: "vc_montocomprobantepago",
    },
    logo: {
      type: sequelize.TEXT(250),
      field: "vc_logo",
    },
    firma: {
      type: sequelize.TEXT(250),
      field: "vc_firma",
    },
    pagoTioDocumento: {
      type: sequelize.TEXT(200),
      field: "vc_pagotipodocumento",
    },
    pagoNroDocument: {
      type: sequelize.TEXT(200),
      field: "vc_pagonrodocumento",
    },
    pagoMoneda: {
      type: sequelize.TEXT(200),
      field: "vc_pagomoneda",
    },
    pagoBanco: {
      type: sequelize.TEXT(200),
      field: "vc_pagobanco",
    },
    dctoTipoDocumento: {
      type: sequelize.TEXT(200),
      field: "vc_dctotipodocumento",
    },
    dctoNroDocumento: {
      type: sequelize.TEXT(200),
      field: "vc_dctonrodocumento",
    },
    dctMmoneda: {
      type: sequelize.TEXT(200),
      field: "vc_dctomoneda",
    },
    nroCheque: {
      type: sequelize.TEXT(50),
      field: "vc_nrocheque",
    },
    codigoInterno: {
      type: sequelize.TEXT(10),
      field: "ch_codigointerno",
    },
    deGuiaPublicada: {
      type: sequelize.INTEGER(32),
      field: "in_deguiapublicada",
    },
    tipoFactura: {
      type: sequelize.TEXT(20),
      field: "vc_tipofactura",
    },
    codigoErpProveedor: {
      type: sequelize.TEXT(16),
      field: "vc_codigoerpproveedor",
    },
    fechaHoraCreacion: {
      type: sequelize.TEXT(6),
      field: "ts_fechahoracreacion",
    },
    codigoSociedad: {
      type: sequelize.TEXT(4),
      field: "vc_codigosociedad",
    },
    impuesto1: {
      type: sequelize.REAL(15,4),
      field: "de_impuesto1",
    },
    impuesto2: {
      type: sequelize.REAL(15,4),
      field: "de_impuesto2",
    },
    impuesto3: {
      type: sequelize.REAL(15,4),
      field: "de_impuesto3",
    },
    descuento: {
      type: sequelize.REAL(15,4),
      field: "de_descuento",
    },
    importeReferencial: {
      type: sequelize.REAL(15,4),
      field: "de_importereferencial",
    },
    subTotalComprobantepago: {
      type: sequelize.REAL(15,4),
      field: "de_subtotalcomprobantepago",
    },
    totalComprobantePago: {
      type: sequelize.REAL(15,4),
      field: "de_totalcomprobantepago",
    },
    pagoMontoPagadoUltimo: {
      type: sequelize.REAL(15,4),
      field: "de_pagomontopagadoultimo",
    },
    dctoMontoUltimo: {
      type: sequelize.REAL(15,4),
      field: "de_dctomontoultimo",
    },
    idindicadorImpuesto: {
      type: sequelize.INTEGER(32),
      field: "in_idindicadorimpuesto",
    },
    indicadorImpuesto: {
      type: sequelize.TEXT(5),
      field: "vc_indicadorimpuesto",
    },
    opRegFac: {
      type: sequelize.TEXT(5),
      field: "ch_opregfac",
    },
    codigoErp: {
      type: sequelize.TEXT(5),
      field: "vc_codigoerp",
    },
    codError: {
      type: sequelize.TEXT(255),
      field: "vc_coderror",
    },
    fechaDocumentoRet: {
      type: sequelize.TEXT,
      field: "ts_fechadocumentoret",
    },
    descError: {
      type: sequelize.TEXT(2048),
      field: "vc_descerror",
    },
    tipoEmision: {
      type: sequelize.TEXT(1),
      field: "ch_tipoemision",
    },
    porcentajeImpuesto: {
      type: sequelize.REAL(15,4),
      field: "de_porcentajeimpuesto",
    },
    detraccion: {
      type: sequelize.TEXT(2),
      field: "in_detraccion",
    },
    idBienServicio: {
      type: sequelize.INTEGER(32),
      field: "in_idbienservicio",
    },
    codigoBienServicio: {
      type: sequelize.TEXT(20),
      field: "vc_codigobienservicio",
    },
    descripcionBienServicio: {
      type: sequelize.TEXT(100),
      field: "vc_descripcionbienservicio",
    },
    porcentajeDetraccion: {
      type: sequelize.TEXT(10),
      field: "vc_porcentajedetraccion",
    },
    idCondicionPago: {
      type: sequelize.TEXT(20),
      field: "vc_idcondicionpago",
    },
    descripcionCondicionPago: {
      type: sequelize.TEXT(100),
      field: "vc_descripcioncondicionpago",
    },
    llaveErp: {
      type: sequelize.TEXT(50),
      field: "vc_llaveerp",
    },
    idTablaEstado: {
      type: sequelize.TEXT(8),
      field: "vc_idtablaestado",
    },
    idRegistroEstadoProv: {
      type: sequelize.TEXT(8),
      field: "vc_idregistroestadoprov",
    },
    idRegistroEstadoComp: {
      type: sequelize.TEXT(8),
      field: "vc_idregistroestadocomp",
    },
    idTablaMoneda: {
      type: sequelize.TEXT(8),
      field: "vc_idtablamoneda",
    },
    idRegistroMoneda: {
      type: sequelize.TEXT(8),
      field: "vc_idregistromoneda",
    },
    idTablaTipoComprobante: {
      type: sequelize.TEXT(8),
      field: "vc_idtablatipocomprobante",
    },
    idRegistroTipoComprobante: {
      type: sequelize.TEXT(8),
      field: "vc_idregistrotipocomprobante",
    },
    idTipoComprobante: {
      type: sequelize.TEXT(2),
      field: "ch_idtipocomprobante",
    },
    impuestoGvr: {
      type: sequelize.REAL(15,4),
      field: "de_impuestogvr",
    },
    pagoMontoPagado: {
      type: sequelize.REAL(15,4),
      field: "de_pagomontopagado",
    },
    dctoMonto: {
      type: sequelize.REAL(15,4),
      field: "de_dctomonto",
    },
    fecSincronizado: {
      type: sequelize.TEXT,
      field: "ts_fec_sincronizado",
    },
    estadoSincronizado: {
      type: sequelize.INTEGER,
      field: "in_estado_sincronizado",
    },
    identidadReceptor: {
      type: sequelize.INTEGER,
      field: "in_identidadreceptor",
    },
    identidadEmisor: {
      type: sequelize.INTEGER,
      field: "in_identidademisor",
    },
    ticketRetencion: {
      type: sequelize.TEXT,
      field: "vc_ticketretencion",
    },
  }, 
  {
    tableName: 't_comprobantepago',
    timestamps: false
  }
);

module.exports = ComprobantePago;