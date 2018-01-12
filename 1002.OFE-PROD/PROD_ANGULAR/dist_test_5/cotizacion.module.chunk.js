webpackJsonp(["cotizacion.module"],{

/***/ "../../../../../src/app/cotizacion/comprador/buscar/cotizacioncompradorbuscar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-12\">\r\n                <div class=\"card\">\r\n                    <form method=\"#\" action=\"#\">\r\n                        <div class=\"card-header card-header-text\" data-background-color=\"blue\">\r\n                            <h4 class=\"card-title\">Buscar Cotizaciones</h4>\r\n                        </div>\r\n                        <div class=\"card-content\">\r\n                            <div class=\"row\">\r\n                                <div class=\"col-sm-4\">\r\n                                    <div class=\"form-group label-floating\">\r\n                                        <label class=\"control-label\">N° Req.\r\n                                        </label>\r\n                                        <input name=\"firstname\" type=\"text\" class=\"form-control\" disabled>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-sm-4\">\r\n                                    <div class=\"form-group label-floating\">\r\n                                        <label class=\"control-label\">N° Cotización\r\n                                        </label>\r\n                                        <input name=\"firstname\" type=\"text\" class=\"form-control\">\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-sm-4\">\r\n                                    <div class=\"form-group label-floating\">\r\n                                        <label class=\"control-label\">Estado</label>\r\n                                        <select name=\"country\" class=\"form-control\">\r\n                                            <option disabled=\"\" selected=\"\"></option>\r\n                                            <option value=\"En Proceso\"> En Proceso </option>\r\n                                            <option value=\"Por Modificar\"> Por Modificar </option>\r\n                                            <option value=\"En Ejecución\"> En Ejecución </option>\r\n                                            <option value=\"Anulada\"> Anulada </option>\r\n                                            <option value=\"Culminado\"> Culminado </option>\r\n\r\n                                        </select>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"row\">\r\n                                <div class=\"col-sm-3\">\r\n                                    <div class=\"form-group label-floating\">\r\n                                        <label class=\"control-label\">Fecha Enviado Del</label>\r\n                                        <input type=\"text\" class=\"form-control\" datepicker />\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-sm-3\">\r\n                                    <div class=\"form-group label-floating\">\r\n                                        <label class=\"control-label\">al</label>\r\n                                        <input type=\"text\" class=\"form-control\" datepicker />\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-sm-3\">\r\n                                    <div class=\"form-group\">\r\n                                        <button class=\"btn btn-default\">Buscar</button>\r\n                                        <button class=\"btn btn-default\">Limpiar</button>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <nav class=\"navbar navbar-info\" role=\"navigation\">\r\n                                <div class=\"container-fluid\">\r\n                                    <div class=\"navbar-header\">\r\n\r\n                                        <span class=\"navbar-brand\">Resultados</span>\r\n                                    </div>\r\n                                </div>\r\n                            </nav>\r\n                            <div class=\"material-datatables table-responsive\">\r\n                                <table id=\"dtResultados\" class=\"table table-striped table-no-bordered table-hover\" cellspacing=\"0\" width=\"100%\" style=\"width:100%\">\r\n                                    <thead>\r\n                                        <tr>\r\n\r\n                                            <th>N° Cotización</th>\r\n                                            <th>Organización Proveedora</th>\r\n                                            <th>Usuario Proveedor</th>\r\n                                            <th>Estado</th>\r\n                                            <th>Versión</th>\r\n                                            <th>Fecha Creación</th>\r\n                                            <th>OC</th>\r\n                                            <th class=\"disabled-sorting text-center\">Acciones</th>\r\n                                        </tr>\r\n                                    </thead>\r\n\r\n\r\n                                </table>\r\n                            </div>\r\n                        </div>\r\n                    </form>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/cotizacion/comprador/buscar/cotizacioncompradorbuscar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CotizacionCompradorBuscarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_app_utils__ = __webpack_require__("../../../../../src/app/utils/app.utils.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_masterservice__ = __webpack_require__("../../../../../src/app/service/masterservice.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var oCotizacionCompradorBuscarComponent;
var CotizacionCompradorBuscarComponent = (function () {
    function CotizacionCompradorBuscarComponent(router, route, _masterService) {
        this.router = router;
        this.route = route;
        this._masterService = _masterService;
        this.util = new __WEBPACK_IMPORTED_MODULE_2__utils_app_utils__["a" /* AppUtils */](this.router, this._masterService);
    }
    CotizacionCompradorBuscarComponent.prototype.navigate = function (nav) {
        this.router.navigate(nav, { relativeTo: this.route });
    };
    CotizacionCompradorBuscarComponent.prototype.ngOnInit = function () {
        // Code for the Validator
        oCotizacionCompradorBuscarComponent = this;
        this.resultados = [
            {
                nrocotizacion: "00000000001121",
                orgproveedora: "SODIMAC PERU S.A.",
                usuarioproveedor: "Jose R.",
                estado: "Activo",
                version: "1",
                fechacreacion: "01/06/2017",
                oc: "000000001524",
            },
            {
                nrocotizacion: "00000000001122",
                orgproveedora: "EMPRESA EDITORA EL COMERCIO SA",
                usuarioproveedor: "Carlo P.",
                estado: "Anulado",
                version: "1",
                fechacreacion: "09/06/2017",
                oc: "000000001564",
            },
            {
                nrocotizacion: "00000000001123",
                orgproveedora: "EMPRESA EDITORA EL COMERCIO SA",
                usuarioproveedor: "Andres I.",
                estado: "Activo",
                version: "1",
                fechacreacion: "12/06/2017",
                oc: "000000001561",
            },
        ];
    };
    CotizacionCompradorBuscarComponent.prototype.ngAfterViewInit = function () {
        var datatable = $('#dtResultados').DataTable({
            order: [[1, "asc"]],
            /* ajax: {
               "url": "https://jsonplaceholder.typicode.com/posts",
               "dataSrc": ""
             },*/
            "ajax": function (data, callback, settings) {
                var result = {
                    data: oCotizacionCompradorBuscarComponent.resultados
                };
                callback(result);
            },
            columns: [
                { data: 'nrocotizacion' },
                { data: 'orgproveedora' },
                { data: 'usuarioproveedor' },
                { data: 'estado' },
                { data: 'version' },
                { data: 'fechacreacion' },
                { data: 'oc' },
                { data: 'nrocotizacion' }
            ],
            columnDefs: [
                {
                    render: function (data, type, row) {
                        return '<div class="text-center"><a href="/cotizacion/comprador/formulario/' + row.nrocotizacion + '" row-id="' + row.nrocotizacion + '">' +
                            '<button class="btn btn-simple btn-info btn-icon edit" rel="tooltip" title="Ver/Editar" data-placement="left">' +
                            '<i class="material-icons">visibility</i></button></a></div>';
                    },
                    targets: 7
                }
            ]
        });
        datatable.on('click', '.edit', function (event) {
            var $tr = $(this).closest('tr');
            var row_id = $tr.find("a").attr('row-id');
            var nav = ['/cotizacion/comprador/formulario', row_id];
            oCotizacionCompradorBuscarComponent.navigate(nav);
            event.preventDefault();
        });
    };
    return CotizacionCompradorBuscarComponent;
}());
CotizacionCompradorBuscarComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'cotizacioncompradorbuscar-cmp',
        template: __webpack_require__("../../../../../src/app/cotizacion/comprador/buscar/cotizacioncompradorbuscar.component.html"),
        providers: [__WEBPACK_IMPORTED_MODULE_3__service_masterservice__["a" /* MasterService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__service_masterservice__["a" /* MasterService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__service_masterservice__["a" /* MasterService */]) === "function" && _c || Object])
], CotizacionCompradorBuscarComponent);

var _a, _b, _c;
//# sourceMappingURL=cotizacioncompradorbuscar.component.js.map

/***/ }),

