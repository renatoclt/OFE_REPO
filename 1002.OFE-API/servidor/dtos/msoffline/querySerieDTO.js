/**
 * @author --- Modificado **-**-****
 * @author renato creado 22-01-2018 
 */
var QuerySerie = require('../../modelos/msoffline/querySerie');
 /**
 * Funcion que guarda los comprobantes de pago
 * 
 */

QuerySerie.guardar = function guardarQuerySerie(data){
    return QuerySerie.create({
        id: data.id,
        entidad: data.entidad ,
        tipoSerie: data.tipoSerie ,
        direccion: data.direccion ,
        serie: data.serie ,
        correlativo: data.correlativo ,
        dominioUbigeo: data.dominioUbigeo ,
        calculoIsc: data.calculoIsc ,
        usuarioCreacion: data.usuarioCreacion ,
        usuarioModificacion: data.usuarioModificacion ,
        fechaCreacion: data.fechaCreacion ,
        fechaModificacion: data.fechaModificacion ,
        fechaSincronizado: data.fechaSincronizado ,
        estadoSincronizado: data.estadoSincronizado ,        
    });
}

module.exports = QuerySerie;
