var pdfBuilder = require('sfulasalle-pdf-builder');
var fs = require( 'fs' );
var x2j = require( 'xml2js' );
var logoSimple = require('../../utilitarios/plantillasPdf/logoEbiz');
var logotipoEbiz = require('../../utilitarios/plantillasPdf/logotipoEbiz');
var EntidadParametro = require('../../dtos/msdocucmd/entidadParametroDTO');
var documentoAzureDTO = require('../../dtos/msoffline/documentoAzureDTO');
var constantes = require('../../utilitarios/constantes');
var comprobantesPermitidos = new Array();
var plantillaEntidad = new Map();
var plantillaDefecto = new Map();

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
    var sInputFile;
    var p;
    var sXMLData;
    var json;
    async function jsonFunction () {
        var data = await xml2json(sXMLData);
    } 

    var jsonPlantilla;
    var start = async function start(comprobanteJson) {
        console.log('START -1');
        await setComprobante(comprobanteJson);
        console.log('START 0');
        await xml2json(sXMLData);
        console.log("START 1");
        // console.log(jsonPlantilla);
        await build(comprobante, jsonPlantilla);
        console.log("START 2");
        var pdf = pdfBuilder.getData();
        console.log('START 3');
        return pdf
    }
    var initPdf = function () {
        comprobantesPermitidos.push(constantes.FILECMD.tipos_documento.factura);
        comprobantesPermitidos.push(constantes.FILECMD.tipos_documento.boleta);
        comprobantesPermitidos.push(constantes.FILECMD.tipos_documento.notaCredito);
        comprobantesPermitidos.push(constantes.FILECMD.tipos_documento.notaDebito);
        comprobantesPermitidos.push(constantes.FILECMD.tipos_documento.retencion);
        plantillaEntidad.set('00', constantes.FILECMD.parametros_entidad.logo);
        plantillaEntidad.set(constantes.FILECMD.tipos_documento.factura, constantes.FILECMD.parametros_entidad.plantillaFactura);
        plantillaEntidad.set(constantes.FILECMD.tipos_documento.boleta, constantes.FILECMD.parametros_entidad.plantillaBoleta);
        plantillaEntidad.set(constantes.FILECMD.tipos_documento.notaCredito, constantes.FILECMD.parametros_entidad.plantillaNotaCredito);
        plantillaEntidad.set(constantes.FILECMD.tipos_documento.notaDebito, constantes.FILECMD.parametros_entidad.plantillaNotaDebito);
        plantillaEntidad.set(constantes.FILECMD.tipos_documento.retencion, constantes.FILECMD.parametros_entidad.plantillaRetencion);
        plantillaDefecto.set('00', constantes.FILECMD.plantillas.logo);
        plantillaDefecto.set(constantes.FILECMD.tipos_documento.factura, constantes.FILECMD.plantillas.comprobantes);
        plantillaDefecto.set(constantes.FILECMD.tipos_documento.boleta, constantes.FILECMD.plantillas.comprobantes);
        plantillaDefecto.set(constantes.FILECMD.tipos_documento.notaCredito, constantes.FILECMD.plantillas.notas);
        plantillaDefecto.set(constantes.FILECMD.tipos_documento.notaDebito, constantes.FILECMD.plantillas.notas);
        plantillaDefecto.set(constantes.FILECMD.tipos_documento.retencion, constantes.FILECMD.plantillas.retencion);
    }

    // async function buscarPlantilla(tipoComprobante, serie, tipoSerie , entidad){
    //     let correlativo = 0;
    //     try{
    //         let data  = await Serie.buscarSerie(tipoComprobante, serie, tipoSerie , entidad); 
    //         correlativo = parseInt(data[0].dataValues.correlativo) + 1;
    //         await Serie.acturalizarCorrelativo(data[0].dataValues.idSerie , correlativo);
    //     }
    //     catch(e){
    //         console.log(e);
    //         correlativo = 1
    //     }
    //     return zfill(correlativo,8);
    // }
    // var obtenerPlantilla = async function (idEntidad, tipoComprobante) {
    //     let arrayData = new Array();
    
    //     try {
    //         let idParametro = plantillaEntidad[tipoComprobante];
    //         console.log('PARAMETROS');
    //         console.log(plantillaEntidad);
    //         console.log(tipoComprobante);
    //         console.log(idParametro);
    
    //         let entidadParametro = await EntidadParametro.findFirstByIdEntidadAndIdParametro(idEntidad, idParametro);
    
    //         if (entidadParametro != null) {
    //             console.log(entidadParametro);
    //             let JsonEntidadParametro = JSON.parse(entidadParametro);
    //             arrayData = documentoAzure.obtnerPlantillas(idEntidad);
    //         }
    //         else {
    //             arrayData = plantillaDefecto[tipoComprobante];
    //         }
    //     } catch (error) {
    //         console.log(error);
    //     }
    
    //     return arrayData;
    // }
    async function obtenerPlantilla(idEntidad, idTipoComprobante) {
        let plantilla = await buscarPlantilla(idEntidad, idTipoComprobante);

        console.log('PLANTILLA BD');
        console.log(plantilla.dataValues.plantillaPdf);
    }
    async function buscarPlantilla(idEntidad, idTipoComprobante){
        let plantilla = await documentoAzureDTO.buscar(idEntidad, idTipoComprobante);
        return plantilla;
    }
    async function setComprobante(comprobanteJson) {
        // initPdf();
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

                // comprobante.serie = '';
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
                        case '1':
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
                        case '12':
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
        
        let plantillaBuffer;
        plantillaBuffer = await buscarPlantilla(4, comprobanteJson.idTipoComprobante);

        console.log('PANTILA BD');
        var archivo = plantillaBuffer.dataValues.plantillaPdf;
        var Base64={_keyStr:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",encode:function(e){var t="";var n,r,i,s,o,u,a;var f=0;e=Base64._utf8_encode(e);while(f<e.length){n=e.charCodeAt(f++);r=e.charCodeAt(f++);i=e.charCodeAt(f++);s=n>>2;o=(n&3)<<4|r>>4;u=(r&15)<<2|i>>6;a=i&63;if(isNaN(r)){u=a=64}else if(isNaN(i)){a=64}t=t+this._keyStr.charAt(s)+this._keyStr.charAt(o)+this._keyStr.charAt(u)+this._keyStr.charAt(a)}return t},decode:function(e){var t="";var n,r,i;var s,o,u,a;var f=0;e=e.replace(/[^A-Za-z0-9+/=]/g,"");while(f<e.length){s=this._keyStr.indexOf(e.charAt(f++));o=this._keyStr.indexOf(e.charAt(f++));u=this._keyStr.indexOf(e.charAt(f++));a=this._keyStr.indexOf(e.charAt(f++));n=s<<2|o>>4;r=(o&15)<<4|u>>2;i=(u&3)<<6|a;t=t+String.fromCharCode(n);if(u!=64){t=t+String.fromCharCode(r)}if(a!=64){t=t+String.fromCharCode(i)}}t=Base64._utf8_decode(t);return t},_utf8_encode:function(e){e=e.replace(/\r\n/g,"\n");var t="";for(var n=0;n<e.length;n++){var r=e.charCodeAt(n);if(r<128){t+=String.fromCharCode(r)}else if(r>127&&r<2048){t+=String.fromCharCode(r>>6|192);t+=String.fromCharCode(r&63|128)}else{t+=String.fromCharCode(r>>12|224);t+=String.fromCharCode(r>>6&63|128);t+=String.fromCharCode(r&63|128)}}return t},_utf8_decode:function(e){var t="";var n=0;var r=c1=c2=0;while(n<e.length){r=e.charCodeAt(n);if(r<128){t+=String.fromCharCode(r);n++}else if(r>191&&r<224){c2=e.charCodeAt(n+1);t+=String.fromCharCode((r&31)<<6|c2&63);n+=2}else{c2=e.charCodeAt(n+1);c3=e.charCodeAt(n+2);t+=String.fromCharCode((r&15)<<12|(c2&63)<<6|c3&63);n+=3}}return t}}
        var plantillaDecoded = Base64.decode(archivo); // decode the string
        // console.log(plantillaDecoded);
        p = new x2j.Parser();
        sXMLData = fs.readFileSync(sInputFile, 'utf8');
        // sXMLData = plantillaDecoded;
        console.log('SXMLDATA');
        console.log(sXMLData);
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