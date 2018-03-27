/**
 * @author --- Modificado **-**-****
 * @author renato creado 18-12-2017 
 */
var ComprobantePago = require('../../modelos/msoffline/comprobantePago');
var documentoReferencia = require('../../modelos/msoffline/docReferencia');
var documentoEntidad = require('../../modelos/msoffline/docEntidad');
const Op = conexion.Op;
 /**
 * Funcion que guarda los comprobantes de pago
 * 
 */
ComprobantePago.guardar = function guardarComprobantePago(data){
    return ComprobantePago.create({
        id: data.id,
        numeroComprobante: data.numeroComprobante,
        idProveedor: data.idProveedor,
        idOrganizacionCompradora: data.idOrganizacionCompradora,
        idOrganizacionProveedora: data.idOrganizacionProveedora,
        rucProveedor: data.rucProveedor,
        rucComprador: data.rucComprador,
        flagPlazoPago: data.flagPlazoPago,
        flagRegistroEliminado: data.flagRegistroEliminado,
        flagOrigenComprobante: data.flagOrigenComprobante,
        flagOrigenCreacion: data.flagOrigenCreacion,
        idGuia: data.idGuia,
        iDoc: data.iDoc,
        idUsuarioCreacion: data.idUsuarioCreacion,
        idUsuarioModificacion: data.idUsuarioModificacion,
        idOrganizacionCreacion: data.idOrganizacionCreacion,
        idOrganizacionModificacion: data.idOrganizacionModificacion,
        razonSocialProveedor: data.razonSocialProveedor,
        razonSocialComprador: data.razonSocialComprador,
        moneda: data.moneda,
        fechaProgPagoComprobantePag: data.fechaProgPagoComprobantePag,
        fechaPagoComprobantePago: data.fechaPagoComprobantePago,
        fechaCreacion: data.fechaCreacion,
        fechaRegistro: data.fechaRegistro,
        fechaEmision: data.fechaEmision,
        fechaRecepcionComprobantePa: data.fechaRecepcionComprobantePa,
        fechaVencimiento: data.fechaVencimiento,
        fechaEnvio: data.fechaEnvio,
        fechaCambioEstado: data.fechaCambioEstado,
        observacionComprobante: data.observacionComprobante,
        obsPagoComprobantePago: data.obsPagoComprobantePago,
        condicionPago: data.condicionPago,
        tiempoPlazo: data.tiempoPlazo,
        documentoPago: data.documentoPago,
        documentoSap: data.documentoSap,
        formaPago: data.formaPago,
        tipoComprobante: data.tipoComprobante,
        estado : data.estado,
        version: data.version, 
        idUsuarioComprador: data.idUsuarioComprador,
        numoc: data.numoc,
        numeroGuia: data.numeroGuia,
        montoComprobante: data.montoComprobante,
        logo: data.logo,
        firma: data.firma,
        pagoTipoDocumento: data.pagoTipoDocumento,
        pagoNroDocument: data.pagoNroDocument,
        pagoMoneda: data.pagoMoneda,
        pagoBanco: data.pagoBanco,
        tipoDocumentoDescuento: data.tipoDocumentoDescuento,
        numeroDocumentoDescuento: data.numeroDocumentoDescuento,
        monedaDescuento: data.monedaDescuento,
        numeroCheque: data.numeroCheque,
        codigoInterno: data.codigoInterno,
        guiaPublicada: data.guiaPublicada,
        tipoFactura: data.tipoFactura,
        codigoErpProveedor: data.codigoErpProveedor,
        fechaHoraCreacion: data.fechaHoraCreacion,
        codigoSociedad: data.codigoSociedad,
        igv: data.igv,
        isc: data.isc,
        otrosTributos: data.otrosTributos,
        descuento: data.descuento,
        importeReferencial: data.importeReferencial ,
        subtotalComprobante: data.subtotalComprobante ,
        totalComprobante: data.totalComprobante ,
        pagoMontoPagadoUltimo: data.pagoMontoPagadoUltimo ,
        dctoMontoUltimo: data.dctoMontoUltimo ,
        idindicadorImpuesto: data.idindicadorImpuesto ,
        descripcionIndicadorImpuesto: data.descripcionIndicadorImpuesto ,
        tipoItem: data.tipoItem ,
        codigoErp: data.codigoErp ,
        codError: data.codError ,
        fechaDocumentoRetencion: data.fechaDocumentoRetencion ,
        descError: data.descError ,
        tipoEmision: data.tipoEmision ,
        porcentajeImpuesto: data.porcentajeImpuesto ,
        detraccion: data.detraccion ,
        idBienServicio: data.idBienServicio ,
        codigoBienServicio: data.codigoBienServicio ,
        descripcionBienServicio: data.descripcionBienServicio ,
        porcentajeDetraccion: data.porcentajeDetraccion ,
        idCondicionPago: data.idCondicionPago ,
        descripcionCondicionPago: data.descripcionCondicionPago ,
        llaveErp: data.llaveErp ,
        idTablaEstado: data.idTablaEstado ,
        idRegistroEstadoProveedor: data.idRegistroEstadoProveedor ,
        idRegistroEstadoComprador: data.idRegistroEstadoComprador ,
        idTablaMoneda: data.idTablaMoneda ,
        idRegistroMoneda: data.idRegistroMoneda ,
        idTablaTipoComprobante: data.idTablaTipoComprobante ,
        idRegistroTipoComprobante: data.idRegistroTipoComprobante ,
        idTipoComprobante: data.idTipoComprobante ,
        impuestoGvr: data.impuestoGvr ,
        montoPagado: data.montoPagado ,
        montoDescuento: data.montoDescuento ,
        fecSincronizado: data.fecSincronizado ,
        estadoSincronizado: data.estadoSincronizado ,
        generado: data.generado ,
        estadoComprobantePago: data.estadoComprobantePago,
        guiapublicada: data.guiapublicada,
    });
}


