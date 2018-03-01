var comprobante = require('../../dtos/msoffline/comprobantePagoDTO');

var controladorSincronizacionRetencion = function (ruta, rutaEsp) {
    router.get(ruta.concat('/'), async function (req, res) {
        try{
            var data = await comprobante.sincornizar();
            data.forEach((element) => {
                element.DocEntidad.forEach(entidad => {
                    if(entidad.tipoEntidad == 1){
                        element.dataValues.correoProveedor = entidad.correo;
                    }
                    if(entidad.tipoEntidad == 2){
                        element.dataValues.correoComprador = entidad.correo;
                    }
                });
               delete element.dataValues.DocEntidad;
            });
            res.json(data);
        }catch (e){
            console.log(e);
            res.json({count: 0});
        }
    });
}
module.exports = controladorSincronizacionRetencion;