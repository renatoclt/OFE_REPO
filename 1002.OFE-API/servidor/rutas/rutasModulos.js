router = require('express').Router();
nav = require('./rutas')['nav'];

/**
 * modulos
 */
prueba = require('./rutasControladoresPrueba');
producto = require('./rutasControladoresProducto');

/**
 * rutas de los modulos
 */
router.use(nav.ruta, prueba);
router.use(nav.ruta, producto);

module.exports = router;