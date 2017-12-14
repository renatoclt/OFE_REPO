var navC = nav.hijos['productos'];

var controladoresProducto = function (ruta) {

    /**
     * Controladores
     */
    producto = require('../controladores/inveqry/controladorProductos')(ruta.concat(navC.hijos['productos'].ruta),navC.hijos['productos'].ruta);

}

module.exports = controladoresProducto;