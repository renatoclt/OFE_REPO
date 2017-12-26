/**
 * @author --- Modificado **-**-****
 * @author renato creado 18-12-2017 
 */
var ComprobantePago = require('../../modelos/comprobantes/comprobantePago')

 /**
 * Funcion que guarda los comprobantes de pago
 * 
 */
ComprobantePago.guardar = function maestraGuardar(data){
    return ComprobantePago.create({
        id: data.id,
        numeroComprobante: data.numeroComprobante,
        idOrganizacionCompradora: data.idOrganizacionCompradora,
        idOrganizacionProveedora:data.idOrganizacionProveedora,
        rucProveedor:data.rucProveedor,
        rucComprador:data.rucComprador,
        estadoComprobantePago:data.estadoComprobante,
        flagPlazoPago:data.flagPlazopago,
        flagRegistroEliminado: data.flagRegistroEliminado,
        flagOrigenComprobantePago:data.flagOrigenComprobante,
        flagorIGencreacion:data.flagOrigenCreacion,
        idTablaTipoComprobante: data.idTablaTipoComprobante,
        idRegistroTipoComprobante: data.idRegistroTipoComprobante,
        idTablaTipoComprobante: data.idTipoComprobante,
        idGuia: data.idGuia,
        idUsuarioCreacion:data.idUsuarioCreacion,
        idUsuarioModificacion:data.idUsuarioModificacion,
        razonSocialProveedora: data.razonSocialProveedor,
        razonSocialCompradora: data.razonSocialComprador,
        moneda: data.moneda,
        fechaCreacion: data.fechaCreacion,
        fechaRegistro: data.fechaRegistro,
        fechaEmision: data.fechaEmision,
        fechaVencimiento: data.fechaVencimiento,
        fechaEnvio: data.fechaEnvio,
        fechaCambioEstado: data.fechaCambioEstado,
        observacionComprobante: data.observacionComprobante,
        impuestoGvr: data.impuestoGvr,
        tipoComprobante: data.tipoComprobante,
        estado: data.estado,
        version: data.version,
        numeroGuia:data.numeroGuia,
        montoComprobante:data.montoComprobante,
        logo:data.logo,
        firma:data.firma,
        montoPagado:data.montoPagado,
        pagoBanco:data.pagoBanco,
        tipoDocumentoDescuento:data.tipoDocumentoDescuento,
        numeroDocumentoDescuento:data.numeroDocumentoDescuento,
        monedaDescuento:data.monedaDescuento,
        montoDescuento:data.montoDescuento,
        numeroCheque:data.numeroCheque,
        tipoFactura:data.tipoFactura,
        igv:data.igv,
        isc:data.isc,
        otrosTributos:data.otrosTributos,
        descuento:data.descuento,
        importeReferencial:data.importeReferencial,
        subtotalComprobante:data.subtotalComprobante,
        totalComprobante:data.totalComprobante,
        idIndicadorImpuesto:data.idIndicadorImpuesto,
        descripcionIndicadorImpuesto:data.descripcionIndicadorImpuesto,
        tipoItem:data.tipoItem,
        fechaDocumentoRetencion:data.fechaDocumentoRetencion,
        tipoEmision:data.tipoEmision,
        porcentajeImpuesto:data.porcentajeImpuesto,
        porcentajeDetracction:data.porcentajeDetracction,
        idTablaEstado:data.idTablaEstado,
        idRegistroEstadoProveedor:data.idRegistroEstadoProveedor,
        idRegistroEstadoComprador:data.idRegistroEstadoComprador,
        idTablaMoneda:data.idTablaMoneda,
        idRegistroMoneda:data.idRegistroMoneda,
        estadoComprobante: constantes.estadoActivo
    });
}

module.exports = ComprobantePago;