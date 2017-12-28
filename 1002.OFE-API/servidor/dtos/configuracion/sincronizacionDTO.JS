Sincronizacion = require('../../modelos/configuracion/sincronizacion');

/**
 * Funcion que retorna la tabla T_Maestra segun el campo codigo
 * 
 * @param {*} codigoTabla Se envia el codigo del catalogo
 */
Sincronizacion.filtro = function sincronizacionFiltro(idioma){
    return Sincronizacion.findAll({ attributes: filtroAtributos.attributes ,
        where: {
            estado: constantes.estadoActivo,
            idioma: idioma
        }
      });
}

//atributos utilizados por function maestraFiltro
var filtroAtributos = {
    attributes: [
                'id',
                'descripcion'],
}
module.exports = Sincronizacion;