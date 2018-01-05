var navC = nav.hijos['docucmd'];

var controladoresInveqry = function (ruta) {

    /**
     * Controladores
     */
    documentos = require('../controladores/docucmd/controladorComprobante')(ruta.concat(navC.hijos['documento'].ruta),navC.hijos['documento'].ruta);
    retenciones = require('../controladores/docucmd/controladorRetencionSincronizar')(ruta.concat(navC.hijos['sincronizar'].ruta),navC.hijos['sincronizar'].ruta);

}

module.exports = controladoresInveqry;