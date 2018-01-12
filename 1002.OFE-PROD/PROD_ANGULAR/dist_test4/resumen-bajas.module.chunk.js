webpackJsonp(["resumen-bajas.module"],{

/***/ "../../../../../src/app/facturacion-electronica/resumen-bajas/models/bajas_filtro.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Bajasfiltro; });
var Bajasfiltro = (function () {
    function Bajasfiltro() {
    }
    return Bajasfiltro;
}());

//# sourceMappingURL=bajas_filtro.js.map

/***/ }),

/***/ "../../../../../src/app/facturacion-electronica/resumen-bajas/resumen-bajas-crear/resumen-bajas-crear.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"row col-md-12\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header card-header-text\" data-background-color=\"blue\">\r\n          <h4 class=\"card-title\">Crear Anulacion</h4>\r\n        </div>\r\n        <div class=\"card-content\">\r\n          <form [formGroup]=\"productFormGroup\" (ngSubmit)=\"onSubmit()\">\r\n            <div class=\"row\">\r\n              <div class=\"col-md-3\">\r\n                <div class=\"form-group label-floating\">\r\n                  <label class=\"control-label\">Tipo de Documento <span class=\"star\">*</span> </label>\r\n                    <select name=\"cmbtipodoc\" (change)=\"cambiar_datable()\" formControlName=\"cmbtipodoc\" class=\"form-control\">\r\n                     <option  *ngFor=\"let tipoDocumento of tipoDocumento\"[value]=\"tipoDocumento.id\"> {{tipoDocumento.nombre}} </option>\r\n                    </select>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-md-3\">\r\n                <div class=\"form-group label-floating\">\r\n                  <label class=\"control-label\">Serie</label>\r\n                  <select name=\"cmbserie\" formControlName=\"cmbserie\" class=\"form-control\">\r\n                    <option *ngFor=\"let serie of serie\"[value]=\"serie.id\"> {{serie.serie}} </option>\r\n                  </select>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-md-3\">\r\n                <div class=\"form-group label-floating\">\r\n                  <label class=\"control-label\">Correlativo Inicial </label>\r\n                  <input id=\"correlativoinicio\" formControlName=\"correlativoinicio\" type=\"number\" class=\"form-control\">\r\n                </div>\r\n              </div>\r\n              <div class=\"col-md-3\">\r\n                <div class=\"form-group label-floating\">\r\n                  <label class=\"control-label\">Correlativo Final </label>\r\n                  <input id=\"correlativofinal\" formControlName=\"correlativofinal\" type=\"number\" class=\"form-control\">\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"row\">\r\n              <div class=\"col-md-3\">\r\n                <div class=\"form-group label-floating\">\r\n                  <label class=\"control-label\">Fecha de Emisión Del </label>\r\n                  <input id=\"fechaemisioninicio\" formControlName=\"fechaemisioninicio\" type=\"text\" class=\"form-control\"  name=\"fechaemisiondel\" datepicker />\r\n                </div>\r\n              </div>\r\n              <div class=\"col-md-3\">\r\n                <div class=\"form-group label-floating\">\r\n                  <label class=\"control-label\">al </label>\r\n                 <input  id=\"fechaemisionfin\" formControlName=\"fechaemisionfin\" type=\"text\" class=\"form-control\"  name=\"fechaemisional\" datepicker />\r\n                </div>\r\n              </div>\r\n              <div class=\"col-md-1\" align=\"right\">\r\n                <p>&nbsp;</p>\r\n              </div>\r\n              <div class=\"col-md-5\" align=\"right\">\r\n                <button type=\"submit\" class=\"btn btn-info\" (click)=\"filtro($event)\">Filtro</button>\r\n                <button type=\"button\" class=\"btn btn-info\"  (click)=\"limpiar()\">Limpiar</button>\r\n              </div>\r\n            </div>\r\n          </form>\r\n\r\n          <div class=\"card\">\r\n            <div class=\"card-header card-header-icon\" data-background-color=\"blue\">\r\n              <i class=\"material-icons\">list</i>\r\n            </div>\r\n\r\n            <div class=\"row\"><h3>Comprobantes</h3></div>\r\n            <div class=\"row\"><p>&nbsp;</p></div>\r\n            <nav class=\"navbar navbar-info\" role=\"navigation\"></nav>\r\n\r\n\r\n            <div class=\"row \">\r\n              <div class=\"col col-md-12\"  *ngIf=\"!esguia\">\r\n                <div class=\"material-datatables table-responsive\">\r\n                  <table id=\"dtresumencomprobantes\" class=\"table table-striped table-no-bordered table-hover\" cellspacing=\"0\"\r\n                         width=\"100%\" style=\"width:100%\">\r\n                    <thead>\r\n                    <tr>\r\n                      <th class=\"disabled-sorting text-right\">\r\n                        <div class=\"checkbox text-right\">\r\n                          <label><input type=\"checkbox\" name=\"optionsCheckboxes\" class=\"checkall\" ></label>\r\n                        </div>\r\n                      </th>\r\n                      <th>Nº</th>\r\n                      <th>Serie</th>\r\n                      <th>Correlativo</th>\r\n                      <th>Fecha de Emision</th>\r\n                      <th>Total Importe</th>\r\n                    </tr>\r\n                    </thead>\r\n                  </table>\r\n                </div>\r\n              </div>\r\n              <div class=\"col col-md-12\" *ngIf=\"esguia\">\r\n                <div class=\"material-datatables table-responsive\">\r\n                  <table id=\"dtresumencomprobantesguia\" class=\"table table-striped table-no-bordered table-hover\" cellspacing=\"0\"\r\n                         width=\"100%\" style=\"width:100%\">\r\n                    <thead>\r\n                    <tr>\r\n                      <th class=\"disabled-sorting text-right\">\r\n                        <div class=\"checkbox text-right\">\r\n                          <label><input type=\"checkbox\" name=\"optionsCheckboxes\" class=\"checkall\" ></label>\r\n                        </div>\r\n                      </th>\r\n                      <th>Nº</th>\r\n                      <th>Serie</th>\r\n                      <th>Correlativo</th>\r\n                      <th>Fecha de Emision</th>\r\n                    </tr>\r\n                    </thead>\r\n                  </table>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"row\"> <p> &nbsp;</p></div>\r\n          <div class=\"row\">\r\n            <div class=\"col-md-12\">\r\n              <form  [formGroup]=\"productFormGroup\">\r\n              <div class=\"label-floating\">\r\n                <label class=\"control-label\">Motivo <span class=\"star\">*</span> </label>\r\n                <input id=\"motivo\" formControlName=\"motivo\" class=\"form-control\" type=\"text\">\r\n              </div>\r\n              </form>\r\n            </div>\r\n          </div>\r\n          <div class=\"row\"> <p> &nbsp;</p></div>\r\n          <div class=\"row\">\r\n            <div class=\"col-md-12\" align=\"right\">\r\n              <button class=\"btn btn-info\" (click)=\"showSwal()\">\r\n                Crear Comunicacion de Baja\r\n              </button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/facturacion-electronica/resumen-bajas/resumen-bajas-crear/resumen-bajas-crear.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResumenBajasCrearComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_resumen_bajas_service__ = __webpack_require__("../../../../../src/app/facturacion-electronica/resumen-bajas/services/resumen-bajas.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_bajas_filtro__ = __webpack_require__("../../../../../src/app/facturacion-electronica/resumen-bajas/models/bajas_filtro.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var datatable;
var ResumenBajasCrearComponent = (function () {
    function ResumenBajasCrearComponent(anulacionService, route, router) {
        this.anulacionService = anulacionService;
        this.route = route;
        this.router = router;
        this.saveButtonName = 'Guardar';
        this.editMode = false;
        this.data = [
            {
                'id': 1,
                'serie': 'S001',
                'correlativo': '10000001',
                'fecha': '21-10-2017',
                'total': '10.20',
            },
            {
                'id': 2,
                'serie': 'S002',
                'correlativo': '10000002',
                'fecha': '23-10-2017',
                'total': '2323.45',
            }
        ];
        this.data1 = [
            {
                'id': 1,
                'serie': 'S001',
                'correlativo': '10000001',
                'fecha': '21-10-2017',
            },
            {
                'id': 2,
                'serie': 'S002',
                'correlativo': '10000002',
                'fecha': '23-10-2017',
            }
        ];
        this.filtroBajas = new __WEBPACK_IMPORTED_MODULE_4__models_bajas_filtro__["a" /* Bajasfiltro */]();
    }
    ResumenBajasCrearComponent.prototype.showSwal = function () {
        swal({
            title: '¿Está Seguro?',
            html: '<div class="text-center"> Desea dar de baja a el/los comprobante(s) </div>',
            padding: '20',
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: 'SI',
            cancelButtonText: 'NO',
            confirmButtonClass: 'btn btn-success',
            cancelButtonClass: 'btn btn-danger',
            buttonsStyling: false
        }).then(function () {
            swal({
                title: 'Acción Existosa',
                html: '<div class="text-center"> El/los comprobante(s) iniciarion proceso de baja. </div>',
                type: 'success',
                confirmButtonClass: 'btn btn-success',
                buttonsStyling: false
            });
        });
    };
    ResumenBajasCrearComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.esguia = 0;
        cargarDataTable(this.data);
        this.route.params
            .subscribe(function (params) {
            _this.id = +params['id'];
            _this.editMode = params['id'] != null;
            if (_this.editMode)
                _this.saveButtonName = 'Editar';
            _this.subscriptionTipoDocumentos = _this.anulacionService.tipoDocumentoChanged
                .subscribe(function (tipos) {
                _this.tipoDocumento = tipos;
            });
            _this.subscriptionSeries = _this.anulacionService.serieChanged
                .subscribe(function (tipos) {
                _this.serie = tipos;
            });
            _this.initForm();
        });
    };
    ResumenBajasCrearComponent.prototype.ngOnDestroy = function () {
        this.subscriptionTipoDocumentos.unsubscribe();
        this.subscriptionSeries.unsubscribe();
    };
    ResumenBajasCrearComponent.prototype.initForm = function () {
        this.productFormGroup = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormGroup */]({
            'cmbtipodoc': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](),
            'cmbserie': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](),
            'correlativoinicio': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](),
            'correlativofinal': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](),
            'fechaemisioninicio': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](),
            'fechaemisionfin': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](),
            'motivo': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](),
        });
    };
    ResumenBajasCrearComponent.prototype.cambiar_datable = function () {
        if (this.productFormGroup.get('cmbtipodoc').value == 7 || this.productFormGroup.get('cmbtipodoc').value == 6) {
            cargarDataTableGuia(this.data1);
            this.esguia = 1;
        }
        else {
            this.esguia = 0;
            cargarDataTable(this.data);
        }
    };
    ResumenBajasCrearComponent.prototype.limpiar = function () {
        this.productFormGroup.reset();
        setTimeout(function () {
            $('input').each(function () {
                $(this.parentElement).addClass('is-empty');
            });
            $('select').each(function () {
                $(this.parentElement).addClass('is-empty');
            });
        }, 200);
    };
    ResumenBajasCrearComponent.prototype.filtro = function ($event) {
        this.fillProducto();
    };
    ResumenBajasCrearComponent.prototype.onSubmit = function () {
        if (this.editMode) {
            this.fillProducto();
            // this.anulacionService.update(this.producto);
        }
        else {
            this.fillProducto();
            // this.anulacionService.add(this.producto);
            this.productFormGroup.reset();
        }
        this.onCancel();
    };
    ResumenBajasCrearComponent.prototype.fillProducto = function () {
        var _this = this;
        this.filtroBajas.tipodocumento = this.tipoDocumento[this.tipoDocumento.findIndex(function (element) { return element.id === _this.productFormGroup.get('cmbtipodoc').value; })];
        this.filtroBajas.serie = this.serie[this.serie.findIndex(function (element) { return element.id === _this.productFormGroup.get('cmbserie').value; })];
        this.filtroBajas.correlativoini = this.productFormGroup.get('correlativoinicio').value;
        this.filtroBajas.correlativofin = this.productFormGroup.get('correlativofinal').value;
        this.filtroBajas.fechaini = this.productFormGroup.get('fechaemisioninicio').value;
        this.filtroBajas.fechafin = this.productFormGroup.get('fechaemisionfin').value;
    };
    ResumenBajasCrearComponent.prototype.onCancel = function () {
        if (this.editMode)
            this.router.navigate(['../../consultar'], { relativeTo: this.route, skipLocationChange: true });
        else
            this.router.navigate(['../consultar'], { relativeTo: this.route });
    };
    return ResumenBajasCrearComponent;
}());
ResumenBajasCrearComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-resumen-bajas-crear',
        template: __webpack_require__("../../../../../src/app/facturacion-electronica/resumen-bajas/resumen-bajas-crear/resumen-bajas-crear.component.html"),
        styles: [__webpack_require__("../../../../../src/app/facturacion-electronica/resumen-bajas/resumen-bajas-crear/resumen-bajas-crear.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_resumen_bajas_service__["a" /* ResumenBajasService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_resumen_bajas_service__["a" /* ResumenBajasService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */]) === "function" && _c || Object])
], ResumenBajasCrearComponent);

