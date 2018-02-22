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

module.exports = DocumentosAzure;