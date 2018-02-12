/**
 * @author --- Modificado **-**-****
 * @author renato creado 22-01-2018 
 */
var QueryProductoDTO = require('../../modelos/msoffline/queryProducto');
 /**
 * Funcion que guarda los comprobantes de pago
 * 
 */

QueryProductoDTO.guardar = function guardarQueryProducto(data){
    return QueryProductoDTO.create({
        id: data.id,
        entidad: data.entidad ,
        tipoCalc: data.tipoCalc ,
        codigo: data.codigo ,
        descripcion: data.descripcion ,
        precioUnitario: data.precioUnitario ,
        montoIsc: data.montoIsc ,
        UnidadMedida: data.UnidadMedida ,
        afectaDetra: data.afectaDetra,
        usuarioCreacion: data.usuarioCreacion ,
        usuarioModificacion: data.usuarioModificacion ,
        fechaCreacion: data.fechaCreacion ,
        fechaModificacion: data.fechaModificacion ,
        fechaSincronizado: data.fechaSincronizado ,
        estadoSincronizado: data.estadoSincronizado
    });
}

module.exports = QueryProductoDTO;
