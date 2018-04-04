var FacturaDTO = require("../../dtos/comprobante/facturaDTO");
var uuid = require('../../utilitarios/uuid');
var NumeroALetras = require('../../utilitarios/numerosALetras');
var Serie = require('../../dtos/msparametrosquery/serieDto');
var Documento = require('../../dtos/msdocucmd/documentoDTO');

var controladorFactura = function (ruta, rutaEsp) {
    var nombreHateo = "hComprobante";
    var hateoas = require('./../../utilitarios/hateoas')({ baseUrl: "http://localhost:3000/v1" });
    var hateoasObj = require('./../../utilitarios/hateoasObj');

    hateoas.registerLinkHandler(nombreHateo, function (objecto) {
        var links = {
            "self": rutaEsp.concat('/') + objecto.id
        };
        return links;
    });

    hateoas.registerCollectionLinkHandler(nombreHateo, function (objectoCollection) {
        var links = {
            "self": rutaEsp
        };
        return links;
    });

    router.get(ruta.concat('/'), function (req, res, next) {
        var regxpag = 10
        pagina = 0;

        if (req.query.pagina) {
            pagina = req.query.pagina;
        }
        if (req.query.limite) {
            regxpag = req.query.limite;
        }
        FacturaDTO.buscarComprobantes(pagina, regxpag).then(function (resDTO) {

            var hateoasObj_comprobante = Object.assign({}, hateoasObj);
            hateoasObj_comprobante.type = nombreHateo;
            hateoasObj_comprobante.data = resDTO.comprobantes;
            hateoasObj_comprobante.nombreColeccion = "facturas";
            hateoasObj_comprobante.ruta = rutaEsp;
            hateoasObj_comprobante.paginacion.activo = true;
            hateoasObj_comprobante.paginacion.totalreg = resDTO.cantidadReg;
            hateoasObj_comprobante.paginacion.regxpag = regxpag;
            hateoasObj_comprobante.paginacion.pagina = pagina;
            hateoasObj_comprobante.busqueda.activo = false;         
            res.json(hateoas.link(hateoasObj_comprobante));
        });
    });

    router.get(ruta.concat('/:id'), function (req, res, next) {
        FacturaDTO.buscarComprobante(req.params.id).then(function (resDTO) {
            var hateoasObj_comprobante = Object.assign({}, hateoasObj);
            hateoasObj_comprobante.type = nombreHateo;
            hateoasObj_comprobante.data = resDTO;
            hateoasObj_comprobante.paginacion.activo = false;
            hateoasObj_comprobante.busqueda.activo = false;
            res.json(hateoas.link(hateoasObj_comprobante));
        });
    });

    router.get(ruta.concat('/search/buscar'), function (req, res, next) {

        var numeroComprobante="",
            generado="",
            estado="",
            fechaInicio=new Date(),
            fechaFin=new Date(),
            estadoSincronizado=0,
            pagina=0,
            limite=0,
            ordenar=0;

        if (req.query.numeroComprobante && req.query.numeroComprobante!=""){
            numeroComprobante = req.query.numeroComprobante;
        }
        if (req.query.generado && req.query.generado!=""){
            generado = req.query.generado;
        }
        if (req.query.estado && req.query.estado!=""){
            estado = req.query.estado;
        }
        if (req.query.fechaInicio && req.query.fechaInicio!=""){
            fechaInicio = req.query.fechaInicio;
        }
        if (req.query.fechaFin && req.query.fechaFin!=""){
            fechaFin = req.query.fechaFin;
        }
        if (req.query.estadoSincronizado && req.query.estadoSincronizado<2){
            estadoSincronizado = req.query.estadoSincronizado;
        }
        if (req.query.pagina && req.query.pagina>0){
            pagina = req.query.pagina;
        }
        if (req.query.limite && req.query.limite>0){
            limite = req.query.limite;
        }
 
        FacturaDTO.buscarFacturaEspecifico(pagina, limite, numeroComprobante,generado,estado,fechaInicio,fechaFin,estadoSincronizado)
        .then(function (resDTO) {

            var hateoasObj_comprobante = Object.assign({}, hateoasObj);
            hateoasObj_comprobante.type = nombreHateo;
            hateoasObj_comprobante.data = resDTO.comprobantes;
            hateoasObj_comprobante.nombreColeccion = "facturas";
            hateoasObj_comprobante.ruta = rutaEsp;
            hateoasObj_comprobante.paginacion.activo = true;
            hateoasObj_comprobante.paginacion.totalreg = resDTO.cantidadReg;
            hateoasObj_comprobante.paginacion.regxpag = limite;
            hateoasObj_comprobante.paginacion.pagina = pagina;
            hateoasObj_comprobante.busqueda.activo = true; 
            hateoasObj_comprobante.busqueda.parametros = {numeroComprobante:numeroComprobante,generado:generado,estado:estado,estadoSincronizado:estadoSincronizado,fechaInicio:fechaInicio,fechaFin:fechaFin};
            hateoasObj_comprobante.busqueda.ruta = "/search/buscar";        
            res.json(hateoas.link(hateoasObj_comprobante));
        });
    });


    router.post(ruta.concat('/'), async function (req, res, next) {
        data = req.body
        data.id = uuid();
        try{
            data.correlativo = await buscarCorrelativo(data.idTipoComprobante, data.numeroComprobante, constantes.estadoOffline , 4)
            data.numeroComprobante = data.numeroComprobante + '-' + data.correlativo;       
            data.estadoSincronizado = constantes.estadoInactivo;
            data.flagOrigenComprobante = constantes.percepcion.flagOrigenComprobante;
            data.flagOrigenCreacion = constantes.percepcion.flagOrigenCreacion;
            data.fechaSincronizado = dateFormat(new Date(), "yyyy-mm-dd HH:MM:ss.l");
            data.fechaCreacion = dateFormat(new Date(), "yyyy-mm-dd HH:MM:ss.l");
            data.fechaRegistro = dateFormat(new Date(), "yyyy-mm-dd HH:MM:ss.l");
            data.fechaEmision = parseJsonDate(data.fechaEmision);
            data.estado = constantes.inEstadoGuardadoLocal;
            data.version = constantes.versionInicial;
            data.montoComprobante = NumeroALetras.numeroALetras(data.montoDescuento);
            data.tipoFactura = constantes.percepcion.tipoFactura;
            data.generado = constantes.estadoOffline;
            //consultar 
            data.igv = 0.0;
            data.isc = 0.0;
            data.otrosTributos = 0.0;
            data.importeReferencial = 0.0;
            data.subtotalComprobante = 0.0;
            data.idindicadorImpuesto = 0
            data.idTablaMoneda = 10001;
            data.idRegistroMoneda = '000001';
            data.idtablaTipoComprobante = constantes.idTablaTipoComprobante;
            data.idRegistroTipoComprobante = 20;
            data.impuestoGvr = 0;
            data.estadoComprobante = constantes.estadoGuardadoLocal;
            await Documento.guardar(data);  
            //await guardarQuery(data);
        }catch(e){
            console.log(e);
            console.log('ingrese');
        }
        res.json('{}');
    })
};

