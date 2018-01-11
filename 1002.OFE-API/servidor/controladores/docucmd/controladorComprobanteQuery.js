var ComprobantePagoQueryDTO = require("../../dtos/comprobante/comprobantePagoQueryDTO");

var controladorComprobanteQuery = function (ruta, rutaEsp) {
    var nombreHateo = "hComprobante";
    var hateoas = require('./../../utilitarios/hateoas')({ baseUrl: "http://localhost:3000/v1" });
    var hateoasObj = require('./../../utilitarios/hateoasObj');
/*
    router.get('/documentosquery/:id', function (req, res, next) {
        ComprobantePagoQueryDTO.buscarComprobante(req.params.id).then(function (resDTO) {
            res.json(resDTO);
        });
    });
*/
    router.get('/documentosquery/query', function (req, res, next) {

        var
        pagina=0,
        limite=0,
        ordenar=0;
        idEntidadEmisora=0;             // inIdentidademisor
        tipoComprobanteTabla=10007&     // vcIdtablatipocomprobante
        tipoComprobanteRegistro=20&     // vcIdregistrotipocomprobante
        fechaEmisionDel=06/01/2010&     // tsFechaemision
        fechaEmisionAl=6/1/2018&        // tsFechaemision
        tipoDocumento=&                 // tabla entidad
        nroDocumento=&                  // tabla entidad
        ticket=&                        // vcTicketRetencion
        estado=&                        // chEstadocomprobantepago
        nroSerie=&                      // vcSerie
        correlativoInicial=&            // vcCorrelativo
        correlativoFinal=&              // vcCorrelativo
        nroPagina=7&
        regXPagina=10&
        ordenar=tsFechaemision&
        fechaBajaDel=&
        fechaBajaAl=&
        ticketBaja=                     // vcParamTicket

        if (req.query.nroPagina && req.query.nroPagina>0){
            pagina = parseInt(req.query.nroPagina);
        }
        if (req.query.regXPagina && req.query.regXPagina>0){
            limite = parseInt(req.query.regXPagina);
        }

        ComprobantePagoQueryDTO.buscarComprobanteConFiltros(pagina, limite).then(function (resDTO) {
            var ObjetoSalida = {};
            ObjetoSalida.content=resDTO.comprobantes;
            ObjetoSalida.last=false;
            ObjetoSalida.totalPages=Math.ceil(resDTO.cantidadReg/limite);
            ObjetoSalida.totalElements=resDTO.cantidadReg;
            ObjetoSalida.sort=null;                // por corregir
            ObjetoSalida.numberOfElements=resDTO.comprobantes.length|0;// por corregir
            ObjetoSalida.first=true|0;
            ObjetoSalida.size= parseInt(limite);
            ObjetoSalida.number=parseInt(pagina);

            res.json(ObjetoSalida);
        });
    });



};

module.exports = controladorComprobanteQuery;