var navC = nav.hijos['parmqry'];

var controladoresInveqry = function (ruta) {

    /**
     * Controladores
     */
    tipoafectacionigv = require('../controladores/parmqry/contoladorTipoafectacionigv')(ruta.concat(navC.hijos['tipoafectacionigv'].ruta),navC.hijos['tipoafectacionigv'].ruta);
    maestra = require('../controladores/parmqry/controladorMaestras')(ruta.concat(navC.hijos['maestra'].ruta),navC.hijos['maestra'].ruta);
}

module.exports = controladoresInveqry;