ComprobantePago.buscarGuardarActualizar = function buscarGuardarActualizar(data, id){
    return ComprobantePago.findOne({where: {id: id}}).then(function(obj){
        if(obj){
            return ComprobantePago.update({
                id: data.id,
                numeroComprobante: data.numeroComprobante,
                idProveedor: data.idProveedor,
                idOrganizacionCompradora: data.idOrganizacionCompradora,
                idOrganizacionProveedora: data.idOrganizacionProveedora,
                rucProveedor: data.rucProveedor,
                rucComprador: data.rucComprador,
                flagPlazoPago: data.flagPlazoPago,
                flagRegistroEliminado: data.flagRegistroEliminado,
                flagOrigenComprobante: data.flagOrigenComprobante,
                flagOrigenCreacion: data.flagOrigenCreacion,
                idGuia: data.idGuia,
                iDoc: data.iDoc,
                idUsuarioCreacion: data.idUsuarioCreacion,
                idUsuarioModificacion: data.idUsuarioModificacion,
                idOrganizacionCreacion: data.idOrganizacionCreacion,
                idOrganizacionModificacion: data.idOrganizacionModificacion,
                razonSocialProveedor: data.razonSocialProveedor,
                razonSocialComprador: data.razonSocialComprador,
                moneda: data.moneda,
                fechaProgPagoComprobantePag: data.fechaProgPagoComprobantePag,
                fechaPagoComprobantePago: data.fechaPagoComprobantePago,
                fechaCreacion: data.fechaCreacion,
                fechaRegistro: data.fechaRegistro,
                fechaEmision: data.fechaEmision,
                fechaRecepcionComprobantePa: data.fechaRecepcionComprobantePa,
                fechaVencimiento: data.fechaVencimiento,
                fechaEnvio: data.fechaEnvio,
                fechaCambioEstado: data.fechaCambioEstado,
                observacionComprobante: data.observacionComprobante,
                obsPagoComprobantePago: data.obsPagoComprobantePago,
                condicionPago: data.condicionPago,
                tiempoPlazo: data.tiempoPlazo,
                documentoPago: data.documentoPago,
                documentoSap: data.documentoSap,
                formaPago: data.formaPago,
                tipoComprobante: data.tipoComprobante,
                estado : data.estado,
                version: data.version, 
                idUsuarioComprador: data.idUsuarioComprador,
                numoc: data.numoc,
                numeroGuia: data.numeroGuia,
                montoComprobante: data.montoComprobante,
                logo: data.logo,
                firma: data.firma,
                pagoTipoDocumento: data.pagoTipoDocumento,
                pagoNroDocument: data.pagoNroDocument,
                pagoMoneda: data.pagoMoneda,
                pagoBanco: data.pagoBanco,
                tipoDocumentoDescuento: data.tipoDocumentoDescuento,
                numeroDocumentoDescuento: data.numeroDocumentoDescuento,
                monedaDescuento: data.monedaDescuento,
                numeroCheque: data.numeroCheque,
                codigoInterno: data.codigoInterno,
                guiaPublicada: data.guiaPublicada,
                tipoFactura: data.tipoFactura,
                codigoErpProveedor: data.codigoErpProveedor,
                fechaHoraCreacion: data.fechaHoraCreacion,
                codigoSociedad: data.codigoSociedad,
                igv: data.igv,
                isc: data.isc,
                otrosTributos: data.otrosTributos,
                descuento: data.descuento,
                importeReferencial: data.importeReferencial ,
                subtotalComprobante: data.subtotalComprobante ,
                totalComprobante: data.totalComprobante ,
                pagoMontoPagadoUltimo: data.pagoMontoPagadoUltimo ,
                dctoMontoUltimo: data.dctoMontoUltimo ,
                idindicadorImpuesto: data.idindicadorImpuesto ,
                descripcionIndicadorImpuesto: data.descripcionIndicadorImpuesto ,
                tipoItem: data.tipoItem ,
                codigoErp: data.codigoErp ,
                codError: data.codError ,
                fechaDocumentoRetencion: data.fechaDocumentoRetencion ,
                descError: data.descError ,
                tipoEmision: data.tipoEmision ,
                porcentajeImpuesto: data.porcentajeImpuesto ,
                detraccion: data.detraccion ,
                idBienServicio: data.idBienServicio ,
                codigoBienServicio: data.codigoBienServicio ,
                descripcionBienServicio: data.descripcionBienServicio ,
                porcentajeDetraccion: data.porcentajeDetraccion ,
                idCondicionPago: data.idCondicionPago ,
                descripcionCondicionPago: data.descripcionCondicionPago ,
                llaveErp: data.llaveErp ,
                idTablaEstado: data.idTablaEstado ,
                idRegistroEstadoProveedor: data.idRegistroEstadoProveedor ,
                idRegistroEstadoComprador: data.idRegistroEstadoComprador ,
                idTablaMoneda: data.idTablaMoneda ,
                idRegistroMoneda: data.idRegistroMoneda ,
                idTablaTipoComprobante: data.idTablaTipoComprobante ,
                idRegistroTipoComprobante: data.idRegistroTipoComprobante ,
                idTipoComprobante: data.idTipoComprobante ,
                impuestoGvr: data.impuestoGvr ,
                montoPagado: data.montoPagado ,
                montoDescuento: data.montoDescuento ,
                fecSincronizado: data.fecSincronizado ,
                estadoSincronizado: data.estadoSincronizado ,
                generado: data.generado ,
                estadoComprobantePago: data.estadoComprobantePago,
                guiapublicada: data.guiapublicada,
                identidadEmisor: data.identidadEmisor,
                identidadReceptor: data.identidadReceptor
            }, {where: {id: id}});
        }
        else{
            return ComprobantePago.create({
                id: data.id,
                numeroComprobante: data.numeroComprobante,
                idProveedor: data.idProveedor,
                idOrganizacionCompradora: data.idOrganizacionCompradora,
                idOrganizacionProveedora: data.idOrganizacionProveedora,
                rucProveedor: data.rucProveedor,
                rucComprador: data.rucComprador,
                flagPlazoPago: data.flagPlazoPago,
                flagRegistroEliminado: data.flagRegistroEliminado,
                flagOrigenComprobante: data.flagOrigenComprobante,
                flagOrigenCreacion: data.flagOrigenCreacion,
                idGuia: data.idGuia,
                iDoc: data.iDoc,
                idUsuarioCreacion: data.idUsuarioCreacion,
                idUsuarioModificacion: data.idUsuarioModificacion,
                idOrganizacionCreacion: data.idOrganizacionCreacion,
                idOrganizacionModificacion: data.idOrganizacionModificacion,
                razonSocialProveedor: data.razonSocialProveedor,
                razonSocialComprador: data.razonSocialComprador,
                moneda: data.moneda,
                fechaProgPagoComprobantePag: data.fechaProgPagoComprobantePag,
                fechaPagoComprobantePago: data.fechaPagoComprobantePago,
                fechaCreacion: data.fechaCreacion,
                fechaRegistro: data.fechaRegistro,
                fechaEmision: data.fechaEmision,
                fechaRecepcionComprobantePa: data.fechaRecepcionComprobantePa,
                fechaVencimiento: data.fechaVencimiento,
                fechaEnvio: data.fechaEnvio,
                fechaCambioEstado: data.fechaCambioEstado,
                observacionComprobante: data.observacionComprobante,
                obsPagoComprobantePago: data.obsPagoComprobantePago,
                condicionPago: data.condicionPago,
                tiempoPlazo: data.tiempoPlazo,
                documentoPago: data.documentoPago,
                documentoSap: data.documentoSap,
                formaPago: data.formaPago,
                tipoComprobante: data.tipoComprobante,
                estado : data.estado,
                version: data.version, 
                idUsuarioComprador: data.idUsuarioComprador,
                numoc: data.numoc,
                numeroGuia: data.numeroGuia,
                montoComprobante: data.montoComprobante,
                logo: data.logo,
                firma: data.firma,
                pagoTipoDocumento: data.pagoTipoDocumento,
                pagoNroDocument: data.pagoNroDocument,
                pagoMoneda: data.pagoMoneda,
                pagoBanco: data.pagoBanco,
                tipoDocumentoDescuento: data.tipoDocumentoDescuento,
                numeroDocumentoDescuento: data.numeroDocumentoDescuento,
                monedaDescuento: data.monedaDescuento,
                numeroCheque: data.numeroCheque,
                codigoInterno: data.codigoInterno,
                guiaPublicada: data.guiaPublicada,
                tipoFactura: data.tipoFactura,
                codigoErpProveedor: data.codigoErpProveedor,
                fechaHoraCreacion: data.fechaHoraCreacion,
                codigoSociedad: data.codigoSociedad,
                igv: data.igv,
                isc: data.isc,
                otrosTributos: data.otrosTributos,
                descuento: data.descuento,
                importeReferencial: data.importeReferencial ,
                subtotalComprobante: data.subtotalComprobante ,
                totalComprobante: data.totalComprobante ,
                pagoMontoPagadoUltimo: data.pagoMontoPagadoUltimo ,
                dctoMontoUltimo: data.dctoMontoUltimo ,
                idindicadorImpuesto: data.idindicadorImpuesto ,
                descripcionIndicadorImpuesto: data.descripcionIndicadorImpuesto ,
                tipoItem: data.tipoItem ,
                codigoErp: data.codigoErp ,
                codError: data.codError ,
                fechaDocumentoRetencion: data.fechaDocumentoRetencion ,
                descError: data.descError ,
                tipoEmision: data.tipoEmision ,
                porcentajeImpuesto: data.porcentajeImpuesto ,
                detraccion: data.detraccion ,
                idBienServicio: data.idBienServicio ,
                codigoBienServicio: data.codigoBienServicio ,
                descripcionBienServicio: data.descripcionBienServicio ,
                porcentajeDetraccion: data.porcentajeDetraccion ,
                idCondicionPago: data.idCondicionPago ,
                descripcionCondicionPago: data.descripcionCondicionPago ,
                llaveErp: data.llaveErp ,
                idTablaEstado: data.idTablaEstado ,
                idRegistroEstadoProveedor: data.idRegistroEstadoProveedor ,
                idRegistroEstadoComprador: data.idRegistroEstadoComprador ,
                idTablaMoneda: data.idTablaMoneda ,
                idRegistroMoneda: data.idRegistroMoneda ,
                idTablaTipoComprobante: data.idTablaTipoComprobante ,
                idRegistroTipoComprobante: data.idRegistroTipoComprobante ,
                idTipoComprobante: data.idTipoComprobante ,
                impuestoGvr: data.impuestoGvr ,
                montoPagado: data.montoPagado ,
                montoDescuento: data.montoDescuento ,
                fecSincronizado: data.fecSincronizado ,
                estadoSincronizado: data.estadoSincronizado ,
                generado: data.generado ,
                estadoComprobantePago: data.estadoComprobantePago,
                guiapublicada: data.guiapublicada,
                identidadEmisor: data.identidadEmisor,
                identidadReceptor: data.identidadReceptor
            });
        }
    });
}