function cargarDataTable(data) {
    datatable = $('#dtresumencomprobantes').DataTable({
        searching: false,
        columns: [
            { data: '0', name: '0' },
            { data: 'id', name: 'id' },
            { data: 'serie', name: 'serie' },
            { data: 'correlativo', name: 'correlativo' },
            { data: 'fecha', name: 'fecha' },
            { data: 'total', name: 'total' },
        ],
        columnDefs: [
            { 'className': 'text-center', 'targets': [1, 2, 3, 4] },
            {
                render: function (type, row) {
                    return '<div class="text-right" height="100%">' +
                        '<div class="checkbox text-right">' +
                        '<label><input type="checkbox" name="optionsCheckboxes"></label>' +
                        '</div>' +
                        '</div>';
                },
                targets: 0,
                orderable: false
            },
        ],
        data: data
    });
}
function cargarDataTableGuia(data) {
    datatable = $('#dtresumencomprobantesguia').DataTable({
        searching: false,
        columns: [
            { data: '0', name: '0' },
            { data: 'id', name: 'id' },
            { data: 'serie', name: 'serie' },
            { data: 'correlativo', name: 'correlativo' },
            { data: 'fecha', name: 'fecha' },
        ],
        columnDefs: [
            { 'className': 'text-center', 'targets': [1, 2, 3] },
            {
                render: function (type, row) {
                    return '<div class="text-right" height="100%">' +
                        '<div class="checkbox text-right">' +
                        '<label><input type="checkbox" name="optionsCheckboxes"></label>' +
                        '</div>' +
                        '</div>';
                },
                targets: 0,
                orderable: false
            },
        ],
        data: data
    });
}
var _a, _b, _c;
//# sourceMappingURL=resumen-bajas-crear.component.js.map

