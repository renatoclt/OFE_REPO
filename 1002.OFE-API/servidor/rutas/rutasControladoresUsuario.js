var navC = nav.hijos['usuarios'];

var controladoresUsuario = function (ruta) {

    usuario = require('../controladores/usuario/controladorUsuario')(ruta.concat(navC.hijos['usuario'].ruta),navC.hijos['usuario'].ruta);

}

module.exports = controladoresUsuario;