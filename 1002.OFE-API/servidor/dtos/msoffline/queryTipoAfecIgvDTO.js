/**
 * @author --- Modificado **-**-****
 * @author renato creado 22-01-2018 
 */
var QueryTipoAfecIgv = require('../../modelos/msoffline/queryTipoAfecIgv');
 /**
 * Funcion que guarda los comprobantes de pago
 * 
 */

QueryTipoAfecIgv.guardar = function guardarQueryTipoAfecIgv(data){
    return QueryTipoAfecIgv.create({
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

module.exports = QueryTipoAfecIgv;
