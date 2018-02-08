/**
 * @author --- Modificado **-**-****
 * @author renato creado 22-01-2018 
 */
var QueryParametroDominioDoc = require('../../modelos/msoffline/queryParametroDominioDoc');
//const Op = conexion.Op;
 /**
 * Funcion que guarda los comprobantes de pago
 * 
 */

QueryParametroDominioDoc.guardar = function guardarQueryParametroDominioDoc(data){
    return QueryParametroDominioDoc.create({
        id: data.id,
        parametroDocumento: data.parametroDocumento ,
        descripcionDocumento: data.descripcionDocumento ,
        dominioDocumento: data.dominioDocumento ,
        idioma: data.idioma ,
        codigo: data.codigo ,
        descripcion: data.descripcion ,
        descripcionCorta: data.descripcionCorta ,
        estadoParametro: data.estadoParametro ,
        estadoDominio: data.estadoDominio ,
        fechaSincronizado: data.fechaSincronizado ,
        estadoSincronizado: data.estadoSincronizado 
    });
}

module.exports = QueryParametroDominioDoc;
