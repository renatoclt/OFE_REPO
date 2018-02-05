/**
 * persistencia de la tabla fe_comprobante_t_doc_entidad en la variable Entidad
 * Modificado --- creado --/--/----
 * @author Renato creado 19/01/2018
 * @argument 1 sobrenombre de la tabla
 * @argument 2 campos de la tabla
 * @argument 3 tabla sqlite
 */
var DocumentoReferencia = conexion.define('DocumentoReferencia',
  {
    id:{
        type: sequelize.INTEGER,
        field: "se_idocreferencia",
        autoIncrement: true,
        unique: true,
        primaryKey: true,
        allowNull: false     
    },

    idDocumentoOrigen: {
      type: sequelize.TEXT,
      field: "in_idoc_origen",
      allowNull: false
    },

    idDocumentoDestino: {
      type: sequelize.TEXT,
      field: "se_idoc_destino",
      allowNull: true
    },


    tipoDocumentoOrigen: {
      type: sequelize.TEXT,
      field: "ch_tipo_doc_ori",
      allowNull: false
    },

    tipoDocumentoDestino: {
      type: sequelize.TEXT,
      field: "ch_tipo_doc_des",
      allowNull: true
    },

    serieDocumentoDestino: {
      type: sequelize.TEXT,
      field: "ch_serie_dest",
      allowNull: false
    },

    correlativoDocumentoDestino: {
      type: sequelize.TEXT,
      field: "ch_corr_dest",
      allowNull: false
    },

    fechaEmisionDestino: {
      type: sequelize.TEXT,
      field: "da_fec_emi_dest",
      allowNull: false
    },

    totalImporteDestino: {
      type: sequelize.TEXT,
      field: "nu_tot_imp_dest",
      allowNull: false
    },

    totalImporteAuxiliarDestino: {
      type: sequelize.TEXT,
      field: "nu_tot_imp_aux",
      allowNull: true
    },

    totalPorcentajeAuxiliarDestino: {
      type: sequelize.TEXT,
      field: "nu_tot_por_aux",
      allowNull: true
    },

    tipoDocumentoOrigenDescripcion: {
      type: sequelize.TEXT,
      field: "vc_tdocori_desc",
      allowNull: true
    },

    tipoDocumentoDestinoDescripcion: {
      type: sequelize.TEXT,
      field: "vc_tdocdes_desc",
      allowNull: true
    },

    monedaDestino: {
      type: sequelize.TEXT,
      field: "vc_mone_des",
      allowNull: true
    },

    totalMonedaDestino: {
      type: sequelize.TEXT,
      field: "de_tot_mone_des",
      allowNull: true
    },

    polizaFactura: {
      type: sequelize.TEXT,
      field: "vc_poliza_factura",
      allowNull: true
    },

    anticipo: {
      type: sequelize.TEXT,
      field: "de_anticipo",
      allowNull: true
    },

    auxiliar1: {
      type: sequelize.TEXT,
      field: "vc_aux_1",
      allowNull: true
    },

    auxiliar2: {
      type: sequelize.TEXT,
      field: "vc_aux_2",
      allowNull: true
    },

    usuarioCreacion: {
        type: sequelize.TEXT,
        field: "vc_usu_creacion",
        allowNull: false
    },

    usuarioModifica: {
        type: sequelize.TEXT,
        field: "vc_usu_modifica",
        allowNull: false
    },

    fechaCreacion: {
        type: sequelize.TEXT(6),
        field: "ts_fec_creacion",
        allowNull: false
    },
    fechaModificacion: {
        type: sequelize.TEXT(6),
        field: "ts_fec_modifica",
        allowNull: false
    },

    estadoComprobante: {
        type: sequelize.INTEGER(32),
        field: "in_estado",
        allowNull: false
    },

    fechaSincronizacion: {
        type: sequelize.TEXT,
        field: "ts_fec_sincronizado",
        allowNull: true
    },

    estadoSincronizado: {
        type: sequelize.INTEGER,
        field: "in_estado_sincronizado",
        allowNull: true
    }
    
  }, 
  {
    tableName: 'fe_comprobante_t_doc_referenci',
    timestamps: false
  }
);

module.exports = DocumentoReferencia;