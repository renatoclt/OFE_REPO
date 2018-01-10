var navC = nav.hijos['offline'];

var controladoresOffline = function (ruta) {

    /**
     * Controladores
     */
    sincronizacion = require('../controladores/offline/controladorSincronizacion')(ruta.concat(navC.hijos['sincronizacion'].ruta),navC.hijos['sincronizacion'].ruta);
    usuario = require('../controladores/offline/controladorUsuario')(ruta.concat(navC.hijos['usuario'].ruta),navC.hijos['usuario'].ruta);
}
module.exports = controladoresOffline;