/***/ }),

/***/ "../../../../../src/app/facturacion-electronica/resumen-bajas/resumen-bajas-crear/resumen-bajas-crear.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "input.ng-invalid.ng-touched,\r\nmat-select.ng-invalid.ng-touched{\r\n  border-bottom: 1px solid red;\r\n}\r\nmat-select{\r\n  border-bottom: 1px solid #AAAAAA;\r\n}\r\ndiv.row{\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/facturacion-electronica/resumen-bajas/resumen-bajas-listar/resumen-bajas-listar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"row col-md-12\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header card-header-text\" data-background-color=\"blue\">\r\n          <h4 class=\"card-title\">Consultar Resumen de Bajas</h4>\r\n        </div>\r\n        <div class=\"card-content\">\r\n          <form [formGroup]=\"productFormGroup\" (ngSubmit)=\"onSubmit()\">\r\n            <div class=\"row\">\r\n              <div class=\"col-md-4\">\r\n                <div class=\"form-group label-floating\">\r\n                  <label class=\"control-label\">Tipo de Documento <span class=\"star\">*</span></label>\r\n                  <select name=\"cmbtipodoc\" formControlName=\"cmbtipodoc\" class=\"form-control\">\r\n                    <option  *ngFor=\"let tipoDocumento of tipoDocumento\"[value]=\"tipoDocumento.id\"> {{tipoDocumento.nombre}} </option>\r\n                  </select>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-md-4\">\r\n                <div class=\"form-group label-floating\">\r\n                  <label class=\"control-label\">Estado</label>\r\n                  <select name=\"cmbserie\" formControlName=\"cmbserie\" class=\"form-control\">\r\n                    <option *ngFor=\"let serie of serie\"[value]=\"serie.id\"> {{serie.serie}} </option>\r\n                  </select>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-md-4\" align=\"right\">\r\n                <div class=\"form-group label-floating\">\r\n                  <label class=\"control-label\">Ticket </label>\r\n                  <input id=\"ticket\" formControlName=\"ticket\" type=\"number\" class=\"form-control\">\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"row\">\r\n              <div class=\"col-md-4\">\r\n                <div class=\"form-group label-floating\">\r\n                  <label class=\"control-label\">Fecha Emision Del </label>\r\n                  <input type=\"text\" class=\"form-control\"  name=\"fechaemisiondel\" datepicker />\r\n                </div>\r\n              </div>\r\n              <div class=\"col-md-4\">\r\n                <div class=\"form-group label-floating\">\r\n                  <label class=\"control-label\">Al</label>\r\n                  <input type=\"text\" class=\"form-control\"  name=\"fechaemisional\" datepicker />\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"row\">\r\n              <div class=\"col-md-4\" align=\"right\">\r\n                <div class=\"form-group label-floating\">\r\n                  <label class=\"control-label\">Fecha Baja Del </label>\r\n                  <input type=\"text\" class=\"form-control\"  name=\"fechaemisional\" datepicker />\r\n                </div>\r\n              </div>\r\n              <div class=\"col-md-4\" align=\"right\">\r\n                <div class=\"form-group label-floating\">\r\n                  <label class=\"control-label\">Al</label>\r\n                  <input type=\"text\" class=\"form-control\"  name=\"fechaemisional\" datepicker />\r\n                </div>\r\n              </div>\r\n\r\n              <!--<div class=\"col-md-offset-9\" align=\"right\">\r\n                <button type=\"submit\" class=\"btn btn-info\" >Filtro</button>\r\n                <button type=\"submit\" class=\"btn btn-info\"  (click)=\"limpiar($event)\"  >Limpiar</button>\r\n              </div>-->\r\n            </div>\r\n          </form>\r\n          <div class=\"row\"><p>&nbsp;</p></div>\r\n          <div class=\"card\">\r\n            <div class=\"card-header card-header-icon\" data-background-color=\"blue\">\r\n              <i class=\"material-icons\">list</i>\r\n            </div>\r\n\r\n            <div class=\"row\"><h3>Resumen de Bajas</h3></div>\r\n            <div class=\"row\"><p>&nbsp;</p></div>\r\n            <nav class=\"navbar navbar-info\" role=\"navigation\"></nav>\r\n\r\n\r\n            <div class=\"row \">\r\n              <div class=\"col col-md-12\">\r\n                <div class=\"material-datatables table-responsive\">\r\n                  <table id=\"dtresumencomprobantes\" class=\"table table-striped table-no-bordered table-hover\" cellspacing=\"0\"\r\n                         width=\"100%\" style=\"width:100%\">\r\n                    <thead>\r\n                    <tr>\r\n                      <th>Nº</th>\r\n                      <th>Fecha de Baja</th>\r\n                      <th>Fecha del Documento</th>\r\n                      <th>Documento</th>\r\n                      <th>Motivo</th>\r\n                      <th>Ticket</th>\r\n                      <th>PDF</th>\r\n                      <th>XML</th>\r\n                      <th>CDR</th>\r\n                      <th>Estado</th>\r\n                    </tr>\r\n                    </thead>\r\n                  </table>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/facturacion-electronica/resumen-bajas/resumen-bajas-listar/resumen-bajas-listar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResumenBajasListarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_resumen_bajas_service__ = __webpack_require__("../../../../../src/app/facturacion-electronica/resumen-bajas/services/resumen-bajas.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_bajas_filtro__ = __webpack_require__("../../../../../src/app/facturacion-electronica/resumen-bajas/models/bajas_filtro.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
///<reference path="../../../../../node_modules/rxjs/Subscription.d.ts"/>





var datatable;
var ResumenBajasListarComponent = (function () {
    function ResumenBajasListarComponent(anulacionService, route, router) {
        this.anulacionService = anulacionService;
        this.route = route;
        this.router = router;
        this.saveButtonName = 'Guardar';
        this.editMode = false;
        this.data = [
            {
                'id': 1,
                'fechabaja': '21-10-2017',
                'fechadocumento': '21-10-2017',
                'documento': 'BOLETA',
                'motivo': 'El cliente pidio devolucion',
                'ticket': '10.20',
                'PDF': 'Descargar',
                'XML': 'Descargar',
                'CDR': 'Descargar',
                'estado': 'ACEPTADO',
            },
            {
                'id': 2,
                'fechabaja': '21-10-2017',
                'fechadocumento': '21-10-2017',
                'documento': 'BOLETA',
                'motivo': 'El cliente no le gusto pe',
                'ticket': '10.20',
                'PDF': 'Descargar',
                'XML': 'Descargar',
                'CDR': 'Descargar',
                'estado': 'ACEPTADO',
            }
        ];
        this.filtroBajas = new __WEBPACK_IMPORTED_MODULE_4__models_bajas_filtro__["a" /* Bajasfiltro */]();
    }
    ResumenBajasListarComponent.prototype.ngOnInit = function () {
        var _this = this;
        cargarDataTable(this.data);
        this.route.params
            .subscribe(function (params) {
            _this.id = +params['id'];
            _this.editMode = params['id'] != null;
            if (_this.editMode)
                _this.saveButtonName = 'Editar';
            _this.subscriptionTipoDocumentos = _this.anulacionService.tipoDocumentoChanged
                .subscribe(function (tipos) {
                _this.tipoDocumento = tipos;
            });
            _this.subscriptionSeries = _this.anulacionService.serieChanged
                .subscribe(function (tipos) {
                _this.serie = tipos;
            });
            _this.initForm();
        });
    };
    ResumenBajasListarComponent.prototype.ngOnDestroy = function () {
        this.subscriptionTipoDocumentos.unsubscribe();
        this.subscriptionSeries.unsubscribe();
        this.subscriptionAnulacion.unsubscribe();
        this.subscriptionComprobantes.unsubscribe();
    };
    ResumenBajasListarComponent.prototype.initForm = function () {
        this.productFormGroup = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormGroup */]({
            'cmbtipodoc': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](),
            'cmbserie': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](),
            'correlativoinicio': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](),
            'correlativofinal': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](),
            'fechaemisioninicio': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](),
            'fechaemisionfin': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](),
            'fechabajaini': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](),
            'fechabajafin': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](),
            'motivo': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](),
            'ticket': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](),
        });
    };
    ResumenBajasListarComponent.prototype.limpiar = function ($event) {
        this.productFormGroup.reset();
    };
    ResumenBajasListarComponent.prototype.filtro = function ($event) {
        this.fillProducto();
    };
    ResumenBajasListarComponent.prototype.onSubmit = function () {
        if (this.editMode) {
            this.fillProducto();
        }
        else {
            this.fillProducto();
            this.productFormGroup.reset();
        }
        this.onCancel();
    };
    ResumenBajasListarComponent.prototype.fillProducto = function () {
        var _this = this;
        this.filtroBajas.tipodocumento = this.tipoDocumento[this.tipoDocumento.findIndex(function (element) { return element.id === _this.productFormGroup.get('cmbtipodoc').value; })];
        this.filtroBajas.serie = this.serie[this.serie.findIndex(function (element) { return element.id === _this.productFormGroup.get('cmbserie').value; })];
        this.filtroBajas.correlativoini = this.productFormGroup.get('correlativoinicio').value;
        this.filtroBajas.correlativofin = this.productFormGroup.get('correlativofinal').value;
        this.filtroBajas.fechaini = this.productFormGroup.get('fechaemisiondel').value;
        this.filtroBajas.fechafin = this.productFormGroup.get('fechaemisional').value;
    };
    ResumenBajasListarComponent.prototype.onCancel = function () {
        if (this.editMode)
            this.router.navigate(['../../consultar'], { relativeTo: this.route, skipLocationChange: true });
        else
            this.router.navigate(['../consultar'], { relativeTo: this.route });
    };
    return ResumenBajasListarComponent;
}());
ResumenBajasListarComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-resumen-bajas-crear',
        template: __webpack_require__("../../../../../src/app/facturacion-electronica/resumen-bajas/resumen-bajas-listar/resumen-bajas-listar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/facturacion-electronica/resumen-bajas/resumen-bajas-listar/resumen-bajas-listar.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_resumen_bajas_service__["a" /* ResumenBajasService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_resumen_bajas_service__["a" /* ResumenBajasService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */]) === "function" && _c || Object])
], ResumenBajasListarComponent);

