express = require('express');
router = express.Router();

//controladores
producto = require('../controladores/producto/controladorProducto');

router.use('/productos', producto);

module.exports = router;