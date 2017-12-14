/**
 * persistencia de la tabla t_comprobantepago en la variable ComprobantePago
 * Modificado --- creado --/--/----
 * @author Renato creado 14/12/2017
 * @argument 1 sobrenombre de la tabla
 * @argument 2 campos de la tabla
 * @argument 3 tabla sqlite
 */
var DocReferencia = conexion.define(
    'DocReferencia',{
        id:{
            type: sequelize.INTEGER,
            field: "se_idocreferencia",
            autoIncrement: true,
            unique: true,
            primaryKey: true,
            allowNull:false   
        },
        iDocOrigen: {
          type: sequelize.INTEGER(32),
          field: "in_idoc_origen",
          allowNull:false 
        },
        iDocDestino: {
          type: sequelize.INTEGER(32),
          field: "se_idoc_destino",
          allowNull:false 
        },
        tipoDocOri: {
          type: sequelize.TEXT(3),
          field: "ch_tipo_doc_ori",
          allowNull:false 
        },
        tipoDocDe: {
          type: sequelize.TEXT(3),
          field: "ch_tipo_doc_des",
          allowNull:false 
        },
        serieDest: {
          type: sequelize.TEXT(4),
          field: "ch_serie_dest",
          allowNull:false 
        },
        corrDest: {
          type: sequelize.TEXT(8),
          field: "ch_corr_dest",
          allowNull:false 
        },
        fecEmiDest: {
          type: sequelize.TEXT,
          field: "da_fec_emi_dest",
          allowNull:false 
        },
        totImpDest: {
          type: sequelize.REAL(12,2),
          field: "nu_tot_imp_dest",
          allowNull:false 
        },
        totImpAux: {
          type: sequelize.REAL(12,2) ,
          field: "nu_tot_imp_aux",
          allowNull:false 
        },
        totPorAux: {
          type: sequelize.REAL(12,2) ,
          field: "nu_tot_por_aux",
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
        tableName: 't_doc_referenci',
        timestamps: false
    }
);