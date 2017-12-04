express = require('express').Router();
nav = require('./rutas')['nav'];
navC = nav.hijos['productos'];

/**
 * Controladores
 */
producto = require('../controladores/producto/controladorProducto');

/**
 * Rutas
 */
router.use(navC.hijos['productos'].ruta, producto);

module.exports = router;