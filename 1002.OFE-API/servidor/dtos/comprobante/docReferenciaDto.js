/**
 * @author --- Modificado **-**-****
 * @author renato creado 18-12-2017 
 */
var DocReferencia = require('../../modelos/comprobantes/docReferencia')

/**
 * Funcion que guarda docReferencia
 * 
 */
DocReferencia.guardar = function docReferenciaGuardar(data){
    return DocReferencia.create({
        id: data.id,
        idDocumentoOrigen: data.idDocumentoOrigen,
        idDocumentoDestino: data.idDocumentoDestino,
        tipoDocumentoOrigen: data.tipoDocumentoOrigen,
        tipoDocumentoDestino: data.tipoDocumentoDestino,
        serieDocumentoDestino: data.serieDocumentoDestino,
        correlativoDocumentoDestino: data.correlativoDocumentoDestino,
        fechaEmisionDestino: data.fechaEmisionDestino,
        totalImporteDestino: data.totalImporteDestino,
        totalImporteAuxiliarDestino:data.totalImporteAuxiliarDestino,
        totalPorcentajeAuxiliarDestino:data.totalPorcentajeAuxiliarDestino,
        tipoDocumentoOrigenDescripcion:data.tipoDocumentoOrigenDescripcion,
        tipoDocumentoDestinoDescripcion:data.tipoDocumentoDestinoDescripcion,
        monedaDestino: data.monedaDestino,
        totalMonedaDestino:data.totalMonedaDestino,
        polizaFactura: data.polizaFactura,
        anticipo: data.anticipo,
        auxiliar1: data.auxiliar1,
        auxiliar2: data.auxiliar2,
        estadoSincronizado: constantes.estadoInactivo,
        usuarioCreacion:data.usuarioCreacion,
        usuarioModificacion: data.usuarioModificacion,
        fechaCreacion:data.fechaCreacion,
        fechaModificacion:data.fechaModificacion,
        estado: constantes.estadoActivo,
        fechaSincronizado: data.fechaSincronizado
    });
}
module.exports = DocReferencia;
