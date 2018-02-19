var constantes = {
    estadoActivo: '1',
    estadoInactivo: '0',
    usuarioOffline: 'offline',
    vacio: ' ',
    renato: 'renato', //valores para asignar incidencias testing
    miguel: 'miguel', //valores para asignar incidencias testing
    jose: 'jose', //valores para asignar incidencias testing
    manuel: 'manuel', //valores para asignar incidencias para testing
    pais: '1',//valor en t_parametro_ent
    tiposDocumentoIdentidad: '2',//valor en t_parametro_ent
    ubigeo: '3',//valor en t_parametro_ent
    logo: '4',//valor en t_parametro_ent
    notificarCorreo: '5',//valor en t_parametro_ent
    idTipocomprobanteRetencion: '20', // valor del id del conprobante tipo de retencion,
    idTipocomprobanteFactura: '01', // valor del id del conprobante tipo de factura
    idTipocomprobanteBoleta: '03', // valor del id del conprobante tipo de boleta
    idTipocomprobantePercepcion: 'PR', // valor del id del conprobante tipo de guias de remision
    numeroDeComprobante: '15', // Comunicación de Baja - Número de Comprobante
    motivoBaja: '16', //Comunicación de Baja - Motivo de Baja
    fechaBaja: '12', //Comunicacion de baja - Fecha de baja
    bloqueoLocal: 'Bloqueado Local', // Estado Bloqueado falta sincronizacion
    /**
     * Constantes de API
     */
    FILECMD: {
        tipos_entidad: {
            emisor: '1',
            receptor: '2',
            transportista: '3'
        },
        conceptos: {
            retencion: '7',
            operacionesGravadas: '1',
            operacionesInafectas: '2',
            operacionesExoneradas: '3',
            otrosCargos: '12',
        },
        tipos_documento: {
            factura: '01',
            boleta: '03',
            notaCredito: '07',
            notaDebito: '08',
            retencion: '20',
            comunicacionBajaComprobantes: 'RA',
            comunicacionBajaNotas: 'RR',
        },
        tipos_documentos_descripcion: {
            factura: 'FACTURA',
            boleta: 'BOLETA',
            notaCredito: 'NOTA DE CREDITO',
            notaDebito: 'NOTA DE DEBITO',
            retencion: 'RETENCION',
            comunicacionBaja: 'COMUNICACION DE BAJA'
        },
        parametros_entidad: {
            logo: '6',
            plantillaFactura: '7',
            plantillaBoleta: '8',
            plantillaNotaCredito: '9',
            plantillaNotaDebito: '10',
            plantillaGuiaRemision: '11',
            plantillaRetencion: '12',
            plantillaPercepcion: '13',
        },
        plantillas: {
            comprobantes: "facturas.xml",         // Facturas, Boletas
            notas: "notas.xml",       // Crédito, Débito
            retencion: "retenciones-final.xml",
            comunicacion: "comunicacion_baja.xml",
            resumen: "resumen_diario.xml",
            logo: "logo.png",
            logoEbiz: "logo_ebiz.png",
        },
        tipos_archivo: {
            pdf: '1',
            xml: '2',
            cdr: '3',
        }
    },


}
module.exports = constantes;