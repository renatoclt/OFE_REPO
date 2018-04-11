var comprobantePagoDTO = require('../../dtos/msoffline/comprobantePagoDTO');

var controladorSincronizacionBoleta = function (ruta, rutaEsp) {
    router.get(ruta.concat('/'), async function (req, res) {
        try{
            var data = await comprobantePagoDTO.sincronizarBoleta();
            data.forEach((element) => {
                console.log((element));
                element.DocEntidad.forEach(entidad => {
                    if(entidad.tipoEntidad == 1){
                        //no guardo entidad
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


module.exports = controladorSincronizacionBoleta;
