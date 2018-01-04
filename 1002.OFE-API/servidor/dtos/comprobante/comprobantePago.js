/**
 * @author --- Modificado **-**-****
 * @author renato creado 18-12-2017 
 */
var ComprobantePago = require('../../modelos/comprobantes/comprobantePago');
var DocEntidad = require('../../modelos/comprobantes/docEntidad');
var Entidad = require('../../modelos/organizaciones/entidad');
var EntidadParametro = require('../../modelos/organizaciones/entidadParametro')
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
        razonSocialProveedor: data.razonSocialProveedor,
        razonSocialComprador: data.razonSocialComprador,
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
        estadoComprobante: constantes.estadoActivo,
        estadoSincronizado: constantes.estadoInactivo
    });
}

ComprobantePago.filtro = function comprobantePagoFiltro(){
    return ComprobantePago.findAll({ attributes: atributosComprobantePago.attributes ,
        include:[ 
            {
                model: DocEntidad,
                as: 'documentoEntidad',
                attributes: atributosDocumentoEntidad.attributes,
                include:{
                    model: Entidad,
                    include:{
                        model: EntidadParametro
                    }
                }
            }
        ],
        where: {
            estadoSincronizado: constantes.estadoInactivo
        }
      });
}

var atributosComprobantePago = {
    attributes: [
                'id', 
                'idTipoComprobante',
                'numeroComprobante',
                //'idSerie',
                'idProveedor',
                'idOrganizacionCompradora',
                'rucProveedor',
                'rucComprador',
                'estadoComprobante',
                //'usuarioCreacion',
                //'usuarioModificacion',
                'razonSocialComprador',
                'razonSocialProveedor',
                'moneda',
                'fechaCreacion',
                'fechaRegistro',
                'fechaEmision',
                'idTablaTipoComprobante',
                'observacionComprobante',
                'idRegistroTipoComprobante',
                'tipoComprobante',
                'version',
                'montoComprobante',
                'montoPagado',
                'montoDescuento',
                'fechaDocumentoRetencion',
                'totalComprobante',
            ],
}

var atributosDocumentoReferencia = {
    attributes: [
                'idDocumentoOrigen', 
                'idDocumentoDestino',
                'tipoDocumentoOrigen',
                'tipoDocumentoDestino',
                'serieDocumentoDestino',
                'correlativoDocumentoDestino',
                'totalImporteDestino',
                'totalImporteAuxiliarDestino',
                'totalPorcentajeAuxiliarDestino',
                'tipoDocumentoOrigenDescripcion',
                'tipoDocumentoDestinoDescripcion',
                'monedaDestino',
                'totalMonedaDestino',
                'auxiliar1',
                'polizaFactura',
                'anticipo',
                'fechaEmisionDestino',
                'observaciones',
                'idMoneda'
            ],
}

var atributosDocumentoEntidad = {
    attributes: [
                'usuarioCreacion', 
                'usuarioModificacion',
                'fechaCreacion',
                'fechaModificacion',
                'estado',
                'id',
                'idTipoEntidad',
                //'tipoDocumento',
                //'ubigeo',
                //'departamento',
                //'provincia',
                //'distrito',
                //'direccionFiscal',
                //'correo',
                //'idComprobante'
            ],
}
var atributosEntidad = {
    attributes: [
        'id',//idEntidad
        'documento',
        'denominacion'
    ]
}
var atributosTipoEntidad = {
    attributes: [
        'descripcionTipoEntidad'
    ]
}

var atributosEntidadParametro = {
    attributes: [
        'vc_json'
    ]
}


module.exports = ComprobantePago;