//<i class="material-icons">list</i>
function cargarDataTable(data) {
    datatable = $('#dtresumencomprobantes').DataTable({
        searching: false,
        columns: [
            { data: 'id', name: 'id' },
            { data: 'fechabaja', name: 'fechabaja' },
            { data: 'fechadocumento', name: 'fechadocumento' },
            { data: 'documento', name: 'documento' },
            { data: 'motivo', name: 'motivo' },
            { data: 'ticket', name: 'ticket' },
            { data: 'PDF', name: 'PDF' },
            { data: 'XML', name: 'XML' },
            { data: 'CDR', name: 'CDR' },
            { data: 'estado', name: 'estado' },
        ],
        columnDefs: [
            { 'className': 'text-center', 'targets': [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] },
            {
                render: function (type, row) {
                    return '<div class="text-right" height="100%">' +
                        '<button class="btn btn-simple btn-info btn-icon" rel="tooltip" data-placement="left"><i class="material-icons color">file_download</i></button>' +
                        '</div>';
                },
                targets: 6,
                orderable: false
            },
            {
                render: function (type, row) {
                    return '<div class="text-right" height="100%">' +
                        '<button class="btn btn-simple btn-info btn-icon" rel="tooltip" data-placement="left"><i class="material-icons color">file_download</i></button>' +
                        '</div>';
                },
                targets: 7,
                orderable: false
            },
            {
                render: function (type, row) {
                    return '<div class="text-right" height="100%">' +
                        '<button class="btn btn-simple btn-info btn-icon" rel="tooltip" data-placement="left"><i class="material-icons color">file_download</i></button>' +
                        '</div>';
                },
                targets: 8,
                orderable: false
            },
        ],
        data: data
    });
}
var _a, _b, _c;
//# sourceMappingURL=resumen-bajas-listar.component.js.map

