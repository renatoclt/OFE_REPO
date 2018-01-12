webpackJsonp(["guia.module"],{

/***/ "../../../../../src/app/guia/comprador/buscar/guiacompradorbuscar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-12\">\r\n                <div class=\"card\">\r\n                    <form method=\"#\" action=\"#\">\r\n                        <div class=\"card-header card-header-text\" data-background-color=\"blue\">\r\n                            <h4 class=\"card-title\">Buscar Guías</h4>\r\n                        </div>\r\n                        <div class=\"card-content\">\r\n                            <div class=\"row\">\r\n                                <div class=\"col-sm-4\">\r\n                                    <div class=\"form-group label-floating\">\r\n                                        <label class=\"control-label\">Número de Guía\r\n                                        </label>\r\n                                        <input name=\"nroguia\"  [(ngModel)]=\"filtro.nroguia\" type=\"text\" class=\"form-control\">\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-sm-4\">\r\n                                    <div class=\"form-group label-floating\">\r\n                                        <label class=\"control-label\">Número de OC\r\n                                    </label>\r\n                                        <input name=\"nrooc\"  [(ngModel)]=\"filtro.nrooc\" type=\"text\" class=\"form-control\">\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-sm-4\">\r\n                                    <div class=\"form-group label-floating\">\r\n                                        <label class=\"control-label\">Número de ERP\r\n                                    </label>\r\n                                        <input name=\"nroerp\"  [(ngModel)]=\"filtro.nroerp\" type=\"text\" class=\"form-control\">\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"row\">\r\n                                <div class=\"col-sm-4\">\r\n                                    <div class=\"form-group label-floating\">\r\n                                        <label class=\"control-label\">Fecha Emisión Del</label>\r\n                                        <input type=\"text\" [(ngModel)]=\"filtro.fechaemisioninicio\" name=\"fechaemisioninicio\" class=\"form-control\" datepicker />\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-sm-4\">\r\n                                    <div class=\"form-group label-floating\">\r\n                                        <label class=\"control-label\">al</label>\r\n                                        <input type=\"text\"  [(ngModel)]=\"filtro.fechaemisionfin\" name=\"fechaemisionfin\" class=\"form-control\" datepicker />\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-sm-4\">\r\n                                    <div class=\"form-group\">\r\n                                        <button class=\"btn btn-default\" (click)=\"clicked($event)\">Buscar</button>\r\n                                        <button class=\"btn btn-default\" (click)=\"limpiar($event)\">Limpiar</button>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <nav class=\"navbar navbar-info\" role=\"navigation\">\r\n                                <div class=\"container-fluid\">\r\n                                  <!--  <div class=\"navbar-header\">\r\n\r\n                                        <span class=\"navbar-brand\">Resultados</span>\r\n                                    </div>\r\n                                    <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\r\n                                        <ul class=\"nav navbar-nav\">\r\n\r\n                                        </ul>\r\n                                    </div>-->\r\n                                </div>\r\n                            </nav>\r\n                            <div class=\"material-datatables table-responsive\">\r\n                                <table id=\"dtResultados\" class=\"table table-striped table-no-bordered table-hover\" cellspacing=\"0\" width=\"100%\" style=\"width:100%\">\r\n                                    <thead>\r\n                                        <tr>\r\n                                            <th>N° Guía</th>\r\n                                            <th>N° ERP</th>     \r\n                                            <th>Estado (Proveedor/Cliente)</th>\r\n                                            <th>Organización Proveedora</th>\r\n                                            \r\n                                            <th>Fecha de Emisión</th>\r\n                                            <th>Fecha de Inicio de Traslado</th>\r\n                                            <th>Fecha Probable de Arribo</th>\r\n                                            <th class=\"disabled-sorting text-center\">Acciones</th>\r\n                                        </tr>\r\n                                    </thead>\r\n\r\n                                    \r\n                                </table>\r\n                            </div>\r\n                        </div>\r\n                    </form>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/guia/comprador/buscar/guiacompradorbuscar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GuiaCompradorBuscarComponent; });
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


var oGuiaBuscarComponent, datatable;
var GuiaCompradorBuscarComponent = (function () {
    function GuiaCompradorBuscarComponent(router, route) {
        this.router = router;
        this.route = route;
    }
    GuiaCompradorBuscarComponent.prototype.navigate = function (nav) {
        this.router.navigate(nav, { relativeTo: this.route });
    };
    GuiaCompradorBuscarComponent.prototype.validarfiltros = function () {
        if (this.filtro.fechaemisioninicio != null && this.filtro.fechaemisioninicio.toString() != "" && this.filtro.fechaemisionfin != null && this.filtro.fechaemisionfin.toString() != "") {
            var fechacreacioninicio = DatatableFunctions.ConvertStringToDatetime(oGuiaBuscarComponent.filtro.fechaemisioninicio);
            var fechacreacionfin = DatatableFunctions.ConvertStringToDatetime(oGuiaBuscarComponent.filtro.fechaemisionfin);
            var fechacreacioninicio_str = DatatableFunctions.FormatDatetimeForMicroService(fechacreacioninicio);
            var fechacreacionfin_str = DatatableFunctions.FormatDatetimeForMicroService(fechacreacionfin);
            if (fechacreacioninicio_str > fechacreacionfin_str) {
                swal({
                    text: "El rango de Fechas de emisión seleccionado no es correcto. Por favor corregir y volver a intentar!",
                    type: 'warning',
                    buttonsStyling: false,
                    confirmButtonClass: "btn btn-warning"
                });
                return false;
            }
        }
        return true;
    };
    GuiaCompradorBuscarComponent.prototype.clicked = function (event) {
        if (this.validarfiltros())
            datatable.ajax.reload();
        event.preventDefault();
    };
    GuiaCompradorBuscarComponent.prototype.limpiar = function (event) {
        this.filtroDefecto();
        setTimeout(function () {
            $("input").each(function () {
                if (!$(this).val() && $(this).val() == '')
                    $(this.parentElement).addClass("is-empty");
            });
        }, 200);
        event.preventDefault();
    };
    GuiaCompradorBuscarComponent.prototype.filtroDefecto = function () {
        var fechacreacioni = new Date();
        fechacreacioni.setMonth(fechacreacioni.getMonth() - 1);
        this.filtro = {
            nroguia: '',
            nrooc: '',
            nroerp: '',
            fechaemisioninicio: fechacreacioni,
            fechaemisionfin: new Date(),
        };
    };
    GuiaCompradorBuscarComponent.prototype.ngOnInit = function () {
        this.filtroDefecto();
        oGuiaBuscarComponent = this;
    };
    GuiaCompradorBuscarComponent.prototype.ngAfterViewInit = function () {
        cargarDataTable();
    };
    return GuiaCompradorBuscarComponent;
}());
GuiaCompradorBuscarComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'guiacompradorbuscar-cmp',
        template: __webpack_require__("../../../../../src/app/guia/comprador/buscar/guiacompradorbuscar.component.html"),
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object])
], GuiaCompradorBuscarComponent);

function cargarDataTable() {
    datatable = $('#dtResultados').DataTable({
        searching: false,
        serverSide: true,
        ajax: {
            beforeSend: function (request) {
                request.setRequestHeader("Authorization", 'Bearer ' + sessionStorage.getItem('token'));
                request.setRequestHeader("origen_datos", 'PEB2M');
            },
            url: "http://b2miningdata.com/api/msguialistar/v1/guias/",
            dataSrc: "data",
            data: function (d) {
                if (oGuiaBuscarComponent.filtro.nroguia != "") {
                    d.NumeroGuia = oGuiaBuscarComponent.filtro.nroguia;
                }
                if (oGuiaBuscarComponent.filtro.nrooc != "") {
                    d.NumeroOC = oGuiaBuscarComponent.filtro.nrooc;
                }
                if (oGuiaBuscarComponent.filtro.fechaemisioninicio) {
                    var fechaemisioninicio = DatatableFunctions.ConvertStringToDatetime(oGuiaBuscarComponent.filtro.fechaemisioninicio);
                    d.FechaEmision_inicio = DatatableFunctions.FormatDatetimeForMicroService(fechaemisioninicio);
                }
                if (oGuiaBuscarComponent.filtro.fechaemisionfin) {
                    var fechaemisionfin = DatatableFunctions.AddDayEndDatetime(DatatableFunctions.ConvertStringToDatetime(oGuiaBuscarComponent.filtro.fechaemisionfin));
                    d.FechaEmision_fin = DatatableFunctions.FormatDatetimeForMicroService(fechaemisionfin);
                }
                d.column_names = '[CodigoGuia,NumeroGuia,FechaEmision,FechaInicioTraslado,FechaEstimadaArribo,RazonSocialCliente,RazonSocialProveedor,Estado,DocumentoMaterial]';
            }
        },
        columns: [
            { data: 'NumeroGuia', name: 'NumeroGuia' },
            { data: 'DocumentoMaterial', name: 'DocumentoMaterial' },
            { data: 'Estado', name: 'Estado' },
            { data: 'RazonSocialProveedor', name: 'RazonSocialProveedor' },
            { data: 'FechaEmision', name: 'FechaEmision' },
            { data: 'FechaInicioTraslado', name: 'FechaInicioTraslado' },
            { data: 'FechaEstimadaArribo', name: 'FechaEstimadaArribo' },
            { data: 'NumeroGuia', name: 'NumeroGuia' },
        ],
        columnDefs: [
            { "className": "text-center", "targets": [0, 1, 2, 3, 4, 5, 6, 7] },
            {
                render: function (data, type, row) {
                    //return data +' ('+ row[3]+')';
                    return '<div class="text-center"><a href="/guia/comprador/formulario/' + row.CodigoGuia + '" row-id="' + row.CodigoGuia + '">' +
                        '<button class="btn btn-simple btn-info btn-icon edit" rel="tooltip" title="Ver/Editar" data-placement="left"><i class="material-icons">visibility</i></button></a>' +
                        '</div>';
                },
                targets: 7
            }
        ]
    });
    datatable.on('click', '.edit', function (event) {
        var $tr = $(this).closest('tr');
        var row_id = $tr.find("a").attr('row-id');
        var nav = ['/guia/comprador/formulario', row_id];
        oGuiaBuscarComponent.navigate(nav);
        event.preventDefault();
    });
}
var _a, _b;
//# sourceMappingURL=guiacompradorbuscar.component.js.map

/***/ }),

