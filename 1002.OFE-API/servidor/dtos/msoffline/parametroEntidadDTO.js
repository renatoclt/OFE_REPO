
/**
 * @author --- Modificado **-**-****
 * @author renato creado 22-01-2018 
 */
var ParametroEntidad = require('../../modelos/msoffline/parametroEntidad');
//const Op = conexion.Op;
 /**
 * Funcion que guarda los comprobantes de pago
 * 
 */

ParametroEntidad.guardar = function guardarParametroEntidad(data){
    return ParametroEntidad.create({
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

module.exports = ParametroEntidad;