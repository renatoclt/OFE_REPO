webpackJsonp(["requerimiento.module"],{

/***/ "../../../../../src/app/model/rfqcomprador.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export RFQCompradoBuscar */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return RFQCompradorInsert; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Archivo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return ProveedorInvitado; });
/* unused harmony export Proveedor */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Producto; });
/* unused harmony export Atributo */
var RFQCompradoBuscar = (function () {
    function RFQCompradoBuscar() {
    }
    return RFQCompradoBuscar;
}());

var RFQCompradorInsert = (function () {
    function RFQCompradorInsert() {
        this.docadjuntos = [];
        this.proveedores = [];
        this.proveedoresinvitados = [];
        this.productos = [];
    }
    return RFQCompradorInsert;
}());

var Archivo = (function () {
    function Archivo() {
    }
    return Archivo;
}());

var ProveedorInvitado = (function () {
    function ProveedorInvitado() {
    }
    return ProveedorInvitado;
}());

var Proveedor = (function () {
    function Proveedor() {
    }
    return Proveedor;
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

//# sourceMappingURL=rfqcomprador.js.map

/***/ }),

/***/ "../../../../../src/app/requerimiento/comprador/buscar/requerimientocompradorbuscar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-12\">\r\n                <div class=\"card\">\r\n                    <form method=\"#\" action=\"#\">\r\n                        <div class=\"card-header card-header-text\" data-background-color=\"blue\">\r\n                            <h4 class=\"card-title\">Buscar Requerimiento</h4>\r\n                        </div>\r\n                        <div class=\"card-content\">\r\n                            <div class=\"row\">\r\n                                <div class=\"col-sm-4\">\r\n                                    <div class=\"form-group label-floating\">\r\n                                        <label class=\"control-label\">N° Req.\r\n                                        </label>\r\n                                        <input name=\"firstname\" type=\"text\" class=\"form-control\" value=\"00001\">\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-sm-4\">\r\n                                    <div class=\"form-group label-floating\">\r\n                                        <label class=\"control-label\">Estado</label>\r\n                                        <select name=\"country\" class=\"form-control\">\r\n                                            <option disabled=\"\" selected=\"\"></option>\r\n                                            <option *ngFor=\"let optEstado of listEstadoCombo\" value=\"{{optEstado.valor}}\"> {{optEstado.desc}} </option>           \r\n           \r\n\r\n                                        </select>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-sm-4\">\r\n                                    <div class=\"form-group label-floating checkbox-radios\">\r\n                                        <label class=\"control-label\"></label>\r\n                                        <div class=\"checkbox\">\r\n                                            <label>\r\n                                            <input type=\"checkbox\" name=\"optionsCheckboxes\"> Tiene Respuestas\r\n                                        </label>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"row\">\r\n                                <div class=\"col-sm-3\">\r\n                                    <div class=\"form-group label-floating\">\r\n                                        <label class=\"control-label\">Fecha Creación Del</label>\r\n                                        <input type=\"text\" class=\"form-control\" datepicker />\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-sm-3\">\r\n                                    <div class=\"form-group label-floating\">\r\n                                        <label class=\"control-label\">al</label>\r\n                                        <input type=\"text\" class=\"form-control\" datepicker />\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-sm-3\">\r\n                                    <div class=\"form-group\">\r\n                                        <button class=\"btn btn-default\" (click)=\"clicked($event)\">Buscar</button>\r\n                                        <button class=\"btn btn-default\">Limpiar</button>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <nav class=\"navbar navbar-info\" role=\"navigation\">\r\n                                <div class=\"container-fluid\">\r\n                                    <div class=\"navbar-header\">\r\n\r\n                                        <span class=\"navbar-brand\">Resultados</span>\r\n                                    </div>\r\n\r\n                                    <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\r\n                                        <ul class=\"nav navbar-nav\">\r\n                                            <li><a [routerLink]=\"['/requerimiento/comprador/formulario', 0]\">Agregar</a></li>\r\n                                            <li><a href=\"javascript:void()\">Anular</a></li>\r\n                                            <li><a href=\"javascript:void()\">Procesar</a></li>\r\n\r\n                                        </ul>\r\n                                    </div>\r\n                                </div>\r\n                            </nav>\r\n                            <div class=\"material-datatables table-responsive\">\r\n                                <table id=\"dtResultados\" class=\"table table-striped table-no-bordered table-hover\" cellspacing=\"0\" width=\"100%\" style=\"width:100%\">\r\n                                    <thead>\r\n                                        <tr>\r\n                                            <th class=\"disabled-sorting text-right\">\r\n                                                <div class=\"checkbox text-right\">\r\n                                                    <label><input type=\"checkbox\" name=\"optionsCheckboxes\" class=\"checkall\" ></label>\r\n                                                </div>\r\n                                            </th>\r\n                                            <th>N° Req.</th>\r\n                                            <th>Descripción</th>\r\n                                            <th>Estado</th>\r\n                                            <th>Fecha Creación</th>\r\n                                            <th>Usuario Comprador</th>\r\n                                            <th>Versión</th>\r\n                                            <th class=\"disabled-sorting text-center\">Cotizaciones</th>\r\n                                            <th class=\"disabled-sorting text-center\">Acciones</th>\r\n                                        </tr>\r\n                                    </thead>\r\n\r\n                                </table>\r\n                            </div>\r\n\r\n                        </div>\r\n                    </form>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/requerimiento/comprador/buscar/requerimientocompradorbuscar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RequerimientoCompradorBuscarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_utils_app_utils__ = __webpack_require__("../../../../../src/app/utils/app.utils.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_service_masterservice__ = __webpack_require__("../../../../../src/app/service/masterservice.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var oRequerimientoCompradorBuscarComponent, datatable;
var RequerimientoCompradorBuscarComponent = (function () {
    function RequerimientoCompradorBuscarComponent(router, route, _masterService) {
        this.router = router;
        this.route = route;
        this._masterService = _masterService;
        this.util = new __WEBPACK_IMPORTED_MODULE_2_app_utils_app_utils__["a" /* AppUtils */](this.router, this._masterService);
    }
    RequerimientoCompradorBuscarComponent.prototype.navigate = function (nav) {
        this.router.navigate(nav, { relativeTo: this.route });
    };
    RequerimientoCompradorBuscarComponent.prototype.clicked = function (event) {
        event.preventDefault();
        datatable.ajax.reload();
    };
    RequerimientoCompradorBuscarComponent.prototype.ngOnInit = function () {
        // Code for the Validator
        //this.buscar();
        $('.datepicker').datetimepicker({
            format: 'MM/DD/YYYY',
            icons: {
                time: "fa fa-clock-o",
                date: "fa fa-calendar",
                up: "fa fa-chevron-up",
                down: "fa fa-chevron-down",
                previous: 'fa fa-chevron-left',
                next: 'fa fa-chevron-right',
                today: 'fa fa-screenshot',
                clear: 'fa fa-trash',
                close: 'fa fa-remove',
                inline: true
            }
        });
        oRequerimientoCompradorBuscarComponent = this;
        this.util.listEstadoRFQ(function (data) {
            oRequerimientoCompradorBuscarComponent.listEstadoCombo = data;
        });
        this.resultados = [
            {
                nroreq: "2",
                descripcion: "EQUIPO DE SONIDO (RADIO GRABADOR)<br/>EQUIPO DE SONIDO (RADIO GRABADOR)",
                estado: "Activa",
                fechacreacion: "07/06/2017",
                usuariocomprador: "Gabriela Mendez",
                version: "1",
                cotizaciones: "2",
            },
            {
                nroreq: "3",
                descripcion: "EQUIPO DE SONIDO (RADIO GRABADOR)<br/>EQUIPO DE SONIDO (RADIO GRABADOR)",
                estado: "Activa",
                fechacreacion: "07/06/2017",
                usuariocomprador: "Gabriela Mendez",
                version: "1",
                cotizaciones: "2",
            },
        ];
    };
    RequerimientoCompradorBuscarComponent.prototype.ngAfterViewInit = function () {
        cargarDataTable();
        DatatableFunctions.registerCheckAll();
    };
    return RequerimientoCompradorBuscarComponent;
}());
RequerimientoCompradorBuscarComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'requerimientocompradorbuscar-cmp',
        template: __webpack_require__("../../../../../src/app/requerimiento/comprador/buscar/requerimientocompradorbuscar.component.html"),
        providers: [__WEBPACK_IMPORTED_MODULE_3_app_service_masterservice__["a" /* MasterService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_app_service_masterservice__["a" /* MasterService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_app_service_masterservice__["a" /* MasterService */]) === "function" && _c || Object])
], RequerimientoCompradorBuscarComponent);

function cargarDataTable() {
    //$.fn.dataTable.ext.errMode = 'throw';
    datatable = $('#dtResultados').on('init.dt', function (e, settings, json) {
        DatatableFunctions.initDatatable(e, settings, json, datatable);
    }).DataTable({
        /*ajax: {
          "url": "http://b2miningdata.com/rfqc/v1/rfqcomprador/v1/listvm/1",
          "dataSrc": ""
        },*/
        ajax: function (data, callback, settings) {
            var result = {
                data: oRequerimientoCompradorBuscarComponent.resultados
            };
            callback(result);
        },
        columns: [
            { data: 'nroreq' },
            { data: 'nroreq' },
            { data: 'descripcion' },
            { data: 'estado' },
            { data: 'fechacreacion' },
            { data: 'usuariocomprador' },
            { data: 'version' },
            { data: 'cotizaciones' },
            { data: 'nroreq' }
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
                    return '<div class="text-center"><a class="buscar-propuesta" href="/cotizacion/comprador/buscar" row-id="' + row.nroreq + '">' +
                        row.cotizaciones + '</a></div>';
                },
                targets: 6
            },
            {
                render: function (data, type, row) {
                    return '<div class="text-center"><a class="editar" href="/requerimiento/comprador/formulario/' + row.nroreq + '" row-id="' + row.nroreq + '">' +
                        '<button class="btn btn-simple btn-info btn-icon edit" rel="tooltip" title="Ver/Editar" data-placement="left">' +
                        '<i class="material-icons">visibility</i></button></a>' +
                        '<button class="btn btn-simple btn-danger btn-icon remove" rel="tooltip" title="Eliminar" data-placement="left">' +
                        '<i class="material-icons">delete</i>' +
                        '</button></div>';
                },
                targets: 7
            }
        ]
    });
    datatable.on('click', '.edit', function (event) {
        var $tr = $(this).closest('tr');
        var row_id = $tr.find("a.editar").attr('row-id');
        var nav = ['/requerimiento/comprador/formulario', row_id];
        oRequerimientoCompradorBuscarComponent.navigate(nav);
        event.preventDefault();
    });
    datatable.on('click', '.buscar-propuesta', function (event) {
        var $tr = $(this).closest('tr');
        var row_id = $tr.find("a.buscar-propuesta").attr('row-id');
        var nav = ['/cotizacion/comprador/buscar'];
        oRequerimientoCompradorBuscarComponent.navigate(nav);
        event.preventDefault();
    });
}
var _a, _b, _c;
//# sourceMappingURL=requerimientocompradorbuscar.component.js.map

/***/ }),

