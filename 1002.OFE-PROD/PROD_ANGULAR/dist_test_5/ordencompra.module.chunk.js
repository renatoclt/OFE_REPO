webpackJsonp(["ordencompra.module"],{

/***/ "../../../../../src/app/ordencompra/comprador/buscar/ordencompracompradorbuscar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-12\">\r\n                <div class=\"card\">\r\n                    <form method=\"#\" action=\"#\">\r\n                        <div class=\"card-header card-header-text\" data-background-color=\"blue\">\r\n                            <h4 class=\"card-title\">Buscar Orden de Compra</h4>\r\n                        </div>\r\n                        <div class=\"card-content\">\r\n                            <div class=\"row\">\r\n                                <div class=\"col-sm-4\">\r\n                                    <div class=\"form-group label-floating\">\r\n                                        <label class=\"control-label\">N° Orden de compra\r\n                                        </label>\r\n                                        <input [(ngModel)]=\"filtro.nroordencompra\" name=\"nroordencompra\" type=\"text\" class=\"form-control\">\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-sm-4\">\r\n                                    <div class=\"form-group label-floating\">\r\n                                        <label class=\"control-label\">Estado</label>\r\n                                        <select name=\"estado\" class=\"form-control\" [(ngModel)]=\"filtro.estado\">\r\n                                            <option value=\"NONE\">TODOS</option>\r\n                                            <option *ngFor=\"let optEstado of listEstadoCombo\" value=\"{{optEstado.valor}}\"> {{optEstado.desc}} </option>           \r\n           \r\n\r\n                                        </select>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-sm-4\">\r\n                                    <div class=\"form-group\">\r\n                                        <label class=\"label-on-left\">Tipo Orden de Compra</label>\r\n                                        <div class=\"togglebutton\">\r\n                                            <label>\r\n                                                <input type=\"checkbox\" [checked]=\"filtro.material\" (change)=\"filtro.material = !filtro.material\" > Material\r\n                                            </label>\r\n                                            <label>\r\n                                                <input type=\"checkbox\" [checked]=\"filtro.servicio\"  (change)=\"filtro.servicio = !filtro.servicio\" > Servicio\r\n                                        </label>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n\r\n                            </div>\r\n                            <div class=\"row\">\r\n                                <div class=\"col-sm-4\">\r\n                                    <div class=\"form-group label-floating\">\r\n                                        <label class=\"control-label\">Fecha Registro Del</label>\r\n                                        <input type=\"text\" class=\"form-control\"  [(ngModel)]=\"filtro.fechacreacioninicio\" name=\"fechacreacioninicio\" datepicker />\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-sm-4\">\r\n                                    <div class=\"form-group label-floating\">\r\n                                        <label class=\"control-label\">al</label>\r\n                                        <input type=\"text\" [(ngModel)]=\"filtro.fechacreacionfin\" name=\"fechacreacionfin\"  class=\"form-control\" datepicker />\r\n                                    </div>\r\n                                </div>\r\n                               \r\n\r\n                                <div class=\"col-sm-4\">\r\n                                    <div class=\"form-group\">\r\n                                        <button class=\"btn btn-default\" (click)=\"clicked($event)\">Buscar</button>\r\n                                        <button class=\"btn btn-default\" (click)=\"limpiar($event)\">Limpiar</button>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n\r\n                            <nav class=\"navbar navbar-info\" role=\"navigation\">\r\n                                <div class=\"container-fluid\">\r\n                                   <!--  <div class=\"navbar-header\">\r\n\r\n                                        <span class=\"navbar-brand\">Resultados</span>\r\n                                    </div>\r\n\r\n                                   <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\r\n                                        <ul class=\"nav navbar-nav\">\r\n\r\n\r\n                                            <li><a href=\"javascript:void(0)\">Crear</a></li>\r\n                                            <li><a href=\"javascript:void(0)\">Copiar</a></li>\r\n                                            <li><a href=\"javascript:void(0)\">Modificar</a></li>\r\n                                            <li><a href=\"javascript:void(0)\">Activar</a></li>\r\n                                            <li><a href=\"javascript:void(0)\">Anular</a></li>\r\n                                           \r\n\r\n                                        </ul>\r\n                                    </div>-->\r\n                                </div>\r\n                            </nav>\r\n                            <div class=\"material-datatables table-responsive\">\r\n                                <table id=\"dtResultados\" class=\"table table-striped table-no-bordered table-hover\" cellspacing=\"0\" width=\"100%\" style=\"width:100%\">\r\n                                    <thead>\r\n                                        <tr>\r\n                                            <!--<th class=\"disabled-sorting text-right\">\r\n                                                <div class=\"checkbox text-right\">\r\n                                                    <label><input type=\"checkbox\" name=\"optionsCheckboxes\" class=\"checkall\" ></label>\r\n                                                </div>\r\n                                            </th> -->\r\n                                            <th>Nro. O.C.</th>\r\n                                            <th>Estado</th>\r\n                                            <th>Tipo de Orden</th>\r\n                                            <th>Usuario Comprador</th>\r\n                                            <th>Organización Proveedora</th>\r\n                                            <th>Atención A</th>\r\n                                            <th>Versión</th>\r\n                                            <th>Total</th>\r\n                                            <th>Fecha Registro</th>\r\n                                            <th class=\"disabled-sorting text-center\">Acciones</th>\r\n                                        </tr>\r\n                                    </thead>\r\n\r\n                                </table>\r\n                            </div>\r\n\r\n                        </div>\r\n                    </form>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/ordencompra/comprador/buscar/ordencompracompradorbuscar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrdenCompraCompradorBuscarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_app_utils__ = __webpack_require__("../../../../../src/app/utils/app.utils.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_masterservice__ = __webpack_require__("../../../../../src/app/service/masterservice.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var oOrdenCompraCompradorBuscarComponent;
var datatable;
var OrdenCompraCompradorBuscarComponent = (function () {
    function OrdenCompraCompradorBuscarComponent(location, router, route, _masterService) {
        this.router = router;
        this.route = route;
        this._masterService = _masterService;
        this.location = location;
        this.util = new __WEBPACK_IMPORTED_MODULE_2__utils_app_utils__["a" /* AppUtils */](this.router, this._masterService);
    }
    OrdenCompraCompradorBuscarComponent.prototype.navigate = function (nav) {
        this.router.navigate(nav, { relativeTo: this.route });
    };
    OrdenCompraCompradorBuscarComponent.prototype.validarfiltros = function () {
        if (this.filtro.material == false && this.filtro.servicio == false) {
            swal({
                text: "Tipo Orden de Compra es un campo requerido. Por favor completar y volver a intentar!",
                type: 'warning',
                buttonsStyling: false,
                confirmButtonClass: "btn btn-warning"
            });
            return false;
        }
        if (this.filtro.fechacreacioninicio != null && this.filtro.fechacreacioninicio.toString() != "" && this.filtro.fechacreacionfin != null && this.filtro.fechacreacionfin.toString() != "") {
            var fechacreacioninicio = DatatableFunctions.ConvertStringToDatetime(oOrdenCompraCompradorBuscarComponent.filtro.fechacreacioninicio);
            var fechacreacionfin = DatatableFunctions.ConvertStringToDatetime(oOrdenCompraCompradorBuscarComponent.filtro.fechacreacionfin);
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
    OrdenCompraCompradorBuscarComponent.prototype.clicked = function (event) {
        if (this.validarfiltros())
            datatable.ajax.reload();
        event.preventDefault();
    };
    OrdenCompraCompradorBuscarComponent.prototype.limpiar = function (event) {
        this.filtroDefecto();
        setTimeout(function () {
            $("input").each(function () {
                if (!$(this).val() && $(this).val() == '')
                    $(this.parentElement).addClass("is-empty");
            });
        }, 200);
        event.preventDefault();
    };
    OrdenCompraCompradorBuscarComponent.prototype.filtroDefecto = function () {
        var fechacreacioni = new Date();
        fechacreacioni.setMonth(fechacreacioni.getMonth() - 1);
        this.filtro = {
            nroordencompra: '',
            estado: 'NONE',
            fechacreacioninicio: fechacreacioni,
            fechacreacionfin: new Date(),
            material: true,
            servicio: true,
        };
    };
    OrdenCompraCompradorBuscarComponent.prototype.ngOnInit = function () {
        oOrdenCompraCompradorBuscarComponent = this;
        this.util.listEstadoOC(function (data) {
            oOrdenCompraCompradorBuscarComponent.listEstadoCombo = data;
        });
        this.filtroDefecto();
        this.resultados = [
            {
                nroordencompra: 4590015491,
                estado: DataHardCode.get(4590015491).estado,
                tipoorden: 'Material',
                comprador: 'GRUPO CENTENARIO S.A.',
                proveedor: 'SODIMAC PERU S.A.',
                atenciona: 'Sr. ANTONIO TAFUR',
                version: '1',
                total: 'USD 336.3000',
                fecharegistro: '05/07/2017',
            },
            {
                nroordencompra: 4531046368,
                estado: DataHardCode.get(4531046368).estado,
                tipoorden: 'Material',
                comprador: 'GRUPO CENTENARIO S.A.',
                proveedor: 'EMPRESA EDITORA EL COMERCIO SA',
                atenciona: 'Sr. ANTONIO TAFUR ',
                version: '1',
                total: 'PEN 390.0018',
                fecharegistro: '05/07/2017',
            },
            {
                nroordencompra: 4531046371,
                estado: DataHardCode.get(4531046371).estado,
                tipoorden: 'Servicio',
                comprador: 'GRUPO CENTENARIO S.A.',
                proveedor: 'EMPRESA EDITORA EL COMERCIO SA',
                atenciona: 'Sra. Ana Carmen Chung',
                version: '1',
                total: 'PEN 388.0900',
                fecharegistro: '27/01/2017',
            },
            {
                nroordencompra: 4531046600,
                estado: DataHardCode.get(4531046600).estado,
                tipoorden: 'Servicio',
                comprador: 'GRUPO CENTENARIO S.A.',
                proveedor: 'EMPRESA EDITORA EL COMERCIO SA',
                atenciona: 'Sr. ANTONIO TAFUR ',
                version: '1',
                total: 'PEN 374.6400',
                fecharegistro: '27/01/2017',
            },
        ];
    };
    OrdenCompraCompradorBuscarComponent.prototype.ngAfterViewInit = function () {
        cargarDataTable();
        DatatableFunctions.registerCheckAll();
        // sola para demo borrar
        var url = this.location.prepareExternalUrl(this.location.path());
        if (url.indexOf('ordencompra/refrescar') >= 0) {
            DataHardCode.clearStorage();
            var usuario = JSON.parse(localStorage.getItem('usuarioActual'));
            if (usuario.perfil == "comprador")
                this.navigate(['/ordencompra/comprador/buscar']);
            else
                this.navigate(['/ordencompra/proveedor/buscar']);
        }
    };
    return OrdenCompraCompradorBuscarComponent;
}());
OrdenCompraCompradorBuscarComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ordencompracompradorbuscar-cmp',
        template: __webpack_require__("../../../../../src/app/ordencompra/comprador/buscar/ordencompracompradorbuscar.component.html"),
        providers: [__WEBPACK_IMPORTED_MODULE_3__service_masterservice__["a" /* MasterService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__angular_common__["Location"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_common__["Location"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__service_masterservice__["a" /* MasterService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__service_masterservice__["a" /* MasterService */]) === "function" && _d || Object])
], OrdenCompraCompradorBuscarComponent);

function filtrarResultados(item) {
    //
    var nroordencompra = item.nroordencompra;
    nroordencompra = nroordencompra + "";
    var nroordencomprafiltro = oOrdenCompraCompradorBuscarComponent.filtro.nroordencompra;
    if (nroordencomprafiltro) {
        nroordencomprafiltro = nroordencomprafiltro + "";
        return nroordencompra.indexOf(nroordencomprafiltro) >= 0;
    }
    else
        return true;
}
function cargarDataTable() {
    datatable = $('#dtResultados').on('draw.dt', function (e, settings, json) {
        DatatableFunctions.initDatatable(e, settings, json, datatable);
    }).DataTable({
        order: [[1, "desc"]],
        searching: false,
        serverSide: true,
        ajax: {
            //url: "http://localhost:3500/occomprador",
            beforeSend: function (request) {
                request.setRequestHeader("Authorization", 'Bearer ' + sessionStorage.getItem('token'));
                request.setRequestHeader("origen_datos", 'PEB2M');
            },
            url: "http://b2miningdata.com/api/msoclistar/v1/ordenes/",
            dataSrc: "data",
            data: function (d) {
                if (oOrdenCompraCompradorBuscarComponent.filtro.nroordencompra != "") {
                    d.NumeroOrden = oOrdenCompraCompradorBuscarComponent.filtro.nroordencompra;
                }
                d.EstadoOrden = oOrdenCompraCompradorBuscarComponent.filtro.estado;
                if (oOrdenCompraCompradorBuscarComponent.filtro.fechacreacioninicio) {
                    var fechacreacioninicio = DatatableFunctions.ConvertStringToDatetime(oOrdenCompraCompradorBuscarComponent.filtro.fechacreacioninicio);
                    d.FechaCrecionInicio = DatatableFunctions.FormatDatetimeForMicroService(fechacreacioninicio);
                }
                if (oOrdenCompraCompradorBuscarComponent.filtro.fechacreacionfin) {
                    var fechacreacionfin = DatatableFunctions.AddDayEndDatetime(DatatableFunctions.ConvertStringToDatetime(oOrdenCompraCompradorBuscarComponent.filtro.fechacreacionfin));
                    d.FechaCrecionFin = DatatableFunctions.FormatDatetimeForMicroService(fechacreacionfin);
                }
                var tipos_oc = [];
                if (oOrdenCompraCompradorBuscarComponent.filtro.material)
                    tipos_oc.push('M');
                if (oOrdenCompraCompradorBuscarComponent.filtro.servicio)
                    tipos_oc.push('S');
                d.TipoOrden = tipos_oc.join(",");
                d.column_names = 'EstadoOrden,TipoOrden,Fecha,NumeroOrden,NumeroRfq,RazonSocialVendedor,ValorTotal,AtencionA,MonedaOrden,FechaRegistro,RazonSocialComprador,UsuarioComprador,Version';
            }
        },
        columns: [
            /*{ data: 'nroordencompra' },*/
            { data: 'NumeroOrden', name: 'NumeroOrden' },
            { data: 'EstadoOrden', name: 'EstadoOrden' },
            { data: 'TipoOrden', name: 'TipoOrden' },
            { data: 'RazonSocialComprador', name: 'RazonSocialComprador' },
            { data: 'NombreVendedor', name: 'NombreVendedor' },
            { data: 'AtencionA', name: 'AtencionA' },
            { data: 'Version', name: 'Version' },
            { data: 'ValorTotal', name: 'ValorTotal' },
            { data: 'Fecha', name: 'Fecha' },
            { data: 'in_idoc', name: 'in_idoc' }
        ],
        columnDefs: [
            { "className": "text-center", "targets": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] },
            {
                render: function (data, type, row) {
                    //return data +' ('+ row[3]+')';
                    return row.MonedaOrden + ' ' + row.ValorTotal;
                },
                targets: 7
            },
            {
                render: function (data, type, row) {
                    return '<div class="text-center"><a href="/ordencompra/comprador/formulario/' + row.in_idoc + '" nroordencompra="' + row.in_idoc + '">' +
                        '<button class="btn btn-simple btn-info btn-icon edit" rel="tooltip" title="Ver/Editar" data-placement="left"><i class="material-icons">visibility</i></button></a>' +
                        '</button></div>';
                },
                targets: 9,
                orderable: false
            }
        ],
    });
    datatable.on('click', '.edit', function (event) {
        var $tr = $(this).closest('tr');
        var data = datatable.row($tr).data();
        //console.log($tr.find( "a" ).attr('nroordencompra'));
        var nroordencompra = $tr.find("a").attr('nroordencompra');
        var nav = ['/ordencompra/comprador/formulario', nroordencompra];
        oOrdenCompraCompradorBuscarComponent.navigate(nav);
        event.preventDefault();
    });
}
var _a, _b, _c, _d;
//# sourceMappingURL=ordencompracompradorbuscar.component.js.map

/***/ }),

