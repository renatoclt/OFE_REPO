/**
 * @author --- Modificado **-**-****
 * @author renato creado 18-12-2017 
 */
var ComprobantePago = require('../../modelos/comprobantes/comprobantePago')

 /**
 * Funcion que guarda los comprobantes de pago
 * 
 */
ComprobantePago.guardar = function maestraGuardar(){
    return ComprobantePago.create({
        id:'46bcfff8-e59e-11e7-80c1-9a214cf093ae',
        numeroComprobantePago:'numeroComprobantePago',
        idOrganizacionCompradora:'idOrganizacionCompradora',
        idOrganizacionProveedora:'idOrganizacionProveedora',
        rucProveedor:'rucProveedor',
        rucComprador:'rucComprador',
        estadoComprobantePago:'0',
        flagPlazoPago:'0',
        flagRegistroEliminado:'0',
        flagOrigenComprobantePago:'1',
        flagorIGencreacion:'1',
        idGuia:1,
        idUsuarioCreacion:1,
        idUsuarioModificacion:'1',
        idUsuarioProveedor:'1',
        idOrganizacionCreacion:1,
        idOrganizacionModificacion:1
    });
}

module.exports = ComprobantePago;