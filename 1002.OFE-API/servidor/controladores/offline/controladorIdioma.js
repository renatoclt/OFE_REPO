var Idioma = require('../../dtos/msoffline/idiomaDTO');

var controladorIdioma = function (ruta, rutaEsp) {
    router.get(ruta.concat('/'), async function (req, res) {
        try{
            await Idioma.CrearTabla();
            cantidad = await Idioma.contar();         
            res.json(cantidad);
        }catch (e){
            res.json({count: 0});
        }
    });
}
module.exports = controladorIdioma;