/**
 * @author --- Modificado **-**-****
 * @author renato creado 22-01-2018 
 */
var QueryEntidadDTO = require('../../modelos/msoffline/queryEntidad');
//const Op = conexion.Op;
 /**
 * Funcion que guarda los comprobantes de pago
 * 
 */

QueryEntidadDTO.guardar = function guardarQueryEntidadDTO(data){
    return QueryEntidadDTO.create({
        id: data.id,
        entidad: data.entidad ,
        paramEntidad: data.paramEntidad ,                             
        json: data.json ,
        tipo: data.tipo ,
        valor: data.valor ,
        auxEntero: data.auxEntero ,
        auxCaracter: data.auxCaracter ,
        fechaSincronizado: data.fechaSincronizado ,
        estadoSincronizado: data.estadoSincronizado
    });
}

module.exports = QueryEntidadDTO;
