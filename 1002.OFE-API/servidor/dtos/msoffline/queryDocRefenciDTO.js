/**
 * @author --- Modificado **-**-****
 * @author renato creado 22-01-2018 
 */
var QueryDocReferenci = require('../../modelos/msoffline/queryReferenci');
//const Op = conexion.Op;
 /**
 * Funcion que guarda los comprobantes de pago
 * 
 */

QueryDocReferenci.guardar = function guardarQueryDocReferenci(data){
    return QueryDocReferenci.create({
        id: data.id,
        : data. ,
        
    });
}

module.exports = QueryDocReferenci;
