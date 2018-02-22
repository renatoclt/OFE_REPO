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

DocumentoEntidad.guardar = function guardarDocumentoEntidad(data){
    console.log('gasdfasd');
    return DocumentoEntidad.create({
        id: data.id,
        tipoEntidad: data.idTipoEntidad,
        entidad: data.idEntidad ,
        comprobantepago: data.idComprobante ,
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