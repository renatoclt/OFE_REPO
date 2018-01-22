/**
 * @author --- Modificado **-**-****
 * @author renato creado 22-01-2018 
 */
var Concepto = require('../../modelos/msoffline/concepto');
//const Op = conexion.Op;
 /**
 * Funcion que guarda los comprobantes de pago
 * 
 */

Concepto.guardar = function guardarConcepto(data){
    return Concepto.create({
        id: data.id,
        idioma: data.idioma,
        codigo: data.codigo,
        descripcion: data.descripcion,
        catalogo: data.catalogo,
        usuarioCreacion: data.usuarioCreacion,
        usuarioModificacion: data.usuarioModificacion,
        fechaCreacion: data.fechaCreacion,
        fechaModificacion: data.fechaModificacion,
        estado: data.estado,
        fechaSincronizado: data.fechaSincronizado,
        estadoSincronizado: data.estadoSincronizado
    });
}

module.exports = Concepto;