/***/ "../../../../../src/app/requerimiento/comprador/formulario/requerimientocompradorformulario.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-12\">\r\n        <div class=\"card\">\r\n          <form method=\"#\" action=\"#\">\r\n            <div class=\"card-header card-header-text\" data-background-color=\"blue\">\r\n              <h4 class=\"card-title\">Requerimiento Detalle</h4>\r\n            </div>\r\n            <div class=\"card-content\">\r\n              <div class=\"row\">\r\n                <div class=\"col-sm-4\">\r\n                  <div class=\"form-group label-floating\">\r\n                    <label class=\"control-label\">Número de requerimiento\r\n                      <span class=\"star\">*</span>\r\n                    </label>\r\n                    <input name=\"nroreq\" [(ngModel)]=\"item.nroreq\" required type=\"text\" class=\"form-control\" [disabled]=\"toggleButton\">\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-sm-4\">\r\n                  <div class=\"form-group label-floating\">\r\n                    <label class=\"control-label\">Prioridad <span class=\"star\">*</span></label>\r\n                    <select name=\"prioridad\" [(ngModel)]=\"item.prioridad\" required class=\"form-control\" [disabled]=\"toggleButton\">\r\n                      <option disabled=\"\" selected=\"\"></option>\r\n                      <option *ngFor=\"let optPrioridad of listPrioridadCombo\" value=\"{{optPrioridad.valor}}\"> {{optPrioridad.desc}} </option>             \r\n                    </select>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-sm-4\">\r\n                  <div class=\"form-group label-floating\">\r\n                    <label class=\"control-label\">Moneda</label>\r\n                    <select name=\"moneda\" [(ngModel)]=\"item.moneda\" class=\"form-control\" [disabled]=\"toggleButton\">\r\n                      <option disabled=\"\" selected=\"\"></option>\r\n                      <option *ngFor=\"let optMoneda of listMonedaCombo\" value=\"{{optMoneda.valor}}\"> {{optMoneda.desc}} </option>\r\n                    </select>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col-sm-6\">\r\n                  <div class=\"form-group label-floating\">\r\n                    <label class=\"control-label\">Descripción</label>\r\n                    <textarea [(ngModel)]=\"item.description\" name=\"description\" class=\"form-control\" rows=\"2\" [disabled]=\"toggleButton\"></textarea>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-sm-6\">\r\n                  <div class=\"form-group label-floating\">\r\n                    <label class=\"control-label\">Und. Orgánicas</label>\r\n                    <textarea [(ngModel)]=\"item.comentarios\" name=\"comentarios\" class=\"form-control\" rows=\"2\" [disabled]=\"toggleButton\"></textarea>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col-sm-6\">\r\n                  <div class=\"form-group label-floating\">\r\n                    <label class=\"control-label\">Notas</label>\r\n                    <textarea [(ngModel)]=\"item.notas\" name=\"notas\" class=\"form-control\" rows=\"5\" [disabled]=\"toggleButton\"></textarea>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-sm-6\">\r\n                  <div class=\"row\">\r\n                    <div class=\"col-sm-4\">\r\n                      <div class=\"form-group label-floating\">\r\n                        <label class=\"control-label\">Fecha Inicio</label>\r\n                        <input type=\"text\" class=\"form-control\" datepicker name=\"fechainiciod\" [(ngModel)]=\"item.fechainiciod\" [disabled]=\"toggleButton\"\r\n                        />\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"col-sm-3\">\r\n                      <div class=\"form-group label-floating\">\r\n                        <label class=\"control-label\">Hora</label>\r\n                        <input type=\"text\" class=\"form-control\" timepicker name=\"fechainiciot\" [(ngModel)]=\"item.fechainiciot\" [disabled]=\"toggleButton\"\r\n                        />\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"row\">\r\n                    <div class=\"col-sm-4\">\r\n                      <div class=\"form-group label-floating\">\r\n                        <label class=\"control-label\">Fecha Fin</label>\r\n                        <input type=\"text\" class=\"form-control\" datepicker name=\"fechafind\" [(ngModel)]=\"item.fechafind\" [disabled]=\"toggleButton\"\r\n                        />\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"col-sm-3\">\r\n                      <div class=\"form-group label-floating\">\r\n                        <label class=\"control-label\">Hora</label>\r\n                        <input type=\"text\" class=\"form-control\" timepicker name=\"fechafint\" [(ngModel)]=\"item.fechafint\" [disabled]=\"toggleButton\"\r\n                        />\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"row\">\r\n                <div class=\"col-md-12\">\r\n                  <div class=\"card\">\r\n                    <div class=\"card-header card-header-icon\" data-background-color=\"blue\">\r\n                      <i class=\"material-icons\">assignment</i>\r\n                    </div>\r\n                    <div class=\"card-content\">\r\n                      <h4 class=\"card-title\">Archivos Adjuntos</h4>\r\n                      <div class=\"toolbar\">\r\n                        <div class=\"row\">\r\n                          <div class=\"col-sm-12\">\r\n                            <nav class=\"navbar navbar-info\" role=\"navigation\">\r\n                              <div class=\"container-fluid\">\r\n                                <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\r\n                                  <ul class=\"nav navbar-nav\">\r\n                                    <li><a href=\"#mdlArchivosAdjuntos\" data-toggle=\"modal\" (click)=\"agregarArchivo($event)\" data-target=\"#mdlArchivosAdjuntos\">Agregar</a></li>\r\n                                    <li><a href=\"javascript:void(0)\">Eliminar</a></li>\r\n                                  </ul>\r\n                                </div>\r\n                              </div>\r\n                            </nav>\r\n\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"material-datatables table-responsive\">\r\n                        <table id=\"dtArchivos\" class=\"table table-striped table-no-bordered table-hover\" cellspacing=\"0\" width=\"100%\" style=\"width:100%\">\r\n                          <thead>\r\n                            <tr>\r\n                              <th class=\"disabled-sorting text-right\">\r\n                                <div class=\"checkbox text-right\">\r\n                                  <label><input type=\"checkbox\" name=\"optionsCheckboxes\" class=\"checkall\" ></label>\r\n                                </div>\r\n                              </th>\r\n                              <th width=\"90%\">Descripción</th>\r\n                              <th class=\"disabled-sorting text-center\">Acciones</th>\r\n                            </tr>\r\n                          </thead>\r\n\r\n\r\n                        </table>\r\n                      </div>\r\n                    </div>\r\n                    <!-- end content-->\r\n                  </div>\r\n                  <!--  end card  -->\r\n                </div>\r\n                <!-- end col-md-12 -->\r\n              </div>\r\n\r\n              <div class=\"row\">\r\n                <div class=\"col-md-12\">\r\n                  <div class=\"card\">\r\n                    <div class=\"card-header card-header-icon\" data-background-color=\"blue\">\r\n                      <i class=\"material-icons\">assignment</i>\r\n                    </div>\r\n                    <div class=\"card-content\">\r\n                      <h4 class=\"card-title\">Detalle de Artículos</h4>\r\n                      <div class=\"toolbar\">\r\n                        <div class=\"row\">\r\n                          <div class=\"col-sm-12\">\r\n                            <nav class=\"navbar navbar-info\" role=\"navigation\">\r\n                              <div class=\"container-fluid\">\r\n                                <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\r\n                                  <ul class=\"nav navbar-nav\">\r\n                                    <li><a href=\"javascript:void(0)\" data-toggle=\"modal\" data-target=\"#mdlArticulo\">Agregar</a></li>\r\n                                    <li><a href=\"javascript:void(0)\">Eliminar</a></li>\r\n                                  </ul>\r\n                                </div>\r\n                              </div>\r\n                            </nav>\r\n\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"material-datatables table-responsive\">\r\n                        <table id=\"dtArticulos\" class=\"table table-striped table-no-bordered table-hover\" cellspacing=\"0\" width=\"100%\" style=\"width:100%\">\r\n                          <thead>\r\n                            <tr>\r\n                              <th class=\"disabled-sorting text-right\">\r\n                                <div class=\"checkbox text-right\">\r\n                                  <label><input type=\"checkbox\" name=\"optionsCheckboxes\" class=\"checkall\" ></label>\r\n                                </div>\r\n                              </th>\r\n                              <th>Código</th>\r\n                              <th>Nombre</th>\r\n                              <th>Objeto Contratado</th>\r\n                              <th>Cantidad</th>\r\n                              <th>Unidad</th>\r\n                              <th class=\"disabled-sorting text-center\">Acciones</th>\r\n                            </tr>\r\n                          </thead>\r\n\r\n\r\n                        </table>\r\n                      </div>\r\n                      <!-- end content-->\r\n                    </div>\r\n                  </div>\r\n                  <!--  end card  -->\r\n                </div>\r\n                <!-- end col-md-12 -->\r\n              </div>\r\n\r\n\r\n\r\n\r\n\r\n              <div class=\"row\">\r\n                <div class=\"col-sm-12\">\r\n                  <div class=\"card\">\r\n                    <div class=\"card-header card-header-icon\" data-background-color=\"blue\">\r\n                      <i class=\"material-icons\">assignment</i>\r\n                    </div>\r\n                    <div class=\"card-content\">\r\n                      <h4 class=\"card-title\">Proveedores</h4>\r\n                      <div class=\"toolbar\">\r\n                        <div class=\"row\">\r\n                          <div class=\"col-sm-12\">\r\n                            <nav class=\"navbar navbar-info\" role=\"navigation\">\r\n                              <div class=\"container-fluid\">\r\n                                <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\r\n                                  <ul class=\"nav navbar-nav\">\r\n                                    <li><a href=\"#mdlProveedor\" data-toggle=\"modal\" data-target=\"#mdlProveedor\">Agregar</a></li>\r\n                                    <li><a href=\"javascript:void(0)\">Eliminar</a></li>\r\n                                  </ul>\r\n                                </div>\r\n                              </div>\r\n                            </nav>\r\n\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"material-datatables table-responsive\">\r\n                        <table id=\"dtProveedores\" class=\"table table-striped table-no-bordered table-hover\" cellspacing=\"0\" width=\"100%\" style=\"width:100%\">\r\n                          <thead>\r\n                            <tr>\r\n                              <th class=\"disabled-sorting text-right\">\r\n                                <div class=\"checkbox text-right\">\r\n                                  <label><input type=\"checkbox\" name=\"optionsCheckboxes\" class=\"checkall\" ></label>\r\n                                </div>\r\n                              </th>\r\n                              <th>Usuario</th>\r\n                              <th>Razón Social</th>\r\n                              <th>RUC</th>\r\n                              <th class=\"disabled-sorting text-center\">Acciones</th>\r\n                            </tr>\r\n                          </thead>\r\n\r\n\r\n                        </table>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col-sm-12\">\r\n                  <div class=\"card\">\r\n                    <div class=\"card-header card-header-icon\" data-background-color=\"blue\">\r\n                      <i class=\"material-icons\">assignment</i>\r\n                    </div>\r\n                    <div class=\"card-content\">\r\n                      <h4 class=\"card-title\">Proveedor Invitado</h4>\r\n                      <div class=\"toolbar\">\r\n                        <div class=\"row\">\r\n                          <div class=\"col-sm-12\">\r\n                            <nav class=\"navbar navbar-info\" role=\"navigation\">\r\n                              <div class=\"container-fluid\">\r\n                                <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\r\n                                  <ul class=\"nav navbar-nav\">\r\n                                    <li><a href=\"#mdlProveedorInvitado\" data-toggle=\"modal\" (click)=\"agregarProveedorInvitado($event)\"\r\n                                        data-target=\"#mdlProveedorInvitado\">Agregar</a></li>\r\n                                    <li><a href=\"javascript:void(0)\">Eliminar</a></li>\r\n                                  </ul>\r\n                                </div>\r\n                              </div>\r\n                            </nav>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"material-datatables table-responsive\">\r\n                        <table id=\"dtProveedoresInvitados\" class=\"table table-striped table-no-bordered table-hover\" cellspacing=\"0\" width=\"100%\"\r\n                          style=\"width:100%\">\r\n                          <thead>\r\n                            <tr>\r\n                              <th class=\"disabled-sorting text-right\">\r\n                                <div class=\"checkbox text-right\">\r\n                                  <label><input type=\"checkbox\" name=\"optionsCheckboxes\" class=\"checkall\" ></label>\r\n                                </div>\r\n                              </th>\r\n                              <th>Razón Social</th>\r\n                              <th>RUC</th>\r\n                              <th>E-mail</th>\r\n                              <th class=\"disabled-sorting text-center\">Acciones</th>\r\n                            </tr>\r\n                          </thead>\r\n\r\n\r\n                        </table>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"card-footer\">\r\n              <button type=\"button\" class=\"btn btn-fill btn-default pull-right\" (click)=\"grabar($event)\" [disabled]=\"toggleButton\">Grabar</button>\r\n              <button (click)=\"toggleButton=false\" class=\"btn btn-fill btn-default pull-right\" *ngIf=\"id>0\">Habilitar Edición</button>\r\n              <a routerLink=\"/requerimiento/comprador/buscar\" class=\"btn btn-fill btn-default pull-right\">Salir</a>\r\n            </div>\r\n\r\n          </form>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n\r\n\r\n  <div id=\"mdlArchivosAdjuntos\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\">\r\n    <div class=\"modal-dialog\" role=\"document\">\r\n      <div class=\"modal-content\">\r\n        <div class=\"modal-header\">\r\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\r\n          <h4 class=\"modal-title\">Archivo Adjunto</h4>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"form-group\">\r\n                <div class=\"fileinput fileinput-new input-group\" data-provides=\"fileinput\">\r\n                  <div class=\"form-control\" data-trigger=\"fileinput\">\r\n                    <i class=\"material-icons fileinput-exists\">attach_file</i>\r\n                    <span class=\"fileinput-filename\"></span>\r\n                  </div>\r\n                  <span class=\"input-group-addon btn btn-default btn-file\">\r\n                    <span class=\"fileinput-new\">Seleccionar Archivo</span>\r\n                  <span class=\"fileinput-exists\">Cambiar</span>\r\n                  <input type=\"file\" name=\"...\" id=\"txtArchivo\">\r\n                  </span>\r\n                  <a href=\"#\" class=\"input-group-addon btn btn-default fileinput-exists\" data-dismiss=\"fileinput\" id=\"btnEliminarAA\">Eliminar</a>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"form-group label-floating\">\r\n                <textarea name=\"descripcion\" placeholder=\"Descripción\" [(ngModel)]=\"archivo.descripcion\" class=\"form-control\" rows=\"4\" [disabled]=\"toggleButton\"></textarea>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"modal-footer\">\r\n          <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Cerrar</button>\r\n          <button type=\"button\" class=\"btn btn-default\" (click)=\"grabarArchivoAdjunto()\" [disabled]=\"toggleButton\">Grabar</button>\r\n        </div>\r\n      </div>\r\n      <!-- /.modal-content -->\r\n    </div>\r\n    <!-- /.modal-dialog -->\r\n  </div>\r\n\r\n  <div id=\"mdlArticulo\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\">\r\n    <div class=\"modal-dialog\" role=\"document\">\r\n      <div class=\"modal-content\">\r\n        <div class=\"modal-header\">\r\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\r\n          <h4 class=\"modal-title\">Detalle de Artículo</h4>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-4\">\r\n              <div class=\"form-group label-floating\">\r\n                <label class=\"control-label\">Código de Producto\r\n                  <span class=\"star\">*</span>\r\n                </label>\r\n                <input name=\"txtCod\" [(ngModel)]=\"producto.codigoproducto\" number=\"true\" required id=\"txtCod\" type=\"text\" class=\"form-control\">\r\n              </div>\r\n            </div>\r\n            <div class=\"col-sm-8\">\r\n              <div class=\"form-group label-floating\">\r\n                <label class=\"control-label\">Nombre de Producto <span class=\"star\">*</span></label>\r\n                <input name=\"txtNombre\" id=\"txtNombre\" required [(ngModel)]=\"producto.nombreproducto\" type=\"text\" class=\"form-control\" [disabled]=\"toggleButton\">\r\n              </div>\r\n            </div>\r\n\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-5\">\r\n              <div class=\"form-group label-floating\">\r\n                <label class=\"control-label\">Objeto de Contratación\r\n                  <span class=\"star\">*</span>\r\n                </label>\r\n                <select name=\"cmbObjetoContratacion\" id=\"cmbObjetoContratacion\" required class=\"form-control\" [disabled]=\"toggleButton\">\r\n                  <option disabled=\"\" selected=\"\"></option>\r\n                  <option value=\"Bien\"> Bien </option>\r\n                  <option value=\"Servicio\"> Servicio </option>\r\n                  <option value=\"Obra\"> Obra </option>\r\n                </select>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-sm-3\">\r\n              <div class=\"form-group label-floating\">\r\n                <label class=\"control-label\">Cantidad <span class=\"star\">*</span></label>\r\n                <input name=\"txtCantidad\" id=\"txtCantidad\" type=\"text\" required [(ngModel)]=\"producto.cantidad\" class=\"form-control\" [disabled]=\"toggleButton\">\r\n              </div>\r\n            </div>\r\n            <div class=\"col-sm-4\">\r\n              <div class=\"form-group label-floating\">\r\n                <label class=\"control-label\">Unidad <span class=\"star\">*</span></label>\r\n                <select name=\"cmbUnidad\" id=\"cmbUnidad\" class=\"form-control\" required [(ngModel)]=\"producto.unidad\" [disabled]=\"toggleButton\">\r\n                  <option disabled=\"\" selected=\"\"></option>\r\n                  <option *ngFor=\"let optUnidad of listUnidadCombo\" value=\"{{optUnidad.valor}}\"> {{optUnidad.desc}} </option>                      \r\n                </select>\r\n              </div>\r\n            </div>\r\n\r\n          </div>\r\n\r\n          <div class=\"row\">\r\n            <div class=\"col-md-12\">\r\n              <div class=\"card\">\r\n                <div class=\"card-header card-header-icon\" data-background-color=\"blue\">\r\n                  <i class=\"material-icons\">assignment</i>\r\n                </div>\r\n                <div class=\"card-content\">\r\n                  <h4 class=\"card-title\">Atributos</h4>\r\n                  <div class=\"toolbar\">\r\n                    <div class=\"row\">\r\n                      <div class=\"col-sm-12\">\r\n                        <nav class=\"navbar navbar-info\" role=\"navigation\">\r\n                          <div class=\"container-fluid\">\r\n                            <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\r\n                              <ul class=\"nav navbar-nav\">\r\n                                <li><a href=\"javascript:void(0)\" data-toggle=\"modal\" data-target=\"#mdlAtributos\">Agregar</a></li>\r\n                                <li><a href=\"javascript:void(0)\">Eliminar</a></li>\r\n                              </ul>\r\n                            </div>\r\n                          </div>\r\n                        </nav>\r\n\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"material-datatables table-responsive\">\r\n                    <table id=\"dtDetalleAtributos\" class=\"table table-striped table-no-bordered table-hover\" cellspacing=\"0\" width=\"100%\" style=\"width:100%\">\r\n                      <thead>\r\n                        <tr>\r\n                          <th class=\"disabled-sorting text-right\">\r\n                            <div class=\"checkbox text-right\">\r\n                              <label><input type=\"checkbox\" name=\"optionsCheckboxes\" class=\"checkall\" ></label>\r\n                            </div>\r\n                          </th>\r\n                          <th>{{ dtDetalleAtributos.headerRow[0] }}</th>\r\n                          <th>{{ dtDetalleAtributos.headerRow[1] }}</th>\r\n                          <th>{{ dtDetalleAtributos.headerRow[2] }}</th>\r\n                          <th>{{ dtDetalleAtributos.headerRow[3] }}</th>\r\n                          <th>{{ dtDetalleAtributos.headerRow[4] }}</th>\r\n                          <th class=\"disabled-sorting text-right\">{{ dtDetalleAtributos.headerRow[5] }}</th>\r\n                        </tr>\r\n                      </thead>\r\n\r\n                      <tbody>\r\n                        <tr *ngFor=\"let row of dtDetalleAtributos.dataRows\">\r\n                          <td>\r\n                            <div class=\"text-right\" height=\"100%\"><div class=\"checkbox text-right\"><label><input type=\"checkbox\" name=\"optionsCheckboxes\"></label></div></div>\r\n                          </td>\r\n                          <td width=\"50%\">{{row[0]}}</td>\r\n                          <td width=\"10%\">{{row[1]}}</td>\r\n                          <td width=\"10%\">{{row[2]}}</td>\r\n                          <td width=\"10%\">{{row[3]}}</td>\r\n                          <td width=\"10%\">{{row[4]}}</td>\r\n                          <td width=\"10%\" class=\"text-center\">\r\n                            <button class=\"btn btn-simple btn-info btn-icon edit\" data-toggle=\"modal\" data-target=\"#mdlAtributos\" rel=\"tooltip\" title=\"Editar\"\r\n                              data-placement=\"left\" [disabled]=\"toggleButton\">\r\n                            <i class=\"material-icons\">visibility</i>\r\n                          </button>\r\n                            <button class=\"btn btn-simple btn-danger btn-icon edit\" rel=\"tooltip\" title=\"Eliminar\" data-placement=\"left\" [disabled]=\"toggleButton\">\r\n                            <i class=\"material-icons\">delete</i>\r\n                          </button>\r\n                          </td>\r\n                        </tr>\r\n                      </tbody>\r\n                    </table>\r\n                  </div>\r\n                </div>\r\n                <!-- end content-->\r\n              </div>\r\n              <!--  end card  -->\r\n            </div>\r\n            <!-- end col-md-12 -->\r\n          </div>\r\n\r\n\r\n\r\n        </div>\r\n        <div class=\"modal-footer\">\r\n          <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Cerrar</button>\r\n          <button type=\"button\" class=\"btn btn-default\" (click)=\"grabarArticulo()\" [disabled]=\"toggleButton\">Grabar</button>\r\n        </div>\r\n      </div>\r\n      <!-- /.modal-content -->\r\n    </div>\r\n    <!-- /.modal-dialog -->\r\n\r\n\r\n  </div>\r\n  <div id=\"mdlAtributos\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\">\r\n    <div class=\"modal-dialog\" role=\"document\">\r\n      <div class=\"modal-content\">\r\n        <div class=\"modal-header\">\r\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\r\n          <h4 class=\"modal-title\">Atributo por Detalle</h4>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-6\">\r\n              <div class=\"form-group label-floating\">\r\n                <label class=\"control-label\">Descripción\r\n                  <span class=\"star\">*</span>\r\n                </label>\r\n                <input name=\"firstname\" type=\"text\" class=\"form-control\" [disabled]=\"toggleButton\">\r\n              </div>\r\n            </div>\r\n            <div class=\"col-sm-6\">\r\n              <div class=\"form-group label-floating\">\r\n                <label class=\"control-label\">Atributo\r\n                  <span class=\"star\">*</span>\r\n                </label>\r\n                <select name=\"country\" class=\"form-control\" [disabled]=\"toggleButton\">\r\n                  <option disabled=\"\" selected=\"\"></option>\r\n                  <option value=\"Tamaño\">F. Entrega</option>\r\n                  <option value=\"Tamaño\">Color</option>\r\n                  <option value=\"Tamaño\">Marca</option>\r\n                  <option value=\"Tamaño\">Garantia</option>\r\n                  <option value=\"Tamaño\">Precio</option>\r\n                  <option value=\"Tamaño\">Comentario</option>\r\n                  <option value=\"Tamaño\">Equivalencia</option>\r\n                </select>\r\n              </div>\r\n            </div>\r\n\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-3\">\r\n              <div class=\"form-group label-floating\">\r\n                <label class=\"control-label\">Operador\r\n                  <span class=\"star\">*</span>\r\n                </label>\r\n                <select name=\"country\" class=\"form-control\" [disabled]=\"toggleButton\">\r\n                  <option disabled=\"\" selected=\"\"></option>\r\n                  <option value=\"Tamaño\"> = </option>\r\n                  <option value=\"Color\"> > </option>\r\n                  <option value=\"Ancho\"> < </option>\r\n                </select>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-sm-3\">\r\n              <div class=\"form-group label-floating\">\r\n                <label class=\"control-label\">Valor\r\n                  <span class=\"star\">*</span>\r\n                </label>\r\n                <input name=\"firstname\" type=\"text\" class=\"form-control\" [disabled]=\"toggleButton\">\r\n              </div>\r\n            </div>\r\n            <div class=\"col-sm-3\">\r\n              <div class=\"form-group label-floating\">\r\n                <label class=\"control-label\">Unidad\r\n                  <span class=\"star\">*</span>\r\n                </label>\r\n                <select name=\"country\" class=\"form-control\" [disabled]=\"toggleButton\">\r\n                  <option disabled=\"\" selected=\"\"></option>\r\n                  <option value=\"Bien\">Bolsa</option>\r\n                  <option value=\"Bien\">Caja</option>\r\n                  <option value=\"Bien\">ton/m3</option>\r\n                  <option value=\"Bien\">Kilogram</option>\r\n                  <option value=\"Bien\">Metros Cuadados</option>\r\n                  <option value=\"Bien\">Metro cubico</option>\r\n                  <option value=\"Bien\">Unidades</option>\r\n                </select>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-sm-3\">\r\n              <div class=\"form-group label-floating\">\r\n                <label class=\"control-label\">Obligatorio\r\n                  <span class=\"star\">*</span>\r\n                </label>\r\n                <select name=\"country\" class=\"form-control\" [disabled]=\"toggleButton\">\r\n                  <option disabled=\"\" selected=\"\"></option>\r\n                  <option value=\"Tamaño\"> Si </option>\r\n                  <option value=\"Color\"> No </option>\r\n                </select>\r\n              </div>\r\n            </div>\r\n\r\n          </div>\r\n\r\n        </div>\r\n        <div class=\"modal-footer\">\r\n          <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Cerrar</button>\r\n          <button type=\"button\" class=\"btn btn-default\" [disabled]=\"toggleButton\">Grabar</button>\r\n        </div>\r\n      </div>\r\n      <!-- /.modal-content -->\r\n    </div>\r\n    <!-- /.modal-dialog -->\r\n  </div>\r\n\r\n  <div id=\"mdlProveedor\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\">\r\n    <div class=\"modal-dialog\" role=\"document\">\r\n      <div class=\"modal-content\">\r\n        <div class=\"modal-header\">\r\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\r\n          <h4 class=\"modal-title\">Proveedor</h4>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"form-group label-floating\">\r\n                <label class=\"control-label\">Razón Social\r\n                  <span class=\"star\">*</span>\r\n                </label>\r\n                <input name=\"txtRazonSocial2\" id=\"txtRazonSocial2\" type=\"text\" class=\"form-control\" [disabled]=\"toggleButton\">\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-12\">\r\n\r\n              <div class=\"material-datatables table-responsive\">\r\n                <table id=\"dtProveedoresBuscar\" class=\"table table-striped table-no-bordered table-hover\" cellspacing=\"0\" width=\"100%\" style=\"width:100%\">\r\n                  <thead>\r\n                    <tr>\r\n                      <th>Usuario</th>\r\n                      <th class=\"disabled-sorting text-right\">Acciones</th>\r\n                    </tr>\r\n                  </thead>\r\n\r\n\r\n                </table>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"modal-footer\">\r\n          <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Cerrar</button>\r\n          <button type=\"button\" class=\"btn btn-default\" [disabled]=\"toggleButton\" (click)=\"grabarAgregarProveedor($event)\">Grabar</button>\r\n        </div>\r\n      </div>\r\n      <!-- /.modal-content -->\r\n    </div>\r\n    <!-- /.modal-dialog -->\r\n  </div>\r\n\r\n  <div id=\"mdlProveedorInvitado\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\">\r\n    <div class=\"modal-dialog\" role=\"document\">\r\n      <div class=\"modal-content\">\r\n        <div class=\"modal-header\">\r\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\r\n          <h4 class=\"modal-title\">Proveedor Invitado</h4>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-8\">\r\n              <div class=\"form-group label-floating\">\r\n                <label class=\"control-label\">Razón Social <span class=\"star\">*</span></label>\r\n                <input name=\"razonsocial\" required [(ngModel)]=\"proveedorInvitado.razonsocial\" type=\"text\" class=\"form-control\" [disabled]=\"toggleButton\">\r\n              </div>\r\n            </div>\r\n            <div class=\"col-sm-4\">\r\n              <div class=\"form-group label-floating\">\r\n                <label class=\"control-label\">RUC <small>(Solo Perú*)</small></label>\r\n                <input name=\"ruc\" type=\"text\" required class=\"form-control\" [(ngModel)]=\"proveedorInvitado.ruc\" [disabled]=\"toggleButton\">\r\n              </div>\r\n            </div>\r\n\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"form-group label-floating\">\r\n                <label class=\"control-label\">E-mail <span class=\"star\">*</span></label>\r\n                <input name=\"email\" email=\"true\" required type=\"email\" [(ngModel)]=\"proveedorInvitado.email\" class=\"form-control\" [disabled]=\"toggleButton\">\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"modal-footer\">\r\n          <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Cerrar</button>\r\n          <button type=\"button\" class=\"btn btn-default\" (click)=\"grabarProveedorInvitado()\" [disabled]=\"toggleButton\">Grabar</button>\r\n        </div>\r\n      </div>\r\n      <!-- /.modal-content -->\r\n    </div>\r\n    <!-- /.modal-dialog -->\r\n  </div>\r\n\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/requerimiento/comprador/formulario/requerimientocompradorformulario.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RequerimientoCompradorFormularioComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_service_rfqcompradorservice__ = __webpack_require__("../../../../../src/app/service/rfqcompradorservice.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_model_rfqcomprador__ = __webpack_require__("../../../../../src/app/model/rfqcomprador.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_utils_app_utils__ = __webpack_require__("../../../../../src/app/utils/app.utils.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_app_service_masterservice__ = __webpack_require__("../../../../../src/app/service/masterservice.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var oRequerimientoCompradorFormularioComponent;
var dtArchivos, dtProveedoresInvitados, dtProveedores, dtArticulos;
var row_id;
var RequerimientoCompradorFormularioComponent = (function () {
    function RequerimientoCompradorFormularioComponent(activatedRoute, router, _dataService, _masterService) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this._dataService = _dataService;
        this._masterService = _masterService;
        this.toggleButton = true;
        this.iArticulo = 0;
        this.id = 0;
        this.errorMessage = '';
        this.messagePost = '';
        this.isLoading = true;
        this.listArticuloModel = [];
        this.item = new __WEBPACK_IMPORTED_MODULE_3_app_model_rfqcomprador__["d" /* RFQCompradorInsert */]();
        this.item.fechainiciod = moment().format("MM/DD/YYYY");
        this.item.fechainiciot = moment().format("hh:mm a");
        this.item.fechafind = moment().format("MM/DD/YYYY");
        this.item.fechafint = moment().format("hh:mm a");
        this.item.productos = [];
        this.item.proveedoresinvitados = [];
        this.item.proveedores = [
            {
                id: 1,
                razonsocial: 'Tailoy',
                ruc: '123456789',
                usuario: 'Miguel A.',
            },
            {
                id: 2,
                razonsocial: 'Nissan Maquinarias',
                ruc: '123456789',
                usuario: 'Johnny L.',
            },
            {
                id: 3,
                razonsocial: 'Hidrostal',
                ruc: '123456789',
                usuario: 'Carlos R.',
            },
        ];
        this.proveedores = [
            {
                id: 4,
                razonsocial: 'Sodimac',
                ruc: '123456789',
                usuario: 'Luis Angulo',
            },
            {
                id: 5,
                razonsocial: 'Toyota Maquinarias',
                ruc: '123456789',
                usuario: 'Juan Lopez',
            },
            {
                id: 6,
                razonsocial: 'Gloria',
                ruc: '123456789',
                usuario: 'Eduardo Robles',
            },
        ];
        this.producto = new __WEBPACK_IMPORTED_MODULE_3_app_model_rfqcomprador__["b" /* Producto */]();
        this.proveedorInvitado = new __WEBPACK_IMPORTED_MODULE_3_app_model_rfqcomprador__["c" /* ProveedorInvitado */]();
        this.util = new __WEBPACK_IMPORTED_MODULE_4_app_utils_app_utils__["a" /* AppUtils */](this.router, this._masterService);
        this.archivo = new __WEBPACK_IMPORTED_MODULE_3_app_model_rfqcomprador__["a" /* Archivo */]();
    }
    RequerimientoCompradorFormularioComponent.prototype.grabarAgregarProveedor = function (event) {
        for (var xI = 0; xI < this.proveedores.length; xI++) {
            this.item.proveedores.push(this.proveedores[xI]);
        }
        setTimeout(function () {
            dtProveedores.ajax.reload();
        }, 500);
        $("#mdlProveedor").modal('toggle');
        event.preventDefault();
    };
    RequerimientoCompradorFormularioComponent.prototype.agregarArchivo = function (event) {
        this.archivo = new __WEBPACK_IMPORTED_MODULE_3_app_model_rfqcomprador__["a" /* Archivo */]();
        event.preventDefault();
    };
    RequerimientoCompradorFormularioComponent.prototype.agregarProveedorInvitado = function (event) {
        this.proveedorInvitado = new __WEBPACK_IMPORTED_MODULE_3_app_model_rfqcomprador__["c" /* ProveedorInvitado */]();
        event.preventDefault();
    };
    RequerimientoCompradorFormularioComponent.prototype.obtener = function (id) {
        var _this = this;
        this._dataService
            .obtener(id)
            .subscribe(function (p) {
            _this.item = p.data[0];
            console.log(_this.item.productos);
            if (!_this.item.proveedores)
                _this.item.proveedores = [];
            if (!_this.item.docadjuntos)
                _this.item.docadjuntos = [];
            if (!_this.item.proveedoresinvitados)
                _this.item.proveedoresinvitados = [];
            if (!_this.item.productos)
                _this.item.productos = [];
            /*for (var xI = 0; xI < this.item.productos.length; xI++) {
              this.dtArticulos.dataRows.push([this.item.productos[xI].codigoproducto + "", this.item.productos[xI].nombreproducto,
              this.item.productos[xI].description, this.item.productos[xI].cantidad, this.item.productos[xI].unidad, '']);
            }*/
            setTimeout(function () {
                $("input").each(function () {
                    $(this).keydown();
                });
                $("textarea").each(function () {
                    $(this).keydown();
                });
            }, 100);
            setTimeout(function () {
                dtArticulos.ajax.reload();
            }, 100);
        }, function (e) { return _this.errorMessage = e; }, function () { return _this.isLoading = false; });
    };
    RequerimientoCompradorFormularioComponent.prototype.validar = function () {
        if (this.item.nroreq == null || this.item.nroreq == 0) {
            swal({
                text: "N° Req. es un campo requerido. Por favor completar y volver a intentar!",
                type: 'warning',
                buttonsStyling: false,
                confirmButtonClass: "btn btn-warning"
            });
            return false;
        }
        if (this.item.prioridad == null || this.item.prioridad == "") {
            swal({
                text: "Prioridad es un campo requerido. Por favor completar y volver a intentar!",
                type: 'warning',
                buttonsStyling: false,
                confirmButtonClass: "btn btn-warning"
            });
            return false;
        }
        return true;
    };
    RequerimientoCompradorFormularioComponent.prototype.validarDocumentos = function () {
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
    RequerimientoCompradorFormularioComponent.prototype.validarDetalleArticulo = function () {
        if (this.producto.codigoproducto == null || this.producto.codigoproducto == 0) {
            swal({
                text: "Código de Producto es un campo requerido. Por favor completar y volver a intentar!",
                type: 'warning',
                buttonsStyling: false,
                confirmButtonClass: "btn btn-warning"
            });
            return false;
        }
        if (this.producto.nombreproducto == null || this.producto.nombreproducto == "") {
            swal({
                text: "Nombre de Producto es un campo requerido. Por favor completar y volver a intentar!",
                type: 'warning',
                buttonsStyling: false,
                confirmButtonClass: "btn btn-warning"
            });
            return false;
        }
        if (this.producto.cantidad == null || this.producto.cantidad == "") {
            swal({
                text: "Cantidad es un campo requerido. Por favor completar y volver a intentar!",
                type: 'warning',
                buttonsStyling: false,
                confirmButtonClass: "btn btn-warning"
            });
            return false;
        }
        if (this.producto.unidad == null || this.producto.unidad == "") {
            swal({
                text: "Unidad es un campo requerido. Por favor completar y volver a intentar!",
                type: 'warning',
                buttonsStyling: false,
                confirmButtonClass: "btn btn-warning"
            });
            return false;
        }
        return true;
    };
    RequerimientoCompradorFormularioComponent.prototype.grabar = function (event) {
        if (!this.validar()) {
            return false;
        }
        if (this.id == 0) {
            this.create();
        }
        else {
            var $this_1 = this;
            swal({
                text: "Editado!",
                type: 'success',
                buttonsStyling: false,
                confirmButtonClass: "btn btn-success"
            }).then(function () {
                $this_1.router.navigate(["/requerimiento/comprador/buscar"], { relativeTo: $this_1.activatedRoute });
            });
        }
    };
    RequerimientoCompradorFormularioComponent.prototype.create = function () {
        this.item.fechainicio = moment(moment(this.item.fechainiciod + " " + this.item.fechainiciot, "MM/DD/YYYY hh:mm a").toDate()).format("MM-DD-YYYY H:mm:ss");
        this.item.fechafin = moment(moment(this.item.fechafind + " " + this.item.fechafint, "MM/DD/YYYY hh:mm a").toDate()).format("MM-DD-YYYY H:mm:ss");
        var $this = this;
        this._dataService.add(this.item).subscribe(function (resp) {
            console.log("resp", resp);
            if (resp.status == 200) {
                swal({
                    text: "Registro satisfactorio!",
                    type: 'success',
                    buttonsStyling: false,
                    confirmButtonClass: "btn btn-warning"
                }).then(function () {
                    $this.router.navigate(["/requerimiento/comprador/buscar"], { relativeTo: $this.activatedRoute });
                });
            }
            else {
                swal({
                    text: "Ocurrió un error!",
                    type: 'error',
                    buttonsStyling: false,
                    confirmButtonClass: "btn btn-error"
                }).then(function () {
                    $this.router.navigate(["/requerimiento/comprador/buscar"], { relativeTo: $this.activatedRoute });
                });
            }
        }, function (error) {
            swal({
                text: "Ocurrió un error!",
                type: 'error',
                buttonsStyling: false,
                confirmButtonClass: "btn btn-error"
            }).then(function () {
                $this.router.navigate(["/requerimiento/comprador/buscar"], { relativeTo: $this.activatedRoute });
            });
        });
    };
    RequerimientoCompradorFormularioComponent.prototype.validarProveedorInvitado = function () {
        if (this.proveedorInvitado.razonsocial == null || this.proveedorInvitado.razonsocial == "") {
            swal({
                text: "Razón social es un campo requerido. Por favor completar y volver a intentar!",
                type: 'warning',
                buttonsStyling: false,
                confirmButtonClass: "btn btn-warning"
            });
            return false;
        }
        return true;
    };
    RequerimientoCompradorFormularioComponent.prototype.grabarProveedorInvitado = function () {
        if (!this.validarProveedorInvitado()) {
            return false;
        }
        var lista_ordenado = this.item.proveedoresinvitados.sort(function (n, n1) {
            if (n.id < n1.id)
                return -1;
            if (n.id > n1.id)
                return 1;
            return 0;
        });
        if (lista_ordenado.length > 0)
            this.proveedorInvitado.id = lista_ordenado[lista_ordenado.length - 1].id + 1;
        else
            this.proveedorInvitado.id = 1;
        this.item.proveedoresinvitados.push(this.proveedorInvitado);
        setTimeout(function () {
            dtProveedoresInvitados.ajax.reload();
        }, 500);
        $("#mdlProveedorInvitado").modal('toggle');
    };
    RequerimientoCompradorFormularioComponent.prototype.grabarArchivoAdjunto = function () {
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
    RequerimientoCompradorFormularioComponent.prototype.grabarArticulo = function () {
        if (!this.validarDetalleArticulo()) {
            return false;
        }
        this.iArticulo++;
        this.item.productos.push({
            in_codigoproductoxrfq: this.iArticulo, in_idrfq: this.item.nroreq, id_rfq: this.item.nroreq, cantidad: this.producto.cantidad,
            nombreproducto: this.producto.nombreproducto, codigoproducto: this.producto.codigoproducto, description: "", descripcionproducto: "", nroparte: "", unidad: this.producto.unidad
        });
        /*this.dtArticulos.dataRows = [];
    
        for (var xI = 0; xI < this.item.productos.length; xI++) {
          this.dtArticulos.dataRows.push([this.item.productos[xI].codigoproducto + "", this.item.productos[xI].nombreproducto,
          this.item.productos[xI].description, this.item.productos[xI].cantidad, this.item.productos[xI].unidad, '']);
        }*/
        $("#mdlArticulo").modal('toggle');
    };
    RequerimientoCompradorFormularioComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.id = params['id'];
        });
        if (this.id > 0) {
            this.toggleButton = true;
        }
        else {
            this.toggleButton = false;
        }
        this.dtDetalleAtributos = {
            headerRow: ['Nombre', 'Operador', 'Valor', 'Unidad', 'Obligatorio', 'Acciones'],
            footerRow: ['Nombre', 'Operador', 'Valor', 'Unidad', 'Obligatorio', 'Acciones'],
            dataRows: [
                ['F. Entrega', '=', '', '', 'Si', ''],
                ['Equivalencia', '=', '', '', 'No', ''],
            ]
        };
        oRequerimientoCompradorFormularioComponent = this;
        this.util.listPrioridades(function (data) {
            oRequerimientoCompradorFormularioComponent.listPrioridadCombo = data;
        });
        this.util.listMonedas(function (data) {
            oRequerimientoCompradorFormularioComponent.listMonedaCombo = data;
        });
        this.util.listUnidadMedida(function (data) {
            oRequerimientoCompradorFormularioComponent.listUnidadCombo = data;
        });
    };
    RequerimientoCompradorFormularioComponent.prototype.ngOnChanges = function (changes) {
    };
    RequerimientoCompradorFormularioComponent.prototype.ngAfterViewInit = function () {
        $('#mdlProveedorInvitado').on('shown.bs.modal', function () {
            oRequerimientoCompradorFormularioComponent.proveedoresInvitado = new __WEBPACK_IMPORTED_MODULE_3_app_model_rfqcomprador__["c" /* ProveedorInvitado */]();
        });
        $('#mdlArticulo').on('shown.bs.modal', function () {
            oRequerimientoCompradorFormularioComponent.producto = new __WEBPACK_IMPORTED_MODULE_3_app_model_rfqcomprador__["b" /* Producto */]();
            $("#cmbObjetoContratacion").val("");
        });
        $('#mdlArchivosAdjuntos').on('shown.bs.modal', function () {
            $('#btnEliminarAA').click();
        });
        dtArchivos = $('#dtArchivos').on('init.dt', function (e, settings, json) {
            DatatableFunctions.initDatatable(e, settings, json, dtArchivos);
        }).DataTable({
            ajax: function (data, callback, settings) {
                var result = {
                    data: oRequerimientoCompradorFormularioComponent.item.docadjuntos
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
        // Edit record
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
                var lista = oRequerimientoCompradorFormularioComponent.item.docadjuntos;
                var listafiltrada = lista.filter(function (a) { return a.id != row_id; });
                oRequerimientoCompradorFormularioComponent.item.docadjuntos = JSON.parse(JSON.stringify(listafiltrada));
                setTimeout(function () {
                    dtArchivos.ajax.reload();
                }, 500);
            }, function (dismiss) {
                // dismiss can be 'cancel', 'overlay',
                // 'close', and 'timer'
            });
            e.preventDefault();
        });
        /* var dtArticulos = $('#dtArticulos').DataTable({
           columnDefs: [
             { targets: 'disabled-sorting', orderable: false }
           ],
     
     
         });*/
        dtArticulos = $('#dtArticulos').on('init.dt', function (e, settings, json) {
            DatatableFunctions.initDatatable(e, settings, json, dtArticulos);
        }).DataTable({
            ajax: function (data, callback, settings) {
                var result = {
                    data: oRequerimientoCompradorFormularioComponent.item.productos
                };
                callback(result);
            },
            columns: [
                { data: 'codigoproducto' },
                { data: 'codigoproducto' },
                { data: 'nombreproducto' },
                { data: 'descripcionproducto' },
                { data: 'cantidad' },
                { data: 'unidad' },
                { data: 'codigoproducto' },
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
                        return '<div class="text-center"><a href="javascript:void(0);" row-id="' + row.id + '">' +
                            '<button class="btn btn-simple btn-info btn-icon edit" data-toggle="modal" data-target="#mdlArticulo" rel="tooltip" title="Atributos" data-placement="left">' +
                            ' <i class="material-icons">visibility</i></button></a>' +
                            ' <button class="btn btn-simple btn-danger btn-icon remove" rel="tooltip" title="Eliminar" data-placement="left">' +
                            '<i class="material-icons">delete</i></button>' +
                            '</div>';
                    },
                    targets: 6
                }
            ]
        });
        dtArticulos.on('click', '.edit', function (event) {
            var $tr = $(this).closest('tr');
            var id = $tr.find("a").attr('row-id');
            event.preventDefault();
        });
        dtArticulos.on('click', '.remove', function (e) {
            var $tr = $(this).closest('tr');
            row_id = $tr.find("a").attr('row-id');
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
                var lista = oRequerimientoCompradorFormularioComponent.item.productos;
                var listafiltrada = lista.filter(function (a) { return a.id != row_id; });
                oRequerimientoCompradorFormularioComponent.item.proveedores = JSON.parse(JSON.stringify(listafiltrada));
                setTimeout(function () {
                    dtProveedores.ajax.reload();
                }, 500);
            }, function (dismiss) {
                // dismiss can be 'cancel', 'overlay',
                // 'close', and 'timer'
            });
            e.preventDefault();
        });
        var dtProveedoresBuscar = $('#dtProveedoresBuscar').DataTable({
            ajax: function (data, callback, settings) {
                var result = {
                    data: oRequerimientoCompradorFormularioComponent.proveedores
                };
                callback(result);
            },
            columns: [
                { data: 'usuario' },
                { data: 'id' },
            ],
            columnDefs: [
                {
                    render: function (data, type, row) {
                        return '<div class="text-center"><a class="editar" href="javascript:void(0);" row-id="' + row.id + '">' +
                            '<button class="btn btn-simple btn-info btn-icon add" rel="tooltip" title="Agregar" data-placement="left">' +
                            '<i class="material-icons">add</i>' +
                            '</button></a></div>';
                    },
                    targets: 1
                }
            ]
        });
        dtProveedores = $('#dtProveedores').on('init.dt', function (e, settings, json) {
            DatatableFunctions.initDatatable(e, settings, json, dtProveedores);
        }).DataTable({
            ajax: function (data, callback, settings) {
                var result = {
                    data: oRequerimientoCompradorFormularioComponent.item.proveedores
                };
                callback(result);
            },
            columns: [
                { data: 'id' },
                { data: 'usuario' },
                { data: 'razonsocial' },
                { data: 'ruc' },
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
                            '<button class="btn btn-simple btn-danger btn-icon remove" rel="tooltip" title="Eliminar" data-placement="left">' +
                            '<i class="material-icons">delete</i>' +
                            '</button></a></div>';
                    },
                    targets: 4
                }
            ]
        });
        dtProveedores.on('click', '.remove', function (e) {
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
                var lista = oRequerimientoCompradorFormularioComponent.item.proveedores;
                var listafiltrada = lista.filter(function (a) { return a.id != row_id; });
                oRequerimientoCompradorFormularioComponent.item.proveedores = JSON.parse(JSON.stringify(listafiltrada));
                setTimeout(function () {
                    dtProveedores.ajax.reload();
                }, 500);
            }, function (dismiss) {
                // dismiss can be 'cancel', 'overlay',
                // 'close', and 'timer'
            });
            e.preventDefault();
        });
        dtProveedoresInvitados = $('#dtProveedoresInvitados').on('init.dt', function (e, settings, json) {
            DatatableFunctions.initDatatable(e, settings, json, dtProveedoresInvitados);
        }).DataTable({
            ajax: function (data, callback, settings) {
                var result = {
                    data: oRequerimientoCompradorFormularioComponent.item.proveedoresinvitados
                };
                callback(result);
            },
            columns: [
                { data: 'razonsocial' },
                { data: 'ruc' },
                { data: 'email' },
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
                            '<button class="btn btn-simple btn-danger btn-icon remove" rel="tooltip" title="Eliminar" data-placement="left">' +
                            '<i class="material-icons">delete</i>' +
                            '</button></a></div>';
                    },
                    targets: 4
                }
            ]
        });
        dtProveedoresInvitados.on('click', '.remove', function (e) {
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
                var lista = oRequerimientoCompradorFormularioComponent.item.proveedoresinvitados;
                var listafiltrada = lista.filter(function (a) { return a.id != row_id; });
                oRequerimientoCompradorFormularioComponent.item.proveedoresinvitados = JSON.parse(JSON.stringify(listafiltrada));
                setTimeout(function () {
                    dtProveedoresInvitados.ajax.reload();
                }, 500);
            }, function (dismiss) {
                // dismiss can be 'cancel', 'overlay',
                // 'close', and 'timer'
            });
            e.preventDefault();
        });
        var tblDetalleAtributos = $('#dtDetalleAtributos').on('init.dt', function (e, settings, json) {
            DatatableFunctions.initDatatable(e, settings, json, tblDetalleAtributos);
        }).DataTable({
            columnDefs: [
                { targets: 'disabled-sorting', orderable: false }
            ],
        });
        if (this.id > 0) {
            this.obtener(this.id);
        }
        //  Activate the tooltips
        $('[rel="tooltip"]').tooltip();
        DatatableFunctions.registerCheckAll();
    };
    RequerimientoCompradorFormularioComponent.prototype.eliminarDetArticulo = function () {
        alert("borrarlo");
    };
    return RequerimientoCompradorFormularioComponent;
}());
RequerimientoCompradorFormularioComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'requerimientocompradorformulario-cmp',
        template: __webpack_require__("../../../../../src/app/requerimiento/comprador/formulario/requerimientocompradorformulario.component.html"),
        providers: [__WEBPACK_IMPORTED_MODULE_2_app_service_rfqcompradorservice__["a" /* RFQCompradorService */], __WEBPACK_IMPORTED_MODULE_5_app_service_masterservice__["a" /* MasterService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_app_service_rfqcompradorservice__["a" /* RFQCompradorService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_app_service_rfqcompradorservice__["a" /* RFQCompradorService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5_app_service_masterservice__["a" /* MasterService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_app_service_masterservice__["a" /* MasterService */]) === "function" && _d || Object])
], RequerimientoCompradorFormularioComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=requerimientocompradorformulario.component.js.map

