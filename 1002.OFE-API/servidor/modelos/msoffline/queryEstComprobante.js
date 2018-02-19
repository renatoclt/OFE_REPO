/**
 * persistencia de la tabla t_serie en la variable Serie
 * @author Renato Modificado 10/01/2018
 * @author Renato creado 14/12/2017
 * @argument 1 sobrenombre de la tabla
 * @argument 2 campos de la tabla
 * @argument 3 tabla sqlite
 */
var QueryEstComprobante = conexion.define('QueryEstComprobante',
  {
    id:{
      type: sequelize.INTEGER,
      field: "se_iestado",
      autoIncrement: true,
      unique: true,
      primaryKey: true
    },
    idioma: {
      type: sequelize.INTEGER(32),
      field: "se_iidioma",
      allowNull:false
    },
    descripcion: {
      type: sequelize.INTEGER(32),
      field: "vc_desc",
    },
    abreviatura: {
      type: sequelize.TEXT,
      field: "vc_abrev",
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
    tableName: 'fe_query_t_est_comprobante',
    timestamps: false,
  }
);

QueryEstComprobante.sync();

module.exports = QueryEstComprobante;