ComprobantePago.sincronizarDocumentoEstado = function sincronizarDocumentoEstado(data){
    ComprobantePago.findOne({where:{id:data.id}}).then(function(obj){
        return ComprobantePago.update({
            id: data.id,
            fecSincronizado:  dateFormat(new Date(), "yyyy-mm-dd HH:MM:ss"),
            estadoSincronizado: constantes.estadoActivo,
            estado: data.chEstadocomprobantepago,
            estadoComprobantePago: data.chEstadocomprobantepagocomp,
        }, {where: {id: data.id}}) ;
    });
}

ComprobantePago.estadosPendientes = function estadosPendientes(idTipoComprobante){
    return ComprobantePago.findAll({where: {estado: {[Op.lt]: 1}, idTipoComprobante: idTipoComprobante }});
}

ComprobantePago.sincronizarDocumentoErroneo = function sincronizarDocumentoErroneo(id){
    ComprobantePago.findOne({where:{id:id}}).then(function(obj){
        return ComprobantePago.update({
            id: id,
            fecSincronizado:  dateFormat(new Date(), "yyyy-mm-dd HH:MM:ss"),
            estadoSincronizado: constantes.estadoActivo,
            estado: constantes.inEstadoEliminadoLocal,
            estadoComprobantePago: constantes.estadoEliminadoLocal,
        }, {where: {id: id}}) ;
    });
}

