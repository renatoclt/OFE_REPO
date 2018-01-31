/**
 * @author --- Modificado **-**-****
 * @author ricardo gamero 30-01-2018
 */
var ComprobantePago = require('../../modelos/comprobantes/comprobantePago');
var DocEntidad = require('../../modelos/comprobantes/docEntidad');
var Entidad = require('../../modelos/organizaciones/entidad');
var EntidadParametro = require('../../modelos/organizaciones/entidadParametro');
var TipoEnt = require('../../modelos/configuracion/tipoEnt')
var DocReferencia = require('../../modelos/comprobantes/docReferencia')
var constantes = require('../../utilitarios/constantes')
const Op = conexion.Op;
 /**
 * Funcion que guarda los comprobantes de pago
 * 
 */
ComprobantePago.actualizar = function updateCommands(_id){
    return ComprobantePago.update({
        estadoComprobante: constantes.estadoInactivo,
        version: 0,
        estado: constantes.bloqueoLocal,
    },
    {
        where: {id: _id}
    }    

);
}
module.exports = ComprobantePago;
