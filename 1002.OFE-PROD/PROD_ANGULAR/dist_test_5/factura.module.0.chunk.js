webpackJsonp(["factura.module.0"],{

/***/ "../../../../../src/app/factura/comprador/buscar/facturacompradorbuscar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-12\">\r\n                <div class=\"card\">\r\n                    <form method=\"#\" action=\"#\">\r\n                        <div class=\"card-header card-header-text\" data-background-color=\"blue\">\r\n                            <h4 class=\"card-title\">Buscar Comprobante de Pago</h4>\r\n                        </div>\r\n                        <div class=\"card-content\">\r\n                            <div class=\"row\">\r\n                                <div class=\"col-sm-3\">\r\n                                    <div class=\"form-group label-floating\">\r\n                                        <label class=\"control-label\">Número Comprobante de Pago\r\n                                        </label>\r\n                                        <input [(ngModel)]=\"filtro.nrocomprobantepago\" name=\"nrocomprobantepago\" type=\"text\" class=\"form-control\">\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-sm-3\">\r\n                                    <div class=\"form-group label-floating\">\r\n                                        <label class=\"control-label\">Razón Social Proveedor\r\n                                        </label>\r\n                                        <input [(ngModel)]=\"filtro.razonsocialproveedor\" name=\"razonsocialproveedor\" type=\"text\" class=\"form-control\">\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-sm-3\">\r\n                                    <div class=\"form-group label-floating\">\r\n                                        <label class=\"control-label\">RUC Proveedor\r\n                                        </label>\r\n                                        <input [(ngModel)]=\"filtro.rucproveedor\" name=\"rucproveedor\" type=\"text\" class=\"form-control\">\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-sm-3\">\r\n                                    <div class=\"form-group label-floating\">\r\n                                        <label class=\"control-label\">Moneda</label>\r\n                                        <select [(ngModel)]=\"filtro.moneda\" name=\"moneda\" class=\"form-control\">\r\n                                            <option value=\"NONE\" >TODOS</option>\r\n                                            \r\n                                            <option *ngFor=\"let opt of listMonedaCombo\" value=\"{{opt.valor}}\"> {{opt.desc}} </option>   \r\n                                        </select>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"row\">\r\n                                <div class=\"col-sm-3\">\r\n                                    <div class=\"form-group label-floating\">\r\n                                        <label class=\"control-label\">Estado</label>\r\n                                        <select [(ngModel)]=\"filtro.estado\" name=\"estado\" class=\"form-control\">\r\n                                            <option value=\"NONE\" >TODOS</option>\r\n                                            <option *ngFor=\"let opt of listEstadoCombo\" value=\"{{opt.valor}}\"> {{opt.desc}} </option>   \r\n                                        </select>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-sm-3\">\r\n                                    <div class=\"form-group label-floating\">\r\n                                        <label class=\"control-label\">Emitida despues de</label>\r\n                                        <input type=\"text\" [(ngModel)]=\"filtro.fechaemisioninicio\" name=\"fechaemisioninicio\" class=\"form-control\" datepicker />\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-sm-3\">\r\n                                    <div class=\"form-group label-floating\">\r\n                                        <label class=\"control-label\">Emitida antes de</label>\r\n                                        <input type=\"text\"  [(ngModel)]=\"filtro.fechaemisionfin\" name=\"fechaemisionfin\" class=\"form-control\" datepicker />\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-sm-3\">\r\n                                    <div class=\"form-group\">\r\n                                        <button class=\"btn btn-default\" (click)=\"clicked($event)\">Buscar</button>\r\n                                        <button class=\"btn btn-default\" (click)=\"limpiar($event)\">Limpiar</button>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <nav class=\"navbar navbar-info\" role=\"navigation\">\r\n                                <div class=\"container-fluid\">\r\n                                    <!--<div class=\"navbar-header\">\r\n\r\n                                        <span class=\"navbar-brand\">Resultados</span>\r\n                                    </div>-->\r\n                                    <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\r\n                                        <ul class=\"nav navbar-nav\">\r\n\r\n                                            <li><a href=\"javascript:void(0);\">Anular</a></li>\r\n                                        </ul>\r\n                                    </div>\r\n                                </div>\r\n                            </nav>\r\n                            <div class=\"material-datatables table-responsive\">\r\n                                <table id=\"dtResultados\" class=\"table table-striped table-no-bordered table-hover\" cellspacing=\"0\" width=\"100%\" style=\"width:100%\">\r\n                                    <thead>\r\n                                        <tr>\r\n                                            <th class=\"disabled-sorting text-right\">\r\n                                                <div class=\"checkbox text-right\">\r\n                                                    <label><input type=\"checkbox\" name=\"optionsCheckboxes\" class=\"checkall\" ></label>\r\n                                                </div>\r\n                                            </th>\r\n                                            <th>No. Doc. de Pago</th>\r\n                                            <th>Proveedor</th>\r\n                                            <th>Tipo Doc</th>\r\n                                            <th>Documento ERP</th>\r\n                                           \r\n                                            <th>Forma de Pago</th>\r\n                                            <th>Importe Total</th>\r\n                                            <th>Estado</th>\r\n                                            \r\n                                            <th>Fecha de Emisión</th>\r\n                                            <th>Fecha Prog. Pago</th>\r\n                                            <th>Fecha Pago</th>\r\n                                            <th>Notas</th>\r\n                                            <th class=\"disabled-sorting text-center\">Acciones</th>\r\n                                        </tr>\r\n                                    </thead>\r\n\r\n                                </table>\r\n                            </div>\r\n\r\n                        </div>\r\n                    </form>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/factura/comprador/buscar/facturacompradorbuscar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FacturaCompradorBuscarComponent; });
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




var oFacturaBuscarComponent, datatable;
var FacturaCompradorBuscarComponent = (function () {
    function FacturaCompradorBuscarComponent(router, route, _masterService) {
        this.router = router;
        this.route = route;
        this._masterService = _masterService;
        this.util = new __WEBPACK_IMPORTED_MODULE_2__utils_app_utils__["a" /* AppUtils */](this.router, this._masterService);
    }
    FacturaCompradorBuscarComponent.prototype.navigate = function (nav) {
        this.router.navigate(nav, { relativeTo: this.route });
    };
    FacturaCompradorBuscarComponent.prototype.validarfiltros = function () {
        if (this.filtro.fechaemisioninicio != null && this.filtro.fechaemisioninicio.toString() != "" && this.filtro.fechaemisionfin != null && this.filtro.fechaemisionfin.toString() != "") {
            var fechacreacioninicio = DatatableFunctions.ConvertStringToDatetime(oFacturaBuscarComponent.filtro.fechaemisioninicio);
            var fechacreacionfin = DatatableFunctions.ConvertStringToDatetime(oFacturaBuscarComponent.filtro.fechaemisionfin);
            var fechacreacioninicio_str = DatatableFunctions.FormatDatetimeForMicroService(fechacreacioninicio);
            var fechacreacionfin_str = DatatableFunctions.FormatDatetimeForMicroService(fechacreacionfin);
            if (fechacreacioninicio_str > fechacreacionfin_str) {
                swal({
                    text: "El rango de Fechas de creación seleccionado no es correcto. Por favor corregir y volver a intentar!",
                    type: 'warning',
                    buttonsStyling: false,
                    confirmButtonClass: "btn btn-warning"
                });
                return false;
            }
        }
        return true;
    };
    FacturaCompradorBuscarComponent.prototype.clicked = function (event) {
        if (this.validarfiltros())
            datatable.ajax.reload();
        event.preventDefault();
    };
    FacturaCompradorBuscarComponent.prototype.limpiar = function (event) {
        this.filtroDefecto();
        setTimeout(function () {
            $("input").each(function () {
                if (!$(this).val() && $(this).val() == '')
                    $(this.parentElement).addClass("is-empty");
            });
        }, 200);
        event.preventDefault();
    };
    FacturaCompradorBuscarComponent.prototype.filtroDefecto = function () {
        var fechacreacioni = new Date();
        fechacreacioni.setMonth(fechacreacioni.getMonth() - 1);
        this.filtro = {
            nrocomprobantepago: '',
            razonsocialproveedor: '',
            rucproveedor: '',
            estado: 'NONE',
            moneda: 'NONE',
            fechaemisioninicio: fechacreacioni,
            fechaemisionfin: new Date(),
        };
    };
    FacturaCompradorBuscarComponent.prototype.ngOnInit = function () {
        oFacturaBuscarComponent = this;
        this.filtroDefecto();
        this.util.listMonedas(function (data) {
            oFacturaBuscarComponent.listMonedaCombo = data;
        });
        this.util.listEstadoCP(function (data) {
            oFacturaBuscarComponent.listEstadoCombo = data;
        });
    };
    FacturaCompradorBuscarComponent.prototype.ngAfterViewInit = function () {
        cargarDataTable();
        DatatableFunctions.registerCheckAll();
    };
    return FacturaCompradorBuscarComponent;
}());
FacturaCompradorBuscarComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'facturacompradorbuscar-cmp',
        template: __webpack_require__("../../../../../src/app/factura/comprador/buscar/facturacompradorbuscar.component.html"),
        providers: [__WEBPACK_IMPORTED_MODULE_3__service_masterservice__["a" /* MasterService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__service_masterservice__["a" /* MasterService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__service_masterservice__["a" /* MasterService */]) === "function" && _c || Object])
], FacturaCompradorBuscarComponent);

//  request.setRequestHeader("origen_datos", 'PEB2M');
function cargarDataTable() {
    datatable = $('#dtResultados').on('init.dt', function (e, settings, json) {
        DatatableFunctions.initDatatable(e, settings, json, datatable);
    }).DataTable({
        searching: false,
        serverSide: true,
        ajax: {
            beforeSend: function (request) {
                request.setRequestHeader("Authorization", 'Bearer ' + sessionStorage.getItem('token'));
                request.setRequestHeader("origen_datos", 'PEB2M');
            },
            url: " http://b2miningdata.com/api/mscplistar/v1/comprobantes/",
            dataSrc: "data",
            data: function (d) {
                if (oFacturaBuscarComponent.filtro.nrocomprobantepago != "") {
                    d.NumeroFactura = oFacturaBuscarComponent.filtro.nrocomprobantepago;
                }
                if (oFacturaBuscarComponent.filtro.razonsocialproveedor != "") {
                    d.RazonSocialProveedor = oFacturaBuscarComponent.filtro.razonsocialproveedor;
                }
                if (oFacturaBuscarComponent.filtro.rucproveedor != "") {
                    d.RucProveedor = oFacturaBuscarComponent.filtro.rucproveedor;
                }
                if (oFacturaBuscarComponent.filtro.estado != "NONE") {
                    d.Estado = oFacturaBuscarComponent.filtro.estado;
                }
                if (oFacturaBuscarComponent.filtro.moneda != "NONE")
                    d.Moneda = oFacturaBuscarComponent.filtro.moneda;
                if (oFacturaBuscarComponent.filtro.fechaemisioninicio) {
                    var fechacreacioninicio = DatatableFunctions.ConvertStringToDatetime(oFacturaBuscarComponent.filtro.fechaemisioninicio);
                    d.FechaEmision_inicio = DatatableFunctions.FormatDatetimeForMicroService(fechacreacioninicio);
                }
                if (oFacturaBuscarComponent.filtro.fechaemisionfin) {
                    var fechacreacionfin = DatatableFunctions.AddDayEndDatetime(DatatableFunctions.ConvertStringToDatetime(oFacturaBuscarComponent.filtro.fechaemisionfin));
                    d.FechaEmision_fin = DatatableFunctions.FormatDatetimeForMicroService(fechacreacionfin);
                }
                d.column_names = 'IdComprobante,NumeroFactura,RazonSocialProveedor,TipoComprobante,CodigoErp,FormaPago,Total,Moneda,Estado,FechaEmision,FechaProgramadaPago,FechaPago,Nota';
            }
        },
        columns: [
            { data: 'NumeroFactura', name: 'NumeroFactura' },
            { data: 'NumeroFactura', name: 'NumeroFactura' },
            { data: 'RazonSocialProveedor', name: 'RazonSocialProveedor' },
            { data: 'TipoComprobante', name: 'TipoComprobante' },
            { data: 'CodigoErp', name: 'CodigoErp' },
            { data: 'FormaPago', name: 'FormaPago' },
            { data: 'Total', name: 'Total' },
            { data: 'Estado', name: 'Estado' },
            { data: 'FechaEmision', name: 'FechaEmision' },
            { data: 'FechaProgramadaPago', name: 'FechaProgramadaPago' },
            { data: 'FechaPago', name: 'FechaPago' },
            { data: 'Nota', name: 'Nota' },
            { data: 'NumeroFactura', name: 'NumeroFactura' },
        ],
        columnDefs: [
            { "className": "text-center", "targets": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12] },
            {
                render: function (data, type, row) {
                    //return data +' ('+ row[3]+')';
                    return '<div class="text-right" height="100%"><div class="checkbox text-right"><label><input type="checkbox" name="optionsCheckboxes"></label></div></div>';
                },
                targets: 0
            },
            {
                render: function (data, type, row) {
                    //return data +' ('+ row[3]+')';
                    return row.Total + ' ' + row.Moneda;
                },
                targets: 6
            },
            {
                render: function (data, type, row) {
                    //return data +' ('+ row[3]+')';
                    return '<div class="text-center"><a href="/factura/comprador/formulario/' + row.IdComprobante + '" row-id="' + row.IdComprobante + '">' +
                        '<button class="btn btn-simple btn-info btn-icon edit" rel="tooltip" title="Ver/Editar" data-placement="left"><i class="material-icons">visibility</i></button></a>' +
                        '</div>';
                },
                targets: 12
            }
        ]
    });
    datatable.on('click', '.edit', function (event) {
        var $tr = $(this).closest('tr');
        var data = datatable.row($tr).data();
        console.log("click edit", event);
        var row_id = $tr.find("a").attr('row-id');
        var nav = ['/factura/comprador/formulario', row_id];
        oFacturaBuscarComponent.navigate(nav);
        event.preventDefault();
    });
    datatable.on('click', '.buscar-propuesta', function (event) {
        var $tr = $(this).closest('tr');
        var data = datatable.row($tr).data();
        var nav = ['/factura/comprador/buscar'];
        oFacturaBuscarComponent.navigate(nav);
        event.preventDefault();
    });
}
var _a, _b, _c;
//# sourceMappingURL=facturacompradorbuscar.component.js.map

