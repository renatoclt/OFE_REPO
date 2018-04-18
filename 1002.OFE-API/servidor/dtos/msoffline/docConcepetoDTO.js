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

DocConcepto.guardar = function guardar(data){
    console.log(data);
    return DocConcepto.create({
        idConcepto: data.idConcepto,
        concepto : data.codConcepto,
        comprobantePago: data.comprobantePago,
        descripcion: data.descripcionConcepto,
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