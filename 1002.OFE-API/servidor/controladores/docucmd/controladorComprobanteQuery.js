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
        
        idEntidadEmisora=0,             // inIdentidademisor
        tipoComprobanteTabla='',     // vcIdtablatipocomprobante
        tipoComprobanteRegistro='',     // vcIdregistrotipocomprobante
        fechaEmisionDel='',     // tsFechaemision
        fechaEmisionAl='',        // tsFechaemision
        tipoDocumento='',                 // tabla entidad
        nroDocumento='',                  // tabla entidad
        ticket='',                        // vcTicketRetencion
        estado='',                        // chEstadocomprobantepago
        nroSerie='',                      // vcSerie
        correlativoInicial='',            // vcCorrelativo
        correlativoFinal='',              // vcCorrelativo
        ordenar='',
        fechaBajaDel='',
        fechaBajaAl='',
        ticketBaja='';                     // vcParamTicket

        if (req.query.nroPagina && req.query.nroPagina!=''){
            pagina = parseInt(req.query.nroPagina);
        }
        if (req.query.regXPagina && req.query.regXPagina!=''){
            limite = parseInt(req.query.regXPagina);
        }
        if (req.query.idEntidadEmisora && parseInt(req.query.idEntidadEmisora)>0){
            idEntidadEmisora = req.query.idEntidadEmisora;
        }
        if (req.query.tipoComprobanteTabla && req.query.tipoComprobanteTabla!=''){
            tipoComprobanteTabla = req.query.tipoComprobanteTabla;
        }
        if (req.query.tipoComprobanteRegistro && req.query.tipoComprobanteRegistro!=''){
            tipoComprobanteRegistro = req.query.tipoComprobanteRegistro;
        }
        if (req.query.fechaEmisionDel && req.query.fechaEmisionDel!=''){
            fechaEmisionDel = req.query.fechaEmisionDel;
        }
        if (req.query.fechaEmisionAl && req.query.fechaEmisionAl!=''){
            fechaEmisionAl = req.query.fechaEmisionAl;
        }   
        if (req.query.tipoDocumento && req.query.tipoDocumento!=''){
            tipoDocumento = req.query.tipoDocumento;
        } 
        if (req.query.nroDocumento && req.query.nroDocumento!=''){
            nroDocumento = req.query.nroDocumento;
        }    
        if (req.query.ticket && req.query.ticket!=''){
            ticket = req.query.ticket;
        }   
        if (req.query.estado && req.query.estado!=''){
            estado = req.query.estado;
        } 
        if (req.query.nroSerie && req.query.nroSerie!=''){
            nroSerie = req.query.nroSerie;
        }
        if (req.query.correlativoInicial && req.query.correlativoInicial!=''){
            correlativoInicial = req.query.correlativoInicial;
        }
        if (req.query.correlativoFinal && req.query.correlativoFinal!=''){
            correlativoFinal = req.query.correlativoFinal;
        }
        if (req.query.ordenar && req.query.ordenar!=''){
            ordenar = req.query.ordenar;
        }
        if (req.query.fechaBajaDel && req.query.fechaBajaDel!=''){
            fechaBajaDel = req.query.fechaBajaDel;
        }
        if (req.query.fechaBajaAl && req.query.fechaBajaAl!=''){
            fechaBajaAl = req.query.fechaBajaAl;
        }
        if (req.query.ticketBaja && req.query.ticketBaja!=''){
            ticketBaja = req.query.ticketBaja;
        }
        
        

        ComprobantePagoQueryDTO.buscarComprobanteConFiltros(
            pagina, 
            limite,
            idEntidadEmisora,               // inIdentidademisor
            tipoComprobanteTabla,           // vcIdtablatipocomprobante
            tipoComprobanteRegistro,        // vcIdregistrotipocomprobante
            fechaEmisionDel,                // tsFechaemision
            fechaEmisionAl,                 // tsFechaemision
            tipoDocumento,                  // tabla entidad
            nroDocumento,                   // tabla entidad
            ticket,                         // vcTicketRetencion
            estado,                         // chEstadocomprobantepago ?
            nroSerie,                       // vcSerie ?
            correlativoInicial,             // vcCorrelativo
            correlativoFinal,               // vcCorrelativo
            ordenar,
            fechaBajaDel,                   // tsParamFechabaja
            fechaBajaAl,                    // tsParamFechabaja
            ticketBaja  
        )
            .then(function (resDTO) {
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