ComprobantePago.sincronizarDocumento = function sincronizarDocumento(id){
    ComprobantePago.findOne({where:{id:id}}).then(function(obj){
        return ComprobantePago.update({
            id: id,
            fecSincronizado:  dateFormat(new Date(), "yyyy-mm-dd HH:MM:ss"),
            estadoSincronizado: constantes.estadoActivo,
        }, {where: {id: id}}) ;
    });
}
ComprobantePago.filtro = function comprobantePagoFiltro(){
    return ComprobantePago.findAll({ attributes: atributosComprobantePago.attributes ,
        include:[ 
            {
                model: DocEntidad,
                as: 'docEntidad', 
                attributes: atributosDocumentoEntidad.attributes,
                include:[

                    // {
                    //     model: Entidad,
                    //     attributes: atributosEntidad.attributes,
                    //     include:{
                    //         model: EntidadParametro,
                    //         attributes: atributosEntidadParametro.attributes,
                    //     },
                    // },
                    {
                        model: TipoEnt,
                        attributes: atributosTipoEntidad.attributes,
                    }

                ],
            },
            {
                model: DocReferencia,
                as: 'DocEntidad',
                attributes: atributosDocumentoReferencia.attributes
            }
        ],
        where: {
            estadoSincronizado: constantes.estadoInactivo
        }
      });
}