/***/ }),

/***/ "../../../../../src/app/factura/comprador/formulario/facturacompradorformulario.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-12\">\r\n        <div class=\"card\">\r\n          <form method=\"#\" action=\"#\">\r\n            <div class=\"card-header card-header-text\" data-background-color=\"blue\">\r\n              <h4 class=\"card-title\">Comprobante de Pago</h4>\r\n            </div>\r\n            <div class=\"card-content\" id=\"secCabecera\">\r\n              <div class=\"card-header\">\r\n                <h4 class=\"card-title\">Comprobante de Pago Cabecera</h4>\r\n              </div>\r\n              <div class=\"card-content\">\r\n                <div class=\"row\">\r\n                  <div class=\"col-sm-8 col-sm-offset-2\">\r\n                    <div class=\"row\">\r\n                      <div class=\"col-sm-10\">\r\n                        <div class=\"form-group label-floating\">\r\n                          <label class=\"control-label\">RUC Cliente \r\n                          </label>\r\n                          <input name=\"txtRucCliente\" type=\"text\" readonly=\"true\" value=\"PE122565752\" class=\"form-control\">\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"col-sm-2\">\r\n                        <button data-toggle=\"modal\" data-target=\"#mdlBuscarCliente\" class=\"btn btn-fill btn-default\" [disabled]=\"toggleButton\">Buscar</button>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                  <div class=\"col-sm-8 col-sm-offset-2\">\r\n                    <div class=\"form-group label-floating\">\r\n                      <label class=\"control-label\">Razón Social Cliente \r\n                      </label>\r\n                      <input name=\"txtRazonSocialCliente\" type=\"text\" readonly=\"true\" value=\"CENTENARIO RETAIL S.A.C.\" class=\"form-control\">\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"card-content\" id=\"secFactura\">\r\n              <div class=\"card-header\">\r\n                <h4 class=\"card-title\">Comprobante de Pago Cabecera</h4>\r\n              </div>\r\n              <div class=\"card-content\">\r\n                <div class=\"row\">\r\n                  <div class=\"col-sm-4\">\r\n                    <div class=\"form-group label-floating\">\r\n                      <label class=\"control-label\">Razón Social del Cliente \r\n                      </label>\r\n                      <input name=\"txtRazonSocialCliente2\" type=\"text\" [(ngModel)]=\"factura.cliente\" [disabled]=\"toggleButton\" class=\"form-control\">\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-sm-4\">\r\n                    <div class=\"form-group label-floating\">\r\n                      <label class=\"control-label\">RUC Cliente \r\n                      </label>\r\n                      <input name=\"txtRUCCliente2\" type=\"text\" [(ngModel)]=\"factura.ruccliente\" [disabled]=\"toggleButton\" class=\"form-control\">\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-sm-4\">\r\n                    <div class=\"form-group label-floating\">\r\n                      <label class=\"control-label\">Estado {{factura.estado}}\r\n                      </label>\r\n                      <select name=\"moneda\" class=\"form-control\" [(ngModel)]=\"factura.estado\" [disabled]=\"toggleButton\">\r\n                        <option disabled=\"\"></option>\r\n                        <option  value=\"Recibidad / Publicada\"> Recibidad / Publicada</option>\r\n                        <option  value=\"Visualizada / Programada de Pago\"> Visualizada / Programada de Pago</option>\r\n                        <option  value=\"Visualizada / Pagada\"> Visualizada / Pagada</option>\r\n                      </select>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                  <div class=\"col-sm-4\">\r\n                    <div class=\"form-group label-floating\">\r\n                      <label class=\"control-label\">Fecha Emisión \r\n                      </label>\r\n                      <input name=\"txtFechaEmision\" id=\"txtFechaEmision\" [(ngModel)]=\"factura.fechaemision\" type=\"text\" [disabled]=\"toggleButton\"\r\n                        class=\"form-control\">\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-sm-8\">\r\n                    <div class=\"form-group label-floating\">\r\n                      <label class=\"control-label\">Guías de Despacho\r\n                      </label>\r\n                      <input name=\"txtGuiasDespacho\" type=\"text\" [(ngModel)]=\"factura.guiasdespacho\" [disabled]=\"toggleButton\" class=\"form-control\">\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                  <div class=\"col-sm-12\">\r\n                    <div class=\"form-group label-floating\">\r\n                      <label class=\"control-label\">Orden de Compra/Servicio/Contrato\r\n                      </label>\r\n                      <input name=\"txtOrdenCompraServicioContrato\" [(ngModel)]=\"factura.ordencompraserviciocontrato\" type=\"text\" [disabled]=\"toggleButton\"\r\n                        class=\"form-control\">\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                  <div class=\"col-sm-4\">\r\n                    <div class=\"form-group label-floating\">\r\n                      <label class=\"control-label\">Fecha Vencimiento\r\n                      </label>\r\n                      <input name=\"txtFechaVencimiento\" id=\"txtFechaProgPago\" [(ngModel)]=\"factura.fechavencimiento\" type=\"text\" [disabled]=\"toggleButton\"\r\n                        class=\"form-control\">\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-sm-4\">\r\n                    <div class=\"form-group label-floating\">\r\n                      <label class=\"control-label\">Fecha de Recepción\r\n                      </label>\r\n                      <input name=\"txtFechaRecepcion\" id=\"txtFechaRecepcion\" [(ngModel)]=\"factura.fecharecepcion\" type=\"text\" [disabled]=\"toggleButton\"\r\n                        class=\"form-control\">\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-sm-4\">\r\n                    <div class=\"form-group label-floating\">\r\n                      <label class=\"control-label\">Fecha de Registro\r\n                      </label>\r\n                      <input name=\"txtFechaRegistro\" id=\"txtFechaRegistro\" [(ngModel)]=\"factura.fecharegistro\" type=\"text\" [disabled]=\"toggleButton\"\r\n                        class=\"form-control\">\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                  <div class=\"col-sm-4\">\r\n                    <div class=\"form-group label-floating\">\r\n                      <label class=\"control-label\">Documento ERP \r\n                      </label>\r\n                      <input name=\"txtDocumentoERP\" type=\"text\" [(ngModel)]=\"factura.documentoerp\" [disabled]=\"toggleButton\" class=\"form-control\">\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-sm-4\">\r\n                    <div class=\"form-group label-floating\">\r\n                      <label class=\"control-label\">Forma de Pago\r\n                      </label>\r\n                      <input name=\"txtFormaPago\" type=\"text\" [(ngModel)]=\"factura.formapago\" [disabled]=\"toggleButton\" class=\"form-control\">\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-sm-4\">\r\n                    <div class=\"form-group label-floating\">\r\n                      <label class=\"control-label\">Moneda\r\n                          </label>\r\n                      <select name=\"moneda2\" class=\"form-control\" [(ngModel)]=\"factura.moneda\" [disabled]=\"toggleButton\">\r\n                            <option disabled=\"\" selected=\"\"></option>\r\n                            <option value=\"USD\"> USD </option>\r\n                          </select>\r\n                    </div>\r\n                  </div>\r\n\r\n                </div>\r\n                <div class=\"row\">\r\n                  <div class=\"col-sm-12\">\r\n                    <div class=\"form-group label-floating\">\r\n                      <label class=\"control-label\">Bien/Servicio afecto a Detracción\r\n                      </label>\r\n                      <input name=\"txtBienServicioDetraccion\" type=\"text\" [disabled]=\"toggleButton\" [(ngModel)]=\"factura.bienserviciodetraccion\"\r\n                        class=\"form-control\">\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                  <div class=\"col-sm-12\">\r\n                    <div class=\"form-group label-floating\">\r\n                      <label class=\"control-label\">Condición Pago\r\n                      </label>\r\n                      <input name=\"txtCondicionPago\" type=\"text\" [(ngModel)]=\"factura.condicionpago\" [disabled]=\"toggleButton\" class=\"form-control\">\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"card-content\">\r\n                <div class=\"card\">\r\n                  <div class=\"card-header card-header-icon\" data-background-color=\"blue\">\r\n                    <i class=\"material-icons\">assignment</i>\r\n                  </div>\r\n                  <div class=\"card-content\">\r\n                    <h4 class=\"card-title\">Detalle</h4>\r\n\r\n                    <div class=\"material-datatables table-responsive\" style=\"display:block\">\r\n                      <table id=\"dtArticulos\" class=\"table table-striped table-no-bordered table-hover\" cellspacing=\"0\" width=\"100%\" style=\"width:100%\">\r\n                        <thead>\r\n                          <tr>\r\n                            <th class=\"disabled-sorting text-right\">\r\n                              <div class=\"checkbox text-right\">\r\n                                <label><input type=\"checkbox\" name=\"optionsCheckboxes\" class=\"checkall\" ></label>\r\n                              </div>\r\n                            </th>\r\n                            <th width=\"10%\">No. Item</th>\r\n                            <th width=\"10%\">No. Guía</th>\r\n                            <th width=\"15%\">No. Orden de Compra</th>\r\n                            <th width=\"10%\">No. Item OC</th>\r\n\r\n                            <th width=\"20%\">Descripción del Producto</th>\r\n\r\n                            <th width=\"10%\">Cantidad</th>\r\n                            <th width=\"15%\">Importe Total Item</th>\r\n                            <th class=\"disabled-sorting\" width=\"10%\">Acciones</th>\r\n                          </tr>\r\n                        </thead>\r\n                      </table>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"row\">\r\n              <div class=\"col-sm-4 col-sm-offset-8\">\r\n                <div class=\"form-group label-floating\">\r\n                  <label class=\"control-label\">Sub-Total\r\n                  </label>\r\n                  <input name=\"txtSubTotal\" type=\"text\" [(ngModel)]=\"factura.subtotal\" [disabled]=\"toggleButton\" class=\"form-control\">\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"row\">\r\n              <div class=\"col-sm-4 col-sm-offset-8\">\r\n                <div class=\"form-group label-floating\">\r\n                  <label class=\"control-label\">IGV\r\n                  </label>\r\n                  <input name=\"txtIGV\" type=\"text\" [(ngModel)]=\"factura.igv\" [disabled]=\"toggleButton\" class=\"form-control\">\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"row\">\r\n              <div class=\"col-sm-4 col-sm-offset-8\">\r\n                <div class=\"form-group label-floating\">\r\n                  <label class=\"control-label\">Total\r\n                  </label>\r\n                  <input name=\"txtTotal\" type=\"text\" [(ngModel)]=\"factura.total\" [disabled]=\"toggleButton\" class=\"form-control\">\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"card-content\">\r\n              <div class=\"card-content\">\r\n                <div class=\"row\">\r\n                  <div class=\"col-sm-12\">\r\n                    <div class=\"form-group\">\r\n                      <label class=\"control-label\">{{factura.totaltexto}}</label>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"card-header\">\r\n                <h4 class=\"card-title\">Datos de Pago</h4>\r\n              </div>\r\n              <div class=\"card-content\">\r\n                <div class=\"row\">\r\n                  <div class=\"col-sm-4\">\r\n                    <div class=\"form-group label-floating\">\r\n                      <label class=\"control-label\">Tipo Pago\r\n                      </label>\r\n                      <input name=\"txtTipoPago\" type=\"text\" [(ngModel)]=\"factura.tipopago\" [disabled]=\"toggleButton\" class=\"form-control\">\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-sm-4\">\r\n                    <div class=\"form-group label-floating\">\r\n                      <label class=\"control-label\">Nro. Documento  \r\n                      </label>\r\n                      <input name=\"txtNroDocumento\" type=\"text\" [(ngModel)]=\"factura.nrodocumento\" [disabled]=\"toggleButton\" class=\"form-control\">\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-sm-4\">\r\n                    <div class=\"form-group label-floating\">\r\n                      <label class=\"control-label\">Banco \r\n                      </label>\r\n                      <input name=\"txtBanco\" type=\"text\" [(ngModel)]=\"factura.banco\" [disabled]=\"toggleButton\" class=\"form-control\">\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                  <div class=\"col-sm-4\">\r\n                    <div class=\"form-group label-floating\">\r\n                      <label class=\"control-label\">Fecha de Pago\r\n                      </label>\r\n                      <input name=\"txtFechaPago\" type=\"text\" [(ngModel)]=\"factura.fechapago\" [disabled]=\"toggleButton\" class=\"form-control\">\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-sm-4\">\r\n                    <div class=\"form-group label-floating\">\r\n                      <label class=\"control-label\">Monto\r\n                      </label>\r\n                      <input name=\"txtMonto\" type=\"text\" [(ngModel)]=\"factura.monto\" [disabled]=\"toggleButton\" class=\"form-control\">\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-sm-4\">\r\n                    <div class=\"form-group label-floating\">\r\n                      <label class=\"control-label\">Moneda \r\n                      </label>\r\n                      <input name=\"txtMoneda3\" type=\"text\" [(ngModel)]=\"factura.datospagomoneda\" [disabled]=\"toggleButton\" class=\"form-control\">\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                  <div class=\"col-sm-4\">\r\n                    <div class=\"form-group label-floating\">\r\n                      <label class=\"control-label\">Nro. Cheque\r\n                      </label>\r\n                      <input name=\"txtNroCheque\" type=\"text\" [(ngModel)]=\"factura.nrocheque\" [disabled]=\"toggleButton\" class=\"form-control\">\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"card-header\">\r\n                <h4 class=\"card-title\">Datos de Descuento por Retención o Detracción</h4>\r\n              </div>\r\n              <div class=\"card-content\">\r\n                <div class=\"row\">\r\n                  <div class=\"col-sm-6\">\r\n                    <div class=\"form-group label-floating\">\r\n                      <label class=\"control-label\">Tipo Descuento\r\n                      </label>\r\n                      <input name=\"txtTipoDescuento\" type=\"text\" [(ngModel)]=\"factura.tipodescuento\" [disabled]=\"toggleButton\" class=\"form-control\">\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-sm-6\">\r\n                    <div class=\"form-group label-floating\">\r\n                      <label class=\"control-label\">Nro. Comprobante\r\n                      </label>\r\n                      <input name=\"txtNroComprobante\" type=\"text\" [(ngModel)]=\"factura.nrocomprobante\" [disabled]=\"toggleButton\" class=\"form-control\">\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                  <div class=\"col-sm-6\">\r\n                    <div class=\"form-group label-floating\">\r\n                      <label class=\"control-label\">Monto\r\n                      </label>\r\n                      <input name=\"txtMonto4\" type=\"text\" [(ngModel)]=\"factura.dsctomonto\" [disabled]=\"toggleButton\" class=\"form-control\">\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-sm-6\">\r\n                    <div class=\"form-group label-floating\">\r\n                      <label class=\"control-label\">Moneda\r\n                      </label>\r\n                      <input name=\"txtMoneda4\" type=\"text\" [(ngModel)]=\"factura.dsctomoneda\" [disabled]=\"toggleButton\" class=\"form-control\">\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"card-header\">\r\n                <h4 class=\"card-title\">Observaciones Comprobante de Pago</h4>\r\n              </div>\r\n              <div class=\"card-content\">\r\n                <div class=\"row\">\r\n                  <div class=\"col-sm-12\">\r\n                    <div class=\"form-group label-floating\">\r\n                      <label class=\"control-label\">\r\n                      </label>\r\n                      <input name=\"txtObsComprobantePago\" type=\"text\" [(ngModel)]=\"factura.obscomprobantepago\" [disabled]=\"toggleButton\" class=\"form-control\">\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"card-header\">\r\n                <h4 class=\"card-title\">Observaciones de Pago</h4>\r\n              </div>\r\n              <div class=\"card-content\">\r\n                <div class=\"row\">\r\n                  <div class=\"col-sm-4\">\r\n                    <div class=\"form-group label-floating\">\r\n                      <label class=\"control-label\">Tipo Descuento\r\n                      </label>\r\n                      <input name=\"txtTipoDescuento2\" type=\"text\" [(ngModel)]=\"factura.obspagotipodescuento\" [disabled]=\"toggleButton\" class=\"form-control\">\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                  <div class=\"col-sm-4\">\r\n                    <div class=\"form-group label-floating\">\r\n                      <label class=\"control-label\">Monto\r\n                      </label>\r\n                      <input name=\"txtMonto5\" type=\"text\" [(ngModel)]=\"factura.obspagomonto\" [disabled]=\"toggleButton\" class=\"form-control\">\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-sm-4\">\r\n                    <div class=\"form-group label-floating\">\r\n                      <label class=\"control-label\">Moneda\r\n                      </label>\r\n                      <input name=\"txtMoneda5\" type=\"text\" [(ngModel)]=\"factura.obspagomoneda\" [disabled]=\"toggleButton\" class=\"form-control\">\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"card-content\">\r\n                <div class=\"content table-responsive\">\r\n                  <table class=\"table\">\r\n                    <thead>\r\n                      <tr>\r\n                        <th>Descripción</th>\r\n                        <th>Fecha Emisión</th>\r\n                        <th>Moneda</th>\r\n                        <th>Immporte</th>\r\n                        <th>Banco</th>\r\n                        <th>Nro Cuenta</th>\r\n                        <th>Referencia Pago</th>\r\n                      </tr>\r\n                    </thead>\r\n                    <tbody *ngIf=\"id==3\">\r\n                      <tr>\r\n                        <td>Otros Pagos</td>\r\n                        <td>03/01/2017</td>\r\n                        <td>S/.</td>\r\n                        <td>-200 -</td>\r\n                        <td></td>\r\n                        <td></td>\r\n                        <td>Pago Caja Chica</td>\r\n                      </tr>\r\n                      <tr>\r\n                        <td>Factura</td>\r\n                        <td>28/11/2016</td>\r\n                        <td>S/.</td>\r\n                        <td>22.00</td>\r\n                        <td></td>\r\n                        <td></td>\r\n                        <td>0022-03222582</td>\r\n                      </tr>\r\n                      <tr>\r\n                        <td>Factura</td>\r\n                        <td>29/11/2016</td>\r\n                        <td>S/.</td>\r\n                        <td>20.00</td>\r\n                        <td></td>\r\n                        <td></td>\r\n                        <td>0033-01333535</td>\r\n                      </tr>\r\n                      <tr>\r\n                        <td>Factura</td>\r\n                        <td>29/11/2016</td>\r\n                        <td>S/.</td>\r\n                        <td>150.00</td>\r\n                        <td></td>\r\n                        <td></td>\r\n                        <td>0001-00004320</td>\r\n                      </tr>\r\n                      <tr>\r\n                        <td>Factura</td>\r\n                        <td>29/11/2016</td>\r\n                        <td>S/.</td>\r\n                        <td>150.00</td>\r\n                        <td></td>\r\n                        <td></td>\r\n                        <td>0001-00004320</td>\r\n                      </tr>\r\n                      <tr>\r\n                        <td>Factura</td>\r\n                        <td>29/11/2016</td>\r\n                        <td>S/.</td>\r\n                        <td>22.00</td>\r\n                        <td></td>\r\n                        <td></td>\r\n                        <td>0022-03222582</td>\r\n                      </tr>\r\n                      <tr>\r\n                        <td>Factura</td>\r\n                        <td>29/11/2016</td>\r\n                        <td>S/.</td>\r\n                        <td>20.00</td>\r\n                        <td></td>\r\n                        <td></td>\r\n                        <td>0033-01333535</td>\r\n                      </tr>\r\n                      <tr>\r\n                        <td>Factura</td>\r\n                        <td>29/11/2016</td>\r\n                        <td>S/.</td>\r\n                        <td>150.00</td>\r\n                        <td></td>\r\n                        <td></td>\r\n                        <td>0001-00004320</td>\r\n                      </tr>\r\n                      <tr>\r\n                        <td>Factura</td>\r\n                        <td>29/11/2016</td>\r\n                        <td>S/.</td>\r\n                        <td>150.00</td>\r\n                        <td></td>\r\n                        <td></td>\r\n                        <td>0001-00004320</td>\r\n                      </tr>\r\n                    </tbody>\r\n                  </table>\r\n\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"card-footer\">\r\n              <button class=\"btn btn-fill btn-default pull-right\" routerLink=\"/factura/comprador/buscar\">Salir</button>\r\n            </div>\r\n          </form>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div id=\"mdlBuscarCliente\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\">\r\n    <div class=\"modal-dialog modal-lg\" role=\"document\">\r\n      <div class=\"modal-content\">\r\n        <div class=\"modal-header\">\r\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\r\n         \r\n          <table>\r\n            <tr>\r\n              <td>\r\n                <div class=\"card-header card-header-icon\" data-background-color=\"blue\">\r\n                  <i class=\"material-icons\">assignment</i>\r\n                </div>\r\n              </td>\r\n              <td class=\"cell-title\"> \r\n                <div class=\"card-content\">\r\n                  <h4 class=\"card-title modal-title\">Buscar Cliente</h4>\r\n                  \r\n                </div>\r\n              </td>\r\n            </tr>\r\n          </table>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"form-group label-floating\">\r\n                <label class=\"control-label\">Nombre de Compañía</label>\r\n                <input type=\"text\" id=\"txtBuscarNroOC\" name=\"txtBuscarNroOC\" class=\"form-control\" value=\"\" [disabled]=\"toggleButton\">\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-1\">\r\n              <div class=\"form-group label-floating\">\r\n                <label class=\"control-label\"></label>\r\n                <select name=\"cmbPais\" class=\"form-control\" [disabled]=\"toggleButton\">\r\n                 <option Value=\"PE\">PE</option>\r\n               </select>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-sm-5\">\r\n              <div class=\"form-group label-floating\">\r\n                <label class=\"control-label\">Código</label>\r\n                <input type=\"text\" id=\"txtBuscarCodCliente\" name=\"txtBuscarCodCliente\" class=\"form-control\" value=\"\" [disabled]=\"toggleButton\">\r\n              </div>\r\n            </div>\r\n            <div class=\"col-sm-2\">\r\n              <div class=\"form-group label-floating\">\r\n                <label class=\"control-label\"></label>\r\n                <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Buscar</button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"material-datatables table-responsive\">\r\n                <table id=\"dtBuscarCliente\" class=\"table table-striped table-no-bordered table-hover\" cellspacing=\"0\" width=\"100%\" style=\"width:100%\">\r\n                  <thead>\r\n                    <tr>\r\n                      <th class=\"disabled-sorting text-right\">\r\n\r\n                      </th>\r\n                      <th style=\"width:50%\">Nombre de Compañía</th>\r\n                      <th style=\"width:50%\">Código</th>\r\n                    </tr>\r\n                  </thead>\r\n                </table>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"modal-footer\">\r\n          <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Seleccionar</button>\r\n          <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Cerrar</button>\r\n        </div>\r\n      </div>\r\n      <!-- /.modal-content -->\r\n    </div>\r\n    <!-- /.modal-dialog -->\r\n  </div>\r\n  <div id=\"mdlGuias\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\">\r\n    <div class=\"modal-dialog modal-lg\" role=\"document\">\r\n      <div class=\"modal-content\">\r\n        <div class=\"modal-header\">\r\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\r\n          \r\n          <table>\r\n            <tr>\r\n              <td>\r\n                <div class=\"card-header card-header-icon\" data-background-color=\"blue\">\r\n                  <i class=\"material-icons\">assignment</i>\r\n                </div>\r\n              </td>\r\n              <td class=\"cell-title\"> \r\n                <div class=\"card-content\">\r\n                  <h4 class=\"card-title modal-title\">Buscar Guía</h4>\r\n                  \r\n                </div>\r\n              </td>\r\n            </tr>\r\n          </table>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-6\">\r\n              <div class=\"form-group label-floating\">\r\n                <label class=\"control-label\">Nro. Guía</label>\r\n                <input type=\"text\" id=\"txtBuscarNroOC\" name=\"txtBuscarNroOC\" class=\"form-control\" value=\"\" [disabled]=\"toggleButton\">\r\n              </div>\r\n            </div>\r\n            <div class=\"col-sm-6\">\r\n              <div class=\"form-group label-floating\">\r\n                <label class=\"control-label\">Estado</label>\r\n                <select name=\"cmbBuscarEstado\" id=\"cmbBuscarEstado\" class=\"form-control\" [disabled]=\"toggleButton\">\r\n                  <option Value=\"Aceptada\">Aceptada</option>\r\n                </select>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-5\">\r\n              <div class=\"form-group label-floating\">\r\n                <label class=\"control-label\">Emitida/Enviada después de</label>\r\n                <input type=\"text\" id=\"txtGuiaEmitidaDesde\" name=\"txtGuiaEmitidaDesde\" datepicker class=\"form-control\" value=\"\" [disabled]=\"toggleButton\">\r\n              </div>\r\n            </div>\r\n            <div class=\"col-sm-5\">\r\n              <div class=\"form-group label-floating\">\r\n                <label class=\"control-label\">Emitida/Enviada antes de</label>\r\n                <input type=\"text\" id=\"txtGuiaEmitidaHasta\" name=\"txtGuiaEmitidaHasta\" datepicker class=\"form-control\" value=\"\" [disabled]=\"toggleButton\">\r\n              </div>\r\n            </div>\r\n            <div class=\"col-sm-2\">\r\n              <div class=\"form-group label-floating\">\r\n                <label class=\"control-label\"></label>\r\n                <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Buscar</button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"material-datatables table-responsive\">\r\n                <table id=\"dtBuscarGuia\" class=\"table table-striped table-no-bordered table-hover\" cellspacing=\"0\" width=\"100%\" style=\"width:100%\">\r\n                  <thead>\r\n                    <tr>\r\n                      <th class=\"disabled-sorting text-right\">\r\n                        <div class=\"checkbox\">\r\n                          <label>\r\n                          <input type=\"checkbox\" name=\"optionsCheckboxes\">\r\n                          </label>\r\n                        </div>\r\n                      </th>\r\n                      <th>N° Guía</th>\r\n                      <th>Estado (proveedor/cliente)</th>\r\n                      <th>Proveedor</th>\r\n                      <th>Fecha de Emisión</th>\r\n                      <th>Fecha de Inicio de Traslado</th>\r\n                      <th>Fecha Probable de Arribo</th>\r\n                    </tr>\r\n                  </thead>\r\n\r\n\r\n                </table>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"modal-footer\">\r\n          <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Añadir</button>\r\n          <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Cerrar</button>\r\n        </div>\r\n      </div>\r\n      <!-- /.modal-content -->\r\n    </div>\r\n    <!-- /.modal-dialog -->\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/factura/comprador/formulario/facturacompradorformulario.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FacturaCompradorFormularioComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_model_factura__ = __webpack_require__("../../../../../src/app/model/factura.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var oFacturaCompradorFormularioComponent;
var FacturaCompradorFormularioComponent = (function () {
    function FacturaCompradorFormularioComponent(activatedRoute) {
        this.step = 1;
        this.id = 0;
        this.toggleButton = true;
        this.activatedRoute = activatedRoute;
        this.listDetalleFactura = [];
        this.factura = new __WEBPACK_IMPORTED_MODULE_2_app_model_factura__["a" /* Factura */];
    }
    FacturaCompradorFormularioComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.id = params['id'];
        });
        if (this.id > 0) {
            this.toggleButton = true;
            $("#btnAgregarItemOC").addClass('disabled');
            $("#btnEliminarItemOC").addClass('disabled');
            $("#secCabecera").hide();
            $("#secFactura").show();
        }
        else {
            this.toggleButton = false;
            $("#secCabecera").show();
            $("#secFactura").hide();
        }
        if (this.id == 1) {
            this.factura = {
                id: 1,
                nocomprobantepago: "",
                cliente: "ALICORP S.A.A.",
                ruccliente: "20100055237",
                estado: "Recibidad / Publicada",
                fechaemision: "07/07/2017",
                guiasdespacho: "F003-00120347",
                ordencompraserviciocontrato: "4510875643",
                fechavencimiento: "",
                fecharecepcion: "",
                fecharegistro: "",
                documentoerp: "02416284",
                formapago: "",
                moneda: "USD",
                bienserviciodetraccion: "",
                condicionpago: "",
                subtotal: "USD 28,057.08",
                igv: "USD 5,050.27",
                total: "USD 33,107.35",
                totaltexto: "SON: TREINTA Y TRES MIL CIENTO SIETE CON 35/100 DOLARES AMERICANOS",
                tipopago: "",
                nrodocumento: "",
                banco: "",
                fechapago: "",
                monto: "",
                datospagomoneda: "",
                nrocheque: "",
                tipodescuento: "",
                nrocomprobante: "",
                dsctomonto: "",
                dsctomoneda: "",
                obscomprobantepago: "",
                obspagotipodescuento: "",
                obspagomonto: "",
                obspagomoneda: "",
            };
        }
        else if (this.id == 2) {
            this.factura = {
                id: 2,
                nocomprobantepago: "",
                cliente: "ALICORP S.A.A.",
                ruccliente: "20100055237",
                estado: "Visualizada / Programada de Pago",
                fechaemision: "17/07/2017",
                guiasdespacho: "",
                ordencompraserviciocontrato: "",
                fechavencimiento: "25/07/2017",
                fecharecepcion: "25/07/2017",
                fecharegistro: "25/07/2017",
                documentoerp: "02000016136",
                formapago: "Pagadero Inmediatamente",
                moneda: "PEN",
                bienserviciodetraccion: "",
                condicionpago: "",
                subtotal: "PEN 27,080.83",
                igv: "PEN 4,874.55",
                total: "PEN 31,955.38",
                totaltexto: "SON: TREINTA Y UN MIL NOVECIENTOS CINCUENTA Y CINCO CON 38/100 SOLES",
                tipopago: "",
                nrodocumento: "",
                banco: "",
                fechapago: "",
                monto: "",
                datospagomoneda: "",
                nrocheque: "",
                tipodescuento: "",
                nrocomprobante: "",
                dsctomonto: "",
                dsctomoneda: "",
                obscomprobantepago: "",
                obspagotipodescuento: "",
                obspagomonto: "",
                obspagomoneda: "",
            };
        }
        else if (this.id == 3) {
            this.factura = {
                id: 3,
                nocomprobantepago: "",
                cliente: "ALICORP S.A.A.",
                ruccliente: "20100055237",
                estado: "Visualizada / Pagada",
                fechaemision: "29/11/2016",
                guiasdespacho: "",
                ordencompraserviciocontrato: "",
                fechavencimiento: "17/02/2017",
                fecharecepcion: "03/01/2017",
                fecharegistro: "03/01/2017",
                documentoerp: "0200001946",
                formapago: "Crédito 45 días",
                moneda: "PEN",
                bienserviciodetraccion: "",
                condicionpago: "",
                subtotal: "PEN 127.12",
                igv: "PEN 22.88",
                total: "PEN 150.00",
                totaltexto: "SON: CIENTO CINCUENTA CON 00/100 DOLARES AMERICANOS",
                tipopago: "Pago sin descuentos",
                nrodocumento: "15000000495",
                banco: "",
                fechapago: "03/01/2017",
                monto: "-200.0000",
                datospagomoneda: "PEN",
                nrocheque: "",
                tipodescuento: "",
                nrocomprobante: "",
                dsctomonto: "0.00",
                dsctomoneda: "PEN",
                obscomprobantepago: "Los días centrales de pago son los Martes y Jueves",
                obspagotipodescuento: "",
                obspagomonto: "",
                obspagomoneda: "",
            };
        }
        this.listDetalleFactura = [
            {
                noitem: "1",
                noguia: "F003-00120347",
                nooc: "4510875643",
                noitemoc: "00010",
                noparte: "",
                descproducto: "ACEITE DE SOYA",
                preciounitreferencial: "988.9700",
                cantidad: "28370.0000",
                importetotalitem: "28,057.0800",
            },
        ];
        this.listBuscarGuia = [
            {
                id: 1,
                nroguia: '017-0002449',
                estado: 'Facturada / Facturada',
                proveedor: 'ASAP CONSULTING GROUP S.A.C.',
                fechaemision: '31/05/2010',
                fechainiciotraslado: '31/05/2010',
                fechaprobablearribo: '31/05/2010',
                documentoerp: '5045896541'
            },
            {
                id: 2,
                nroguia: '7878-766666666',
                estado: 'Recepción Total / Activa',
                proveedor: 'ASAP CONSULTING GROUP S.A.C.',
                fechaemision: '31/05/2010',
                fechainiciotraslado: '31/05/2010',
                fechaprobablearribo: '31/05/2010',
                documentoerp: '5045896542'
            },
            {
                id: 3,
                nroguia: '7878-766666666',
                estado: 'Anulada / Activa',
                proveedor: 'ASAP CONSULTING GROUP S.A.C.',
                fechaemision: '31/05/2010',
                fechainiciotraslado: '31/05/2010',
                fechaprobablearribo: '31/05/2010',
                documentoerp: '5045896543'
            },
            {
                id: 4,
                nroguia: '00-2010053101',
                estado: 'Activa / Activa',
                proveedor: 'FERREYROS',
                fechaemision: '31/05/2010',
                fechainiciotraslado: '31/05/2010',
                fechaprobablearribo: '31/05/2010',
                documentoerp: '5045896544'
            },
        ];
        this.listBuscarCliente = [
            {
                id: 1,
                nombre: "CENTENARIO RETAIL S.A.C.",
                ruc: "122565752",
                codigo: ""
            },
        ];
        oFacturaCompradorFormularioComponent = this;
    };
    FacturaCompradorFormularioComponent.prototype.ngAfterViewInit = function () {
        $("#txtFechaEmision").val(moment().format("MM/DD/YYYY"));
        $("#txtGuiaEmitidaDesde").val(moment().subtract(7, 'd').format("MM/DD/YYYY"));
        $("#txtGuiaEmitidaHasta").val(moment().format("MM/DD/YYYY"));
        $("#txtFechaEmision").keydown();
        $("#txtGuiaEmitidaDesde").keydown();
        $("#txtGuiaEmitidaHasta").keydown();
        cargarGuiasDT();
        cargarBuscarGuiaDT();
        cargarBuscarClienteDT();
        DatatableFunctions.registerCheckAll();
    };
    FacturaCompradorFormularioComponent.prototype.ngOnChanges = function (changes) {
    };
    FacturaCompradorFormularioComponent.prototype.registrarFactura = function (e) {
        $("#secCabecera").hide();
        $("#secFactura").show();
        this.step = 2;
    };
    FacturaCompradorFormularioComponent.prototype.habilitarEdicion = function (e) {
        this.toggleButton = false;
        $("#btnAgregarItemOC").removeClass('disabled');
        $("#btnEliminarItemOC").removeClass('disabled');
    };
    return FacturaCompradorFormularioComponent;
}());
FacturaCompradorFormularioComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'facturacompradorformulario-cmp',
        template: __webpack_require__("../../../../../src/app/factura/comprador/formulario/facturacompradorformulario.component.html"),
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object])
], FacturaCompradorFormularioComponent);

