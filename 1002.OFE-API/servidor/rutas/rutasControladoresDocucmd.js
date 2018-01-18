var navC = nav.hijos['docucmd'];

var controladoresInveqry = function (ruta) {

    /**
     * Controladores
     */
    //documentos = require('../controladores/docucmd/controladorComprobante')(ruta.concat(navC.hijos['documento'].ruta),navC.hijos['documento'].ruta);
    retenciones = require('../controladores/docucmd/controladorRetencionSincronizar')(ruta.concat(navC.hijos['retenciones'].ruta),navC.hijos['retenciones'].ruta);
    facturas = require('../controladores/docucmd/controladorFacturaSincronizar')(ruta.concat(navC.hijos['facturas'].ruta),navC.hijos['facturas'].ruta);
    boletas = require('../controladores/docucmd/controladorBoletaSincronizar')(ruta.concat(navC.hijos['boletas'].ruta),navC.hijos['boletas'].ruta);
    percepciones = require('../controladores/docucmd/controladorPercepcionSincronizar')(ruta.concat(navC.hijos['percepciones'].ruta),navC.hijos['percepciones'].ruta);
    documento = require('../controladores/docucmd/controladorDocumentoCmd')(ruta.concat(navC.hijos['documento'].ruta),navC.hijos['documento'].ruta);

}

module.exports = controladoresInveqry;