/***/ }),

/***/ "../../../../../src/app/requerimiento/proveedor/buscar/requerimientoproveedorbuscar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-12\">\r\n                <div class=\"card\">\r\n                    <form method=\"#\" action=\"#\">\r\n                        <div class=\"card-header card-header-text\" data-background-color=\"blue\">\r\n                            <h4 class=\"card-title\">Buscar Requerimiento (Proveedor)</h4>\r\n                        </div>\r\n                        <div class=\"card-content\">\r\n                            <div class=\"row\">\r\n                                <div class=\"col-sm-4\">\r\n                                    <div class=\"form-group label-floating\">\r\n                                        <label class=\"control-label\">N° Req.\r\n                                        </label>\r\n                                        <input name=\"firstname\" type=\"text\" class=\"form-control\">\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-sm-5\">\r\n                                    <div class=\"form-group label-floating\">\r\n                                        <label class=\"control-label\">Organización Compradora</label>\r\n                                        <select name=\"country\" class=\"form-control\">\r\n                                            <option disabled=\"\" selected=\"\"></option>\r\n                                            <option value=\"En Proceso\"> Pepe SA </option>\r\n                                            <option value=\"Por Modificar\"> Pepito SA </option>\r\n                                            <option value=\"En Ejecución\"> Pepo SA </option>\r\n\r\n\r\n                                        </select>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-sm-3\">\r\n                                    <div class=\"form-group label-floating\">\r\n                                        <label class=\"control-label\">Estado</label>\r\n                                        <select name=\"country\" class=\"form-control\">\r\n                                            <option disabled=\"\" selected=\"\"></option>\r\n                                            <option value=\"En Proceso\"> En Proceso </option>\r\n                                            <option value=\"Por Modificar\"> Por Modificar </option>\r\n                                            <option value=\"En Ejecución\"> En Ejecución </option>\r\n                                            <option value=\"Anulada\"> Anulada </option>\r\n                                            <option value=\"Culminado\"> Culminado </option>\r\n\r\n                                        </select>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"row\">\r\n                                <div class=\"col-sm-3\">\r\n                                     <div class=\"form-group label-floating\">\r\n                                        <label class=\"control-label\">Fecha Creación Del</label>\r\n                                        <input type=\"text\" class=\"form-control\" datepicker  />\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-sm-3\">\r\n                                     <div class=\"form-group label-floating\">\r\n                                        <label class=\"control-label\">al</label>\r\n                                        <input type=\"text\" class=\"form-control\" datepicker  />\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-sm-3\">\r\n                                    <div class=\"form-group\">\r\n                                        <button class=\"btn btn-default\" (click)=\"clicked($event)\">Buscar</button>\r\n                                        <button class=\"btn btn-default\">Limpiar</button>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <nav class=\"navbar navbar-info\" role=\"navigation\">\r\n                                <div class=\"container-fluid\">\r\n                                    <div class=\"navbar-header\">\r\n\r\n                                        <span class=\"navbar-brand\" >Resultados</span>\r\n                                    </div>\r\n\r\n\r\n                                </div>\r\n                            </nav>\r\n                             <div class=\"material-datatables table-responsive\">\r\n                                <table id=\"dtResultados\" class=\"table table-striped table-no-bordered table-hover\" cellspacing=\"0\" width=\"100%\" style=\"width:100%\">\r\n                                    <thead>\r\n                                        <tr>\r\n                                            \r\n                                            <th>N° Req.</th>\r\n                                            <th>Org. Compradora</th>\r\n                                            <th>Comprador</th>\r\n                                            <th>Estado</th>\r\n                                            <th>Fecha Creación</th>\r\n                                            <th>Vendedor</th>\r\n                                            <th>Versión</th>                                            \r\n                                            <th class=\"disabled-sorting text-center\">Acciones</th>\r\n                                        </tr>\r\n                                    </thead>\r\n\r\n\r\n                                </table>\r\n                            </div>\r\n                        </div>\r\n                    </form>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/requerimiento/proveedor/buscar/requerimientoproveedorbuscar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RequerimientoProveedorBuscarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var oRequerimientoProveedorBuscarComponent;
var datatable;
var RequerimientoProveedorBuscarComponent = (function () {
    function RequerimientoProveedorBuscarComponent(router, route) {
        this.router = router;
        this.route = route;
    }
    RequerimientoProveedorBuscarComponent.prototype.navigate = function (nav) {
        this.router.navigate(nav, { relativeTo: this.route });
    };
    RequerimientoProveedorBuscarComponent.prototype.clicked = function (event) {
        event.preventDefault();
        /*$('#dtResultados').dataTable().fnDestroy();
        cargarDataTable();*/
        //datatable.ajax.reload();
        datatable.ajax.url("http://b2miningdata.com/rfqp/v1/rfqproveedor/v1/listvm/1").load();
    };
    RequerimientoProveedorBuscarComponent.prototype.ngOnInit = function () {
        // Code for the Validator
        $('.datepicker').datetimepicker({
            format: 'MM/DD/YYYY',
            icons: {
                time: "fa fa-clock-o",
                date: "fa fa-calendar",
                up: "fa fa-chevron-up",
                down: "fa fa-chevron-down",
                previous: 'fa fa-chevron-left',
                next: 'fa fa-chevron-right',
                today: 'fa fa-screenshot',
                clear: 'fa fa-trash',
                close: 'fa fa-remove',
                inline: true
            }
        });
        oRequerimientoProveedorBuscarComponent = this;
    };
    RequerimientoProveedorBuscarComponent.prototype.ngAfterViewInit = function () {
        cargarDataTable();
    };
    return RequerimientoProveedorBuscarComponent;
}());
RequerimientoProveedorBuscarComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'requerimientoproveedorbuscar-cmp',
        template: __webpack_require__("../../../../../src/app/requerimiento/proveedor/buscar/requerimientoproveedorbuscar.component.html"),
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object])
], RequerimientoProveedorBuscarComponent);