function cargarBuscarClienteDT() {
    var datatable = $('#dtBuscarCliente').DataTable({
        /* ajax: {
           "url": "https://jsonplaceholder.typicode.com/posts",
           "dataSrc": ""
         },*/
        "ajax": function (data, callback, settings) {
            console.log(oFacturaCompradorFormularioComponent);
            var result = {
                data: oFacturaCompradorFormularioComponent.listBuscarCliente
            };
            callback(result);
        },
        columns: [
            { data: 'id' },
            { data: 'nombre' },
            { data: 'ruc' },
        ],
        columnDefs: [
            {
                render: function (data, type, row) {
                    //return data +' ('+ row[3]+')';
                    return '<div class="checkbox"><label><input type="checkbox" name="optionsCheckboxes"></label></div>';
                },
                targets: 0
            },
        ]
    });
}
function cargarBuscarGuiaDT() {
    var datatable = $('#dtBuscarGuia').DataTable({
        /* ajax: {
           "url": "https://jsonplaceholder.typicode.com/posts",
           "dataSrc": ""
         },*/
        "ajax": function (data, callback, settings) {
            var result = {
                data: oFacturaCompradorFormularioComponent.listBuscarGuia
            };
            callback(result);
        },
        columns: [
            { data: 'nroguia' },
            { data: 'nroguia' },
            { data: 'estado' },
            { data: 'proveedor' },
            { data: 'fechaemision' },
            { data: 'fechainiciotraslado' },
            { data: 'fechaprobablearribo' },
        ],
        columnDefs: [
            {
                render: function (data, type, row) {
                    //return data +' ('+ row[3]+')';
                    return '<div class="checkbox"><label><input type="checkbox" name="optionsCheckboxes"></label></div>';
                },
                targets: 0
            },
        ]
    });
}
function cargarGuiasDT() {
    var datatable = $('#dtArticulos').on('init.dt', function (e, settings, json) {
        DatatableFunctions.initDatatable(e, settings, json, datatable);
    }).DataTable({
        /* ajax: {
           "url": "https://jsonplaceholder.typicode.com/posts",
           "dataSrc": ""
         },*/
        "ajax": function (data, callback, settings) {
            var result = {
                data: oFacturaCompradorFormularioComponent.listDetalleFactura
            };
            callback(result);
        },
        columns: [
            { data: 'noitem' },
            { data: 'noitem' },
            { data: 'noguia' },
            { data: 'nooc' },
            { data: 'noitemoc' },
            { data: 'descproducto' },
            { data: 'cantidad' },
            { data: 'importetotalitem' },
            { data: 'noitem' },
        ],
        columnDefs: [
            { "className": "text-center", "targets": [1, 2, 3, 4, 5, 6, 7, 8] },
            {
                render: function (data, type, row) {
                    return '<div class="text-right" height="100%"><div class="checkbox text-right"><label><input type="checkbox" name="optionsCheckboxes"></label></div></div>';
                },
                targets: 0
            },
            {
                render: function (data, type, row) {
                    //return data +' ('+ row[3]+')';
                    return '<a href="javascript:void(0)"><button class="btn btn-simple btn-info btn-icon visible" rel="tooltip" title="Ver/Editar" data-placement="left"><i class="material-icons">visibility</i></button></a>';
                },
                targets: 8
            }
        ]
    });
}
var _a;
//# sourceMappingURL=facturacompradorformulario.component.js.map

