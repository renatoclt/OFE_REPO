/**
 * @author --- Modificado **-**-****
 * @author renato creado 22-01-2018 
 */
var QueryEstComprobante = require('../../modelos/msoffline/queryEstComprobante');
//const Op = conexion.Op;
 /**
 * Funcion que guarda los comprobantes de pago
 * 
 */

QueryEstComprobante.guardar = function guardarQueryEstComprobante(data){
    return QueryEstComprobante.create({
        id: data.id,
        idioma: data.idioma ,
        descripcion: data.descripcion ,
        abreviatura: data.abreviatura ,
        fechaSincronizado: data.fechaSincronizado ,
        estadoSincronizado: data.estadoSincronizado ,
    });
}

module.exports = QueryEstComprobante;
