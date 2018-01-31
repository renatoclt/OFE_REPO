/**
 * @author --- Modificado **-**-****
 * @author renato creado 22-01-2018 
 */
var Maestra = require('../../modelos/msoffline/maestra');
//const Op = conexion.Op;
 /**
 * Funcion que guarda los comprobantes de pago
 * 
 */

Maestra.guardar = function guardarMaestra(data){
    return Maestra.create({
        organizacion: data.organizacion,
        tabla: data.tabla,
        codigo: data.codigo ,
        descripcionCorta: data.descripcionCorta ,
        descripcionLarga: data.descripcionLarga ,
        descripcionLargaIngles: data.descripcionLargaIngles,
        tipo: data.tipo,
        iso: data.iso ,
        equivalencia: data.equivalencia ,
        equivalenciaSalida: data.equivalenciaSalida ,
        habilitado: data.habilitado ,
        orden: data.orden ,
        default: data.default ,
        idTablaPadre: data.idTablaPadre ,
        registroPadre: data.registroPadre ,
        fechaCreacion: data.fechaCreacion ,
        fechaModificacion: data.fechaModificacion ,
        portal: data.portal ,
        perfil: data.perfil ,
        fechaSincronizado: data.fechaSincronizado,
        estadoSincronizado: data.estadoSincronizado
    });
}

module.exports = Maestra;
