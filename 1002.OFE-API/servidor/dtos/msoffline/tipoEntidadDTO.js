/**
 * @author --- Modificado **-**-****
 * @author renato creado 22-01-2018 
 */
var TipoEntidad = require('../../modelos/msoffline/tipoEntidad');
//const Op = conexion.Op;
 /**
 * Funcion que guarda los comprobantes de pago
 * 
 */

TipoEntidad.guardar = function guardarTipoEntidad(data){
    return TipoEntidad.create({
        id: data.id,
        descripcion: data.descripcion,
        usuarioCreacion: data.usuarioCreacion,
        usuarioModificacion: data.usuarioModificacion,
        fechaCreacion: data.fechaCreacion,
        fechaModificacion: data.fechaModificacion,
        estado: data.estado,
        fechaSincronizado: data.fechaSincronizado,
        estadoSincronizado: data.estadoSincronizado
    });
}

module.exports = TipoEntidad;