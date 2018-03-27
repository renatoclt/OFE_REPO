/**
 * @author --- Modificado **-**-****
 * @author renato creado 22-01-2018 
 */
var Evento = require('../../modelos/msoffline/evento');
//const Op = conexion.Op;
 /**
 * Funcion que guarda los comprobantes de pago
 */

Evento.guardar = function guardarEvento(data){
    return Evento.create({
        id: data.id,
        idioma: data.idioma,
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



module.exports = Evento