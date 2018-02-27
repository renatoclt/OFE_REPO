var comprobante = require('../../dtos/msoffline/comprobantePagoDTO');

var controladorSincronizacion = function (ruta, rutaEsp) {
    router.get(ruta.concat('/'), async function (req, res) {
        try{
            res.json(cantidad);
        }catch (e){
            res.json({count: 0});
        }
    });
}
module.exports = controladorIdioma;