/***/ }),

/***/ "../../../../../src/app/factura/factura.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FacturaModule", function() { return FacturaModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_utils_module__ = __webpack_require__("../../../../../src/app/utils/utils.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__proveedor_formulario_facturaproveedorformulario_component__ = __webpack_require__("../../../../../src/app/factura/proveedor/formulario/facturaproveedorformulario.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__comprador_formulario_facturacompradorformulario_component__ = __webpack_require__("../../../../../src/app/factura/comprador/formulario/facturacompradorformulario.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__proveedor_buscar_facturaproveedorbuscar_component__ = __webpack_require__("../../../../../src/app/factura/proveedor/buscar/facturaproveedorbuscar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__factura_routing__ = __webpack_require__("../../../../../src/app/factura/factura.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__directives_datepicker_module__ = __webpack_require__("../../../../../src/app/directives/datepicker.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__comprador_buscar_facturacompradorbuscar_component__ = __webpack_require__("../../../../../src/app/factura/comprador/buscar/facturacompradorbuscar.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var FacturaModule = (function () {
    function FacturaModule() {
    }
    return FacturaModule;
}());
FacturaModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(__WEBPACK_IMPORTED_MODULE_8__factura_routing__["a" /* FacturaRoutes */]),
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_4__utils_utils_module__["a" /* UtilsModule */], __WEBPACK_IMPORTED_MODULE_9__directives_datepicker_module__["a" /* A2Edatetimepicker */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_7__proveedor_buscar_facturaproveedorbuscar_component__["a" /* FacturaProveedorBuscarComponent */], __WEBPACK_IMPORTED_MODULE_5__proveedor_formulario_facturaproveedorformulario_component__["a" /* FacturaProveedorFormularioComponent */], __WEBPACK_IMPORTED_MODULE_10__comprador_buscar_facturacompradorbuscar_component__["a" /* FacturaCompradorBuscarComponent */], __WEBPACK_IMPORTED_MODULE_6__comprador_formulario_facturacompradorformulario_component__["a" /* FacturaCompradorFormularioComponent */]]
    })
], FacturaModule);

