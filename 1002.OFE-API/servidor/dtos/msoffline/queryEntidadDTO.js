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
        documento: data.documento ,
        denominacion: data.denominacion ,
        nombreComercial: data.nombreComercial ,
        direccion: data.direccion ,
        correo: data.correo ,
        logo: data.logo ,
        pais: data.pais ,
        ubigeo: data.ubigeo ,
        tipoDocumento: data.tipoDocumento ,
        idTipoDocumento: data.idTipoDocumento ,
        idEbiz: data.idEbiz ,
        usuarioCreacion: data.usuarioCreacion,
        usuarioModificacion: data.usuarioModificacion,
        fechaCreacion: data.fechaCreacion ,
        fechaModificacion: data.fechaModificacion ,
        estado: data.estado ,
        fechaSincronizado: data.fechaSincronizado ,
        estadoSincronizado: data.estadoSincronizado 
    });
}


QueryEntidadDTO.buscarGuardarActualizar = function buscarGuardarActualizar(data, id){
    return QueryEntidadDTO.findOne({where: {id: id}}).then(function(obj){
        if(obj){
            return QueryEntidadDTO.update({
                id: data.id,
                documento: data.documento,
                denominacion: data.denominacion,
                nombreComercial: data.nombreComercial,
                direccion: data.direccion,
                correo: data.correo,
                idEbiz: data.idEbiz,
                pais: data.pais ,
                ubigeo: data.ubigeo,
                tipoDocumento: data.tipoDocumento,
                idTipoDocumento: data.idTipoDocumento,
                usuarioCreacion: data.usuarioCreacion,
                usuarioModificacion: data.usuarioModificacion,
                fechaCreacion: data.fechaCreacion,
                fechaModificacion: data.fechaModificacion,
                estado: data.estado,
                fechaSincronizado: data.fechaSincronizado,
                estadoSincronizado: data.estadoSincronizado
            },  {where: {id: id}});
        }else{
            return QueryEntidadDTO.create({
                id: data.id,
                documento: data.documento,
                denominacion: data.denominacion,
                nombreComercial: data.nombreComercial,
                direccion: data.direccion,
                correo: data.correo,
                idEbiz: data.idEbiz,
                pais: data.pais ,
                ubigeo: data.ubigeo,
                tipoDocumento: data.tipoDocumento,
                idTipoDocumento: data.idTipoDocumento,
                usuarioCreacion: data.usuarioCreacion,
                usuarioModificacion: data.usuarioModificacion,
                fechaCreacion: data.fechaCreacion,
                fechaModificacion: data.fechaModificacion,
                estado: data.estado,
                fechaSincronizado: data.fechaSincronizado,
                estadoSincronizado: data.estadoSincronizado
            });
        }
    });
}

module.exports = QueryEntidadDTO;
