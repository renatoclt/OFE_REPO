express = require('express');
router = express.Router();
//modulo
prueba = require('./rutasControladoresPrueba');
//producto = require('./rutasControladoresProducto');

router.use('/v1', prueba);
//router.use('/v1', producto);

module.exports = router;