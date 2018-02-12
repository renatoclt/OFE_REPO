/**
 * persistencia de la tabla t_serie en la variable Serie
 * @author Renato Modificado 10/01/2018
 * @author Renato creado 14/12/2017
 * @argument 1 sobrenombre de la tabla
 * @argument 2 campos de la tabla
 * @argument 3 tabla sqlite
 */
var QueryDocParametro = conexion.define('QueryDocParametro',
  {
    id:{
      type: sequelize.INTEGER,
      field: "in_idocparametro",
      autoIncrement: true,
      unique: true,
      primaryKey: true
    },
    comprobantePago: {
      type: sequelize.INTEGER(32),
      field: "in_icomprobantepago",
      allowNull:false
    },
    parametroDoc: {
      type: sequelize.INTEGER(32),
      field: "in_iparam_doc",
    },
    json: {
      type: sequelize.TEXT,
      field: "vc_json",
      allowNull:false
    },
    tipo: {
      type: sequelize.TEXT(4),
      field: "in_tipo",
      allowNull:false
    },
    valor: {
      type: sequelize.INTEGER(32),
      field: "vc_valor",
      allowNull:false
    },
    auxEntero: {
        type: sequelize.INTEGER(32),
        field: "aux_entero",
        allowNull:false
    },
    auxImporte: {
        type: sequelize.INTEGER(32),
        field: "aux_importe",
        allowNull:false
    },
    auxFecha: {
        type: sequelize.INTEGER(32),
        field: "aux_fecha",
        allowNull:false
    },
    auxCaracter: {
        type: sequelize.INTEGER(32),
        field: "aux_caracter",
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
    tableName: 'fe_query_t_doc_referenci',
    timestamps: false,
  }
);

QueryDocRefenci.sync();

module.exports = QueryDocRefenci;