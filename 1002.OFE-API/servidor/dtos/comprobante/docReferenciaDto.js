/**
 * @author --- Modificado **-**-****
 * @author renato creado 18-12-2017 
 */
var DocReferencia = require('../../modelos/comprobantes/docReferencia')

/**
 * Funcion que guarda docReferencia
 * 
 */
DocReferencia.guardar = function maestraGuardar(){
    return DocReferencia.create({
        usuarioCreacion:'renato',
        usuarioModificacion:'renato',
        fechaCreacion:'1511974677952',
        fechaModificacion:'1511974677952',
        estado:1,
        id:null,
        idDocumentoOrigen:'tengo que crear local',
        idDocumentoDestino:'9ca495ce-0f74-468b-9cd4-a008734c8ca6',
        tipoDocumentoOrigen:'3',
        tipoDocumentoDestino:'1',
        serieDocumentoDestino:'F001',
        correlativoDocumentoDestino:'0032',
        fechaEmisionDestino:  new Date(1505260800000).toLocaleString(),
        totalImporteDestino:'200',
        totalImporteAuxiliarDestino:'6',
        totalPorcentajeAuxiliarDestino:'3',
        tipoDocumentoOrigenDescripcion:'RETENCION',
        tipoDocumentoDestinoDescripcion:'FACTURA',
        monedaDestino:'PEN',
        totalMonedaDestino:'200.00',
        polizaFactura:'poliza',
        anticipo:'0.00',
        auxiliar1:'1.00',
        auxiliar2:'194.00'
    });
}

module.exports = DocReferencia;
