var uuid = require('../../utilitarios/uuid');
var ControladorPdfRetenciones = ('ControladorPdfRetenciones');
var NuevoDocumentoCreado = require('../../dtos/comprobante/comprobantePago');
var controladorPdf = function (ruta, rutaEsp) {
    router.get(ruta.concat('/pdfretencion'), async function (req, res) {
        let data = req.body;
        data.id = uuid();
        try {
            res.json(ControladorPdfRetenciones.MapeoPDFRetenciones(data));
        } catch (error) {
            res.staturs(404).send('error');
            console.log('error al ingresar :'+ error)
        }
    })
}