/***/ "../../../../../src/app/ordencompra/comprador/formulario/ordencompracompradorformulario.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-12\">\r\n        <div class=\"card\">\r\n          <form method=\"#\" action=\"#\">\r\n            <div class=\"card-header card-header-text\" data-background-color=\"blue\">\r\n              <h4 class=\"card-title\">Orden de Compra</h4>\r\n            </div>\r\n            <div class=\"card-content\">\r\n              <div class=\"row\">\r\n                <div class=\"col-sm-3\">\r\n                  <div class=\"form-group label-floating\">\r\n                    <label class=\"control-label\">Organización Compradora\r\n                      <span class=\"star\"></span>\r\n                    </label>\r\n                    <input name=\"comprador\" [(ngModel)]=\"item.comprador\" required type=\"text\" class=\"form-control\" [disabled]=\"toggleButton\">\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-sm-3\">\r\n                  <div class=\"form-group label-floating\">\r\n                    <label class=\"control-label\">RUC Comprador\r\n                      <span class=\"star\"></span>\r\n                    </label>\r\n                    <input name=\"ruccomprador\" [(ngModel)]=\"item.ruccomprador\" required type=\"text\" class=\"form-control\" [disabled]=\"toggleButton\">\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-sm-2\">\r\n                  <div class=\"form-group label-floating\">\r\n                    <label class=\"control-label\">Fecha de Emisión\r\n                      <span class=\"star\"></span>\r\n                    </label>\r\n                    <input name=\"fecharegistro\" [(ngModel)]=\"item.fecharegistro\" datepicker required type=\"text\" class=\"form-control\" [disabled]=\"toggleButton\">\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-sm-3\">\r\n                  <div class=\"form-group label-floating\">\r\n                    <label class=\"control-label\">Orden de {{item.tipo}}\r\n                      <span class=\"star\"></span>\r\n                    </label>\r\n                    <input name=\"nroordencompra\" [(ngModel)]=\"item.nroordencompra\" required type=\"text\" class=\"form-control\" [disabled]=\"toggleButton\">\r\n                  </div>\r\n                </div>\r\n\r\n\r\n\r\n\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col-sm-3\">\r\n                  <div class=\"form-group label-floating\">\r\n                    <label class=\"control-label\">Organización Proveedora\r\n                      <span class=\"star\"></span>\r\n                    </label>\r\n                    <input name=\"proveedor\" [(ngModel)]=\"item.proveedor\" required type=\"text\" class=\"form-control\" [disabled]=\"toggleButton\">\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-sm-3\">\r\n                  <div class=\"form-group label-floating\">\r\n                    <label class=\"control-label\">RUC Proveedor\r\n                      <span class=\"star\"></span>\r\n                    </label>\r\n                    <input name=\"rucproveedor\" [(ngModel)]=\"item.rucproveedor\" required type=\"text\" class=\"form-control\" [disabled]=\"toggleButton\">\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-sm-3\">\r\n                  <div class=\"form-group label-floating\">\r\n                    <label class=\"control-label\">Código Proveedor\r\n                      <span class=\"star\"></span>\r\n                    </label>\r\n                    <input name=\"codigoproveedor\" [(ngModel)]=\"item.codigoproveedor\" required type=\"text\" class=\"form-control\" [disabled]=\"toggleButton\">\r\n                  </div>\r\n                </div>\r\n\r\n                \r\n                <div class=\"col-sm-2\">\r\n                  <div class=\"form-group label-floating\">\r\n                    <label class=\"control-label\">Versión OC\r\n                      <span class=\"star\"></span>\r\n                    </label>\r\n                    <input name=\"version\" [(ngModel)]=\"item.version\" required type=\"text\" class=\"form-control\" [disabled]=\"toggleButton\">\r\n                  </div>\r\n                </div>\r\n\r\n                <div class=\"col-sm-2\">\r\n\r\n                  <div class=\"form-group label-floating\">\r\n                    <label class=\"control-label\">Estado Web</label>\r\n                    <input name=\"estadoweb\" [(ngModel)]=\"item.estadoweb\" required type=\"text\" class=\"form-control\" [disabled]=\"toggleButton\">\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n\r\n\r\n              <div class=\"row\">\r\n                <div class=\"col-sm-4\">\r\n                  <div class=\"form-group label-floating\">\r\n                    <label class=\"control-label\">Atención a\r\n                      <span class=\"star\"></span>\r\n                    </label>\r\n                    <textarea name=\"atenciona\" [(ngModel)]=\"item.atenciona\" required type=\"text\" class=\"form-control\" rows=\"3\" [disabled]=\"toggleButton\"> </textarea>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class=\"col-sm-4\">\r\n                  <div class=\"form-group label-floating\">\r\n                    <label class=\"control-label\">Contactar con\r\n                      <span class=\"star\"></span>\r\n                    </label>\r\n                    <textarea name=\"contactarcon\" [(ngModel)]=\"item.contactarcon\" required type=\"text\" class=\"form-control\" rows=\"3\" [disabled]=\"toggleButton\"> </textarea>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-sm-4\">\r\n                  <div class=\"form-group label-floating\">\r\n                    <label class=\"control-label\">Creado por \r\n                      <span class=\"star\"></span>\r\n                    </label>\r\n                    <textarea name=\"preparadapor\" [(ngModel)]=\"item.preparadapor\" required type=\"text\" class=\"form-control\" rows=\"3\" [disabled]=\"toggleButton\"> </textarea>\r\n                  </div>\r\n                </div>\r\n\r\n              </div>\r\n\r\n\r\n\r\n              <div class=\"row\">\r\n                <div class=\"col-sm-4\">\r\n                  <div class=\"form-group label-floating\">\r\n                    <label class=\"control-label\">Facturar a\r\n                      <span class=\"star\"></span>\r\n                    </label>\r\n                    <textarea [(ngModel)]=\"item.facturara\" name=\"facturara\" class=\"form-control\" rows=\"4\" [disabled]=\"toggleButton\"></textarea>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-sm-4\">\r\n                  <div class=\"form-group label-floating\">\r\n                    <label class=\"control-label\">Recepción de Factura\r\n                      <span class=\"star\"></span>\r\n                    </label>\r\n                    <textarea [(ngModel)]=\"item.enviarfacturaa\" name=\"enviarfacturaa\" class=\"form-control\" rows=\"4\" [disabled]=\"toggleButton\"></textarea>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-sm-4\">\r\n                  <div class=\"form-group label-floating\">\r\n                    <label class=\"control-label\">Grupo de Compra\r\n                      <span class=\"star\"></span>\r\n                    </label>\r\n                    <textarea [(ngModel)]=\"item.grupocompra\" name=\"grupocompra\" class=\"form-control\" rows=\"4\" [disabled]=\"toggleButton\"></textarea>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n\r\n\r\n\r\n\r\n              <div class=\"row\">\r\n                <div class=\"col-md-12\">\r\n                  <div class=\"card\">\r\n                    <div class=\"card-header card-header-icon\" data-background-color=\"blue\">\r\n                      <i class=\"material-icons\">assignment</i>\r\n                    </div>\r\n                    <div class=\"card-content\">\r\n                      <h4 class=\"card-title\">Condiciones</h4>\r\n                      <div class=\"row\">\r\n                        <div class=\"col-sm-3\">\r\n                          <div class=\"form-group label-floating\">\r\n                            <label class=\"control-label\">Moneda<span class=\"star\"></span></label>\r\n                            <input name=\"moneda\" [(ngModel)]=\"item.moneda\" required type=\"text\" class=\"form-control\" [disabled]=\"toggleButton\">\r\n                          </div>\r\n                        </div>\r\n                        <div class=\"col-sm-3\">\r\n                          <div class=\"form-group label-floating\">\r\n                            <label class=\"control-label\">Forma de Pago<span class=\"star\"></span></label>\r\n                            <input name=\"formapago\" [(ngModel)]=\"item.formapago\" required type=\"text\" class=\"form-control\" [disabled]=\"toggleButton\">\r\n                          </div>\r\n                        </div>\r\n                        <div class=\"col-sm-3\">\r\n                          <div class=\"form-group label-floating\">\r\n                            <label class=\"control-label\">Fecha de Inicio de Contrato<span class=\"star\"></span></label>\r\n                            <input name=\"fechainiciocontrato\" [(ngModel)]=\"item.fechainiciocontrato\" datepicker required type=\"text\" class=\"form-control\" [disabled]=\"toggleButton\">\r\n                          </div>\r\n                        </div>\r\n                        <div class=\"col-sm-3\">\r\n                          <div class=\"form-group label-floating\">\r\n                            <label class=\"control-label\">Fecha Fin de Contrato<span class=\"star\"></span></label>\r\n                            <input name=\"fechafincontrato\" [(ngModel)]=\"item.fechafincontrato\" datepicker required type=\"text\" class=\"form-control\" [disabled]=\"toggleButton\">\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n\r\n\r\n\r\n                    </div>\r\n                    <!-- end content-->\r\n                  </div>\r\n                  <!--  end card  -->\r\n                </div>\r\n                <!-- end col-md-12 -->\r\n              </div>\r\n\r\n              <div class=\"row\">\r\n                <div class=\"col-md-12\">\r\n                  <div class=\"card\">\r\n                    <div class=\"card-header card-header-icon\" data-background-color=\"blue\">\r\n                      <i class=\"material-icons\">assignment</i>\r\n                    </div>\r\n                    <div class=\"card-content\">\r\n                      <h4 class=\"card-title\">Detalle de Artículos</h4>\r\n\r\n                      <div class=\"material-datatables table-responsive\" style=\"display:block\">\r\n                        <table id=\"dtArticulos\" class=\"table table-striped table-no-bordered table-hover\" cellspacing=\"0\" width=\"100%\" style=\"width:100%\">\r\n\r\n                          <thead>\r\n                            <tr>\r\n                              <th>Posición</th>\r\n\r\n                              <th>Descripción del Producto</th>\r\n                              <th class=\"disabled-sorting\">Cantidad</th>\r\n                              <th class=\"disabled-sorting\">Unidad</th>\r\n                              <th class=\"disabled-sorting\">Precio Unitario</th>\r\n                              <th class=\"disabled-sorting\">Precio Total</th>\r\n                              <th class=\"disabled-sorting\">IGV</th>\r\n                              <th class=\"disabled-sorting\">Fecha de Entrega</th>\r\n                            </tr>\r\n                          </thead>\r\n\r\n\r\n                        </table>\r\n                      </div>\r\n                      <!-- end content-->\r\n                    </div>\r\n                  </div>\r\n                  <!--  end card  -->\r\n                </div>\r\n                <!-- end col-md-12 -->\r\n              </div>\r\n\r\n\r\n\r\n              <div class=\"row\">\r\n                <div class=\"col-sm-8\">\r\n                  \r\n                  <div class=\"row\">\r\n\r\n                    <div class=\"col-sm-12\">\r\n                      <div class=\"form-group label-floating\">\r\n                        <label class=\"control-label\">Aprobado por<span class=\"star\"></span></label>\r\n                        <div class=\"aprobadopor\">\r\n                          <br/>\r\n                          <p >Aprobado Nivel 1: GMENDEZG</p>\r\n                          <p style=\"display: none;\"> \r\n                            <img src=\"{{this.baseurl}}assets/img/firmas/GMENDEZG.jpg\" height=\"64\" class=\"displayed\" style=\"display: block; margin-left: auto; margin-right: auto; padding:0; border:0;\">\r\n                          </p>\r\n                          <p>Aprobado Nivel 2: JPEREZL</p>\r\n                          <p style=\"display: none;\"> \r\n                            <img src=\"{{this.baseurl}}assets/img/firmas/JPEREZL.jpg\" height=\"64\" class=\"displayed\" style=\"display: block; margin-left: auto; margin-right: auto; padding:0; border:0\"></p>\r\n                          <p>Aprobado Nivel 3: AROLDANC</p>\r\n                          <p style=\"display: none;\"> \r\n                            <img src=\"{{this.baseurl}}assets/img/firmas/AROLDANC.png\" height=\"64\" class=\"displayed\" style=\"display: block; margin-left: auto; margin-right: auto; padding:0; border:0\"></p>\r\n\r\n                          <p class=\"form-control\" disabled>\r\n                            \r\n                          </p>\r\n                        </div>\r\n\r\n                      </div>\r\n\r\n\r\n                    </div>\r\n\r\n\r\n\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-sm-4\">\r\n\r\n                  <div class=\"row\">\r\n                    <div class=\"col-sm-12\">\r\n                      <div class=\"form-group label-floating\">\r\n                        <label class=\"control-label\">SUB TOTAL ({{item.moneda}})<span class=\"star\"></span></label>\r\n                        <input [(ngModel)]=\"item.subtotal\" name=\"subtotal\" class=\"form-control\" [disabled]=\"toggleButton\">\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"col-sm-12\" *ngIf=\"item.condiciones\">\r\n                      <div class=\"form-group label-floating\">\r\n                        <label class=\"control-label\">UTILIDADES (5.0000%)<span class=\"star\"></span></label>\r\n                        <input [(ngModel)]=\"item.utilidades\" name=\"utilidades\" class=\"form-control\" [disabled]=\"toggleButton\">\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div class=\"col-sm-12\" *ngIf=\"item.condiciones\">\r\n                      <div class=\"form-group label-floating\">\r\n                        <label class=\"control-label\">GASTOS GENERALES (4.0700%)<span class=\"star\"></span></label>\r\n                        <input [(ngModel)]=\"item.gastosgenerales\" name=\"gastosgenerales\" class=\"form-control\" [disabled]=\"toggleButton\">\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div class=\"col-sm-12\">\r\n                      <div class=\"form-group label-floating\">\r\n                        <label class=\"control-label\">VALOR DE VENTA ({{item.moneda}})<span class=\"star\"></span></label>\r\n                        <input [(ngModel)]=\"item.valorventa\" name=\"valorventa\" class=\"form-control\" [disabled]=\"toggleButton\">\r\n                      </div>\r\n                    </div>\r\n                   \r\n                    <div class=\"col-sm-12\">\r\n                      <div class=\"form-group label-floating\">\r\n                        <label class=\"control-label\">IMPUESTOS (18.0000%)<span class=\"star\"></span></label>\r\n                        <input [(ngModel)]=\"item.impuestos\" name=\"impuestos\" class=\"form-control\" [disabled]=\"toggleButton\">\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"col-sm-12\">\r\n                      <div class=\"form-group label-floating\">\r\n                        <label class=\"control-label\">VALOR TOTAL ({{item.moneda}})<span class=\"star\"></span></label>\r\n                        <input [(ngModel)]=\"item.valortotal\" name=\"valortotal\" class=\"form-control\" [disabled]=\"toggleButton\">\r\n                      </div>\r\n                    </div>\r\n\r\n                  </div>\r\n                </div>\r\n\r\n              </div>\r\n\r\n              <div class=\"row\">\r\n                <div class=\"col-sm-12\">\r\n                  <div class=\"form-group label-floating\">\r\n                    <label class=\"control-label\">Comentario del Proveedor acerca del cambio de estado \r\n                      <span class=\"star\"></span>\r\n                    </label>\r\n                    <textarea [(ngModel)]=\"item.comentarioproveedor\" name=\"comentarioproveedor\" class=\"form-control\" row=\"4\" [disabled]=\"toggleButton\"></textarea>\r\n                  </div>\r\n                </div>\r\n\r\n              </div>\r\n\r\n            </div>\r\n\r\n\r\n\r\n            <div class=\"card-footer\">\r\n              <!--<button type=\"button\" class=\"btn btn-fill btn-default pull-right\" (click)=\"grabar($event)\" [disabled]=\"toggleButton\">Grabar</button>\r\n              <button (click)=\"toggleButton=false\" class=\"btn btn-fill btn-default pull-right\" *ngIf=\"id>0\">Habilitar Edición</button>-->\r\n              <a routerLink=\"/ordencompra/comprador/buscar\" class=\"btn btn-fill btn-default pull-right\">Salir</a>\r\n              <button class=\"btn btn-fill btn-default pull-right\" (click)=\"print($event)\">Imprimir</button>\r\n            </div>\r\n          </form>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div style=\"display:none\">\r\n  <!---->\r\n  <div id=\"print-section-servicio\" style=\"display:none\">\r\n    <table width=\"100%\" cellpadding=\"0\" cellspacing=\"0\" align=\"center\" bgcolor=\"#ffffff\">\r\n      <tbody>\r\n        <tr>\r\n          <td align=\"center\">\r\n\r\n\r\n            <table width=\"900\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\" bgcolor=\"#fff\">\r\n              <tbody>\r\n                <tr>\r\n                  <td width=\"449\" bgcolor=\"#fff\" style=\"border-left:1px solid #999;padding:1px; border-right:0; border-top:1px solid #999\"\r\n                    align=\"left\" valign=\"middle\">\r\n                    <img src=\"{{this.baseurl}}assets/img/faces/centenario.png\" width=\"358\" height=\"141\" style=\"padding:0; margin:0; border:0\">\r\n                  </td>\r\n                  <td width=\"448\" align=\"left\" valign=\"middle\" bgcolor=\"#fff\" style=\"border-left:1px solid #999;padding:5px; border-right:1px solid #999; border-top:1px solid #999\">\r\n                    <table width=\"100%\" cellpadding=\"10\" cellspacing=\"0\" border=\"0\">\r\n                      <tbody>\r\n                        <tr>\r\n                          <td align=\"left\" width=\"25%\">\r\n                            <strong>Ruc:</strong>\r\n                          </td>\r\n                          <td align=\"left\">PE20600323793</td>\r\n                        </tr>\r\n                        <tr>\r\n                          <td align=\"left\" width=\"25%\">\r\n\r\n                            <strong>Teléfono:</strong></td>\r\n                          <td align=\"left\">01-45325698\r\n                          </td>\r\n                        </tr>\r\n                        <tr>\r\n                          <td align=\"left\" width=\"25%\" style=\"vertical-align: top;\">\r\n\r\n                            <strong>Dirección:</strong></td>\r\n                          <td align=\"left\" style=\"vertical-align: top;\"> Av. Victor Andrés Belaunde 147. Vía Principal 102. Edificio: Real Cuatro - Piso: 1, SAN ISIDRO\r\n                            - LIMA .</td>\r\n                        </tr>\r\n                      </tbody>\r\n                    </table>\r\n                  </td>\r\n                </tr>\r\n                <tr>\r\n                  <td width=\"449\" bgcolor=\"#fff\" style=\"border-left:1px solid #999; border-right:0; border-top:1px solid #999\" align=\"left\"\r\n                    valign=\"top\">\r\n                    <table width=\"100%\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\" style=\"border-bottom:1px solid #999\">\r\n                      <tbody>\r\n                        <tr>\r\n                          <td style=\"padding:5px;\"><strong>Proveedor:</strong><br> EMPRESA EDITORA EL COMERCIO SA</td>\r\n                        </tr>\r\n                      </tbody>\r\n                    </table>\r\n                    <table width=\"100%\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\" style=\"border-bottom:1px solid #999\">\r\n                      <tbody>\r\n                        <tr>\r\n                          <td width=\"50%\" height=\"30\" style=\"border-right:1px solid #999; padding:5px\"><strong>RUC Proveedor:</strong><br> PE20143229816\r\n                          </td>\r\n                          <td width=\"50%\" height=\"30\" align=\"left\" valign=\"middle\" style=\"padding:5px\"><strong>Código Proveedor:</strong><strong></strong>\r\n                            <br> 110823232\r\n                          </td>\r\n                        </tr>\r\n                      </tbody>\r\n                    </table>\r\n                  </td>\r\n                  <td width=\"448\" align=\"left\" valign=\"top\" bgcolor=\"#fff\" style=\"border-left:1px solid #999; border-right:1px solid #999; border-top:1px solid #999\">\r\n                    <table width=\"100%\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\" style=\"border-bottom:1px solid #999\">\r\n                      <tbody>\r\n                        <tr>\r\n                          <td style=\"padding:5px\"><strong>Orden de Servicio:</strong><br> 4531046368\r\n                          </td>\r\n                        </tr>\r\n                      </tbody>\r\n                    </table>\r\n                    <table width=\"100%\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\" style=\"border-bottom:1px solid #999\">\r\n                      <tbody>\r\n                        <tr>\r\n                          <td width=\"50%\" height=\"30\" style=\"border-right:1px solid #999; padding:5px\"><strong>Fecha de emisión:</strong>\r\n                            <br> 05-jul-2017\r\n                          </td>\r\n                          <td width=\"25%\" height=\"30\" align=\"left\" valign=\"middle\" style=\"border-right:1px solid #999; padding:5px\"><strong>Versión OC:</strong><br>1\r\n                          </td>\r\n                          <td width=\"25%\" height=\"30\" align=\"left\" valign=\"middle\" style=\"padding:5px\"><strong>Estado Web:</strong><strong></strong> Aceptada </td>\r\n                        </tr>\r\n                      </tbody>\r\n                    </table>\r\n                  </td>\r\n                </tr>\r\n              </tbody>\r\n            </table>\r\n\r\n            <table width=\"900\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\" bgcolor=\"#fff\">\r\n              <tbody>\r\n                <tr>\r\n                  <td width=\"50%\" bgcolor=\"#fff\" style=\"border-left:1px solid #999; border-right:0; border-top:0; padding:5px\"><strong>Atención a:</strong><br> Sr. ANTONIO TAFUR<br> 3116500\r\n                    <br> pcolina@comercio.com.pe\r\n                  </td>\r\n                  <td width=\"50%\" bgcolor=\"#fff\" style=\"border-left:1px solid #999; border-right:1px solid #999; border-top:0; padding:5px\">\r\n                    <p><strong>Contactar con:</strong><br> JEANETTE ELSA COLLANTES SANTOS<br> 01-4583654\r\n                      <br> compras1@centenario.com.pe\r\n                    </p>\r\n\r\n                    <p><strong>Creado por:</strong><br> Sr. Gonzalo Moscol </p>\r\n                  </td>\r\n                </tr>\r\n              </tbody>\r\n            </table>\r\n\r\n            <table width=\"900\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\" bgcolor=\"#fff\">\r\n              <tbody>\r\n                <tr>\r\n                  <td width=\"50%\" bgcolor=\"#fff\" style=\"border-left:1px solid #999; border-right:0; border-top:1px solid #999; padding:5px\"><strong>Facturar a:</strong><br> Centenario Corporativo S.A.C.<br> 20600323793\r\n                    <br> Av. Victor Andrés Belaunde 147 . Vía<br> Principal 102 . Edificio: Real Cuatro - Piso: 1, SAN ISIDRO\r\n                    - LIMA </td>\r\n                  <td width=\"50%\" bgcolor=\"#fff\" style=\"border-left:1px solid #999; border-right:1px solid #999; border-top:1px solid #999; padding:5px\">\r\n                    <p><strong>Recepción de Factura:</strong><br> Lunes, Miércoles y jueves de 9 am. a 1 pm.<br> Av.Victor Andrés\r\n                      Belaunde 147.Edif. Real<br> 4,Sótano 1 - San Isidro<br> 01-5236589\r\n                    </p>\r\n                  </td>\r\n                </tr>\r\n              </tbody>\r\n            </table>\r\n\r\n            <table width=\"900\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\" bgcolor=\"#fff\">\r\n              <tbody>\r\n                <tr>\r\n                  <td width=\"50%\" bgcolor=\"#fff\" style=\"border-left:1px solid #999; border-right:0; border-top:1px solid #999; padding:5px\"><strong>Condiciones:</strong><br>\r\n                    <strong>Moneda:</strong> PEN<br>\r\n                    <strong>Forma de Pago:</strong> Dentro de 60 Días<br>\r\n                    <strong>Fecha de inicio de contrato:</strong> 05-07-2017<br>\r\n                    <strong>Fecha fin de contrato:</strong> 15-07-2017</td>\r\n                  <td width=\"50%\" bgcolor=\"#fff\" style=\"border-left:1px solid #999; border-right:1px solid #999; border-top:1px solid #999; padding:5px\">\r\n                    <p><strong>Grupo de Compra:</strong><br> F00 -IC<br> Administración\r\n                    </p>\r\n                  </td>\r\n                </tr>\r\n              </tbody>\r\n            </table>\r\n\r\n            <table width=\"900\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\" bgcolor=\"#fff\">\r\n              <tbody>\r\n                <tr>\r\n                  <td width=\"100%\" height=\"20\" align=\"center\" bgcolor=\"#fff\" style=\"border-left:1px solid #999; border-right:1px solid #999; border-top:1px solid #999; padding:5px\"><strong>CONDICIONES GENERALES</strong></td>\r\n                </tr>\r\n              </tbody>\r\n            </table>\r\n\r\n            <table width=\"900\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\" bgcolor=\"#fff\">\r\n              <tbody>\r\n                <tr>\r\n                  <td width=\"100%\" align=\"center\" bgcolor=\"#fff\" style=\"border-left:1px solid #999; border-right:1px solid #999; border-top:1px solid #999; padding:0\">&nbsp;</td>\r\n                </tr>\r\n              </tbody>\r\n            </table>\r\n\r\n\r\n            <table width=\"900\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\" style=\"border-top:1px solid #999\">\r\n              <tbody>\r\n                <tr>\r\n                  <td width=\"10%\" height=\"20\" align=\"center\" bgcolor=\"#fff\" style=\"border-left:1px solid #999; border-right:0; border-top:0; padding:5px\"> <strong>Posición</strong></td>\r\n                  <td width=\"40%\" height=\"20\" bgcolor=\"#fff\" style=\"border-left:1px solid #999; border-right:1px solid #999; border-top:0; padding:5px\"><strong>Descripción del producto</strong></td>\r\n                  <td width=\"8%\" height=\"20\" align=\"center\" bgcolor=\"#fff\" style=\"border-left:0; border-right:1px solid #999; border-top:0; padding:5px\"><strong>Cant.</strong></td>\r\n                  <td width=\"8%\" height=\"20\" align=\"center\" bgcolor=\"#fff\" style=\"border-left:0; border-right:1px solid #999; border-top:0; padding:5px\"><strong>Unid.</strong></td>\r\n                  <td width=\"8%\" height=\"20\" align=\"center\" bgcolor=\"#fff\" style=\"border-left:0; border-right:1px solid #999; border-top:0; padding:5px\"><strong>Precio<br>Unitario</strong></td>\r\n                  <td width=\"8%\" height=\"20\" align=\"center\" bgcolor=\"#fff\" style=\"border-left:0; border-right:1px solid #999; border-top:0; padding:5px\"><strong>Total</strong></td>\r\n                  <td width=\"8%\" height=\"20\" align=\"center\" bgcolor=\"#fff\" style=\"border-left:0; border-right:1px solid #999; border-top:0; padding:5px\"><strong>IGV</strong></td>\r\n                  <td width=\"10%\" height=\"20\" align=\"center\" bgcolor=\"#fff\" style=\"border-left:0; border-right:1px solid #999; border-top:0; padding:5px\"><strong>Fecha<br>Entrega</strong></td>\r\n                </tr>\r\n              </tbody>\r\n            </table>\r\n\r\n            <table width=\"900\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\" style=\"border-top:1px solid #999\">\r\n              <tbody>\r\n                <tr>\r\n                  <td width=\"10%\" height=\"20\" align=\"center\" valign=\"middle\" bgcolor=\"#fff\" style=\"border-left:1px solid #999; border-bottom:1px solid #999; border-right:0; border-top:0; padding:5px\">10</td>\r\n                  <td width=\"40%\" height=\"20\" bgcolor=\"#fff\" style=\"border-left:1px solid #999;  border-bottom:1px solid #999; border-right:1px solid #999; border-top:0; padding:5px\">\r\n                    <p>SRV SUSCRIPCION DIARIOS<br> SRV SUSCRIPCION DIARIOS\r\n                    </p>\r\n                  </td>\r\n                  <td width=\"8%\" height=\"20\" align=\"center\" valign=\"middle\" bgcolor=\"#fff\" style=\"border-left:0; border-bottom:1px solid #999; border-right:1px solid #999; border-top:0; padding:5px\">&nbsp;</td>\r\n                  <td width=\"8%\" height=\"20\" align=\"center\" valign=\"middle\" bgcolor=\"#fff\" style=\"border-left:0; border-bottom:1px solid #999; border-right:1px solid #999; border-top:0; padding:5px\">&nbsp;</td>\r\n                  <td width=\"8%\" height=\"20\" align=\"center\" valign=\"middle\" bgcolor=\"#fff\" style=\"border-left:0; border-bottom:1px solid #999; border-right:1px solid #999; border-top:0; padding:5px\">&nbsp;</td>\r\n                  <td width=\"8%\" height=\"20\" align=\"center\" valign=\"middle\" bgcolor=\"#fff\" style=\"border-left:0; border-bottom:1px solid #999; border-right:1px solid #999; border-top:0; padding:5px\">330.5100</td>\r\n                  <td width=\"8%\" height=\"20\" align=\"center\" valign=\"middle\" bgcolor=\"#fff\" style=\"border-left:0; border-bottom:1px solid #999; border-right:1px solid #999; border-top:0; padding:5px\">59.4918</td>\r\n              \r\n                  \r\n                  <td width=\"10%\" height=\"20\" align=\"center\" valign=\"middle\" bgcolor=\"#fff\" style=\"border-left:0; border-bottom:1px solid #999; border-right:1px solid #999; border-top:0; padding:5px\">&nbsp;</td>\r\n                </tr>\r\n                <tr>\r\n                  <td width=\"10%\" height=\"20\" align=\"center\" valign=\"middle\" bgcolor=\"#fff\" style=\"border-left:1px solid #999; border-bottom:1px solid #999; border-right:0; border-top:0; padding:5px\">10.10</td>\r\n                  <td width=\"40%\" height=\"20\" bgcolor=\"#fff\" style=\"border-left:1px solid #999;  border-bottom:1px solid #999; border-right:1px solid #999; border-top:0; padding:5px\">\r\n                    <p>SRV SUSCRIPCION DIARIOS<br>\r\n                      <strong>Centro:</strong> 6835 - Av. Argentina 3093 CALLAO<br>\r\n                      <strong>Solicitud de pedido:</strong> 0010534244</p>\r\n                  </td>\r\n                  <td width=\"8%\" height=\"20\" align=\"center\" valign=\"middle\" bgcolor=\"#fff\" style=\"border-left:0; border-bottom:1px solid #999; border-right:1px solid #999; border-top:0; padding:5px\">1.0000</td>\r\n                  <td width=\"8%\" height=\"20\" align=\"center\" valign=\"middle\" bgcolor=\"#fff\" style=\"border-left:0; border-bottom:1px solid #999; border-right:1px solid #999; border-top:0; padding:5px\">SRV</td>\r\n                  <td width=\"8%\" height=\"20\" align=\"center\" valign=\"middle\" bgcolor=\"#fff\" style=\"border-left:0; border-bottom:1px solid #999; border-right:1px solid #999; border-top:0; padding:5px\">330.5100</td>\r\n                  <td width=\"8%\" height=\"20\" align=\"center\" valign=\"middle\" bgcolor=\"#fff\" style=\"border-left:0; border-bottom:1px solid #999; border-right:1px solid #999; border-top:0; padding:5px\">330.5100</td>\r\n                  <td width=\"8%\" height=\"20\" align=\"center\" valign=\"middle\" bgcolor=\"#fff\" style=\"border-left:0; border-bottom:1px solid #999; border-right:1px solid #999; border-top:0; padding:5px\">59.4918</td>\r\n                  <td width=\"10%\" height=\"20\" align=\"center\" valign=\"middle\" bgcolor=\"#fff\" style=\"border-left:0; border-bottom:1px solid #999; border-right:1px solid #999; border-top:0; padding:5px\">20-07-2017</td>\r\n                </tr>\r\n\r\n              </tbody>\r\n            </table>\r\n\r\n            <table width=\"900\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\" bgcolor=\"#fff\">\r\n              <tbody>\r\n                <tr>\r\n                  <td width=\"50%\" bgcolor=\"#fff\" style=\"border-left:1px solid #999; border-right:1px solid #999; border-top:0; padding:5px\">\r\n                    <p><strong>Aprobado por:</strong><br> Aprobado Nivel 1: GMENDEZG<br>                      \r\n                    Aprobado Nivel 2: JPEREZL<br>                      \r\n                    Aprobado Nivel 3: AROLDANC<br>                    </p>\r\n                  </td>\r\n                  <td width=\"50%\" bgcolor=\"#fff\" style=\"border-left:0; border-right:1px solid #999; border-top:0; padding:5px\">\r\n                    <table width=\"100%\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\">\r\n                      <tbody>\r\n                        <tr>\r\n                          <td width=\"60%\" align=\"left\" valign=\"middle\">\r\n                            <p><strong>SUB TOTAL ({{item.moneda}})</strong><br>\r\n                              <strong *ngIf=\"item.condiciones\">UTILIDADES (5.0000%)<br></strong>\r\n                              <strong *ngIf=\"item.condiciones\">GASTOS GENERALES (4.0700%)<br></strong>\r\n                              <strong>VALOR DE VENTA ({{item.moneda}})</strong><br>\r\n                              <strong>IMPUESTOS (18.0000%)</strong><br>\r\n                              <strong>VALOR TOTAL ({{item.moneda}})</strong></p>\r\n                          </td>\r\n                          <td align=\"right\" valign=\"middle\" *ngIf=\"!item.condiciones\">\r\n                            <p align=\"right\">{{this.item.subtotal}}<br>{{this.item.valorventa}}<br>{{this.item.impuestos}}<br>{{this.item.valortotal}}</p>\r\n                          </td>\r\n                          <td align=\"right\" valign=\"middle\" *ngIf=\"item.condiciones\">\r\n                            <p align=\"right\">{{this.item.subtotal}}<br>{{this.item.utilidades}}<br>{{this.item.gastosgenerales}}<br>{{this.item.valorventa}}<br>{{this.item.impuestos}}<br>{{this.item.valortotal}}</p>\r\n                          </td>\r\n                        </tr>\r\n                      </tbody>\r\n                    </table>\r\n                  </td>\r\n                </tr>\r\n              </tbody>\r\n            </table>\r\n\r\n            <table width=\"900\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\" bgcolor=\"#fff\">\r\n              <tbody>\r\n                <tr>\r\n                  <td width=\"100%\" height=\"20\" align=\"center\" bgcolor=\"#fff\" style=\"border-left:1px solid #999; border-right:1px solid #999; border-top:1px solid #999; padding:5px\">\r\n                    <strong>CONDICIONES GENERALES DE LA ORDEN DE COMPRA</strong></td>\r\n                </tr>\r\n              </tbody>\r\n            </table>\r\n\r\n            <table width=\"900\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\" bgcolor=\"#fff\">\r\n              <tbody>\r\n                <tr>\r\n                  <td width=\"100%\" align=\"left\" bgcolor=\"#fff\" style=\"border-left:1px solid #999; border-right:1px solid #999; border-top:1px solid #999; border-bottom:1px solid #999; padding:5px; margin-bottom:20px\">\r\n                    <p><strong>1 DEFINICIONES</strong><br> COMPRADOR: Centenario Retail S.A.C. , cuyos datos figuran en la cabecera\r\n                      de la Orden de Compra.<br> PROVEEDOR: Empresa que, según sea el caso, suministra los bienes o realiza\r\n                      los servicios o trabajos objetos de la Orden<br> de Compra.<br> ORDEN DE COMPRA: Documento elaborado\r\n                      por el COMPRADOR (en adelante O/C) en el que se incluye todos los<br> términos, condiciones, especificaciones\r\n                      técnicas, planos, etc. que es aplicable a los suministros o servicios solicitados por<br> el COMPRADOR\r\n                      y que constituye el único, total y exclusivo acuerdo entre las partes (COMPRADOR - PROVEEDOR). Esta<br>                      orden sustituye a todos los demás documentos cursados entre las partes y está expresamente condicionada\r\n                      a la<br> aceptación por parte del PROVEEDOR de todas sus condiciones. Salvo exista un contrato.<br>                      COMPROBANTE DE PAGO: Documento autorizado por la SUNAT para deducir costo o gasto.<br>\r\n                      <br>\r\n                      <strong>2 ACUSE DE RECIBO</strong><br> En el plazo máximo de tres (03) días calendarios contados desde\r\n                      la fecha de entrega de la O/C al PROVEEDOR, éste<br> deberá acusar el recibo de la misma, devolviendo\r\n                      una copia al COMPRADOR, en señal de su completa conformidad con<br> los términos de la O/C. Si el acuse\r\n                      de recibo lleva consigo alguna modificación o reserva a las condiciones generales o<br> particulares\r\n                      de la O/C, aquellas serán consideradas nulas si no han sido previamente aceptadas, en forma explícita\r\n                      y por<br> escrito, por el COMPRADOR.<br>\r\n                      <br>\r\n                      <strong>3 PRECIOS Y PAGO</strong><br> Los precios especificados en la O/C, son fijos y no revisables.\r\n                      El pago será efectuado de acuerdo a lo establecido en la<br> O/C. Sin embargo, el pago será retenido\r\n                      o deducido parcialmente si el PROVEEDOR no está cumpliendo con las<br> condiciones aplicables a la\r\n                      O/C.\r\n                      <br>\r\n                      <br>\r\n                      <strong>4 ENTREGA DE BIENES</strong><br> 4.1 Todas las entregas se realizarán con el embalaje suficiente,\r\n                      en el lugar indicado en la O/C y en los plazos concertados.<br> En caso de retrasos, el COMPRADOR se\r\n                      reserva el derecho a rechazar la entrega.<br> 4.2 El COMPRADOR recibirá todos los bienes con carácter\r\n                      provisional. La aceptación o no de los mismos se efectuará una<br> vez pasados los controles de cantidad\r\n                      y calidad.<br> 4.3 Los bienes se entregarán agrupados por número de O/C, indicando referencia y descripción\r\n                      clara del ítem. No se<br> mezclaran en un mismo bulto, bienes de distintas O/C.<br> 4.4 Todos los bienes\r\n                      vendrán acompañadas de sus respectivas Guías de Remisión, en original (Destinatario) y copia<br> (SUNAT).\r\n                      <br> 4.5 Las Guías de Remisión indicarán el número de bultos, describirán los bienes con la misma denominación\r\n                      de la O/C y<br> con las cantidades, referencias de ítem o plano. Cada Guía de Remisión corresponderá\r\n                      a una sola O/C cuyo número estará<br> convenientemente indicado.<br>\r\n                      <br>\r\n                      <strong>5 CONDICIONES DE PAGO DE LOS COMPROBANTES DE    PAGO</strong><br> 5.1 El plazo para el pago\r\n                      correrá a partir de la fecha de recepción de la misma por el COMPRADOR.<br> 5.2 Los vencimientos serán\r\n                      los que figuren en las condiciones de pago indicadas en la O/C.<br> 5.3 Para el recojo de cheques el\r\n                      PROVEEDOR debe presentar copia de DNI y el cargo del Comprobante de Pago.<br>\r\n                      <strong><br>6. SEGURIDAD Y SALUD EN EL TRABAJO</strong><br> 6.1 El PROVEEDOR declara conocer y se compromete\r\n                      a cumplir el contenido de los siguientes documentos:<br> . Manual de Políticas: Estándares de trabajo\r\n                      de Contratistas<br> . Las disposiciones legales en materia de seguridad y salud en el trabajo de acuerdo\r\n                      a la Ley 29783.<br> . Mantener asegurados a sus trabajadores, dependientes y/o al personal de terceros\r\n                      que utilice para el desarrollo de<br> sus actividades.<br> . Las disposiciones legales en materia ambiental\r\n                      que regulan las actividades empresariales y de construcción.<br> 6.2 El PROVEEDOR acredita contar con\r\n                      su propio Reglamento de Seguridad y Salud en el Trabajo, el cual se encuentra<br> conforme a los lineamientos\r\n                      de Seguridad y Salud en el Trabajo del COMPRADOR.<br> En caso de que exista discrepancia entre las\r\n                      normativas de Seguridad del PROVEEDOR y del COMPRADOR,<br> prevalecerán las aplicadas por este último.<br>\r\n                      <br>\r\n                      <strong>7. SEGUROS</strong><br> 7.1. El PROVEEDOR deberá contratar para todos sus trabajadores, un\r\n                      Seguro de Vida, conforme a lo establecido en el<br> Decreto Legislativo Nº 688 o la norma que la sustituya,\r\n                      El PROVEEDOR deberá contratar el Seguro Obligatorio de<br> Accidentes de Tránsito (SOAT) para uso propio\r\n                      para los vehículos de su propiedad, alquilados arrendados y/o de terceros,<br> que sean utilizados\r\n                      durante las operaciones objeto del presente Subcontrato.<br> 7.2. El PROVEEDOR, deberá contratar un\r\n                      Seguro Complementario de Trabajo de Riesgo, en los términos y condiciones<br> establecidos en la Ley\r\n                      26790, normas complementarias y conexas, cuya cobertura deberá incluir la prevención de riesgos<br>                      de salud, así como la prevención de invalidez y sepelio por causa del desarrollo de trabajo de riesgo,\r\n                      el cual deberá estar<br> vigente durante todo el tiempo que dure la ejecución de los servicios.<br>\r\n                      <br>\r\n                      <strong>8. RESPONSABILIDADES DEL PROVEEDOR</strong><br> El PROVEEDOR asume cualquier responsabilidad\r\n                      por accidentes de trabajo, inclusive en los montos no cubiertos por los<br> seguros contratados descritos\r\n                      en el numeral precedente, que le resulten imputables o a su personal, quedando EL<br> COMPRADOR eximido\r\n                      de dicha responsabilidad.<br> EL PROVEEDOR asume íntegramente la responsabilidad en caso que se causaren\r\n                      daños y perjuicios por la inejecución,<br> total o parcial, de las obligaciones a su cargo de acuerdo\r\n                      al servicios descritos en el presente documento.<br>\r\n                      <br>\r\n                      <strong>9. PENALIDADES</strong><br> En caso de retrasos, el COMPRADOR se reserva el derecho de aplicar\r\n                      una penalidad del 2% por semana de retraso o<br> fracción, hasta un tope del 10% como máximo, penalidad\r\n                      que será aplicable sobre el valor total de la O/C incluido el I.G.V.<br>\r\n                      <br>\r\n                      <strong>10. PRELACIÓN DE DOCUMENTOS</strong> <br> En caso de que exista un contrato que respalde la\r\n                      presente O/C prevalecerán las<br> estipulaciones previstas en dicho documento.<br> Fecha: 06.04.2017\r\n                      <br>\r\n                    </p>\r\n                  </td>\r\n                </tr>\r\n              </tbody>\r\n            </table>\r\n\r\n            <table width=\"900\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\" bgcolor=\"#fff\">\r\n              <tbody>\r\n                <tr>\r\n                  <td width=\"100%\" align=\"center\" bgcolor=\"#fff\" style=\"border-left:1px solid #999; border-right:1px solid #999; border-top:0; border-bottom:1px solid #999; padding:5px; margin-bottom:20px\">\r\n                    <p>&nbsp;</p>\r\n                    <p>&nbsp;</p>\r\n                    <p>---------------------------------------------<br> PROVEEDOR\r\n                    </p>\r\n                  </td>\r\n                </tr>\r\n              </tbody>\r\n            </table>\r\n\r\n          </td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n    <style type=\"text/css\">\r\n      IMG.displayed {\r\n        display: block;\r\n        margin-left: auto;\r\n        margin-right: auto;\r\n      }\r\n\r\n      body {\r\n        font-family: Arial, Helvetica, sans-serif;\r\n        color: #000;\r\n        font-size: 12px;\r\n      }\r\n\r\n      img {\r\n        display: block;\r\n        padding: 0;\r\n        margin: 0;\r\n      }\r\n\r\n      a {\r\n        color: #06C;\r\n        font-size: 12px;\r\n      }\r\n\r\n      td {\r\n        font-family: Arial, Helvetica, sans-serif;\r\n        color: #000;\r\n        font-size: 12px;\r\n        background-color: #FFF\r\n      }\r\n\r\n      p {\r\n        margin: 0;\r\n        font-family: Arial, Helvetica, sans-serif;\r\n        font-size: 12px;\r\n      }\r\n\r\n      ul {\r\n        margin: 0;\r\n        padding-left: 30px;\r\n        font-family: Arial, Helvetica, sans-serif;\r\n        font-size: 12px;\r\n      }\r\n    </style>\r\n  </div>\r\n\r\n  <div id=\"print-section-material\">\r\n    <table width=\"100%\" cellpadding=\"0\" cellspacing=\"0\" align=\"center\" bgcolor=\"#ffffff\">\r\n      <tbody>\r\n        <tr>\r\n          <td align=\"center\">\r\n\r\n\r\n            <table width=\"900\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\" bgcolor=\"#fff\">\r\n              <tbody>\r\n                <tr>\r\n                  <td colspan=\"2\" bgcolor=\"#fff\" style=\"\"\r\n                    align=\"left\" valign=\"middle\">\r\n                    <img src=\"{{this.baseurl}}assets/img/faces/centenario.png\" width=\"250\"  style=\"padding:0; margin:0; border:0\">\r\n                  </td>\r\n                </tr>\r\n                <tr>\r\n                  <td colspan=\"2\" bgcolor=\"#fff\" style=\"\"\r\n                    align=\"center\" valign=\"middle\">\r\n                    <b>Orden de Compra {{this.item.nroordencompra}}</b><br><br>\r\n                  </td>\r\n                </tr>\r\n                \r\n                <tr>\r\n                  <td width=\"449\" bgcolor=\"#fff\" style=\"border-left:1px solid #999; border-right:0; border-top:1px solid #999\" align=\"left\"\r\n                    valign=\"top\">\r\n                    <table width=\"100%\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\" style=\"border-bottom:1px solid #999\">\r\n                      <tbody>\r\n                        <tr>\r\n                          <td style=\"padding:5px;\"><strong>Organización Proveedora:</strong><br> {{this.item.proveedor}}</td>\r\n                        </tr>\r\n                      </tbody>\r\n                    </table>\r\n                    <table width=\"100%\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\" style=\"border-bottom:1px solid #999\" height=\"75\">\r\n                      <tbody>\r\n                        <tr>\r\n                          <td width=\"50%\" height=\"30\" style=\"border-right:1px solid #999; padding:5px\"><strong>RUC Proveedor:</strong><br> {{this.item.rucproveedor}}\r\n                          </td>\r\n                          <td width=\"50%\" height=\"30\" align=\"left\" valign=\"middle\" style=\"padding:5px\"><strong>Código Proveedor:</strong><strong></strong>\r\n                            <br> {{this.item.codigoproveedor}}\r\n                          </td>\r\n                        </tr>\r\n                      </tbody>\r\n                    </table>\r\n                  </td>\r\n                  <td width=\"448\" align=\"left\" valign=\"top\" bgcolor=\"#fff\" style=\"border-left:1px solid #999; border-right:1px solid #999; border-top:1px solid #999\">\r\n                    <table width=\"100%\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\" style=\"border-bottom:1px solid #999\">\r\n                      <tbody>\r\n                        <tr>\r\n                          <td style=\"padding:5px\"><strong>Creado por:</strong><br> {{this.item.preparadapor}}\r\n                          </td>\r\n                        </tr>\r\n                      </tbody>\r\n                    </table>\r\n                    <table width=\"100%\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\" style=\"border-bottom:1px solid #999\" height=\"75\">\r\n                      <tbody>\r\n                        <tr>\r\n                          <td width=\"50%\" height=\"30\" style=\"border-right:1px solid #999; padding:5px\"><strong>Fecha de emisión:</strong>\r\n                            <br>{{this.item.fecharegistro}}</td>\r\n                          <td width=\"25%\" height=\"30\" align=\"left\" valign=\"middle\" style=\"border-right:1px solid #999; padding:5px\"><strong>Versión OC:</strong><br>{{this.item.version}}\r\n                          </td>\r\n                          <td width=\"25%\" height=\"30\" align=\"left\" valign=\"middle\" style=\"padding:5px\"><strong>Estado Web:</strong><strong></strong> {{this.item.estadoweb}} </td>\r\n                        </tr>\r\n                      </tbody>\r\n                    </table>\r\n                  </td>\r\n                </tr>\r\n              </tbody>\r\n            </table>\r\n\r\n            <table width=\"900\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\" bgcolor=\"#fff\">\r\n              <tbody>\r\n                <tr>\r\n                  <td width=\"50%\" bgcolor=\"#fff\" style=\"border-left:1px solid #999; border-right:0; border-top:0; padding:5px\"><strong>Atención a:</strong><br> {{this.item.atenciona}}<br> 01-257364 / 94583901<br> atafur@prueba.com\r\n                  </td>\r\n                  <td width=\"50%\" bgcolor=\"#fff\" style=\"border-left:1px solid #999; border-right:1px solid #999; border-top:0; padding:5px\">\r\n                    <p><strong>Contactar con:</strong><br> {{this.item.contactarcon}}<br> 01-4583654\r\n                      <br> {{this.item.emailcontacto}}\r\n                    </p>\r\n\r\n                    \r\n                  </td>\r\n                </tr>\r\n              </tbody>\r\n            </table>\r\n\r\n            <table width=\"900\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\" bgcolor=\"#fff\">\r\n              <tbody>\r\n                <tr>\r\n                  <td width=\"50%\" bgcolor=\"#fff\" style=\"border-left:1px solid #999; border-right:0; border-top:1px solid #999; padding:5px\"><strong>Facturar a:</strong><br> <strong>Razón Social:</strong> {{this.item.facturara}}<br> <strong>RUC:</strong> 20600323980\r\n                    <br> <strong>Dirección:</strong> {{this.item.direccionfactura}}</td>\r\n                  <td width=\"50%\" bgcolor=\"#fff\" style=\"border-left:1px solid #999; border-right:1px solid #999; border-top:1px solid #999; padding:5px\">\r\n                    <p><strong>Recepción de Factura:</strong><br> <strong>Horario:</strong> Lunes, Miércoles y jueves de 9 am. a 1 pm.<br> <strong>Dirección:</strong> Av.Victor Andrés\r\n                      Belaunde 147.Edif. Real<br> 4,Sótano 1 - San Isidro<br> <strong>Teléfono:</strong> 01-5236589\r\n                    </p>\r\n                  </td>\r\n                </tr>\r\n              </tbody>\r\n            </table>\r\n\r\n            <table width=\"900\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\" bgcolor=\"#fff\">\r\n              <tbody>\r\n                <tr>\r\n                  <td width=\"50%\" bgcolor=\"#fff\" style=\"border-left:1px solid #999; border-right:0; border-top:1px solid #999; padding:5px\"><strong>Condiciones:</strong><br>\r\n                    <strong>Moneda:</strong> {{this.item.moneda}}<br>\r\n                    <strong>Forma de Pago:</strong> {{this.item.formapago}}<br>\r\n                    <strong>Fecha de inicio de contrato:</strong> {{this.item.fechainiciocontrato}}<br>\r\n                    <strong>Fecha fin de contrato:</strong> {{this.item.fechafincontrato}}</td>\r\n                  <td width=\"50%\" bgcolor=\"#fff\" style=\"border-left:1px solid #999; border-right:1px solid #999; border-top:1px solid #999; padding:5px\">\r\n                    <p><strong>Grupo de Compra:</strong><br> {{this.item.grupocompra}}</p>\r\n                  </td>\r\n                </tr>\r\n              </tbody>\r\n            </table>\r\n\r\n            <table width=\"900\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\" bgcolor=\"#fff\">\r\n              <tbody>\r\n                <tr>\r\n                  <td width=\"100%\" height=\"20\" align=\"center\" bgcolor=\"#fff\" style=\"border-left:1px solid #999; border-right:1px solid #999; border-top:1px solid #999; padding:5px\"><strong>CONDICIONES GENERALES</strong></td>\r\n                </tr>\r\n              </tbody>\r\n            </table>\r\n\r\n            <table width=\"900\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\" bgcolor=\"#fff\">\r\n              <tbody>\r\n                <tr>\r\n                  <td width=\"100%\" align=\"center\" bgcolor=\"#fff\" style=\"border-left:1px solid #999; border-right:1px solid #999; border-top:1px solid #999; padding:0\">&nbsp;</td>\r\n                </tr>\r\n              </tbody>\r\n            </table>\r\n\r\n\r\n            <table width=\"900\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\" style=\"border-top:1px solid #999\">\r\n              <tbody>\r\n                <tr>\r\n                  <td width=\"10%\" height=\"20\" align=\"center\" bgcolor=\"#fff\" style=\"border-left:1px solid #999; border-right:0; border-top:0; padding:5px\"> <strong>Posición</strong></td>\r\n                  <td width=\"40%\" height=\"20\" bgcolor=\"#fff\" style=\"border-left:1px solid #999; border-right:1px solid #999; border-top:0; padding:5px\"><strong>Descripción del producto</strong></td>\r\n                  <td width=\"8%\" height=\"20\" align=\"center\" bgcolor=\"#fff\" style=\"border-left:0; border-right:1px solid #999; border-top:0; padding:5px\"><strong>Cant.</strong></td>\r\n                  <td width=\"8%\" height=\"20\" align=\"center\" bgcolor=\"#fff\" style=\"border-left:0; border-right:1px solid #999; border-top:0; padding:5px\"><strong>Unid.</strong></td>\r\n                  <td width=\"8%\" height=\"20\" align=\"center\" bgcolor=\"#fff\" style=\"border-left:0; border-right:1px solid #999; border-top:0; padding:5px\"><strong>Precio<br>Unitario</strong></td>\r\n                  <td width=\"8%\" height=\"20\" align=\"center\" bgcolor=\"#fff\" style=\"border-left:0; border-right:1px solid #999; border-top:0; padding:5px\"><strong>Total</strong></td>\r\n                  <td width=\"8%\" height=\"20\" align=\"center\" bgcolor=\"#fff\" style=\"border-left:0; border-right:1px solid #999; border-top:0; padding:5px\"><strong>IGV</strong></td>\r\n                  <td width=\"10%\" height=\"20\" align=\"center\" bgcolor=\"#fff\" style=\"border-left:0; border-right:1px solid #999; border-top:0; padding:5px\"><strong>Fecha<br>Entrega</strong></td>\r\n                </tr>\r\n              </tbody>\r\n            </table>\r\n\r\n            <table width=\"900\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\" style=\"border-top:1px solid #999\">\r\n              <tbody>\r\n                <tr *ngFor=\"let row of item.productos\">\r\n                  <td width=\"10%\" height=\"20\" align=\"center\" valign=\"middle\" bgcolor=\"#fff\" style=\"border-left:1px solid #999; border-bottom:1px solid #999; border-right:0; border-top:0; padding:5px\">{{row.posicion}}</td>\r\n                  <td width=\"40%\" height=\"20\" bgcolor=\"#fff\" style=\"border-left:1px solid #999;  border-bottom:1px solid #999; border-right:1px solid #999; border-top:0; padding:5px\">\r\n                    <p>{{row.nombre}}</p>\r\n                    <p>&nbsp;</p>\r\n                    <p><strong>Centro: </strong>6835 - Av. Argentina 3093 CALLAO<br>\r\n                      <strong>Solicitud de pedido:</strong> 0010534244 <br>\r\n                      <br>\r\n                    </p>\r\n                  </td>\r\n                  <td width=\"8%\" height=\"20\" align=\"center\" valign=\"middle\" bgcolor=\"#fff\" style=\"border-left:0; border-bottom:1px solid #999; border-right:1px solid #999; border-top:0; padding:5px\">{{row.cantidad}}</td>\r\n                  <td width=\"8%\" height=\"20\" align=\"center\" valign=\"middle\" bgcolor=\"#fff\" style=\"border-left:0; border-bottom:1px solid #999; border-right:1px solid #999; border-top:0; padding:5px\">{{row.unidad}}</td>\r\n                  <td width=\"8%\" height=\"20\" align=\"center\" valign=\"middle\" bgcolor=\"#fff\" style=\"border-left:0; border-bottom:1px solid #999; border-right:1px solid #999; border-top:0; padding:5px\">{{row.preciounitario}}</td>\r\n                  <td width=\"8%\" height=\"20\" align=\"center\" valign=\"middle\" bgcolor=\"#fff\" style=\"border-left:0; border-bottom:1px solid #999; border-right:1px solid #999; border-top:0; padding:5px\">{{row.total}}</td>\r\n                  <td width=\"8%\" height=\"20\" align=\"center\" valign=\"middle\" bgcolor=\"#fff\" style=\"border-left:0; border-bottom:1px solid #999; border-right:1px solid #999; border-top:0; padding:5px\">{{row.igv}}</td>\r\n                  <td width=\"10%\" height=\"20\" align=\"center\" valign=\"middle\" bgcolor=\"#fff\" style=\"border-left:0; border-bottom:1px solid #999; border-right:1px solid #999; border-top:0; padding:5px\">{{row.fechaentrega}}</td>\r\n                </tr>\r\n        \r\n\r\n              </tbody>\r\n            </table>\r\n\r\n            <table width=\"900\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\" bgcolor=\"#fff\">\r\n              <tbody>\r\n                <tr>\r\n                  <td width=\"50%\" bgcolor=\"#fff\" style=\"border-left:1px solid #999; border-right:1px solid #999; border-top:0; padding:5px\">\r\n                    <p><strong>Aprobado por:</strong><br> Aprobado Nivel 1: GMENDEZG<br>                      \r\n                    Aprobado Nivel 2: JPEREZL<br>                      \r\n                    Aprobado Nivel 3: AROLDANC<br>                    </p>\r\n                  </td>\r\n                  <td width=\"50%\" bgcolor=\"#fff\" style=\"border-left:0; border-right:1px solid #999; border-top:0; padding:5px\">\r\n                    <table width=\"100%\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\">\r\n                      <tbody>\r\n                        <tr>\r\n                          <td width=\"60%\" align=\"left\" valign=\"middle\">\r\n                            <p><strong>SUB TOTAL ({{item.moneda}})</strong><br>\r\n                              <strong *ngIf=\"item.condiciones\">UTILIDADES (5.0000%)<br></strong>\r\n                              <strong *ngIf=\"item.condiciones\">GASTOS GENERALES (4.0700%)<br></strong>\r\n                              <strong>VALOR DE VENTA ({{item.moneda}})</strong><br>\r\n                              <strong>IMPUESTOS (18.0000%)</strong><br>\r\n                              <strong>VALOR TOTAL ({{item.moneda}})</strong></p>\r\n                          </td>\r\n                          <td align=\"right\" valign=\"middle\" *ngIf=\"!item.condiciones\">\r\n                            <p align=\"right\">{{this.item.subtotal}}<br>{{this.item.valorventa}}<br>{{this.item.impuestos}}<br>{{this.item.valortotal}}</p>\r\n                          </td>\r\n                          <td align=\"right\" valign=\"middle\" *ngIf=\"item.condiciones\">\r\n                            <p align=\"right\">{{this.item.subtotal}}<br>{{this.item.utilidades}}<br>{{this.item.gastosgenerales}}<br>{{this.item.valorventa}}<br>{{this.item.impuestos}}<br>{{this.item.valortotal}}</p>\r\n                          </td>\r\n                        </tr>\r\n                      </tbody>\r\n                    </table>\r\n                  </td>\r\n                </tr>\r\n              </tbody>\r\n            </table>\r\n\r\n            <table width=\"900\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\" bgcolor=\"#fff\">\r\n              <tbody>\r\n                <tr>\r\n                  <td width=\"100%\" height=\"20\" align=\"center\" bgcolor=\"#fff\" style=\"border-left:1px solid #999; border-right:1px solid #999; border-top:1px solid #999; padding:5px\">\r\n                    <strong>CONDICIONES GENERALES DE LA ORDEN DE COMPRA</strong></td>\r\n                </tr>\r\n              </tbody>\r\n            </table>\r\n\r\n            <table width=\"900\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\" bgcolor=\"#fff\">\r\n              <tbody>\r\n                <tr>\r\n                  <td width=\"100%\" align=\"left\" bgcolor=\"#fff\" style=\"border-left:1px solid #999; border-right:1px solid #999; border-top:1px solid #999; border-bottom:1px solid #999; padding:5px; margin-bottom:20px\">\r\n                    <p><strong>1 DEFINICIONES</strong><br /> COMPRADOR: {{this.item.comprador}} , cuyos datos figuran en la\r\n                      cabecera de la Orden de Compra.<br /> PROVEEDOR: Empresa que, según sea el caso, suministra los bienes\r\n                      o realiza los servicios o trabajos objetos de la Orden<br /> de Compra.<br /> ORDEN DE COMPRA: Documento\r\n                      elaborado por el COMPRADOR (en adelante O/C) en el que se incluye todos los<br /> términos, condiciones,\r\n                      especificaciones técnicas, planos, etc. que es aplicable a los suministros o servicios solicitados\r\n                      por\r\n                      <br /> el COMPRADOR y que constituye el único, total y exclusivo acuerdo entre las partes (COMPRADOR\r\n                      - PROVEEDOR). Esta<br /> orden sustituye a todos los demás documentos cursados entre las partes y está\r\n                      expresamente condicionada a la<br /> aceptación por parte del PROVEEDOR de todas sus condiciones. Salvo\r\n                      exista un contrato.<br /> COMPROBANTE DE PAGO: Documento autorizado por la SUNAT para deducir costo\r\n                      o gasto.<br />\r\n                      <br />\r\n                      <strong>2 ACUSE DE RECIBO</strong><br /> En el plazo máximo de tres (03) días calendarios contados\r\n                      desde la fecha de entrega de la O/C al PROVEEDOR, éste<br /> deberá acusar el recibo de la misma, devolviendo\r\n                      una copia al COMPRADOR, en señal de su completa conformidad con<br /> los términos de la O/C. Si el\r\n                      acuse de recibo lleva consigo alguna modificación o reserva a las condiciones generales o<br /> particulares\r\n                      de la O/C, aquellas serán consideradas nulas si no han sido previamente aceptadas, en forma explícita\r\n                      y por<br /> escrito, por el COMPRADOR.<br />\r\n                      <br />\r\n                      <strong>3 PRECIOS Y PAGO</strong><br /> Los precios especificados en la O/C, son fijos y no revisables.\r\n                      El pago será efectuado de acuerdo a lo establecido en la<br /> O/C. Sin embargo, el pago será retenido\r\n                      o deducido parcialmente si el PROVEEDOR no está cumpliendo con las<br /> condiciones aplicables a la\r\n                      O/C.\r\n                      <br />\r\n                      <br />\r\n                      <strong>4 ENTREGA DE BIENES</strong><br /> 4.1 Todas las entregas se realizarán con el embalaje suficiente,\r\n                      en el lugar indicado en la O/C y en los plazos concertados.<br /> En caso de retrasos, el COMPRADOR\r\n                      se reserva el derecho a rechazar la entrega.<br /> 4.2 El COMPRADOR recibirá todos los bienes con carácter\r\n                      provisional. La aceptación o no de los mismos se efectuará una<br /> vez pasados los controles de cantidad\r\n                      y calidad.<br /> 4.3 Los bienes se entregarán agrupados por número de O/C, indicando referencia y descripción\r\n                      clara del ítem. No se<br /> mezclaran en un mismo bulto, bienes de distintas O/C.<br /> 4.4 Todos los\r\n                      bienes vendrán acompañadas de sus respectivas Guías de Remisión, en original (Destinatario) y copia<br\r\n                      /> (SUNAT).\r\n                      <br /> 4.5 Las Guías de Remisión indicarán el número de bultos, describirán los bienes con la misma\r\n                      denominación de la O/C y<br /> con las cantidades, referencias de ítem o plano. Cada Guía de Remisión\r\n                      corresponderá a una sola O/C cuyo número estará<br /> convenientemente indicado.<br />\r\n                      <br />\r\n                      <strong>5 CONDICIONES DE PAGO DE LOS COMPROBANTES DE    PAGO</strong><br /> 5.1 El plazo para el pago\r\n                      correrá a partir de la fecha de recepción de la misma por el COMPRADOR.<br /> 5.2 Los vencimientos\r\n                      serán los que figuren en las condiciones de pago indicadas en la O/C.<br /> 5.3 Para el recojo de cheques\r\n                      el PROVEEDOR debe presentar copia de DNI y el cargo del Comprobante de Pago.<br />\r\n                      <br />\r\n                      <strong>6. SEGURIDAD Y SALUD EN EL TRABAJO</strong><br /> 6.1 El PROVEEDOR declara conocer y se compromete\r\n                      a cumplir el contenido de los siguientes documentos:<br /> . Manual de Políticas: Estándares de trabajo\r\n                      de Contratistas<br /> . Las disposiciones legales en materia de seguridad y salud en el trabajo de\r\n                      acuerdo a la Ley 29783.<br /> . Mantener asegurados a sus trabajadores, dependientes y/o al personal\r\n                      de terceros que utilice para el desarrollo de<br /> sus actividades.<br /> . Las disposiciones legales\r\n                      en materia ambiental que regulan las actividades empresariales y de construcción.<br /> 6.2 El PROVEEDOR\r\n                      acredita contar con su propio Reglamento de Seguridad y Salud en el Trabajo, el cual se encuentra<br\r\n                      /> conforme a los lineamientos de Seguridad y Salud en el Trabajo del COMPRADOR.<br /> En caso de que\r\n                      exista discrepancia entre las normativas de Seguridad del PROVEEDOR y del COMPRADOR,<br /> prevalecerán\r\n                      las aplicadas por este último.<br />\r\n                      <br />\r\n                      <strong>7. SEGUROS</strong><br /> 7.1. El PROVEEDOR deberá contratar para todos sus trabajadores, un\r\n                      Seguro de Vida, conforme a lo establecido en el<br /> Decreto Legislativo Nº 688 o la norma que la\r\n                      sustituya, El PROVEEDOR deberá contratar el Seguro Obligatorio de<br /> Accidentes de Tránsito (SOAT)\r\n                      para uso propio para los vehículos de su propiedad, alquilados arrendados y/o de terceros,<br /> que\r\n                      sean utilizados durante las operaciones objeto del presente Subcontrato.<br /> 7.2. El PROVEEDOR, deberá\r\n                      contratar un Seguro Complementario de Trabajo de Riesgo, en los términos y condiciones<br /> establecidos\r\n                      en la Ley 26790, normas complementarias y conexas, cuya cobertura deberá incluir la prevención de riesgos<br\r\n                      /> de salud, así como la prevención de invalidez y sepelio por causa del desarrollo de trabajo de riesgo,\r\n                      el cual deberá estar<br /> vigente durante todo el tiempo que dure la ejecución de los servicios.<br\r\n                      />\r\n                      <br />\r\n                      <strong>8. RESPONSABILIDADES DEL PROVEEDOR</strong><br /> El PROVEEDOR asume cualquier responsabilidad\r\n                      por accidentes de trabajo, inclusive en los montos no cubiertos por los<br /> seguros contratados descritos\r\n                      en el numeral precedente, que le resulten imputables o a su personal, quedando EL<br /> COMPRADOR eximido\r\n                      de dicha responsabilidad.<br /> EL PROVEEDOR asume íntegramente la responsabilidad en caso que se causaren\r\n                      daños y perjuicios por la inejecución,<br /> total o parcial, de las obligaciones a su cargo de acuerdo\r\n                      al servicios descritos en el presente documento.<br />\r\n                      <br />\r\n                      <strong>9. PENALIDADES</strong><br /> En caso de retrasos, el COMPRADOR se reserva el derecho de aplicar\r\n                      una penalidad del 2% por semana de retraso o<br /> fracción, hasta un tope del 10% como máximo, penalidad\r\n                      que será aplicable sobre el valor total de la O/C incluido el I.G.V.<br />\r\n                      <br />\r\n                      <strong>10. PRELACIÓN DE DOCUMENTOS </strong><br> En caso de que exista un contrato que respalde la\r\n                      presente O/C prevalecerán las<br /> estipulaciones previstas en dicho documento.<br /> Fecha: 06.04.2017</p>\r\n                  </td>\r\n                </tr>\r\n              </tbody>\r\n            </table>\r\n\r\n            <table width=\"900\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\" bgcolor=\"#fff\">\r\n              <tbody>\r\n                <tr>\r\n                  <td width=\"100%\" align=\"center\" bgcolor=\"#fff\" style=\"border-left:1px solid #999; border-right:1px solid #999; border-top:0; border-bottom:1px solid #999; padding:5px; margin-bottom:20px\">\r\n                    <p>&nbsp;</p>\r\n                    <p>&nbsp;</p>\r\n                    <p>---------------------------------------------<br> PROVEEDOR\r\n                    </p>\r\n                  </td>\r\n                </tr>\r\n              </tbody>\r\n            </table>\r\n\r\n          </td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n    <style type=\"text/css\">\r\n      body {\r\n        font-family: Arial, Helvetica, sans-serif;\r\n        color: #000;\r\n        font-size: 12px;\r\n      }\r\n\r\n      img {\r\n        display: block;\r\n        padding: 0;\r\n        margin: 0;\r\n      }\r\n\r\n      a {\r\n        color: #06C;\r\n        font-size: 12px;\r\n      }\r\n\r\n      td {\r\n        font-family: Arial, Helvetica, sans-serif;\r\n        color: #000;\r\n        font-size: 12px;\r\n        background-color: #FFF\r\n      }\r\n\r\n      p {\r\n        margin: 0;\r\n        font-family: Arial, Helvetica, sans-serif;\r\n        font-size: 12px;\r\n      }\r\n\r\n      ul {\r\n        margin: 0;\r\n        padding-left: 30px;\r\n        font-family: Arial, Helvetica, sans-serif;\r\n        font-size: 12px;\r\n      }\r\n    </style>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/ordencompra/comprador/formulario/ordencompracompradorformulario.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrdenCompraCompradorFormularioComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_app_utils__ = __webpack_require__("../../../../../src/app/utils/app.utils.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_masterservice__ = __webpack_require__("../../../../../src/app/service/masterservice.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_model_ordencompra__ = __webpack_require__("../../../../../src/app/model/ordencompra.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__assets_js_plugins_jquery_PrintArea_js__ = __webpack_require__("../../../../../src/assets/js/plugins/jquery.PrintArea.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__assets_js_plugins_jquery_PrintArea_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__assets_js_plugins_jquery_PrintArea_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_app_service_ordencompraservice__ = __webpack_require__("../../../../../src/app/service/ordencompraservice.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var oOrdenCompraCompradorFormularioComponent, dtArticulos;
var OrdenCompraCompradorFormularioComponent = (function () {
    function OrdenCompraCompradorFormularioComponent(activatedRoute, router, _masterService, _dataService) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this._masterService = _masterService;
        this._dataService = _dataService;
        this.toggleButton = true;
        this.id = "";
        this.util = new __WEBPACK_IMPORTED_MODULE_2__utils_app_utils__["a" /* AppUtils */](this.router, this._masterService);
        sessionStorage.setItem('token', 'comprador1');
    }
    OrdenCompraCompradorFormularioComponent.prototype.print = function (event) {
        if (this.item.tipo == "Materiales") {
            $("div#print-section-material").printArea({ popTitle: 'Orden de Compra', mode: "iframe", popClose: false });
        }
        else
            $("div#print-section-servicio").printArea({ popTitle: 'Orden de Servicio', mode: "iframe", popClose: false });
    };
    OrdenCompraCompradorFormularioComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.baseurl = $("#baseurl").attr("href");
        this.activatedRoute.params.subscribe(function (params) {
            _this.id = params['id'];
        });
        if (this.id == "0") {
            this.toggleButton = true;
        }
        else {
            this.toggleButton = true;
        }
        this.item = new __WEBPACK_IMPORTED_MODULE_4_app_model_ordencompra__["a" /* OrdenCompra */]();
        /*
            this.item = {
        
              comprador: "GRUPO CENTENARIO S.A.",
              ruccomprador: "PE20600323980",
              tipo: "Compra",
              nroordencompra: this.id + "",
              proveedor: "SODIMAC PERU S.A.",
              rucproveedor: "PE20100016681",
              fecharegistro: "05-jul-2017",
              codigoproveedor: '110857210',
              flagcambio: 'SI',
              version: '1',
              moneda: 'USD', //'0000008'
        
              atenciona: 'Sr. ANTONIO TAFUR \n01-257364 / 94583901 \natafur@prueba.com',
              contactarcon: "JEANETTE ELSA COLLANTES SANTOS\n01-4583654\ncompras1@centenario.com.pe",
              preparadapor: 'Sr. Gonzalo Moscol',
        
              estadoweb: DataHardCode.get(this.id).estado,
              facturara: 'Centenario Retail S.A.C.\n20600323980\nAv. Victor Andrés Belaunde 147 . Vía\nPrincipal 102 . Edificio: Real Cuatro - Piso: 1, SAN ISIDRO - LIMA ',
              enviarfacturaa: 'Lunes, Miércoles y jueves de 9 am. a 1 pm.\nAv.Victor Andrés Belaunde 147.Edif. Real\n4,Sótano 1 - San Isidro\n01-5236589',
        
              formapago: 'Dentro de 45 días',
              fechainiciocontrato: '05-07-2017',
              fechafincontrato: '15-07-2017',
              grupocompra: 'F56 - IC\nMkt. C.C. Minka',
              productos: [
                {
                  posicion: '00010',
                  micodigo: '00010-4510648635',
                  nombre: 'EQUIPO DE SONIDO (RADIO GRABADOR)<br/>EQUIPO DE SONIDO (RADIO GRABADOR)<br/><b>Centro:</b> 6835 - Av. Argentina 3093 CALLAO<br/><b>Solicitud de pedido</b>: 0010534244	',
                  cantidad: '1.0000',
                  unidad: 'UND',
                  preciounitario: '285.0000',
                  total: '285.0000',
                  igv: '51.3000',
                  fechaentrega: '20-07-2017',
                },
        
              ],
        
        
              // autorizadopor: 'Aprobado Nivel 1: GMENDEZG\nAprobado Nivel 2: CVAZQUEG\nAprobado Nivel 3: CCHAVEZ\nAprobado Nivel 4: VPORTILLO',
              autorizadopor: '\nAprobado Nivel 1: GMENDEZG \n\nAprobado Nivel 2: JPEREZL\n\nAprobado Nivel 3: AROLDANC',
              comentarioproveedor: DataHardCode.get(this.id).comentarioproveedor,
              subtotal: '285.0000',
              utilidades: '0.0000',
              valorventa: '285.0000',
              gastosgenerales: '0.0000',
              impuestos: '51.3000',
              valortotal: '336.3000',
              condiciones:DataHardCode.get(this.id).condiciones,
            };
        
            if (this.item.condiciones) {
              this.item.utilidades = '14.2500';
              this.item.gastosgenerales = '11.5995';
        
              this.item.valorventa = '310.8495';
              this.item.impuestos = '55.9529';
              this.item.valortotal = '366.8024';
            }
            if (this.id != 4590015491 && this.id !=4531046368) {
              this.item.nroordencompra = "4531046368";
              this.item.proveedor = "EMPRESA EDITORA EL COMERCIO SA";
              this.item.rucproveedor = "PE20143229816";
              this.item.codigoproveedor = "110823232";
              this.item.moneda = 'PEN';
              this.item.tipo = "Servicio";
              this.item.productos = [
                {
                  posicion: '10',
                  micodigo: '',
                  nombre: 'SRV SUSCRIPCION DIARIOS<br/>SRV SUSCRIPCION DIARIOS',
                  cantidad: '',
                  unidad: '',
                  preciounitario: '',
                  total: '330.5100',
                  igv: '59.4918',
                  fechaentrega: '',
                },
                {
                  posicion: '10.10',
                  micodigo: '',
                  nombre: 'SRV SUSCRIPCION DIARIOS<br/><b>Centro:</b> 6835 - Av. Argentina 3093 CALLAO<br/><b>Solicitud de pedido:</b> 0010534244',
                  cantidad: '1.0000 ',
                  unidad: 'SRV',
                  preciounitario: '330.5100',
                  total: '330.5100',
                  igv: '59.4918',
                  fechaentrega: '20-07-2017',
                },
        
              ];
        
        
              this.item.subtotal = '330.5100';
              this.item.utilidades = '0.0000';
              this.item.valorventa = '330.5100';
              this.item.gastosgenerales = '0.0000';
              this.item.impuestos = '59.4918';
              this.item.valortotal = '390.0018';
        
              if (this.item.condiciones) {
                this.item.utilidades = '16.5255';
                this.item.gastosgenerales = '13.4518';
          
                this.item.valorventa = '360.4873';
                this.item.impuestos = '64.8878';
                this.item.valortotal = '425.3751';
              }
             
            }*/
        oOrdenCompraCompradorFormularioComponent = this;
        this.util.listPrioridades(function (data) {
            oOrdenCompraCompradorFormularioComponent.listPrioridadCombo = data;
        });
        this.util.listMonedas(function (data) {
            oOrdenCompraCompradorFormularioComponent.listMonedaCombo = data;
        });
        this.util.listUnidadMedida(function (data) {
            oOrdenCompraCompradorFormularioComponent.listUnidadCombo = data;
        });
    };
    OrdenCompraCompradorFormularioComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        DatatableFunctions.ModalSettings();
        this.baseurl = $("#baseurl").attr("href");
        this._dataService
            .obtener(this.id)
            .subscribe(function (p) {
            _this.item = p;
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
                oOrdenCompraCompradorFormularioComponent.DatatableConfig();
            }, 100);
        }, function (e) { return console.log(e); }, function () { });
        /*
            var dtArticulos = $('#dtArticulos').DataTable({
        
        
              "ajax": function (data, callback, settings) {
                let result = {
                  data: oOrdenCompraCompradorFormularioComponent.item.productos
        
                };
                callback(
                  result
                );
              },
              "createdRow": function (row, data, index) {
        
        
                if (data.posicion === "10" || data.posicion === "20") {
                  $(row).addClass('highlight');
                  //$('td', row).eq(1).addClass('parent');
                }
                else {
                  //$(row).addClass('child');
                  $('td', row).eq(0).addClass('text-center');
                }
        
              },
              columns: [
        
                { data: 'posicion' },
        
                { data: 'nombre' },
                { data: 'cantidad' },
                { data: 'unidad' },
                { data: 'preciounitario' },
                { data: 'total' },
                { data: 'igv' },
                { data: 'fechaentrega' }
              ],
              columnDefs: [
                { "className": "text-center", "targets": [0, 1, 2, 3, 4, 5, 6, 7] },
              ]
            });*/
    };
    OrdenCompraCompradorFormularioComponent.prototype.DatatableConfig = function () {
        dtArticulos = $('#dtArticulos').DataTable({
            /*"pagingType": "full_numbers",
            "lengthMenu": [[10, 25, 50, -1], [10, 25, 50, "Todos"]],
            responsive: true,
            language: {
              sUrl: "assets/media/language/Spanish.json",
              search: "_INPUT_",
              searchPlaceholder: "Buscar Registros",
            },*/
            /* ajax: {
               "url": "https://jsonplaceholder.typicode.com/posts",
               "dataSrc": ""
             },*/
            "ajax": function (data, callback, settings) {
                var result = {
                    data: oOrdenCompraCompradorFormularioComponent.item.productos
                };
                callback(result);
            },
            "createdRow": function (row, data, index) {
                if (data.posicion === "10" || data.posicion === "20") {
                    $(row).addClass('highlight');
                    //$('td', row).eq(1).addClass('parent');
                }
                else {
                    //$(row).addClass('child');
                    $('td', row).eq(0).addClass('text-center');
                }
            },
            columns: [
                { data: 'posicion' },
                { data: 'nombre', "className": "text-left" },
                { data: 'cantidad' },
                { data: 'unidad' },
                { data: 'preciounitario' },
                { data: 'total' },
                { data: 'igv' },
                { data: 'fechaentrega' }
            ],
            columnDefs: [
                { "className": "text-center", "targets": [0, 1, 2, 3, 4, 5, 6, 7] },
            ]
        });
    };
    return OrdenCompraCompradorFormularioComponent;
}());
OrdenCompraCompradorFormularioComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'ordencompracompradorformulario-cmp',
        template: __webpack_require__("../../../../../src/app/ordencompra/comprador/formulario/ordencompracompradorformulario.component.html"),
        providers: [__WEBPACK_IMPORTED_MODULE_6_app_service_ordencompraservice__["a" /* OrdenCompraService */], __WEBPACK_IMPORTED_MODULE_3__service_masterservice__["a" /* MasterService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__service_masterservice__["a" /* MasterService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__service_masterservice__["a" /* MasterService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_6_app_service_ordencompraservice__["a" /* OrdenCompraService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6_app_service_ordencompraservice__["a" /* OrdenCompraService */]) === "function" && _d || Object])
], OrdenCompraCompradorFormularioComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=ordencompracompradorformulario.component.js.map