async function buscarCorrelativo(tipoComprobante, serie, tipoSerie , entidad){
    let correlativo = 0;
    try{
        let data  = await Serie.buscarSerie(tipoComprobante, serie, tipoSerie , entidad); 
        correlativo = parseInt(data[0].dataValues.correlativo) + 1;
        await Serie.acturalizarCorrelativo(data[0].dataValues.idSerie , correlativo);
    }
    catch(e){
        console.log(e);
        correlativo = 1
    }
    return zfill(correlativo,8);
}


function zfill(number, width) {
    var numberOutput = Math.abs(number); /* Valor absoluto del número */
    var length = number.toString().length; /* Largo del número */ 
    var zero = "0"; /* String de cero */  
    
    if (width <= length) {
        if (number < 0) {
             return ("-" + numberOutput.toString()); 
        } else {
             return numberOutput.toString(); 
        }
    } else {
        if (number < 0) {
            return ("-" + (zero.repeat(width - length)) + numberOutput.toString()); 
        } else {
            return ((zero.repeat(width - length)) + numberOutput.toString()); 
        }
    }
}

function parseJsonDate(jsonDateString){
    jsonDateString = jsonDateString.toString();
    return dateFormat(new Date(parseInt(jsonDateString.replace('/Date(', ''))), "yyyy-mm-dd HH:MM:ss");
}


module.exports = controladorFactura;