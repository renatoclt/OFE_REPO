router = require('express').Router();
nav = require(`${__dirname}/rutas.json`)['nav'];
navC = nav.hijos['prueba'];

/**
 * Controladores
 */
usuario = require('../controladores/prueba/controladorUsuario');
//saludo = require('../controladores/prueba/controladorSaludo');
//persona = require('../controladores/prueba/controladorPersona');
//hateoas = require('../controladores/prueba/controladorPerson');
//user = require('../controladores/prueba/controladorUser');

/**
 * Rutas
 */
router.use(navC.hijos['usuario'].ruta, usuario);
//router.use(navC.hijos['saludo'].ruta, saludo);
//router.use(navC.hijos['persona'].ruta,persona);
//router.use(navC.hijos['hateoas'].ruta,hateoas);
//router.use(navC.hijos['user'].ruta,user);

module.exports = router;