/***/ "../../../../../src/app/guia/comprador/formulario/guiacompradorformulario.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-12\">\r\n        <div class=\"card\">\r\n          <form method=\"#\" action=\"#\">\r\n            <div class=\"card-header card-header-text\" data-background-color=\"blue\">\r\n              <h4 class=\"card-title\">Guía</h4>\r\n            </div>\r\n            <div class=\"card-content\">\r\n              <div class=\"card-header\">\r\n                <h4 class=\"card-title\">Datos Generales</h4>\r\n              </div>\r\n              <div class=\"card-content\">\r\n                <div class=\"row\">\r\n                  <div class=\"col-sm-1\">\r\n\r\n                    <div class=\"form-group label-floating\">\r\n                      <label class=\"control-label\">N° Guía </label>\r\n                      <input type=\"text\"  name=\"nroguia1\" [disabled]=\"toggleButton\" [(ngModel)]=\"guia.nroguia1\" class=\"form-control\">\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class=\"col-sm-3\">\r\n\r\n                    <div class=\"form-group label-floating\">\r\n\r\n                      <input type=\"text\"  name=\"nroguia2\" [disabled]=\"toggleButton\" [(ngModel)]=\"guia.nroguia2\" class=\"form-control\">\r\n\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class=\"col-sm-4\">\r\n\r\n                    <div class=\"form-group label-floating\">\r\n                      <label class=\"control-label\">RUC Cliente \r\n                      </label>\r\n                      <input name=\"ruccliente\" type=\"text\" [disabled]=\"toggleButton\" [(ngModel)]=\"guia.ruccliente\" class=\"form-control\">\r\n\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-sm-4\">\r\n                    <div class=\"form-group label-floating\">\r\n                      <label class=\"control-label\">Razón Social Cliente \r\n                      </label>\r\n                      <input name=\"razonsocialcliente\" type=\"text\" [disabled]=\"toggleButton\" [(ngModel)]=\"guia.razonsocialcliente\" class=\"form-control\">\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                  <div class=\"col-sm-2\">\r\n                    <div class=\"form-group label-floating\">\r\n                      <label class=\"control-label\">RUC Proveedor \r\n                      </label>\r\n                      <input name=\"rucproveedor\" [disabled]=\"toggleButton\" type=\"text\" [(ngModel)]=\"guia.rucproveedor\" class=\"form-control\">\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-sm-2\">\r\n                    <div class=\"form-group label-floating\">\r\n                      <label class=\"control-label\">Organización Proveedora\r\n                      </label>\r\n                      <input name=\"razonsocialproveedor\" type=\"text\" [disabled]=\"toggleButton\" [(ngModel)]=\"guia.razonsocialproveedor\" class=\"form-control\">\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-sm-4\">\r\n                    <div class=\"form-group label-floating\">\r\n                      <label class=\"control-label\">Fecha de Emisión\r\n                      </label>\r\n                      <input name=\"fechaemision\" [(ngModel)]=\"guia.fechaemision\" datepicker disabled type=\"text\" class=\"form-control\">\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-sm-4\">\r\n                    <div class=\"form-group label-floating\">\r\n                      <label class=\"control-label\">Fecha de Inicio de Traslado\r\n                      </label>\r\n                      <input name=\"fechainiciotraslado\" [(ngModel)]=\"guia.fechainiciotraslado\" datepicker disabled  type=\"text\" class=\"form-control\">\r\n                    </div>\r\n                  </div>\r\n\r\n                </div>\r\n                <div class=\"row\">\r\n                  <div class=\"col-sm-4\">\r\n                    <div class=\"form-group label-floating\">\r\n                      <label class=\"control-label\">Fecha Probable Arribo \r\n                      </label>\r\n                      <input name=\"fechaprobablearribo\" [(ngModel)]=\"guia.fechaprobablearribo\" datepicker disabled type=\"text\" class=\"form-control\">\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-sm-4\">\r\n                    <div class=\"form-group label-floating\">\r\n                      <label class=\"control-label\">Motivo Guía \r\n                      </label>\r\n                      <select name=\"motivoguia\" class=\"form-control\" [(ngModel)]=\"guia.motivoguia\" [disabled]=\"toggleButton\">\r\n                        <option Value=\"\"></option>\r\n                        <option *ngFor=\"let opt of listMotivoGuiaCombo\" value=\"{{opt.valor}}\"> {{opt.desc}} </option>   \r\n                      </select>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-sm-4\">\r\n                    <div class=\"form-group label-floating\">\r\n                      <label class=\"control-label\">Número ERP de Documento Material \r\n                      </label>\r\n                      <input name=\"nroerpdocmaterial\" type=\"text\" [disabled]=\"toggleButton\" [(ngModel)]=\"guia.nroerpdocmaterial\" class=\"form-control\">\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                  <div class=\"col-sm-12\">\r\n                    <div class=\"form-group label-floating\">\r\n                      <label class=\"control-label\">Observaciones\r\n                      </label>\r\n                      <textarea name=\"observaciones\" [(ngModel)]=\"guia.observaciones\" class=\"form-control\" [disabled]=\"toggleButton\"></textarea>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"card-header\">\r\n                <h4 class=\"card-title\">Datos Transportista</h4>\r\n              </div>\r\n              <div class=\"card-content\">\r\n                <div class=\"row\">\r\n                  <div class=\"col-sm-4\">\r\n                    <div class=\"row\">\r\n                      <div class=\"col-sm-4 \">\r\n                        <div class=\"form-group label-floating\">\r\n                          <label class=\"control-label\">Tipo Documento</label>\r\n                          <select name=\"tipodoctransporte\" class=\"form-control\" [(ngModel)]=\"guia.tipodoctransporte\"  [disabled]=\"toggleButton\">\r\n                            <option Value=\"\"></option>\r\n                            <option *ngFor=\"let opt of listTipoDocIdentidad\" value=\"{{opt.valor}}\"> {{opt.desc}} </option>   \r\n                            \r\n                          </select>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"col-sm-8\">\r\n                        <div class=\"form-group label-floating\">\r\n                          <label class=\"control-label\">N° Documento</label>\r\n                          <input type=\"text\"  name=\"rucdnitransporte\" [(ngModel)]=\"guia.rucdnitransporte\" class=\"form-control\" [disabled]=\"toggleButton\">\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-sm-8\">\r\n                    <div class=\"form-group label-floating\">\r\n                      <label class=\"control-label\">Razon Social / Nombre\r\n                      </label>\r\n                      <input name=\"razonsocialnombretransporte\"  [(ngModel)]=\"guia.razonsocialnombretransporte\" type=\"text\" class=\"form-control\"\r\n                        [disabled]=\"toggleButton\">\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                  <div class=\"col-sm-4\">\r\n                    <div class=\"form-group label-floating\">\r\n                      <label class=\"control-label\">N° Placa</label>\r\n                      <input type=\"text\"  name=\"placatransporte\" class=\"form-control\" [(ngModel)]=\"guia.placatransporte\" [disabled]=\"toggleButton\">\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-sm-8\">\r\n                    <div class=\"form-group label-floating\">\r\n                      <label class=\"control-label\">Dirección\r\n                      </label>\r\n                      <input name=\"direcciontransporte\"  type=\"text\" class=\"form-control\" [(ngModel)]=\"guia.direcciontransporte\" [disabled]=\"toggleButton\">\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                  <div class=\"col-sm-4\">\r\n                    <div class=\"form-group label-floating\">\r\n                      <label class=\"control-label\">Código de Reg. MTC</label>\r\n                      <input type=\"text\"  name=\"codigomtctransporte\" class=\"form-control\" [(ngModel)]=\"guia.codigomtctransporte\" [disabled]=\"toggleButton\">\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-sm-8\">\r\n                    <div class=\"form-group label-floating\">\r\n                      <label class=\"control-label\">Tipo Transporte\r\n                      </label>\r\n                      <select name=\"tipotransporte\"  [(ngModel)]=\"guia.tipotransporte\" class=\"form-control\" [disabled]=\"toggleButton\">\r\n                        <option Value=\"\"></option>\r\n                        <option *ngFor=\"let opt of listTransporteGuiaCombo\" value=\"{{opt.valor}}\"> {{opt.desc}} </option>   \r\n                      </select>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"card-header\">\r\n                <h4 class=\"card-title\">Datos de la Carga</h4>\r\n              </div>\r\n              <div class=\"card-content\">\r\n                <div class=\"row\">\r\n                  <div class=\"col-sm-6\">\r\n                    <div class=\"form-group label-floating\">\r\n                      <label class=\"control-label\">Punto Partida</label>\r\n                      <input type=\"text\"  name=\"puntopartida\" class=\"form-control\" [(ngModel)]=\"guia.puntopartida\" [disabled]=\"toggleButton\">\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-sm-6\">\r\n                    <div class=\"form-group label-floating\">\r\n                      <label class=\"control-label\">Punto LLegada</label>\r\n                      <input type=\"text\"  name=\"puntollegada\" class=\"form-control\" [(ngModel)]=\"guia.puntollegada\" [disabled]=\"toggleButton\">\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                  <div class=\"col-sm-4\">\r\n                    <div class=\"form-group label-floating\">\r\n                      <label class=\"control-label\">Almancén Destino</label>\r\n                      <input type=\"text\"  name=\"alamcendestino\" [(ngModel)]=\"guia.alamcendestino\" class=\"form-control\" [disabled]=\"toggleButton\">\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-sm-4\">\r\n                    <div class=\"form-group label-floating\">\r\n                      <label class=\"control-label\">Total Bultos</label>\r\n                      <input type=\"text\"  name=\"totalbultos\" [(ngModel)]=\"guia.totalbultos\" class=\"form-control\" [disabled]=\"toggleButton\">\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-sm-4\">\r\n                    <div class=\"row\">\r\n                      <div class=\"col-sm-9\">\r\n                        <div class=\"form-group label-floating\">\r\n                          <label class=\"control-label\">Total Volúmen</label>\r\n                          <input type=\"text\"  name=\"totalvolumen\" [(ngModel)]=\"guia.totalvolumen\" class=\"form-control\" [disabled]=\"toggleButton\">\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"col-sm-3\">\r\n                        <div class=\"form-group label-floating\">\r\n                          <label class=\"control-label\"></label>\r\n                          <select name=\"totalvolumenund\" [(ngModel)]=\"guia.totalvolumenund\" class=\"form-control\" [disabled]=\"toggleButton\">\r\n                            <option Value=\"\"></option>\r\n                            <option *ngFor=\"let opt of listUnidadMedidaCombo\" value=\"{{opt.valor}}\"> {{opt.desc}} </option>   \r\n                          </select>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                  <div class=\"col-sm-4\">\r\n                    <div class=\"row\">\r\n                      <div class=\"col-sm-9\">\r\n                        <div class=\"form-group label-floating\">\r\n                          <label class=\"control-label\">Total Peso Bruto</label>\r\n                          <input type=\"text\"  name=\"totalpesobruto\" [(ngModel)]=\"guia.totalpesobruto\" class=\"form-control\"\r\n                            [disabled]=\"toggleButton\">\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"col-sm-3\">\r\n                        <div class=\"form-group label-floating\">\r\n                          <label class=\"control-label\"></label>\r\n                          <select name=\"totalpesobrutound\"  [(ngModel)]=\"guia.totalpesobrutound\" class=\"form-control\" [disabled]=\"toggleButton\">\r\n                            <option Value=\"\"></option>\r\n                            <option *ngFor=\"let opt of listUnidadMedidaCombo\" value=\"{{opt.valor}}\"> {{opt.desc}} </option>   \r\n                          </select>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-sm-4\">\r\n                    <div class=\"row\">\r\n                      <div class=\"col-sm-9\">\r\n                        <div class=\"form-group label-floating\">\r\n                          <label class=\"control-label\">Tara</label>\r\n                          <input type=\"text\" name=\"tara\" [(ngModel)]=\"guia.tara\" class=\"form-control\" [disabled]=\"toggleButton\">\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"col-sm-3\">\r\n                        <div class=\"form-group label-floating\">\r\n                          <label class=\"control-label\"></label>\r\n                          <select name=\"taraund\" [(ngModel)]=\"guia.taraund\"  class=\"form-control\" [disabled]=\"toggleButton\">\r\n                            <option Value=\"\"></option>\r\n                            <option *ngFor=\"let opt of listUnidadMedidaCombo\" value=\"{{opt.valor}}\"> {{opt.desc}} </option>   \r\n                          </select>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-sm-4\">\r\n                    <div class=\"row\">\r\n                      <div class=\"col-sm-9\">\r\n                        <div class=\"form-group label-floating\">\r\n                          <label class=\"control-label\">Total Peso Neto</label>\r\n                          <input type=\"text\" name=\"totalpesoneto\" [(ngModel)]=\"guia.totalpesoneto\" class=\"form-control\" [disabled]=\"toggleButton\">\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"col-sm-3\">\r\n                        <div class=\"form-group label-floating\">\r\n                          <label class=\"control-label\"></label>\r\n                          <select name=\"totalpesonetound\" [(ngModel)]=\"guia.totalpesonetound\"  class=\"form-control\" [disabled]=\"toggleButton\">\r\n                            <option Value=\"\"></option>\r\n                            <option *ngFor=\"let opt of listUnidadMedidaCombo\" value=\"{{opt.valor}}\"> {{opt.desc}} </option>   \r\n                          </select>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"card\">\r\n                <div class=\"card-header card-header-icon\" data-background-color=\"blue\">\r\n                  <i class=\"material-icons\">assignment</i>\r\n                </div>\r\n                <div class=\"card-content\">\r\n                  <h4 class=\"card-title\">Detalle de Artículos</h4>\r\n\r\n                  <div class=\"material-datatables table-responsive\" style=\"display:block\">\r\n                    <table id=\"dtArticulos\" class=\"table table-striped table-no-bordered table-hover\" cellspacing=\"0\" width=\"100%\" style=\"width:100%\">\r\n                      <thead>\r\n                        <tr>\r\n\r\n                          <th>N° Item</th>\r\n                          <th>N° OC</th>\r\n                          <th>N° Item OC</th>\r\n                          <th>Código de Producto</th>\r\n                          <th>Descripción del Producto</th>\r\n                          <th>Cantidad Pedida</th>\r\n                          <th>Cantidad Aceptada</th>\r\n                          <th>Cantidad Registrada Proveedor</th>\r\n                          <th>Unidad de Medida</th>\r\n                          <th>Peso Neto</th>\r\n                          <th>Código de Destino</th>\r\n                          <th>Destino</th>\r\n                        </tr>\r\n                      </thead>\r\n                    </table>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"row\">\r\n                <div class=\"col-md-12\">\r\n                  <div class=\"card\">\r\n                    <div class=\"card-header card-header-icon\" data-background-color=\"blue\">\r\n                      <i class=\"material-icons\">assignment</i>\r\n                    </div>\r\n                    <div class=\"card-content\">\r\n                      <h4 class=\"card-title\">Archivos Adjuntos</h4>\r\n                    \r\n                      <div class=\"material-datatables table-responsive\">\r\n                        <table id=\"dtArchivos\" class=\"table table-striped table-no-bordered table-hover\" cellspacing=\"0\" width=\"100%\" style=\"width:100%\">\r\n                          <thead>\r\n                            <tr>\r\n                             \r\n                              <th width=\"20%\">Nombre</th>\r\n                              <th width=\"60%\">Descripción</th>\r\n                              <th class=\"disabled-sorting text-center\" width=\"20%\">Acciones</th>\r\n                            </tr>\r\n                          </thead>\r\n\r\n\r\n                        </table>\r\n                      </div>\r\n                    </div>\r\n                    <!-- end content-->\r\n                  </div>\r\n                  <!--  end card  -->\r\n                </div>\r\n                <!-- end col-md-12 -->\r\n              </div>\r\n            </div>\r\n            <div class=\"card-footer\">\r\n              <button class=\"btn btn-fill btn-default pull-right\" routerLink=\"/guia/comprador/buscar\">Salir</button>\r\n              <button class=\"btn btn-fill btn-default pull-right\">Imprimir</button>\r\n            </div>\r\n          </form>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/guia/comprador/formulario/guiacompradorformulario.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GuiaCompradorFormularioComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_model_guia__ = __webpack_require__("../../../../../src/app/model/guia.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_masterservice__ = __webpack_require__("../../../../../src/app/service/masterservice.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_service_guiaservice__ = __webpack_require__("../../../../../src/app/service/guiaservice.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_app_utils__ = __webpack_require__("../../../../../src/app/utils/app.utils.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var oGuiaCompradorFormularioComponent, dtArticulos, dtArchivos;
var GuiaCompradorFormularioComponent = (function () {
    function GuiaCompradorFormularioComponent(activatedRoute, router, _masterService, _dataService) {
        this.router = router;
        this._masterService = _masterService;
        this._dataService = _dataService;
        this.id = '0';
        this.toggleButton = true;
        this.activatedRoute = activatedRoute;
        this.util = new __WEBPACK_IMPORTED_MODULE_5__utils_app_utils__["a" /* AppUtils */](this.router, this._masterService);
        this.guia = new __WEBPACK_IMPORTED_MODULE_2_app_model_guia__["b" /* Guia */];
    }
    GuiaCompradorFormularioComponent.prototype.ngOnInit = function () {
        var _this = this;
        oGuiaCompradorFormularioComponent = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.id = params['id'];
        });
        if (this.id != '0') {
            this.toggleButton = true;
            $("#btnAgregarItemOC").addClass('disabled');
            $("#btnEliminarItemOC").addClass('disabled');
        }
        else {
            this.toggleButton = false;
        }
        this.guia = new __WEBPACK_IMPORTED_MODULE_2_app_model_guia__["b" /* Guia */]();
        this.util.listUnidadMedida(function (data) {
            oGuiaCompradorFormularioComponent.listUnidadMedidaCombo = data;
        });
        this.util.listMotivoGuia(function (data) {
            oGuiaCompradorFormularioComponent.listMotivoGuiaCombo = data;
        });
        this.util.listTransporteGuia(function (data) {
            oGuiaCompradorFormularioComponent.listTransporteGuiaCombo = data;
        });
        this.util.listTipoDocIdentidad(function (data) {
            oGuiaCompradorFormularioComponent.listTipoDocIdentidad = data;
        });
    };
    GuiaCompradorFormularioComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this._dataService
            .obtener(this.id)
            .subscribe(function (p) {
            _this.guia = p;
            console.log(_this.guia);
            setTimeout(function () {
                $("input").each(function () {
                    $(this).keydown();
                    if (!$(this).val() && $(this).val() == '')
                        $(this.parentElement).addClass("is-empty");
                });
                $("select").each(function () {
                    $(this).keydown();
                    if (!$(this).val() && $(this).val() == '')
                        $(this.parentElement).addClass("is-empty");
                });
                $("textarea").each(function () {
                    $(this).keydown();
                    if (!$(this).val() && $(this).val() == '')
                        $(this.parentElement).addClass("is-empty");
                });
                dtArticulos.ajax.reload();
                dtArchivos.ajax.reload();
            }, 100);
        }, function (e) { return console.log(e); }, function () { });
        dtArchivos = $('#dtArchivos').on('draw.dt', function (e, settings, json) {
            DatatableFunctions.initDatatable(e, settings, json, dtArchivos);
        }).DataTable({
            ajax: function (data, callback, settings) {
                var result = {
                    data: oGuiaCompradorFormularioComponent.guia.docadjuntos
                };
                callback(result);
            },
            columns: [
                { data: 'nombre' },
                { data: 'descripcion' },
                { data: 'id' },
            ],
            columnDefs: [
                { "className": "text-center", "targets": [0, 1, 2] },
                {
                    render: function (data, type, row) {
                        return '<a class="editar" href="javascript:void(0);" row-id="' + row.id + '">' +
                            '<button class="btn btn-simple btn-info btn-icon download" rel="tooltip" title="Bajar Archivo" data-placement="left">' +
                            '<i class="material-icons">get_app</i></button></a>';
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
        cargarOrdenCompraDT();
    };
    GuiaCompradorFormularioComponent.prototype.ngOnChanges = function (changes) {
    };
    GuiaCompradorFormularioComponent.prototype.habilitarEdicion = function (e) {
        this.toggleButton = false;
        $("#btnAgregarItemOC").removeClass('disabled');
        $("#btnEliminarItemOC").removeClass('disabled');
    };
    return GuiaCompradorFormularioComponent;
}());
GuiaCompradorFormularioComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'guiacompradorformulario-cmp',
        template: __webpack_require__("../../../../../src/app/guia/comprador/formulario/guiacompradorformulario.component.html"),
        providers: [__WEBPACK_IMPORTED_MODULE_4_app_service_guiaservice__["a" /* GuiaService */], __WEBPACK_IMPORTED_MODULE_3__service_masterservice__["a" /* MasterService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__service_masterservice__["a" /* MasterService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__service_masterservice__["a" /* MasterService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4_app_service_guiaservice__["a" /* GuiaService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_app_service_guiaservice__["a" /* GuiaService */]) === "function" && _d || Object])
], GuiaCompradorFormularioComponent);

