/**
 * @author --- Modificado **-**-****
 * @author renato creado 22-01-2018 
 */
var DocParametro = require('../../modelos/msoffline/DocParametro');
//const Op = conexion.Op;
 /**
 * Funcion que guarda los comprobantes de pago
 * 
 */

DocParametro.guardar = function guardarDocEntidad(data){    
    return DocParametro.create({
        id: data.id,
        evento: data.evento, 
        entidad: data.entidad, 
        comprobantePago: data.comprobantePago, 
        desc: data.desc, 
        estEvento: data.estEvento,
        usuarioCreacion: data.usuarioCreacion,
        usuarioModificacion: data.usuarioModificacion,
        fechaCreacion: data.fechaCreacion,
        fechaModificacion: data.fechaModificacion,
        estado: data.estado,
        fechaSincronizado: data.fechaSincronizado,
        estadoSincronizado: data.estadoSincronizado
    });
}

module.exports = DocParametro;