function cargarDataTable() {
    datatable = $('#dtResultados').DataTable({
        ajax: {
            "url": "http://b2miningdata.com/rfqp/v1/rfqproveedor/v1/listvm/1",
            "dataSrc": "",
            "data": function (d) {
                console.log(d);
                d.edison = "myValue";
                // d.custom = $('#myInput').val();
                // etc
            }
        },
        columns: [
            { data: 'nroreq' },
            { data: 'observacion' },
            { data: 'observacion' },
            { data: 'estado' },
            { data: 'fechacreacion' },
            { data: 'usuarioproveedor' },
            { data: 'version' },
            { data: 'nroreq' },
        ],
        columnDefs: [
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                render: function (data, type, row) {
                    //return data +' ('+ row[3]+')';
                    return '<div class="text-center"><a class="editar" href="/requerimiento/proveedor/formulario/' + row.nroreq + '" row-id="' + row.nroreq + '">' +
                        '<button class="btn btn-simple btn-info btn-icon edit" rel="tooltip" title="Ver/Editar" data-placement="left">' +
                        '<i class="material-icons">visibility</i>' +
                        '</button></div>';
                },
                targets: 7
            }
        ]
    });
    datatable.on('click', '.edit', function (event) {
        var $tr = $(this).closest('tr');
        var row_id = $tr.find("a.editar").attr('row-id');
        var nav = ['/requerimiento/proveedor/formulario', row_id];
        oRequerimientoProveedorBuscarComponent.navigate(nav);
        event.preventDefault();
    });
}
var _a, _b;
//# sourceMappingURL=requerimientoproveedorbuscar.component.js.map

