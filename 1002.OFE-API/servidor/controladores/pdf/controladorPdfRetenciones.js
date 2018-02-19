var Serie = require('../../modelos/msdocumentosquery/SerieQuery');
var Entidad = require('../../modelos/comprobantes/feQuerydocEntidad');
var ComprobantePago = require('../../modelos/comprobantes/comprobantePagoQuery');
var constantes = require('../../utilitarios/constantes');
var EntidadParametro = require('../../dtos/msdocucmd/entidadParametroDTO');
var documentoAzure = require('../../dtos/configuracion/documentoAzureDTO');
var comprobantesPermitidos = new Array();
var plantillaEntidad = new Map();
var plantillaDefecto = new Map();
var PDFbuilder = require('./js/core/PDFBuilder');
var iniciar = function () {

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

MapeoPDFRetenciones = function (data) {
    iniciar();
    //Json Armado
    let numeroComprobante = data.numeroComprobante;
    documentoSerieCorrelativo = numeroComprobante.split('-');
    data.serie = documentoSerieCorrelativo[0];
    data.correlativo = documentoSerieCorrelativo[1];
    /*
     * data.logo png
     * INSERTAR EL LOGO AL OJBETO DATA
     * 
     */
    let idEntidadEmisor = 0;
    for (let instancia of data.documentoEntidad) {
        if (instancia.idTipoEntidad == constantes.FILECMD.tipos_entidad.emisor) {
            data.rucProveedor = instancia.Documento;
            data.direccionFiscalProveedor = instancia.direccionFiscalProveedor;
            data.razonSocialProveedor = instancia.denominacion;

            idEntidadEmisor = instancia.idEntidadEmisor;
        }
        else {
            if (instancia.idTipoEntidad == constantes.FILECMD.tipos_entidad.receDptor) {
                data.rucComprador = instancia.documento;
                data.direccionFiscarlComprador = instancia.direccionFiscarlComprador;
                data.idTipoDocumentoComprado = instancia.tipoDocumento;
                data.razonSocialComprador = instancia.denominacion;
            }
        }
    }
    let totalAnticipos = 0;
    for (let instancia of data.DocumentoReferencia) {
        instancia.totalPorcentajeAuxiliarDestino = (instancia.totalImporteAuxiliarDestino / instancia.totalImporteDestino * 100);
        data.tipoCambio = instancia.auxiliar1;
        totalAnticipos += instancia.anticipo;

        data.comprobanteAfecto = instancia.serieDocumentoDestino + '-' + instancia.correlativo;
    }
    data.totalAnticipos = totalAnticipos;

    let totalGravadas = 0.0;
    let totalExoneradas = 0.0;
    let totalInafectas = 0.0;
    let totalOtrosCargos = 0.0;

    for (let isntancia of data.documentoConcepto) {
        let codigoConcepto = instancia.idConcepto;

        if (codigoConcepto == constantes.FILECMD.conceptos.operacionesGravadas) {
            totalGravadas += instancia.Importe;
        }
        if (codigoConcepto == constantes.FILECMD.conceptos.operacionesExoneradas) {
            totalExoneradas += instancia.Importe;
        }
        if (codigoConcepto == constantes.FILECMD.conceptos.operacionesInafectas) {
            totalInafectas += instancia.Importe;
        }
        if (codigoConcepto == constantes.FILECMD.conceptos.otrosCargos) {
            totalGravadas += instancia.Importe;
        }
    }

    data.totalOpGravadas = totalGravadas;
    data.totalExoneradas = totalExoneradas;
    data.totalInafectas = totalInafectas;
    data.totalOtrosCargos = totalOtrosCargos;

    /**
     * Generacion PDF
     */
    let isVertical = true;
    let idTipoComprobante = data.idTipoComprobante;
    if (idTipoComprobante === constantes.FILECMD.tipos_documento.factura) {
        data.tipoComprobate = 'FACTURA ELECTRONICA';
    }
    else if (idTipoComprobante === constantes.FILECMD.tipos_documento.boleta) {
        data.tipoComprobate = 'BOLETA ELECTRONICA';
    }
    else if (idTipoComprobante === constantes.FILECMD.tipos_documento.notaCredito) {
        data.tipoComprobate = 'NOTA DE CREDITO ELECTRONICA';
    }
    else if (idTipoComprobante === constantes.FILECMD.tipos_documento.notaDebito) {
        data.tipoComprobante = 'NOTA DE DEBITO ELECTRONICA';
    }
    else if (idTipoComprobante === constantes.FILECMD.tipos_documento.retencion) {
        data.tipoComprobante = 'RETENCION ELECTRONICA';
        isVertical = false;
    }
    else if (idTipoComprobante === constantes.FILECMD.tipos_documento.comunicacionBajaComprobantes || idTipoComprobante === constantes.FILECMD.tipos_documento.comunicacionBajaNotas) {
        data.tipoComprobante = 'COMUNICACION DE BAJA ELECTRONICA';
    }
    //Obtener plantilla
    let entrada = new Array();
    entrada = obtenerPlantilla(idEntidadEmisor, data.idTipoComprobante);
    //Obtener logo
    data.logo = obtenerPlantilla(idEntidadEmisor, '00');

    PDFbuilder.builder.init(data);
    
}

var obtenerPlantilla = function (idEntidad, tipoComprobante) {
    let arrayData = new Array();

    try {
        let idParametro = plantillaEntidad[tipoComprobante];

        let entidadParametro = EntidadParametro.findFirstByIdEntidadAndIdParametro(idEntidad, idParametro);

        if (entidadParametro != null) {
            let JsonEntidadParametro = JSON.parse(entidadParametro);
            arrayData = documentoAzure.obtnerPlantillas(idEntidad);
        }
        else {
            arrayData = plantillaDefecto[tipoComprobante];
        }
    } catch (error) {
        console.log(error);
    }

    return arrayData;
}


module.exports = MapeoPDFRetenciones;