/**
 * persistencia de la tabla t_parametro_doc en la variable ParametroDoc
 * @author Renato Modificado 10/01/2018
 * @author Renato creado 14/12/2017
 * @argument 1 sobrenombre de la tabla
 * @argument 2 campos de la tabla
 * @argument 3 tabla sqlite
 */
var Sincronizacion = conexion.define('Sincronizacion',
  {
    id:{
      type: sequelize.INTEGER,
      field: "se_idSincronizacion",
      autoIncrement: true,
      unique: true,
      primaryKey: true
    },
    descripcion:{
      type: sequelize.TEXT,
      field: "vc_descripcion"
    },
    idioma:{
      type: sequelize.TEXT,
      field: "se_iidioma"
    },
    usuarioCreacion: {
      type: sequelize.TEXT,
      field: "vc_usu_creacion",
      allowNull: true
    },
    usuarioModificacion: {
      type: sequelize.TEXT,
      field: "vc_usu_modifica",
      allowNull: true
    },
    fechaCreacion: {
      type: sequelize.TEXT(6),
      field: "ts_fec_creacion",
      allowNull: true
    },
    fechaModificacion: {
      type: sequelize.TEXT(6),
      field: "ts_fec_modifica",
      allowNull: true
    },
    estado: {
      type: sequelize.INTEGER(32),
      field: "in_estado",
      allowNull:false,
    },
    fechaSincronizacion: {
      type: sequelize.TEXT,
      field: "ts_fec_sincronizado"
    },
    estadoSincronizado: {
      type: sequelize.INTEGER,
      field: "in_estado_sincronizado"
    },
    tipoComprobante: {
      type: sequelize.TEXT,
      field: "ts_tipo_comprobante"
    }       
  },
  {
    tableName: 'fe_offline_t_sincronizacion',
    timestamps: false
  }
);

Sincronizacion.sync();

module.exports = Sincronizacion;