function cargarOrdenCompraDT() {
    dtArticulos = $('#dtArticulos').DataTable({
        /* ajax: {
           "url": "https://jsonplaceholder.typicode.com/posts",
           "dataSrc": ""
         },*/
        "ajax": function (data, callback, settings) {
            var result = {
                data: oGuiaCompradorFormularioComponent.guia.articulos
            };
            callback(result);
        },
        columns: [
            { data: 'nroitem' },
            { data: 'nrooc' },
            { data: 'nroitemoc' },
            { data: 'codproducto' },
            { data: 'descproducto' },
            { data: 'cantpedida' },
            { data: 'cantaceptada' },
            { data: 'cantregistradaproveedor' },
            { data: 'unidadmedida' },
            { data: 'pesoneto' },
            { data: 'coddestino' },
            { data: 'destino' },
        ],
        columnDefs: [
            { "className": "text-center", "targets": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10] },
        ]
    });
}
var _a, _b, _c, _d;
//# sourceMappingURL=guiacompradorformulario.component.js.map

/***/ }),

/***/ "../../../../../src/app/guia/guia.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GuiaModule", function() { return GuiaModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_utils_module__ = __webpack_require__("../../../../../src/app/utils/utils.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__proveedor_formulario_guiaproveedorformulario_component__ = __webpack_require__("../../../../../src/app/guia/proveedor/formulario/guiaproveedorformulario.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__comprador_formulario_guiacompradorformulario_component__ = __webpack_require__("../../../../../src/app/guia/comprador/formulario/guiacompradorformulario.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__proveedor_buscar_guiaproveedorbuscar_component__ = __webpack_require__("../../../../../src/app/guia/proveedor/buscar/guiaproveedorbuscar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__guia_routing__ = __webpack_require__("../../../../../src/app/guia/guia.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__directives_datepicker_module__ = __webpack_require__("../../../../../src/app/directives/datepicker.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_app_guia_comprador_buscar_guiacompradorbuscar_component__ = __webpack_require__("../../../../../src/app/guia/comprador/buscar/guiacompradorbuscar.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var GuiaModule = (function () {
    function GuiaModule() {
    }
    return GuiaModule;
}());
GuiaModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(__WEBPACK_IMPORTED_MODULE_8__guia_routing__["a" /* GuiaRoutes */]),
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_4__utils_utils_module__["a" /* UtilsModule */], __WEBPACK_IMPORTED_MODULE_9__directives_datepicker_module__["a" /* A2Edatetimepicker */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_5__proveedor_formulario_guiaproveedorformulario_component__["a" /* GuiaProveedorFormularioComponent */], __WEBPACK_IMPORTED_MODULE_7__proveedor_buscar_guiaproveedorbuscar_component__["a" /* GuiaProveedorBuscarComponent */], __WEBPACK_IMPORTED_MODULE_10_app_guia_comprador_buscar_guiacompradorbuscar_component__["a" /* GuiaCompradorBuscarComponent */], __WEBPACK_IMPORTED_MODULE_6__comprador_formulario_guiacompradorformulario_component__["a" /* GuiaCompradorFormularioComponent */]]
    })
], GuiaModule);

//# sourceMappingURL=guia.module.js.map

/***/ }),

/***/ "../../../../../src/app/guia/guia.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GuiaRoutes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__proveedor_formulario_guiaproveedorformulario_component__ = __webpack_require__("../../../../../src/app/guia/proveedor/formulario/guiaproveedorformulario.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__comprador_formulario_guiacompradorformulario_component__ = __webpack_require__("../../../../../src/app/guia/comprador/formulario/guiacompradorformulario.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__proveedor_buscar_guiaproveedorbuscar_component__ = __webpack_require__("../../../../../src/app/guia/proveedor/buscar/guiaproveedorbuscar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_guia_comprador_buscar_guiacompradorbuscar_component__ = __webpack_require__("../../../../../src/app/guia/comprador/buscar/guiacompradorbuscar.component.ts");




var GuiaRoutes = [
    {
        path: '',
        children: [{
                path: 'proveedor/formulario/:id',
                component: __WEBPACK_IMPORTED_MODULE_0__proveedor_formulario_guiaproveedorformulario_component__["a" /* GuiaProveedorFormularioComponent */],
            },
            {
                path: 'comprador/formulario/:id',
                component: __WEBPACK_IMPORTED_MODULE_1__comprador_formulario_guiacompradorformulario_component__["a" /* GuiaCompradorFormularioComponent */],
            },
            {
                path: 'proveedor/buscar',
                component: __WEBPACK_IMPORTED_MODULE_2__proveedor_buscar_guiaproveedorbuscar_component__["a" /* GuiaProveedorBuscarComponent */]
            },
            {
                path: 'comprador/buscar',
                component: __WEBPACK_IMPORTED_MODULE_3_app_guia_comprador_buscar_guiacompradorbuscar_component__["a" /* GuiaCompradorBuscarComponent */]
            }]
    }
];
//# sourceMappingURL=guia.routing.js.map

/***/ }),

/***/ "../../../../../src/app/guia/proveedor/buscar/guiaproveedorbuscar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-12\">\r\n                <div class=\"card\">\r\n                    <form method=\"#\" action=\"#\">\r\n                        <div class=\"card-header card-header-text\" data-background-color=\"blue\">\r\n                            <h4 class=\"card-title\">Buscar Guías</h4>\r\n                        </div>\r\n                        <div class=\"card-content\">\r\n                            <div class=\"row\">\r\n                                <div class=\"col-sm-4\">\r\n                                    <div class=\"form-group label-floating\">\r\n                                        <label class=\"control-label\">Número de Guía\r\n                                        </label>\r\n                                        <input name=\"nroguia\"  [(ngModel)]=\"filtro.nroguia\" type=\"text\" class=\"form-control\">\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-sm-4\">\r\n                                    <div class=\"form-group label-floating\">\r\n                                        <label class=\"control-label\">Número de OC\r\n                                        </label>\r\n                                        <input name=\"nrooc\"  [(ngModel)]=\"filtro.nrooc\" type=\"text\" class=\"form-control\">\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-sm-4\">\r\n                                    <div class=\"form-group label-floating\">\r\n                                        <label class=\"control-label\">Número de ERP\r\n                                    </label>\r\n                                        <input name=\"nroerp\"  [(ngModel)]=\"filtro.nroerp\" type=\"text\" class=\"form-control\">\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"row\">\r\n                                <div class=\"col-sm-4\">\r\n                                    <div class=\"form-group label-floating\">\r\n                                        <label class=\"control-label\">Fecha Emisión Del</label>\r\n                                        <input type=\"text\" [(ngModel)]=\"filtro.fechaemisioninicio\" name=\"fechaemisioninicio\" class=\"form-control\" datepicker />\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-sm-4\">\r\n                                    <div class=\"form-group label-floating\">\r\n                                        <label class=\"control-label\">al</label>\r\n                                        <input type=\"text\" [(ngModel)]=\"filtro.fechaemisionfin\" name=\"fechaemisionfin\" class=\"form-control\" datepicker/>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-sm-4\">\r\n                                    <div class=\"form-group\">\r\n                                        <button class=\"btn btn-default\" (click)=\"clicked($event)\">Buscar</button>\r\n                                        <button class=\"btn btn-default\" (click)=\"limpiar($event)\">Limpiar</button>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <nav class=\"navbar navbar-info\" role=\"navigation\">\r\n                                <div class=\"container-fluid\">\r\n                                   <!-- <div class=\"navbar-header\">\r\n\r\n                                        <span class=\"navbar-brand\">Resultados</span>\r\n                                    </div>-->\r\n                                    <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\r\n                                        <ul class=\"nav navbar-nav\">\r\n                                            <li><a [routerLink]=\"['/guia/proveedor/formulario', 0]\">Agregar</a></li>\r\n                                            <li><a href=\"javascript:void()\">Anular</a></li>\r\n                                        </ul>\r\n                                    </div>\r\n                                </div>\r\n                            </nav>\r\n                            <div class=\"material-datatables table-responsive\">\r\n                                <table id=\"dtResultados\" class=\"table table-striped table-no-bordered table-hover\" cellspacing=\"0\" width=\"100%\" style=\"width:100%\">\r\n                                    <thead>\r\n                                        <tr>\r\n                                            \r\n                                            <th class=\"disabled-sorting text-right\">\r\n                                                <div class=\"checkbox text-right\">\r\n                                                    <label><input type=\"checkbox\" name=\"optionsCheckboxes\" class=\"checkall\" ></label>\r\n                                                </div>\r\n                                            </th>\r\n                                            <th>N° Guía</th>\r\n                                            <th>N° ERP</th>     \r\n                                            <th>Estado (Proveedor/Cliente)</th>\r\n                                            <th>Organización Compradora</th>\r\n                                                                                   \r\n                                            <th>Fecha de Emisión</th>\r\n                                            <th>Fecha de Inicio de Traslado</th>\r\n                                            <th>Fecha Probable de Arribo</th>\r\n                                            <th class=\"disabled-sorting text-center\">Acciones</th>\r\n                                        </tr>\r\n                                    </thead>\r\n                                    \r\n                                </table>\r\n                            </div>\r\n\r\n                        </div>\r\n                    </form>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/guia/proveedor/buscar/guiaproveedorbuscar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GuiaProveedorBuscarComponent; });
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