/***/ "../../../../../src/app/cotizacion/comprador/formulario/cotizacioncompradorformulario.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-12\">\r\n        <div class=\"card\">\r\n          <form method=\"#\" action=\"#\">\r\n            <div class=\"card-header card-header-text\" data-background-color=\"blue\">\r\n              <h4 class=\"card-title\">Detalle de Cotización</h4>\r\n            </div>\r\n            <div class=\"card-content\">\r\n              <div class=\"row\">\r\n                <div class=\"col-sm-6\">\r\n                  <div class=\"form-group label-floating\">\r\n                    <label class=\"control-label\">N° Cotización\r\n                    \r\n                    </label>\r\n                    <input name=\"nrocotizacion\" type=\"text\" class=\"form-control\" disabled=\"true\"  [(ngModel)]=\"item.nrocotizacion\">\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-sm-6\">\r\n                  <div class=\"form-group label-floating\">\r\n                    <label class=\"control-label\">Proveedor\r\n                    \r\n                    </label>\r\n                    <input name=\"proveedor\" type=\"text\" class=\"form-control\" disabled=\"true\" [(ngModel)]=\"item.proveedor\">\r\n                  </div>\r\n                </div>\r\n\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col-sm-6\">\r\n                  <div class=\"form-group label-floating\">\r\n                    <label class=\"control-label\">Atención a</label>\r\n                    <input name=\"atenciona\" type=\"text\" class=\"form-control\" disabled=\"true\" [(ngModel)]=\"item.atenciona\">\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-sm-6\">\r\n                  <div class=\"form-group label-floating\">\r\n                    <label class=\"control-label\">Preparado por</label>\r\n                    <input name=\"preparadopor\" type=\"text\" class=\"form-control\" disabled=\"true\" [(ngModel)]=\"item.preparadopor\">\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col-sm-6\">\r\n                  <div class=\"form-group label-floating\">\r\n                    <label class=\"control-label\">N° Requerimiento</label>\r\n                    <input name=\"nroreq\" type=\"text\" class=\"form-control\" disabled=\"true\" [(ngModel)]=\"item.nroreq\">\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-sm-3\">\r\n                  <div class=\"form-group label-floating\">\r\n                    <label class=\"control-label\">Fecha</label>\r\n                    <input name=\"fechacreacion\" type=\"text\" class=\"form-control\" disabled=\"true\" [(ngModel)]=\"item.fechacreacion\">\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-sm-3\">\r\n                  <div class=\"form-group label-floating\">\r\n                    <label class=\"control-label\">Estado</label>\r\n                    <input name=\"estado\" type=\"text\" class=\"form-control\" disabled=\"true\" [(ngModel)]=\"item.estado\">\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              \r\n              <div class=\"row\">\r\n                <div class=\"col-sm-4\">\r\n                  <div class=\"form-group label-floating\">\r\n                    <label class=\"control-label\">Moneda</label>\r\n                    <select name=\"moneda\" class=\"form-control\" disabled=\"true\" [(ngModel)]=\"item.moneda\">                      \r\n                       <option disabled=\"\"></option>\r\n                      <option value=\"USD\" selected=\"\"> US Dollar </option>\r\n                      <option value=\"EUR\"> Euro Currency </option>\r\n                      <option value=\"PEN\"> Peruvian Nuevos Soles </option>\r\n\r\n                    </select>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-sm-8\">\r\n                  <div class=\"form-group label-floating\">\r\n                    <label class=\"control-label\">Mensaje</label>\r\n                    <textarea name=\"mensaje\" class=\"form-control\" rows=\"5\" disabled=\"true\" [(ngModel)]=\"item.mensaje\" ></textarea>\r\n                  </div>\r\n                </div>\r\n\r\n              </div>\r\n\r\n\r\n\r\n              <div class=\"row\">\r\n                <div class=\"col-md-12\">\r\n                  <div class=\"card\">\r\n                    <div class=\"card-header card-header-icon\" data-background-color=\"blue\">\r\n                      <i class=\"material-icons\">assignment</i>\r\n                    </div>\r\n                    <div class=\"card-content\">\r\n                      <h4 class=\"card-title\">Detalle de Artículos</h4>\r\n\r\n                      <div class=\"material-datatables table-responsive\" style=\"display:block\">\r\n                        <table id=\"dtArticulos\" class=\"table table-striped table-no-bordered table-hover\" cellspacing=\"0\" width=\"100%\" style=\"width:100%\">\r\n\r\n                          <thead>\r\n\r\n                            <tr>\r\n\r\n                              <th>Posición</th>\r\n                              <th>Nombre Prod.</th>\r\n                              <th class=\"disabled-sorting\">Objeto de Contratación</th>\r\n                              <th class=\"disabled-sorting\">Cantidad</th>\r\n                              <th class=\"disabled-sorting\">Unidad</th>\r\n                              <th class=\"disabled-sorting\">Precio</th>\r\n                              <th class=\"disabled-sorting\">Fecha Creación</th>\r\n                              <th class=\"disabled-sorting text-center\">Atributos</th>\r\n                              <th class=\"disabled-sorting text-center\">Adjuntos</th>\r\n\r\n                            </tr>\r\n                          </thead>\r\n\r\n                         \r\n                        </table>\r\n                      </div>\r\n                      <!-- end content-->\r\n                    </div>\r\n                  </div>\r\n                  <!--  end card  -->\r\n                </div>\r\n                <!-- end col-md-12 -->\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col-md-12\">\r\n                  <div class=\"card\">\r\n                    <div class=\"card-header card-header-icon\" data-background-color=\"blue\">\r\n                      <i class=\"material-icons\">assignment</i>\r\n                    </div>\r\n                    <div class=\"card-content\">\r\n                      <h4 class=\"card-title\">Documentos Adjuntos</h4>\r\n\r\n                      <div class=\"material-datatables table-responsive\">\r\n                        <table id=\"dtArchivos\" class=\"table table-striped table-no-bordered table-hover\" cellspacing=\"0\" width=\"100%\" style=\"width:100%\">\r\n                          <thead>\r\n                            <tr>\r\n\r\n                              <th width=\"90%\">Descripción</th>\r\n                              <th class=\"disabled-sorting text-center\">Acciones</th>\r\n                            </tr>\r\n                          </thead>\r\n\r\n                         \r\n                        </table>\r\n                      </div>\r\n                    </div>\r\n                    <!-- end content-->\r\n                  </div>\r\n                  <!--  end card  -->\r\n                </div>\r\n                <!-- end col-md-12 -->\r\n              </div>\r\n\r\n            </div>\r\n            <div class=\"card-footer\">\r\n              <button class=\"btn btn-fill btn-default pull-right\" routerLink=\"/cotizacion/comprador/buscar\">Salir</button>\r\n\r\n\r\n\r\n\r\n\r\n            </div>\r\n\r\n          </form>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n\r\n\r\n  <div id=\"mdlArchivosAdjuntos\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\">\r\n    <div class=\"modal-dialog\" role=\"document\">\r\n      <div class=\"modal-content\">\r\n        <div class=\"modal-header\">\r\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\r\n          <h4 class=\"modal-title\">Documento Adjunto</h4>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"form-group\">\r\n                <div class=\"fileinput fileinput-new input-group\" data-provides=\"fileinput\">\r\n                  <div class=\"form-control\" data-trigger=\"fileinput\"><i class=\"material-icons fileinput-exists\">attach_file</i> <span class=\"fileinput-filename\"></span></div>\r\n                  <span class=\"input-group-addon btn btn-default btn-file\"><span class=\"fileinput-new\">Seleccionar Archivo</span>\r\n                  <span class=\"fileinput-exists\">Cambiar</span><input type=\"file\" name=\"...\"></span>\r\n                  <a href=\"#\" class=\"input-group-addon btn btn-default fileinput-exists\" data-dismiss=\"fileinput\">Remover</a>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"form-group label-floating\">\r\n                <textarea name=\"firstname\" placeholder=\"Descripción\" class=\"form-control\" rows=\"4\"></textarea>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"modal-footer\">\r\n          <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Cerrar</button>\r\n          <button type=\"button\" class=\"btn btn-default\">Grabar</button>\r\n        </div>\r\n      </div>\r\n      <!-- /.modal-content -->\r\n    </div>\r\n    <!-- /.modal-dialog -->\r\n  </div>\r\n\r\n  <div id=\"mdlArticulo\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\">\r\n    <div class=\"modal-dialog\" role=\"document\">\r\n      <div class=\"modal-content\">\r\n        <div class=\"modal-header\">\r\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\r\n          <h4 class=\"modal-title\">Detalle de Artículo</h4>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-4\">\r\n              <div class=\"form-group label-floating\">\r\n                <label class=\"control-label\">Posición\r\n                 \r\n                </label>\r\n                <input name=\"firstname\" type=\"text\" class=\"form-control\" value=\"1\" disabled=\"true\">\r\n              </div>\r\n            </div>\r\n            <div class=\"col-sm-8\">\r\n              <div class=\"form-group label-floating\">\r\n                <label class=\"control-label\">Nombre de Producto </label>\r\n                <input name=\"firstname\" type=\"text\" class=\"form-control\" value=\"Papel tapiz\" disabled=\"true\">\r\n              </div>\r\n            </div>\r\n\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-4\">\r\n              <div class=\"form-group label-floating\">\r\n                <label class=\"control-label\">Cantidad Base</label>\r\n                <input name=\"firstname\" type=\"text\" class=\"form-control\" value=\"200\" disabled=\"true\">\r\n              </div>\r\n            </div>\r\n            <div class=\"col-sm-4\">\r\n              <div class=\"form-group label-floating\">\r\n                <label class=\"control-label\">Unidad</label>\r\n                <input name=\"firstname\" type=\"text\" class=\"form-control\" value=\"KG\" disabled=\"true\">\r\n              </div>\r\n            </div>\r\n            <div class=\"col-sm-4\">\r\n              <div class=\"form-group label-floating\">\r\n                <button class=\"btn btn-default\" data-toggle=\"modal\" data-target=\"#mdlAtributos\">\r\n                  <i class=\"material-icons\">add</i> Atributos\r\n                </button>\r\n              </div>\r\n            </div>\r\n\r\n          </div>\r\n\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-4\">\r\n              <div class=\"form-group label-floating\">\r\n                <label class=\"control-label\">Cantidad</label>\r\n                <input id=\"cantidad\" type=\"text\" class=\"form-control\">\r\n              </div>\r\n            </div>\r\n            <div class=\"col-sm-4\">\r\n              <div class=\"form-group label-floating\">\r\n                <label class=\"control-label\">Fecha Entrega</label>\r\n                <input name=\"fechaentrega\" type=\"text\" class=\"form-control datepicker\" value=\"03/07/2017\">\r\n              </div>\r\n            </div>\r\n\r\n          </div>\r\n\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"form-group\">\r\n                <div class=\"fileinput fileinput-new input-group\" data-provides=\"fileinput\">\r\n                  <div class=\"form-control\" data-trigger=\"fileinput\">\r\n                    <i class=\"material-icons fileinput-exists\">attach_file</i>\r\n                    <span class=\"fileinput-filename\"></span>\r\n                  </div>\r\n                  <span class=\"input-group-addon btn btn-default btn-file\"><span class=\"fileinput-new\">Seleccionar Archivo</span>\r\n                  <span class=\"fileinput-exists\">Cambiar</span><input type=\"file\" name=\"...\"></span>\r\n                  <a href=\"#\" class=\"input-group-addon btn btn-default fileinput-exists\" data-dismiss=\"fileinput\">Remover</a>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n        </div>\r\n        <div class=\"modal-footer\">\r\n          <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Cerrar</button>\r\n          <button type=\"button\" class=\"btn btn-default\">Grabar</button>\r\n        </div>\r\n      </div>\r\n      <!-- /.modal-content -->\r\n    </div>\r\n    <!-- /.modal-dialog -->\r\n\r\n\r\n  </div>\r\n  <div id=\"mdlAtributos\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\">\r\n    <div class=\"modal-dialog\" role=\"document\">\r\n      <div class=\"modal-content\">\r\n        <div class=\"modal-header\">\r\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\r\n          <h4 class=\"modal-title\">Atributos por Producto</h4>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n\r\n\r\n          <div class=\"material-datatables table-responsive\">\r\n            <table id=\"dtAtributos\" class=\"table table-striped table-no-bordered table-hover\" cellspacing=\"0\" width=\"100%\" style=\"width:100%\">\r\n              <thead>\r\n               \r\n                 <tr>\r\n               \r\n                <th>Nombre</th>\r\n                <th>Operador</th>\r\n                <th>Valor</th>\r\n                <th>Unidad</th>\r\n                <th>Obligatorio</th>\r\n               \r\n              </tr>\r\n              </thead>\r\n\r\n             \r\n            </table>\r\n          </div>\r\n        </div>\r\n        <div class=\"modal-footer\">\r\n          <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Cerrar</button>\r\n\r\n        </div>\r\n      </div>\r\n      <!-- /.modal-content -->\r\n    </div>\r\n    <!-- /.modal-dialog -->\r\n  </div>\r\n\r\n\r\n\r\n\r\n\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/cotizacion/comprador/formulario/cotizacioncompradorformulario.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CotizacionCompradorFormularioComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var oCotizacionCompradorFormularioComponent, dtAtributos;
var CotizacionCompradorFormularioComponent = (function () {
    function CotizacionCompradorFormularioComponent() {
        this.toggleButton = true;
        this.classDisabled = 'disabled';
    }
    CotizacionCompradorFormularioComponent.prototype.ngOnInit = function () {
        // Code for the Validator
        oCotizacionCompradorFormularioComponent = this;
        this.item = {
            nrocotizacion: "00000000001121",
            proveedor: "Juguetes Educativos Arbolito",
            atenciona: "Usuario Ministerio",
            preparadopor: "Usuario Proveedor",
            nroreq: 1002,
            fechacreacion: '10/07/2017',
            estado: "Activa",
            moneda: "PEN",
            mensaje: "El presupuesto de construcción se puede extender en páginas debido a lo variado de materiales y procesos. Y por lo general tienen una vigencia que se deriva de la fluctuación de los precios del material en los mercados.",
            productos: [
                {
                    codigoproducto: '000001',
                    posicion: 1,
                    nombreproducto: "Grupo Electrógeno",
                    cantidadbase: 20,
                    unidad: 'UND',
                    cantidad: 20,
                    precio: 1000,
                    adjuntos: 'imagenGrupoElectrógeno.png',
                    fechaentrega: '03/07/2016',
                    objetocontrato: 'BIEN',
                    atributos: [
                        {
                            nombre: 'F. Entrega',
                            operador: '=',
                            valor: '',
                            unidad: 'Fecha',
                            obligatorio: 'SI',
                        },
                        {
                            nombre: 'Equivalencia',
                            operador: '>',
                            valor: '',
                            unidad: 'Texto',
                            obligatorio: 'NO',
                        },
                        {
                            nombre: 'Garantia',
                            operador: '<',
                            valor: '',
                            unidad: 'Año',
                            obligatorio: 'SI',
                        }
                    ]
                },
                {
                    codigoproducto: '000002',
                    posicion: 2,
                    nombreproducto: "Camioneta Rural",
                    cantidadbase: 2,
                    unidad: 'UND',
                    cantidad: 2,
                    precio: 1000,
                    adjuntos: 'imagenCamionetaRural.png',
                    fechaentrega: '03/07/2016',
                    objetocontrato: 'BIEN',
                    atributos: [
                        {
                            nombre: 'Equivalencia',
                            operador: '>',
                            valor: '',
                            unidad: 'Texto',
                            obligatorio: 'NO',
                        },
                        {
                            nombre: 'Garantia',
                            operador: '<',
                            valor: '',
                            unidad: 'Año',
                            obligatorio: 'SI',
                        }
                    ]
                },
                {
                    codigoproducto: '000003',
                    posicion: 3,
                    nombreproducto: "Grupo Electrógeno",
                    cantidadbase: 20,
                    unidad: 'UND',
                    cantidad: 20,
                    precio: 1000,
                    adjuntos: 'imagenGrupoElectrógeno.png',
                    fechaentrega: '03/07/2016',
                    objetocontrato: 'BIEN',
                    atributos: [
                        {
                            nombre: 'F. Entrega',
                            operador: '=',
                            valor: '',
                            unidad: 'Fecha',
                            obligatorio: 'SI',
                        },
                        {
                            nombre: 'Equivalencia',
                            operador: '>',
                            valor: '',
                            unidad: 'Texto',
                            obligatorio: 'NO',
                        },
                        {
                            nombre: 'Garantia',
                            operador: '<',
                            valor: '',
                            unidad: 'Año',
                            obligatorio: 'SI',
                        }
                    ]
                }
            ],
            docadjuntos: [
                {
                    id: 1,
                    descripcion: "Descripción archivo numero 1"
                },
                {
                    id: 2,
                    descripcion: "Descripción archivo numero 2"
                }
            ]
        };
        this.atributos = [];
    };
    CotizacionCompradorFormularioComponent.prototype.ngOnChanges = function (changes) {
    };
    CotizacionCompradorFormularioComponent.prototype.ngAfterViewInit = function () {
        var dtArchivos = $('#dtArchivos').DataTable({
            ajax: function (data, callback, settings) {
                var result = {
                    data: oCotizacionCompradorFormularioComponent.item.docadjuntos
                };
                callback(result);
            },
            columns: [
                { data: 'descripcion' },
                { data: 'id' },
            ],
            columnDefs: [
                {
                    render: function (data, type, row) {
                        return '<div class="text-center"><a class="editar" href="javascript:void(0);" row-id="' + row.id + '">' +
                            '<button class="btn btn-simple btn-info btn-icon download" rel="tooltip" title="Bajar Archivo" data-placement="left">' +
                            '<i class="material-icons">get_app</i></button></a>' +
                            '</div>';
                    },
                    targets: 1
                }
            ]
        });
        dtArchivos.on('click', '.download', function (event) {
            var $tr = $(this).closest('tr');
            var row_id = $tr.find("a.editar").attr('row-id');
            event.preventDefault();
        });
        var dtArticulos = $('#dtArticulos').DataTable({
            ajax: function (data, callback, settings) {
                var result = {
                    data: oCotizacionCompradorFormularioComponent.item.productos
                };
                callback(result);
            },
            columns: [
                { data: 'codigoproducto' },
                { data: 'nombreproducto' },
                { data: 'objetocontrato' },
                { data: 'cantidad' },
                { data: 'unidad' },
                { data: 'precio' },
                { data: 'fechaentrega' },
                { data: 'posicion' },
                { data: 'adjuntos' },
            ],
            columnDefs: [
                {
                    render: function (data, type, row) {
                        return '<div class="text-center"><a class="atributos" href="javascript:void(0);" row-id="' + row.posicion + '">' +
                            '<button class="btn btn-simple btn-info btn-icon atributos" rel="tooltip" title="Ver Atributos" data-placement="left">' +
                            '<i class="material-icons">visibility</i></button></a>' +
                            '</div>';
                    },
                    targets: 7
                },
                {
                    render: function (data, type, row) {
                        return '<div class="text-center">' + row.adjuntos + '<a class="download" href="javascript:void(0);" row-id="' + row.posicion + '">' +
                            '<button class="btn btn-simple btn-info btn-icon download" rel="tooltip" title="Bajar Archivo" data-placement="left">' +
                            '<i class="material-icons">get_app</i>' +
                            '</button></a>' +
                            '</div>';
                    },
                    targets: 8
                }
            ]
        });
        dtArticulos.on('click', '.atributos', function (event) {
            var $tr = $(this).closest('tr');
            var posicion = $tr.find("a.atributos").attr('row-id');
            var producto = oCotizacionCompradorFormularioComponent.item.productos.find(function (a) { return a.posicion == posicion; });
            var atributos = JSON.parse(JSON.stringify(producto.atributos)); //clone
            oCotizacionCompradorFormularioComponent.atributos = atributos;
            setTimeout(function () {
                dtAtributos.ajax.reload();
                $("#mdlAtributos").modal('show');
            }, 500);
            event.preventDefault();
        });
        dtArticulos.on('click', '.download', function (event) {
            var $tr = $(this).closest('tr');
            var posicion = $tr.find("a.download").attr('row-id');
            event.preventDefault();
        });
        dtAtributos = $('#dtAtributos').DataTable({
            ajax: function (data, callback, settings) {
                var result = {
                    data: oCotizacionCompradorFormularioComponent.atributos
                };
                callback(result);
            },
            columns: [
                { data: 'nombre' },
                { data: 'operador' },
                { data: 'valor' },
                { data: 'unidad' },
                { data: 'obligatorio' },
            ],
        });
        //  Activate the tooltips
        $('[rel="tooltip"]').tooltip();
    };
    return CotizacionCompradorFormularioComponent;
}());
CotizacionCompradorFormularioComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'cotizacioncompradorformulario-cmp',
        template: __webpack_require__("../../../../../src/app/cotizacion/comprador/formulario/cotizacioncompradorformulario.component.html"),
    })
], CotizacionCompradorFormularioComponent);

