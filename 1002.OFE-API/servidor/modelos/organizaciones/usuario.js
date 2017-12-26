/**
 * persistencia de la tabla t_usuario en la variable Usuario
 * Modificado --- creado --/--/----
 * @author Renato creado 14/12/2017
 * @argument 1 sobrenombre de la tabla
 * @argument 2 campos de la tabla
 * @argument 3 tabla sqlite
 */
var Usuario = conexion.define('Usuario',
  {
    id:{
      type: sequelize.INTEGER,
      field: "se_iusuario",
      autoIncrement: true,
      unique: true,
      primaryKey: true
    },
    nomUsuario: {
      type:  sequelize.TEXT,
      field: "vc_nom_usuario",
    },
    password:{
      type:  sequelize.TEXT,
      field: "vc_password",
    }
    ,
    nombre: {
      type: sequelize.TEXT,
      field: "vc_nombre",
    },
    apellido: {
      type: sequelize.TEXT,
      field: "vc_apellido",
    },
    docIdentidad: {
      type: sequelize.TEXT,
      field: "vc_docidentidad",
    },
    numDocIdentidad: {
      type: sequelize.TEXT,
      field: "vc_num_docidentidad",
    },
    correo: {
      type: sequelize.TEXT,
      field: "vc_correo",
    },
    identidad: {
      type: sequelize.INTEGER,
      field: "se_identidad",
    },
    usuarioCreacion: {
      type: sequelize.INTEGER,
      field: "vc_usu_creacion",
    },
    usuarioModificacion: {
      type: sequelize.INTEGER,
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
    tableName: 't_usuario',
    timestamps: false
  }
);

module.exports = Usuario;