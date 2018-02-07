/**
 * @author --- Modificado **-**-****
 * @author renato creado 18-12-2017 
 */
var Archivo = require('../../modelos/msoffline/archivo');
//const Op = conexion.Op;
 /**
 * Funcion que guarda los comprobantes de pago
 * 
 */

Archivo.guardar = function guardarComprobantePago(data){
    return Archivo.create({
        id: data.id,
        idComprobantePago: data.idComprobantePago,
        ubicacion: data.ubicacion,
        tipo: data.tipo,
        usuarioCreacion: data.usuarioCreacion,
        usuarioModificacion: data.usuarioModificacion,
        fechaCreacion: data.fechaCreacion,
        fechaModificacion: data.fechaModificacion,
        estado: data.estado,
        fechaSincronizado: data.fechaSincronizado,
        estadoSincronizado: data.estadoSincronizado
    });
}

module.exports = Archivo;