//# sourceMappingURL=cotizacioncompradorformulario.component.js.map

/***/ }),

/***/ "../../../../../src/app/cotizacion/cotizacion.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CotizacionModule", function() { return CotizacionModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__comprador_formulario_cotizacioncompradorformulario_component__ = __webpack_require__("../../../../../src/app/cotizacion/comprador/formulario/cotizacioncompradorformulario.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__comprador_buscar_cotizacioncompradorbuscar_component__ = __webpack_require__("../../../../../src/app/cotizacion/comprador/buscar/cotizacioncompradorbuscar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__proveedor_formulario_cotizacionproveedorformulario_component__ = __webpack_require__("../../../../../src/app/cotizacion/proveedor/formulario/cotizacionproveedorformulario.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__proveedor_buscar_cotizacionproveedorbuscar_component__ = __webpack_require__("../../../../../src/app/cotizacion/proveedor/buscar/cotizacionproveedorbuscar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__cotizacion_routing__ = __webpack_require__("../../../../../src/app/cotizacion/cotizacion.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__directives_datepicker_module__ = __webpack_require__("../../../../../src/app/directives/datepicker.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var CotizacionModule = (function () {
    function CotizacionModule() {
    }
    return CotizacionModule;
}());
CotizacionModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(__WEBPACK_IMPORTED_MODULE_8__cotizacion_routing__["a" /* CotizacionRoutes */]),
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_9__directives_datepicker_module__["a" /* A2Edatetimepicker */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_5__comprador_buscar_cotizacioncompradorbuscar_component__["a" /* CotizacionCompradorBuscarComponent */], __WEBPACK_IMPORTED_MODULE_4__comprador_formulario_cotizacioncompradorformulario_component__["a" /* CotizacionCompradorFormularioComponent */], __WEBPACK_IMPORTED_MODULE_7__proveedor_buscar_cotizacionproveedorbuscar_component__["a" /* CotizacionProveedorBuscarComponent */], __WEBPACK_IMPORTED_MODULE_6__proveedor_formulario_cotizacionproveedorformulario_component__["a" /* CotizacionProveedorFormularioComponent */]]
    })
], CotizacionModule);