/***/ }),

/***/ "../../../../../src/app/requerimiento/proveedor/formulario/requerimientoproveedorformulario.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-12\">\r\n        <div class=\"card\">\r\n          <form method=\"#\" action=\"#\"  >\r\n            <div class=\"card-header card-header-text\" data-background-color=\"blue\">\r\n              <h4 class=\"card-title\">Detalle Requerimiento</h4>\r\n            </div>\r\n            <div class=\"card-content\">\r\n              <div class=\"row\">\r\n                <div class=\"col-sm-4\">\r\n                  <div class=\"form-group label-floating\">\r\n                    <label class=\"control-label\">N° Req.\r\n                      <span class=\"star\">*</span>\r\n                    </label>\r\n                    <input name=\"nroreq\" type=\"text\" class=\"form-control\" [(ngModel)]=\"item.nroreq\" disabled>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-sm-8\">\r\n                  <div class=\"form-group label-floating\">\r\n                    <label class=\"control-label\">Organización Compradora\r\n                      <span class=\"star\">*</span>\r\n                    </label>\r\n                    <input name=\"organizacioncompradora\" type=\"text\" class=\"form-control\"  [(ngModel)]=\"item.organizacioncompradora\" disabled>\r\n                  </div>\r\n                </div>\r\n\r\n              </div>\r\n              <div class=\"row\">\r\n\r\n                <div class=\"col-sm-4\">\r\n                  <div class=\"form-group label-floating\">\r\n                    <label class=\"control-label\">Prioridad <span class=\"star\">*</span></label>\r\n                    <select name=\"prioridad\" class=\"form-control\"  [(ngModel)]=\"item.prioridad\" disabled>\r\n                      <option disabled=\"\" selected=\"\"></option>\r\n                      <option value=\"Alta\"> Alta </option>\r\n                      <option value=\"Media\"> Media </option>\r\n                      <option value=\"Baja\"> Baja </option>\r\n\r\n                    </select>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-sm-4\">\r\n                  <div class=\"form-group label-floating\">\r\n                    <label class=\"control-label\">Moneda</label>\r\n                    <select name=\"moneda\" class=\"form-control\"  [(ngModel)]=\"item.moneda\" disabled>\r\n                      <option disabled=\"\" selected=\"\"></option>\r\n                      <option value=\"PEN\"> PEN </option>\r\n                      <option value=\"USD\"> USD </option>\r\n                      <option value=\"EUR\"> EUR </option>\r\n\r\n                    </select>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-sm-4\">\r\n                  <div class=\"form-group label-floating\">\r\n                    <label class=\"control-label\">Estado</label>\r\n                    <select name=\"estado\" class=\"form-control\"  [(ngModel)]=\"item.estado\" disabled>\r\n                      <option disabled=\"\" selected=\"\"></option>\r\n                      <option value=\"En Proceso\"> En Proceso </option>\r\n                      <option value=\"Por Modificar\"> Por Modificar </option>\r\n                      <option value=\"En Ejecución\"> En Ejecución </option>\r\n                      <option value=\"Anulada\"> Anulada </option>\r\n                      <option value=\"Culminado\"> Culminado </option>\r\n\r\n                    </select>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col-sm-6\">\r\n                  <div class=\"form-group label-floating\">\r\n                    <label class=\"control-label\">Descripción</label>\r\n                    <textarea name=\"descripcion\" class=\"form-control\" rows=\"2\" [(ngModel)]=\"item.descripcion\" disabled></textarea>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-sm-6\">\r\n                  <div class=\"form-group label-floating\">\r\n                    <label class=\"control-label\">Und. Orgánicas</label>\r\n                    <textarea name=\"unidadorganicas\" class=\"form-control\" rows=\"2\" [(ngModel)]=\"item.unidadorganicas\" disabled></textarea>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col-sm-6\">\r\n                  <div class=\"form-group label-floating\">\r\n                    <label class=\"control-label\">Notas</label>\r\n                    <textarea name=\"notas\" class=\"form-control\" rows=\"5\" [(ngModel)]=\"item.notas\" disabled></textarea>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-sm-6\">\r\n                  <div class=\"row\">\r\n                    <div class=\"col-sm-4\">\r\n                      <div class=\"form-group label-floating\">\r\n                        <label class=\"control-label\">Fecha Inicio</label>\r\n                        <input type=\"text\" class=\"form-control\" name=\"fechainiciod\"[(ngModel)]=\"item.fechainiciod\" disabled />\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"col-sm-3\">\r\n                      <div class=\"form-group label-floating\">\r\n                        <label class=\"control-label\">Hora</label>\r\n                        <input type=\"text\" class=\"form-control\" name=\"fechainiciot\" [(ngModel)]=\"item.fechainiciot\" disabled />\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"row\">\r\n                    <div class=\"col-sm-4\">\r\n                      <div class=\"form-group label-floating\">\r\n                        <label class=\"control-label\">Fecha Fin</label>\r\n                        <input type=\"text\" class=\"form-control\" name=\"fechafind\"  [(ngModel)]=\"item.fechafind\" disabled />\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"col-sm-3\">\r\n                      <div class=\"form-group label-floating\">\r\n                        <label class=\"control-label\">Hora</label>\r\n                        <input type=\"text\" class=\"form-control\" name=\"fechafint\"  [(ngModel)]=\"item.fechafint\" disabled />\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"row\">\r\n                <div class=\"col-md-12\">\r\n                  <div class=\"card\">\r\n                    <div class=\"card-header card-header-icon\" data-background-color=\"blue\">\r\n                      <i class=\"material-icons\">assignment</i>\r\n                    </div>\r\n                    <div class=\"card-content\">\r\n                      <h4 class=\"card-title\">Archivos Adjuntos</h4>\r\n                      <div class=\"toolbar\">\r\n\r\n                      </div>\r\n                      <div class=\"material-datatables table-responsive\">\r\n                        <table id=\"dtArchivos\" class=\"table table-striped table-no-bordered table-hover\" cellspacing=\"0\" width=\"100%\" style=\"width:100%\">\r\n                          <thead>\r\n                          <tr>\r\n                           \r\n                            <th width=\"90%\">Descripción</th>\r\n                            <th class=\"disabled-sorting text-center\">Acciones</th>\r\n                          </tr>\r\n                          </thead>\r\n\r\n                         \r\n                        </table>\r\n                      </div>\r\n                    </div>\r\n                    <!-- end content-->\r\n                  </div>\r\n                  <!--  end card  -->\r\n                </div>\r\n                <!-- end col-md-12 -->\r\n              </div>\r\n\r\n              <div class=\"row\">\r\n                <div class=\"col-md-12\">\r\n                  <div class=\"card\">\r\n                    <div class=\"card-header card-header-icon\" data-background-color=\"blue\">\r\n                      <i class=\"material-icons\">assignment</i>\r\n                    </div>\r\n                    <div class=\"card-content\">\r\n                      <h4 class=\"card-title\">Detalle de Artículos</h4>\r\n                      <div class=\"toolbar\">\r\n\r\n                      </div>\r\n                      <div class=\"material-datatables table-responsive\">\r\n                        <table id=\"dtArticulos\" class=\"table table-striped table-no-bordered table-hover\" cellspacing=\"0\" width=\"100%\" style=\"width:100%\">\r\n                          <thead>\r\n                          <tr>\r\n                           \r\n                            <th>Código</th>\r\n                            <th>Nombre</th>\r\n                            <th>Objeto Contratado</th>\r\n                            <th>Cantidad</th>\r\n                            <th>Unidad</th>\r\n                            <th class=\"disabled-sorting text-center\">Atributos</th>\r\n                          </tr>\r\n                          </thead>\r\n\r\n                         \r\n                        </table>\r\n                      </div>\r\n                    <!-- end content-->\r\n                    </div>\r\n                  </div>\r\n                  <!--  end card  -->\r\n                </div>\r\n                <!-- end col-md-12 -->\r\n              </div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n            </div>\r\n            <div class=\"card-footer\">\r\n\r\n              <button class=\"btn btn-fill btn-default pull-right\">Imprimir</button>\r\n              <button class=\"btn btn-fill btn-default pull-right\">Generar Consulta</button>\r\n              <button class=\"btn btn-fill btn-default pull-right\">No Participar</button>\r\n              <button class=\"btn btn-fill btn-default pull-right\" [routerLink]=\"['/cotizacion/proveedor/formulario', 0]\">Crear Propuesta</button>\r\n              <a routerLink=\"/requerimiento/proveedor/buscar\" class=\"btn btn-fill btn-default pull-right\">Salir</a>\r\n            </div>\r\n\r\n          </form>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n\r\n\r\n\r\n\r\n \r\n  <div id=\"mdlAtributos\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\">\r\n    <div class=\"modal-dialog\" role=\"document\">\r\n      <div class=\"modal-content\">\r\n        <div class=\"modal-header\">\r\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\r\n          <h4 class=\"modal-title\">Atributo por Detalle</h4>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n\r\n        \r\n          <div class=\"material-datatables table-responsive\">\r\n            <table id=\"dtAtributos\" class=\"table table-striped table-no-bordered table-hover\" cellspacing=\"0\" width=\"100%\" style=\"width:100%\">\r\n              <thead>\r\n              <tr>\r\n               \r\n                <th>Nombre</th>\r\n                <th>Operador</th>\r\n                <th>Valor</th>\r\n                <th>Unidad</th>\r\n                <th>Obligatorio</th>\r\n               \r\n              </tr>\r\n              </thead>\r\n\r\n              \r\n            </table>\r\n          </div>\r\n        </div>\r\n        <div class=\"modal-footer\">\r\n          <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Cerrar</button>\r\n          \r\n        </div>\r\n      </div><!-- /.modal-content -->\r\n    </div><!-- /.modal-dialog -->\r\n  </div>\r\n\r\n\r\n\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/requerimiento/proveedor/formulario/requerimientoproveedorformulario.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RequerimientoProveedorFormularioComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var oRequerimientoProveedorFormularioComponent;
var dtAtributos;
var RequerimientoProveedorFormularioComponent = (function () {
    function RequerimientoProveedorFormularioComponent() {
        this.toggleButton = true;
    }
    RequerimientoProveedorFormularioComponent.prototype.ngOnInit = function () {
        oRequerimientoProveedorFormularioComponent = this;
        this.atributos = [];
        // Code for the Validator
        this.item = {
            organizacioncompradora: "Grupo Centenario SA",
            nroreq: 2,
            prioridad: 'Alta',
            fechainicio: '10/10/2016',
            fechafin: '10/10/2016',
            fechainiciod: '10/10/2016',
            fechafind: '10/10/2016',
            fechainiciot: '14:00',
            fechafint: '14:00',
            moneda: 'PEN',
            estado: 'En Proceso',
            descripcion: 'Compra  de grupos electrogenos',
            unidadorganicas: 'Centenario',
            notas: '',
            productos: [
                {
                    posicion: 1,
                    codigoproducto: '0000101',
                    nombreproducto: "Grupo Electrógeno",
                    unidad: 'UND',
                    cantidad: '2',
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
                    posicion: 2,
                    codigoproducto: '0000102',
                    nombreproducto: "Grupo Electrógeno",
                    //cantidadbase: 20,
                    unidad: 'UND',
                    cantidad: '2',
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
                    ]
                },
            ],
            docadjuntos: [
                {
                    id: 1,
                    descripcion: 'archivo 1',
                },
                {
                    id: 2,
                    descripcion: 'archivo 2',
                }
            ],
        };
    };
    RequerimientoProveedorFormularioComponent.prototype.ngOnChanges = function (changes) {
    };
    RequerimientoProveedorFormularioComponent.prototype.ngAfterViewInit = function () {
        var dtArchivos = $('#dtArchivos').DataTable({
            ajax: function (data, callback, settings) {
                var result = {
                    data: oRequerimientoProveedorFormularioComponent.item.docadjuntos
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
        //var table = $('#datatables').DataTable();
        // Edit record
        dtArchivos.on('click', '.download', function () {
            var $tr = $(this).closest('tr');
            var row_id = $tr.find("a.editar").attr('row-id');
            event.preventDefault();
        });
        // Delete a record
        //  Activate the tooltips
        $('[rel="tooltip"]').tooltip();
        var dtArticulos = $('#dtArticulos').DataTable({
            ajax: function (data, callback, settings) {
                var result = {
                    data: oRequerimientoProveedorFormularioComponent.item.productos
                };
                callback(result);
            },
            columns: [
                { data: 'codigoproducto' },
                { data: 'nombreproducto' },
                { data: 'objetocontrato' },
                { data: 'cantidad' },
                { data: 'unidad' },
                { data: 'posicion' },
            ],
            columnDefs: [
                {
                    render: function (data, type, row) {
                        return '<div class="text-center"><a href="javascript:void(0);" row-id="' + row.posicion + '">' +
                            '<button class="btn btn-simple btn-info btn-icon atributos" rel="tooltip" title="Ver Atributos" data-placement="left">' +
                            '<i class="material-icons">visibility</i></button></a>' +
                            '</div>';
                    },
                    targets: 5
                }
            ]
        });
        dtArticulos.on('click', '.atributos', function (event) {
            var $tr = $(this).closest('tr');
            var posicion = $tr.find("a").attr('row-id');
            var producto = oRequerimientoProveedorFormularioComponent.item.productos.find(function (a) { return a.posicion == posicion; });
            var atributos = JSON.parse(JSON.stringify(producto.atributos)); //clone
            oRequerimientoProveedorFormularioComponent.atributos = atributos;
            setTimeout(function () {
                dtAtributos.ajax.reload();
                $("#mdlAtributos").modal('show');
            }, 500);
            event.preventDefault();
        });
        dtAtributos = $('#dtAtributos').DataTable({
            ajax: function (data, callback, settings) {
                var result = {
                    data: oRequerimientoProveedorFormularioComponent.atributos
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
    };
    return RequerimientoProveedorFormularioComponent;
}());
RequerimientoProveedorFormularioComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'requerimientoproveedorformulario-cmp',
        template: __webpack_require__("../../../../../src/app/requerimiento/proveedor/formulario/requerimientoproveedorformulario.component.html"),
    })
], RequerimientoProveedorFormularioComponent);

//# sourceMappingURL=requerimientoproveedorformulario.component.js.map

/***/ }),

/***/ "../../../../../src/app/requerimiento/requerimiento.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequerimientoModule", function() { return RequerimientoModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_utils_module__ = __webpack_require__("../../../../../src/app/utils/utils.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__comprador_buscar_requerimientocompradorbuscar_component__ = __webpack_require__("../../../../../src/app/requerimiento/comprador/buscar/requerimientocompradorbuscar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__comprador_formulario_requerimientocompradorformulario_component__ = __webpack_require__("../../../../../src/app/requerimiento/comprador/formulario/requerimientocompradorformulario.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__proveedor_buscar_requerimientoproveedorbuscar_component__ = __webpack_require__("../../../../../src/app/requerimiento/proveedor/buscar/requerimientoproveedorbuscar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__proveedor_formulario_requerimientoproveedorformulario_component__ = __webpack_require__("../../../../../src/app/requerimiento/proveedor/formulario/requerimientoproveedorformulario.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__requerimiento_routing__ = __webpack_require__("../../../../../src/app/requerimiento/requerimiento.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__directives_datepicker_module__ = __webpack_require__("../../../../../src/app/directives/datepicker.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var RequerimientoModule = (function () {
    function RequerimientoModule() {
    }
    return RequerimientoModule;
}());
RequerimientoModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(__WEBPACK_IMPORTED_MODULE_9__requerimiento_routing__["a" /* RequerimientoRoutes */]),
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_4__utils_utils_module__["a" /* UtilsModule */], __WEBPACK_IMPORTED_MODULE_10__directives_datepicker_module__["a" /* A2Edatetimepicker */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_5__comprador_buscar_requerimientocompradorbuscar_component__["a" /* RequerimientoCompradorBuscarComponent */],
            __WEBPACK_IMPORTED_MODULE_6__comprador_formulario_requerimientocompradorformulario_component__["a" /* RequerimientoCompradorFormularioComponent */], __WEBPACK_IMPORTED_MODULE_7__proveedor_buscar_requerimientoproveedorbuscar_component__["a" /* RequerimientoProveedorBuscarComponent */], __WEBPACK_IMPORTED_MODULE_8__proveedor_formulario_requerimientoproveedorformulario_component__["a" /* RequerimientoProveedorFormularioComponent */]]
    })
], RequerimientoModule);

