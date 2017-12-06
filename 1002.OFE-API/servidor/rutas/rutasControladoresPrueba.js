navC = nav.hijos['prueba'];

var controladoresPrueba = function (ruta) {
    
    /**
     * Controladores
     */
    usuario = require('../controladores/prueba/controladorUsuario')(ruta.concat(navC.hijos['usuario'].ruta));
    //saludo = require('../controladores/prueba/controladorSaludo')(ruta.concat(navC.hijos['saludo'].ruta));
    //persona = require('../controladores/prueba/controladorPersona')(ruta.concat(navC.hijos['persona'].ruta));
    //hateoas = require('../controladores/prueba/controladorPerson')(ruta.concat(navC.hijos['hateoas'].ruta));
    user = require('../controladores/prueba/controladorUser')(ruta.concat(navC.hijos['user'].ruta));

}

module.exports = controladoresPrueba;