//# sourceMappingURL=cotizacion.module.js.map

/***/ }),

/***/ "../../../../../src/app/cotizacion/cotizacion.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CotizacionRoutes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__comprador_formulario_cotizacioncompradorformulario_component__ = __webpack_require__("../../../../../src/app/cotizacion/comprador/formulario/cotizacioncompradorformulario.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__comprador_buscar_cotizacioncompradorbuscar_component__ = __webpack_require__("../../../../../src/app/cotizacion/comprador/buscar/cotizacioncompradorbuscar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__proveedor_formulario_cotizacionproveedorformulario_component__ = __webpack_require__("../../../../../src/app/cotizacion/proveedor/formulario/cotizacionproveedorformulario.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__proveedor_buscar_cotizacionproveedorbuscar_component__ = __webpack_require__("../../../../../src/app/cotizacion/proveedor/buscar/cotizacionproveedorbuscar.component.ts");




var CotizacionRoutes = [
    {
        path: '',
        children: [
            {
                path: 'comprador/formulario/:id',
                component: __WEBPACK_IMPORTED_MODULE_0__comprador_formulario_cotizacioncompradorformulario_component__["a" /* CotizacionCompradorFormularioComponent */]
            },
            {
                path: 'comprador/buscar',
                component: __WEBPACK_IMPORTED_MODULE_1__comprador_buscar_cotizacioncompradorbuscar_component__["a" /* CotizacionCompradorBuscarComponent */]
            },
            {
                path: 'proveedor/formulario/:id',
                component: __WEBPACK_IMPORTED_MODULE_2__proveedor_formulario_cotizacionproveedorformulario_component__["a" /* CotizacionProveedorFormularioComponent */]
            },
            {
                path: 'proveedor/buscar',
                component: __WEBPACK_IMPORTED_MODULE_3__proveedor_buscar_cotizacionproveedorbuscar_component__["a" /* CotizacionProveedorBuscarComponent */]
            }
        ]
    }
];
//# sourceMappingURL=cotizacion.routing.js.map

/***/ }),

