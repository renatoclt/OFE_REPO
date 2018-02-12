/**
 * @author --- Modificado **-**-****
 * @author renato creado 22-01-2018 
 */
var QueryProductoDTO = require('../../modelos/msoffline/QueryProducto');
 /**
 * Funcion que guarda los comprobantes de pago
 * 
 */

QueryProductoDTO.guardar = function guardarQueryProducto(data){
    return QueryProductoDTO.create({
        id: data.id,
        comprobantePago: data.comprobantePago ,
        tipoPrecioVenta: data.tipoPrecioVenta ,
        codigoPrecioVenta: data.codigoPrecioVenta ,
        descripcionPrecioVenta: data.descripcionPrecioVenta ,
        tipoCalculoIsc: data.TipoCalculoIsc ,
        codigoCalculoIsc: data.codigoCalculoIsc ,
        calculoIsc: data.calculoIsc ,
        tipoAfectacionIgv: data.tipoAfectacionIgv ,
        codigoAfectacionIgv: data.codigoAfectacionIgv ,
        descripcionAfectacionIgv: data.descripcionAfectacionIgv ,
        afectacionIgv: data.afectacionIgv ,
        guia: data.guia ,
        spotImpuesto: data.spotImpuesto ,
        numeroSeguimiento: data.numeroSeguimiento ,
        numeroGuia: data.numeroGuia ,
        descripcionItem: data.descripcionItem ,
        posicionProdXGuia: data.posicionProdXGuia ,
        numeroParteItem: data.numeroParteItem ,
        posicionProdxoc: data.posicionProdxoc ,
        productoConsignado: data.productoConsignado ,
        precioUnitarioItem: data.precioUnitarioItem ,
        cantidadDespachada: data.cantidadDespachada ,
        movimiento: data.movimiento ,
        tablaUnidad: data.tablaUnidad ,
        idTablaUnidad: data.idTablaUnidad ,
        codigoGuiaErp: data.codigoGuiaErp ,
        ejercicioGuia: data.ejercicioGuia ,
        tipoGuia: data.tipoGuia ,
        fechaEmisionGuia: data.fechaEmisionGuia ,
        tipoSpot: data.tipoSpot ,
        porcentajeImpuesto: data.porcentajeImpuesto ,
        montoImpuesto: data.montoImpuesto ,
        producto: data.producto ,
        codigoProducto: data.codigoProducto ,
        posicion: data.posicion ,
        unidadMedida: data.unidadMedida ,
        precioTotalItem: data.precioTotalItem ,
        subTotalIgv: data.subTotalIgv ,
        subtotalIsc: data.subtotalIsc ,
        pesoBruto: data.pesoBruto ,
        pesoNeto: data.pesoNeto ,
        pesoTotal: data.pesoTotal ,
        descuento: data.descuento ,
    });
}

module.exports = QueryProductoDTO;
