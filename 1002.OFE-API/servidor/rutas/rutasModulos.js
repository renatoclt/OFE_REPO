router = require('express').Router();
nav = require('./rutas_const')['nav'];

/**
 * modulos
 */
inveqry = require('./rutasControladoresInveqry')(nav.ruta);
parmqry = require('./rutasControladoresParmqry')(nav.ruta);
prueba = require('./rutasControladoresPrueba')(nav.ruta);

module.exports = router;