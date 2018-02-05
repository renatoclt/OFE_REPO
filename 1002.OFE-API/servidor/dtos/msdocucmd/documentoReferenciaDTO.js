/**
 * @author --- Modificado **-**-****
 * @author renato creado 19-01-2018
 */
var DocumentoReferencia = require('../../modelos/msdocucmd/documentoReferencia');
//const Op = conexion.Op;
 /**
 * Funcion que guarda los comprobantes de pago
 * 
 */

DocumentoReferencia.guardar = function guardarDocumento(data){    
    return DocumentoReferencia.create({
        idDocumentoOrigen: data.idDocumentoOrigen ,
   //    idDocumentoDestino: data.idDocumentoDestino ,
        tipoDocumentoOrigen: data.tipoComprobante ,
    // tipoDocumentoDestino: data.tipoDocumentoDestino ,
        serieDocumentoDestino: data.serie ,
        correlativoDocumentoDestino: data.correlativo ,
        fechaEmisionDestino: (dateFormat(new Date(), "yyyy-mm-dd HH:MM:ss.l")),
        totalImporteDestino: data.totalImporteDestino ,
      //  totalImporteAuxiliarDestino: data.totalImporteAuxiliarDestino ,
      //  totalPorcentajeAuxiliarDestino: data.totalPorcentajeAuxiliarDestino ,
      //  tipoDocumentoOrigenDescripcion: data.tipoDocumentoOrigenDescripcion ,
      //  tipoDocumentoDestinoDescripcion: data.tipoDocumentoDestinoDescripcion ,
      //  monedaDestino: data.monedaDestino ,
      //  totalMonedaDestino: data.totalMonedaDestino ,
      //  polizaFactura: data.polizaFactura ,
      //  anticipo: data.anticipo ,
      //  auxiliar1: data.auxiliar1 ,
     //   auxiliar2: data.auxiliar2 ,
        usuarioCreacion: data.usuarioCreacion ,
        usuarioModifica: data.usuarioModifica ,
        fechaCreacion: (dateFormat(new Date(), "yyyy-mm-dd HH:MM:ss.l")) ,
        fechaModificacion: (dateFormat(new Date(), "yyyy-mm-dd HH:MM:ss.l")) ,
        estado: 1,
      //  fechaSincronizacion: data.fechaSincronizacion ,
//estadoSincronizado: data.estadoSincronizado ,
     //   generado : 0,
     //   motivo : data.motivo,
        //id: 0

    });
}

module.exports = DocumentoReferencia;