/***/ }),

/***/ "../../../../../src/app/ordencompra/ordencompra.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdenCompraModule", function() { return OrdenCompraModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_utils_module__ = __webpack_require__("../../../../../src/app/utils/utils.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__comprador_buscar_ordencompracompradorbuscar_component__ = __webpack_require__("../../../../../src/app/ordencompra/comprador/buscar/ordencompracompradorbuscar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__comprador_formulario_ordencompracompradorformulario_component__ = __webpack_require__("../../../../../src/app/ordencompra/comprador/formulario/ordencompracompradorformulario.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__proveedor_buscar_ordencompraproveedorbuscar_component__ = __webpack_require__("../../../../../src/app/ordencompra/proveedor/buscar/ordencompraproveedorbuscar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__proveedor_formulario_ordencompraproveedorformulario_component__ = __webpack_require__("../../../../../src/app/ordencompra/proveedor/formulario/ordencompraproveedorformulario.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ordencompra_routing__ = __webpack_require__("../../../../../src/app/ordencompra/ordencompra.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__directives_datepicker_module__ = __webpack_require__("../../../../../src/app/directives/datepicker.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var OrdenCompraModule = (function () {
    function OrdenCompraModule() {
    }
    return OrdenCompraModule;
}());
OrdenCompraModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(__WEBPACK_IMPORTED_MODULE_9__ordencompra_routing__["a" /* OrdenCompraRoutes */]),
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_4__utils_utils_module__["a" /* UtilsModule */],
            __WEBPACK_IMPORTED_MODULE_10__directives_datepicker_module__["a" /* A2Edatetimepicker */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_5__comprador_buscar_ordencompracompradorbuscar_component__["a" /* OrdenCompraCompradorBuscarComponent */], __WEBPACK_IMPORTED_MODULE_7__proveedor_buscar_ordencompraproveedorbuscar_component__["a" /* OrdenCompraProveedorBuscarComponent */],
            __WEBPACK_IMPORTED_MODULE_6__comprador_formulario_ordencompracompradorformulario_component__["a" /* OrdenCompraCompradorFormularioComponent */], __WEBPACK_IMPORTED_MODULE_8__proveedor_formulario_ordencompraproveedorformulario_component__["a" /* OrdenCompraProveedorFormularioComponent */]]
    })
], OrdenCompraModule);

