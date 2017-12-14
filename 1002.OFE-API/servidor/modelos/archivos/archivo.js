var Archivo = conexion.define(
    'Archivo',{
        id:{
            type: sequelize.INTEGER,
            field: "se_iproducto",
            autoIncrement: true,
            unique: true,
            primaryKey: true
        },
        idComprobantePago: {
            type: sequelize.INTEGER(32),
            field: "in_idComprobantePago",
        },
        ubicacion: {
            type: sequelize.TEXT,
            field: "vc_ubicacion",
        },
        tipo: {
            type: sequelize.INTEGER(32),
            field: "in_tipo",
        },
        usuarioCreacion: {
          type: sequelize.TEXT,
          field: "vc_usu_creacion",
        },
        usuarioModificacion: {
          type: sequelize.TEXT,
          field: "vc_usu_modifica",
        },
        fechaCreacion: {
          type: sequelize.TEXT(6),
          field: "ts_fec_creacion",
        },
        fechaModificacion: {
          type: sequelize.TEXT(6),
          field: "ts_fec_modifica",
        },
        estado: {
          type: sequelize.INTEGER(32),
          field: "in_estado"
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
        tableName: 't_archivo',
        timestamps: false
    }
);