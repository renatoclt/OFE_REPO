/**
 * @author --- Modificado **-**-****
 * @author renato creado 20-02-2018 
 */
var DocumentosAzure = require('../../modelos/msoffline/documentoAzure');
//const Op = conexion.Op;
 /**
 * Funcion que guarda los comprobantes de pago
 * 
 */

DocumentosAzure.guardar = function guardarDocumentosAzure(data){
    return DocumentosAzure.create({
        id: data.id,
        idEntidad: data.idEntidad,
        logoEntidad: data.logoEntidad,
        logoEbiz: data.logoEbiz,
        tipoComprobante: data.tipoComprobante,
        plantillaPdf: data.plantillaPdf,
        usuarioCreacion: data.usuarioCreacion,
        usuarioModificacion: data.usuarioModificacion,
        fechaCreacion: data.fechaCreacion,
        fechaModificacion: data.fechaModificacion,
        estado: data.estado,
        fechaSincronizado: data.fechaSincronizado,
        estadoSincronizado: data.estadoSincronizado
    });
}

DocumentosAzure.mostarPlantilla = function(entidad, idTipoComprobante){
    return DocumentosAzure.findAll({ attributes: filtroAtributos.attributes ,
        where: {
            idEntidad: entidad , tipoComprobante: idTipoComprobante
        }
      });

}
DocumentosAzure.buscar = function buscarDocumentoAzure(idEntidad, idTipoComprobante){
    return DocumentosAzure.findOne({ where: {idEntidad: idEntidad, tipoComprobante: idTipoComprobante } });
}

var filtroAtributos = {
    attributes: [
                'id', 
                'idEntidad',
                'tipoComprobante',
                'logoEntidad',
                'logoEbiz',
                'plantillaPdf'],
}

module.exports = DocumentosAzure;