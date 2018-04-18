var comprobantePagoDTO = require('../../dtos/msoffline/comprobantePagoDTO');

var controladorSincronizacionFactura = function (ruta, rutaEsp) {
    router.get(ruta.concat('/'), async function (req, res) {
        try{
            var data = await comprobantePagoDTO.sincronizarFactura();
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
    router.get(ruta.concat('/actualizarEstadoComprobante'), async function(req, res){
        try{
            var data = await comprobantePagoDTO.estadosPendientes(constantes.FILECMD.tipos_documento.factura);
            res.json(data);
        }catch(e){
            console.log(e);
            res.json({error: e});
        }
    });
}


module.exports = controladorSincronizacionFactura;
