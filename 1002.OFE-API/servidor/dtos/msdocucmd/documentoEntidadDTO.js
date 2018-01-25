/**
 * @author --- Modificado **-**-****
 * @author renato creado 18-12-2017 
 */
var DocumentoEntidad = require('../../modelos/msdocucmd/documentoEntidad');
//const Op = conexion.Op;
 /**
 * Funcion que guarda los comprobantes de pago
 * 
 */

DocumentoEntidad.guardar = function guardarDocumento(data){    
    console.log(data);
    return DocumentoEntidad.create({
        idTipoEntidad: data.idTipoEntidad,
        idEntidad: data.idEntidad ,
        idComprobante: data.idComprobante ,
        usuarioCreacion: data.usuarioCreacion ,
        usuarioModifica: data.usuarioModifica ,
        fechaCreacion: data.fechaCreacion ,
        fechaModificacion: data.fechaModificacion ,
        estado: data.estado ,
        fechaSincronizacion: data.fechaSincronizacion ,
        estadoSincronizado: data.estadoSincronizado ,
        generado: data.generado ,
    });
}

module.exports = DocumentoEntidad;