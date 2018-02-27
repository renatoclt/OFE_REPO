/**
 * @author --- Modificado **-**-****
 * @author renato creado 18-12-2017 
 */
var ComprobantePago = require('../../modelos/msoffline/comprobantePago');
//const Op = conexion.Op;
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
        guiapublicada: data.guiapublicada
    });
}


ComprobantePago.filtro = function comprobantePagoFiltro(){
    return ComprobantePago.findAll({ attributes: atributosComprobantePago.attributes ,
        include:[ 
            {
                model: DocEntidad,
                as: 'documentoEntidad', 
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
                as: 'documentoReferencia',
                attributes: atributosDocumentoReferencia.attributes
            }
        ],
        where: {
            estadoSincronizado: constantes.estadoInactivo
        }
      });
}

module.exports = ComprobantePago;