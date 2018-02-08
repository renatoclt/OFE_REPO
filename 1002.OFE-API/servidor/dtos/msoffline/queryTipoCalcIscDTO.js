/**
 * @author --- Modificado **-**-****
 * @author renato creado 22-01-2018 
 */
var QueryTipoCalcIsc = require('../../modelos/msoffline/queryTipoCalcIsc');
 /**
 * Funcion que guarda los comprobantes de pago
 * 
 */

QueryTipoCalcIsc.guardar = function guardarQueryTipoCalcIsc(data){
    return QueryTipoCalcIsc.create({
        id: data.id,
        idioma: data.idioma ,
        codigo: data.codigo ,
        descripcion: data.descripcion ,
        afectaIgv: data.afectaIgv ,
        catalogo: data.catalogo ,
        usuarioCreacion: data.usuarioCreacion ,
        usuarioModificacion: data.usuarioModificacion ,
        fechaCreacion: data.fechaCreacion ,
        fechaModificacion: data.fechaModificacion ,
        fechaSincronizado: data.fechaSincronizado ,
        estadoSincronizado: data.estadoSincronizado ,
    });
}

module.exports = QueryTipoCalcIsc;
