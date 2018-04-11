var pdfBuilder = require('sfulasalle-pdf-builder');
var fs = require( 'fs' );
var x2j = require( 'xml2js' );
var logoSimple = require('../../utilitarios/plantillasPdf/logoEbiz');

var module = {};
module = (function () {
    var comprobante = {};
    comprobante.logo = logoSimple.logoEbiz;
    // comprobante.comprobanteAfecto = 'F015-0000004';

    var detalle = [];

    var linea_1 = {};
    linea_1.cantidad = 10;
    linea_1.unidad_medida = 'KG';
    linea_1.codigo = 'P01';
    linea_1.descripcion = 'descripcion 1';
    linea_1.precio_unitario = 17.5;

    var linea_2 = {};
    linea_2.cantidad = 4;
    linea_2.unidad_medida = 'LT';
    linea_2.codigo = 'P02';
    linea_2.descripcion = 'descripcion 2';
    linea_2.precio_unitario = 5;

    detalle.push(linea_1);
    detalle.push(linea_2);

    comprobante.detalle = detalle;
    // var sInputFile = "./notas.xml";
    // var p = new x2j.Parser();
    // var sXMLData = fs.readFileSync( sInputFile, 'utf8' );
    var sInputFile;
    var p;
    var sXMLData;
    var json;
    async function jsonFunction () {
        var data = await xml2json(sXMLData);
    } 

    var jsonPlantilla;
    var start = async function start(comprobanteJson) {
        setComprobante(comprobanteJson);
        await xml2json(sXMLData);
        console.log("START 1");
        await build(comprobante, jsonPlantilla);
        console.log("START 2");
        var pdf = pdfBuilder.getData();
        console.log('START 3');
        console.log(pdf);
        return pdf
    }
    function setComprobante(comprobanteJson) {
        console.log('COMPROBANTE JSON');
        console.log(comprobanteJson);

        comprobante.prefijoRuc = 'RUC N°';
        comprobante.serie = comprobanteJson.vcSerie;
        comprobante.correlativo = comprobanteJson.correlativo;
        comprobante.razonSocialProveedor = comprobanteJson.documentoEntidad[1].nombreComercial;
        comprobante.direccionFiscalProveedor = comprobanteJson.documentoEntidad[1].direccionFiscal;
        comprobante.rucProveedor = comprobanteJson.documentoEntidad[1].documento;
        comprobante.rucComprador = comprobanteJson.documentoEntidad[0].documento;
        comprobante.razonSocialComprador = comprobanteJson.documentoEntidad[0].nombreComercial;
        comprobante.direccionFiscalComprador = comprobanteJson.documentoEntidad[0].direccionFiscal;
        comprobante.moneda = comprobanteJson.moneda;
        comprobante.fechaEmisionString = comprobanteJson.fechaEmision.slice(0,10);
        comprobante.tipoCambio = '-';
        comprobante.pagoBanco = '-';
        if (comprobante.direccionFiscalComprador === null || comprobante.direccionFiscalComprador === undefined) {
            comprobante.direccionFiscalComprador = '';
        }

        switch(comprobanteJson.idTipoComprobante) {
            case '20':    
                sInputFile = 'servidor/utilitarios/plantillasPdf/retencion.xml';
                comprobante.orientacion = 'landscape';
                comprobante.tipoComprobante = 'RETENCIÓN ELECTRONICA';
                comprobante.documentoReferencia = comprobanteJson.documentoReferencia;
                comprobante.totalComprobante = comprobanteJson.totalcomprobante;
                comprobante.montoDescuento = comprobanteJson.montoDescuento;
                comprobante.montoComprobante = comprobanteJson.montoComprobante;
                comprobante.idTipoComprobante = comprobanteJson.idTipoComprobante;
                comprobante.igv = comprobanteJson.igv;
                // comprobante.idTipoDocumentoComprador = comprobanteJson.idTipoDocumentoComprador;
                console.log('SET PLANTILLA Retencion');
                break;
            case '40':    
                sInputFile = 'servidor/utilitarios/plantillasPdf/percepcion.xml';
                comprobante.orientacion = 'landscape';
                comprobante.tipoComprobante = 'PERCEPCIÓN ELECTRONICA';
                console.log(comprobante.logo);
                comprobante.porcentajeImpuesto = getPorcentajeOfString((JSON.parse(comprobanteJson.documentoParametro[0].json)).valor);

                comprobante.razonSocialProveedor = comprobanteJson.razonSocialProveedor;
                comprobante.direccionFiscalProveedor = '';

                comprobante.serie = '';
                comprobante.numeroComprobante = comprobanteJson.numeroComprobante;
                comprobante.razonSocialComprador = comprobanteJson.razonSocialComprador;

                comprobante.documentoReferencia = comprobanteJson.documentoReferencia;
                comprobante.totalComprobante = comprobanteJson.totalComprobante;
                comprobante.montoDescuento = comprobanteJson.montoDescuento;
                comprobante.montoComprobante = comprobanteJson.montoComprobante;
                comprobante.idTipoComprobante = comprobanteJson.idTipoComprobante;
                comprobante.igv = comprobanteJson.igv;
                comprobante.mensaje = 'Representación impresa de PERCEPCION ELECTRONICA Consulte en www.sunat.gob.pe';
                // comprobante.idTipoDocumentoComprador = comprobanteJson.idTipoDocumentoComprador;
                console.log('SET PLANTILLA PERCEPCION');
                break;
        }
        p = new x2j.Parser();
        sXMLData = fs.readFileSync(sInputFile, 'utf8');
    }
    function getPorcentajeOfString(cadena) {
        var posicionInicial = cadena.indexOf('(') + 1;
        var posicionFinal = 0;
        for( var a = posicionInicial ; a < cadena.length ; a++ ) {
            if ( cadena[a] == '%' ) {
                posicionFinal = a;
                break;
            }
        }
        var porcentaje = cadena.substring(posicionInicial, posicionFinal);
        return Number(porcentaje).toFixed(2);
    }
    async function xml2json(xml) {
        return new Promise((resolve, reject) => {
            p.parseString(xml, function (err, json) {
                if (err)
                    reject(err);
                else {
                    var result = JSON.parse(JSON.stringify(json));
                    jsonPlantilla = result;
                    resolve(result);
                }
            });
        });
    }

    function build(dto, json) {
        return new Promise((resolve, reject) => {
            var archivo = pdfBuilder.init(dto, 'A4', comprobante.orientacion, json);
            resolve(archivo);
            // resolve(pdfBuilder.getData());
        });
    }
    var getData = function getData() {
        // pdfBuilder.getData();
        return new Promise((resolve, reject) => {
            var data = pdfBuilder.getData();
            resolve(data);
        });
    }
    /*
    p.parseString( sXMLData, function( err, result ) {
        var s = JSON.parse(JSON.stringify( result, undefined, 3 ));
        // console.log(s.XMLToPDF.group[1].$['data']);
        //console.log(s.XMLToPDF.group[0].text[1]);
        /*console.log(s);
        console.log(s.XMLToPDF.group[4].cell[0].$['font-color']);
        console.log(s.XMLToPDF.$);
        console.log(s.XMLToPDF.$['data']);
        pdfBuilder.init(comprobante, 'A4', 'landscape', s);
        var data = pdfBuilder.getData();
        console.log(JSON.stringify(data));
    });
    */
    return {
        start: start,
        getData: getData
    }
}());

exports.start = module.start;
exports.getData = module.getData;