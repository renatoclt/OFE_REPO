/**
 * persistencia de la tabla t_parametro_doc en la variable ParametroDoc
 * @author Renato Modificado 10/01/2018
 * @author Renato creado 14/12/2017
 * @argument 1 sobrenombre de la tabla
 * @argument 2 campos de la tabla
 * @argument 3 tabla sqlite
 */
var QueryProductoXComprobantePago = conexion.define('QueryProducto', {
    id: {
      type: sequelize.INTEGER,
      field: "in_idcomprobantepagodetalle",
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },
    comprobantePago: {
      type: sequelize.INTEGER(32),
      allowNull: false,
      field: "in_idcomprobantepago",
    },
    tipoPrecioVenta: {
      type: sequelize.INTEGER(32),
      field: "in_itipo_precioventa",
    },
    codigoPrecioVenta: {
      type: sequelize.TEXT,
      allowNull: false,
      field: "in_codigo_precioventa",
    },
    descripcionPrecioVenta: {
      type: sequelize.TEXT,
      allowNull: false,
      field: "vc_desc_precioventa",
    },
    tipoCalculoIsc: {
      type: sequelize.TEXT,
      allowNull: false,
      field: "in_itipo_calculoisc",
    },
    codigoCalculoIsc: {
      type: sequelize.TEXT(6),
      allowNull: false,
      field: "in_codigo_calculoisc",
    },
    calculoIsc: {
      type: sequelize.TEXT(6),
      allowNull: false,
      field: "vc_desc_calculoisc",
    },
    tipoAfectacionIgv: {
      type: sequelize.TEXT,
      field: "in_itipo_afectacionigv"
    },
    codigoAfectacionIgv: {
      type: sequelize.TEXT,
      allowNull: false,
      field: "in_codigo_afectacionigv",
    },
    descripcionAfectacionIgv: {
      type: sequelize.TEXT,
      allowNull: false,
      field: "vc_desc_afectacionigv",
    },
    afectacionIgv: {
      type: sequelize.TEXT(6),
      allowNull: false,
      field: "ch_afecta_igv",
    },
    guia: {
      type: sequelize.TEXT(6),
      allowNull: false,
      field: "in_idguia",
    },
    spotImpuesto: {
        type: sequelize.TEXT,
        field: "vc_spotimpuesto",
    },
    numeroSeguimiento: {
        type: sequelize.TEXT,
        field: "ch_numeroseguimiento",
    },
    numeroGuia: {
        type: sequelize.TEXT,
        field: "ch_numeroguia",
    },
    descripcionItem: {
        type: sequelize.TEXT,
        field: "vc_descripcionitem",
    },
    posicionProdXGuia: {
        type: sequelize.TEXT,
        field: "vc_posicionprodxguia",
    },
    numeroParteItem: {
        type: sequelize.TEXT,
        field: "vc_numeroparteitem",
    },
    posicionProdxoc: {
        type: sequelize.TEXT,
        field: "vc_posicionprodxoc",
    },
    productoConsignado: {
        type: sequelize.TEXT,
        field: "in_idproductoconsignado",
    },
    precioUnitarioItem: {
        type: sequelize.TEXT,
        field: "de_preciounitarioitem",
    },
    cantidadDespachada: {
        type: sequelize.TEXT,
        field: "de_cantidaddespachada",
    },
    movimiento: {
        type: sequelize.TEXT,
        field: "in_idmovimiento",
    },
    tablaUnidad: {
        type: sequelize.TEXT,
        field: "vc_idregistrounidad",
    },
    idTablaUnidad: {
        type: sequelize.TEXT,
        field: "vc_idtablaunidad",
    },
    codigoGuiaErp: {
        type: sequelize.TEXT,
        field: "vc_codigoguiaerp",
    },
    ejercicioGuia: {
        type: sequelize.TEXT,
        field: "vc_ejercicioguia",
    },
    tipoGuia: {
        type: sequelize.TEXT,
        field: "vc_tipoguia",
    },
    fechaEmisionGuia: {
        type: sequelize.TEXT,
        field: "ts_fechaemisionguia",
    },
    tipoSpot: {
        type: sequelize.TEXT,
        field: "vc_tipospot",
    },
    porcentajeImpuesto: {
        type: sequelize.TEXT,
        field: "de_porcentajeimpuesto",
    },
    montoImpuesto: {
        type: sequelize.TEXT,
        field: "de_montoimpuesto",
    },
    producto: {
        type: sequelize.TEXT,
        field: "in_iproducto",
    },
    codigoProducto: {
        type: sequelize.TEXT,
        field: "vc_codigo_producto",
    },
    posicion: {
        type: sequelize.TEXT,
        field: "vc_posicion",
    },
    unidadMedida: {
        type: sequelize.TEXT,
        field: "vc_unidadmedida",
    },
    precioTotalItem: {
        type: sequelize.TEXT,
        field: "de_preciototalitem",
    },
    subTotalIgv: {
        type: sequelize.TEXT,
        field: "nu_subtotal_igv",
    },
    subtotalIsc: {
        type: sequelize.TEXT,
        field: "nu_subtotal_isc",
    },
    pesoBruto: {
        type: sequelize.TEXT,
        field: "nu_peso_bruto",
    },
    pesoNeto: {
        type: sequelize.TEXT,
        field: "nu_peso_neto",
    },
    pesoTotal: {
        type: sequelize.TEXT,
        field: "nu_peso_total",
    },
    
    descuento: {
        type: sequelize.TEXT,
        field: "nu_descuento",
    },
   
  },
    {
      tableName: 'fe_query_t_productoxcomprobantepago',
      timestamps: false
    });
    QueryProductoXComprobantePago.sync();
  module.exports = QueryProductoXComprobantePago;