//# sourceMappingURL=requerimiento.module.js.map

/***/ }),

/***/ "../../../../../src/app/requerimiento/requerimiento.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RequerimientoRoutes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__comprador_buscar_requerimientocompradorbuscar_component__ = __webpack_require__("../../../../../src/app/requerimiento/comprador/buscar/requerimientocompradorbuscar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__comprador_formulario_requerimientocompradorformulario_component__ = __webpack_require__("../../../../../src/app/requerimiento/comprador/formulario/requerimientocompradorformulario.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__proveedor_buscar_requerimientoproveedorbuscar_component__ = __webpack_require__("../../../../../src/app/requerimiento/proveedor/buscar/requerimientoproveedorbuscar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__proveedor_formulario_requerimientoproveedorformulario_component__ = __webpack_require__("../../../../../src/app/requerimiento/proveedor/formulario/requerimientoproveedorformulario.component.ts");




var RequerimientoRoutes = [
    {
        path: '',
        children: [
            {
                path: 'comprador/buscar',
                component: __WEBPACK_IMPORTED_MODULE_0__comprador_buscar_requerimientocompradorbuscar_component__["a" /* RequerimientoCompradorBuscarComponent */]
            },
            {
                path: 'comprador/formulario/:id',
                component: __WEBPACK_IMPORTED_MODULE_1__comprador_formulario_requerimientocompradorformulario_component__["a" /* RequerimientoCompradorFormularioComponent */]
            },
            {
                path: 'proveedor/buscar',
                component: __WEBPACK_IMPORTED_MODULE_2__proveedor_buscar_requerimientoproveedorbuscar_component__["a" /* RequerimientoProveedorBuscarComponent */]
            },
            {
                path: 'proveedor/formulario/:id',
                component: __WEBPACK_IMPORTED_MODULE_3__proveedor_formulario_requerimientoproveedorformulario_component__["a" /* RequerimientoProveedorFormularioComponent */]
            }
        ]
    }
];
//# sourceMappingURL=requerimiento.routing.js.map

/***/ }),