/***/ "../../../../../src/app/cotizacion/proveedor/buscar/cotizacionproveedorbuscar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-12\">\r\n                <div class=\"card\">\r\n                    <form method=\"#\" action=\"#\">\r\n                        <div class=\"card-header card-header-text\" data-background-color=\"blue\">\r\n                            <h4 class=\"card-title\">Buscar Cotizaciones Enviadas</h4>\r\n                        </div>\r\n                        <div class=\"card-content\">\r\n                            <div class=\"row\">\r\n                                <div class=\"col-sm-4\">\r\n                                    <div class=\"form-group label-floating\">\r\n                                        <label class=\"control-label\">N° Cotización\r\n                                        </label>\r\n                                        <input name=\"firstname\" type=\"text\" class=\"form-control\">\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-sm-4\">\r\n                                    <div class=\"form-group label-floating\">\r\n                                        <label class=\"control-label\">N° Req.\r\n                                        </label>\r\n                                        <input name=\"firstname\" type=\"text\" class=\"form-control\">\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-sm-4\">\r\n                                    <div class=\"form-group label-floating\">\r\n                                        <label class=\"control-label\">Estado</label>\r\n                                        <select name=\"country\" class=\"form-control\">\r\n                                            <option disabled=\"\" selected=\"\"></option>\r\n                                            <option value=\"En Proceso\"> En Proceso </option>\r\n                                            <option value=\"Por Modificar\"> Por Modificar </option>\r\n                                            <option value=\"En Ejecución\"> En Ejecución </option>\r\n                                            <option value=\"Anulada\"> Anulada </option>\r\n                                            <option value=\"Culminado\"> Culminado </option>\r\n\r\n                                        </select>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"row\">\r\n                                <div class=\"col-sm-3\">\r\n                                    <div class=\"form-group label-floating\">\r\n                                        <label class=\"control-label\">Fecha Creación Del</label>\r\n                                        <input type=\"text\" class=\"form-control\" datepicker  />\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-sm-3\">\r\n                                    <div class=\"form-group label-floating\">\r\n                                        <label class=\"control-label\">al</label>\r\n                                        <input type=\"text\" class=\"form-control\" datepicker  />\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-sm-3\">\r\n                                    <div class=\"form-group\">\r\n                                        <button class=\"btn btn-default\">Buscar</button>\r\n                                        <button class=\"btn btn-default\">Limpiar</button>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <nav class=\"navbar navbar-info\" role=\"navigation\">\r\n                                <div class=\"container-fluid\">\r\n                                    <div class=\"navbar-header\">\r\n\r\n                                        <span class=\"navbar-brand\" >Resultados</span>\r\n                                    </div>\r\n                                </div>\r\n                            </nav>\r\n                            <div class=\"material-datatables table-responsive\">\r\n                                <table id=\"dtResultados\" class=\"table table-striped table-no-bordered table-hover\" cellspacing=\"0\" width=\"100%\" style=\"width:100%\">\r\n                                    <thead>\r\n                                    <tr>\r\n                                        <th>N° Cotización</th>\r\n                                        <th>N° Req.</th>\r\n                                        <th>Organización Compradora</th>\r\n                                        <th>Usuario Comprador</th>\r\n                                        <th>Estado</th>\r\n                                        <th>Versión</th>\r\n                                        <th>Fecha Creación</th>\r\n                                        <th>OC</th>\r\n                                        <th class=\"disabled-sorting text-right\">Acciones</th>\r\n                                    </tr>\r\n                                    </thead>\r\n\r\n                                   \r\n                                </table>\r\n                            </div>\r\n                        </div>\r\n                    </form>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/cotizacion/proveedor/buscar/cotizacionproveedorbuscar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CotizacionProveedorBuscarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_app_utils__ = __webpack_require__("../../../../../src/app/utils/app.utils.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_masterservice__ = __webpack_require__("../../../../../src/app/service/masterservice.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var oCotizacionProveedorBuscarComponent;
var CotizacionProveedorBuscarComponent = (function () {
    function CotizacionProveedorBuscarComponent(router, route, _masterService) {
        this.router = router;
        this.route = route;
        this._masterService = _masterService;
        this.util = new __WEBPACK_IMPORTED_MODULE_2__utils_app_utils__["a" /* AppUtils */](this.router, this._masterService);
    }
    CotizacionProveedorBuscarComponent.prototype.navigate = function (nav) {
        this.router.navigate(nav, { relativeTo: this.route });
    };
    CotizacionProveedorBuscarComponent.prototype.ngOnInit = function () {
        // Code for the Validator
        oCotizacionProveedorBuscarComponent = this;
        this.resultados = [
            {
                nrocotizacion: "00000000001121",
                nroreq: "00001",
                orgcompradora: "CENTENARIO RETAIL S.A.C.",
                usuariocompradora: "Jose R.",
                estado: "Activo",
                version: "1",
                fechacreacion: "01/06/2017",
                oc: "000000001524",
            },
            {
                nrocotizacion: "00000000001122",
                nroreq: "00002",
                orgcompradora: "CENTENARIO RETAIL S.A.C.",
                usuariocompradora: "Carlo P.",
                estado: "Anulado",
                version: "1",
                fechacreacion: "09/06/2017",
                oc: "000000001564",
            },
            {
                nrocotizacion: "00000000001123",
                nroreq: "00003",
                orgcompradora: "CENTENARIO RETAIL S.A.C.",
                usuariocompradora: "Andres I.",
                estado: "Activo",
                version: "1",
                fechacreacion: "12/06/2017",
                oc: "000000001561",
            },
        ];
        this.dtSolicitudCotizacion = {
            headerRow: ['N° Cotización', 'N° Req.', 'Organización Compradora', 'Usuario Comprador', 'Estado', 'Versión', 'Fecha Creación', 'OC', 'Acciones'],
            footerRow: ['N° Cotización', 'N° Req.', 'Organización Compradora', 'Usuario Comprador', 'Estado', 'Versión', 'Fecha Creación', 'OC', 'Acciones'],
            dataRows: [
                ['00001', '00001', 'Minedu', 'Jose R.', 'Activo', '1', '01/06/2017', 'Xavi C.', '', ''],
                ['00001', '00001', 'Organizacion 2', 'Carlo P.', 'Anulado', '1', '05/06/2017', 'Luis Q.', '', ''],
                ['00001', '00001', 'Organizacion 3', 'Andres I.', 'Activo', '1', '12/06/2017', 'Jose B.', '', ''],
            ]
        };
    };
    CotizacionProveedorBuscarComponent.prototype.ngAfterViewInit = function () {
        var datatable = $('#dtResultados').DataTable({
            order: [[1, "asc"]],
            /* ajax: {
               "url": "https://jsonplaceholder.typicode.com/posts",
               "dataSrc": ""
             },*/
            "ajax": function (data, callback, settings) {
                var result = {
                    data: oCotizacionProveedorBuscarComponent.resultados
                };
                callback(result);
            },
            columns: [
                { data: 'nrocotizacion' },
                { data: 'nroreq' },
                { data: 'orgcompradora' },
                { data: 'usuariocompradora' },
                { data: 'estado' },
                { data: 'version' },
                { data: 'fechacreacion' },
                { data: 'oc' },
                { data: 'nrocotizacion' }
            ],
            columnDefs: [
                {
                    render: function (data, type, row) {
                        return '<div class="text-center"><a href="/cotizacion/proveedor/formulario/' + row.nrocotizacion + '" row-id="' + row.nrocotizacion + '">' +
                            '<button class="btn btn-simple btn-info btn-icon edit" rel="tooltip" title="Ver/Editar" data-placement="left">' +
                            '<i class="material-icons">visibility</i></button></a></div>';
                    },
                    targets: 8
                }
            ]
        });
        datatable.on('click', '.edit', function (event) {
            var $tr = $(this).closest('tr');
            var row_id = $tr.find("a").attr('row-id');
            var nav = ['/cotizacion/proveedor/formulario', row_id];
            oCotizacionProveedorBuscarComponent.navigate(nav);
            event.preventDefault();
        });
    };
    return CotizacionProveedorBuscarComponent;
}());
CotizacionProveedorBuscarComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'cotizacionproveedorbuscar-cmp',
        template: __webpack_require__("../../../../../src/app/cotizacion/proveedor/buscar/cotizacionproveedorbuscar.component.html"),
        providers: [__WEBPACK_IMPORTED_MODULE_3__service_masterservice__["a" /* MasterService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__service_masterservice__["a" /* MasterService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__service_masterservice__["a" /* MasterService */]) === "function" && _c || Object])
], CotizacionProveedorBuscarComponent);

var _a, _b, _c;
//# sourceMappingURL=cotizacionproveedorbuscar.component.js.map

/***/ }),