/***/ }),

/***/ "../../../../../src/app/facturacion-electronica/resumen-bajas/resumen-bajas-listar/resumen-bajas-listar.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".form-group{\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n}\r\n.btn-small{\r\n  width: 1rem;\r\n}\r\n.highlight{\r\n  background: #00bcd4;\r\n  color: white;\r\n}\r\n.mat-header-cell,.mat-cell{\r\n  margin: 0 0.6rem;\r\n}\r\n\r\n.mat-table {\r\n  overflow: auto;\r\n  max-height: 500px;\r\n}\r\n.material-icons.color {\r\n  color: #58a4fb;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/facturacion-electronica/resumen-bajas/resumen-bajas.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/facturacion-electronica/resumen-bajas/resumen-bajas.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "../../../../../src/app/facturacion-electronica/resumen-bajas/resumen-bajas.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResumenBajasComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ResumenBajasComponent = (function () {
    function ResumenBajasComponent() {
    }
    ResumenBajasComponent.prototype.ngOnInit = function () {
    };
    return ResumenBajasComponent;
}());
ResumenBajasComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-resumen-bajas',
        template: __webpack_require__("../../../../../src/app/facturacion-electronica/resumen-bajas/resumen-bajas.component.html"),
        styles: [__webpack_require__("../../../../../src/app/facturacion-electronica/resumen-bajas/resumen-bajas.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ResumenBajasComponent);

//# sourceMappingURL=resumen-bajas.component.js.map

/***/ }),

