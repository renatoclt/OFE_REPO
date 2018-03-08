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

QueryComprobanteEvento.guardar = function guardarQueryComprobanteConcepto(data, id){
    return QueryComprobanteEvento.findOne({where: {id: id}}).then(function(obj){
        if(obj){
            return QueryComprobanteEvento.update({
                id: data.seIdocevento,
                comprobante: data.inIdcomprobante ,
                evento: data.inIdevento ,
                idioma: data.inIidioma ,
                descripcionEvento: data.vcDescripcionEvento ,
                observacionEvento: data.vcObservacionEvento ,
                estadoEvento: data.inEstadoEvento ,
                fechaCreacion: data.fechaCreacion ,
                usuarioCreacion: data.usuarioCreacion 
            }, {where: {id: id}})
        }
        else{
            return QueryComprobanteEvento.create({
                id: data.seIdocevento,
                comprobante: data.inIdcomprobante ,
                evento: data.inIdevento ,
                idioma: data.inIidioma ,
                descripcionEvento: data.vcDescripcionEvento ,
                observacionEvento: data.vcObservacionEvento ,
                estadoEvento: data.inEstadoEvento ,
                fechaCreacion: data.fechaCreacion ,
                usuarioCreacion: data.usuarioCreacion 
            })
        }

    });
}

module.exports = QueryComprobanteEvento;
