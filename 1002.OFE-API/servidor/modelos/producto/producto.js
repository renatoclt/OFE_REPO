var Producto = conexion.define('Producto', {
  id: {
    type: sequelize.INTEGER,
    field: "se_iproducto",
    autoIncrement: true,
    unique: true,
    primaryKey: true
  },
  idEntidad: {
    type: sequelize.INTEGER(32),
    field: "se_ientidad",
  },
  idTipoCalc: {
    type: sequelize.INTEGER(32),
    field: "se_itipo_calc",
  },
  codigo: {
    type: sequelize.TEXT,
    field: "vc_codigo",
  },
  descripcion: {
    type: sequelize.TEXT,
    field: "vc_desc",
  },
  precioUnitario: {
    type: sequelize.REAL(12,2),
    field: "nu_precio_unit",
  },
  montoIsc: {
    type: sequelize.REAL(12,2),
    field: "nu_monto_isc",
  },
  unidadMedida: {
    type: sequelize.TEXT(3),
    field: "ch_uni_medida",
  },
  afectaDetraccion: {
    type: sequelize.TEXT(1),
    field: "ch_afecta_detra",
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
}, {
    tableName: 't_producto',
    timestamps: false
  });
  
module.exports = Producto;













