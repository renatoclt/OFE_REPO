/**
 * @author --- Modificado **-**-****
 * @author renato creado 22-01-2018 
 */
var Idioma = require('../../modelos/msoffline/idioma');
//const Op = conexion.Op;
 /**
 * Funcion que guarda los comprobantes de pago
 * 
 */

Idioma.guardar = function guardarIdioma(data){
    return Idioma.create({
        id: data.id,
        descripcion: data.descripcion,
        descripcionCorta: data.descripcionCorta,
        usuarioCreacion: data.usuarioCreacion,
        usuarioModificacion: data.usuarioModificacion,
        fechaCreacion: data.fechaCreacion,
        fechaModificacion: data.fechaModificacion,
        estado: data.estado,
        fechaSincronizado: data.fechaSincronizado,
        estadoSincronizado: data.estadoSincronizado
    });
}

module.exports = Idioma;