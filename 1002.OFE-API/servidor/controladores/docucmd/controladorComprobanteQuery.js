var ComprobantePagoQueryDTO = require("../../dtos/comprobante/comprobantePagoQueryDTO");

var controladorComprobanteQuery = function (ruta, rutaEsp) {
    var nombreHateo = "hComprobante";
    var hateoas = require('./../../utilitarios/hateoas')({ baseUrl: "http://localhost:3000/v1" });
    var hateoasObj = require('./../../utilitarios/hateoasObj');

    router.get('/documentosquery/:id', function (req, res, next) {
        ComprobantePagoQueryDTO.buscarComprobante(req.params.id).then(function (resDTO) {
            res.json(resDTO);
        });
    });



};

module.exports = controladorComprobanteQuery;