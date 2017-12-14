var navC = nav.hijos['parmqry'];

var controladoresInveqry = function (ruta) {

    /**
     * Controladores
     */
    tipoafectacionigv = require('../controladores/parmqry/contoladorTipoafectacionigv')(ruta.concat(navC.hijos['tipoafectacionigv'].ruta),navC.hijos['tipoafectacionigv'].ruta);

}

module.exports = controladoresInveqry;