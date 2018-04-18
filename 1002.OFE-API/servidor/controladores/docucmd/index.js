var pdfBuilder = require('sfulasalle-pdf-builder');
var fs = require( 'fs' );
var x2j = require( 'xml2js' );
var logoSimple = require('../../utilitarios/plantillasPdf/logoEbiz');
var logotipoEbiz = require('../../utilitarios/plantillasPdf/logotipoEbiz');

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
        // console.log(jsonPlantilla);
        await build(comprobante, jsonPlantilla);
        console.log("START 2");
        var pdf = pdfBuilder.getData();
        console.log('START 3');
        return pdf
    }
    function setComprobante(comprobanteJson) {
        console.log('COMPROBANTES JSON DEVUELTO');
        console.log(comprobanteJson);
        var proveedor;
        var comprador;
        var subtoTotal;
        comprobante.prefijoRuc = 'RUC N°';
        if (comprobanteJson.vcSerie) {
            comprobante.serie = comprobanteJson.vcSerie.toUpperCase();
        }
        comprobante.correlativo = comprobanteJson.correlativo;
        comprobante.moneda = comprobanteJson.moneda.toUpperCase();
        comprobante.fechaEmisionString = comprobanteJson.fechaEmision.slice(0,10);
        comprobante.tipoCambio = '-';
        comprobante.pagoBanco = '-';
        
        for ( var a = 0 ; a < comprobanteJson.documentoEntidad.length ; a++ ) {
            if (comprobanteJson.documentoEntidad[a].idTipoEntidad == '1') {
                proveedor = comprobanteJson.documentoEntidad[a];
                continue;
            }
            if (comprobanteJson.documentoEntidad[a].idTipoEntidad == '2') {
                comprador = comprobanteJson.documentoEntidad[a];
                continue;
            }
        }
        comprobante.idTipoDocumentoComprador = comprador.tipoDocumento;
        comprobante.razonSocialProveedor = proveedor.denominacion.toUpperCase();
        comprobante.direccionFiscalProveedor = proveedor.direccionFiscal.toUpperCase();
        comprobante.rucProveedor = proveedor.documento;
        comprobante.rucComprador = comprador.documento;
        comprobante.razonSocialComprador = comprador.denominacion.toUpperCase();
        comprobante.direccionFiscalComprador = comprador.direccionFiscal.toUpperCase();
        if (comprobante.direccionFiscalComprador === null || comprobante.direccionFiscalComprador === undefined) {
            comprobante.direccionFiscalComprador = '';
        }
        if (comprobante.direccionFiscalProveedor === null || comprobante.direccionFiscalProveedor === undefined) {
            comprobante.direccionFiscalProveedor = '';
        }

        // footer
        comprobante.mensaje = 'Representación impresa de RETENCION ELECTRONICA \nConsulte en www.sunat.gob.pe';
        comprobante.logoEbiz = logotipoEbiz.logotipoEbiz;

        switch(comprobanteJson.idTipoComprobante) {
            case '20':    
                sInputFile = 'servidor/utilitarios/plantillasPdf/retencion.xml';
                comprobante.orientacion = 'landscape';
                comprobante.tipoComprobante = 'RETENCIÓN ELECTRÓNICA';
                comprobante.documentoReferencia = comprobanteJson.documentoReferencia;
                comprobante.totalComprobante = comprobanteJson.totalcomprobante;
                comprobante.montoDescuento = comprobanteJson.montoDescuento;
                comprobante.montoComprobante = comprobanteJson.montoComprobante;
                comprobante.idTipoComprobante = comprobanteJson.idTipoComprobante;
                comprobante.igv = comprobanteJson.igv;
                for ( var a = 0 ; a < comprobante.documentoReferencia.length ; a++ ) {
                    comprobante.documentoReferencia[a]['fechaEmisionDestinoString'] = comprobante.documentoReferencia[a].fechaEmisionDestino;
                }
                // comprobante.idTipoDocumentoComprador = comprobanteJson.idTipoDocumentoComprador;
                console.log('SET PLANTILLA Retencion');
                break;
            case '40':    
                sInputFile = 'servidor/utilitarios/plantillasPdf/percepcion.xml';
                comprobante.orientacion = 'landscape';
                comprobante.tipoComprobante = 'PERCEPCIÓN ELECTRÓNICA';
                comprobante.porcentajeImpuesto = getPorcentajeOfString((JSON.parse(comprobanteJson.documentoParametro[0].json)).valor);

                comprobante.razonSocialProveedor = comprobanteJson.razonSocialProveedor;
                // comprobante.direccionFiscalProveedor = '';

                comprobante.serie = '';
                comprobante.numeroComprobante = comprobanteJson.numeroComprobante;
                // comprobante.razonSocialComprador = comprobanteJson.razonSocialComprador;

                comprobante.documentoReferencia = comprobanteJson.documentoReferencia;
                comprobante.documentoReferencia.forEach(item => {
                    item.totalPorcentajeAuxiliarDestino = comprobante.porcentajeImpuesto;
                });
                for ( var a = 0 ; a < comprobante.documentoReferencia.length ; a++ ) {
                    comprobante.documentoReferencia[a]['fechaEmisionDestinoString'] = comprobante.documentoReferencia[a].fechaEmisionDestino;
                }
                comprobante.totalComprobante = comprobanteJson.totalComprobante;
                comprobante.montoDescuento = comprobanteJson.montoDescuento;
                comprobante.montoComprobante = comprobanteJson.montoComprobante;
                comprobante.idTipoComprobante = comprobanteJson.idTipoComprobante;
                comprobante.igv = comprobanteJson.igv;
                // comprobante.idTipoDocumentoComprador = comprobanteJson.idTipoDocumentoComprador;
                console.log('SET PLANTILLA PERCEPCION');
                break;
            case '01': 
                sInputFile = 'servidor/utilitarios/plantillasPdf/factura.xml';
                comprobante.orientacion = 'portrait';
                comprobante.tipoComprobante = 'FACTURA ELECTRÓNICA';
                comprobante.serie = comprobanteJson.vcSerie;
                comprobante.correlativo = comprobanteJson.correlativo;
                comprobante.observacionComprobante = comprobanteJson.observacionComprobante;
                if (comprobanteJson.documentoReferencia.length == 0) {
                    comprobante.anticipo = 0;
                } else {
                    comprobante.anticipo = 1;
                }
                comprobante.documentoReferencia = comprobanteJson.documentoReferencia;
                comprobante.detalleEbiz = comprobanteJson.detalleEbiz;

                for ( var a = 0 ; a < comprobante.detalleEbiz.length ; a++ ) {
                    comprobante.detalleEbiz[a]['subtotalIgv'] = comprobante.detalleEbiz[a].detalle.subtotalIgv;
                    comprobante.detalleEbiz[a]['subtotalIsc'] = comprobante.detalleEbiz[a].detalle.subtotalIsc;
                    comprobante.detalleEbiz[a]['descuento'] = comprobante.detalleEbiz[a].detalle.descuento;
                    comprobante.detalleEbiz[a]['unidadMedida'] = comprobante.detalleEbiz[a].codigoUnidadMedida;
                }
                comprobante.montoComprobante = comprobanteJson.montoComprobante;
                for ( var a = 0; a < comprobanteJson.documentoConcepto.length ; a++) {
                    if ( comprobanteJson.documentoConcepto[a].idConcepto == '5' ) {
                        subtoTotal = comprobanteJson.documentoConcepto[a].importe;
                    }
                    switch (comprobanteJson.documentoConcepto[a].idConcepto) {
                        case '2':
                            comprobante.totalOpInafectas = Number(comprobanteJson.documentoConcepto[a].importe).toFixed(2);
                            break;
                        case '3':
                            comprobante.totalOpExoneradas = Number(comprobanteJson.documentoConcepto[a].importe).toFixed(2);
                            break;
                        case '4':
                            comprobante.totalOpGravadas = Number(comprobanteJson.documentoConcepto[a].importe).toFixed(2);
                            break;
                        case '5':
                            comprobante.subtotal = Number(comprobanteJson.documentoConcepto[a].importe).toFixed(2);
                            comprobante.subtotalComprobante = Number(comprobanteJson.documentoConcepto[a].importe).toFixed(2);
                            break;
                        case '8':
                            comprobante.totalDetraccion = Number(comprobanteJson.documentoConcepto[a].importe).toFixed(2);
                            break;
                        case '10':
                            comprobante.descuento = Number(comprobanteJson.documentoConcepto[a].importe).toFixed(2);
                            break;
                    }
                }
                comprobante.isc = Number(comprobanteJson.isc).toFixed(2);
                comprobante.igv = Number(comprobanteJson.igv).toFixed(2);
                comprobante.totalAnticipo = Number(comprobanteJson.totalAnticipos).toFixed(2);
                comprobante.otrosTributos = Number(comprobanteJson.otrosTributos).toFixed(2);
                comprobante.totalOtrosCargos = '0.00'; 
                comprobante.totalComprobante = Number(comprobanteJson.totalComprobante).toFixed(2);
                break;
            case '03': 
                sInputFile = 'servidor/utilitarios/plantillasPdf/factura.xml';
                comprobante.orientacion = 'portrait';
                comprobante.tipoComprobante = 'BOLETA ELECTRÓNICA';
                comprobante.serie = comprobanteJson.vcSerie;
                comprobante.correlativo = comprobanteJson.correlativo;
                comprobante.observacionComprobante = comprobanteJson.observacionComprobante;
                if (comprobanteJson.documentoReferencia.length == 0) {
                    comprobante.anticipo = 0;
                } else {
                    comprobante.anticipo = 1;
                }
                comprobante.documentoReferencia = comprobanteJson.documentoReferencia;
                comprobante.detalleEbiz = comprobanteJson.detalleEbiz;

                for ( var a = 0 ; a < comprobante.detalleEbiz.length ; a++ ) {
                    comprobante.detalleEbiz[a]['subtotalIgv'] = comprobante.detalleEbiz[a].detalle.subtotalIgv;
                    comprobante.detalleEbiz[a]['subtotalIsc'] = comprobante.detalleEbiz[a].detalle.subtotalIsc;
                    comprobante.detalleEbiz[a]['descuento'] = comprobante.detalleEbiz[a].detalle.descuento;
                    comprobante.detalleEbiz[a]['unidadMedida'] = comprobante.detalleEbiz[a].codigoUnidadMedida;
                }
                comprobante.montoComprobante = comprobanteJson.montoComprobante;
                for ( var a = 0; a < comprobanteJson.documentoConcepto.length ; a++) {
                    if ( comprobanteJson.documentoConcepto[a].idConcepto == '5' ) {
                        subtoTotal = comprobanteJson.documentoConcepto[a].importe;
                    }
                    switch (comprobanteJson.documentoConcepto[a].idConcepto) {
                        case '2':
                            comprobante.totalOpInafectas = Number(comprobanteJson.documentoConcepto[a].importe).toFixed(2);
                            break;
                        case '3':
                            comprobante.totalOpExoneradas = Number(comprobanteJson.documentoConcepto[a].importe).toFixed(2);
                            break;
                        case '4':
                            comprobante.totalOpGravadas = Number(comprobanteJson.documentoConcepto[a].importe).toFixed(2);
                            break;
                        case '5':
                            comprobante.subtotal = Number(comprobanteJson.documentoConcepto[a].importe).toFixed(2);
                            comprobante.subtotalComprobante = Number(comprobanteJson.documentoConcepto[a].importe).toFixed(2);
                            break;
                        case '8':
                            comprobante.totalDetraccion = Number(comprobanteJson.documentoConcepto[a].importe).toFixed(2);
                            break;
                        case '10':
                            comprobante.descuento = Number(comprobanteJson.documentoConcepto[a].importe).toFixed(2);
                            break;
                    }
                }
                comprobante.isc = Number(comprobanteJson.isc).toFixed(2);
                comprobante.igv = Number(comprobanteJson.igv).toFixed(2);
                comprobante.totalAnticipo = Number(comprobanteJson.totalAnticipos).toFixed(2);
                comprobante.otrosTributos = Number(comprobanteJson.otrosTributos).toFixed(2);
                comprobante.totalOtrosCargos = '0.00'; 
                comprobante.totalComprobante = Number(comprobanteJson.totalComprobante).toFixed(2);
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