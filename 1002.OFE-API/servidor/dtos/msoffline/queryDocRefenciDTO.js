/**
 * @author --- Modificado **-**-****
 * @author renato creado 22-01-2018 
 */
var QueryDocReferenci = require('../../modelos/msoffline/queryDocReferenci');
//const Op = conexion.Op;
 /**
 * Funcion que guarda los comprobantes de pago
 * 
 */

QueryDocReferenci.guardar = function guardarQueryDocReferenci(data){
    return QueryDocReferenci.create({
        id: data.id,
        docOrigen: data.docOrigen ,
        documentoDestino: data.documentoDestino ,
        tipoDocumentoOrigen: data.tipoDocumentoOrigen ,
        concepto: data.concepto ,
        serieDestino: data.serieDestino ,
        corrDest: data.corrDest ,
        fechaEmisionDestino: data.fechaEmisionDestino ,
        totalImpustoDestino: data.totalImpustoDestino ,
        totalPorAuxiliar: data.totalPorAuxiliar ,
        tdocoriDesc: data.tdocoriDesc ,
        usuarioCreacion: data.usuarioCreacion ,
        usuarioModificacion: data.usuarioModificacion ,
        fechaCreacion: data.fechaCreacion ,
        fechaModificacion: data.fechaModificacion ,
        estado: data.estado ,
        fechaSincronizado: data.fechaSincronizado ,
        estadoSincronizado: data.estadoSincronizado ,
                
    });
}

module.exports = QueryDocReferenci;