ComprobantePago.sincornizar = function comprobanteSincronizar(){
    return ComprobantePago.findAll({ attributes: atributosSincronizar.attributes ,
        include:[ 
            {
                model: documentoReferencia,
                as: 'facturasAfectadas', 
                attributes: atributosDocumentoReferencia.attributes,
            },
            {
                model: documentoEntidad,
                as: 'DocEntidad', 
                attributes: atributosDocumentoEntidad.attributes,
            },
        ],
        where: {
            estadoSincronizado: constantes.estadoInactivo
        }
      });
}

var atributosSincronizar = {
    attributes: [
                ['in_idcomprobantepago', 'idComprobanteOffline'], 
                'numeroComprobante',
                'rucComprador',
                'razonSocialComprador',
                //'correoProveedor',
                //'correoComprador',
                'moneda',
                'fechaEmision',
                'observacionComprobante',
                'montoPagado',
                'monedaDescuento',
                'montoDescuento',
                'totalComprobante',
                'tipoItem'
            ],
}

// "serie": "F002",
// "correlativo": "0000002",
// "fechaEmision": 1517892988428,
// "totalImporteSoles": "972",
// "totalRetenidoSoles": "29.16",
// "porcentajeRetenido": "3",
// "monedaOriginal": "USD",
// "totalMonedaOriginal": "300",
// "tipoDeCambio": "3.24",
// "totalFacturaConRetencion": "942.84"

var atributosDocumentoReferencia = {
    attributes: [
        ['ch_serie_dest','serie'], 
        ['ch_corr_dest','correlativo'],
        ['da_fec_emi_dest','fechaEmision'],
        ['nu_tot_imp_dest','totalImporteSoles'],
        ['nu_tot_imp_aux','totalRetenidoSoles'],
        [sequelize.literal('(COALESCE(nu_tot_imp_aux, 0) * 100) / COALESCE(nu_tot_imp_dest, 0)'),'porcentajeRetenido'],
        ['vc_mone_des','monedaOriginal'],
        ['de_tot_mone_des','totalMonedaOriginal'],
        ['vc_aux_1','tipoDeCambio'],
        [sequelize.literal('COALESCE(nu_tot_imp_dest, 0) + COALESCE(nu_tot_imp_aux, 0)'),'totalFacturaConRetencion']
    ],
}

var atributosDocumentoEntidad = {
    attributes: [
        'id',
        'tipoEntidad',
        'correo',
    ]
}

module.exports = ComprobantePago;