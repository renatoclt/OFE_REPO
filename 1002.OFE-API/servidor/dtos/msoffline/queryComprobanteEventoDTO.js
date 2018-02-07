/**
 * @author --- Modificado **-**-****
 * @author renato creado 22-01-2018 
 */
var QueryComprobanteEvento = require('../../modelos/msoffline/queryComprobanteEvento');
//const Op = conexion.Op;
 /**
 * Funcion que guarda los comprobantes de pago
 * 
 */

QueryComprobanteEvento.guardar = function guardarQueryComprobanteConcepto(data){
    return QueryComprobanteEvento.create({
        id: data.id,
        comprobante: data.comprobante ,
        evento: data.evento ,
        idioma: data.idioma ,
        descripcionEvento: data.descripcionEvento ,
        observacionEvento: data.observacionEvento ,
        estadoEvento: data.estadoEvento ,
        fechaCreacion: data.fechaCreacion ,
        usuarioCreacion: data.usuarioCreacion ,

    });
}

module.exports = QueryComprobanteEvento;