//# sourceMappingURL=ordencompra.module.js.map

/***/ }),

/***/ "../../../../../src/app/ordencompra/ordencompra.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrdenCompraRoutes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__comprador_buscar_ordencompracompradorbuscar_component__ = __webpack_require__("../../../../../src/app/ordencompra/comprador/buscar/ordencompracompradorbuscar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__comprador_formulario_ordencompracompradorformulario_component__ = __webpack_require__("../../../../../src/app/ordencompra/comprador/formulario/ordencompracompradorformulario.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__proveedor_buscar_ordencompraproveedorbuscar_component__ = __webpack_require__("../../../../../src/app/ordencompra/proveedor/buscar/ordencompraproveedorbuscar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__proveedor_formulario_ordencompraproveedorformulario_component__ = __webpack_require__("../../../../../src/app/ordencompra/proveedor/formulario/ordencompraproveedorformulario.component.ts");




var OrdenCompraRoutes = [
    {
        path: '',
        children: [
            {
                path: 'refrescar',
                component: __WEBPACK_IMPORTED_MODULE_0__comprador_buscar_ordencompracompradorbuscar_component__["a" /* OrdenCompraCompradorBuscarComponent */]
            },
            {
                path: 'comprador/buscar',
                component: __WEBPACK_IMPORTED_MODULE_0__comprador_buscar_ordencompracompradorbuscar_component__["a" /* OrdenCompraCompradorBuscarComponent */]
            },
            {
                path: 'comprador/formulario/:id',
                component: __WEBPACK_IMPORTED_MODULE_1__comprador_formulario_ordencompracompradorformulario_component__["a" /* OrdenCompraCompradorFormularioComponent */]
            },
            {
                path: 'proveedor/buscar',
                component: __WEBPACK_IMPORTED_MODULE_2__proveedor_buscar_ordencompraproveedorbuscar_component__["a" /* OrdenCompraProveedorBuscarComponent */]
            },
            {
                path: 'proveedor/formulario/:id',
                component: __WEBPACK_IMPORTED_MODULE_3__proveedor_formulario_ordencompraproveedorformulario_component__["a" /* OrdenCompraProveedorFormularioComponent */]
            },
        ]
    }
];
//# sourceMappingURL=ordencompra.routing.js.map

/***/ }),