/***/ "../../../../../src/app/service/rfqcompradorservice.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RFQCompradorService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_throw__ = __webpack_require__("../../../../rxjs/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_throw__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/*import { Configuration } from '../app.constants';*/


var RFQCompradorService = (function () {
    function RFQCompradorService(http) {
        this.http = http;
        this.urlSearch = 'http://b2miningdata.com/rfqc/v1/rfqcomprador/v1/listvm/1';
        this.urlAdd = 'http://b2miningdata.com/irfq/v1/postrfq/';
        this.urlGet = 'http://b2miningdata.com/rfqcd/v1/rfqcompradordetalles/v1/list/';
    }
    RFQCompradorService.prototype.buscar = function () {
        var items$ = this.http
            .get(this.urlSearch, { headers: this.getHeaders() })
            .map(this.extractData)
            .catch(this.handleError);
        return items$;
    };
    RFQCompradorService.prototype.obtener = function (idRfq) {
        var items$ = this.http
            .get(this.urlGet + idRfq, { headers: this.getHeaders() })
            .map(this.extractData)
            .catch(this.handleError);
        return items$;
    };
    RFQCompradorService.prototype.add = function (item) {
        var headers = this.getHeaders();
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.urlAdd, item, options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    RFQCompradorService.prototype.extractData = function (res) {
        var respuesta = {
            status: res ? res.status : -1,
            statusText: res ? res.statusText : "ERROR",
            data: res ? res.json() || {} : {},
        };
        return respuesta;
        //return body.data || {};
    };
    RFQCompradorService.prototype.handleError = function (error) {
        //console.error(error.message || error);
        return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].throw(error.message || error);
    };
    RFQCompradorService.prototype.getHeaders = function () {
        // I included these headers because otherwise FireFox
        // will request text/html
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Accept', 'application/json');
        headers.append('Access-Control-Allow-Origin', '*');
        return headers;
    };
    return RFQCompradorService;
}());
RFQCompradorService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], RFQCompradorService);

var _a;
//# sourceMappingURL=rfqcompradorservice.js.map

/***/ })

});
//# sourceMappingURL=requerimiento.module.chunk.js.map