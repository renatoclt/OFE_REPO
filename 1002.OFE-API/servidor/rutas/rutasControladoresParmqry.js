var navC = nav.hijos['parmqry'];

var controladoresParmqry = function (ruta) {

    /**
     * Controladores
     */
    tipoafectacionigv = require('../controladores/parmqry/contoladorTipoafectacionigv')(ruta.concat(navC.hijos['tipoafectacionigv'].ruta),navC.hijos['tipoafectacionigv'].ruta);
<<<<<<< HEAD
    maestra = require('../controladores/parmqry/controladorMaestras')(ruta.concat(navC.hijos['maestra'].ruta),navC.hijos['maestra'].ruta);
=======
    tipoprecioventa = require('../controladores/parmqry/controladorTipoprecioventa')(ruta.concat(navC.hijos['tipoprecioventa'].ruta),navC.hijos['tipoprecioventa'].ruta);

>>>>>>> 04689aca3718717801ad7147c659ed7856db33db
}

module.exports = controladoresParmqry;