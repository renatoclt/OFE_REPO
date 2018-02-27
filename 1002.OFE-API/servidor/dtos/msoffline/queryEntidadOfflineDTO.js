/**
 * @author --- Modificado **-**-****
 * @author renato creado 22-01-2018 
 */
var EntidadQueryOffline = require('../../modelos/msoffline/EntidadQueryOffline');
//const Op = conexion.Op;
 /**
 * Funcion que guarda los comprobantes de pago
 * 
 */

EntidadQueryOffline.guardar = function guardarEntidadQueryOffline(data){
    return EntidadQueryOffline.create({
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

module.exports = EntidadQueryOffline;