//# sourceMappingURL=factura.module.js.map

/***/ }),

/***/ "../../../../../src/app/factura/factura.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FacturaRoutes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__proveedor_buscar_facturaproveedorbuscar_component__ = __webpack_require__("../../../../../src/app/factura/proveedor/buscar/facturaproveedorbuscar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__proveedor_formulario_facturaproveedorformulario_component__ = __webpack_require__("../../../../../src/app/factura/proveedor/formulario/facturaproveedorformulario.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__comprador_formulario_facturacompradorformulario_component__ = __webpack_require__("../../../../../src/app/factura/comprador/formulario/facturacompradorformulario.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__comprador_buscar_facturacompradorbuscar_component__ = __webpack_require__("../../../../../src/app/factura/comprador/buscar/facturacompradorbuscar.component.ts");




var FacturaRoutes = [
    {
        path: '',
        children: [{
                path: 'proveedor/formulario/:id',
                component: __WEBPACK_IMPORTED_MODULE_1__proveedor_formulario_facturaproveedorformulario_component__["a" /* FacturaProveedorFormularioComponent */],
            },
            {
                path: 'proveedor/buscar',
                component: __WEBPACK_IMPORTED_MODULE_0__proveedor_buscar_facturaproveedorbuscar_component__["a" /* FacturaProveedorBuscarComponent */]
            },
            {
                path: 'comprador/buscar',
                component: __WEBPACK_IMPORTED_MODULE_3__comprador_buscar_facturacompradorbuscar_component__["a" /* FacturaCompradorBuscarComponent */]
            },
            {
                path: 'comprador/formulario/:id',
                component: __WEBPACK_IMPORTED_MODULE_2__comprador_formulario_facturacompradorformulario_component__["a" /* FacturaCompradorFormularioComponent */]
            }]
    }
];
//# sourceMappingURL=factura.routing.js.map

/***/ }),

/***/ "../../../../../src/app/factura/proveedor/buscar/facturaproveedorbuscar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-12\">\r\n                <div class=\"card\">\r\n                    <form method=\"#\" action=\"#\">\r\n                        <div class=\"card-header card-header-text\" data-background-color=\"blue\">\r\n                            <h4 class=\"card-title\">Buscar Comprobante de Pago</h4>\r\n                        </div>\r\n                        <div class=\"card-content\">\r\n                            <div class=\"row\">\r\n                                <div class=\"col-sm-3\">\r\n                                    <div class=\"form-group label-floating\">\r\n                                        <label class=\"control-label\">Número Comprobante de Pago\r\n                                        </label>\r\n                                        <input [(ngModel)]=\"filtro.nrocomprobantepago\" name=\"nrocomprobantepago\" type=\"text\" class=\"form-control\">\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-sm-3\">\r\n                                    <div class=\"form-group label-floating\">\r\n                                        <label class=\"control-label\">Razón Social Cliente\r\n                                        </label>\r\n                                        <input [(ngModel)]=\"filtro.razonsocialcliente\" name=\"razonsocialcliente\" type=\"text\" class=\"form-control\">\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-sm-3\">\r\n                                    <div class=\"form-group label-floating\">\r\n                                        <label class=\"control-label\">RUC Cliente\r\n                                        </label>\r\n                                        <input [(ngModel)]=\"filtro.ruccliente\" name=\"ruccliente\" type=\"text\" class=\"form-control\">\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-sm-3\">\r\n                                    <div class=\"form-group label-floating\">\r\n                                        <label class=\"control-label\">Moneda\r\n                                        </label>\r\n                                        <select [(ngModel)]=\"filtro.moneda\" name=\"moneda\" class=\"form-control\">\r\n                                            <option value=\"NONE\" selected>TODOS</option>\r\n                                            <option *ngFor=\"let opt of listMonedaCombo\" value=\"{{opt.valor}}\"> {{opt.desc}} </option>   \r\n                                        </select>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"row\">\r\n                                <div class=\"col-sm-3\">\r\n                                    <div class=\"form-group label-floating\">\r\n                                        <label class=\"control-label\">Estado\r\n                                        </label>\r\n                                        <select [(ngModel)]=\"filtro.estado\" name=\"estado\" class=\"form-control\">\r\n                                            <option value=\"NONE\" selected>TODOS</option>\r\n                                            <option *ngFor=\"let opt of listEstadoCombo\" value=\"{{opt.valor}}\"> {{opt.desc}} </option>   \r\n                                        </select>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-sm-3\">\r\n                                    <div class=\"form-group label-floating\">\r\n                                        <label class=\"control-label\">Emitida despues de</label>\r\n                                        <input type=\"text\" [(ngModel)]=\"filtro.fechaemisioninicio\" name=\"fechaemisioninicio\" class=\"form-control\" datepicker />\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-sm-3\">\r\n                                    <div class=\"form-group label-floating\">\r\n                                        <label class=\"control-label\">Emitida antes de</label>\r\n                                        <input type=\"text\" [(ngModel)]=\"filtro.fechaemisionfin\" name=\"fechaemisionfin\" class=\"form-control\" datepicker />\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-sm-3\">\r\n                                    <div class=\"form-group\">\r\n                                        <button class=\"btn btn-default\" (click)=\"clicked($event)\">Buscar</button>\r\n                                        <button class=\"btn btn-default\" (click)=\"limpiar($event)\">Limpiar</button>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <nav class=\"navbar navbar-info\" role=\"navigation\">\r\n                                <div class=\"container-fluid\">\r\n                                    <!--<div class=\"navbar-header\">\r\n\r\n                                        <span class=\"navbar-brand\">Resultados</span>\r\n                                    </div>-->\r\n                                    <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\r\n                                        <ul class=\"nav navbar-nav\">\r\n                                            <li><a [routerLink]=\"['/factura/proveedor/formulario', 0]\">Agregar</a></li>\r\n                                            <li><a href=\"javascript:void()\">Anular</a></li>\r\n                                        </ul>\r\n                                    </div>\r\n                                </div>\r\n                            </nav>\r\n                            <div class=\"material-datatables table-responsive\">\r\n                                <table id=\"dtResultados\" class=\"table table-striped table-no-bordered table-hover\" cellspacing=\"0\" width=\"100%\" style=\"width:100%\">\r\n                                    <thead>\r\n                                        <tr>\r\n\r\n                                            <th class=\"disabled-sorting text-right\">\r\n                                                <div class=\"checkbox text-right\">\r\n                                                    <label><input type=\"checkbox\" name=\"optionsCheckboxes\" class=\"checkall\" ></label>\r\n                                                </div>\r\n                                            </th>\r\n                                            <th>No. Doc. de Pago</th>\r\n                                            <th>Cliente</th>\r\n                                            <th>Tipo Doc</th>\r\n                                            <th>Documento ERP</th>\r\n                                            <th>Forma de Pago</th>\r\n                                            <th>Importe Total</th>\r\n                                            <th>Estado</th>\r\n                                            <th>Fecha de Emisión</th>\r\n                                            <th>Fecha Prog. Pago</th>\r\n                                            <th>Fecha Pago</th>\r\n                                            <th>Notas</th>\r\n                                            <th class=\"disabled-sorting text-center\">Acciones</th>\r\n                                        </tr>\r\n                                    </thead>\r\n\r\n                                </table>\r\n                            </div>\r\n\r\n                        </div>\r\n                    </form>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/factura/proveedor/buscar/facturaproveedorbuscar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FacturaProveedorBuscarComponent; });
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




