/**
 * persistencia de la tabla t_entidad en la variable Entidad
 * Modificado --- creado --/--/----
 * @author Renato creado 14/12/2017
 * @argument 1 sobrenombre de la tabla
 * @argument 2 campos de la tabla
 * @argument 3 tabla sqlite
 */
var Entidad = conexion.define('Entidad', 
    {
        id: {
            type: sequelize.INTEGER,
            field: "se_ientidad",
            autoIncrement: true,
            unique: true,
            primaryKey: true
        },
        documento: {
            type: sequelize.TEXT,
            field: "vc_documento",
            allowNull:false
        },
        denominacion : {
            type: sequelize.TEXT,
            field: "vc_denominacion"
        },
        nombreComercial: {
            type: sequelize.TEXT,
            field: "vc_nom_comercia"
        },
        nombre: {
            type: sequelize.TEXT,
            field: "vc_nombre"
        },
        apellidoPaterno: {
            type: sequelize.TEXT,
            field: "vc_apellido_paterno"
        },
        apellidoMaterno: {
            type: sequelize.TEXT,
            field: "vc_apellido_materno"
        },
        direccion: {
            type: sequelize.TEXT,
            field: "vc_dir_fiscal"
        },
        correo: {
            type: sequelize.TEXT,
            field: "vc_correo"
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
        tableName: 't_entidad',
        timestamps: false
});

module.exports = Entidad;