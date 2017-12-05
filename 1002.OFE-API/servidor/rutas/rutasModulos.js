router = require('express').Router();
nav = require('./rutas_const')['nav'];

/**
 * modulos
 */
producto = require('./rutasControladoresProducto');

/**
 * modulo de prueba
 */
prueba = require('./rutasControladoresPrueba');

/**
 * rutas de los modulos
 */
router.use(nav.ruta, prueba);
router.use(nav.ruta, producto);

module.exports = router;