var oFacturaBuscarComponent, datatable;
var FacturaProveedorBuscarComponent = (function () {
    function FacturaProveedorBuscarComponent(router, route, _masterService) {
        this.router = router;
        this.route = route;
        this._masterService = _masterService;
        this.util = new __WEBPACK_IMPORTED_MODULE_2__utils_app_utils__["a" /* AppUtils */](this.router, this._masterService);
    }
    FacturaProveedorBuscarComponent.prototype.navigate = function (nav) {
        this.router.navigate(nav, { relativeTo: this.route });
    };
    FacturaProveedorBuscarComponent.prototype.validarfiltros = function () {
        if (this.filtro.fechaemisioninicio != null && this.filtro.fechaemisioninicio.toString() != "" && this.filtro.fechaemisionfin != null && this.filtro.fechaemisionfin.toString() != "") {
            var fechacreacioninicio = DatatableFunctions.ConvertStringToDatetime(oFacturaBuscarComponent.filtro.fechaemisioninicio);
            var fechacreacionfin = DatatableFunctions.ConvertStringToDatetime(oFacturaBuscarComponent.filtro.fechaemisionfin);
            var fechacreacioninicio_str = DatatableFunctions.FormatDatetimeForMicroService(fechacreacioninicio);
            var fechacreacionfin_str = DatatableFunctions.FormatDatetimeForMicroService(fechacreacionfin);
            if (fechacreacioninicio_str > fechacreacionfin_str) {
                swal({
                    text: "El rango de Fechas de creación seleccionado no es correcto. Por favor corregir y volver a intentar!",
                    type: 'warning',
                    buttonsStyling: false,
                    confirmButtonClass: "btn btn-warning"
                });
                return false;
            }
        }
        return true;
    };
    FacturaProveedorBuscarComponent.prototype.clicked = function (event) {
        if (this.validarfiltros())
            datatable.ajax.reload();
        event.preventDefault();
    };
    FacturaProveedorBuscarComponent.prototype.limpiar = function (event) {
        this.filtroDefecto();
        setTimeout(function () {
            $("input").each(function () {
                if (!$(this).val() && $(this).val() == '')
                    $(this.parentElement).addClass("is-empty");
            });
        }, 200);
        event.preventDefault();
    };
    FacturaProveedorBuscarComponent.prototype.filtroDefecto = function () {
        var fechacreacioni = new Date();
        fechacreacioni.setMonth(fechacreacioni.getMonth() - 1);
        this.filtro = {
            nrocomprobantepago: '',
            razonsocialcliente: '',
            ruccliente: '',
            estado: 'NONE',
            moneda: 'NONE',
            fechaemisioninicio: fechacreacioni,
            fechaemisionfin: new Date(),
        };
    };
    FacturaProveedorBuscarComponent.prototype.ngOnInit = function () {
        oFacturaBuscarComponent = this;
        this.filtroDefecto();
        this.util.listMonedas(function (data) {
            oFacturaBuscarComponent.listMonedaCombo = data;
        });
        this.util.listEstadoCP(function (data) {
            oFacturaBuscarComponent.listEstadoCombo = data;
        });
    };
    FacturaProveedorBuscarComponent.prototype.ngAfterViewInit = function () {
        cargarDataTable();
        DatatableFunctions.registerCheckAll();
    };
    return FacturaProveedorBuscarComponent;
}());
FacturaProveedorBuscarComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'facturaproveedorbuscar-cmp',
        template: __webpack_require__("../../../../../src/app/factura/proveedor/buscar/facturaproveedorbuscar.component.html"),
        providers: [__WEBPACK_IMPORTED_MODULE_3__service_masterservice__["a" /* MasterService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__service_masterservice__["a" /* MasterService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__service_masterservice__["a" /* MasterService */]) === "function" && _c || Object])
], FacturaProveedorBuscarComponent);

function cargarDataTable() {
    var datatable = $('#dtResultados')
        .on('init.dt', function (e, settings, json) {
        DatatableFunctions.initDatatable(e, settings, json, datatable);
    })
        .DataTable({
        searching: false,
        serverSide: true,
        ajax: {
            beforeSend: function (request) {
                request.setRequestHeader("Authorization", 'Bearer ' + sessionStorage.getItem('token'));
                request.setRequestHeader("origen_datos", 'PEB2M');
            },
            url: " http://b2miningdata.com/api/mscplistar/v1/comprobantes/",
            dataSrc: "data",
            data: function (d) {
                if (oFacturaBuscarComponent.filtro.nrocomprobantepago != "") {
                    d.NumeroFactura = oFacturaBuscarComponent.filtro.nrocomprobantepago;
                }
                if (oFacturaBuscarComponent.filtro.razonsocialproveedor != "") {
                    d.RazonSocialProveedor = oFacturaBuscarComponent.filtro.razonsocialproveedor;
                }
                if (oFacturaBuscarComponent.filtro.rucproveedor != "") {
                    d.RucProveedor = oFacturaBuscarComponent.filtro.rucproveedor;
                }
                if (oFacturaBuscarComponent.filtro.estado != "NONE") {
                    d.Estado = oFacturaBuscarComponent.filtro.estado;
                }
                if (oFacturaBuscarComponent.filtro.moneda != "NONE")
                    d.Moneda = oFacturaBuscarComponent.filtro.moneda;
                if (oFacturaBuscarComponent.filtro.fechaemisioninicio) {
                    var fechacreacioninicio = DatatableFunctions.ConvertStringToDatetime(oFacturaBuscarComponent.filtro.fechaemisioninicio);
                    d.FechaEmision_inicio = DatatableFunctions.FormatDatetimeForMicroService(fechacreacioninicio);
                }
                if (oFacturaBuscarComponent.filtro.fechaemisionfin) {
                    var fechacreacionfin = DatatableFunctions.AddDayEndDatetime(DatatableFunctions.ConvertStringToDatetime(oFacturaBuscarComponent.filtro.fechaemisionfin));
                    d.FechaEmision_fin = DatatableFunctions.FormatDatetimeForMicroService(fechacreacionfin);
                }
                d.column_names = 'IdComprobante,NumeroFactura,RazonSocialProveedor,TipoComprobante,CodigoErp,FormaPago,Total,Moneda,Estado,FechaEmision,FechaProgramadaPago,FechaPago,Nota,RazonSocialCliente';
            }
        },
        columns: [
            { data: 'NumeroFactura', name: 'NumeroFactura' },
            { data: 'NumeroFactura', name: 'NumeroFactura' },
            { data: 'RazonSocialCliente', name: 'RazonSocialCliente' },
            { data: 'TipoComprobante', name: 'TipoComprobante' },
            { data: 'CodigoErp', name: 'CodigoErp' },
            { data: 'FormaPago', name: 'FormaPago' },
            { data: 'Total', name: 'Total' },
            { data: 'Estado', name: 'Estado' },
            { data: 'FechaEmision', name: 'FechaEmision' },
            { data: 'FechaProgramadaPago', name: 'FechaProgramadaPago' },
            { data: 'FechaPago', name: 'FechaPago' },
            { data: 'Nota', name: 'Nota' },
            { data: 'NumeroFactura', name: 'NumeroFactura' },
        ],
        columnDefs: [
            { "className": "text-center", "targets": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12] },
            {
                render: function (data, type, row) {
                    //return data +' ('+ row[3]+')';
                    return '<div class="text-right" height="100%"><div class="checkbox text-right"><label><input type="checkbox" name="optionsCheckboxes"></label></div></div>';
                },
                targets: 0
            },
            {
                render: function (data, type, row) {
                    //return data +' ('+ row[3]+')';
                    return row.Total + ' ' + row.Moneda;
                },
                targets: 6
            },
            {
                render: function (data, type, row) {
                    //return data +' ('+ row[3]+')';
                    return '<div class="text-center"><a href="/factura/proveedor/formulario/' + row.IdComprobante + '" row-id="' + row.IdComprobante + '">' +
                        '<button class="btn btn-simple btn-info btn-icon edit" rel="tooltip" title="Ver/Editar" data-placement="left"><i class="material-icons">visibility</i></button></a>' +
                        '</div>';
                },
                targets: 12
            }
        ],
    });
    datatable.on('click', '.edit', function (event) {
        var $tr = $(this).closest('tr');
        var data = datatable.row($tr).data();
        console.log("click edit", event);
        var row_id = $tr.find("a").attr('row-id');
        var nav = ['/factura/proveedor/formulario', row_id];
        oFacturaBuscarComponent.navigate(nav);
        event.preventDefault();
    });
}
var _a, _b, _c;
//# sourceMappingURL=facturaproveedorbuscar.component.js.map

/***/ }),

