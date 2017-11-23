express = require('express');
router = express.Router();
//modulo
prueba = require('./rutasControladoresPrueba');

router.use('/prueba', prueba);

module.exports = router;