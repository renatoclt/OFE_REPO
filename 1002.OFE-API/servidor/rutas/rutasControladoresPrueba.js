express = require('express');
router = express.Router();

//controladores
usuario = require('../controladores/prueba/controladorUsuario');
saludo = require('../controladores/prueba/controladorSaludo');
persona = require('../controladores/prueba/controladorPersona');
hateoas = require('../controladores/prueba/controladorPerson');

router.use('/usuario', usuario);
router.use('/saludo', saludo);
router.use('/persona',persona);
router.use('/hateoas',hateoas);

module.exports = router;