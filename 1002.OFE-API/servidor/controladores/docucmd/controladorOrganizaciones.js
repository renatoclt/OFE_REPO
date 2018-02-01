var EntidadQueryDTO = require("../../dtos/msdocucmd/EntidadQueryDTO");
var baseUrl_ = "http://localhost:3000/v1";
var controladorQueryEntidades = function (ruta, rutaEsp) {
    /*    var nombreHateo = "hComprobante";
        var hateoas = require('./../../utilitarios/hateoas')({ baseUrl:baseUrl_});
        var hateoasObj = require('./../../utilitarios/hateoasObj');
    */
    router.get('/organizaciones', function (req, res, next) {

        if (req.query.denominacion == undefined || req.query.idTipoDocumento == undefined) {
            res.status(400).send('Solicitud incorrecta: Revisar parametros error de peticion');
        } else {
            var denominacion = "",
                idTipoDocumento = "-1",
                page = 0,
                size = 5;

            if (req.query.denominacion && req.query.denominacion != "") {
                denominacion = req.query.denominacion;
            }
            if (req.query.idTipoDocumento && req.query.idTipoDocumento != "") {
                idTipoDocumento = req.query.idTipoDocumento;
            }
            if (req.query.page && req.query.page > 0) {
                page = req.query.page;
            }
            if (req.query.limite && req.query.limite > 0) {
                limite = req.query.limite;
            }

            EntidadQueryDTO.buscarEntidades(idTipoDocumento, denominacion, page, size)
                .then(function (resDTO) {
                    if (resDTO.cantidadReg == 0)
                        res.status(404).send(resDTO);
                    else
                        res.status(200).json(resDTO);
                });
        }


    });

    router.get('/organizaciones/:id', function (req, res, next) {
        EntidadQueryDTO.buscarEntidadById(req.params.id).then(function (resDTO) {
            res.json(resDTO);
        })
    });

};

module.exports = controladorQueryEntidades;