/**
 * @author --- Modificado **-**-****
 * @author renato creado 22-01-2018 
 */
var DocConcepto = require('../../modelos/msoffline/docConcepto');
//const Op = conexion.Op;
 /**
 * Funcion que guarda los comprobantes de pago
 * 
 */

DocConcepto.guardar = function guardarDocConcepto(data){
    console.log(data);
    return DocConcepto.create({
        id: data.id,
        concepto: data.concepto,
        comprobantePago: data.comprobantePago,
        importe: data.importe,
        usuarioCreacion: data.usuarioCreacion,
        usuarioModificacion: data.usuarioModificacion,
        fechaCreacion: data.fechaCreacion,
        fechaModificacion: data.fechaModificacion,
        estado: data.estado,
        fechaSincronizado: data.fechaSincronizado,
        estadoSincronizado: data.estadoSincronizado
    });
}

module.exports = DocConcepto;