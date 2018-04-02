/**
 * @author --- Modificado **-**-****
 * @author renato creado 22-01-2018 
 */
var QueryTipoPrecVen = require('../../modelos/msoffline/queryTipoPrecVen');
 /**
 * Funcion que guarda los comprobantes de pago
 * 
 */

QueryTipoPrecVen.guardar = function guardarQueryTipoPrecVen(data){
    return QueryTipoPrecVen.create({
        id: data.idTipoPrecioVenta,
        idioma: data.idIdioma ,
        codigo: data.codigo ,
        descripcion: data.descripcion ,
        catalogo: data.catalogo ,
        usuarioCreacion: data.usuarioCreacion ,
        usuarioModificacion: data.usuarioModificacion ,
        fechaCreacion: data.fechaCreacion ,
        fechaModificacion: data.fechaModificacion ,
        fechaSincronizado: data.fechaSincronizado ,
        estadoSincronizado: data.estadoSincronizado ,
    });
}

module.exports = QueryTipoPrecVen;