var oGuiaBuscarComponent, datatable;
var GuiaProveedorBuscarComponent = (function () {
    function GuiaProveedorBuscarComponent(router, route) {
        this.router = router;
        this.route = route;
    }
    GuiaProveedorBuscarComponent.prototype.navigate = function (nav) {
        this.router.navigate(nav, { relativeTo: this.route });
    };
    GuiaProveedorBuscarComponent.prototype.validarfiltros = function () {
        if (this.filtro.fechaemisioninicio != null && this.filtro.fechaemisioninicio.toString() != "" && this.filtro.fechaemisionfin != null && this.filtro.fechaemisionfin.toString() != "") {
            var fechacreacioninicio = DatatableFunctions.ConvertStringToDatetime(oGuiaBuscarComponent.filtro.fechaemisioninicio);
            var fechacreacionfin = DatatableFunctions.ConvertStringToDatetime(oGuiaBuscarComponent.filtro.fechaemisionfin);
            var fechacreacioninicio_str = DatatableFunctions.FormatDatetimeForMicroService(fechacreacioninicio);
            var fechacreacionfin_str = DatatableFunctions.FormatDatetimeForMicroService(fechacreacionfin);
            if (fechacreacioninicio_str > fechacreacionfin_str) {
                swal({
                    text: "El rango de Fechas de emisión seleccionado no es correcto. Por favor corregir y volver a intentar!",
                    type: 'warning',
                    buttonsStyling: false,
                    confirmButtonClass: "btn btn-warning"
                });
                return false;
            }
        }
        return true;
    };
    GuiaProveedorBuscarComponent.prototype.clicked = function (event) {
        if (this.validarfiltros())
            datatable.ajax.reload();
        event.preventDefault();
    };
    GuiaProveedorBuscarComponent.prototype.limpiar = function (event) {
        this.filtroDefecto();
        setTimeout(function () {
            $("input").each(function () {
                if (!$(this).val() && $(this).val() == '')
                    $(this.parentElement).addClass("is-empty");
            });
        }, 200);
        event.preventDefault();
    };
    GuiaProveedorBuscarComponent.prototype.filtroDefecto = function () {
        var fechacreacioni = new Date();
        fechacreacioni.setMonth(fechacreacioni.getMonth() - 1);
        this.filtro = {
            nroguia: '',
            nrooc: '',
            fechaemisioninicio: fechacreacioni,
            fechaemisionfin: new Date(),
        };
    };
    GuiaProveedorBuscarComponent.prototype.ngOnInit = function () {
        oGuiaBuscarComponent = this;
        this.filtroDefecto();
    };
    GuiaProveedorBuscarComponent.prototype.ngAfterViewInit = function () {
        cargarDataTable();
        DatatableFunctions.registerCheckAll();
    };
    return GuiaProveedorBuscarComponent;
}());
GuiaProveedorBuscarComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'guiaproveedorbuscar-cmp',
        template: __webpack_require__("../../../../../src/app/guia/proveedor/buscar/guiaproveedorbuscar.component.html"),
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object])
], GuiaProveedorBuscarComponent);

function cargarDataTable() {
    datatable = $('#dtResultados').on('draw.dt', function (e, settings, json) {
        DatatableFunctions.initDatatable(e, settings, json, datatable);
    }).DataTable({
        searching: false,
        serverSide: true,
        ajax: {
            beforeSend: function (request) {
                request.setRequestHeader("Authorization", 'Bearer ' + sessionStorage.getItem('token'));
                request.setRequestHeader("origen_datos", 'PEB2M');
            },
            url: "http://b2miningdata.com/api/msguialistar/v1/guias/",
            dataSrc: "data",
            data: function (d) {
                if (oGuiaBuscarComponent.filtro.nroguia != "") {
                    d.NumeroGuia = oGuiaBuscarComponent.filtro.nroguia;
                }
                if (oGuiaBuscarComponent.filtro.nrooc != "") {
                    d.NumeroOC = oGuiaBuscarComponent.filtro.nrooc;
                }
                if (oGuiaBuscarComponent.filtro.fechaemisioninicio) {
                    var fechaemisioninicio = DatatableFunctions.ConvertStringToDatetime(oGuiaBuscarComponent.filtro.fechaemisioninicio);
                    d.FechaEmision_inicio = DatatableFunctions.FormatDatetimeForMicroService(fechaemisioninicio);
                }
                if (oGuiaBuscarComponent.filtro.fechaemisionfin) {
                    var fechaemisionfin = DatatableFunctions.AddDayEndDatetime(DatatableFunctions.ConvertStringToDatetime(oGuiaBuscarComponent.filtro.fechaemisionfin));
                    d.FechaEmision_fin = DatatableFunctions.FormatDatetimeForMicroService(fechaemisionfin);
                }
                d.column_names = '[CodigoGuia,NumeroGuia,FechaEmision,FechaInicioTraslado,FechaEstimadaArribo,RazonSocialCliente,RazonSocialProveedor,Estado,DocumentoMaterial]';
            }
        },
        columns: [
            { data: 'NumeroGuia', name: 'NumeroGuia' },
            { data: 'NumeroGuia', name: 'NumeroGuia' },
            { data: 'DocumentoMaterial', name: 'DocumentoMaterial' },
            { data: 'Estado', name: 'Estado' },
            { data: 'RazonSocialCliente', name: 'RazonSocialCliente' },
            { data: 'FechaEmision', name: 'FechaEmision' },
            { data: 'FechaInicioTraslado', name: 'FechaInicioTraslado' },
            { data: 'FechaEstimadaArribo', name: 'FechaEstimadaArribo' },
            { data: 'CodigoGuia', name: 'CodigoGuia' },
        ],
        columnDefs: [
            { "className": "text-center", "targets": [1, 2, 3, 4, 5, 6, 7] },
            {
                render: function (data, type, row) {
                    return '<div class="text-right" height="100%"><div class="checkbox text-right"><label><input type="checkbox" name="optionsCheckboxes"></label></div></div>';
                },
                targets: 0,
                orderable: false
            },
            {
                render: function (data, type, row) {
                    //return data +' ('+ row[3]+')';
                    return '<div class="text-center"><a href="/guia/proveedor/formulario/' + row.CodigoGuia + '" row-id="' + row.CodigoGuia + '">' +
                        '<button class="btn btn-simple btn-info btn-icon edit" rel="tooltip" title="Ver/Editar" data-placement="left"><i class="material-icons">visibility</i></button></a>' +
                        '</div>';
                },
                targets: 8
            }
        ]
    });
    datatable.on('click', '.edit', function (event) {
        var $tr = $(this).closest('tr');
        var row_id = $tr.find("a").attr('row-id');
        var nav = ['/guia/proveedor/formulario', row_id];
        oGuiaBuscarComponent.navigate(nav);
        event.preventDefault();
    });
    datatable.on('click', '.buscar-propuesta', function (event) {
        var $tr = $(this).closest('tr');
        var data = datatable.row($tr).data();
        var nav = ['/guia/proveedor/buscar'];
        oGuiaBuscarComponent.navigate(nav);
        event.preventDefault();
    });
}
var _a, _b;
//# sourceMappingURL=guiaproveedorbuscar.component.js.map

/***/ }),

