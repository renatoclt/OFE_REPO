var Entidad = require('./entidad');
/**
 * persistencia de la tabla t_entidad en la variable Entidad
 * Modificado --- creado --/--/----
 * @author Renato creado 14/12/2017
 * @argument 1 sobrenombre de la tabla
 * @argument 2 campos de la tabla
 * @argument 3 tabla sqlite
 */
var EntidadParametro = conexion.define('EntidadParametro', 
    {
        id: {
            type: sequelize.INTEGER,
            field: "se_ientparametro",
            autoIncrement: true,
            unique: true,
            primaryKey: true
        },
        entidad: {
            type: sequelize.TEXT,
            field: "se_ientidad",
            allowNull:false
        },
        parametroEntidad : {
            type: sequelize.TEXT,
            field: "se_iparam_ent"
        },
        json: {
            type: sequelize.TEXT,
            field: "vc_json"
        },
        usuarioCreacion: {
            type: sequelize.TEXT,
            field: "vc_usu_creacion"
        },
        usuarioModifica: {
            type: sequelize.TEXT,
            field: "vc_usu_modifica"
        },
        fechaCreacion: {
            type: sequelize.TEXT(6),
            field: "ts_fec_creacion"
        },
        fechaModificacion: {
            type: sequelize.TEXT(6),
            field: "ts_fec_modifica"
        },
        estado: {
            type: sequelize.INTEGER(32),
            field: "in_estado"
        },
        fechaSincronizacion: {
            type: sequelize.TEXT,
            field: "ts_fec_sincronizado"
        },
        estadoSincronizado: {
            type: sequelize.INTEGER,
            field: "in_estado_sincronizado"
        }
    }, 
    {
        tableName: 't_ent_parametros',
        timestamps: false
});

module.exports = EntidadParametro;