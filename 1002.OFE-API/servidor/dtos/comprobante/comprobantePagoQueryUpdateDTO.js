/**
 * @author ricardo gamero coronado
 */

var ComprobantePagoQueryUpdate= require('../../modelos/comprobantes/comprobantePagoQuery');
var dateFormat = require('dateformat');
contantes = require("../../utilitarios/constantes");
sequelize = require("sequelize");
const Op = conexion.Op;

ComprobantePagoQueryUpdate.actualizarQuery = function updateQuery(_id,fecha){
    return ComprobantePagoQueryUpdate.update({
        chEstadocomprobantepago:  contantes.estadoInactivo,
        inVersion: 1,
        chEstadocomprobantepagocomp:contantes.bloqueoLocal,
        tsParamFechabaja: fecha,
    },{
        where: {inIdcomprobantepago: _id}
    }
);
} 
module.exports = ComprobantePagoQueryUpdate;