/***/ "../../../../../src/app/guia/proveedor/formulario/guiaproveedorformulario.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-12\">\r\n        <div class=\"card\">\r\n          <form method=\"#\" action=\"#\">\r\n            <div class=\"card-header card-header-text\" data-background-color=\"blue\">\r\n              <h4 class=\"card-title\">Guía</h4>\r\n            </div>\r\n            <div class=\"card-content\">\r\n              <div class=\"card-header\">\r\n                <h4 class=\"card-title\">Datos Generales</h4>\r\n              </div>\r\n              <div class=\"card-content\">\r\n                <div class=\"row\">\r\n\r\n\r\n                  <div class=\"col-sm-1\">\r\n\r\n                    <div class=\"form-group label-floating\">\r\n                      <label class=\"control-label\">N° Guía  <span class=\"star\">*</span></label>\r\n                      <input type=\"text\" name=\"nroguia1\" [disabled]=\"toggleButton\" [(ngModel)]=\"guia.nroguia1\" class=\"form-control\">\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class=\"col-sm-3\">\r\n\r\n                    <div class=\"form-group label-floating\">\r\n\r\n                      <input type=\"text\" name=\"nroguia2\" [disabled]=\"toggleButton\" [(ngModel)]=\"guia.nroguia2\" class=\"form-control\">\r\n\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-sm-4\">\r\n                    <div class=\"row\">\r\n                      <div class=\"col-sm-7\">\r\n                        <div class=\"form-group label-floating\">\r\n                          <label class=\"control-label\">RUC Cliente <span class=\"star\">*</span>\r\n                          </label>\r\n                          <input name=\"ruccliente\" type=\"text\" [disabled]=\"toggleButton\" [(ngModel)]=\"guia.ruccliente\" class=\"form-control\">\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"col-sm-5\">\r\n                        <button data-toggle=\"modal\" data-target=\"#mdlBuscarCliente\" class=\"btn btn-fill btn-default\" (click)=\"buscarCliente($event)\"\r\n                          [disabled]=\"toggleButton\">Buscar</button>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-sm-4\">\r\n                    <div class=\"form-group label-floating\">\r\n                      <label class=\"control-label\">Razón Social Cliente <span class=\"star\">*</span>\r\n                      </label>\r\n                      <input name=\"razonsocialcliente\" type=\"text\" [disabled]=\"toggleButton\" [(ngModel)]=\"guia.razonsocialcliente\" class=\"form-control\">\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                  <div class=\"col-sm-2\">\r\n                    <div class=\"form-group label-floating\">\r\n                      <label class=\"control-label\">RUC Proveedor \r\n                      </label>\r\n                      <input name=\"rucproveedor\" disabled type=\"text\" [(ngModel)]=\"guia.rucproveedor\" class=\"form-control\">\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-sm-2\">\r\n                    <div class=\"form-group label-floating\">\r\n                      <label class=\"control-label\">Organización Proveedora \r\n                      </label>\r\n                      <input name=\"razonsocialproveedor\" type=\"text\" disabled [(ngModel)]=\"guia.razonsocialproveedor\" class=\"form-control\">\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-sm-4\">\r\n                    <div class=\"form-group label-floating\">\r\n                      <label class=\"control-label\">Fecha de Emisión <span class=\"star\">*</span>\r\n                      </label>\r\n                      <input name=\"fechaemision\" [(ngModel)]=\"guia.fechaemision\" disabled datepicker type=\"text\" class=\"form-control\">\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-sm-4\">\r\n                    <div class=\"form-group label-floating\">\r\n                      <label class=\"control-label\">Fecha de Inicio de Traslado  <span class=\"star\">*</span>\r\n                      </label>\r\n                      <input name=\"fechainiciotraslado\" [(ngModel)]=\"guia.fechainiciotraslado\" disabled datepicker type=\"text\"\r\n                        class=\"form-control\">\r\n                    </div>\r\n                  </div>\r\n\r\n                </div>\r\n                <div class=\"row\">\r\n                  <div class=\"col-sm-4\">\r\n                    <div class=\"form-group label-floating\">\r\n                      <label class=\"control-label\">Fecha Probable de Arribo  <span class=\"star\">*</span>\r\n                      </label>\r\n                      <input name=\"fechaprobablearribo\" [(ngModel)]=\"guia.fechaprobablearribo\" disabled datepicker type=\"text\"\r\n                        class=\"form-control\">\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-sm-4\">\r\n                    <div class=\"form-group label-floating\">\r\n                      <label class=\"control-label\">Motivo Guía <span class=\"star\">*</span>\r\n                      </label>\r\n                      <select name=\"motivoguia\" class=\"form-control\" [(ngModel)]=\"guia.motivoguia\" [disabled]=\"toggleButton\">\r\n                        <option value=\"\"></option>\r\n                        <option *ngFor=\"let opt of listMotivoGuiaCombo\" value=\"{{opt.valor}}\"> {{opt.desc}} </option>   \r\n                      </select>\r\n                    </div>\r\n                  </div>\r\n                 <!-- <div class=\"col-sm-4\">\r\n                    <div class=\"form-group label-floating\">\r\n                      <label class=\"control-label\">Número ERP de Documento Material \r\n                      </label>\r\n                      <input name=\"nroerpdocmaterial\" type=\"text\" disabled [(ngModel)]=\"guia.nroerpdocmaterial\" class=\"form-control\">\r\n                    </div>\r\n                  </div>-->\r\n                </div>\r\n                <div class=\"row\">\r\n                  <div class=\"col-sm-12\">\r\n                    <div class=\"form-group label-floating\">\r\n                      <label class=\"control-label\">Observaciones\r\n                      </label>\r\n                      <textarea name=\"observaciones\" [(ngModel)]=\"guia.observaciones\" class=\"form-control\" [disabled]=\"toggleButton\"></textarea>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"card-header\">\r\n                <h4 class=\"card-title\">Datos Transportista</h4>\r\n              </div>\r\n              <div class=\"card-content\">\r\n                <div class=\"row\">\r\n                  <div class=\"col-sm-4\">\r\n                    <div class=\"row\">\r\n                      <div class=\"col-sm-4 \">\r\n                        <div class=\"form-group label-floating\">\r\n                          <label class=\"control-label\">Tipo Documento</label>\r\n                          <select name=\"tipodoctransporte\" [(ngModel)]=\"guia.tipodoctransporte\" class=\"form-control\" [disabled]=\"toggleButton\">\r\n                            <option Value=\"\"></option>\r\n                            <option *ngFor=\"let opt of listTipoDocIdentidad\" value=\"{{opt.valor}}\"> {{opt.desc}} </option>   \r\n                            \r\n                          </select>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"col-sm-8\">\r\n                        <div class=\"form-group label-floating\">\r\n                          <label class=\"control-label\">N° Documento</label>\r\n                          <input type=\"text\" id=\"rucdnitransporte\" name=\"rucdnitransporte\" class=\"form-control\" [(ngModel)]=\"guia.rucdnitransporte\"\r\n                            value=\"\" [disabled]=\"toggleButton\">\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-sm-8\">\r\n                    <div class=\"form-group label-floating\">\r\n                      <label class=\"control-label\">Razon Social / Nombre\r\n                      </label>\r\n                      <input name=\"razonsocialnombretransporte\" type=\"text\" class=\"form-control\" [(ngModel)]=\"guia.razonsocialnombretransporte\"\r\n                        [disabled]=\"toggleButton\">\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                  <div class=\"col-sm-4\">\r\n                    <div class=\"form-group label-floating\">\r\n                      <label class=\"control-label\">N° Placa</label>\r\n                      <input type=\"text\" name=\"placatransporte\" class=\"form-control\" [(ngModel)]=\"guia.placatransporte\" [disabled]=\"toggleButton\">\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-sm-8\">\r\n                    <div class=\"form-group label-floating\">\r\n                      <label class=\"control-label\">Dirección\r\n                      </label>\r\n                      <input name=\"direcciontransporte\" type=\"text\" class=\"form-control\" [(ngModel)]=\"guia.direcciontransporte\" [disabled]=\"toggleButton\">\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                  <div class=\"col-sm-4\">\r\n                    <div class=\"form-group label-floating\">\r\n                      <label class=\"control-label\">Código de Reg. MTC</label>\r\n                      <input type=\"text\" name=\"codigomtctransporte\" class=\"form-control\" [(ngModel)]=\"guia.codigomtctransporte\" [disabled]=\"toggleButton\">\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-sm-8\">\r\n                    <div class=\"form-group label-floating\">\r\n                      <label class=\"control-label\">Tipo Transporte\r\n                      </label>\r\n                      <select name=\"tipotransporte\" [(ngModel)]=\"guia.tipotransporte\" class=\"form-control\" [disabled]=\"toggleButton\">\r\n                        <option Value=\"\"></option>\r\n                        <option *ngFor=\"let opt of listTransporteGuiaCombo\" value=\"{{opt.valor}}\"> {{opt.desc}} </option>   \r\n                      </select>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"card-header\">\r\n                <h4 class=\"card-title\">Datos de la Carga</h4>\r\n              </div>\r\n              <div class=\"card-content\">\r\n                <div class=\"row\">\r\n                  <div class=\"col-sm-6\">\r\n                    <div class=\"form-group label-floating\">\r\n                      <label class=\"control-label\">Punto Partida</label>\r\n                      <input type=\"text\" name=\"puntopartida\" class=\"form-control\" [(ngModel)]=\"guia.puntopartida\" [disabled]=\"toggleButton\">\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-sm-6\">\r\n                    <div class=\"form-group label-floating\">\r\n                      <label class=\"control-label\">Punto LLegada</label>\r\n                      <input type=\"text\" name=\"puntollegada\" class=\"form-control\" [(ngModel)]=\"guia.puntollegada\" [disabled]=\"toggleButton\">\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                  <div class=\"col-sm-4\">\r\n                    <div class=\"form-group label-floating\">\r\n                      <label class=\"control-label\">Almancén Destino</label>\r\n                      <input type=\"text\" name=\"alamcendestino\" class=\"form-control\" [(ngModel)]=\"guia.alamcendestino\" [disabled]=\"toggleButton\">\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-sm-4\">\r\n                    <div class=\"form-group label-floating\">\r\n                      <label class=\"control-label\">Total Bultos</label>\r\n                      <input type=\"text\" name=\"totalbultos\" class=\"form-control\" [(ngModel)]=\"guia.totalbultos\" [disabled]=\"toggleButton\">\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-sm-4\">\r\n                    <div class=\"row\">\r\n                      <div class=\"col-sm-9\">\r\n                        <div class=\"form-group label-floating\">\r\n                          <label class=\"control-label\">Total Volúmen</label>\r\n                          <input type=\"text\" name=\"totalvolumen\" [(ngModel)]=\"guia.totalvolumen\" class=\"form-control\" value=\"\" [disabled]=\"toggleButton\">\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"col-sm-3\">\r\n                        <div class=\"form-group label-floating\">\r\n                          <label class=\"control-label\"></label>\r\n                          <select name=\"totalvolumenund\" class=\"form-control\" [(ngModel)]=\"guia.totalvolumenund\" [disabled]=\"toggleButton\">\r\n                            <option Value=\"\"></option>\r\n                            <option *ngFor=\"let opt of listUnidadMedidaCombo\" value=\"{{opt.valor}}\"> {{opt.desc}} </option>   \r\n                          </select>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                  <div class=\"col-sm-4\">\r\n                    <div class=\"row\">\r\n                      <div class=\"col-sm-9\">\r\n                        <div class=\"form-group label-floating\">\r\n                          <label class=\"control-label\">Total Peso Bruto</label>\r\n                          <input type=\"text\" name=\"totalpesobruto\" [(ngModel)]=\"guia.totalpesobruto\" class=\"form-control\" [disabled]=\"toggleButton\">\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"col-sm-3\">\r\n                        <div class=\"form-group label-floating\">\r\n                          <label class=\"control-label\"></label>\r\n                          <select name=\"totalpesobrutound\" [(ngModel)]=\"guia.totalpesobrutound\" class=\"form-control\" [disabled]=\"toggleButton\">\r\n                            <option Value=\"\"></option>\r\n                            <option *ngFor=\"let opt of listUnidadMedidaCombo\" value=\"{{opt.valor}}\"> {{opt.desc}} </option>   \r\n                          </select>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-sm-4\">\r\n                    <div class=\"row\">\r\n                      <div class=\"col-sm-9\">\r\n                        <div class=\"form-group label-floating\">\r\n                          <label class=\"control-label\">Tara</label>\r\n                          <input type=\"text\" name=\"tara\" class=\"form-control\" [(ngModel)]=\"guia.tara\" [disabled]=\"toggleButton\">\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"col-sm-3\">\r\n                        <div class=\"form-group label-floating\">\r\n                          <label class=\"control-label\"></label>\r\n                          <select name=\"taraund\" [(ngModel)]=\"guia.taraund\" class=\"form-control\" [disabled]=\"toggleButton\">\r\n                            <option Value=\"\"></option>\r\n                            <option *ngFor=\"let opt of listUnidadMedidaCombo\" value=\"{{opt.valor}}\"> {{opt.desc}} </option>   \r\n                          </select>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-sm-4\">\r\n                    <div class=\"row\">\r\n                      <div class=\"col-sm-9\">\r\n                        <div class=\"form-group label-floating\">\r\n                          <label class=\"control-label\">Total Peso Neto</label>\r\n                          <input type=\"text\" name=\"totalpesoneto\" class=\"form-control\" [(ngModel)]=\"guia.totalpesoneto\" [disabled]=\"toggleButton\">\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"col-sm-3\">\r\n                        <div class=\"form-group label-floating\">\r\n                          <label class=\"control-label\"></label>\r\n                          <select name=\"totalpesonetound\" [(ngModel)]=\"guia.totalpesonetound\" class=\"form-control\" [disabled]=\"toggleButton\">\r\n                            <option Value=\"\"></option>\r\n                            <option *ngFor=\"let opt of listUnidadMedidaCombo\" value=\"{{opt.valor}}\"> {{opt.desc}} </option>   \r\n                          </select>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"card\">\r\n                <div class=\"card-header card-header-icon\" data-background-color=\"blue\">\r\n                  <i class=\"material-icons\">assignment</i>\r\n                </div>\r\n                <div class=\"card-content\">\r\n                  <h4 class=\"card-title\">Detalle de Artículos</h4>\r\n                  <div class=\"toolbar\" *ngIf=\"toggleButton==false\">\r\n                    <div class=\"row\">\r\n                      <div class=\"col-sm-12\">\r\n                        <nav class=\"navbar navbar-info\" role=\"navigation\">\r\n                          <div class=\"container-fluid\">\r\n                            <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\r\n                              <ul class=\"nav navbar-nav\">\r\n                                <li id=\"btnAgregarItemOC\"><a (click)=\"AbrirAgregarOC($event)\">Añadir Orden de Compra</a></li>\r\n                                <li id=\"btnEliminarItemOC\"><a (click)=\"eliminarArticulos($event)\" >Eliminar</a></li>\r\n                              </ul>\r\n                            </div>\r\n                          </div>\r\n                        </nav>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"material-datatables table-responsive\" style=\"display:block\">\r\n                    <table id=\"dtArticulos\" class=\"table table-striped table-no-bordered table-hover\" cellspacing=\"0\" width=\"100%\" style=\"width:100%\">\r\n                      <thead>\r\n                        <tr>\r\n                          <th class=\"disabled-sorting text-right\">\r\n                            <div class=\"checkbox text-right\">\r\n                              <label><input type=\"checkbox\" name=\"optionsCheckboxes\" class=\"checkall\" ></label>\r\n                            </div>\r\n                          </th>\r\n                          <th>N° Item</th>\r\n                          <th>N° OC</th>\r\n                          <th>N° Item OC</th>\r\n                          <th>Código de Producto</th>\r\n                          <th>Descripción del Producto</th>\r\n                          <th>Cantidad Pedida</th>\r\n                          <th>Cantidad Aceptada</th>\r\n                          <th>Cantidad Registrada Proveedor <span class=\"star\">*</span></th>\r\n                          <th>Unidad de Medida</th>\r\n                          <th>Peso Neto</th>\r\n                          <th>Codigo Destino</th>\r\n                          <th>Destino</th>\r\n                         \r\n                        </tr>\r\n                      </thead>\r\n                    </table>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"row\">\r\n                <div class=\"col-md-12\">\r\n                  <div class=\"card\">\r\n                    <div class=\"card-header card-header-icon\" data-background-color=\"blue\">\r\n                      <i class=\"material-icons\">assignment</i>\r\n                    </div>\r\n                    <div class=\"card-content\">\r\n                      <h4 class=\"card-title\">Archivos Adjuntos</h4>\r\n                      <div class=\"toolbar\" [hidden]=\"toggleButton\">\r\n                        <div class=\"row\">\r\n                          <div class=\"col-sm-12\">\r\n                            <nav class=\"navbar navbar-info\" role=\"navigation\">\r\n                              <div class=\"container-fluid\">\r\n                                <div class=\"navbar-header\">\r\n                                        <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\">\r\n                                            <span class=\"sr-only\">Acciones</span>\r\n                                            <span class=\"icon-bar\"></span>\r\n                                            <span class=\"icon-bar\"></span>\r\n                                            <span class=\"icon-bar\"></span>\r\n                                        </button>\r\n                                        <a class=\"navbar-brand disabled\"></a>\r\n                                    </div>\r\n                                <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\r\n                                  <ul class=\"nav navbar-nav\">\r\n                                    <li><a href=\"#mdlArchivosAdjuntos\" data-toggle=\"modal\" (click)=\"agregarArchivo($event)\" data-target=\"#mdlArchivosAdjuntos\">Agregar</a></li>\r\n                                    <li><a (click)=\"eliminarArchivos($event)\" >Eliminar</a></li>\r\n                                  </ul>\r\n                                </div>\r\n                              </div>\r\n                            </nav>\r\n\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"material-datatables table-responsive\">\r\n                        <table id=\"dtArchivos\" class=\"table table-striped table-no-bordered table-hover\" cellspacing=\"0\" width=\"100%\" style=\"width:100%\">\r\n                          <thead>\r\n                            <tr>\r\n                              <th class=\"disabled-sorting text-right\">\r\n                                <div class=\"checkbox text-right\">\r\n                                  <label><input type=\"checkbox\" name=\"optionsCheckboxes\" class=\"checkall\" ></label>\r\n                                </div>\r\n                              </th>\r\n                              <th width=\"20%\">Nombre</th>\r\n                              <th width=\"60%\">Descripción</th>\r\n                              <th class=\"disabled-sorting text-center\" width=\"20%\">Acciones</th>\r\n                            </tr>\r\n                          </thead>\r\n\r\n\r\n                        </table>\r\n                      </div>\r\n                    </div>\r\n                    <!-- end content-->\r\n                  </div>\r\n                  <!--  end card  -->\r\n                </div>\r\n                <!-- end col-md-12 -->\r\n              </div>\r\n            </div>\r\n            <div class=\"card-footer\">\r\n              <button class=\"btn btn-fill btn-default pull-right\" routerLink=\"/guia/proveedor/buscar\">Salir</button>\r\n              <button class=\"btn btn-fill btn-default pull-right\">Imprimir</button>\r\n              <button class=\"btn btn-fill btn-default pull-right\" [disabled]=\"toggleButton\" routerLink=\"/guia/proveedor/buscar\">Enviar</button>\r\n              <button type=\"button\" class=\"btn btn-fill btn-default pull-right\" routerLink=\"/guia/proveedor/buscar\" [disabled]=\"toggleButton\">Guardar</button>\r\n              <button (click)=\"habilitarEdicion($event)\" class=\"btn btn-fill btn-default pull-right\" *ngIf=\"id!=='0'\">Habilitar Edición</button>\r\n            </div>\r\n          </form>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div id=\"mdlBuscarCliente\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\">\r\n    <div class=\"modal-dialog modal-lg\" role=\"document\">\r\n      <div class=\"modal-content\">\r\n        <div class=\"modal-header\">\r\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\r\n\r\n\r\n          <table>\r\n            <tr>\r\n              <td>\r\n                <div class=\"card-header card-header-icon\" data-background-color=\"blue\">\r\n                  <i class=\"material-icons\">assignment</i>\r\n                </div>\r\n              </td>\r\n              <td class=\"cell-title\">\r\n                <div class=\"card-content\">\r\n                  <h4 class=\"card-title modal-title\">Buscar Clientes</h4>\r\n\r\n                </div>\r\n              </td>\r\n            </tr>\r\n          </table>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"form-group label-floating\">\r\n                <label class=\"control-label\">Nombre de Compañía</label>\r\n                <input type=\"text\" id=\"txtBuscarNroOC\" name=\"txtBuscarNroOC\" class=\"form-control\" value=\"\" [disabled]=\"toggleButton\">\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-1\">\r\n              <div class=\"form-group label-floating\">\r\n                <label class=\"control-label\"></label>\r\n                <select name=\"cmbPais\" class=\"form-control\" [disabled]=\"toggleButton\">\r\n                 <option Value=\"PE\">PE</option>\r\n               </select>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-sm-5\">\r\n              <div class=\"form-group label-floating\">\r\n                <label class=\"control-label\">Código</label>\r\n                <input type=\"text\" id=\"txtBuscarCodCliente\" name=\"txtBuscarCodCliente\" class=\"form-control\" value=\"\" [disabled]=\"toggleButton\">\r\n              </div>\r\n            </div>\r\n            <div class=\"col-sm-2\">\r\n              <div class=\"form-group label-floating\">\r\n                <label class=\"control-label\"></label>\r\n                <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Buscar</button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"material-datatables table-responsive\">\r\n                <table id=\"dtBuscarCliente\" class=\"table table-striped table-no-bordered table-hover\" cellspacing=\"0\" width=\"100%\" style=\"width:100%\">\r\n                  <thead>\r\n                    <tr>\r\n                      <th class=\"disabled-sorting text-right\">\r\n\r\n                      </th>\r\n                      <th style=\"width:50%\">Nombre de Compañía</th>\r\n                      <th style=\"width:50%\">Código</th>\r\n                    </tr>\r\n                  </thead>\r\n                </table>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"modal-footer\">\r\n          <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Seleccionar</button>\r\n          <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Cerrar</button>\r\n        </div>\r\n      </div>\r\n      <!-- /.modal-content -->\r\n    </div>\r\n    <!-- /.modal-dialog -->\r\n  </div>\r\n  <div id=\"mdlOrdenesCompra\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\">\r\n    <div class=\"modal-dialog modal-lg\" role=\"document\">\r\n      <div class=\"modal-content\">\r\n        <div class=\"modal-header\">\r\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\r\n\r\n\r\n          <table>\r\n            <tr>\r\n              <td>\r\n                <div class=\"card-header card-header-icon\" data-background-color=\"blue\">\r\n                  <i class=\"material-icons\">assignment</i>\r\n                </div>\r\n              </td>\r\n              <td class=\"cell-title\">\r\n                <div class=\"card-content\">\r\n                  <h4 class=\"card-title modal-title\">Buscar Orden de Compra</h4>\r\n\r\n                </div>\r\n              </td>\r\n            </tr>\r\n          </table>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-6\">\r\n              <div class=\"form-group label-floating\">\r\n                <label class=\"control-label\">Nro. O.C.</label>\r\n                <input type=\"text\" name=\"nroordencompra\" class=\"form-control\" [(ngModel)]=\"filtrooc.nroordencompra\" [disabled]=\"toggleButton\">\r\n              </div>\r\n            </div>\r\n            <div class=\"col-sm-6\">\r\n              <div class=\"form-group label-floating\">\r\n                <label class=\"control-label\">Estado</label>\r\n                <select name=\"estado\" class=\"form-control\" [(ngModel)]=\"filtrooc.estado\" [disabled]=\"toggleButton\">\r\n      \r\n\r\n                  <option value=\"NONE\">TODOS</option>\r\n                  <option *ngFor=\"let optEstado of listEstadoOCCombo\" value=\"{{optEstado.valor}}\"> {{optEstado.desc}} </option>           \r\n\r\n                </select>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-5\">\r\n              <div class=\"form-group label-floating\">\r\n                <label class=\"control-label\">Creada/Enviada después de</label>\r\n                \r\n                <input type=\"text\" [(ngModel)]=\"filtrooc.fechacreacioninicio\" name=\"fechacreacioninicio\" class=\"form-control\" datepicker />\r\n              </div>\r\n            </div>\r\n            <div class=\"col-sm-5\">\r\n              <div class=\"form-group label-floating\">\r\n                <label class=\"control-label\">Creada/Enviada antes de</label>\r\n              \r\n                <input type=\"text\" [(ngModel)]=\"filtrooc.fechacreacionfin\" name=\"fechacreacionfin\" class=\"form-control\" datepicker />\r\n              </div>\r\n            </div>\r\n            <div class=\"col-sm-2\">\r\n              <div class=\"form-group label-floating\">\r\n                <label class=\"control-label\"></label>\r\n                <button type=\"button\" class=\"btn btn-default\" (click)=\"BuscarOCClick($event)\">Buscar</button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"material-datatables table-responsive\">\r\n                <table id=\"dtBuscarOC\" class=\"table table-striped table-no-bordered table-hover\" cellspacing=\"0\" width=\"100%\" style=\"width:100%\">\r\n                  <thead>\r\n                    <tr>\r\n                      <th class=\"disabled-sorting text-right\">\r\n                        <div class=\"checkbox text-right\">\r\n                          <label><input type=\"checkbox\" name=\"optionsCheckboxes\" class=\"checkall\" ></label>\r\n                        </div>\r\n                      </th>\r\n                      <th style=\"width:10%\">Nro. O.C.</th>\r\n                      <th style=\"width:15%\">Empresa Compradora</th>\r\n                      <th style=\"width:15%\">Usuario Comprador</th>\r\n                      <th style=\"width:10%\">Atención A</th>\r\n                      <th style=\"width:10%\">Estado</th>\r\n                      <th style=\"width:10%\">Versión</th>\r\n                      <th style=\"width:10%\">Total</th>\r\n                      <th style=\"width:10%\">Fecha Creación</th>\r\n                    </tr>\r\n                  </thead>\r\n\r\n\r\n                </table>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"modal-footer\">\r\n          <button type=\"button\" class=\"btn btn-default\" (click)=\"AgregarArticulosOC($event)\" >Añadir</button>\r\n          <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Cerrar</button>\r\n        </div>\r\n      </div>\r\n      <!-- /.modal-content -->\r\n    </div>\r\n    <!-- /.modal-dialog -->\r\n  </div>\r\n\r\n  <div id=\"mdlArchivosAdjuntos\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\">\r\n    <div class=\"modal-dialog\" role=\"document\">\r\n      <div class=\"modal-content\">\r\n        <div class=\"modal-header\">\r\n\r\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\r\n\r\n\r\n          <table>\r\n            <tr>\r\n              <td>\r\n                <div class=\"card-header card-header-icon\" data-background-color=\"blue\">\r\n                  <i class=\"material-icons\">assignment</i>\r\n                </div>\r\n              </td>\r\n              <td class=\"cell-title\"> \r\n                <div class=\"card-content\">\r\n                  <h4 class=\"card-title modal-title\">Archivo Adjunto</h4>\r\n                  <!--<h4 class=\"modal-title\">Archivo Adjunto</h4>-->\r\n                </div>\r\n              </td>\r\n            </tr>\r\n          </table>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"form-group\">\r\n                <div class=\"fileinput fileinput-new input-group\" data-provides=\"fileinput\">\r\n                  <div class=\"form-control\" data-trigger=\"fileinput\">\r\n                    <i class=\"material-icons fileinput-exists\">attach_file</i>\r\n                    <span class=\"fileinput-filename\"></span>\r\n                  </div>\r\n                  <span class=\"input-group-addon btn btn-default btn-file\">\r\n                      <span class=\"fileinput-new\">Seleccionar Archivo</span>\r\n                      <span class=\"fileinput-exists\">Seleccionar Archivo</span>\r\n                      <input type=\"file\" name=\"...\" id=\"txtArchivo\">\r\n                      <a href=\"#\" class=\"input-group-addon btn btn-default fileinput-exists\" style=\"display:none\" data-dismiss=\"fileinput\" id=\"btnEliminarAA\">Remover</a>\r\n                  </span>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"form-group label-floating\">\r\n                <textarea name=\"descripcion\" placeholder=\"Descripción\" [(ngModel)]=\"archivo.descripcion\" class=\"form-control\" rows=\"4\" [disabled]=\"toggleButton\"></textarea>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n        </div>\r\n        <div class=\"modal-footer\">\r\n          <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Cerrar</button>\r\n          <button type=\"button\" class=\"btn btn-default\" (click)=\"grabarArchivoAdjunto()\" [disabled]=\"toggleButton\">Adjuntar</button>\r\n        </div>\r\n      </div>\r\n      <!-- /.modal-content -->\r\n    </div>\r\n    <!-- /.modal-dialog -->\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/guia/proveedor/formulario/guiaproveedorformulario.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GuiaProveedorFormularioComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_model_guia__ = __webpack_require__("../../../../../src/app/model/guia.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_masterservice__ = __webpack_require__("../../../../../src/app/service/masterservice.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_service_guiaservice__ = __webpack_require__("../../../../../src/app/service/guiaservice.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_app_service_ordencompraservice__ = __webpack_require__("../../../../../src/app/service/ordencompraservice.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__utils_app_utils__ = __webpack_require__("../../../../../src/app/utils/app.utils.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};







var oGuiaProveedorFormularioComponent, datatable, dtArticulos, datatableOC, dtArchivos;
var GuiaProveedorFormularioComponent = (function () {
    function GuiaProveedorFormularioComponent(activatedRoute, router, _masterService, _dataService, _dataServiceOC) {
        this.router = router;
        this._masterService = _masterService;
        this._dataService = _dataService;
        this._dataServiceOC = _dataServiceOC;
        this.id = '0';
        this.toggleButton = true;
        this.filtroOCDefecto();
        this.activatedRoute = activatedRoute;
        this.util = new __WEBPACK_IMPORTED_MODULE_6__utils_app_utils__["a" /* AppUtils */](this.router, this._masterService);
        this.guia = new __WEBPACK_IMPORTED_MODULE_2_app_model_guia__["b" /* Guia */]();
        this.token = sessionStorage.getItem('token');
        this.archivo = new __WEBPACK_IMPORTED_MODULE_2_app_model_guia__["a" /* Archivo */]();
    }
    GuiaProveedorFormularioComponent.prototype.agregarArchivo = function (event) {
        this.archivo = new __WEBPACK_IMPORTED_MODULE_2_app_model_guia__["a" /* Archivo */]();
        $('#btnEliminarAA').click();
        $('#txtArchivo').val(null);
        event.preventDefault();
    };
    GuiaProveedorFormularioComponent.prototype.validarDocumentos = function () {
        if ($("#txtArchivo").get(0).files.length == 0) {
            swal({
                text: "Un archivo es requerido. Por favor completar y volver a intentar!",
                type: 'warning',
                buttonsStyling: false,
                confirmButtonClass: "btn btn-warning"
            });
            return false;
        }
        if (!this.archivo.descripcion || this.archivo.descripcion.replace(/ /g, '') === '') {
            swal({
                text: "El campo descripción es obligatorio. Por favor completar y volver a intentar!",
                type: 'warning',
                buttonsStyling: false,
                confirmButtonClass: "btn btn-warning"
            });
            return false;
        }
        return true;
    };
    GuiaProveedorFormularioComponent.prototype.grabarArchivoAdjunto = function () {
        if (!this.validarDocumentos()) {
            return false;
        }
        var docs_ordenado = this.guia.docadjuntos.sort(function (n, n1) {
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
        var fullPath = $('#txtArchivo').val();
        if (fullPath) {
            var startIndex = (fullPath.indexOf('\\') >= 0 ? fullPath.lastIndexOf('\\') : fullPath.lastIndexOf('/'));
            var filename = fullPath.substring(startIndex);
            if (filename.indexOf('\\') === 0 || filename.indexOf('/') === 0) {
                filename = filename.substring(1);
            }
            this.archivo.nombre = filename;
        }
        this.guia.docadjuntos.push(JSON.parse(JSON.stringify(this.archivo)));
        setTimeout(function () {
            dtArchivos.ajax.reload();
        }, 500);
        $("#mdlArchivosAdjuntos").modal('toggle');
    };
    GuiaProveedorFormularioComponent.prototype.eliminarArchivos = function (event) {
        event.preventDefault();
        var checkboxes = $('#dtArchivos').find('.checkboxArchivos:checked');
        if (checkboxes.length <= 0) {
            swal({
                text: "Debe seleccionar un Archivo. Por favor corregir y volver a intentar!",
                type: 'warning',
                buttonsStyling: false,
                confirmButtonClass: "btn btn-warning"
            });
            return false;
        }
        else {
            var mensaje = "¿Desea eliminar el archivo seleccionado?";
            if (checkboxes.length > 1) {
                mensaje = "¿Desea eliminar los archivos seleccionados?";
            }
            swal({
                text: mensaje,
                type: "warning",
                showCancelButton: true,
                confirmButtonText: "Si",
                cancelButtonText: "No",
                buttonsStyling: false,
                confirmButtonClass: "btn btn-default",
                cancelButtonClass: "btn btn-warning",
            }).then(function () {
                var lista = oGuiaProveedorFormularioComponent.guia.docadjuntos;
                var _loop_1 = function (checkbox) {
                    var id = $(checkbox).val();
                    lista = lista.filter(function (a) { return a.id != id; });
                };
                for (var _i = 0, checkboxes_1 = checkboxes; _i < checkboxes_1.length; _i++) {
                    var checkbox = checkboxes_1[_i];
                    _loop_1(checkbox);
                }
                oGuiaProveedorFormularioComponent.guia.docadjuntos = JSON.parse(JSON.stringify(ActualizarCorrelativos(lista)));
                setTimeout(function () {
                    dtArchivos.ajax.reload();
                }, 500);
            }, function (dismiss) {
                // dismiss can be 'cancel', 'overlay',
                // 'close', and 'timer'
            });
        }
    };
    GuiaProveedorFormularioComponent.prototype.eliminarArticulos = function (event) {
        event.preventDefault();
        var checkboxArticulos = $('#dtArticulos').find('.checkboxArticulos:checked');
        if (checkboxArticulos.length <= 0) {
            swal({
                text: "Debe seleccionar un Articulo. Por favor corregir y volver a intentar!",
                type: 'warning',
                buttonsStyling: false,
                confirmButtonClass: "btn btn-warning"
            });
            return false;
        }
        else {
            var mensaje = "¿Desea eliminar el artículo seleccionado?";
            if (checkboxArticulos.length > 1) {
                mensaje = "¿Desea eliminar los artículos seleccionados?";
            }
            swal({
                text: mensaje,
                type: "warning",
                showCancelButton: true,
                confirmButtonText: "Si",
                cancelButtonText: "No",
                buttonsStyling: false,
                confirmButtonClass: "btn btn-default",
                cancelButtonClass: "btn btn-warning",
            }).then(function () {
                var lista = oGuiaProveedorFormularioComponent.guia.articulos;
                var _loop_2 = function (checkbox) {
                    var nroitem = $(checkbox).val();
                    lista = lista.filter(function (a) { return a.nroitem != nroitem; });
                };
                for (var _i = 0, checkboxArticulos_1 = checkboxArticulos; _i < checkboxArticulos_1.length; _i++) {
                    var checkbox = checkboxArticulos_1[_i];
                    _loop_2(checkbox);
                }
                oGuiaProveedorFormularioComponent.guia.articulos = JSON.parse(JSON.stringify(ActualizarCorrelativos(lista)));
                setTimeout(function () {
                    dtArticulos.ajax.reload();
                }, 500);
            }, function (dismiss) {
                // dismiss can be 'cancel', 'overlay',
                // 'close', and 'timer'
            });
        }
    };
    GuiaProveedorFormularioComponent.prototype.AgregarArticulosOC = function (event) {
        return __awaiter(this, void 0, void 0, function () {
            var checkboxOCs, lista_ordenado, max_nroitem, _i, checkboxOCs_1, checkboxOC, id_doc, oc, _a, _b, producto;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        event.preventDefault();
                        checkboxOCs = $('#dtBuscarOC').find('.checkboxOC:checked');
                        if (checkboxOCs.length <= 0) {
                            swal({
                                text: "Debe seleccionar una Orden de Compra. Por favor corregir y volver a intentar!",
                                type: 'warning',
                                buttonsStyling: false,
                                confirmButtonClass: "btn btn-warning"
                            });
                            return [2 /*return*/, false];
                        }
                        lista_ordenado = oGuiaProveedorFormularioComponent.guia.articulos.sort(function (n, n1) {
                            if (n.nroitem < n1.nroitem)
                                return -1;
                            if (n.nroitem > n1.nroitem)
                                return 1;
                            return 0;
                        });
                        max_nroitem = 1;
                        if (lista_ordenado.length > 0) {
                            max_nroitem = lista_ordenado[lista_ordenado.length - 1].nroitem + 1;
                        }
                        _i = 0, checkboxOCs_1 = checkboxOCs;
                        _c.label = 1;
                    case 1:
                        if (!(_i < checkboxOCs_1.length)) return [3 /*break*/, 4];
                        checkboxOC = checkboxOCs_1[_i];
                        id_doc = $(checkboxOC).val();
                        return [4 /*yield*/, this._dataServiceOC
                                .obtener(id_doc).toPromise()];
                    case 2:
                        oc = _c.sent();
                        for (_a = 0, _b = oc.productos; _a < _b.length; _a++) {
                            producto = _b[_a];
                            oGuiaProveedorFormularioComponent.guia.articulos.push({
                                nroitem: max_nroitem++,
                                nrooc: oc.nroordencompra,
                                nroitemoc: producto.posicion,
                                codproducto: producto.micodigo,
                                descproducto: producto.nombre,
                                cantpedida: producto.cantidad,
                                cantaceptada: producto.cantidad,
                                cantregistradaproveedor: producto.cantidad,
                                unidadmedida: producto.unidad,
                                pesoneto: "1.0 lb",
                                coddestino: "S3IL",
                                destino: "ALMACEN CENTRALIZADO - Tacna",
                            });
                        }
                        _c.label = 3;
                    case 3:
                        _i++;
                        return [3 /*break*/, 1];
                    case 4:
                        setTimeout(function () {
                            dtArticulos.ajax.reload();
                            $("#mdlOrdenesCompra").modal('toggle');
                        }, 500);
                        return [2 /*return*/];
                }
            });
        });
    };
    GuiaProveedorFormularioComponent.prototype.validarfiltrosOC = function () {
        if (this.filtrooc.fechacreacioninicio != null && this.filtrooc.fechacreacioninicio.toString() != "" && this.filtrooc.fechacreacionfin != null && this.filtrooc.fechacreacionfin.toString() != "") {
            var fechacreacioninicio = DatatableFunctions.ConvertStringToDatetime(oGuiaProveedorFormularioComponent.filtrooc.fechacreacioninicio);
            var fechacreacionfin = DatatableFunctions.ConvertStringToDatetime(oGuiaProveedorFormularioComponent.filtrooc.fechacreacionfin);
            var fechacreacioninicio_str = DatatableFunctions.FormatDatetimeForMicroService(fechacreacioninicio);
            var fechacreacionfin_str = DatatableFunctions.FormatDatetimeForMicroService(fechacreacionfin);
            if (fechacreacioninicio_str > fechacreacionfin_str) {
                swal({
                    text: "El rango de Fechas de registro seleccionado no es correcto. Por favor corregir y volver a intentar!",
                    type: 'warning',
                    buttonsStyling: false,
                    confirmButtonClass: "btn btn-warning"
                });
                return false;
            }
        }
        return true;
    };
    GuiaProveedorFormularioComponent.prototype.AbrirAgregarOC = function (event) {
        $("#mdlOrdenesCompra").modal('show');
        datatableOC.ajax.reload();
        event.preventDefault();
    };
    GuiaProveedorFormularioComponent.prototype.BuscarOCClick = function (event) {
        if (this.validarfiltrosOC())
            datatableOC.ajax.reload();
        event.preventDefault();
    };
    GuiaProveedorFormularioComponent.prototype.filtroOCDefecto = function () {
        var fechacreacioni = new Date();
        fechacreacioni.setMonth(fechacreacioni.getMonth() - 12);
        this.filtrooc = {
            nroordencompra: '',
            estado: 'NONE',
            fechacreacioninicio: fechacreacioni,
            fechacreacionfin: new Date(),
        };
    };
    GuiaProveedorFormularioComponent.prototype.buscarCliente = function (event) {
        event.preventDefault();
    };
    GuiaProveedorFormularioComponent.prototype.ngOnInit = function () {
        var _this = this;
        oGuiaProveedorFormularioComponent = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.id = params['id'];
        });
        if (this.id != '0') {
            this.toggleButton = true;
            $("#btnAgregarItemOC").addClass('disabled');
            $("#btnEliminarItemOC").addClass('disabled');
        }
        else {
            this.toggleButton = false;
        }
        this.util.listUnidadMedida(function (data) {
            oGuiaProveedorFormularioComponent.listUnidadMedidaCombo = data;
        });
        this.util.listMotivoGuia(function (data) {
            oGuiaProveedorFormularioComponent.listMotivoGuiaCombo = data;
        });
        this.util.listTransporteGuia(function (data) {
            oGuiaProveedorFormularioComponent.listTransporteGuiaCombo = data;
        });
        this.util.listTipoDocIdentidad(function (data) {
            oGuiaProveedorFormularioComponent.listTipoDocIdentidad = data;
        });
        this.listBuscarCliente = [
            {
                id: 1,
                nombre: "FERREYROS",
                ruc: "122565752",
                codigo: ""
            },
        ];
    };
    GuiaProveedorFormularioComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        if (this.id != '0') {
            this._dataService
                .obtener(this.id)
                .subscribe(function (p) {
                _this.guia = p;
                setTimeout(function () {
                    $("input").each(function () {
                        $(this).keydown();
                        if (!$(this).val() && $(this).val() == '')
                            $(this.parentElement).addClass("is-empty");
                    });
                    $("select").each(function () {
                        $(this).keydown();
                        if (!$(this).val() && $(this).val() == '')
                            $(this.parentElement).addClass("is-empty");
                    });
                    $("textarea").each(function () {
                        $(this).keydown();
                        if (!$(this).val() && $(this).val() == '')
                            $(this.parentElement).addClass("is-empty");
                    });
                    dtArticulos.ajax.reload();
                    dtArchivos.ajax.reload();
                }, 100);
            }, function (e) { return console.log(e); }, function () { });
        }
        DatatableFunctions.ModalSettings();
        $('#mdlArchivosAdjuntos').on('shown.bs.modal', function () {
            $('#btnEliminarAA').click();
        });
        dtArchivos = $('#dtArchivos').on('draw.dt', function (e, settings, json) {
            DatatableFunctions.initDatatable(e, settings, json, dtArchivos);
        }).DataTable({
            ajax: function (data, callback, settings) {
                var result = {
                    data: oGuiaProveedorFormularioComponent.guia.docadjuntos
                };
                callback(result);
            },
            columns: [
                { data: 'id' },
                { data: 'nombre' },
                { data: 'descripcion' },
                { data: 'id' },
            ],
            columnDefs: [
                { "className": "text-center", "targets": [1, 2, 3] },
                {
                    render: function (data, type, row) {
                        return '<div class="text-right" height="100%"><div class="checkbox text-right"><label><input type="checkbox" value="' + row.id + '" name="optionsCheckboxes" class="checkboxArchivos"></label></div></div>';
                    },
                    targets: 0,
                    orderable: false,
                },
                {
                    render: function (data, type, row) {
                        return '<a class="editar" href="javascript:void(0);" row-id="' + row.id + '">' +
                            '<button class="btn btn-simple btn-info btn-icon download" rel="tooltip" title="Bajar Archivo" data-placement="left">' +
                            '<i class="material-icons">get_app</i></button></a>' +
                            '<button class="btn btn-simple btn-danger btn-icon remove" rel="tooltip" title="Eliminar" data-placement="left">' +
                            '<i class="material-icons">delete</i>' +
                            '</button>';
                    },
                    targets: 3
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
            var row_id = $tr.find("a.editar").attr('row-id');
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
                var lista = oGuiaProveedorFormularioComponent.guia.docadjuntos;
                var listafiltrada = lista.filter(function (a) { return a.id != row_id; });
                oGuiaProveedorFormularioComponent.guia.docadjuntos = JSON.parse(JSON.stringify(listafiltrada));
                setTimeout(function () {
                    dtArchivos.ajax.reload();
                }, 500);
            }, function (dismiss) {
                // dismiss can be 'cancel', 'overlay',
                // 'close', and 'timer'
            });
            e.preventDefault();
        });
        cargarOrdenCompraDT();
        cargarBuscarOCDT();
        cargarBuscarClienteDT();
        DatatableFunctions.registerCheckAll();
    };
    GuiaProveedorFormularioComponent.prototype.ngOnChanges = function (changes) {
    };
    GuiaProveedorFormularioComponent.prototype.habilitarEdicion = function (e) {
        this.toggleButton = false;
        $("input").prop('disabled', false);
        $("#btnAgregarItemOC").removeClass('disabled');
        $("#btnEliminarItemOC").removeClass('disabled');
    };
    return GuiaProveedorFormularioComponent;
}());
GuiaProveedorFormularioComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'guiaproveedorformulario-cmp',
        template: __webpack_require__("../../../../../src/app/guia/proveedor/formulario/guiaproveedorformulario.component.html"),
        providers: [__WEBPACK_IMPORTED_MODULE_5_app_service_ordencompraservice__["a" /* OrdenCompraService */], __WEBPACK_IMPORTED_MODULE_4_app_service_guiaservice__["a" /* GuiaService */], __WEBPACK_IMPORTED_MODULE_3__service_masterservice__["a" /* MasterService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__service_masterservice__["a" /* MasterService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__service_masterservice__["a" /* MasterService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4_app_service_guiaservice__["a" /* GuiaService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_app_service_guiaservice__["a" /* GuiaService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5_app_service_ordencompraservice__["a" /* OrdenCompraService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_app_service_ordencompraservice__["a" /* OrdenCompraService */]) === "function" && _e || Object])
], GuiaProveedorFormularioComponent);