/***/ "../../../../../src/app/ordencompra/proveedor/buscar/ordencompraproveedorbuscar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-12\">\r\n                <div class=\"card\">\r\n                    <form method=\"#\" action=\"#\">\r\n                        <div class=\"card-header card-header-text\" data-background-color=\"blue\">\r\n                            <h4 class=\"card-title\">Buscar Orden de Compra</h4>\r\n                        </div>\r\n                        <div class=\"card-content\">\r\n                            <div class=\"row\">\r\n                                <div class=\"col-sm-4\">\r\n                                    <div class=\"form-group label-floating\">\r\n                                        <label class=\"control-label\">N° Orden de compra\r\n                                        </label>\r\n                                        <input [(ngModel)]=\"filtro.nroordencompra\" name=\"nroordencompra\" type=\"text\" class=\"form-control\">\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-sm-4\">\r\n                                    <div class=\"form-group label-floating\">\r\n                                        <label class=\"control-label\">Estado</label>\r\n                                        <select name=\"estado\" class=\"form-control\" [(ngModel)]=\"filtro.estado\">\r\n                                            <option value=\"NONE\">TODOS</option>\r\n                                            <option *ngFor=\"let optEstado of listEstadoCombo\" value=\"{{optEstado.valor}}\"> {{optEstado.desc}} </option>           \r\n           \r\n\r\n                                        </select>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-sm-4\">\r\n                                    <div class=\"form-group\">\r\n                                        <label class=\"label-on-left\">Tipo Orden de Compra</label>\r\n                                        <div class=\"togglebutton\">\r\n                                            <label>\r\n                                                <input type=\"checkbox\" [checked]=\"filtro.material\" (change)=\"filtro.material = !filtro.material\" > Material\r\n                                            </label>\r\n                                            <label>\r\n                                                <input type=\"checkbox\" [checked]=\"filtro.servicio\"  (change)=\"filtro.servicio = !filtro.servicio\" > Servicio\r\n                                        </label>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n\r\n                            </div>\r\n                            <div class=\"row\">\r\n                                <div class=\"col-sm-4\">\r\n                                    <div class=\"form-group label-floating\">\r\n                                        <label class=\"control-label\">Fecha Registro Del</label>\r\n                                        <input type=\"text\" class=\"form-control\"  [(ngModel)]=\"filtro.fechacreacioninicio\" name=\"fechacreacioninicio\" datepicker />\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-sm-4\">\r\n                                    <div class=\"form-group label-floating\">\r\n                                        <label class=\"control-label\">al</label>\r\n                                        <input type=\"text\" [(ngModel)]=\"filtro.fechacreacionfin\" name=\"fechacreacionfin\"  class=\"form-control\" datepicker />\r\n                                    </div>\r\n                                </div>\r\n                               \r\n\r\n                                <div class=\"col-sm-4\">\r\n                                    <div class=\"form-group\">\r\n                                        <button class=\"btn btn-default\" (click)=\"clicked($event)\">Buscar</button>\r\n                                        <button class=\"btn btn-default\" (click)=\"limpiar($event)\">Limpiar</button>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <nav class=\"navbar navbar-info\" role=\"navigation\">\r\n                                <div class=\"container-fluid\">\r\n                                    <!--<div class=\"navbar-header\">\r\n\r\n                                        <span class=\"navbar-brand\">Resultados</span>\r\n                                    </div>\r\n\r\n                                    <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\r\n                                        <ul class=\"nav navbar-nav\">\r\n                                            <li><a [routerLink]=\"['/ordencompra/proveedor/formulario', 45]\">Detalles</a></li>\r\n                                            <li><a href=\"javascript:void(0)\">Aprobar</a></li>\r\n                                            <li><a href=\"javascript:void(0)\">Rechazar</a></li>\r\n\r\n                                        </ul>\r\n                                    </div>-->\r\n                                </div>\r\n                            </nav>\r\n                            <div class=\"material-datatables table-responsive\">\r\n                                <table id=\"dtResultados\" class=\"table table-striped table-no-bordered table-hover\" cellspacing=\"0\" width=\"100%\" style=\"width:100%\">\r\n                                    <thead>\r\n                                        <tr>\r\n                                            <!--<th class=\"disabled-sorting text-right\">\r\n                                                <div class=\"checkbox text-right\">\r\n                                                    <label><input type=\"checkbox\" name=\"optionsCheckboxes\" class=\"checkall\" ></label>\r\n                                                </div>\r\n                                            </th>-->\r\n                                            <th>Nro. O.C.</th>\r\n                                            <th>Estado</th>\r\n                                            <th>Tipo de Orden</th>\r\n                                           \r\n                                            <th>Usuario Comprador</th>\r\n                                            <th>Organización Compradora</th>\r\n                                            <th>Atención A</th>\r\n                                            <th>Versión</th>\r\n                                            <th>Total</th>\r\n                                            <th>Fecha Registro</th>\r\n                                            <th class=\"disabled-sorting text-center\">Acciones</th>\r\n                                        </tr>\r\n                                    </thead>\r\n\r\n                                </table>\r\n                            </div>\r\n\r\n                        </div>\r\n                    </form>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/ordencompra/proveedor/buscar/ordencompraproveedorbuscar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrdenCompraProveedorBuscarComponent; });
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




var oOrdenCompraProveedorBuscarComponent;
var datatable;
var OrdenCompraProveedorBuscarComponent = (function () {
    function OrdenCompraProveedorBuscarComponent(router, route, _masterService) {
        this.router = router;
        this.route = route;
        this._masterService = _masterService;
        this.util = new __WEBPACK_IMPORTED_MODULE_2__utils_app_utils__["a" /* AppUtils */](this.router, this._masterService);
    }
    OrdenCompraProveedorBuscarComponent.prototype.navigate = function (nav) {
        this.router.navigate(nav, { relativeTo: this.route });
    };
    OrdenCompraProveedorBuscarComponent.prototype.validarfiltros = function () {
        if (this.filtro.material == false && this.filtro.servicio == false) {
            swal({
                text: "Tipo Orden de Compra es un campo requerido. Por favor completar y volver a intentar!",
                type: 'warning',
                buttonsStyling: false,
                confirmButtonClass: "btn btn-warning"
            });
            return false;
        }
        if (this.filtro.fechacreacioninicio != null && this.filtro.fechacreacioninicio.toString() != "" && this.filtro.fechacreacionfin != null && this.filtro.fechacreacionfin.toString() != "") {
            var fechacreacioninicio = DatatableFunctions.ConvertStringToDatetime(oOrdenCompraProveedorBuscarComponent.filtro.fechacreacioninicio);
            var fechacreacionfin = DatatableFunctions.ConvertStringToDatetime(oOrdenCompraProveedorBuscarComponent.filtro.fechacreacionfin);
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
    OrdenCompraProveedorBuscarComponent.prototype.clicked = function (event) {
        if (this.validarfiltros())
            datatable.ajax.reload();
        event.preventDefault();
    };
    OrdenCompraProveedorBuscarComponent.prototype.limpiar = function (event) {
        this.filtroDefecto();
        setTimeout(function () {
            $("input").each(function () {
                if (!$(this).val() && $(this).val() == '')
                    $(this.parentElement).addClass("is-empty");
            });
        }, 200);
        event.preventDefault();
    };
    OrdenCompraProveedorBuscarComponent.prototype.filtroDefecto = function () {
        var fechacreacioni = new Date();
        fechacreacioni.setMonth(fechacreacioni.getMonth() - 1);
        this.filtro = {
            nroordencompra: '',
            estado: 'NONE',
            fechacreacioninicio: fechacreacioni,
            fechacreacionfin: new Date(),
            material: true,
            servicio: true,
        };
    };
    OrdenCompraProveedorBuscarComponent.prototype.ngOnInit = function () {
        oOrdenCompraProveedorBuscarComponent = this;
        this.util.listEstadoRFQ(function (data) {
            oOrdenCompraProveedorBuscarComponent.listEstadoCombo = data;
        });
        this.filtroDefecto();
        this.resultados = [
            {
                nroordencompra: 4590015491,
                estado: DataHardCode.get(4590015491).estado,
                tipoorden: 'Material',
                comprador: 'TELLO MARCOS',
                proveedor: 'SODIMAC PERU S.A.',
                atenciona: 'Sr. ANTONIO TAFUR',
                version: '1',
                total: 'USD 336.3000',
                fecharegistro: '05/07/2017',
                empresacompradora: 'CENTENARIO RETAIL S.A.C.',
            },
            {
                nroordencompra: 4531046368,
                estado: DataHardCode.get(4531046368).estado,
                tipoorden: 'Material',
                comprador: 'TELLO MARCOS',
                proveedor: 'EMPRESA EDITORA EL COMERCIO SA',
                atenciona: 'Sr. ANTONIO TAFUR ',
                version: '1',
                total: 'PEN 390.0018',
                fecharegistro: '05/07/2017',
                empresacompradora: 'CENTENARIO RETAIL S.A.C.',
            },
            {
                nroordencompra: 4531046371,
                estado: DataHardCode.get(4531046371).estado,
                tipoorden: 'Servicio',
                comprador: 'PEREDO EDSON',
                proveedor: 'ENERGIA Y SERVICIOS PERU SAC',
                atenciona: 'Sr. Mario Bobadilla',
                version: '1',
                total: 'PEN 388.0900',
                fecharegistro: '27/01/2017',
                empresacompradora: 'CENTENARIO RETAIL S.A.C.',
            },
            {
                nroordencompra: 4531046600,
                estado: DataHardCode.get(4531046600).estado,
                tipoorden: 'Servicio',
                comprador: 'URIBE RENZO LUIS',
                proveedor: 'ENERGIA Y SERVICIOS PERU SAC',
                atenciona: 'Sr. Norma Campero',
                version: '1',
                total: 'PEN 374.6400',
                fecharegistro: '27/01/2017',
                empresacompradora: 'CENTENARIO RETAIL S.A.C.',
            },
        ];
    };
    OrdenCompraProveedorBuscarComponent.prototype.ngAfterViewInit = function () {
        cargarDataTable();
        DatatableFunctions.registerCheckAll();
    };
    return OrdenCompraProveedorBuscarComponent;
}());
OrdenCompraProveedorBuscarComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ordencompraproveedorbuscar-cmp',
        template: __webpack_require__("../../../../../src/app/ordencompra/proveedor/buscar/ordencompraproveedorbuscar.component.html"),
        providers: [__WEBPACK_IMPORTED_MODULE_3__service_masterservice__["a" /* MasterService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__service_masterservice__["a" /* MasterService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__service_masterservice__["a" /* MasterService */]) === "function" && _c || Object])
], OrdenCompraProveedorBuscarComponent);

function filtrarResultados(item) {
    //
    var nroordencompra = item.nroordencompra;
    nroordencompra = nroordencompra + "";
    var nroordencomprafiltro = oOrdenCompraProveedorBuscarComponent.filtro.nroordencompra;
    if (nroordencomprafiltro) {
        nroordencomprafiltro = nroordencomprafiltro + "";
        return nroordencompra.indexOf(nroordencomprafiltro) >= 0;
    }
    else
        return true;
}
function cargarDataTable() {
    datatable = $('#dtResultados').on('init.dt', function (e, settings, json) {
        DatatableFunctions.initDatatable(e, settings, json, datatable);
    }).DataTable({
        order: [[0, "desc"]],
        searching: false,
        serverSide: true,
        ajax: {
            beforeSend: function (request) {
                request.setRequestHeader("Authorization", 'Bearer ' + sessionStorage.getItem('token'));
                request.setRequestHeader("origen_datos", 'PEB2M');
            },
            url: "http://b2miningdata.com/api/msoclistar/v1/ordenes/",
            dataSrc: "data",
            data: function (d) {
                if (oOrdenCompraProveedorBuscarComponent.filtro.nroordencompra != "") {
                    d.vc_numeroseguimiento_oc = oOrdenCompraProveedorBuscarComponent.filtro.nroordencompra;
                }
                d.vc_estado = oOrdenCompraProveedorBuscarComponent.filtro.estado;
                if (oOrdenCompraProveedorBuscarComponent.filtro.fechacreacioninicio) {
                    var fechacreacioninicio = DatatableFunctions.ConvertStringToDatetime(oOrdenCompraProveedorBuscarComponent.filtro.fechacreacioninicio);
                    d.ts_fechacreacion_inicio = DatatableFunctions.FormatDatetimeForMicroService(fechacreacioninicio);
                }
                if (oOrdenCompraProveedorBuscarComponent.filtro.fechacreacionfin) {
                    var fechacreacionfin = DatatableFunctions.AddDayEndDatetime(DatatableFunctions.ConvertStringToDatetime(oOrdenCompraProveedorBuscarComponent.filtro.fechacreacionfin));
                    d.ts_fechacreacion_fin = DatatableFunctions.FormatDatetimeForMicroService(fechacreacionfin);
                }
                var tipos_oc = [];
                if (oOrdenCompraProveedorBuscarComponent.filtro.material)
                    tipos_oc.push('M');
                if (oOrdenCompraProveedorBuscarComponent.filtro.servicio)
                    tipos_oc.push('S');
                d.origen_datos = 'PEB2M';
                d.vc_tipooc = tipos_oc.join(",");
                d.column_names = 'vc_numeroseguimiento_oc,vc_estado,vc_tipooc,vc_razonsocialproveedor,ts_fechacreacion,fl_valortotal,vc_moneda,in_idoc,in_version,vc_razonsocialcomprador,vc_atenciona,vc_nombre_usrcomprador';
            }
        },
        columns: [
            { data: 'NumeroOrden', name: 'NumeroOrden' },
            { data: 'EstadoOrden', name: 'EstadoOrden' },
            { data: 'TipoOrden', name: 'TipoOrden' },
            { data: 'NumeroOrden', name: 'NumeroOrden' },
            { data: 'RazonSocialComprador', name: 'RazonSocialComprador' },
            { data: 'AtencionA', name: 'AtencionA' },
            { data: 'Version', name: 'Version' },
            { data: 'ValorTotal', name: 'ValorTotal' },
            { data: 'Fecha', name: 'Fecha' },
            { data: 'NumeroOrden', name: 'NumeroOrden' }
        ],
        columnDefs: [
            { "className": "text-center", "targets": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] },
            {
                render: function (data, type, row) {
                    //return data +' ('+ row[3]+')';
                    return row.MonedaOrden + ' ' + row.ValorTotal;
                },
                targets: 7
            },
            {
                render: function (data, type, row) {
                    //return data +' ('+ row[3]+')';
                    return '<div class="text-center"><a href="/ordencompra/proveedor/formulario/' + row.in_idoc + '" nroordencompra="' + row.in_idoc + '">' +
                        '<button class="btn btn-simple btn-info btn-icon edit" rel="tooltip" title="Ver/Editar" data-placement="left">' +
                        '<i class="material-icons">visibility</i></button></a>' +
                        '</div>';
                },
                targets: 9
            }
        ]
    });
    datatable.on('click', '.edit', function (event) {
        var $tr = $(this).closest('tr');
        var data = datatable.row($tr).data();
        //console.log("click edit", event);
        var nroordencompra = $tr.find("a").attr('nroordencompra');
        //console.log("click edit", oOrdenCompraProveedorBuscarComponent);
        var nav = ['/ordencompra/proveedor/formulario', nroordencompra];
        oOrdenCompraProveedorBuscarComponent.navigate(nav);
        event.preventDefault();
    });
}
var _a, _b, _c;
//# sourceMappingURL=ordencompraproveedorbuscar.component.js.map

/***/ }),

