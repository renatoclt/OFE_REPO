var EntidadQueryOffline = conexion.define('EntidadQueryOffline',
  {
      id:{
      type: sequelize.INTEGER,
      field: "se_ientidad",
      unique: true,
      primaryKey: true,
      allowNull:false            
    },
      documento: {
      type: sequelize.TEXT,
      field: "vc_documento",
      allowNull:false
    },
    denominacion: {
      type: sequelize.TEXT,
      field: "vc_denominacion",
      allowNull:false
    },
    nombreComercial: {
      type: sequelize.TEXT,
      field: "vc_nom_comercia"
    },
    direccionFiscal: {
      type: sequelize.TEXT,
      field: "vc_dir_fiscal"
    },
    correoElectronico: {
      type: sequelize.TEXT,
      field: "vc_correo"
    },
    logo: {
      type: sequelize.TEXT,
      field: "vc_logo"
    },
    pais: {
      type: sequelize.TEXT,
      field: "vc_pais"
    },
    ubigeo: {
      type: sequelize.TEXT,
      field: "vc_ubigeo"
    },
    tipoDocumento: {
      type: sequelize.TEXT,
      field: "vc_tipo_documento"
    },
    idTipoDocumento: {
      type: sequelize.INTEGER,
      field: "in_tipo_documento"
    },
    idEbiz: {
      type: sequelize.TEXT,
      field: "vc_idebiz"
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
      type: sequelize.TEXT,
      field: "ts_fec_creacion",
      allowNull:false
    },
    fechaModificacion: {
      type: sequelize.TEXT,
      field: "ts_fec_modifica",
      allowNull:false
    },
    estado: {
      type: sequelize.INTEGER,
      field: "in_estado",
      allowNull:false
      }   
  },
  {
    tableName: 'fe_offline_fe_query_t_entidad',
    timestamps: false
  }
);

module.exports = EntidadQueryOffline;