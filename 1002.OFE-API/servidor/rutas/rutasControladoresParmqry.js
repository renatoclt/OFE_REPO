var navC = nav.hijos['parmqry'];

var controladoresParmqry = function (ruta) {

    /**
     * Controladores
     */
    tipoafectacionigv = require('../controladores/parmqry/contoladorTipoafectacionigv')(ruta.concat(navC.hijos['tipoafectacionigv'].ruta), navC.hijos['tipoafectacionigv'].ruta);
    maestra = require('../controladores/parmqry/controladorMaestras')(ruta.concat(navC.hijos['maestra'].ruta), navC.hijos['maestra'].ruta);
    tipoprecioventa = require('../controladores/parmqry/controladorTipoprecioventa')(ruta.concat(navC.hijos['tipoprecioventa'].ruta), navC.hijos['tipoprecioventa'].ruta);
    concepto = require('../controladores/parmqry/controladorConcepto')(ruta.concat(navC.hijos['concepto'].ruta), navC.hijos['concepto'].ruta);
    serie = require('../controladores/parmqry/controladorSeries')(ruta.concat(navC.hijos['series'].ruta),navC.hijos['series'].ruta);
    estadoComprobante = require('../controladores/parmqry/controladorEstadoComprobante')(ruta.concat(navC.hijos['estadoComprobante'].ruta),navC.hijos['estadoComprobante'].ruta);
    sincronizacion = require('../controladores/parmqry/controladorSincronizacion')(ruta.concat(navC.hijos['sincronizacion'].ruta),navC.hijos['sincronizacion'].ruta);
}
module.exports = controladoresParmqry;