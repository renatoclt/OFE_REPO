var navC = nav.hijos['productos'];

var controladoresProducto = function (ruta) {

    /**
     * Controladores
     */
    producto = require('../controladores/producto/controladorProducto')(ruta.concat(navC.hijos['productos'].ruta));

}

module.exports = controladoresProducto;