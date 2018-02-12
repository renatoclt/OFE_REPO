/**
 * @author --- Modificado **-**-****
 * @author renato creado 22-01-2018 
 */
var QueryIdioma = require('../../modelos/msoffline/queryIdioma');
//const Op = conexion.Op;
 /**
 * Funcion que guarda los comprobantes de pago
 * 
 */

QueryIdioma.guardar = function guardarQueryIdioma(data){
    console.log('*************');
    console.log(data);
    return QueryIdioma.create({
        id: data.id,
        descripcion: data.descripcion ,
        descripcionCorta: data.descripcionCorta ,
        usuarioCreacion: data.usuarioCreacion ,
        usuarioModificacion: data.usuarioModificacion ,
        fechaCreacion: data.fechaCreacion ,
        fechaModificacion: data.fechaModificacion ,
        fechaSincronizado: data.fechaSincronizado ,
        estadoSincronizado: data.estadoSincronizado ,
    });
}

module.exports = QueryIdioma;