/***/ "../../../../../src/app/ordencompra/proveedor/formulario/ordencompraproveedorformulario.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-12\">\r\n        <div class=\"card\">\r\n          <form method=\"#\" action=\"#\">\r\n            <div class=\"card-header card-header-text\" data-background-color=\"blue\">\r\n              <h4 class=\"card-title\">Orden de Compra</h4>\r\n            </div>\r\n            <div class=\"card-content\">\r\n              <div class=\"row\">\r\n                <div class=\"col-sm-3\">\r\n                  <div class=\"form-group label-floating\">\r\n                    <label class=\"control-label\">Organización Compradora\r\n                      <span class=\"star\"></span>\r\n                    </label>\r\n                    <input name=\"comprador\" [(ngModel)]=\"item.comprador\" required type=\"text\" class=\"form-control\" [disabled]=\"toggleButton\">\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-sm-3\">\r\n                  <div class=\"form-group label-floating\">\r\n                    <label class=\"control-label\">RUC Comprador\r\n                      <span class=\"star\"></span>\r\n                    </label>\r\n                    <input name=\"ruccomprador\" [(ngModel)]=\"item.ruccomprador\" required type=\"text\" class=\"form-control\" [disabled]=\"toggleButton\">\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-sm-2\">\r\n                  <div class=\"form-group label-floating\">\r\n                    <label class=\"control-label\">Fecha de Emisión\r\n                      <span class=\"star\"></span>\r\n                    </label>\r\n                    <input name=\"fecharegistro\" [(ngModel)]=\"item.fecharegistro\" datepicker required type=\"text\" class=\"form-control\" disabled>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-sm-3\">\r\n                  <div class=\"form-group label-floating\">\r\n                    <label class=\"control-label\">Orden de {{item.tipo}}\r\n                      <span class=\"star\"></span>\r\n                    </label>\r\n                    <input name=\"nroordencompra\" [(ngModel)]=\"item.nroordencompra\" required type=\"text\" class=\"form-control\" [disabled]=\"toggleButton\">\r\n                  </div>\r\n                </div>\r\n\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col-sm-3\">\r\n                  <div class=\"form-group label-floating\">\r\n                    <label class=\"control-label\">Organización Proveedora\r\n                      <span class=\"star\"></span>\r\n                    </label>\r\n                    <input name=\"proveedor\" [(ngModel)]=\"item.proveedor\" required type=\"text\" class=\"form-control\" [disabled]=\"toggleButton\">\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-sm-3\">\r\n                  <div class=\"form-group label-floating\">\r\n                    <label class=\"control-label\">RUC Proveedor\r\n                      <span class=\"star\"></span>\r\n                    </label>\r\n                    <input name=\"rucproveedor\" [(ngModel)]=\"item.rucproveedor\" required type=\"text\" class=\"form-control\" [disabled]=\"toggleButton\">\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-sm-3\">\r\n                  <div class=\"form-group label-floating\">\r\n                    <label class=\"control-label\">Código Proveedor\r\n                      <span class=\"star\"></span>\r\n                    </label>\r\n                    <input name=\"codigoproveedor\" [(ngModel)]=\"item.codigoproveedor\" required type=\"text\" class=\"form-control\" [disabled]=\"toggleButton\">\r\n                  </div>\r\n                </div>\r\n\r\n                \r\n                <div class=\"col-sm-2\">\r\n                  <div class=\"form-group label-floating\">\r\n                    <label class=\"control-label\">Versión OC\r\n                      <span class=\"star\"></span>\r\n                    </label>\r\n                    <input name=\"version\" [(ngModel)]=\"item.version\" required type=\"text\" class=\"form-control\" [disabled]=\"toggleButton\">\r\n                  </div>\r\n                </div>\r\n\r\n                <div class=\"col-sm-2\">\r\n\r\n                  <div class=\"form-group label-floating\">\r\n                    <label class=\"control-label\">Estado Web</label>\r\n                    <input name=\"estadoweb\" [(ngModel)]=\"item.estadoweb\" required type=\"text\" class=\"form-control\" [disabled]=\"toggleButton\">\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n\r\n\r\n              <div class=\"row\">\r\n                <div class=\"col-sm-4\">\r\n                  <div class=\"form-group label-floating\">\r\n                    <label class=\"control-label\">Atención a\r\n                      <span class=\"star\"></span>\r\n                    </label>\r\n                    <textarea name=\"atenciona\" [(ngModel)]=\"item.atenciona\" required type=\"text\" class=\"form-control\" rows=\"3\" [disabled]=\"toggleButton\"> </textarea>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class=\"col-sm-4\">\r\n                  <div class=\"form-group label-floating\">\r\n                    <label class=\"control-label\">Contactar con\r\n                      <span class=\"star\"></span>\r\n                    </label>\r\n                    <textarea name=\"contactarcon\" [(ngModel)]=\"item.contactarcon\" required type=\"text\" class=\"form-control\" rows=\"3\" [disabled]=\"toggleButton\"> </textarea>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-sm-4\">\r\n                  <div class=\"form-group label-floating\">\r\n                    <label class=\"control-label\">Creado por \r\n                      <span class=\"star\"></span>\r\n                    </label>\r\n                    <textarea name=\"preparadapor\" [(ngModel)]=\"item.preparadapor\" required type=\"text\" class=\"form-control\" rows=\"3\" [disabled]=\"toggleButton\"> </textarea>\r\n                  </div>\r\n                </div>\r\n\r\n              </div>\r\n\r\n\r\n\r\n              <div class=\"row\">\r\n                <div class=\"col-sm-4\">\r\n                  <div class=\"form-group label-floating\">\r\n                    <label class=\"control-label\">Facturar a\r\n                      <span class=\"star\"></span>\r\n                    </label>\r\n                    <textarea [(ngModel)]=\"item.facturara\" name=\"facturara\" class=\"form-control\" rows=\"4\" [disabled]=\"toggleButton\"></textarea>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-sm-4\">\r\n                  <div class=\"form-group label-floating\">\r\n                    <label class=\"control-label\">Recepción de Factura\r\n                      <span class=\"star\"></span>\r\n                    </label>\r\n                    <textarea [(ngModel)]=\"item.enviarfacturaa\" name=\"enviarfacturaa\" class=\"form-control\" rows=\"4\" [disabled]=\"toggleButton\"></textarea>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-sm-4\">\r\n                  <div class=\"form-group label-floating\">\r\n                    <label class=\"control-label\">Grupo de Compra\r\n                      <span class=\"star\"></span>\r\n                    </label>\r\n                    <textarea [(ngModel)]=\"item.grupocompra\" name=\"grupocompra\" class=\"form-control\" rows=\"4\" [disabled]=\"toggleButton\"></textarea>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n\r\n\r\n\r\n\r\n              <div class=\"row\">\r\n                <div class=\"col-md-12\">\r\n                  <div class=\"card\">\r\n                    <div class=\"card-header card-header-icon\" data-background-color=\"blue\">\r\n                      <i class=\"material-icons\">assignment</i>\r\n                    </div>\r\n                    <div class=\"card-content\">\r\n                      <h4 class=\"card-title\">Condiciones</h4>\r\n                      <div class=\"row\">\r\n                        <div class=\"col-sm-3\">\r\n                          <div class=\"form-group label-floating\">\r\n                            <label class=\"control-label\">Moneda<span class=\"star\"></span></label>\r\n                            <input name=\"moneda\" [(ngModel)]=\"item.moneda\" required type=\"text\" class=\"form-control\" [disabled]=\"toggleButton\">\r\n                          </div>\r\n                        </div>\r\n                        <div class=\"col-sm-3\">\r\n                          <div class=\"form-group label-floating\">\r\n                            <label class=\"control-label\">Forma de Pago<span class=\"star\"></span></label>\r\n                            <input name=\"formapago\" [(ngModel)]=\"item.formapago\" required type=\"text\" class=\"form-control\" [disabled]=\"toggleButton\">\r\n                          </div>\r\n                        </div>\r\n                        <div class=\"col-sm-3\">\r\n                          <div class=\"form-group label-floating\">\r\n                            <label class=\"control-label\">Fecha de Inicio de Contrato<span class=\"star\"></span></label>\r\n                            <input name=\"fechainiciocontrato\" [(ngModel)]=\"item.fechainiciocontrato\" datepicker required type=\"text\" class=\"form-control\" disabled>\r\n                          </div>\r\n                        </div>\r\n                        <div class=\"col-sm-3\">\r\n                          <div class=\"form-group label-floating\">\r\n                            <label class=\"control-label\">Fecha Fin de Contrato<span class=\"star\"></span></label>\r\n                            <input name=\"fechafincontrato\" [(ngModel)]=\"item.fechafincontrato\" datepicker required type=\"text\" class=\"form-control\" disabled>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n\r\n\r\n\r\n                    </div>\r\n                    <!-- end content-->\r\n                  </div>\r\n                  <!--  end card  -->\r\n                </div>\r\n                <!-- end col-md-12 -->\r\n              </div>\r\n\r\n              <div class=\"row\">\r\n                <div class=\"col-md-12\">\r\n                  <div class=\"card\">\r\n                    <div class=\"card-header card-header-icon\" data-background-color=\"blue\">\r\n                      <i class=\"material-icons\">assignment</i>\r\n                    </div>\r\n                    <div class=\"card-content\">\r\n                      <h4 class=\"card-title\">Detalle de Artículos</h4>\r\n\r\n                      <div class=\"material-datatables table-responsive\" style=\"display:block\">\r\n                        <table id=\"dtArticulos\" class=\"table table-striped table-no-bordered table-hover\" cellspacing=\"0\" width=\"100%\" style=\"width:100%\">\r\n\r\n                          <thead>\r\n                            <tr>\r\n                              <th>Posición</th>\r\n\r\n                              <th>Descripción del Producto</th>\r\n                              <th class=\"disabled-sorting\">Cantidad</th>\r\n                              <th class=\"disabled-sorting\">Unidad</th>\r\n                              <th class=\"disabled-sorting\">Precio Unitario</th>\r\n                              <th class=\"disabled-sorting\">Precio Total</th>\r\n                              <th class=\"disabled-sorting\">Fecha de Entrega</th>\r\n                            </tr>\r\n                          </thead>\r\n\r\n\r\n                        </table>\r\n                      </div>\r\n                      <!-- end content-->\r\n                    </div>\r\n                  </div>\r\n                  <!--  end card  -->\r\n                </div>\r\n                <!-- end col-md-12 -->\r\n              </div>\r\n\r\n\r\n\r\n              <div class=\"row\">\r\n                <div class=\"col-sm-8\">\r\n\r\n                  <div class=\"row\">\r\n\r\n                    <div class=\"col-sm-12\">\r\n                      <div class=\"form-group label-floating\">\r\n                        <label class=\"control-label\">Aprobado por<span class=\"star\"></span></label>\r\n                        <div class=\"aprobadopor\">\r\n                          <br/>\r\n                          <p>Aprobado Nivel 1: GMENDEZG<br/>                         \r\n                          Aprobado Nivel 2: JPEREZL<br/>\r\n                         Aprobado Nivel 3: AROLDANC</p>\r\n                          \r\n                          <p class=\"form-control\" disabled>\r\n\r\n                          </p>\r\n                        </div>\r\n\r\n                      </div>\r\n\r\n\r\n                    </div>\r\n\r\n\r\n\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-sm-4\">\r\n                  \r\n                                    <div class=\"row\">\r\n                                      <div class=\"col-sm-12\">\r\n                                        <div class=\"form-group label-floating\">\r\n                                          <label class=\"control-label\">SUB TOTAL ({{item.moneda}})<span class=\"star\"></span></label>\r\n                                          <input [(ngModel)]=\"item.subtotal\" name=\"subtotal\" class=\"form-control\" [disabled]=\"toggleButton\">\r\n                                        </div>\r\n                                      </div>\r\n                                      <div class=\"col-sm-12\" *ngIf=\"item.condiciones\">\r\n                                        <div class=\"form-group label-floating\">\r\n                                          <label class=\"control-label\">UTILIDADES (5.0000%)<span class=\"star\"></span></label>\r\n                                          <input [(ngModel)]=\"item.utilidades\" name=\"utilidades\" class=\"form-control\" [disabled]=\"toggleButton\">\r\n                                        </div>\r\n                                      </div>\r\n                  \r\n                                      <div class=\"col-sm-12\" *ngIf=\"item.condiciones\">\r\n                                        <div class=\"form-group label-floating\">\r\n                                          <label class=\"control-label\">GASTOS GENERALES (4.0700%)<span class=\"star\"></span></label>\r\n                                          <input [(ngModel)]=\"item.gastosgenerales\" name=\"gastosgenerales\" class=\"form-control\" [disabled]=\"toggleButton\">\r\n                                        </div>\r\n                                      </div>\r\n                  \r\n                                      <div class=\"col-sm-12\">\r\n                                        <div class=\"form-group label-floating\">\r\n                                          <label class=\"control-label\">VALOR DE VENTA ({{item.moneda}})<span class=\"star\"></span></label>\r\n                                          <input [(ngModel)]=\"item.valorventa\" name=\"valorventa\" class=\"form-control\" [disabled]=\"toggleButton\">\r\n                                        </div>\r\n                                      </div>\r\n                                     \r\n                                      <div class=\"col-sm-12\">\r\n                                        <div class=\"form-group label-floating\">\r\n                                          <label class=\"control-label\">IMPUESTOS (18.0000%)<span class=\"star\"></span></label>\r\n                                          <input [(ngModel)]=\"item.impuestos\" name=\"impuestos\" class=\"form-control\" [disabled]=\"toggleButton\">\r\n                                        </div>\r\n                                      </div>\r\n                                      <div class=\"col-sm-12\">\r\n                                        <div class=\"form-group label-floating\">\r\n                                          <label class=\"control-label\">VALOR TOTAL ({{item.moneda}})<span class=\"star\"></span></label>\r\n                                          <input [(ngModel)]=\"item.valortotal\" name=\"valortotal\" class=\"form-control\" [disabled]=\"toggleButton\">\r\n                                        </div>\r\n                                      </div>\r\n                  \r\n                                    </div>\r\n                                  </div>\r\n\r\n              </div>\r\n\r\n              <div class=\"row\">\r\n                <div class=\"col-sm-12\">\r\n                  <div class=\"form-group label-floating\">\r\n                    <label class=\"control-label\">Comentario del Proveedor acerca del cambio de estado \r\n                      <span class=\"star\"></span>\r\n                    </label>\r\n                    <textarea [(ngModel)]=\"item.comentarioproveedor\" id=\"comentarioproveedor\" name=\"comentarioproveedor\" class=\"form-control\" row=\"4\" [disabled]=\"toggleButtonCP\"></textarea>\r\n                  </div>\r\n                </div>\r\n\r\n              </div>\r\n\r\n            </div>\r\n\r\n\r\n\r\n            <div class=\"card-footer\">\r\n              <!--<button type=\"button\" class=\"btn btn-fill btn-default pull-right\" (click)=\"grabar($event)\" [disabled]=\"toggleButton\">Grabar</button>\r\n              <button (click)=\"toggleButton=false\" class=\"btn btn-fill btn-default pull-right\" *ngIf=\"id>0\">Habilitar Edición</button>-->\r\n              <a routerLink=\"/ordencompra/proveedor/buscar\" class=\"btn btn-fill btn-default pull-right\">Salir</a>\r\n              <button class=\"btn btn-fill btn-default pull-right\" (click)=\"print($event)\">Imprimir</button>\r\n              <button (click)=\"RechazarOC($event)\" class=\"btn btn-fill btn-default pull-right\">Rechazar</button>\r\n              <button (click)=\"AprobarOC($event)\" class=\"btn btn-fill btn-default pull-right\">Aprobar</button>\r\n\r\n            </div>\r\n          </form>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div style=\"display:none\">\r\n  <!---->\r\n  <div id=\"print-section-servicio\">\r\n    <table width=\"100%\" cellpadding=\"0\" cellspacing=\"0\" align=\"center\" bgcolor=\"#ffffff\">\r\n      <tbody>\r\n        <tr>\r\n          <td align=\"center\">\r\n\r\n\r\n            <table width=\"900\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\" bgcolor=\"#fff\">\r\n              <tbody>\r\n                <tr>\r\n                  <td width=\"449\" bgcolor=\"#fff\" style=\"border-left:1px solid #999;padding:1px; border-right:0; border-top:1px solid #999\"\r\n                    align=\"left\" valign=\"middle\">\r\n                    <img src=\"{{this.baseurl}}assets/img/faces/centenario.png\" width=\"358\" height=\"141\" style=\"padding:0; margin:0; border:0\">\r\n                  </td>\r\n                  <td width=\"448\" align=\"left\" valign=\"middle\" bgcolor=\"#fff\" style=\"border-left:1px solid #999;padding:5px; border-right:1px solid #999; border-top:1px solid #999\">\r\n                    <table width=\"100%\" cellpadding=\"10\" cellspacing=\"0\" border=\"0\">\r\n                      <tbody>\r\n                        <tr>\r\n                          <td align=\"left\" width=\"25%\">\r\n                            <strong>Ruc:</strong>\r\n                          </td>\r\n                          <td align=\"left\">PE20600323793</td>\r\n                        </tr>\r\n                        <tr>\r\n                          <td align=\"left\" width=\"25%\">\r\n\r\n                            <strong>Teléfono:</strong></td>\r\n                          <td align=\"left\">01-45325698\r\n                          </td>\r\n                        </tr>\r\n                        <tr>\r\n                          <td align=\"left\" width=\"25%\" style=\"vertical-align: top;\">\r\n\r\n                            <strong>Dirección:</strong></td>\r\n                          <td align=\"left\" style=\"vertical-align: top;\"> Av. Victor Andrés Belaunde 147. Vía Principal 102. Edificio: Real Cuatro - Piso: 1, SAN ISIDRO\r\n                            - LIMA .</td>\r\n                        </tr>\r\n                      </tbody>\r\n                    </table>\r\n                  </td>\r\n                </tr>\r\n                <tr>\r\n                  <td width=\"449\" bgcolor=\"#fff\" style=\"border-left:1px solid #999; border-right:0; border-top:1px solid #999\" align=\"left\"\r\n                    valign=\"top\">\r\n                    <table width=\"100%\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\" style=\"border-bottom:1px solid #999\">\r\n                      <tbody>\r\n                        <tr>\r\n                          <td style=\"padding:5px;\"><strong>Proveedor:</strong><br> EMPRESA EDITORA EL COMERCIO SA</td>\r\n                        </tr>\r\n                      </tbody>\r\n                    </table>\r\n                    <table width=\"100%\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\" style=\"border-bottom:1px solid #999\">\r\n                      <tbody>\r\n                        <tr>\r\n                          <td width=\"50%\" height=\"30\" style=\"border-right:1px solid #999; padding:5px\"><strong>RUC Proveedor:</strong><br> PE20143229816\r\n                          </td>\r\n                          <td width=\"50%\" height=\"30\" align=\"left\" valign=\"middle\" style=\"padding:5px\"><strong>Código Proveedor:</strong><strong></strong>\r\n                            <br> 110823232\r\n                          </td>\r\n                        </tr>\r\n                      </tbody>\r\n                    </table>\r\n                  </td>\r\n                  <td width=\"448\" align=\"left\" valign=\"top\" bgcolor=\"#fff\" style=\"border-left:1px solid #999; border-right:1px solid #999; border-top:1px solid #999\">\r\n                    <table width=\"100%\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\" style=\"border-bottom:1px solid #999\">\r\n                      <tbody>\r\n                        <tr>\r\n                          <td style=\"padding:5px\"><strong>Orden de Servicio:</strong><br> 4531046368\r\n                          </td>\r\n                        </tr>\r\n                      </tbody>\r\n                    </table>\r\n                    <table width=\"100%\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\" style=\"border-bottom:1px solid #999\">\r\n                      <tbody>\r\n                        <tr>\r\n                          <td width=\"50%\" height=\"30\" style=\"border-right:1px solid #999; padding:5px\"><strong>Fecha de emisión:</strong>\r\n                            <br> 05-jul-2017\r\n                          </td>\r\n                          <td width=\"25%\" height=\"30\" align=\"left\" valign=\"middle\" style=\"border-right:1px solid #999; padding:5px\"><strong>Versión OC:</strong><br>1\r\n                          </td>\r\n                          <td width=\"25%\" height=\"30\" align=\"left\" valign=\"middle\" style=\"padding:5px\"><strong>Estado Web:</strong><strong></strong> Aceptada </td>\r\n                        </tr>\r\n                      </tbody>\r\n                    </table>\r\n                  </td>\r\n                </tr>\r\n              </tbody>\r\n            </table>\r\n\r\n            <table width=\"900\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\" bgcolor=\"#fff\">\r\n              <tbody>\r\n                <tr>\r\n                  <td width=\"50%\" bgcolor=\"#fff\" style=\"border-left:1px solid #999; border-right:0; border-top:0; padding:5px\"><strong>Atención a:</strong><br> Sr. ANTONIO TAFUR<br> 3116500\r\n                    <br> pcolina@comercio.com.pe\r\n                  </td>\r\n                  <td width=\"50%\" bgcolor=\"#fff\" style=\"border-left:1px solid #999; border-right:1px solid #999; border-top:0; padding:5px\">\r\n                    <p><strong>Contactar con:</strong><br> JEANETTE ELSA COLLANTES SANTOS<br> 01-4583654\r\n                      <br> compras1@centenario.com.pe\r\n                    </p>\r\n\r\n                    <p><strong>Creado por:</strong><br> Sr. Gonzalo Moscol </p>\r\n                  </td>\r\n                </tr>\r\n              </tbody>\r\n            </table>\r\n\r\n            <table width=\"900\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\" bgcolor=\"#fff\">\r\n              <tbody>\r\n                <tr>\r\n                  <td width=\"50%\" bgcolor=\"#fff\" style=\"border-left:1px solid #999; border-right:0; border-top:1px solid #999; padding:5px\"><strong>Facturar a:</strong><br> Centenario Corporativo S.A.C.<br> 20600323793\r\n                    <br> Av. Victor Andrés Belaunde 147 . Vía<br> Principal 102 . Edificio: Real Cuatro - Piso: 1, SAN ISIDRO\r\n                    - LIMA </td>\r\n                  <td width=\"50%\" bgcolor=\"#fff\" style=\"border-left:1px solid #999; border-right:1px solid #999; border-top:1px solid #999; padding:5px\">\r\n                    <p><strong>Recepción de Factura:</strong><br> Lunes, Miércoles y jueves de 9 am. a 1 pm.<br> Av.Victor Andrés\r\n                      Belaunde 147.Edif. Real<br> 4,Sótano 1 - San Isidro<br> 01-5236589\r\n                    </p>\r\n                  </td>\r\n                </tr>\r\n              </tbody>\r\n            </table>\r\n\r\n            <table width=\"900\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\" bgcolor=\"#fff\">\r\n              <tbody>\r\n                <tr>\r\n                  <td width=\"50%\" bgcolor=\"#fff\" style=\"border-left:1px solid #999; border-right:0; border-top:1px solid #999; padding:5px\"><strong>Condiciones:</strong><br>\r\n                    <strong>Moneda:</strong> PEN<br>\r\n                    <strong>Forma de Pago:</strong> Dentro de 60 Días<br>\r\n                    <strong>Fecha de inicio de contrato:</strong> 05-07-2017<br>\r\n                    <strong>Fecha fin de contrato:</strong> 15-07-2017</td>\r\n                  <td width=\"50%\" bgcolor=\"#fff\" style=\"border-left:1px solid #999; border-right:1px solid #999; border-top:1px solid #999; padding:5px\">\r\n                    <p><strong>Grupo de Compra:</strong><br> F00 -IC<br> Administración\r\n                    </p>\r\n                  </td>\r\n                </tr>\r\n              </tbody>\r\n            </table>\r\n\r\n            <table width=\"900\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\" bgcolor=\"#fff\">\r\n              <tbody>\r\n                <tr>\r\n                  <td width=\"100%\" height=\"20\" align=\"center\" bgcolor=\"#fff\" style=\"border-left:1px solid #999; border-right:1px solid #999; border-top:1px solid #999; padding:5px\"><strong>CONDICIONES GENERALES</strong></td>\r\n                </tr>\r\n              </tbody>\r\n            </table>\r\n\r\n            <table width=\"900\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\" bgcolor=\"#fff\">\r\n              <tbody>\r\n                <tr>\r\n                  <td width=\"100%\" align=\"center\" bgcolor=\"#fff\" style=\"border-left:1px solid #999; border-right:1px solid #999; border-top:1px solid #999; padding:0\">&nbsp;</td>\r\n                </tr>\r\n              </tbody>\r\n            </table>\r\n\r\n\r\n            <table width=\"900\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\" style=\"border-top:1px solid #999\">\r\n              <tbody>\r\n                <tr>\r\n                  <td width=\"10%\" height=\"20\" align=\"center\" bgcolor=\"#fff\" style=\"border-left:1px solid #999; border-right:0; border-top:0; padding:5px\"> <strong>Posición</strong></td>\r\n                  <td width=\"40%\" height=\"20\" bgcolor=\"#fff\" style=\"border-left:1px solid #999; border-right:1px solid #999; border-top:0; padding:5px\"><strong>Descripción del producto</strong></td>\r\n                  <td width=\"8%\" height=\"20\" align=\"center\" bgcolor=\"#fff\" style=\"border-left:0; border-right:1px solid #999; border-top:0; padding:5px\"><strong>Cant.</strong></td>\r\n                  <td width=\"8%\" height=\"20\" align=\"center\" bgcolor=\"#fff\" style=\"border-left:0; border-right:1px solid #999; border-top:0; padding:5px\"><strong>Unid.</strong></td>\r\n                  <td width=\"8%\" height=\"20\" align=\"center\" bgcolor=\"#fff\" style=\"border-left:0; border-right:1px solid #999; border-top:0; padding:5px\"><strong>Precio<br>Unitario</strong></td>\r\n                  <td width=\"8%\" height=\"20\" align=\"center\" bgcolor=\"#fff\" style=\"border-left:0; border-right:1px solid #999; border-top:0; padding:5px\"><strong>Total</strong></td>\r\n                  <td width=\"8%\" height=\"20\" align=\"center\" bgcolor=\"#fff\" style=\"border-left:0; border-right:1px solid #999; border-top:0; padding:5px\"><strong>IGV</strong></td>\r\n                  <td width=\"10%\" height=\"20\" align=\"center\" bgcolor=\"#fff\" style=\"border-left:0; border-right:1px solid #999; border-top:0; padding:5px\"><strong>Fecha<br>Entrega</strong></td>\r\n                </tr>\r\n              </tbody>\r\n            </table>\r\n\r\n            <table width=\"900\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\" style=\"border-top:1px solid #999\">\r\n              <tbody>\r\n                <tr>\r\n                  <td width=\"10%\" height=\"20\" align=\"center\" valign=\"middle\" bgcolor=\"#fff\" style=\"border-left:1px solid #999; border-bottom:1px solid #999; border-right:0; border-top:0; padding:5px\">10</td>\r\n                  <td width=\"40%\" height=\"20\" bgcolor=\"#fff\" style=\"border-left:1px solid #999;  border-bottom:1px solid #999; border-right:1px solid #999; border-top:0; padding:5px\">\r\n                    <p>SRV SUSCRIPCION DIARIOS<br> SRV SUSCRIPCION DIARIOS\r\n                    </p>\r\n                  </td>\r\n                  <td width=\"8%\" height=\"20\" align=\"center\" valign=\"middle\" bgcolor=\"#fff\" style=\"border-left:0; border-bottom:1px solid #999; border-right:1px solid #999; border-top:0; padding:5px\">&nbsp;</td>\r\n                  <td width=\"8%\" height=\"20\" align=\"center\" valign=\"middle\" bgcolor=\"#fff\" style=\"border-left:0; border-bottom:1px solid #999; border-right:1px solid #999; border-top:0; padding:5px\">&nbsp;</td>\r\n                  <td width=\"8%\" height=\"20\" align=\"center\" valign=\"middle\" bgcolor=\"#fff\" style=\"border-left:0; border-bottom:1px solid #999; border-right:1px solid #999; border-top:0; padding:5px\">&nbsp;</td>\r\n                  <td width=\"8%\" height=\"20\" align=\"center\" valign=\"middle\" bgcolor=\"#fff\" style=\"border-left:0; border-bottom:1px solid #999; border-right:1px solid #999; border-top:0; padding:5px\">330.5100</td>\r\n                  <td width=\"8%\" height=\"20\" align=\"center\" valign=\"middle\" bgcolor=\"#fff\" style=\"border-left:0; border-bottom:1px solid #999; border-right:1px solid #999; border-top:0; padding:5px\">59.4918</td>\r\n              \r\n                  \r\n                  <td width=\"10%\" height=\"20\" align=\"center\" valign=\"middle\" bgcolor=\"#fff\" style=\"border-left:0; border-bottom:1px solid #999; border-right:1px solid #999; border-top:0; padding:5px\">&nbsp;</td>\r\n                </tr>\r\n                <tr>\r\n                  <td width=\"10%\" height=\"20\" align=\"center\" valign=\"middle\" bgcolor=\"#fff\" style=\"border-left:1px solid #999; border-bottom:1px solid #999; border-right:0; border-top:0; padding:5px\">10.10</td>\r\n                  <td width=\"40%\" height=\"20\" bgcolor=\"#fff\" style=\"border-left:1px solid #999;  border-bottom:1px solid #999; border-right:1px solid #999; border-top:0; padding:5px\">\r\n                    <p>SRV SUSCRIPCION DIARIOS<br>\r\n                      <strong>Centro:</strong> 6835 - Av. Argentina 3093 CALLAO<br>\r\n                      <strong>Solicitud de pedido:</strong> 0010534244</p>\r\n                  </td>\r\n                  <td width=\"8%\" height=\"20\" align=\"center\" valign=\"middle\" bgcolor=\"#fff\" style=\"border-left:0; border-bottom:1px solid #999; border-right:1px solid #999; border-top:0; padding:5px\">1.0000</td>\r\n                  <td width=\"8%\" height=\"20\" align=\"center\" valign=\"middle\" bgcolor=\"#fff\" style=\"border-left:0; border-bottom:1px solid #999; border-right:1px solid #999; border-top:0; padding:5px\">SRV</td>\r\n                  <td width=\"8%\" height=\"20\" align=\"center\" valign=\"middle\" bgcolor=\"#fff\" style=\"border-left:0; border-bottom:1px solid #999; border-right:1px solid #999; border-top:0; padding:5px\">330.5100</td>\r\n                  <td width=\"8%\" height=\"20\" align=\"center\" valign=\"middle\" bgcolor=\"#fff\" style=\"border-left:0; border-bottom:1px solid #999; border-right:1px solid #999; border-top:0; padding:5px\">330.5100</td>\r\n                  <td width=\"8%\" height=\"20\" align=\"center\" valign=\"middle\" bgcolor=\"#fff\" style=\"border-left:0; border-bottom:1px solid #999; border-right:1px solid #999; border-top:0; padding:5px\">59.4918</td>\r\n                  <td width=\"10%\" height=\"20\" align=\"center\" valign=\"middle\" bgcolor=\"#fff\" style=\"border-left:0; border-bottom:1px solid #999; border-right:1px solid #999; border-top:0; padding:5px\">20-07-2017</td>\r\n                </tr>\r\n\r\n              </tbody>\r\n            </table>\r\n\r\n            <table width=\"900\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\" bgcolor=\"#fff\">\r\n              <tbody>\r\n                <tr>\r\n                  <td width=\"50%\" bgcolor=\"#fff\" style=\"border-left:1px solid #999; border-right:1px solid #999; border-top:0; padding:5px\">\r\n                    <p><strong>Aprobado por:</strong><br> Aprobado Nivel 1: GMENDEZG<br>                      \r\n                    Aprobado Nivel 2: JPEREZL<br>                      \r\n                    Aprobado Nivel 3: AROLDANC<br>                    </p>\r\n                  </td>\r\n                  <td width=\"50%\" bgcolor=\"#fff\" style=\"border-left:0; border-right:1px solid #999; border-top:0; padding:5px\">\r\n                    <table width=\"100%\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\">\r\n                      <tbody>\r\n                        <tr>\r\n                          <td width=\"60%\" align=\"left\" valign=\"middle\">\r\n                            <p><strong>SUB TOTAL ({{item.moneda}})</strong><br>\r\n                              <strong *ngIf=\"item.condiciones\">UTILIDADES (5.0000%)<br></strong>\r\n                              <strong *ngIf=\"item.condiciones\">GASTOS GENERALES (4.0700%)<br></strong>\r\n                              <strong>VALOR DE VENTA ({{item.moneda}})</strong><br>\r\n                              <strong>IMPUESTOS (18.0000%)</strong><br>\r\n                              <strong>VALOR TOTAL ({{item.moneda}})</strong></p>\r\n                          </td>\r\n                          <td align=\"right\" valign=\"middle\" *ngIf=\"!item.condiciones\">\r\n                            <p align=\"right\">{{this.item.subtotal}}<br>{{this.item.valorventa}}<br>{{this.item.impuestos}}<br>{{this.item.valortotal}}</p>\r\n                          </td>\r\n                          <td align=\"right\" valign=\"middle\" *ngIf=\"item.condiciones\">\r\n                            <p align=\"right\">{{this.item.subtotal}}<br>{{this.item.utilidades}}<br>{{this.item.gastosgenerales}}<br>{{this.item.valorventa}}<br>{{this.item.impuestos}}<br>{{this.item.valortotal}}</p>\r\n                          </td>\r\n                        </tr>\r\n                      </tbody>\r\n                    </table>\r\n                  </td>\r\n                </tr>\r\n              </tbody>\r\n            </table>\r\n\r\n            <table width=\"900\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\" bgcolor=\"#fff\">\r\n              <tbody>\r\n                <tr>\r\n                  <td width=\"100%\" height=\"20\" align=\"center\" bgcolor=\"#fff\" style=\"border-left:1px solid #999; border-right:1px solid #999; border-top:1px solid #999; padding:5px\">\r\n                    <strong>CONDICIONES GENERALES DE LA ORDEN DE COMPRA</strong></td>\r\n                </tr>\r\n              </tbody>\r\n            </table>\r\n\r\n            <table width=\"900\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\" bgcolor=\"#fff\">\r\n              <tbody>\r\n                <tr>\r\n                  <td width=\"100%\" align=\"left\" bgcolor=\"#fff\" style=\"border-left:1px solid #999; border-right:1px solid #999; border-top:1px solid #999; border-bottom:1px solid #999; padding:5px; margin-bottom:20px\">\r\n                    <p><strong>1 DEFINICIONES</strong><br> COMPRADOR: Centenario Retail S.A.C. , cuyos datos figuran en la cabecera\r\n                      de la Orden de Compra.<br> PROVEEDOR: Empresa que, según sea el caso, suministra los bienes o realiza\r\n                      los servicios o trabajos objetos de la Orden<br> de Compra.<br> ORDEN DE COMPRA: Documento elaborado\r\n                      por el COMPRADOR (en adelante O/C) en el que se incluye todos los<br> términos, condiciones, especificaciones\r\n                      técnicas, planos, etc. que es aplicable a los suministros o servicios solicitados por<br> el COMPRADOR\r\n                      y que constituye el único, total y exclusivo acuerdo entre las partes (COMPRADOR - PROVEEDOR). Esta<br>                      orden sustituye a todos los demás documentos cursados entre las partes y está expresamente condicionada\r\n                      a la<br> aceptación por parte del PROVEEDOR de todas sus condiciones. Salvo exista un contrato.<br>                      COMPROBANTE DE PAGO: Documento autorizado por la SUNAT para deducir costo o gasto.<br>\r\n                      <br>\r\n                      <strong>2 ACUSE DE RECIBO</strong><br> En el plazo máximo de tres (03) días calendarios contados desde\r\n                      la fecha de entrega de la O/C al PROVEEDOR, éste<br> deberá acusar el recibo de la misma, devolviendo\r\n                      una copia al COMPRADOR, en señal de su completa conformidad con<br> los términos de la O/C. Si el acuse\r\n                      de recibo lleva consigo alguna modificación o reserva a las condiciones generales o<br> particulares\r\n                      de la O/C, aquellas serán consideradas nulas si no han sido previamente aceptadas, en forma explícita\r\n                      y por<br> escrito, por el COMPRADOR.<br>\r\n                      <br>\r\n                      <strong>3 PRECIOS Y PAGO</strong><br> Los precios especificados en la O/C, son fijos y no revisables.\r\n                      El pago será efectuado de acuerdo a lo establecido en la<br> O/C. Sin embargo, el pago será retenido\r\n                      o deducido parcialmente si el PROVEEDOR no está cumpliendo con las<br> condiciones aplicables a la\r\n                      O/C.\r\n                      <br>\r\n                      <br>\r\n                      <strong>4 ENTREGA DE BIENES</strong><br> 4.1 Todas las entregas se realizarán con el embalaje suficiente,\r\n                      en el lugar indicado en la O/C y en los plazos concertados.<br> En caso de retrasos, el COMPRADOR se\r\n                      reserva el derecho a rechazar la entrega.<br> 4.2 El COMPRADOR recibirá todos los bienes con carácter\r\n                      provisional. La aceptación o no de los mismos se efectuará una<br> vez pasados los controles de cantidad\r\n                      y calidad.<br> 4.3 Los bienes se entregarán agrupados por número de O/C, indicando referencia y descripción\r\n                      clara del ítem. No se<br> mezclaran en un mismo bulto, bienes de distintas O/C.<br> 4.4 Todos los bienes\r\n                      vendrán acompañadas de sus respectivas Guías de Remisión, en original (Destinatario) y copia<br> (SUNAT).\r\n                      <br> 4.5 Las Guías de Remisión indicarán el número de bultos, describirán los bienes con la misma denominación\r\n                      de la O/C y<br> con las cantidades, referencias de ítem o plano. Cada Guía de Remisión corresponderá\r\n                      a una sola O/C cuyo número estará<br> convenientemente indicado.<br>\r\n                      <br>\r\n                      <strong>5 CONDICIONES DE PAGO DE LOS COMPROBANTES DE    PAGO</strong><br> 5.1 El plazo para el pago\r\n                      correrá a partir de la fecha de recepción de la misma por el COMPRADOR.<br> 5.2 Los vencimientos serán\r\n                      los que figuren en las condiciones de pago indicadas en la O/C.<br> 5.3 Para el recojo de cheques el\r\n                      PROVEEDOR debe presentar copia de DNI y el cargo del Comprobante de Pago.<br>\r\n                      <strong><br>6. SEGURIDAD Y SALUD EN EL TRABAJO</strong><br> 6.1 El PROVEEDOR declara conocer y se compromete\r\n                      a cumplir el contenido de los siguientes documentos:<br> . Manual de Políticas: Estándares de trabajo\r\n                      de Contratistas<br> . Las disposiciones legales en materia de seguridad y salud en el trabajo de acuerdo\r\n                      a la Ley 29783.<br> . Mantener asegurados a sus trabajadores, dependientes y/o al personal de terceros\r\n                      que utilice para el desarrollo de<br> sus actividades.<br> . Las disposiciones legales en materia ambiental\r\n                      que regulan las actividades empresariales y de construcción.<br> 6.2 El PROVEEDOR acredita contar con\r\n                      su propio Reglamento de Seguridad y Salud en el Trabajo, el cual se encuentra<br> conforme a los lineamientos\r\n                      de Seguridad y Salud en el Trabajo del COMPRADOR.<br> En caso de que exista discrepancia entre las\r\n                      normativas de Seguridad del PROVEEDOR y del COMPRADOR,<br> prevalecerán las aplicadas por este último.<br>\r\n                      <br>\r\n                      <strong>7. SEGUROS</strong><br> 7.1. El PROVEEDOR deberá contratar para todos sus trabajadores, un\r\n                      Seguro de Vida, conforme a lo establecido en el<br> Decreto Legislativo Nº 688 o la norma que la sustituya,\r\n                      El PROVEEDOR deberá contratar el Seguro Obligatorio de<br> Accidentes de Tránsito (SOAT) para uso propio\r\n                      para los vehículos de su propiedad, alquilados arrendados y/o de terceros,<br> que sean utilizados\r\n                      durante las operaciones objeto del presente Subcontrato.<br> 7.2. El PROVEEDOR, deberá contratar un\r\n                      Seguro Complementario de Trabajo de Riesgo, en los términos y condiciones<br> establecidos en la Ley\r\n                      26790, normas complementarias y conexas, cuya cobertura deberá incluir la prevención de riesgos<br>                      de salud, así como la prevención de invalidez y sepelio por causa del desarrollo de trabajo de riesgo,\r\n                      el cual deberá estar<br> vigente durante todo el tiempo que dure la ejecución de los servicios.<br>\r\n                      <br>\r\n                      <strong>8. RESPONSABILIDADES DEL PROVEEDOR</strong><br> El PROVEEDOR asume cualquier responsabilidad\r\n                      por accidentes de trabajo, inclusive en los montos no cubiertos por los<br> seguros contratados descritos\r\n                      en el numeral precedente, que le resulten imputables o a su personal, quedando EL<br> COMPRADOR eximido\r\n                      de dicha responsabilidad.<br> EL PROVEEDOR asume íntegramente la responsabilidad en caso que se causaren\r\n                      daños y perjuicios por la inejecución,<br> total o parcial, de las obligaciones a su cargo de acuerdo\r\n                      al servicios descritos en el presente documento.<br>\r\n                      <br>\r\n                      <strong>9. PENALIDADES</strong><br> En caso de retrasos, el COMPRADOR se reserva el derecho de aplicar\r\n                      una penalidad del 2% por semana de retraso o<br> fracción, hasta un tope del 10% como máximo, penalidad\r\n                      que será aplicable sobre el valor total de la O/C incluido el I.G.V.<br>\r\n                      <br>\r\n                      <strong>10. PRELACIÓN DE DOCUMENTOS</strong> <br> En caso de que exista un contrato que respalde la\r\n                      presente O/C prevalecerán las<br> estipulaciones previstas en dicho documento.<br> Fecha: 06.04.2017\r\n                      <br>\r\n                    </p>\r\n                  </td>\r\n                </tr>\r\n              </tbody>\r\n            </table>\r\n\r\n            <table width=\"900\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\" bgcolor=\"#fff\">\r\n              <tbody>\r\n                <tr>\r\n                  <td width=\"100%\" align=\"center\" bgcolor=\"#fff\" style=\"border-left:1px solid #999; border-right:1px solid #999; border-top:0; border-bottom:1px solid #999; padding:5px; margin-bottom:20px\">\r\n                    <p>&nbsp;</p>\r\n                    <p>&nbsp;</p>\r\n                    <p>---------------------------------------------<br> PROVEEDOR\r\n                    </p>\r\n                  </td>\r\n                </tr>\r\n              </tbody>\r\n            </table>\r\n\r\n          </td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n    <style type=\"text/css\">\r\n      IMG.displayed {\r\n        display: block;\r\n        margin-left: auto;\r\n        margin-right: auto;\r\n      }\r\n\r\n      body {\r\n        font-family: Arial, Helvetica, sans-serif;\r\n        color: #000;\r\n        font-size: 12px;\r\n      }\r\n\r\n      img {\r\n        display: block;\r\n        padding: 0;\r\n        margin: 0;\r\n      }\r\n\r\n      a {\r\n        color: #06C;\r\n        font-size: 12px;\r\n      }\r\n\r\n      td {\r\n        font-family: Arial, Helvetica, sans-serif;\r\n        color: #000;\r\n        font-size: 12px;\r\n        background-color: #FFF\r\n      }\r\n\r\n      p {\r\n        margin: 0;\r\n        font-family: Arial, Helvetica, sans-serif;\r\n        font-size: 12px;\r\n      }\r\n\r\n      ul {\r\n        margin: 0;\r\n        padding-left: 30px;\r\n        font-family: Arial, Helvetica, sans-serif;\r\n        font-size: 12px;\r\n      }\r\n    </style>\r\n  </div>\r\n\r\n  <div id=\"print-section-material\">\r\n    <table width=\"100%\" cellpadding=\"0\" cellspacing=\"0\" align=\"center\" bgcolor=\"#ffffff\">\r\n      <tbody>\r\n        <tr>\r\n          <td align=\"center\">\r\n\r\n\r\n            <table width=\"900\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\" bgcolor=\"#fff\">\r\n              <tbody>\r\n                <tr>\r\n                  <td colspan=\"2\" bgcolor=\"#fff\" style=\"\"\r\n                    align=\"left\" valign=\"middle\">\r\n                    <img src=\"{{this.baseurl}}assets/img/faces/centenario.png\" width=\"250\"  style=\"padding:0; margin:0; border:0\">\r\n                  </td>\r\n                </tr>\r\n                <tr>\r\n                  <td colspan=\"2\" bgcolor=\"#fff\" style=\"\"\r\n                    align=\"center\" valign=\"middle\">\r\n                    <b>Orden de Compra {{this.item.nroordencompra}}</b><br><br>\r\n                  </td>\r\n                </tr>\r\n                \r\n                <tr>\r\n                  <td width=\"449\" bgcolor=\"#fff\" style=\"border-left:1px solid #999; border-right:0; border-top:1px solid #999\" align=\"left\"\r\n                    valign=\"top\">\r\n                    <table width=\"100%\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\" style=\"border-bottom:1px solid #999\">\r\n                      <tbody>\r\n                        <tr>\r\n                          <td style=\"padding:5px;\"><strong>Organización Proveedora:</strong><br> {{this.item.proveedor}}</td>\r\n                        </tr>\r\n                      </tbody>\r\n                    </table>\r\n                    <table width=\"100%\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\" style=\"border-bottom:1px solid #999\" height=\"75\">\r\n                      <tbody>\r\n                        <tr>\r\n                          <td width=\"50%\" height=\"30\" style=\"border-right:1px solid #999; padding:5px\"><strong>RUC Proveedor:</strong><br> {{this.item.rucproveedor}}\r\n                          </td>\r\n                          <td width=\"50%\" height=\"30\" align=\"left\" valign=\"middle\" style=\"padding:5px\"><strong>Código Proveedor:</strong><strong></strong>\r\n                            <br> {{this.item.codigoproveedor}}\r\n                          </td>\r\n                        </tr>\r\n                      </tbody>\r\n                    </table>\r\n                  </td>\r\n                  <td width=\"448\" align=\"left\" valign=\"top\" bgcolor=\"#fff\" style=\"border-left:1px solid #999; border-right:1px solid #999; border-top:1px solid #999\">\r\n                    <table width=\"100%\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\" style=\"border-bottom:1px solid #999\">\r\n                      <tbody>\r\n                        <tr>\r\n                          <td style=\"padding:5px\"><strong>Creado por:</strong><br> {{this.item.preparadapor}}\r\n                          </td>\r\n                        </tr>\r\n                      </tbody>\r\n                    </table>\r\n                    <table width=\"100%\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\" style=\"border-bottom:1px solid #999\" height=\"75\">\r\n                      <tbody>\r\n                        <tr>\r\n                          <td width=\"50%\" height=\"30\" style=\"border-right:1px solid #999; padding:5px\"><strong>Fecha de emisión:</strong>\r\n                            <br>{{this.item.fecharegistro}}</td>\r\n                          <td width=\"25%\" height=\"30\" align=\"left\" valign=\"middle\" style=\"border-right:1px solid #999; padding:5px\"><strong>Versión OC:</strong><br>{{this.item.version}}\r\n                          </td>\r\n                          <td width=\"25%\" height=\"30\" align=\"left\" valign=\"middle\" style=\"padding:5px\"><strong>Estado Web:</strong><strong></strong> {{this.item.estadoweb}} </td>\r\n                        </tr>\r\n                      </tbody>\r\n                    </table>\r\n                  </td>\r\n                </tr>\r\n              </tbody>\r\n            </table>\r\n\r\n            <table width=\"900\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\" bgcolor=\"#fff\">\r\n              <tbody>\r\n                <tr>\r\n                  <td width=\"50%\" bgcolor=\"#fff\" style=\"border-left:1px solid #999; border-right:0; border-top:0; padding:5px\"><strong>Atención a:</strong><br> {{this.item.atenciona}}<br> 01-257364 / 94583901<br> atafur@prueba.com\r\n                  </td>\r\n                  <td width=\"50%\" bgcolor=\"#fff\" style=\"border-left:1px solid #999; border-right:1px solid #999; border-top:0; padding:5px\">\r\n                    <p><strong>Contactar con:</strong><br> {{this.item.contactarcon}}<br> 01-4583654\r\n                      <br> {{this.item.emailcontacto}}\r\n                    </p>\r\n\r\n                    \r\n                  </td>\r\n                </tr>\r\n              </tbody>\r\n            </table>\r\n\r\n            <table width=\"900\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\" bgcolor=\"#fff\">\r\n              <tbody>\r\n                <tr>\r\n                  <td width=\"50%\" bgcolor=\"#fff\" style=\"border-left:1px solid #999; border-right:0; border-top:1px solid #999; padding:5px\"><strong>Facturar a:</strong><br> <strong>Razón Social:</strong> {{this.item.facturara}}<br> <strong>RUC:</strong> 20600323980\r\n                    <br> <strong>Dirección:</strong> {{this.item.direccionfactura}}</td>\r\n                  <td width=\"50%\" bgcolor=\"#fff\" style=\"border-left:1px solid #999; border-right:1px solid #999; border-top:1px solid #999; padding:5px\">\r\n                    <p><strong>Recepción de Factura:</strong><br> <strong>Horario:</strong> Lunes, Miércoles y jueves de 9 am. a 1 pm.<br> <strong>Dirección:</strong> Av.Victor Andrés\r\n                      Belaunde 147.Edif. Real<br> 4,Sótano 1 - San Isidro<br> <strong>Teléfono:</strong> 01-5236589\r\n                    </p>\r\n                  </td>\r\n                </tr>\r\n              </tbody>\r\n            </table>\r\n\r\n            <table width=\"900\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\" bgcolor=\"#fff\">\r\n              <tbody>\r\n                <tr>\r\n                  <td width=\"50%\" bgcolor=\"#fff\" style=\"border-left:1px solid #999; border-right:0; border-top:1px solid #999; padding:5px\"><strong>Condiciones:</strong><br>\r\n                    <strong>Moneda:</strong> {{this.item.moneda}}<br>\r\n                    <strong>Forma de Pago:</strong> {{this.item.formapago}}<br>\r\n                    <strong>Fecha de inicio de contrato:</strong> {{this.item.fechainiciocontrato}}<br>\r\n                    <strong>Fecha fin de contrato:</strong> {{this.item.fechafincontrato}}</td>\r\n                  <td width=\"50%\" bgcolor=\"#fff\" style=\"border-left:1px solid #999; border-right:1px solid #999; border-top:1px solid #999; padding:5px\">\r\n                    <p><strong>Grupo de Compra:</strong><br> {{this.item.grupocompra}}</p>\r\n                  </td>\r\n                </tr>\r\n              </tbody>\r\n            </table>\r\n\r\n            <table width=\"900\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\" bgcolor=\"#fff\">\r\n              <tbody>\r\n                <tr>\r\n                  <td width=\"100%\" height=\"20\" align=\"center\" bgcolor=\"#fff\" style=\"border-left:1px solid #999; border-right:1px solid #999; border-top:1px solid #999; padding:5px\"><strong>CONDICIONES GENERALES</strong></td>\r\n                </tr>\r\n              </tbody>\r\n            </table>\r\n\r\n            <table width=\"900\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\" bgcolor=\"#fff\">\r\n              <tbody>\r\n                <tr>\r\n                  <td width=\"100%\" align=\"center\" bgcolor=\"#fff\" style=\"border-left:1px solid #999; border-right:1px solid #999; border-top:1px solid #999; padding:0\">&nbsp;</td>\r\n                </tr>\r\n              </tbody>\r\n            </table>\r\n\r\n\r\n            <table width=\"900\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\" style=\"border-top:1px solid #999\">\r\n              <tbody>\r\n                <tr>\r\n                  <td width=\"10%\" height=\"20\" align=\"center\" bgcolor=\"#fff\" style=\"border-left:1px solid #999; border-right:0; border-top:0; padding:5px\"> <strong>Posición</strong></td>\r\n                  <td width=\"40%\" height=\"20\" bgcolor=\"#fff\" style=\"border-left:1px solid #999; border-right:1px solid #999; border-top:0; padding:5px\"><strong>Descripción del producto</strong></td>\r\n                  <td width=\"8%\" height=\"20\" align=\"center\" bgcolor=\"#fff\" style=\"border-left:0; border-right:1px solid #999; border-top:0; padding:5px\"><strong>Cant.</strong></td>\r\n                  <td width=\"8%\" height=\"20\" align=\"center\" bgcolor=\"#fff\" style=\"border-left:0; border-right:1px solid #999; border-top:0; padding:5px\"><strong>Unid.</strong></td>\r\n                  <td width=\"8%\" height=\"20\" align=\"center\" bgcolor=\"#fff\" style=\"border-left:0; border-right:1px solid #999; border-top:0; padding:5px\"><strong>Precio<br>Unitario</strong></td>\r\n                  <td width=\"8%\" height=\"20\" align=\"center\" bgcolor=\"#fff\" style=\"border-left:0; border-right:1px solid #999; border-top:0; padding:5px\"><strong>Total</strong></td>\r\n                  <td width=\"8%\" height=\"20\" align=\"center\" bgcolor=\"#fff\" style=\"border-left:0; border-right:1px solid #999; border-top:0; padding:5px\"><strong>IGV</strong></td>\r\n                  <td width=\"10%\" height=\"20\" align=\"center\" bgcolor=\"#fff\" style=\"border-left:0; border-right:1px solid #999; border-top:0; padding:5px\"><strong>Fecha<br>Entrega</strong></td>\r\n                </tr>\r\n              </tbody>\r\n            </table>\r\n\r\n            <table width=\"900\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\" style=\"border-top:1px solid #999\">\r\n              <tbody>\r\n                <tr *ngFor=\"let row of item.productos\">\r\n                  <td width=\"10%\" height=\"20\" align=\"center\" valign=\"middle\" bgcolor=\"#fff\" style=\"border-left:1px solid #999; border-bottom:1px solid #999; border-right:0; border-top:0; padding:5px\">{{row.posicion}}</td>\r\n                  <td width=\"40%\" height=\"20\" bgcolor=\"#fff\" style=\"border-left:1px solid #999;  border-bottom:1px solid #999; border-right:1px solid #999; border-top:0; padding:5px\">\r\n                    <p>{{row.nombre}}</p>\r\n                    <p>&nbsp;</p>\r\n                    <p><strong>Centro: </strong>6835 - Av. Argentina 3093 CALLAO<br>\r\n                      <strong>Solicitud de pedido:</strong> 0010534244 <br>\r\n                      <br>\r\n                    </p>\r\n                  </td>\r\n                  <td width=\"8%\" height=\"20\" align=\"center\" valign=\"middle\" bgcolor=\"#fff\" style=\"border-left:0; border-bottom:1px solid #999; border-right:1px solid #999; border-top:0; padding:5px\">{{row.cantidad}}</td>\r\n                  <td width=\"8%\" height=\"20\" align=\"center\" valign=\"middle\" bgcolor=\"#fff\" style=\"border-left:0; border-bottom:1px solid #999; border-right:1px solid #999; border-top:0; padding:5px\">{{row.unidad}}</td>\r\n                  <td width=\"8%\" height=\"20\" align=\"center\" valign=\"middle\" bgcolor=\"#fff\" style=\"border-left:0; border-bottom:1px solid #999; border-right:1px solid #999; border-top:0; padding:5px\">{{row.preciounitario}}</td>\r\n                  <td width=\"8%\" height=\"20\" align=\"center\" valign=\"middle\" bgcolor=\"#fff\" style=\"border-left:0; border-bottom:1px solid #999; border-right:1px solid #999; border-top:0; padding:5px\">{{row.total}}</td>\r\n                  <td width=\"8%\" height=\"20\" align=\"center\" valign=\"middle\" bgcolor=\"#fff\" style=\"border-left:0; border-bottom:1px solid #999; border-right:1px solid #999; border-top:0; padding:5px\">{{row.igv}}</td>\r\n                  <td width=\"10%\" height=\"20\" align=\"center\" valign=\"middle\" bgcolor=\"#fff\" style=\"border-left:0; border-bottom:1px solid #999; border-right:1px solid #999; border-top:0; padding:5px\">{{row.fechaentrega}}</td>\r\n                </tr>\r\n        \r\n\r\n              </tbody>\r\n            </table>\r\n\r\n            <table width=\"900\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\" bgcolor=\"#fff\">\r\n              <tbody>\r\n                <tr>\r\n                  <td width=\"50%\" bgcolor=\"#fff\" style=\"border-left:1px solid #999; border-right:1px solid #999; border-top:0; padding:5px\">\r\n                    <p><strong>Aprobado por:</strong><br> Aprobado Nivel 1: GMENDEZG<br>                      \r\n                    Aprobado Nivel 2: JPEREZL<br>                      \r\n                    Aprobado Nivel 3: AROLDANC<br>                    </p>\r\n                  </td>\r\n                  <td width=\"50%\" bgcolor=\"#fff\" style=\"border-left:0; border-right:1px solid #999; border-top:0; padding:5px\">\r\n                    <table width=\"100%\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\">\r\n                      <tbody>\r\n                        <tr>\r\n                          <td width=\"60%\" align=\"left\" valign=\"middle\">\r\n                            <p><strong>SUB TOTAL ({{item.moneda}})</strong><br>\r\n                              <strong *ngIf=\"item.condiciones\">UTILIDADES (5.0000%)<br></strong>\r\n                              <strong *ngIf=\"item.condiciones\">GASTOS GENERALES (4.0700%)<br></strong>\r\n                              <strong>VALOR DE VENTA ({{item.moneda}})</strong><br>\r\n                              <strong>IMPUESTOS (18.0000%)</strong><br>\r\n                              <strong>VALOR TOTAL ({{item.moneda}})</strong></p>\r\n                          </td>\r\n                          <td align=\"right\" valign=\"middle\" *ngIf=\"!item.condiciones\">\r\n                            <p align=\"right\">{{this.item.subtotal}}<br>{{this.item.valorventa}}<br>{{this.item.impuestos}}<br>{{this.item.valortotal}}</p>\r\n                          </td>\r\n                          <td align=\"right\" valign=\"middle\" *ngIf=\"item.condiciones\">\r\n                            <p align=\"right\">{{this.item.subtotal}}<br>{{this.item.utilidades}}<br>{{this.item.gastosgenerales}}<br>{{this.item.valorventa}}<br>{{this.item.impuestos}}<br>{{this.item.valortotal}}</p>\r\n                          </td>\r\n                        </tr>\r\n                      </tbody>\r\n                    </table>\r\n                  </td>\r\n                </tr>\r\n              </tbody>\r\n            </table>\r\n\r\n            <table width=\"900\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\" bgcolor=\"#fff\">\r\n              <tbody>\r\n                <tr>\r\n                  <td width=\"100%\" height=\"20\" align=\"center\" bgcolor=\"#fff\" style=\"border-left:1px solid #999; border-right:1px solid #999; border-top:1px solid #999; padding:5px\">\r\n                    <strong>CONDICIONES GENERALES DE LA ORDEN DE COMPRA</strong></td>\r\n                </tr>\r\n              </tbody>\r\n            </table>\r\n\r\n            <table width=\"900\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\" bgcolor=\"#fff\">\r\n              <tbody>\r\n                <tr>\r\n                  <td width=\"100%\" align=\"left\" bgcolor=\"#fff\" style=\"border-left:1px solid #999; border-right:1px solid #999; border-top:1px solid #999; border-bottom:1px solid #999; padding:5px; margin-bottom:20px\">\r\n                    <p><strong>1 DEFINICIONES</strong><br /> COMPRADOR: {{this.item.comprador}} , cuyos datos figuran en la\r\n                      cabecera de la Orden de Compra.<br /> PROVEEDOR: Empresa que, según sea el caso, suministra los bienes\r\n                      o realiza los servicios o trabajos objetos de la Orden<br /> de Compra.<br /> ORDEN DE COMPRA: Documento\r\n                      elaborado por el COMPRADOR (en adelante O/C) en el que se incluye todos los<br /> términos, condiciones,\r\n                      especificaciones técnicas, planos, etc. que es aplicable a los suministros o servicios solicitados\r\n                      por\r\n                      <br /> el COMPRADOR y que constituye el único, total y exclusivo acuerdo entre las partes (COMPRADOR\r\n                      - PROVEEDOR). Esta<br /> orden sustituye a todos los demás documentos cursados entre las partes y está\r\n                      expresamente condicionada a la<br /> aceptación por parte del PROVEEDOR de todas sus condiciones. Salvo\r\n                      exista un contrato.<br /> COMPROBANTE DE PAGO: Documento autorizado por la SUNAT para deducir costo\r\n                      o gasto.<br />\r\n                      <br />\r\n                      <strong>2 ACUSE DE RECIBO</strong><br /> En el plazo máximo de tres (03) días calendarios contados\r\n                      desde la fecha de entrega de la O/C al PROVEEDOR, éste<br /> deberá acusar el recibo de la misma, devolviendo\r\n                      una copia al COMPRADOR, en señal de su completa conformidad con<br /> los términos de la O/C. Si el\r\n                      acuse de recibo lleva consigo alguna modificación o reserva a las condiciones generales o<br /> particulares\r\n                      de la O/C, aquellas serán consideradas nulas si no han sido previamente aceptadas, en forma explícita\r\n                      y por<br /> escrito, por el COMPRADOR.<br />\r\n                      <br />\r\n                      <strong>3 PRECIOS Y PAGO</strong><br /> Los precios especificados en la O/C, son fijos y no revisables.\r\n                      El pago será efectuado de acuerdo a lo establecido en la<br /> O/C. Sin embargo, el pago será retenido\r\n                      o deducido parcialmente si el PROVEEDOR no está cumpliendo con las<br /> condiciones aplicables a la\r\n                      O/C.\r\n                      <br />\r\n                      <br />\r\n                      <strong>4 ENTREGA DE BIENES</strong><br /> 4.1 Todas las entregas se realizarán con el embalaje suficiente,\r\n                      en el lugar indicado en la O/C y en los plazos concertados.<br /> En caso de retrasos, el COMPRADOR\r\n                      se reserva el derecho a rechazar la entrega.<br /> 4.2 El COMPRADOR recibirá todos los bienes con carácter\r\n                      provisional. La aceptación o no de los mismos se efectuará una<br /> vez pasados los controles de cantidad\r\n                      y calidad.<br /> 4.3 Los bienes se entregarán agrupados por número de O/C, indicando referencia y descripción\r\n                      clara del ítem. No se<br /> mezclaran en un mismo bulto, bienes de distintas O/C.<br /> 4.4 Todos los\r\n                      bienes vendrán acompañadas de sus respectivas Guías de Remisión, en original (Destinatario) y copia<br\r\n                      /> (SUNAT).\r\n                      <br /> 4.5 Las Guías de Remisión indicarán el número de bultos, describirán los bienes con la misma\r\n                      denominación de la O/C y<br /> con las cantidades, referencias de ítem o plano. Cada Guía de Remisión\r\n                      corresponderá a una sola O/C cuyo número estará<br /> convenientemente indicado.<br />\r\n                      <br />\r\n                      <strong>5 CONDICIONES DE PAGO DE LOS COMPROBANTES DE    PAGO</strong><br /> 5.1 El plazo para el pago\r\n                      correrá a partir de la fecha de recepción de la misma por el COMPRADOR.<br /> 5.2 Los vencimientos\r\n                      serán los que figuren en las condiciones de pago indicadas en la O/C.<br /> 5.3 Para el recojo de cheques\r\n                      el PROVEEDOR debe presentar copia de DNI y el cargo del Comprobante de Pago.<br />\r\n                      <br />\r\n                      <strong>6. SEGURIDAD Y SALUD EN EL TRABAJO</strong><br /> 6.1 El PROVEEDOR declara conocer y se compromete\r\n                      a cumplir el contenido de los siguientes documentos:<br /> . Manual de Políticas: Estándares de trabajo\r\n                      de Contratistas<br /> . Las disposiciones legales en materia de seguridad y salud en el trabajo de\r\n                      acuerdo a la Ley 29783.<br /> . Mantener asegurados a sus trabajadores, dependientes y/o al personal\r\n                      de terceros que utilice para el desarrollo de<br /> sus actividades.<br /> . Las disposiciones legales\r\n                      en materia ambiental que regulan las actividades empresariales y de construcción.<br /> 6.2 El PROVEEDOR\r\n                      acredita contar con su propio Reglamento de Seguridad y Salud en el Trabajo, el cual se encuentra<br\r\n                      /> conforme a los lineamientos de Seguridad y Salud en el Trabajo del COMPRADOR.<br /> En caso de que\r\n                      exista discrepancia entre las normativas de Seguridad del PROVEEDOR y del COMPRADOR,<br /> prevalecerán\r\n                      las aplicadas por este último.<br />\r\n                      <br />\r\n                      <strong>7. SEGUROS</strong><br /> 7.1. El PROVEEDOR deberá contratar para todos sus trabajadores, un\r\n                      Seguro de Vida, conforme a lo establecido en el<br /> Decreto Legislativo Nº 688 o la norma que la\r\n                      sustituya, El PROVEEDOR deberá contratar el Seguro Obligatorio de<br /> Accidentes de Tránsito (SOAT)\r\n                      para uso propio para los vehículos de su propiedad, alquilados arrendados y/o de terceros,<br /> que\r\n                      sean utilizados durante las operaciones objeto del presente Subcontrato.<br /> 7.2. El PROVEEDOR, deberá\r\n                      contratar un Seguro Complementario de Trabajo de Riesgo, en los términos y condiciones<br /> establecidos\r\n                      en la Ley 26790, normas complementarias y conexas, cuya cobertura deberá incluir la prevención de riesgos<br\r\n                      /> de salud, así como la prevención de invalidez y sepelio por causa del desarrollo de trabajo de riesgo,\r\n                      el cual deberá estar<br /> vigente durante todo el tiempo que dure la ejecución de los servicios.<br\r\n                      />\r\n                      <br />\r\n                      <strong>8. RESPONSABILIDADES DEL PROVEEDOR</strong><br /> El PROVEEDOR asume cualquier responsabilidad\r\n                      por accidentes de trabajo, inclusive en los montos no cubiertos por los<br /> seguros contratados descritos\r\n                      en el numeral precedente, que le resulten imputables o a su personal, quedando EL<br /> COMPRADOR eximido\r\n                      de dicha responsabilidad.<br /> EL PROVEEDOR asume íntegramente la responsabilidad en caso que se causaren\r\n                      daños y perjuicios por la inejecución,<br /> total o parcial, de las obligaciones a su cargo de acuerdo\r\n                      al servicios descritos en el presente documento.<br />\r\n                      <br />\r\n                      <strong>9. PENALIDADES</strong><br /> En caso de retrasos, el COMPRADOR se reserva el derecho de aplicar\r\n                      una penalidad del 2% por semana de retraso o<br /> fracción, hasta un tope del 10% como máximo, penalidad\r\n                      que será aplicable sobre el valor total de la O/C incluido el I.G.V.<br />\r\n                      <br />\r\n                      <strong>10. PRELACIÓN DE DOCUMENTOS </strong><br> En caso de que exista un contrato que respalde la\r\n                      presente O/C prevalecerán las<br /> estipulaciones previstas en dicho documento.<br /> Fecha: 06.04.2017</p>\r\n                  </td>\r\n                </tr>\r\n              </tbody>\r\n            </table>\r\n\r\n            <table width=\"900\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\" bgcolor=\"#fff\">\r\n              <tbody>\r\n                <tr>\r\n                  <td width=\"100%\" align=\"center\" bgcolor=\"#fff\" style=\"border-left:1px solid #999; border-right:1px solid #999; border-top:0; border-bottom:1px solid #999; padding:5px; margin-bottom:20px\">\r\n                    <p>&nbsp;</p>\r\n                    <p>&nbsp;</p>\r\n                    <p>---------------------------------------------<br> PROVEEDOR\r\n                    </p>\r\n                  </td>\r\n                </tr>\r\n              </tbody>\r\n            </table>\r\n\r\n          </td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n    <style type=\"text/css\">\r\n      body {\r\n        font-family: Arial, Helvetica, sans-serif;\r\n        color: #000;\r\n        font-size: 12px;\r\n      }\r\n\r\n      img {\r\n        display: block;\r\n        padding: 0;\r\n        margin: 0;\r\n      }\r\n\r\n      a {\r\n        color: #06C;\r\n        font-size: 12px;\r\n      }\r\n\r\n      td {\r\n        font-family: Arial, Helvetica, sans-serif;\r\n        color: #000;\r\n        font-size: 12px;\r\n        background-color: #FFF\r\n      }\r\n\r\n      p {\r\n        margin: 0;\r\n        font-family: Arial, Helvetica, sans-serif;\r\n        font-size: 12px;\r\n      }\r\n\r\n      ul {\r\n        margin: 0;\r\n        padding-left: 30px;\r\n        font-family: Arial, Helvetica, sans-serif;\r\n        font-size: 12px;\r\n      }\r\n    </style>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/ordencompra/proveedor/formulario/ordencompraproveedorformulario.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrdenCompraProveedorFormularioComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_app_utils__ = __webpack_require__("../../../../../src/app/utils/app.utils.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_masterservice__ = __webpack_require__("../../../../../src/app/service/masterservice.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_model_ordencompra__ = __webpack_require__("../../../../../src/app/model/ordencompra.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__assets_js_plugins_jquery_PrintArea_js__ = __webpack_require__("../../../../../src/assets/js/plugins/jquery.PrintArea.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__assets_js_plugins_jquery_PrintArea_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__assets_js_plugins_jquery_PrintArea_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_app_service_ordencompraservice__ = __webpack_require__("../../../../../src/app/service/ordencompraservice.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var oOrdenCompraProveedorFormularioComponent, dtArticulos;
var OrdenCompraProveedorFormularioComponent = (function () {
    function OrdenCompraProveedorFormularioComponent(activatedRoute, router, _masterService, _dataService) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this._masterService = _masterService;
        this._dataService = _dataService;
        this.toggleButton = true;
        this.toggleButtonCP = true;
        this.id = "";
        this.util = new __WEBPACK_IMPORTED_MODULE_2__utils_app_utils__["a" /* AppUtils */](this.router, this._masterService);
    }
    OrdenCompraProveedorFormularioComponent.prototype.navigate = function (nav) {
        this.router.navigate(nav, { relativeTo: this.activatedRoute });
    };
    OrdenCompraProveedorFormularioComponent.prototype.RechazarOC = function (event) {
        if (oOrdenCompraProveedorFormularioComponent.toggleButtonCP) {
            swal({
                text: "Se rechazará la Orden de Compra. ¿Está seguro de rechazar la orden de compra?",
                type: "warning",
                showCancelButton: true,
                confirmButtonText: "Aceptar",
                cancelButtonText: "Cancelar",
                buttonsStyling: false,
                confirmButtonClass: "btn btn-default",
                cancelButtonClass: "btn btn-warning",
            }).then(function () {
                swal({
                    text: "Por favor indique los motivos de su rechazo en el campo: Comentario del Proveedor acerca del cambio de estado.",
                    type: 'warning',
                    buttonsStyling: false,
                    confirmButtonClass: "btn btn-warning",
                    confirmButtonText: "Aceptar",
                }).then(function () {
                    oOrdenCompraProveedorFormularioComponent.toggleButtonCP = false;
                    console.log($('#comentarioproveedor'));
                    $('#comentarioproveedor').focus();
                }, function (dismiss) {
                    oOrdenCompraProveedorFormularioComponent.toggleButtonCP = false;
                    $('#comentarioproveedor').focus();
                });
            }, function (dismiss) {
            });
        }
        else {
            /*oOrdenCompraProveedorFormularioComponent.item.estadoweb = "Rechazada";
            DataHardCode.update({
              nroordencompra: oOrdenCompraProveedorFormularioComponent.id,
              estado: oOrdenCompraProveedorFormularioComponent.item.estadoweb,
              comentarioproveedor: oOrdenCompraProveedorFormularioComponent.item.comentarioproveedor,
            })*/
            var _cambioEstado = void 0;
            _cambioEstado.estadoactual = this.item.estadocomprador;
            _cambioEstado.accion = "RECHAZAR";
            this._dataService
                .cambioEstado(this.item.idorgproveedora, _cambioEstado)
                .subscribe(function (p) {
                swal({
                    text: "Se rechazó la orden de compra.",
                    type: 'warning',
                    buttonsStyling: false,
                    confirmButtonClass: "btn btn-warning",
                    confirmButtonText: "Aceptar",
                }).then(function () {
                    var nav = ['/ordencompra/proveedor/buscar'];
                    oOrdenCompraProveedorFormularioComponent.navigate(nav);
                }, function (dismiss) {
                    var nav = ['/ordencompra/proveedor/buscar'];
                    oOrdenCompraProveedorFormularioComponent.navigate(nav);
                });
            }, function (e) { return console.log(e); }, function () { });
        }
        event.preventDefault();
    };
    OrdenCompraProveedorFormularioComponent.prototype.AprobarOC = function (event) {
        event.preventDefault();
        swal({
            text: "Se aprobará la Orden de Compra. ¿Está seguro de aprobar la orden de compra? ",
            type: "warning",
            showCancelButton: true,
            confirmButtonText: "Aceptar",
            cancelButtonText: "Cancelar",
            buttonsStyling: false,
            confirmButtonClass: "btn btn-default",
            cancelButtonClass: "btn btn-warning",
        }).then(function () {
            /*oOrdenCompraProveedorFormularioComponent.item.estadoweb = "Aceptada";
            DataHardCode.update({
              nroordencompra: oOrdenCompraProveedorFormularioComponent.id,
              estado: oOrdenCompraProveedorFormularioComponent.item.estadoweb,
            })*/
            var _cambioEstado;
            _cambioEstado.estadoactual = this.item.estadoweb;
            _cambioEstado.accion = "ACEPTAR";
            this._dataService
                .cambioEstado(this.item.idorgproveedora, _cambioEstado)
                .subscribe(function (p) {
                var nav = ['/ordencompra/proveedor/buscar'];
                oOrdenCompraProveedorFormularioComponent.navigate(nav);
            }, function (dismiss) {
                // dismiss can be 'cancel', 'overlay',
                // 'close', and 'timer'
            });
        }, function (e) { return console.log(e); }, function () { });
    };
    OrdenCompraProveedorFormularioComponent.prototype.print = function (event) {
        if (this.item.tipo == "Materiales") {
            $("div#print-section-material").printArea({ popTitle: 'Orden de Compra', mode: "iframe", popClose: false });
        }
        else
            $("div#print-section-servicio").printArea({ popTitle: 'Orden de Servicio', mode: "iframe", popClose: false });
    };
    OrdenCompraProveedorFormularioComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.baseurl = $("#baseurl").attr("href");
        this.activatedRoute.params.subscribe(function (params) {
            _this.id = params['id'];
        });
        /*
            if (this.id > 0) {
              this.toggleButton = true;
              this.toggleButtonCP = true;
        
            } else {
              this.toggleButton = false;
              this.toggleButtonCP = false;
            }*/
        if (this.id == "0") {
            this.toggleButton = true;
        }
        else {
            this.toggleButton = true;
        }
        this.item = new __WEBPACK_IMPORTED_MODULE_4_app_model_ordencompra__["a" /* OrdenCompra */]();
        /*
            this.item = {
              comprador: "GRUPO CENTENARIO S.A.",
              ruccomprador: "PE20600323980",
              tipo: "Compra",
              nroordencompra: this.id + "",
              proveedor: "SODIMAC PERU S.A.",
              rucproveedor: "PE20100016681",
              fecharegistro: "05-jul-2017",
              codigoproveedor: '110857210',
              flagcambio: 'SI',
              version: '1',
              moneda: 'USD', //'0000008'
        
              atenciona: 'Sr. ANTONIO TAFUR \n01-257364 / 94583901 \natafur@prueba.com',
              contactarcon: "JEANETTE ELSA COLLANTES SANTOS\n01-4583654\ncompras1@centenario.com.pe",
              preparadapor: 'Sr. Gonzalo Moscol',
        
              estadoweb: DataHardCode.get(this.id).estado,
              facturara: 'Centenario Retail S.A.C.\n20600323980\nAv. Victor Andrés Belaunde 147 . Vía\nPrincipal 102 . Edificio: Real Cuatro - Piso: 1, SAN ISIDRO - LIMA ',
              enviarfacturaa: 'Lunes, Miércoles y jueves de 9 am. a 1 pm.\nAv.Victor Andrés Belaunde 147.Edif. Real\n4,Sótano 1 - San Isidro\n01-5236589',
        
              formapago: 'Dentro de 45 días',
              //fechainiciocontrato: '05-07-2017',
              //fechafincontrato: '15-07-2017',
              grupocompra: 'F56 - IC\nMkt. C.C. Minka',
              productos: [
                {
                  posicion: '00010',
                  micodigo: '00010-4510648635',
                  nombre: 'EQUIPO DE SONIDO (RADIO GRABADOR)<br/>EQUIPO DE SONIDO (RADIO GRABADOR)<br/><b>Centro:</b> 6835 - Av. Argentina 3093 CALLAO<br/><b>Solicitud de pedido</b>: 0010534244	',
                  cantidad: '1.0000',
                  unidad: 'UND',
                  preciounitario: '285.0000',
                  total: '285.0000',
                  igv: '285.0000',
                  fechaentrega: '20-07-2017',
                },
        
              ],
        
        
              // autorizadopor: 'Aprobado Nivel 1: GMENDEZG\nAprobado Nivel 2: CVAZQUEG\nAprobado Nivel 3: CCHAVEZ\nAprobado Nivel 4: VPORTILLO',
              autorizadopor: '\nAprobado Nivel 1: GMENDEZG \n\nAprobado Nivel 2: JPEREZL\n\nAprobado Nivel 3: AROLDANC',
              comentarioproveedor: DataHardCode.get(this.id).comentarioproveedor,
              subtotal: '285.0000',
              utilidades: '0.0000',
              valorventa: '285.0000',
              gastosgenerales: '0.0000',
              impuestos: '51.3000',
              valortotal: '336.3000',
        
              condiciones: DataHardCode.get(this.id).condiciones,
            };
        
            if (this.item.condiciones) {
              this.item.utilidades = '14.2500';
              this.item.gastosgenerales = '11.5995';
        
              this.item.valorventa = '310.8495';
              this.item.impuestos = '55.9529';
              this.item.valortotal = '366.8024';
            }
            if (this.id != 4590015491 && this.id != 4531046368) {
              this.item.nroordencompra = this.id + "";
              this.item.proveedor = "EMPRESA EDITORA EL COMERCIO SA";
              this.item.rucproveedor = "PE20143229816";
              this.item.codigoproveedor = "110823232";
              this.item.moneda = 'PEN';
              this.item.tipo = "Servicio";
              this.item.productos = [
                {
                  posicion: '10',
                  micodigo: '',
                  nombre: 'SRV SUSCRIPCION DIARIOS<br/>SRV SUSCRIPCION DIARIOS',
                  cantidad: '',
                  unidad: '',
                  preciounitario: '',
                  total: '330.5100',
                  igv: '285.0000',
                  fechaentrega: '',
                },
                {
                  posicion: '10.10',
                  micodigo: '',
                  nombre: 'SRV SUSCRIPCION DIARIOS<br/><b>Centro:</b> 6835 - Av. Argentina 3093 CALLAO<br/><b>Solicitud de pedido:</b> 0010534244',
                  cantidad: '1.0000 ',
                  unidad: 'SRV',
                  preciounitario: '330.5100',
                  total: '330.5100',
                  igv: '285.0000',
                  fechaentrega: '20-07-2017',
                },
        
              ];
        
        
              this.item.subtotal = '330.5100';
              this.item.utilidades = '0.0000';
              this.item.valorventa = '330.5100';
              this.item.gastosgenerales = '0.0000';
              this.item.impuestos = '59.4918';
              this.item.valortotal = '390.0018';
        
              if (this.item.condiciones) {
                this.item.utilidades = '16.5255';
                this.item.gastosgenerales = '13.4518';
        
                this.item.valorventa = '360.4873';
                this.item.impuestos = '64.8878';
                this.item.valortotal = '425.3751';
              }
            }
        */
        oOrdenCompraProveedorFormularioComponent = this;
        this.util.listPrioridades(function (data) {
            oOrdenCompraProveedorFormularioComponent.listPrioridadCombo = data;
        });
        this.util.listMonedas(function (data) {
            oOrdenCompraProveedorFormularioComponent.listMonedaCombo = data;
        });
        this.util.listUnidadMedida(function (data) {
            oOrdenCompraProveedorFormularioComponent.listUnidadCombo = data;
        });
    };
    OrdenCompraProveedorFormularioComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        DatatableFunctions.ModalSettings();
        this.baseurl = $("#baseurl").attr("href");
        this._dataService
            .obtener(this.id)
            .subscribe(function (p) {
            _this.item = p;
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
                oOrdenCompraProveedorFormularioComponent.DatatableConfig();
            }, 100);
        }, function (e) { return console.log(e); }, function () { });
        /*
            if (this.item.estadoweb === "Activa") {
              swal({
                text: "La Orden de Compra ha sido Visualizada. Se informará al Comprador de la Visualización. Si dentro de un periodo de 24 horas la Orden de Compra no ha sido aceptada o rechazada, esta pasará a ser aceptada de manera automática. ",
                type: 'warning',
                buttonsStyling: false,
                confirmButtonClass: "btn btn-warning",
                confirmButtonText: "Aceptar",
              }).then(function () {
                oOrdenCompraProveedorFormularioComponent.item.estadoweb = "Visualizada";
                DataHardCode.update({
                  nroordencompra: oOrdenCompraProveedorFormularioComponent.id,
                  estado: oOrdenCompraProveedorFormularioComponent.item.estadoweb,
                })
              }, function (dismiss) {
                // dismiss can be 'cancel', 'overlay',
                // 'close', and 'timer'
        
              });
        
            }*/
    };
    OrdenCompraProveedorFormularioComponent.prototype.DatatableConfig = function () {
        dtArticulos = $('#dtArticulos').DataTable({
            /* ajax: {
               "url": "https://jsonplaceholder.typicode.com/posts",
               "dataSrc": ""
             },*/
            "ajax": function (data, callback, settings) {
                var result = {
                    data: oOrdenCompraProveedorFormularioComponent.item.productos
                };
                callback(result);
            },
            "createdRow": function (row, data, index) {
                if (data.posicion === "10" || data.posicion === "20") {
                    $(row).addClass('highlight');
                    //$('td', row).eq(1).addClass('parent');
                }
                else {
                    //$(row).addClass('child');
                    $('td', row).eq(0).addClass('text-center');
                }
            },
            columns: [
                { data: 'posicion' },
                { data: 'nombre', "className": "text-left" },
                { data: 'cantidad' },
                { data: 'unidad' },
                { data: 'preciounitario' },
                { data: 'total' },
                { data: 'fechaentrega' }
            ],
            columnDefs: [
                { "className": "text-center", "targets": [0, 1, 2, 3, 4, 5, 6] },
            ]
        });
    };
    return OrdenCompraProveedorFormularioComponent;
}());
OrdenCompraProveedorFormularioComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'ordencompraproveedorformulario-cmp',
        template: __webpack_require__("../../../../../src/app/ordencompra/proveedor/formulario/ordencompraproveedorformulario.component.html"),
        providers: [__WEBPACK_IMPORTED_MODULE_6_app_service_ordencompraservice__["a" /* OrdenCompraService */], __WEBPACK_IMPORTED_MODULE_3__service_masterservice__["a" /* MasterService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__service_masterservice__["a" /* MasterService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__service_masterservice__["a" /* MasterService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_6_app_service_ordencompraservice__["a" /* OrdenCompraService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6_app_service_ordencompraservice__["a" /* OrdenCompraService */]) === "function" && _d || Object])
], OrdenCompraProveedorFormularioComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=ordencompraproveedorformulario.component.js.map

/***/ })

});
//# sourceMappingURL=ordencompra.module.chunk.js.map