/***/ "../../../../../src/app/cotizacion/proveedor/formulario/cotizacionproveedorformulario.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-12\">\r\n        <div class=\"card\">\r\n          <form method=\"#\" action=\"#\">\r\n            <div class=\"card-header card-header-text\" data-background-color=\"blue\">\r\n              <h4 class=\"card-title\">Detalle Cotización</h4>\r\n            </div>\r\n            <div class=\"card-content\">\r\n              <div class=\"row\">\r\n                <div class=\"col-sm-6\">\r\n                  <div class=\"form-group label-floating\">\r\n                    <label class=\"control-label\">N° Cotización\r\n                    \r\n                    </label>\r\n                    <input name=\"nrocotizacion\" type=\"text\" class=\"form-control\" disabled [(ngModel)]=\"item.nrocotizacion\">\r\n                  </div>\r\n                </div>\r\n\r\n\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col-sm-6\">\r\n                  <div class=\"form-group label-floating\">\r\n                    <label class=\"control-label\">N° Requerimiento</label>\r\n                    <input name=\"nrorequerimiento\" type=\"text\" class=\"form-control\" disabled [(ngModel)]=\"item.nroreq\">\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-sm-6\">\r\n                  <div class=\"form-group label-floating\">\r\n                    <label class=\"control-label\">Organización Compradora</label>\r\n                    <input name=\"orgcomparadora\" type=\"text\" class=\"form-control\" disabled [(ngModel)]=\"item.organizacioncompradora\">\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col-sm-6\">\r\n                  <div class=\"form-group label-floating\">\r\n                    <label class=\"control-label\">Atención a</label>\r\n                    <input name=\"usuarioatencion\" type=\"text\" class=\"form-control\" disabled [(ngModel)]=\"item.atenciona\">\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-sm-6\">\r\n                  <div class=\"form-group label-floating\">\r\n                    <label class=\"control-label\">Preparado por</label>\r\n                    <input name=\"usuariopreparado\" type=\"text\" class=\"form-control\" disabled [(ngModel)]=\"item.preparadopor\">\r\n\r\n\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col-sm-4\">\r\n                  <div class=\"form-group label-floating\">\r\n                    <label class=\"control-label\">Moneda</label>\r\n                    <select name=\"moneda\" class=\"form-control\" [disabled]=\"toggleButton\" [(ngModel)]=\"item.moneda\">\r\n                      <option Value=\"\"></option>\r\n                      <option value=\"USD\"> US Dollar </option>\r\n                      <option value=\"EUR\"> Euro Currency </option>\r\n                      <option value=\"PEN\"> Peruvian Nuevos Soles </option>\r\n\r\n                    </select>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-sm-6\">\r\n                  <div class=\"form-group label-floating\">\r\n                    <label class=\"control-label\">Mensaje</label>\r\n                    <textarea name=\"mensaje\" class=\"form-control\" rows=\"5\" [disabled]=\"toggleButton\" [(ngModel)]=\"item.mensaje\"></textarea>\r\n                  </div>\r\n                </div>\r\n\r\n              </div>\r\n\r\n\r\n\r\n              <div class=\"row\">\r\n                <div class=\"col-md-12\">\r\n                  <div class=\"card\">\r\n                    <div class=\"card-header card-header-icon\" data-background-color=\"blue\">\r\n                      <i class=\"material-icons\">assignment</i>\r\n                    </div>\r\n                    <div class=\"card-content\">\r\n                      <h4 class=\"card-title\">Detalle de Artículos</h4>\r\n\r\n                      <div class=\"material-datatables table-responsive\" style=\"display:block\">\r\n                        <table id=\"dtArticulos\" class=\"table table-striped table-no-bordered table-hover\" cellspacing=\"0\" width=\"100%\" style=\"width:100%\">\r\n                          <colgroup span=\"3\"></colgroup>\r\n                          <colgroup span=\"7\"></colgroup>\r\n                          <thead>\r\n                            <tr>\r\n\r\n                              <th colspan=\"3\" scope=\"colgroup\" border=\"1\">Productos a Cotizar</th>\r\n                              <th colspan=\"7\" scope=\"colgroup\" border=\"1\">Caracteristicas</th>\r\n                            </tr>\r\n                            <tr>\r\n\r\n                              <th>Posición</th>\r\n                              <th>Nombre Prod.</th>\r\n                              <th class=\"disabled-sorting text-center\">Atributos</th>\r\n                              <th class=\"disabled-sorting\">Cant. Base</th>\r\n                              <th class=\"disabled-sorting\">Unidad</th>\r\n                              <th class=\"disabled-sorting\">Cantidad</th>\r\n                              <th class=\"disabled-sorting\">Precio</th>\r\n                              <th class=\"disabled-sorting\">Adjuntos</th>\r\n                              <th class=\"disabled-sorting\">Fecha Entrega</th>\r\n\r\n                            </tr>\r\n                          </thead>\r\n\r\n                          <tbody>\r\n                            <tr *ngFor=\"let row of item.productos\">\r\n\r\n                              <td>{{row.posicion}}</td>\r\n                              <td>{{row.nombreproducto}}</td>\r\n                              <td class=\"text-center\">\r\n                                <button class=\"btn btn-simple btn-info btn-icon atributos\" rel=\"tooltip\" title=\"Ver Atributos\" (click)=\"verAtributos($event,row.posicion)\"\r\n                                  data-placement=\"left\" data-toggle=\"modal\" data-target=\"#mdlAtributos\">\r\n                                <i class=\"material-icons\">visibility</i>\r\n                              </button>\r\n\r\n                              </td>\r\n                              <td>{{row.cantidadbase}}</td>\r\n                              <td>{{row.unidad}}</td>\r\n                              <td>\r\n\r\n                                <input name=\"cantidad\" [(ngModel)]=\"row.cantidad\" type=\"text\" class=\"form-control\" disabled>\r\n                              </td>\r\n                              <td>\r\n                                <input name=\"precio\" [(ngModel)]=\"row.precio\" type=\"text\" class=\"form-control\" disabled>\r\n                              </td>\r\n\r\n                              <td>\r\n                                <div class=\"fileinput fileinput-new input-group\" data-provides=\"fileinput\">\r\n                                  <div class=\"form-control\" data-trigger=\"fileinput\">\r\n                                    <span class=\"fileinput-filename\"></span>\r\n                                  </div>\r\n                                  <span class=\"input-group-addon btn btn-default btn-file\">\r\n                                    <span class=\"fileinput-new\">Seleccionar Archivo</span>\r\n                                  <span class=\"fileinput-exists\">\r\n                                      <i class=\"material-icons fileinput-exists\">attach_file</i>\r\n                                    </span>\r\n                                  <input (change)=\"onChange($event,row.posicion)\" type=\"file\" name=\"...\" [disabled]=\"toggleButton\">\r\n                                  </span>\r\n                                  <span href=\"#\" class=\"input-group-addon btn btn-default fileinput-exists\" data-dismiss=\"fileinput\">\r\n                                    <i class=\"material-icons\" (click)=\"onChange($event,row.posicion)\">delete</i>\r\n                                  </span>\r\n                                </div>\r\n                              </td>\r\n\r\n                              <td><input name=\"fechaentrega\" [(ngModel)]=\"row.fechaentrega\" type=\"text\" class=\"form-control\"\r\n                                  datepicker placeholder=\"Seleccionar dia\" disabled></td>\r\n\r\n\r\n\r\n                            </tr>\r\n                          </tbody>\r\n                        </table>\r\n                      </div>\r\n                      <!-- end content-->\r\n                    </div>\r\n                  </div>\r\n                  <!--  end card  -->\r\n                </div>\r\n                <!-- end col-md-12 -->\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col-md-12\">\r\n                  <div class=\"card\">\r\n                    <div class=\"card-header card-header-icon\" data-background-color=\"blue\">\r\n                      <i class=\"material-icons\">assignment</i>\r\n                    </div>\r\n                    <div class=\"card-content\">\r\n                      <h4 class=\"card-title\">Documentos Adjuntos</h4>\r\n                      <div class=\"toolbar\">\r\n                        <div class=\"row\">\r\n                          <div class=\"col-sm-12\">\r\n                            <nav class=\"navbar navbar-info\" role=\"navigation\">\r\n                              <div class=\"container-fluid\">\r\n                                <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\r\n                                  <ul class=\"nav navbar-nav\">\r\n                                    <li id=\"btnAgregarArchivo\" class=\"disabled\"><a href=\"#mdlArchivosAdjuntos\" (click)=\"agregarArchivo($event)\">Agregar</a></li>\r\n                                    <li><a href=\"javascript:void()\">Eliminar</a></li>\r\n                                  </ul>\r\n                                </div>\r\n                              </div>\r\n                            </nav>\r\n\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"material-datatables table-responsive\">\r\n                        <table id=\"dtArchivos\" class=\"table table-striped table-no-bordered table-hover\" cellspacing=\"0\" width=\"100%\" style=\"width:100%\">\r\n                          <thead>\r\n                            <tr>\r\n                              <th class=\"disabled-sorting text-right\">\r\n                                <div class=\"checkbox text-right\">\r\n                                  <label><input type=\"checkbox\" name=\"optionsCheckboxes\" class=\"checkall\" ></label>\r\n                                </div>\r\n                              </th>\r\n                              <th width=\"90%\">Descripción</th>\r\n                              <th class=\"disabled-sorting text-center\">Acciones</th>\r\n                            </tr>\r\n                          </thead>\r\n\r\n\r\n                        </table>\r\n                      </div>\r\n                    </div>\r\n                    <!-- end content-->\r\n                  </div>\r\n                  <!--  end card  -->\r\n                </div>\r\n                <!-- end col-md-12 -->\r\n              </div>\r\n\r\n            </div>\r\n            <div class=\"card-footer\">\r\n              <a class=\"btn btn-fill btn-default pull-right\" [routerLink]=\"['/requerimiento/proveedor/buscar']\">Salir</a>\r\n              <button class=\"btn btn-fill btn-default pull-right\" [disabled]=\"toggleButton\" (click)=\"clicked()\">Enviar</button>\r\n              <button type=\"button\" class=\"btn btn-fill btn-default pull-right\" routerLink=\"/requerimiento/proveedor/buscar\" [disabled]=\"toggleButton\">Guardar</button>\r\n              <button (click)=\"habilitarEdicion($event)\" class=\"btn btn-fill btn-default pull-right\" *ngIf=\"id>0\">Habilitar Edición</button>\r\n\r\n\r\n            </div>\r\n\r\n          </form>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n\r\n\r\n  <div id=\"mdlArchivosAdjuntos\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\">\r\n    <div class=\"modal-dialog\" role=\"document\">\r\n      <div class=\"modal-content\">\r\n        <div class=\"modal-header\">\r\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\r\n          <h4 class=\"modal-title\">Documento Adjunto</h4>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"form-group\">\r\n                <div class=\"fileinput fileinput-new input-group\" data-provides=\"fileinput\">\r\n                  <div class=\"form-control\" data-trigger=\"fileinput\"><i class=\"material-icons fileinput-exists\">attach_file</i> <span class=\"fileinput-filename\"></span></div>\r\n                  <span class=\"input-group-addon btn btn-default btn-file\"><span class=\"fileinput-new\">Seleccionar Archivo</span>\r\n                  <span class=\"fileinput-exists\">Cambiar</span><input type=\"file\" name=\"...\" id=\"txtArchivo\"></span>\r\n                  <a href=\"#\" class=\"input-group-addon btn btn-default fileinput-exists\" data-dismiss=\"fileinput\" id=\"btnEliminarAA\">Remover</a>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"form-group label-floating\">\r\n                <textarea name=\"descripcion\" placeholder=\"Descripción\" class=\"form-control\" rows=\"4\" [(ngModel)]=\"archivo.descripcion\"></textarea>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"modal-footer\">\r\n          <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Cerrar</button>\r\n          <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\" (click)=\"grabarArchivo($event)\">Grabar</button>\r\n        </div>\r\n      </div>\r\n      <!-- /.modal-content -->\r\n    </div>\r\n    <!-- /.modal-dialog -->\r\n  </div>\r\n\r\n\r\n  <div id=\"mdlAtributos\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\">\r\n    <div class=\"modal-dialog\" role=\"document\">\r\n      <div class=\"modal-content\">\r\n        <div class=\"modal-header\">\r\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\r\n          <h4 class=\"modal-title\">Atributos por Producto</h4>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n\r\n\r\n          <div class=\"material-datatables table-responsive\">\r\n            <table id=\"dtDetalleAtributos\" class=\"table table-striped table-no-bordered table-hover\" cellspacing=\"0\" width=\"100%\" style=\"width:100%\">\r\n              <thead>\r\n                <tr>\r\n\r\n                  <th class=\"disabled-sorting\">Nombre</th>\r\n                  <th class=\"disabled-sorting text-center\">Operador</th>\r\n                  <th class=\"disabled-sorting text-center\">Valor</th>\r\n                  <th class=\"disabled-sorting text-center\">Unidad</th>\r\n                  <th class=\"disabled-sorting text-center\">Obligatorio</th>\r\n\r\n                </tr>\r\n              </thead>\r\n\r\n              <tbody>\r\n                <tr *ngFor=\"let row of atributos\">\r\n\r\n                  <td>{{row.nombre}}</td>\r\n                  <td class=\"text-center\">{{row.operador}}</td>\r\n                  <td>\r\n                    <input name=\"valor\" [(ngModel)]=\"row.valor\" type=\"text\" class=\"form-control\" [disabled]=\"toggleButton\">\r\n                  </td>\r\n                  <td class=\"text-center\">{{row.unidad}}</td>\r\n                  <td class=\"text-center\">{{row.obligatorio}}</td>\r\n\r\n                </tr>\r\n              </tbody>\r\n            </table>\r\n          </div>\r\n        </div>\r\n        <div class=\"modal-footer\">\r\n\r\n          <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Cerrar</button>\r\n          <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\" (click)=\"grabarAtributos()\" [disabled]=\"toggleButton\">Grabar</button>\r\n\r\n        </div>\r\n      </div>\r\n      <!-- /.modal-content -->\r\n    </div>\r\n    <!-- /.modal-dialog -->\r\n  </div>\r\n\r\n\r\n\r\n\r\n\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/cotizacion/proveedor/formulario/cotizacionproveedorformulario.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CotizacionProveedorFormularioComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_model_cotizacion__ = __webpack_require__("../../../../../src/app/model/cotizacion.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var propuestaCotizacionFormularioComponent, row_id, dtArchivos;
var CotizacionProveedorFormularioComponent = (function () {
    function CotizacionProveedorFormularioComponent(activatedRoute) {
        this.toggleButton = true;
        this.classDisabled = 'disabled';
        this.posicionactual = 0;
        this.idarchivo = 3;
        this.id = 0;
        this.activatedRoute = activatedRoute;
    }
    CotizacionProveedorFormularioComponent.prototype.habilitarEdicion = function (e) {
        this.toggleButton = false;
        $("input[name='cantidad']").prop('disabled', false);
        $("input[name='precio']").prop('disabled', false);
        $("input[name='fechaentrega']").prop('disabled', false);
        $("#btnAgregarArchivo").removeClass('disabled');
        if (e)
            e.preventDefault();
    };
    CotizacionProveedorFormularioComponent.prototype.agregarArchivo = function (e) {
        $('#btnEliminarAA').click();
        if (this.toggleButton === false) {
            this.archivo = new __WEBPACK_IMPORTED_MODULE_2_app_model_cotizacion__["a" /* Archivo */]();
            $('#mdlArchivosAdjuntos').modal('show');
        }
        e.preventDefault();
    };
    /*grabarArchivo() {
  
      var archivo = JSON.parse(JSON.stringify(this.archivo)) as Archivo;
      this.item.docadjuntos.push(archivo);
      this.idarchivo = this.idarchivo + 1;
      RebindArchivos();
  
    }*/
    CotizacionProveedorFormularioComponent.prototype.validarDocumentos = function () {
        if ($("#txtArchivo").get(0).files.length == 0) {
            swal({
                text: "Un archivo es requerido. Por favor completar y volver a intentar!",
                type: 'warning',
                buttonsStyling: false,
                confirmButtonClass: "btn btn-warning"
            });
            return false;
        }
        return true;
    };
    CotizacionProveedorFormularioComponent.prototype.grabarArchivo = function () {
        if (!this.validarDocumentos()) {
            return false;
        }
        var docs_ordenado = this.item.docadjuntos.sort(function (n, n1) {
            if (n.id < n1.id)
                return -1;
            if (n.id > n1.id)
                return 1;
            return 0;
        });
        if (docs_ordenado.length > 0)
            this.archivo.id = docs_ordenado[docs_ordenado.length - 1].id + 1;
        else
            this.archivo.id = 1;
        this.item.docadjuntos.push(this.archivo);
        setTimeout(function () {
            dtArchivos.ajax.reload();
        }, 500);
        $("#mdlArchivosAdjuntos").modal('toggle');
    };
    CotizacionProveedorFormularioComponent.prototype.verAtributos = function (e, posicion) {
        this.posicionactual = posicion;
        var producto = this.item.productos.find(function (a) { return a.posicion == posicion; });
        var atributos = JSON.parse(JSON.stringify(producto.atributos)); //clone
        propuestaCotizacionFormularioComponent.atributos = atributos;
        RebindAtributos();
        e.preventDefault();
    };
    CotizacionProveedorFormularioComponent.prototype.grabarAtributos = function () {
        var _this = this;
        var producto = this.item.productos.find(function (a) { return a.posicion == _this.posicionactual; });
        producto.atributos = this.atributos;
    };
    CotizacionProveedorFormularioComponent.prototype.onChange = function (event, id) {
        var eventObj = event;
        var target = eventObj.target;
        var files = target.files;
        //this.file = files[0];
        //console.log(this.file);
        console.log(files);
        console.log(id);
    };
    CotizacionProveedorFormularioComponent.prototype.deleteArchivo = function (e, id) {
        console.log(e);
        console.log(id);
        var archivos = this.item.docadjuntos;
        console.log("archivos", archivos);
        var archivosfiltrados = archivos.filter(function (a) { return a.id != id; });
        this.item.docadjuntos = JSON.parse(JSON.stringify(archivosfiltrados));
        console.log("archivosfiltrados", this.item.docadjuntos);
        //dtArchivos.row($tr).remove().draw();
        RebindArchivos();
        e.preventDefault();
    };
    CotizacionProveedorFormularioComponent.prototype.clicked = function () {
        console.log("clicked", this.item);
    };
    CotizacionProveedorFormularioComponent.prototype.ngOnInit = function () {
        var _this = this;
        propuestaCotizacionFormularioComponent = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.id = params['id'];
        });
        if (this.id > 0) {
            this.toggleButton = true;
        }
        else {
            this.toggleButton = false;
        }
        this.item = {
            nrocotizacion: "00000000001121",
            nroreq: 1002,
            organizacioncompradora: "Ministerio de Salud",
            atenciona: "Usuario Ministerio",
            preparadopor: "Usuario Proveedor",
            moneda: "USD",
            mensaje: "",
            productos: [
                {
                    posicion: 1,
                    nombreproducto: "Grupo Electrógeno",
                    cantidadbase: 20,
                    unidad: 'UND',
                    cantidad: 0,
                    precio: 1000,
                    adjuntos: 'imagenGrupoElectrógeno.png',
                    fechaentrega: '03/07/2016',
                    atributos: [
                        {
                            nombre: 'F. Entrega',
                            operador: '=',
                            valor: '',
                            unidad: 'Fecha',
                            obligatorio: 'SI',
                        },
                        {
                            nombre: 'Equivalencia',
                            operador: '>',
                            valor: '',
                            unidad: 'Texto',
                            obligatorio: 'NO',
                        },
                        {
                            nombre: 'Garantia',
                            operador: '<',
                            valor: '',
                            unidad: 'Año',
                            obligatorio: 'SI',
                        }
                    ]
                },
                {
                    posicion: 2,
                    nombreproducto: "Camioneta Rural",
                    cantidadbase: 2, unidad: 'UND',
                    cantidad: 0,
                    precio: 1000,
                    adjuntos: 'imagenCamionetaRural.png',
                    fechaentrega: '03/07/2016',
                    atributos: [
                        {
                            nombre: 'Equivalencia',
                            operador: '>',
                            valor: '',
                            unidad: 'Texto',
                            obligatorio: 'NO',
                        },
                        {
                            nombre: 'Garantia',
                            operador: '<',
                            valor: '',
                            unidad: 'Año',
                            obligatorio: 'SI',
                        }
                    ]
                },
                {
                    posicion: 3,
                    nombreproducto: "Grupo Electrógeno",
                    cantidadbase: 20,
                    unidad: 'UND',
                    cantidad: 0,
                    precio: 1000,
                    adjuntos: 'imagenGrupoElectrógeno.png',
                    fechaentrega: '03/07/2016',
                    atributos: [
                        {
                            nombre: 'F. Entrega',
                            operador: '=',
                            valor: '',
                            unidad: 'Fecha',
                            obligatorio: 'SI',
                        },
                        {
                            nombre: 'Equivalencia',
                            operador: '>',
                            valor: '',
                            unidad: 'Texto',
                            obligatorio: 'NO',
                        },
                        {
                            nombre: 'Garantia',
                            operador: '<',
                            valor: '',
                            unidad: 'Año',
                            obligatorio: 'SI',
                        }
                    ]
                }
            ],
            docadjuntos: [
                {
                    id: 1,
                    descripcion: "Descripción archivo numero 1"
                },
                {
                    id: 2,
                    descripcion: "Descripción archivo numero 2"
                }
            ]
        };
        this.atributos = [];
        this.archivo = {
            id: 0,
            descripcion: ""
        };
    };
    CotizacionProveedorFormularioComponent.prototype.ngOnChanges = function (changes) {
    };
    CotizacionProveedorFormularioComponent.prototype.ngAfterViewInit = function () {
        //  Activate the tooltips
        $('[rel="tooltip"]').tooltip();
        var tblArticulos = $('#dtArticulos').DataTable({
            columnDefs: [
                { targets: 'disabled-sorting', orderable: false }
            ],
        });
        CargarDataTableAtributos();
        CargarDataTableArchivos();
        if (this.id == 0) {
            setTimeout(function () {
                propuestaCotizacionFormularioComponent.habilitarEdicion(null);
            }, 500);
        }
        DatatableFunctions.registerCheckAll();
    };
    return CotizacionProveedorFormularioComponent;
}());
CotizacionProveedorFormularioComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'cotizacionproveedorformulario-cmp',
        template: __webpack_require__("../../../../../src/app/cotizacion/proveedor/formulario/cotizacionproveedorformulario.component.html"),
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object])
], CotizacionProveedorFormularioComponent);

