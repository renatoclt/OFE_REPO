var Documento = require('../../dtos/msdocucmd/documentoDTO');
var uuid = require('../../utilitarios/uuid');
var Serie = require('../../dtos/msparametrosquery/serieDto');
var NumeroALetras = require('../../utilitarios/numerosALetras');
var PercepcionDTO = require("../../dtos/comprobante/percepcionDTO");

var contoladorPercepcion =  function (ruta, rutaEsp){ 

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

    router.get (ruta.concat('/'), async function(req, res){
        var regxpag = 10;
        pagina = 0;
        if(req.query.size && req.query.size!=""){
            regxpag = req.query.size;
        }
        if(req.query.pagina && req.query.pagina !=""){
            pagina = req.query.pagina;
        }
        PercepcionDTO.buscarComprobantes(pagina, regxpag).then(function (resDTO) {
            var hateoasObj_comprobante = Object.assign({}, hateoasObj);
            hateoasObj_comprobante.type = nombreHateo;
            hateoasObj_comprobante.data = resDTO.comprobantes;
            hateoasObj_comprobante.nombreColeccion = "percepciones";
            hateoasObj_comprobante.ruta = rutaEsp;
            hateoasObj_comprobante.paginacion.activo = true;
            hateoasObj_comprobante.paginacion.totalreg = resDTO.cantidadReg;
            hateoasObj_comprobante.paginacion.regxpag = regxpag;
            hateoasObj_comprobante.paginacion.pagina = pagina;
            hateoasObj_comprobante.busqueda.activo = false;         
            res.json(hateoas.link(hateoasObj_comprobante));
        });
    });
    router.post(ruta.concat('/'), async function(req, res){
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
            data.idRegistroMoneda = 000001;
            data.idtablaTipoComprobante = '10007';
            data.idRegistroTipoComprobante = 20;
            data.impuestoGvr = 0;
            //
            data.estadoComprobante = constantes.estadoGuardadoLocal;
            await Documento.guardar(data);  
        }catch(e){
            console.log(e);
            console.log('ingrese');
        }
        res.json(data);
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

module.exports = contoladorPercepcion;