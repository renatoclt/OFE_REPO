/**
 * @author --- Modificado **-**-****
 * @author renato creado 19-01-2018
 */
var DocumentoReferencia = require('../../modelos/msdocucmd/documentoReferencia');
//const Op = conexion.Op;
 /**
 * Funcion que guarda los comprobantes de pago
 * 
 */

DocumentoReferencia.guardar = function guardarDocumento(data){    
    return DocumentoReferencia.create({
        idDocumentoOrigen: data.idDocumentoOrigen ,
        idDocumentoDestino: data.idDocumentoDestino ,
        tipoDocumentoOrigen: data.tipoDocumentoOrigen ,
        tipoDocumentoDestino: data.tipoDocumentoDestino ,
        serieDocumentoDestino: data.serieDocumentoDestino ,
        correlativoDocumentoDestino: data.correlativoDocumentoDestino ,
        fechaEmisionDestino: data.fechaEmisionDestino ,
        totalImporteDestino: data.totalImporteDestino ,
        totalImporteAuxiliarDestino: data.totalImporteAuxiliarDestino ,
        totalPorcentajeAuxiliarDestino: data.totalPorcentajeAuxiliarDestino ,
        tipoDocumentoOrigenDescripcion: data.tipoDocumentoOrigenDescripcion ,
        tipoDocumentoDestinoDescripcion: data.tipoDocumentoDestinoDescripcion ,
        monedaDestino: data.monedaDestino ,
        totalMonedaDestino: data.totalMonedaDestino ,
        polizaFactura: data.polizaFactura ,
        anticipo: data.anticipo ,
        auxiliar1: data.auxiliar1 ,
        auxiliar2: data.auxiliar2 ,
        usuarioCreacion: data.usuarioCreacion ,
        usuarioModifica: data.usuarioModifica ,
        fechaCreacion: data.fechaCreacion ,
        fechaModificacion: data.fechaModificacion ,
        estado: data.estado ,
        fechaSincronizacion: data.fechaSincronizacion ,
        estadoSincronizado: data.estadoSincronizado ,
        generado : data.generado ,
    });
}

module.exports = DocumentoReferencia;