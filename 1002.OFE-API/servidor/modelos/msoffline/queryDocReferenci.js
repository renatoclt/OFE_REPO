/**
 * persistencia de la tabla t_serie en la variable Serie
 * @author Renato Modificado 10/01/2018
 * @author Renato creado 14/12/2017
 * @argument 1 sobrenombre de la tabla
 * @argument 2 campos de la tabla
 * @argument 3 tabla sqlite
 */
var QueryDocRefenci = conexion.define('QueryDocRefenci',
  {
    id:{
      type: sequelize.INTEGER,
      field: "se_idocreferencia",
      autoIncrement: true,
      unique: true,
      primaryKey: true
    },
    docOrigen: {
      type: sequelize.INTEGER(32),
      field: "in_idoc_origen",
      allowNull:false
    },
    documentoDestino: {
      type: sequelize.INTEGER(32),
      field: "se_idoc_destino",
    },
    tipoDocumentoOrigen: {
      type: sequelize.TEXT,
      field: "ch_tipo_doc_ori",
      allowNull:false
    },
    concepto: {
      type: sequelize.TEXT(4),
      field: "ch_tipo_doc_des",
      allowNull:false
    },
    serieDestino: {
      type: sequelize.INTEGER(32),
      field: "ch_serie_dest",
      allowNull:false
    },
    corrDest: {
        type: sequelize.INTEGER(32),
        field: "ch_corr_dest",
        allowNull:false
    },
    fechaEmisionDestino: {
        type: sequelize.INTEGER(32),
        field: "da_fec_emi_dest",
        allowNull:false
    },
    totalImpustoDestino: {
        type: sequelize.INTEGER(32),
        field: "nu_tot_imp_dest",
        allowNull:false
    },
    totalPorAuxiliar: {
        type: sequelize.INTEGER(32),
        field: "nu_tot_por_aux",
        allowNull:false
    },
    tdocoriDesc: {
        type: sequelize.INTEGER(32),
        field: "vc_tdocori_desc",
        allowNull:false
    },
    
    usuarioCreacion: {
      type: sequelize.TEXT,
      field: "vc_usu_creacion",
      allowNull:false
    },
    usuarioModificacion: {
      type: sequelize.TEXT,
      field: "vc_usu_modifica",
      allowNull:false
    },
    fechaCreacion: {
      type: sequelize.TEXT(6),
      field: "ts_fec_creacion",
      allowNull:false
    },
    fechaModificacion: {
      type: sequelize.TEXT(6),
      field: "ts_fec_modifica",
      allowNull:false
    },
    estado: {
      type: sequelize.INTEGER(32),
      field: "in_estado",
      allowNull:false
    },
    fechaSincronizado: {
      type: sequelize.TEXT,
      field: "ts_fec_sincronizado"
    },
    estadoSincronizado: {
      type: sequelize.INTEGER,
      field: "in_estado_sincronizado"
    }        
  },
  {
    tableName: 'fe_query_t_doc_referenci',
    timestamps: false,
  }
);

QueryDocRefenci.sync();

module.exports = QueryDocRefenci;