/***/ "../../../../../src/app/facturacion-electronica/resumen-bajas/resumen-bajas.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResumenBajasModule", function() { return ResumenBajasModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__resumen_bajas_component__ = __webpack_require__("../../../../../src/app/facturacion-electronica/resumen-bajas/resumen-bajas.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__resumen_bajas_crear_resumen_bajas_crear_component__ = __webpack_require__("../../../../../src/app/facturacion-electronica/resumen-bajas/resumen-bajas-crear/resumen-bajas-crear.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__resumen_bajas_listar_resumen_bajas_listar_component__ = __webpack_require__("../../../../../src/app/facturacion-electronica/resumen-bajas/resumen-bajas-listar/resumen-bajas-listar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__resumen_bajas_routing_module__ = __webpack_require__("../../../../../src/app/facturacion-electronica/resumen-bajas/resumen-bajas.routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_resumen_bajas_service__ = __webpack_require__("../../../../../src/app/facturacion-electronica/resumen-bajas/services/resumen-bajas.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__directives_datepicker_module__ = __webpack_require__("../../../../../src/app/directives/datepicker.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var ResumenBajasModule = (function () {
    function ResumenBajasModule() {
    }
    return ResumenBajasModule;
}());
ResumenBajasModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_8__resumen_bajas_routing_module__["a" /* ResumenBajasRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["b" /* HttpClientModule */],
            __WEBPACK_IMPORTED_MODULE_10__directives_datepicker_module__["a" /* A2Edatetimepicker */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__resumen_bajas_component__["a" /* ResumenBajasComponent */],
            __WEBPACK_IMPORTED_MODULE_6__resumen_bajas_crear_resumen_bajas_crear_component__["a" /* ResumenBajasCrearComponent */],
            __WEBPACK_IMPORTED_MODULE_7__resumen_bajas_listar_resumen_bajas_listar_component__["a" /* ResumenBajasListarComponent */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_9__services_resumen_bajas_service__["a" /* ResumenBajasService */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_5__resumen_bajas_component__["a" /* ResumenBajasComponent */]
        ]
    })
], ResumenBajasModule);

//# sourceMappingURL=resumen-bajas.module.js.map

/***/ }),

