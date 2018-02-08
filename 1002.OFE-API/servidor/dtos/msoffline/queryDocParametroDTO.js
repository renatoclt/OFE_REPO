/**
 * @author --- Modificado **-**-****
 * @author renato creado 22-01-2018 
 */
var QueryDocParametro = require('../../modelos/msoffline/queryDocReferenci');
//const Op = conexion.Op;
 /**
 * Funcion que guarda los comprobantes de pago
 * 
 */

QueryDocParametro.guardar = function guardarQueryDocParametro(data){
    return QueryDocReferenci.create({
        id: data.id,
        comprobantePago: data.comprobantePago ,
        parametroDoc: data.parametroDoc ,
        json: data.json ,
        tipo: data.tipo ,
        valor: data.valor ,
        auxEntero: data.auxEntero ,
        auxImporte: data.auxImporte ,
        auxFecha: data.auxFecha ,
        auxCaracter: data.auxCaracter ,    
        fechaSincronizado: data.fechaSincronizado ,    
        estadoSincronizado: data.estadoSincronizado ,                    
    });
}

module.exports = QueryDocParametro;
