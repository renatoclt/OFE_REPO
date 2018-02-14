/**
 * persistencia de la tabla t_serie en la variable Serie
 * @author Renato Modificado 10/01/2018
 * @author Renato creado 14/12/2017
 * @argument 1 sobrenombre de la tabla
 * @argument 2 campos de la tabla
 * @argument 3 tabla sqlite
 */
var SerieQuery =require('../msdocumentosquery/SerieQuery');
var EntParametrosQuery =require('../msdocumentosquery/EntParametrosQuery');
var QueryEntidad = conexion.define('QueryEntidad',
  {
    id:{
      type: sequelize.INTEGER,
      field: "se_identidad",
      autoIncrement: true,
      unique: true,
      primaryKey: true
    },
    documento: {
      type: sequelize.INTEGER(32),
      field: "vc_documento",
      allowNull:false
    },
    denominacion: {
      type: sequelize.INTEGER(32),
      field: "vc_denominacion",
    },
    nombreComercial: {
      type: sequelize.TEXT,
      field: "vc_nom_comercia",
      allowNull:false
    },
    direccion: {
      type: sequelize.TEXT(4),
      field: "vc_dir_fiscal",
      allowNull:false
    },
    correo: {
      type: sequelize.INTEGER(32),
      field: "vc_correo",
      allowNull:false
    },
    logo: {
      type: sequelize.TEXT,
      field: "vc_logo",
      allowNull:false
    },
    pais: {
        type: sequelize.TEXT,
        field: "vc_pais",
        allowNull:false
    },
    ubigeo: {
      type: sequelize.TEXT,
      field: "vc_ubigeo",
    },
    tipoDocumento: {
      type: sequelize.TEXT,
      field: "vc_tipo_documento",
    },
    idTipoDocumento: {
      type: sequelize.TEXT,
      field: "in_tipo_documento",
    },
    idEbiz: {
      type: sequelize.TEXT,
      field: "vc_idebiz",
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
    tableName: 'fe_query_t_entidad',
    timestamps: false,
  }
);

QueryEntidad.hasMany(SerieQuery,
  {
      as: 'series',
      foreignKey: 'inIentidad'
  });
  QueryEntidad.hasMany(EntParametrosQuery,
  {
      as: 'parametros',
      foreignKey: 'inIentidad'
  });  

QueryEntidad.sync();

module.exports = QueryEntidad;