var navC = nav.hijos['docucmd'];

var controladoresInveqry = function (ruta) {

    /**
     * Controladores
     */
    documentos = require('../controladores/docucmd/controladorComprobante')(ruta.concat(navC.hijos['documento'].ruta),navC.hijos['documento'].ruta);

}

module.exports = controladoresInveqry;