/***/ "../../../../../src/app/factura/proveedor/formulario/facturaproveedorformulario.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-12\">\r\n        <div class=\"card\">\r\n          <form method=\"#\" action=\"#\">\r\n            <div class=\"card-header card-header-text\" data-background-color=\"blue\">\r\n              <h4 class=\"card-title\">Comprobante de Pago</h4>\r\n            </div>\r\n            <div class=\"card-content\" id=\"secCabecera\">\r\n              <div class=\"card-header\">\r\n                <h4 class=\"card-title\">Comprobante de Pago Cabecera</h4>\r\n              </div>\r\n              <div class=\"card-content\">\r\n                <div class=\"row\">\r\n                  <div class=\"col-sm-8 col-sm-offset-2\">\r\n                    <div class=\"row\">\r\n                      <div class=\"col-sm-10\">\r\n                        <div class=\"form-group label-floating\">\r\n                          <label class=\"control-label\">RUC Cliente <span class=\"star\">*</span>\r\n                          </label>\r\n                          <input name=\"txtRucCliente\" type=\"text\" readonly=\"true\" value=\"PE20600323980\" class=\"form-control\">\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"col-sm-2\">\r\n                        <button data-toggle=\"modal\" data-target=\"#mdlBuscarCliente\" class=\"btn btn-fill btn-default\" [disabled]=\"toggleButton\">Buscar</button>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                  <div class=\"col-sm-8 col-sm-offset-2\">\r\n                    <div class=\"form-group label-floating\">\r\n                      <label class=\"control-label\">Razón Social Cliente <span class=\"star\">*</span>\r\n                      </label>\r\n                      <input name=\"txtRazonSocialCliente\" type=\"text\" readonly=\"true\" value=\"CENTENARIO RETAIL S.A.C.\" class=\"form-control\">\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"card-content\" id=\"secFactura\">\r\n              <div class=\"card-header\">\r\n                <h4 class=\"card-title\">Comprobante de Pago Cabecera</h4>\r\n              </div>\r\n              <div class=\"card-content\">\r\n                <div class=\"row\">\r\n                  <div class=\"col-sm-4\">\r\n                    <div class=\"form-group label-floating\">\r\n                      <label class=\"control-label\">No. Comprobante de Pago <span class=\"star\">*</span>\r\n                      </label>\r\n                      <input name=\"txt1\" [(ngModel)]=\"factura.nocomprobantepago\" type=\"text\" [disabled]=\"toggleButton\" class=\"form-control\">\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-sm-4\">\r\n                    <div class=\"form-group label-floating\">\r\n                      <label class=\"control-label\">RUC Cliente <span class=\"star\">*</span>\r\n                      </label>\r\n                      <input name=\"txt2\" [(ngModel)]=\"factura.ruccliente\" type=\"text\" [disabled]=\"toggleButton\" class=\"form-control\">\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-sm-4\">\r\n                    <div class=\"form-group label-floating\">\r\n                      <label class=\"control-label\">Razón Social del Cliente <span class=\"star\">*</span>\r\n                      </label>\r\n                      <input name=\"txt3\" [(ngModel)]=\"factura.cliente\" type=\"text\" [disabled]=\"toggleButton\" class=\"form-control\">\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                  <div class=\"col-sm-4\">\r\n                    <div class=\"form-group label-floating\">\r\n                      <label class=\"control-label\">Fecha Emisión <span class=\"star\">*</span>\r\n                      </label>\r\n                      <input name=\"txt4\" [(ngModel)]=\"factura.fechaemision\" id=\"txtFechaEmision\" datepicker type=\"text\" [disabled]=\"toggleButton\"\r\n                        class=\"form-control\">\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-sm-4\">\r\n                    <div class=\"form-group label-floating\">\r\n                      <label class=\"control-label\">Tipo Documento <span class=\"star\">*</span>\r\n                      </label>\r\n                      <select name=\"cbo1\" class=\"form-control\">\r\n                        <option disabled=\"\"></option>\r\n                        <option value=\"Factura\" selected> Factura </option>\r\n                      </select>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                  <div class=\"col-sm-4\">\r\n                    <div class=\"form-group label-floating\">\r\n                      <label class=\"control-label\">Moneda\r\n                          </label>\r\n                      <select name=\"cbo2\" [(ngModel)]=\"factura.moneda\" class=\"form-control\">\r\n                            <option disabled=\"\" selected=\"\"></option>\r\n                            <option value=\"PEN\"> PEN </option>\r\n                            <option value=\"USD\"> USD </option>\r\n                          </select>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-sm-4\">\r\n                    <div class=\"form-group label-floating\">\r\n                      <label class=\"control-label\">SubTotal \r\n                      </label>\r\n                      <input name=\"txt5\" [(ngModel)]=\"factura.subtotal\" type=\"text\" [disabled]=\"toggleButton\" class=\"form-control\">\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-sm-4\">\r\n                    <div class=\"form-group label-floating\">\r\n                      <label class=\"control-label\">Total Descuento \r\n                      </label>\r\n                      <input name=\"txt6\" [(ngModel)]=\"factura.dsctomonto\" type=\"text\" [disabled]=\"toggleButton\" class=\"form-control\">\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"card-header\">\r\n                <h4 class=\"card-title\">Tipo de Impuesto</h4>\r\n                <small>El impuesto 1 se calcula por defecto al 18%</small>\r\n              </div>\r\n              <div class=\"card-content\">\r\n                <div class=\"row\">\r\n                  <div class=\"col-sm-4\">\r\n                    <div class=\"form-group label-floating\">\r\n                      <label class=\"control-label\">Impuesto 1 <span class=\"star\">*</span>\r\n                      </label>\r\n                      <input name=\"txt7\" type=\"text\" [disabled]=\"toggleButton\" class=\"form-control\">\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-sm-4\">\r\n                    <div class=\"form-group label-floating\">\r\n                      <label class=\"control-label\">Impuesto 2 \r\n                      </label>\r\n                      <input name=\"txt8\" type=\"text\" [disabled]=\"toggleButton\" class=\"form-control\">\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-sm-4\">\r\n                    <div class=\"form-group label-floating\">\r\n                      <label class=\"control-label\">Impuesto 3\r\n                      </label>\r\n                      <input name=\"txt9\" type=\"text\" [disabled]=\"toggleButton\" class=\"form-control\">\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                  <div class=\"col-sm-4\">\r\n                    <div class=\"form-group label-floating\">\r\n                      <label class=\"control-label\">Importe Total <span class=\"star\">*</span>\r\n                      </label>\r\n                      <input name=\"txt10\" type=\"text\" [disabled]=\"toggleButton\" class=\"form-control\">\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-sm-4\">\r\n                    <div class=\"form-group label-floating\">\r\n                      <label class=\"control-label\">Importe Referencial\r\n                      </label>\r\n                      <input name=\"txt11\" type=\"text\" [disabled]=\"toggleButton\" class=\"form-control\">\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-sm-4\">\r\n                    <div class=\"form-group label-floating\">\r\n                      <label class=\"control-label\">Observaciones\r\n                      </label>\r\n                      <input name=\"txt12\" type=\"text\" [disabled]=\"toggleButton\" class=\"form-control\">\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"card\">\r\n                  <div class=\"card-header card-header-icon\" data-background-color=\"blue\">\r\n                    <i class=\"material-icons\">assignment</i>\r\n                  </div>\r\n                  <div class=\"card-content\">\r\n                    <h4 class=\"card-title\">Detalle</h4>\r\n                    <div class=\"toolbar\">\r\n                      <div class=\"row\">\r\n                        <div class=\"col-sm-12\">\r\n                          <nav class=\"navbar navbar-info\" role=\"navigation\">\r\n                            <div class=\"container-fluid\">\r\n                              <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\r\n                                <ul class=\"nav navbar-nav\">\r\n                                  <li id=\"btnAgregarItemOC\"><a href=\"javascript:void()\" data-toggle=\"modal\" data-target=\"#mdlGuias\">Añadir Guía</a></li>\r\n                                  <li id=\"btnEliminarItemOC\"><a href=\"javascript:void()\">Eliminar</a></li>\r\n                                </ul>\r\n                              </div>\r\n                            </div>\r\n                          </nav>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"material-datatables table-responsive\" style=\"display:block\">\r\n                      <table id=\"dtArticulos\" class=\"table table-striped table-no-bordered table-hover\" cellspacing=\"0\" width=\"100%\" style=\"width:100%\">\r\n                        <thead>\r\n                          <tr>\r\n\r\n                            <th class=\"disabled-sorting text-right\">\r\n                              <div class=\"checkbox text-right\">\r\n                                <label><input type=\"checkbox\" name=\"optionsCheckboxes\" class=\"checkall\" ></label>\r\n                              </div>\r\n                            </th>\r\n                            <th>No. Item</th>\r\n                            <th>No. Guía</th>\r\n                            <th>No. Orden de Compra</th>\r\n                            <th>No. Item OC</th>\r\n                            <th>No. de Parte</th>\r\n                            <th>Descripción del Producto</th>\r\n                            <th>Precio Unitario Referencial</th>\r\n                            <th>Cantidad</th>\r\n                            <th>Importe Total Item</th>\r\n                            <th class=\"disabled-sorting\">Acciones</th>\r\n                          </tr>\r\n                        </thead>\r\n                      </table>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"card-footer\">\r\n              <button class=\"btn btn-fill btn-default pull-right\" routerLink=\"/factura/proveedor/buscar\">Salir</button>\r\n              <button type=\"button\" class=\"btn btn-fill btn-default pull-right\" (click)=\"registrarFactura($event)\" [disabled]=\"toggleButton\"\r\n                *ngIf=\"id==0 && step==1\">Registrar Factura</button>\r\n              <button class=\"btn btn-fill btn-default pull-right\" [disabled]=\"toggleButton\" routerLink=\"/factura/proveedor/buscar\" *ngIf=\"id>0 || step==2\">Enviar</button>\r\n              <button type=\"button\" class=\"btn btn-fill btn-default pull-right\" routerLink=\"/factura/proveedor/buscar\" [disabled]=\"toggleButton\"\r\n                *ngIf=\"id>0 || step==2\">Guardar</button>\r\n              <button (click)=\"habilitarEdicion($event)\" class=\"btn btn-fill btn-default pull-right\" *ngIf=\"id>0 || step==2\">Habilitar Edición</button>\r\n            </div>\r\n          </form>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div id=\"mdlBuscarCliente\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\">\r\n    <div class=\"modal-dialog modal-lg\" role=\"document\">\r\n      <div class=\"modal-content\">\r\n        <div class=\"modal-header\">\r\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\r\n          \r\n          <table>\r\n            <tr>\r\n              <td>\r\n                <div class=\"card-header card-header-icon\" data-background-color=\"blue\">\r\n                  <i class=\"material-icons\">assignment</i>\r\n                </div>\r\n              </td>\r\n              <td class=\"cell-title\"> \r\n                <div class=\"card-content\">\r\n                  <h4 class=\"card-title modal-title\">Buscar Cliente</h4>\r\n                  \r\n                </div>\r\n              </td>\r\n            </tr>\r\n          </table>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"form-group label-floating\">\r\n                <label class=\"control-label\">Nombre de Compañía</label>\r\n                <input type=\"text\" id=\"txtBuscarNroOC\" name=\"txtBuscarNroOC\" class=\"form-control\" value=\"\" [disabled]=\"toggleButton\">\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-1\">\r\n              <div class=\"form-group label-floating\">\r\n                <label class=\"control-label\"></label>\r\n                <select name=\"cmbPais\" class=\"form-control\" [disabled]=\"toggleButton\">\r\n                 <option Value=\"PE\">PE</option>\r\n               </select>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-sm-5\">\r\n              <div class=\"form-group label-floating\">\r\n                <label class=\"control-label\">Código</label>\r\n                <input type=\"text\" id=\"txtBuscarCodCliente\" name=\"txtBuscarCodCliente\" class=\"form-control\" value=\"\" [disabled]=\"toggleButton\">\r\n              </div>\r\n            </div>\r\n            <div class=\"col-sm-2\">\r\n              <div class=\"form-group label-floating\">\r\n                <label class=\"control-label\"></label>\r\n                <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Buscar</button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"material-datatables table-responsive\">\r\n                <table id=\"dtBuscarCliente\" class=\"table table-striped table-no-bordered table-hover\" cellspacing=\"0\" width=\"100%\" style=\"width:100%\">\r\n                  <thead>\r\n                    <tr>\r\n                      <th class=\"disabled-sorting text-right\">\r\n\r\n                      </th>\r\n                      <th style=\"width:50%\">Nombre de Compañía</th>\r\n                      <th style=\"width:50%\">Código</th>\r\n                    </tr>\r\n                  </thead>\r\n                </table>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"modal-footer\">\r\n          <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Seleccionar</button>\r\n          <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Cerrar</button>\r\n        </div>\r\n      </div>\r\n      <!-- /.modal-content -->\r\n    </div>\r\n    <!-- /.modal-dialog -->\r\n  </div>\r\n  <div id=\"mdlGuias\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\">\r\n    <div class=\"modal-dialog modal-lg\" role=\"document\">\r\n      <div class=\"modal-content\">\r\n        <div class=\"modal-header\">\r\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\r\n          \r\n          <table>\r\n            <tr>\r\n              <td>\r\n                <div class=\"card-header card-header-icon\" data-background-color=\"blue\">\r\n                  <i class=\"material-icons\">assignment</i>\r\n                </div>\r\n              </td>\r\n              <td class=\"cell-title\"> \r\n                <div class=\"card-content\">\r\n                  <h4 class=\"card-title modal-title\">Buscar Guía</h4>\r\n                  \r\n                </div>\r\n              </td>\r\n            </tr>\r\n          </table>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-6\">\r\n              <div class=\"form-group label-floating\">\r\n                <label class=\"control-label\">Nro. Guía</label>\r\n                <input type=\"text\" id=\"txtBuscarNroOC\" name=\"txtBuscarNroOC\" class=\"form-control\" value=\"\" [disabled]=\"toggleButton\">\r\n              </div>\r\n            </div>\r\n            <div class=\"col-sm-6\">\r\n              <div class=\"form-group label-floating\">\r\n                <label class=\"control-label\">Estado</label>\r\n                <select name=\"cmbBuscarEstado\" id=\"cmbBuscarEstado\" class=\"form-control\" [disabled]=\"toggleButton\">\r\n                  <option Value=\"Activa\">Activa</option>\r\n                  <option Value=\"Facturada Parcial\">Facturada Parcial</option>\r\n                </select>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-5\">\r\n              <div class=\"form-group label-floating\">\r\n                <label class=\"control-label\">Emitida/Enviada después de</label>\r\n                <input type=\"text\" id=\"txtGuiaEmitidaDesde\" name=\"txtGuiaEmitidaDesde\" datepicker class=\"form-control\" value=\"\" [disabled]=\"toggleButton\">\r\n              </div>\r\n            </div>\r\n            <div class=\"col-sm-5\">\r\n              <div class=\"form-group label-floating\">\r\n                <label class=\"control-label\">Emitida/Enviada antes de</label>\r\n                <input type=\"text\" id=\"txtGuiaEmitidaHasta\" name=\"txtGuiaEmitidaHasta\" datepicker class=\"form-control\" value=\"\" [disabled]=\"toggleButton\">\r\n              </div>\r\n            </div>\r\n            <div class=\"col-sm-2\">\r\n              <div class=\"form-group label-floating\">\r\n                <label class=\"control-label\"></label>\r\n                <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Buscar</button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"material-datatables table-responsive\">\r\n                <table id=\"dtBuscarGuia\" class=\"table table-striped table-no-bordered table-hover\" cellspacing=\"0\" width=\"100%\" style=\"width:100%\">\r\n                  <thead>\r\n                    <tr>\r\n             \r\n                      <th class=\"disabled-sorting text-right\">\r\n                        <div class=\"checkbox text-right\">\r\n                          <label><input type=\"checkbox\" name=\"optionsCheckboxes\" class=\"checkall\" ></label>\r\n                        </div>\r\n                      </th>\r\n\r\n                      <th>N° Guía</th>\r\n                      <th>Estado (proveedor/cliente)</th>\r\n                      <th>Proveedor</th>\r\n                      <th>Fecha de Emisión</th>\r\n                      <th>Fecha de Inicio de Traslado</th>\r\n                      <th>Fecha Probable de Arribo</th>\r\n                    </tr>\r\n                  </thead>\r\n\r\n\r\n                </table>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"modal-footer\">\r\n          <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Añadir</button>\r\n          <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Cerrar</button>\r\n        </div>\r\n      </div>\r\n      <!-- /.modal-content -->\r\n    </div>\r\n    <!-- /.modal-dialog -->\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/factura/proveedor/formulario/facturaproveedorformulario.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FacturaProveedorFormularioComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_model_factura__ = __webpack_require__("../../../../../src/app/model/factura.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_app_utils__ = __webpack_require__("../../../../../src/app/utils/app.utils.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_masterservice__ = __webpack_require__("../../../../../src/app/service/masterservice.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var oFacturaProveedorFormularioComponent;
var FacturaProveedorFormularioComponent = (function () {
    function FacturaProveedorFormularioComponent(router, route, _masterService) {
        this.router = router;
        this.route = route;
        this._masterService = _masterService;
        this.step = 1;
        this.id = 0;
        this.toggleButton = true;
        this.activatedRoute = route;
        this.listDetalleFactura = [];
        this.util = new __WEBPACK_IMPORTED_MODULE_3__utils_app_utils__["a" /* AppUtils */](this.router, this._masterService);
    }
    FacturaProveedorFormularioComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.factura = new __WEBPACK_IMPORTED_MODULE_2_app_model_factura__["a" /* Factura */]();
        this.activatedRoute.params.subscribe(function (params) {
            _this.id = params['id'];
        });
        if (this.id > 0) {
            this.toggleButton = true;
            $("#btnAgregarItemOC").addClass('disabled');
            $("#btnEliminarItemOC").addClass('disabled');
            $("#secCabecera").hide();
            $("#secFactura").show();
        }
        else {
            this.toggleButton = false;
            $("#secCabecera").show();
            $("#secFactura").hide();
        }
        if (this.id == 1) {
            this.factura = {
                id: 1,
                nocomprobantepago: "F003-00120347",
                cliente: "ALICORP S.A.A.",
                ruccliente: "20100055237",
                estado: "Recibidad / Publicada",
                fechaemision: "07/07/2017",
                guiasdespacho: "F003-00120347",
                ordencompraserviciocontrato: "4510875643",
                fechavencimiento: "",
                fecharecepcion: "",
                fecharegistro: "",
                documentoerp: "02416284",
                formapago: "",
                moneda: "USD",
                bienserviciodetraccion: "",
                condicionpago: "",
                subtotal: "USD 28,057.08",
                igv: "USD 5,050.27",
                total: "USD 33,107.35",
                totaltexto: "SON: TREINTA Y TRES MIL CIENTO SIETE CON 35/100 DOLARES AMERICANOS",
                tipopago: "",
                nrodocumento: "",
                banco: "",
                fechapago: "",
                monto: "",
                datospagomoneda: "",
                nrocheque: "",
                tipodescuento: "",
                nrocomprobante: "",
                dsctomonto: "",
                dsctomoneda: "",
                obscomprobantepago: "",
                obspagotipodescuento: "",
                obspagomonto: "",
                obspagomoneda: "",
            };
        }
        else if (this.id == 2) {
            this.factura = {
                id: 2,
                nocomprobantepago: "F086-00000120",
                cliente: "ALICORP S.A.A.",
                ruccliente: "20100055237",
                estado: "Visualizada / Programada de Pago",
                fechaemision: "17/07/2017",
                guiasdespacho: "",
                ordencompraserviciocontrato: "",
                fechavencimiento: "25/07/2017",
                fecharecepcion: "25/07/2017",
                fecharegistro: "25/07/2017",
                documentoerp: "02000016136",
                formapago: "Pagadero Inmediatamente",
                moneda: "PEN",
                bienserviciodetraccion: "",
                condicionpago: "",
                subtotal: "PEN 27,080.83",
                igv: "PEN 4,874.55",
                total: "PEN 31,955.38",
                totaltexto: "SON: TREINTA Y UN MIL NOVECIENTOS CINCUENTA Y CINCO CON 38/100 SOLES",
                tipopago: "",
                nrodocumento: "",
                banco: "",
                fechapago: "",
                monto: "",
                datospagomoneda: "",
                nrocheque: "",
                tipodescuento: "",
                nrocomprobante: "",
                dsctomonto: "",
                dsctomoneda: "",
                obscomprobantepago: "",
                obspagotipodescuento: "",
                obspagomonto: "",
                obspagomoneda: "",
            };
        }
        else if (this.id == 3) {
            this.factura = {
                id: 3,
                nocomprobantepago: "0001-00004320",
                cliente: "ALICORP S.A.A.",
                ruccliente: "20100055237",
                estado: "Visualizada / Pagada",
                fechaemision: "29/11/2016",
                guiasdespacho: "",
                ordencompraserviciocontrato: "",
                fechavencimiento: "17/02/2017",
                fecharecepcion: "03/01/2017",
                fecharegistro: "03/01/2017",
                documentoerp: "0200001946",
                formapago: "Crédito 45 días",
                moneda: "PEN",
                bienserviciodetraccion: "",
                condicionpago: "",
                subtotal: "PEN 127.12",
                igv: "PEN 22.88",
                total: "PEN 150.00",
                totaltexto: "SON: CIENTO CINCUENTA CON 00/100 DOLARES AMERICANOS",
                tipopago: "Pago sin descuentos",
                nrodocumento: "15000000495",
                banco: "",
                fechapago: "03/01/2017",
                monto: "-200.0000",
                datospagomoneda: "PEN",
                nrocheque: "",
                tipodescuento: "",
                nrocomprobante: "",
                dsctomonto: "0.00",
                dsctomoneda: "PEN",
                obscomprobantepago: "Los días centrales de pago son los Martes y Jueves",
                obspagotipodescuento: "",
                obspagomonto: "",
                obspagomoneda: "",
            };
        }
        this.listDetalleFactura = [
            {
                noitem: "1",
                noguia: "F003-00120347",
                nooc: "4510875643",
                noitemoc: "00010",
                noparte: "",
                descproducto: "ACEITE DE SOYA",
                preciounitreferencial: "988.9700",
                cantidad: "28370.0000",
                importetotalitem: "28,057.0800",
            },
        ];
        this.listBuscarGuia = [
            {
                id: 1,
                nroguia: '017-0002449',
                estado: 'Facturada / Facturada',
                proveedor: 'ASAP CONSULTING GROUP S.A.C.',
                fechaemision: '31/05/2010',
                fechainiciotraslado: '31/05/2010',
                fechaprobablearribo: '31/05/2010',
                documentoerp: '5045896541'
            },
            {
                id: 2,
                nroguia: '7878-766666666',
                estado: 'Recepción Total / Activa',
                proveedor: 'ASAP CONSULTING GROUP S.A.C.',
                fechaemision: '31/05/2010',
                fechainiciotraslado: '31/05/2010',
                fechaprobablearribo: '31/05/2010',
                documentoerp: '5045896542'
            },
            {
                id: 3,
                nroguia: '7878-766666666',
                estado: 'Anulada / Activa',
                proveedor: 'ASAP CONSULTING GROUP S.A.C.',
                fechaemision: '31/05/2010',
                fechainiciotraslado: '31/05/2010',
                fechaprobablearribo: '31/05/2010',
                documentoerp: '5045896543'
            },
            {
                id: 4,
                nroguia: '00-2010053101',
                estado: 'Activa / Activa',
                proveedor: 'FERREYROS',
                fechaemision: '31/05/2010',
                fechainiciotraslado: '31/05/2010',
                fechaprobablearribo: '31/05/2010',
                documentoerp: '5045896544'
            },
        ];
        this.listBuscarCliente = [
            {
                id: 1,
                nombre: "CENTENARIO RETAIL S.A.C.",
                ruc: "122565752",
                codigo: ""
            },
        ];
        oFacturaProveedorFormularioComponent = this;
    };
    FacturaProveedorFormularioComponent.prototype.ngAfterViewInit = function () {
        DatatableFunctions.ModalSettings();
        $("#txtFechaEmision").val(moment().format("MM/DD/YYYY"));
        $("#txtGuiaEmitidaDesde").val(moment().subtract(7, 'd').format("MM/DD/YYYY"));
        $("#txtGuiaEmitidaHasta").val(moment().format("MM/DD/YYYY"));
        $("#txtFechaEmision").keydown();
        $("#txtGuiaEmitidaDesde").keydown();
        $("#txtGuiaEmitidaHasta").keydown();
        cargarGuiasDT();
        cargarBuscarGuiaDT();
        cargarBuscarClienteDT();
        DatatableFunctions.registerCheckAll();
    };
    FacturaProveedorFormularioComponent.prototype.ngOnChanges = function (changes) {
    };
    FacturaProveedorFormularioComponent.prototype.registrarFactura = function (e) {
        $("#secCabecera").hide();
        $("#secFactura").show();
        this.step = 2;
    };
    FacturaProveedorFormularioComponent.prototype.habilitarEdicion = function (e) {
        this.toggleButton = false;
        $("#btnAgregarItemOC").removeClass('disabled');
        $("#btnEliminarItemOC").removeClass('disabled');
    };
    return FacturaProveedorFormularioComponent;
}());
FacturaProveedorFormularioComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'facturaproveedorformulario-cmp',
        template: __webpack_require__("../../../../../src/app/factura/proveedor/formulario/facturaproveedorformulario.component.html"),
        providers: [__WEBPACK_IMPORTED_MODULE_4__service_masterservice__["a" /* MasterService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__service_masterservice__["a" /* MasterService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__service_masterservice__["a" /* MasterService */]) === "function" && _c || Object])
], FacturaProveedorFormularioComponent);

