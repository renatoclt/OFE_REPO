router = require('express').Router();
nav = require('./rutas_const')['nav'];
/**
 * @author Renato Modifico 19/12/2017
 * @author Roycer Cordova
 * @description Importamos las rutas de los diferentes archivos
 */

/**
 * modulos
 */
inveqry = require('./rutasControladoresInveqry')(nav.ruta);
parmqry = require('./rutasControladoresParmqry')(nav.ruta);
entidad = require('./rutasControladoresEntidad')(nav.ruta);
docucmd = require('./rutasControladoresDocucmd')(nav.ruta);
usuario = require('./rutasControladoresUsuario')(nav.ruta);
//prueba = require('./rutasControladoresPrueba')(nav.ruta);

module.exports = router;