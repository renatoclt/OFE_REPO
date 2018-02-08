/**
 * @author --- Modificado **-**-****
 * @author renato creado 22-01-2018 
 */
var QueryProducto = require('../../modelos/msoffline/queryProducto');
 /**
 * Funcion que guarda los comprobantes de pago
 * 
 */

QueryProducto.guardar = function guardarQueryProducto(data){
    return QueryProducto.create({
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

module.exports = QueryProducto;
