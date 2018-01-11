var EntidadQuery = conexion.define('EntidadQuery',
  {
    seIentidad:{
      type: sequelize.INTEGER,
      field: "se_ientidad",
      unique: true,
      primaryKey: true,
      allowNull:false            
    },
    vcDocumento: {
      type: sequelize.TEXT,
      field: "vc_documento",
      allowNull:false
    },
    vc_denominacion: {
      type: sequelize.TEXT,
      field: "vcDenominacion"
    },
    vc_nom_comercia: {
      type: sequelize.TEXT,
      field: "vcNomComercia",
      allowNull:false
    },
    vc_dir_fiscal: {
      type: sequelize.TEXT,
      field: "vcDirFiscal"
    },
    vc_correo: {
      type: sequelize.TEXT,
      field: "vcCorreo"
    },
    vc_logo: {
      type: sequelize.TEXT,
      field: "vcLogo"
    },
    vc_pais: {
      type: sequelize.TEXT,
      field: "vcPais"
    },
    vc_ubigeo: {
      type: sequelize.TEXT,
      field: "vcUbigeo"
    },
    vc_tipo_documento: {
      type: sequelize.TEXT,
      field: "vcTipoDocumento"
    },
    in_tipo_documento: {
      type: sequelize.INTEGER,
      field: "inTipoDocumento"
    },
    vc_idebiz: {
      type: sequelize.TEXT,
      field: "vcIdebiz"
    },
    vc_usu_creacion: {
      type: sequelize.TEXT,
      field: "vcUsuCreacion"
    },
    vc_usu_modifica: {
      type: sequelize.TEXT,
      field: "vcUsuModifica"
    },
    ts_fec_creacion: {
      type: sequelize.TEXT,
      field: "tsFecCreacion"
    },
    ts_fec_modifica: {
      type: sequelize.TEXT,
      field: "tsFecModifica"
    },
    in_estado: {
      type: sequelize.INTEGER,
      field: "inEstado"
    }
    /*,
    estadoSincronizado: {
      type: sequelize.INTEGER,
      field: "in_estado_sincronizado"
    }    */    
  },
  {
    tableName: 'fe_query_t_entidad',
    timestamps: false
  }
);

module.exports = EntidadQuery;