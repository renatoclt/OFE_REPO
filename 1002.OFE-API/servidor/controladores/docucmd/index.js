var pdfBuilder = require('sfulasalle-pdf-builder');
var fs = require( 'fs' );
var x2j = require( 'xml2js' );

var module = {};
module = (function () {
    var comprobante = {};
    comprobante.prefijoRuc = 'RUC N°';
    comprobante.rucProveedor = '73037079108';
    comprobante.tipoComprobante = 'FACTURA ELECTRONICA';
    comprobante.serie = 'F011';
    comprobante.correlativo = '00000001';
    comprobante.logo = "data:image/png;base64,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";
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

        switch(comprobanteJson.idTipoComprobante) {
            case '20':    
                console.log('SET PLANTILLA Retencion');
                sInputFile = 'servidor/utilitarios/plantillasPdf/retencion.xml';
                comprobante.tipoComprobante = 'RETENCIÓN ELECTRONICA';
                comprobante.documentoReferencia = comprobanteJson.documentoReferencia;
                comprobante.totalComprobante = comprobanteJson.totalcomprobante;
                comprobante.montoDescuento = comprobanteJson.montoDescuento;
                comprobante.montoComprobante = comprobanteJson.montoComprobante;
                comprobante.idTipoComprobante = comprobanteJson.idTipoComprobante;
                comprobante.igv = comprobanteJson.igv;
                // comprobante.idTipoDocumentoComprador = comprobanteJson.idTipoDocumentoComprador;
                break;
            case '40':    
                console.log('SET PLANTILLA PERCPCION');
                sInputFile = 'servidor/utilitarios/plantillasPdf/percepcion.xml';
                comprobante.tipoComprobante = 'PERCEPCIÓN ELECTRONICA';
                comprobante.documentoReferencia = comprobanteJson.documentoReferencia;
                comprobante.totalComprobante = comprobanteJson.totalcomprobante;
                comprobante.montoDescuento = comprobanteJson.montoDescuento;
                comprobante.montoComprobante = comprobanteJson.montoComprobante;
                comprobante.idTipoComprobante = comprobanteJson.idTipoComprobante;
                comprobante.igv = comprobanteJson.igv;
                // comprobante.idTipoDocumentoComprador = comprobanteJson.idTipoDocumentoComprador;
                break;
        }
        p = new x2j.Parser();
        sXMLData = fs.readFileSync(sInputFile, 'utf8');
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
            var archivo = pdfBuilder.init(dto, 'A4', 'landscape', json);
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

    // llamadoFuncionAsincrona();

    async function llamadoFuncionAsincrona () {
        console.log('Invocando');
        for(let a = 1; a < 6 ; a++) {
            var result = await resolveFuncion(a);
            console.log(result);
        }
    }

    function resolveFuncion (numero) {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(numero);
            }, 1000)
        })
    }

    return {
        start: start,
        getData: getData
    }
}());

exports.start = module.start;
exports.getData = module.getData;