function CargarDataTableArchivos() {
    dtArchivos = $('#dtArchivos').on('init.dt', function (e, settings, json) {
        DatatableFunctions.initDatatable(e, settings, json, dtArchivos);
    }).DataTable({
        ajax: function (data, callback, settings) {
            var result = {
                data: propuestaCotizacionFormularioComponent.item.docadjuntos
            };
            callback(result);
        },
        columns: [
            { data: 'id' },
            { data: 'descripcion' },
            { data: 'id' },
        ],
        columnDefs: [
            {
                render: function (data, type, row) {
                    return '<div class="text-right" height="100%"><div class="checkbox text-right"><label><input type="checkbox" name="optionsCheckboxes"></label></div></div>';
                },
                targets: 0
            },
            {
                render: function (data, type, row) {
                    return '<div class="text-center"><a class="editar" href="javascript:void(0);" row-id="' + row.id + '">' +
                        '<button class="btn btn-simple btn-info btn-icon download" rel="tooltip" title="Bajar Archivo" data-placement="left">' +
                        '<i class="material-icons">get_app</i></button></a>' +
                        '<button class="btn btn-simple btn-danger btn-icon remove" rel="tooltip" title="Eliminar" data-placement="left">' +
                        '<i class="material-icons">delete</i>' +
                        '</button></div>';
                },
                targets: 2
            }
        ]
    });
    dtArchivos.on('click', '.download', function (event) {
        var $tr = $(this).closest('tr');
        var row_id = $tr.find("a.editar").attr('row-id');
        event.preventDefault();
    });
    // Delete a record
    dtArchivos.on('click', '.remove', function (e) {
        var $tr = $(this).closest('tr');
        row_id = $tr.find("a.editar").attr('row-id');
        swal({
            text: "¿Desea eliminar el registro seleccionado?",
            type: "warning",
            showCancelButton: true,
            confirmButtonText: "Si",
            cancelButtonText: "No",
            buttonsStyling: false,
            confirmButtonClass: "btn btn-default",
            cancelButtonClass: "btn btn-warning",
        }).then(function () {
            var lista = propuestaCotizacionFormularioComponent.item.docadjuntos;
            var listafiltrada = lista.filter(function (a) { return a.id != row_id; });
            propuestaCotizacionFormularioComponent.item.docadjuntos = JSON.parse(JSON.stringify(listafiltrada));
            setTimeout(function () {
                dtArchivos.ajax.reload();
            }, 500);
        }, function (dismiss) {
            // dismiss can be 'cancel', 'overlay',
            // 'close', and 'timer'
        });
        e.preventDefault();
    });
}
function RebindArchivos() {
    $('#dtArchivos').dataTable().fnDestroy();
    setTimeout(function () {
        CargarDataTableArchivos();
    }, 500);
}
function RebindAtributos() {
    $('#dtDetalleAtributos').dataTable().fnDestroy();
    setTimeout(function () {
        CargarDataTableAtributos();
    }, 500);
}
function CargarDataTableAtributos() {
    var tblDetalleAtributos = $('#dtDetalleAtributos').DataTable({
        columnDefs: [
            { targets: 'disabled-sorting', orderable: false }
        ],
    });
}
var _a;
//# sourceMappingURL=cotizacionproveedorformulario.component.js.map

/***/ }),

/***/ "../../../../../src/app/model/cotizacion.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Cotizacion */
/* unused harmony export Producto */
/* unused harmony export Atributo */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Archivo; });
var Cotizacion = (function () {
    function Cotizacion() {
    }
    return Cotizacion;
}());

var Producto = (function () {
    function Producto() {
    }
    return Producto;
}());

var Atributo = (function () {
    function Atributo() {
    }
    return Atributo;
}());

var Archivo = (function () {
    function Archivo() {
    }
    return Archivo;
}());

//# sourceMappingURL=cotizacion.js.map

/***/ })

});
//# sourceMappingURL=cotizacion.module.chunk.js.map