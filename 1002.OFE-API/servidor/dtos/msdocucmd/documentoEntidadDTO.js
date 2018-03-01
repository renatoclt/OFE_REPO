/**
 * @author --- Modificado **-**-****
 * @author renato creado 18-12-2017 
 */
var DocumentoEntidad = require('../../modelos/msoffline/docEntidad');
//const Op = conexion.Op;
 /**
 * Funcion que guarda los comprobantes de pago
 * 
 */

DocumentoEntidad.guardarEntidad = function guardarDocumentoEntidad(data){
    return DocumentoEntidad.create({
        tipoEntidad: data.idTipoEntidad,
        entidad: data.idEntidad ,
        comprobantepago: data.idComprobante ,
        correo: data.correo,
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