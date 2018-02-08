/**
 * @author --- Modificado **-**-****
 * @author renato creado 22-01-2018 
 */
var QueryDocRefenci = require('../../modelos/msoffline/queryDocReferenci');
//const Op = conexion.Op;
 /**
 * Funcion que guarda los comprobantes de pago
 * 
 */

QueryDocRefenci.guardar = function guardarDocReferencia(data){    
    return QueryDocRefenci.create({
        id: data.id,
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
        estadoSincronizado: data.estadoSincronizado ,
        usuarioCreacion : data.usuarioCreacion ,
        usuarioModificacion: data.usuarioModificacion ,
        fechaCreacion: data.fechaCreacion ,
        fechaModificacion: data.fechaModificacion ,
        estado: data.estado ,
        fechaSincronizado: data.fechaSincronizado 

    });
}

module.exports = QueryDocRefenci;