function cargarBuscarClienteDT() {
    datatable = $('#dtBuscarCliente').on('draw.dt', function (e, settings, json) {
        DatatableFunctions.initDatatable(e, settings, json, datatable);
    }).DataTable({
        /* ajax: {
           "url": "https://jsonplaceholder.typicode.com/posts",
           "dataSrc": ""
         },*/
        "ajax": function (data, callback, settings) {
            console.log(oGuiaProveedorFormularioComponent);
            var result = {
                data: oGuiaProveedorFormularioComponent.listBuscarCliente
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
                    return '<div class="text-right" height="100%"><div class="checkbox text-right"><label><input type="checkbox" name="optionsCheckboxes" ></label></div></div>';
                },
                targets: 0
            },
        ]
    });
}
function cargarBuscarOCDT() {
    datatableOC = $('#dtBuscarOC').on('init.dt', function (e, settings, json) {
        DatatableFunctions.initDatatable(e, settings, json, datatable);
    }).DataTable({
        pageLength: 5,
        searching: false,
        serverSide: true,
        ajax: {
            //url: "http://localhost:3500/occomprador",
            beforeSend: function (request) {
                request.setRequestHeader("Authorization", 'Bearer ' + oGuiaProveedorFormularioComponent.token);
                request.setRequestHeader("origen_datos", 'PEB2M');
            },
            url: "http://b2miningdata.com/api/msoclistar/v1/ordenes/",
            dataSrc: "data",
            data: function (d) {
                if (oGuiaProveedorFormularioComponent.filtrooc.nroordencompra != "") {
                    d.vc_numeroseguimiento_oc = oGuiaProveedorFormularioComponent.filtrooc.nroordencompra;
                }
                d.vc_estado = oGuiaProveedorFormularioComponent.filtrooc.estado;
                if (oGuiaProveedorFormularioComponent.filtrooc.fechacreacioninicio) {
                    var fechacreacioninicio = DatatableFunctions.ConvertStringToDatetime(oGuiaProveedorFormularioComponent.filtrooc.fechacreacioninicio);
                    d.ts_fechacreacion_inicio = DatatableFunctions.FormatDatetimeForMicroService(fechacreacioninicio);
                }
                if (oGuiaProveedorFormularioComponent.filtrooc.fechacreacionfin) {
                    var fechacreacionfin = DatatableFunctions.AddDayEndDatetime(DatatableFunctions.ConvertStringToDatetime(oGuiaProveedorFormularioComponent.filtrooc.fechacreacionfin));
                    d.ts_fechacreacion_fin = DatatableFunctions.FormatDatetimeForMicroService(fechacreacionfin);
                }
                d.vc_tipooc = "M,S";
                d.origen_datos = 'PEB2M';
                d.column_names = 'vc_numeroseguimiento_oc,vc_estado,vc_tipooc,vc_razonsocialproveedor,ts_fechacreacion,fl_valortotal,vc_moneda,in_idoc,in_version,vc_razonsocialcomprador,vc_atenciona,vc_nombre_usrcomprador';
            }
        },
        columns: [
            { data: 'in_idoc', name: 'in_idoc' },
            { data: 'NumeroOrden', name: 'NumeroOrden' },
            { data: 'RazonSocialComprador', name: 'RazonSocialComprador' },
            { data: 'UsuarioComprador', name: 'UsuarioComprador' },
            { data: 'AtencionA', name: 'AtencionA' },
            { data: 'EstadoOrden', name: 'EstadoOrden' },
            { data: 'Version', name: 'Version' },
            { data: 'ValorTotal', name: 'ValorTotal' },
            { data: 'Fecha', name: 'Fecha' },
        ],
        columnDefs: [
            { "className": "text-center", "targets": [1, 2, 3, 4, 5, 6, 7, 8] },
            {
                render: function (data, type, row) {
                    return '<div class="text-right" height="100%"><div class="checkbox text-right"><label><input type="checkbox" name="optionsCheckboxes" value="' + row.in_idoc + '" class="checkboxOC"></label></div></div>';
                },
                targets: 0
            },
            {
                render: function (data, type, row) {
                    //return data +' ('+ row[3]+')';
                    return row.MonedaOrden + ' ' + row.ValorTotal;
                },
                targets: 7
            },
        ]
    });
}
function cargarOrdenCompraDT() {
    dtArticulos = $('#dtArticulos').on('init.dt', function (e, settings, json) {
        DatatableFunctions.initDatatable(e, settings, json, datatable);
    }).DataTable({
        /* ajax: {
           "url": "https://jsonplaceholder.typicode.com/posts",
           "dataSrc": ""
         },*/
        "ajax": function (data, callback, settings) {
            var result = {
                data: oGuiaProveedorFormularioComponent.guia.articulos
            };
            callback(result);
        },
        columns: [
            { data: 'nroitem' },
            { data: 'nroitem' },
            { data: 'nrooc' },
            { data: 'nroitemoc' },
            { data: 'codproducto' },
            { data: 'descproducto' },
            { data: 'cantpedida' },
            { data: 'cantaceptada' },
            { data: 'cantregistradaproveedor' },
            { data: 'unidadmedida' },
            { data: 'pesoneto' },
            { data: 'coddestino' },
            { data: 'destino' },
        ],
        columnDefs: [
            { "className": "text-center", "targets": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12] },
            {
                render: function (data, type, row) {
                    return '<div class="text-right" height="100%"><div class="checkbox text-right"><label><input type="checkbox" value="' + row.nroitem + '" name="optionsCheckboxes" class="checkboxArticulos"></label></div></div>';
                },
                targets: 0
            },
        ]
    });
    dtArticulos.on('click', '.remove', function (e) {
        var $tr = $(this).closest('tr');
        var nroitem = $tr.find("a").attr('row-id');
        swal({
            text: "¿Desea eliminar el artículo seleccionado?",
            type: "warning",
            showCancelButton: true,
            confirmButtonText: "Si",
            cancelButtonText: "No",
            buttonsStyling: false,
            confirmButtonClass: "btn btn-default",
            cancelButtonClass: "btn btn-warning",
        }).then(function () {
            var lista = oGuiaProveedorFormularioComponent.guia.articulos;
            var listafiltrada = lista.filter(function (a) { return a.nroitem != nroitem; });
            oGuiaProveedorFormularioComponent.guia.articulos = JSON.parse(JSON.stringify(ActualizarCorrelativos(listafiltrada)));
            setTimeout(function () {
                dtArticulos.ajax.reload();
            }, 500);
        }, function (dismiss) {
            // dismiss can be 'cancel', 'overlay',
            // 'close', and 'timer'
        });
        e.preventDefault();
    });
}
function ActualizarCorrelativos(lista) {
    var index = 1;
    for (var _i = 0, lista_1 = lista; _i < lista_1.length; _i++) {
        var item = lista_1[_i];
        item.nroitem = index++;
    }
    return lista;
}
var _a, _b, _c, _d, _e;
//# sourceMappingURL=guiaproveedorformulario.component.js.map