/***/ "../../../../../src/app/facturacion-electronica/resumen-bajas/resumen-bajas.routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResumenBajasRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__resumen_bajas_crear_resumen_bajas_crear_component__ = __webpack_require__("../../../../../src/app/facturacion-electronica/resumen-bajas/resumen-bajas-crear/resumen-bajas-crear.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__resumen_bajas_listar_resumen_bajas_listar_component__ = __webpack_require__("../../../../../src/app/facturacion-electronica/resumen-bajas/resumen-bajas-listar/resumen-bajas-listar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__resumen_bajas_component__ = __webpack_require__("../../../../../src/app/facturacion-electronica/resumen-bajas/resumen-bajas.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_4__resumen_bajas_component__["a" /* ResumenBajasComponent */],
        children: [
            {
                path: 'crear',
                component: __WEBPACK_IMPORTED_MODULE_2__resumen_bajas_crear_resumen_bajas_crear_component__["a" /* ResumenBajasCrearComponent */]
            },
            {
                path: 'consultar',
                component: __WEBPACK_IMPORTED_MODULE_3__resumen_bajas_listar_resumen_bajas_listar_component__["a" /* ResumenBajasListarComponent */]
            }
        ]
    }
];
var ResumenBajasRoutingModule = (function () {
    function ResumenBajasRoutingModule() {
    }
    return ResumenBajasRoutingModule;
}());
ResumenBajasRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes)
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]
        ]
    })
], ResumenBajasRoutingModule);

