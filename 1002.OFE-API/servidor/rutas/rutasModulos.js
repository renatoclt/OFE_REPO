router = require('express').Router();
nav = require('./rutas_const')['nav'];

/**
 * modulos
 */
producto = require('./rutasControladoresInveqry')(nav.ruta);
prueba = require('./rutasControladoresPrueba')(nav.ruta);

module.exports = router;