function cargarBuscarClienteDT() {
    var datatable = $('#dtBuscarCliente').on('init.dt', function (e, settings, json) {
        DatatableFunctions.initDatatable(e, settings, json, datatable);
    }).DataTable({
        /* ajax: {
           "url": "https://jsonplaceholder.typicode.com/posts",
           "dataSrc": ""
         },*/
        "ajax": function (data, callback, settings) {
            console.log(oFacturaProveedorFormularioComponent);
            var result = {
                data: oFacturaProveedorFormularioComponent.listBuscarCliente
            };
            callback(result);
        },
        columns: [
            { data: 'id' },
            { data: 'nombre' },
            { data: 'ruc' },
        ],
        columnDefs: [
            { "className": "text-center", "targets": [1, 2] },
            {
                render: function (data, type, row) {
                    return '<div class="text-right" height="100%"><div class="checkbox text-right"><label><input type="checkbox" name="optionsCheckboxes"></label></div></div>';
                },
                targets: 0
            },
        ]
    });
}
function cargarBuscarGuiaDT() {
    var datatable = $('#dtBuscarGuia').on('init.dt', function (e, settings, json) {
        DatatableFunctions.initDatatable(e, settings, json, datatable);
    }).DataTable({
        /* ajax: {
           "url": "https://jsonplaceholder.typicode.com/posts",
           "dataSrc": ""
         },*/
        "ajax": function (data, callback, settings) {
            var result = {
                data: oFacturaProveedorFormularioComponent.listBuscarGuia
            };
            callback(result);
        },
        columns: [
            { data: 'nroguia' },
            { data: 'nroguia' },
            { data: 'estado' },
            { data: 'proveedor' },
            { data: 'fechaemision' },
            { data: 'fechainiciotraslado' },
            { data: 'fechaprobablearribo' },
        ],
        columnDefs: [
            { "className": "text-center", "targets": [0, 1, 2, 3, 4, 5, 6] },
            {
                render: function (data, type, row) {
                    return '<div class="text-right" height="100%"><div class="checkbox text-right"><label><input type="checkbox" name="optionsCheckboxes"></label></div></div>';
                },
                targets: 0
            },
        ]
    });
}
function cargarGuiasDT() {
    var datatable = $('#dtArticulos').on('init.dt', function (e, settings, json) {
        DatatableFunctions.initDatatable(e, settings, json, datatable);
    }).DataTable({
        /* ajax: {
           "url": "https://jsonplaceholder.typicode.com/posts",
           "dataSrc": ""
         },*/
        "ajax": function (data, callback, settings) {
            var result = {
                data: oFacturaProveedorFormularioComponent.listDetalleFactura
            };
            callback(result);
        },
        columns: [
            { data: 'noitem' },
            { data: 'noitem' },
            { data: 'noguia' },
            { data: 'nooc' },
            { data: 'noitemoc' },
            { data: 'noparte' },
            { data: 'descproducto' },
            { data: 'preciounitreferencial' },
            { data: 'cantidad' },
            { data: 'importetotalitem' },
            { data: 'noitem' },
        ],
        columnDefs: [
            { "className": "text-center", "targets": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] },
            {
                render: function (data, type, row) {
                    //return data +' ('+ row[3]+')';
                    //return '<div class="checkbox"><label><input type="checkbox" name="optionsCheckboxes"></label></div>';
                    return '<div class="text-right" height="100%"><div class="checkbox text-right"><label><input type="checkbox" name="optionsCheckboxes"></label></div></div>';
                },
                targets: 0
            },
            {
                render: function (data, type, row) {
                    //return data +' ('+ row[3]+')';
                    return '<a href="javascript:void(0)"><button class="btn btn-simple btn-info btn-icon visible" rel="tooltip" title="Ver/Editar" data-placement="left"><i class="material-icons">visibility</i></button></a>';
                },
                targets: 10
            }
        ]
    });
}
var _a, _b, _c;
//# sourceMappingURL=facturaproveedorformulario.component.js.map

/***/ }),

/***/ "../../../../../src/app/model/factura.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Factura; });
/* unused harmony export DetalleFactura */
/* unused harmony export FacturaBuscar */
/* unused harmony export FacturaFiltros */
var Factura = (function () {
    function Factura() {
    }
    return Factura;
}());

var DetalleFactura = (function () {
    function DetalleFactura() {
    }
    return DetalleFactura;
}());

var FacturaBuscar = (function () {
    function FacturaBuscar() {
    }
    return FacturaBuscar;
}());

var FacturaFiltros = (function () {
    function FacturaFiltros() {
    }
    return FacturaFiltros;
}());

//# sourceMappingURL=factura.js.map

/***/ })

});
//# sourceMappingURL=factura.module.0.chunk.js.map