//# sourceMappingURL=resumen-bajas.routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/facturacion-electronica/resumen-bajas/services/resumen-bajas.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResumenBajasService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ResumenBajasService = (function () {
    function ResumenBajasService(httpClient) {
        this.httpClient = httpClient;
        this.urlTipoDocumento = 'https://facturacion-b26e0.firebaseio.com/tipo-documentos.json';
        this.urlSeries = 'https://facturacion-b26e0.firebaseio.com/series.json';
        this.urlComprobantes = 'https://facturacion-b26e0.firebaseio.com/comprobantes.json';
        this.urlAnulacion = 'https://facturacion-b26e0.firebaseio.com/anulacion.json';
        this.anulacionChanged = new __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__["BehaviorSubject"]([]);
        this.comprobanteChanged = new __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__["BehaviorSubject"]([]);
        this.serieChanged = new __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__["BehaviorSubject"]([]);
        this.tipoDocumentoChanged = new __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__["BehaviorSubject"]([]);
        this.getAllanulacion();
        this.getAllcomprobante();
        this.getTipoDocumento();
        this.getSerie();
    }
    ResumenBajasService.prototype.addanulacion = function (anulacion) {
        if (this.anulaciones == null) {
            anulacion.id = 0;
            this.anulaciones = [anulacion];
        }
        else {
            anulacion.id = this.anulaciones.length + 1;
            this.anulaciones.push(anulacion);
        }
        this.anulacionChanged.next(this.anulaciones.slice());
        this.httpClient.put(this.urlAnulacion, this.anulaciones, {
            observe: 'body',
            responseType: 'json'
        }).subscribe();
    };
    ResumenBajasService.prototype.updateanulacion = function (anulacion) {
        this.anulaciones[this.anulaciones.findIndex(function (elementoAnulacion) { return elementoAnulacion.id === anulacion.id; })] = anulacion;
        this.anulacionChanged.next(this.anulaciones.slice());
        this.httpClient.put(this.urlAnulacion, this.anulaciones, {
            observe: 'body',
            responseType: 'json'
        }).subscribe();
    };
    ResumenBajasService.prototype.deleteanulacion = function (id) {
        this.anulaciones.splice(this.anulaciones.findIndex(function (itemAnulacion) { return itemAnulacion.id === id; }, 1), 1);
        this.anulacionChanged.next(this.anulaciones.slice());
        this.httpClient.put(this.urlAnulacion, this.anulaciones, {
            observe: 'body',
            responseType: 'json'
        }).subscribe();
    };
    ResumenBajasService.prototype.getAllanulacion = function () {
        var _this = this;
        this.httpClient.get(this.urlAnulacion).
            subscribe(function (anulaciones) {
            _this.anulaciones = anulaciones;
            if (_this.anulaciones)
                _this.anulacionChanged.next(_this.anulaciones.slice());
        });
    };
    ResumenBajasService.prototype.getAllcomprobante = function () {
        var _this = this;
        this.httpClient.get(this.urlComprobantes).
            subscribe(function (comprobantes) {
            _this.comprobantes = comprobantes;
            if (_this.comprobantes)
                _this.comprobanteChanged.next(_this.comprobantes.slice());
        });
    };
    ResumenBajasService.prototype.getComprobantes = function (id) {
        return this.comprobantes[this.comprobantes.findIndex(function (itemComprobante) { return itemComprobante.id === id; })];
    };
    ResumenBajasService.prototype.getAnulacion = function (id) {
        return this.anulaciones[this.anulaciones.findIndex(function (itemAnulacion) { return itemAnulacion.id === id; })];
    };
    ResumenBajasService.prototype.getSerie = function () {
        var _this = this;
        this.getTipos(this.urlSeries).
            subscribe(function (tipos) {
            _this.series = tipos;
            _this.serieChanged.next(tipos.slice());
        });
    };
    ResumenBajasService.prototype.getTipoDocumento = function () {
        var _this = this;
        this.getTipos(this.urlTipoDocumento).
            subscribe(function (tipos) {
            _this.tipoDocumentos = tipos;
            _this.tipoDocumentoChanged.next(tipos.slice());
        });
    };
    ResumenBajasService.prototype.getTipos = function (url) {
        return this.httpClient.get(url, {
            observe: 'body',
            responseType: 'json'
        }).
            map(function (tipos) {
            return tipos;
        });
    };
    return ResumenBajasService;
}());
ResumenBajasService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object])
], ResumenBajasService);

var _a;
//# sourceMappingURL=resumen-bajas.service.js.map

/***/ })

});
//# sourceMappingURL=resumen-bajas.module.chunk.js.map