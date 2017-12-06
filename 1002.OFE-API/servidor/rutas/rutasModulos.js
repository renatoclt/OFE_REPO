router = require('express').Router();
nav = require('./rutas_const')['nav'];

/**
 * modulos
 */
producto = require('./rutasControladoresProducto')(nav.ruta);
prueba = require('./rutasControladoresPrueba')(nav.ruta);

module.exports = router;