/***/ }),

/***/ "../../../../../src/app/model/guia.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Guia; });
/* unused harmony export Articulo */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Archivo; });
/* unused harmony export GuiaBuscar */
/* unused harmony export GuiaFiltros */
var Guia = (function () {
    function Guia() {
        this.fechaemision = null;
        this.fechainiciotraslado = null;
        this.fechaprobablearribo = null;
        this.articulos = [];
        this.docadjuntos = [];
    }
    return Guia;
}());

var Articulo = (function () {
    function Articulo() {
    }
    return Articulo;
}());

var Archivo = (function () {
    function Archivo() {
    }
    return Archivo;
}());

var GuiaBuscar = (function () {
    function GuiaBuscar() {
    }
    return GuiaBuscar;
}());

var GuiaFiltros = (function () {
    function GuiaFiltros() {
    }
    return GuiaFiltros;
}());

//# sourceMappingURL=guia.js.map

/***/ }),

/***/ "../../../../../src/app/service/guiaservice.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GuiaService; });
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


var GuiaService = (function () {
    function GuiaService(http) {
        this.http = http;
        this.urlAdd = 'http://b2miningdata.com/irfq/v1/postrfq/';
        this.urlGet = "http://b2miningdata.com/api/msguiasdetalle/v1/guias/";
    }
    GuiaService.prototype.convertStringToDate = function (strDate) {
        return new Date(strDate);
    };
    GuiaService.prototype.obtener = function (idRfq) {
        idRfq = '651eace1-5cc1-4087-9c43-14f37688d5ec';
        var items$ = this.http
            .get(this.urlGet + idRfq, { headers: this.getHeaders() })
            .map(this.extractData2)
            .catch(this.handleError);
        return items$;
    };
    /*
      add(item: RFQCompradorInsert): Observable<any> {
        let headers = this.getHeaders();
        let options = new RequestOptions({ headers: headers });
        return this.http.post(this.urlAdd, item, options)
          .map(this.extractData)
          .catch(this.handleError);
      }*/
    GuiaService.prototype.extractData2 = function (res) {
        //console.log('extractData2', res);
        var respuesta = {
            status: res ? res.status : -1,
            statusText: res ? res.statusText : "ERROR",
            data: res ? res.json() || {} : {},
        };
        var objeto_json = res.json();
        var nroguia = objeto_json.data.NroGuia;
        var parts = [];
        if (nroguia)
            parts = nroguia.split('-');
        var guia = {
            id: objeto_json.data.IdGuia,
            nroguia: nroguia,
            nroguia1: parts.length > 0 ? parts[0] : '',
            nroguia2: parts.length > 1 ? parts[1] : '',
            ruccliente: objeto_json.data.RucCliente,
            razonsocialcliente: objeto_json.data.RazonSocialCliente,
            rucproveedor: objeto_json.data.RucProveedor,
            razonsocialproveedor: objeto_json.data.RazonSocialProveedor,
            fechaemision: DatatableFunctions.ConvertStringToDatetime(objeto_json.data.FechaEmision),
            fechainiciotraslado: DatatableFunctions.ConvertStringToDatetime(objeto_json.data.FechaTraslado),
            fechaprobablearribo: DatatableFunctions.ConvertStringToDatetime(objeto_json.data.FechaArribo),
            motivoguia: objeto_json.data.MotivoGuia,
            observaciones: objeto_json.data.Observacion,
            tipodoctransporte: objeto_json.data.TipoDocumento,
            rucdnitransporte: objeto_json.data.NumDocumento,
            razonsocialnombretransporte: objeto_json.data.RazonSocialTransportista,
            placatransporte: objeto_json.data.NumPlaca,
            direcciontransporte: objeto_json.data.DireccionTransportista,
            codigomtctransporte: objeto_json.data.CodigoRegistroMTC,
            tipotransporte: objeto_json.data.TipoTransporte,
            puntopartida: objeto_json.data.PuntoPartida,
            puntollegada: objeto_json.data.PuntoLlegada,
            alamcendestino: objeto_json.data.AlamacenDestino,
            totalbultos: objeto_json.data.TotalBultos,
            totalvolumen: objeto_json.data.TotalVolumen,
            totalvolumenund: objeto_json.data.IsoVolumen,
            totalpesobruto: objeto_json.data.TotalPesoBruto,
            totalpesobrutound: objeto_json.data.IsoPeso,
            tara: objeto_json.data.Tara,
            taraund: objeto_json.data.IsoPeso,
            totalpesoneto: objeto_json.data.TotalPesoNeto,
            totalpesonetound: objeto_json.data.IsoPeso,
            nroerpdocmaterial: objeto_json.data.DocumentoMaterial,
            articulos: [],
            docadjuntos: [],
        };
        if (objeto_json.data.Productos) {
            var index = 1;
            for (var _i = 0, _a = objeto_json.data.Productos; _i < _a.length; _i++) {
                var item = _a[_i];
                var p = {
                    nroitem: index++,
                    nrooc: item.NroOC,
                    nroitemoc: item.NroItemOC,
                    codproducto: item.CodigoProducto,
                    descproducto: item.Descripcion,
                    cantpedida: item.CantidadPedida,
                    cantaceptada: item.CantidadAceptada,
                    cantregistradaproveedor: item.CantidadDespachada,
                    unidadmedida: item.Unidad,
                    pesoneto: item.PesoNeto,
                    coddestino: item.Destino,
                    destino: item.Destino,
                };
                guia.articulos.push(p);
            }
        }
        guia.docadjuntos = [{
                id: 1,
                nombre: 'archivo 1',
                descripcion: 'archivo 1',
            }];
        return guia;
        //return body.data || {};
    };
    GuiaService.prototype.extractData = function (res) {
        var respuesta = {
            status: res ? res.status : -1,
            statusText: res ? res.statusText : "ERROR",
            data: res ? res.json() || {} : {},
        };
        return respuesta;
        //return body.data || {};
    };
    GuiaService.prototype.handleError = function (error) {
        console.log('eee', error);
        console.error('handleError', error.message || error);
        return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].throw(error.message || error);
    };
    GuiaService.prototype.getHeaders = function () {
        // I included these headers because otherwise FireFox
        // will request text/html
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Accept', 'application/json');
        headers.append('origen_datos', 'PEB2M');
        headers.append('Authorization', 'Bearer ' + sessionStorage.getItem('token'));
        // headers.append('Access-Control-Allow-Origin', '*');
        return headers;
    };
    return GuiaService;
}());
GuiaService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], GuiaService);

var _a;
//# sourceMappingURL=guiaservice.js.map

/***/ })

});
//# sourceMappingURL=guia.module.chunk.js.map