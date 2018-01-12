webpackJsonp(["percepcion-retencion.module"],{

/***/ "../../../../../src/app/facturacion-electronica/comprobantes/models/moneda.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Moneda; });
var Moneda = (function () {
    function Moneda() {
    }
    return Moneda;
}());

//# sourceMappingURL=moneda.js.map

/***/ }),

/***/ "../../../../../src/app/facturacion-electronica/general/utils/estadoArchivo.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EstadoArchivoService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var EstadoArchivoService = (function () {
    function EstadoArchivoService() {
        this.TIPO_ESTADO_ARCHIVO_CON_ERROR = 1;
        this.TIPO_ESTADO_ARCHIVO_CON_ERROR_NOMBRE = 'Con Error';
        this.TIPO_ESTADO_ARCHIVO_EN_PROCESO = 2;
        this.TIPO_ESTADO_ARCHIVO_EN_PROCESO_NOMBRE = 'En Proceso';
        this.TIPO_ESTADO_ARCHIVO_PROCESADO = 3;
        this.TIPO_ESTADO_ARCHIVO_PROCESADO_NOMBRE = 'Procesado';
    }
    return EstadoArchivoService;
}());
EstadoArchivoService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], EstadoArchivoService);

//# sourceMappingURL=estadoArchivo.service.js.map

/***/ }),

/***/ "../../../../../src/app/facturacion-electronica/percepcion-retencion/models/principal-retencion.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrincipalRetencion; });
var PrincipalRetencion = (function () {
    function PrincipalRetencion() {
    }
    return PrincipalRetencion;
}());

//# sourceMappingURL=principal-retencion.js.map

/***/ }),

/***/ "../../../../../src/app/facturacion-electronica/percepcion-retencion/models/retencion-cabecera.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RetencionCabecera; });
var RetencionCabecera = (function () {
    function RetencionCabecera() {
        this.serie = '';
        this.idserie = 0;
        this.rucProveedor = 0;
        this.rucComprador = 0;
        this.estadoComprobante = 'PENDIENTE';
        this.idUsuarioCreacion = '';
        this.idUsuarioModificacion = '';
        this.razonSocialProveedor = '';
        this.razonSocialComprador = '';
        this.fecPago = Date.prototype;
        this.moneda = '';
        this.observacionComprobante = '';
        this.total = 0;
    }
    return RetencionCabecera;
}());

//# sourceMappingURL=retencion-cabecera.js.map

/***/ }),

/***/ "../../../../../src/app/facturacion-electronica/percepcion-retencion/models/retencionebiz.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Retencionebiz; });
var Retencionebiz = (function () {
    function Retencionebiz() {
        this.idDocumentoOrigen = 0;
        this.idDocumentoDestino = 0;
        this.tipoDocumentoOrigen = '';
        this.tipoDocumentoDestino = '';
        this.serieDocumentoDestino = '';
        this.correlativoDocumentoDestino = '';
        this.totalImporteDestino = 0;
        this.totalImporteAuxiliarDestino = 0;
        this.totalPorcentajeAuxiliarDestino = 0;
        this.tipoDocumentoOrigenDescripcion = 'RETENCION';
        this.tipoDocumentoDestinoDescripcion = '';
        this.monedaDestino = '';
        this.totalMonedaDestino = 0;
        this.auxiliar1 = 0;
        this.auxiliar2 = 0;
        this.polizaFactura = '';
        this.anticipo = 0;
        this.fechaEmisionDestino = Date.prototype;
    }
    return Retencionebiz;
}());

//# sourceMappingURL=retencionebiz.js.map

/***/ }),

/***/ "../../../../../src/app/facturacion-electronica/percepcion-retencion/models/retencionmasivaebiz.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Retencionmasivaebiz; });
var Retencionmasivaebiz = (function () {
    function Retencionmasivaebiz() {
        this.usuario = '';
        this.fecha = Date.prototype;
        this.hora = Date.prototype;
        this.nombrearchivo = '';
        this.tamañoarchivo = '';
        this.ticket = '';
        this.estado = '';
        this.estadoId = -1;
    }
    return Retencionmasivaebiz;
}());

//# sourceMappingURL=retencionmasivaebiz.js.map

/***/ }),

/***/ "../../../../../src/app/facturacion-electronica/percepcion-retencion/models/tipo-rp.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export TipoRP */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TipoRPs; });
var TipoRP = (function () {
    function TipoRP(codigo, descripcion, ruta) {
        this.codigo = codigo;
        this.descripcion = descripcion;
        this.ruta = ruta;
    }
    return TipoRP;
}());

var TipoRPs = (function () {
    function TipoRPs() {
        this.TipoRPs = [
            new TipoRP('01', 'retencion', 'crear-retencion'),
        ];
    }
    TipoRPs.prototype.get = function (codigo) {
        return this.TipoRPs.find(function (item) { return item.codigo === codigo; });
    };
    TipoRPs.prototype.getRetencion = function () {
        return this.get('01');
    };
    return TipoRPs;
}());

//# sourceMappingURL=tipo-rp.js.map

/***/ }),

/***/ "../../../../../src/app/facturacion-electronica/percepcion-retencion/percepcion-retencion-crear/emision-percepcion-retencion/emision-percepcion-retencion.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"row col-md-12\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header card-header-text\" data-background-color=\"blue\">\r\n          <h4 class=\"card-title\">{{'retencionEmitida' | translate}}</h4>\r\n        </div>\r\n        <div class=\"card-content\">\r\n          <div class=\"row\">\r\n            <div class=\"col-md-12\">\r\n              <div class=\"center-block\">\r\n                <pdf-viewer [src]=\"pdfSrc\"\r\n                            [render-text]=\"true\"\r\n                            style=\"display: block;\"\r\n                ></pdf-viewer>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n              <div class=\"col-md-7\" align=\"right\"></div>\r\n              <div class=\"col-md-5 row\">\r\n                <div class=\"dropdown col-md-4\" style=\"padding-right: 2px;\">\r\n                  <button class=\"dropdown-toggle btn btn-default btn-block\" data-toggle=\"dropdown\" style=\"padding-left: 17px;\">{{'descargar' | translate}} <b class=\"caret\" ></b>\r\n                    <ul class=\"dropdown-menu\">\r\n                      <li>\r\n                        <a>XML</a>\r\n                      </li>\r\n                      <li>\r\n                        <a>CDR</a>\r\n                      </li>\r\n                      <li>\r\n                        <a>PDF</a>\r\n                      </li>\r\n                    </ul>\r\n                  </button>\r\n                </div>\r\n                <button type=\"submit\" class=\"btn btn-default col-md-5\" (click)=\"showSwal()\" > {{'enviarCorreo' | translate}}</button>\r\n                <button type=\"submit\" class=\"btn btn-default col-md-3\" (click)=\"emitir()\"style=\"padding-left: 20px;\"> {{'imprimir' | translate}}</button>\r\n              </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/facturacion-electronica/percepcion-retencion/percepcion-retencion-crear/emision-percepcion-retencion/emision-percepcion-retencion.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmisionPercepcionRetencionComponent; });
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


var EmisionPercepcionRetencionComponent = (function () {
    function EmisionPercepcionRetencionComponent(route, router) {
        this.route = route;
        this.router = router;
        this.pdfSrc = 'https://vadimdez.github.io/ng2-pdf-viewer/pdf-test.pdf';
    }
    EmisionPercepcionRetencionComponent.prototype.showSwal = function () {
        swal({
            title: 'Agregar Correos Electronicos',
            html: '<div class="form-group label-floating" xmlns="http://www.w3.org/1999/html">' +
                '<label class="control-label">Correos Electronicos<span class="star">*</span> </label>' +
                '<textarea id="correos" type="text" class="form-control" /></textarea> ' +
                '<label>Para separar correos se deberan separar por comas(,).</label>' +
                '</div>',
            showCancelButton: true,
            confirmButtonClass: 'btn btn-success',
            cancelButtonClass: 'btn btn-danger',
            confirmButtonText: 'SI',
            cancelButtonText: 'NO',
            buttonsStyling: false
        }).then(function (result) {
            swal({
                type: 'success',
                html: '<div class="text-center"> Se envio el correo a el/los destinatario(s). </div> ',
                confirmButtonClass: 'btn btn-success',
                buttonsStyling: false
            });
        });
    };
    EmisionPercepcionRetencionComponent.prototype.ngOnInit = function () { };
    EmisionPercepcionRetencionComponent.prototype.emitir = function () {
        this.router.navigateByUrl('percepcion-retencion/crear-retencion');
    };
    EmisionPercepcionRetencionComponent.prototype.regresar = function () {
        this.router.navigateByUrl('percepcion-retencion/crear-retencion');
    };
    return EmisionPercepcionRetencionComponent;
}());
EmisionPercepcionRetencionComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-item-crear-editar',
        template: __webpack_require__("../../../../../src/app/facturacion-electronica/percepcion-retencion/percepcion-retencion-crear/emision-percepcion-retencion/emision-percepcion-retencion.component.html"),
        styles: [__webpack_require__("../../../../../src/app/facturacion-electronica/percepcion-retencion/percepcion-retencion-crear/emision-percepcion-retencion/emision-percepcion-retencion.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _b || Object])
], EmisionPercepcionRetencionComponent);

var _a, _b;
//# sourceMappingURL=emision-percepcion-retencion.component.js.map

/***/ }),

/***/ "../../../../../src/app/facturacion-electronica/percepcion-retencion/percepcion-retencion-crear/emision-percepcion-retencion/emision-percepcion-retencion.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "input.ng-invalid.ng-touched,\r\nmat-select.ng-invalid.ng-touched{\r\n  border-bottom: 1px solid red;\r\n}\r\nmat-select{\r\n  border-bottom: 1px solid #AAAAAA;\r\n}\r\ndiv.row{\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n}\r\n\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/facturacion-electronica/percepcion-retencion/percepcion-retencion-crear/item-crear-editar/item-crear-editar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row col-md-12\">\r\n  <div class=\"card\">\r\n    <div class=\"card-header card-header-text\" data-background-color=\"blue\">\r\n      <h4 class=\"card-title\">{{titulo | translate}}</h4>\r\n    </div>\r\n    <div class=\"card-content\">\r\n      <form [formGroup]=\"itemFormGroup\" (ngSubmit)=\"agregaritem()\">\r\n        <div class=\"row\">\r\n          <div class=\"col-md-4\">\r\n            <div class=\"form-group label-floating\">\r\n              <label class=\"control-label\">{{'tipoDocumento' | translate}} <span class=\"star\">*</span></label>\r\n              <select name=\"cmbtipodocrp\" formControlName=\"cmbtipodocrp\" class=\"form-control\">\r\n                <option *ngFor=\"let tiposComprobante of tiposComprobantes | async\" [value]=\"tiposComprobante.codigo\"> {{tiposComprobante.descripcionLarga}}</option>\r\n              </select>\r\n              <span *ngIf=\"!itemFormGroup.get('cmbtipodocrp').valid && itemFormGroup.get('cmbtipodocrp').touched\">\r\n                                            <span *ngIf=\"itemFormGroup.controls['cmbtipodocrp'].hasError('required')\"\r\n                                                  class=\"text-danger\">{{'campoRequerido' | translate}}</span>\r\n              </span>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-2\">\r\n            <div class=\"form-group label-floating\">\r\n              <label class=\"control-label\"> {{'serie' | translate}} <span class=\"star\">*</span></label>\r\n              <input id=\"txtserie\" formControlName=\"txtserie\" class=\"form-control\" type=\"text\" minlength=\"4\" min=\"4\" maxlength=\"4\" max=\"4\">\r\n              <span *ngIf=\"!itemFormGroup.get('txtserie').valid && itemFormGroup.get('txtserie').touched\">\r\n                                            <span *ngIf=\"itemFormGroup.controls['txtserie'].hasError('required')\"\r\n                                                  class=\"text-danger\">{{'campoRequerido' | translate}}</span>\r\n                                            <span *ngIf=\"itemFormGroup.controls['txtserie'].hasError('pattern')\"\r\n                                                  class=\"text-danger\">{{'formatoInvalido' | translate}}</span>\r\n                                            <span *ngIf=\"itemFormGroup.controls['txtserie'].hasError('minlength')\"\r\n                                                  class=\"text-danger\">{{'minimoDigitos' | translate:{digito:'4'} }}</span>\r\n                                            <span *ngIf=\"itemFormGroup.controls['txtserie'].hasError('maxlength')\"\r\n                                                  class=\"text-danger\">{{'maximoDigitos' | translate:{digito:'4'} }}</span>\r\n              </span>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-2\">\r\n            <div class=\"form-group label-floating\">\r\n              <label class=\"control-label\">{{'correlativo' | translate}}<span class=\"star\">*</span></label>\r\n              <input correlativoDirective id=\"txtcorrelativo\" formControlName=\"txtcorrelativo\" class=\"form-control\" type=\"text\" minlength=\"2\" min=\"2\" maxlength=\"12\" max=\"12\">\r\n              <span *ngIf=\"!itemFormGroup.get('txtcorrelativo').valid && itemFormGroup.get('txtcorrelativo').touched\">\r\n                                            <span *ngIf=\"itemFormGroup.controls['txtcorrelativo'].hasError('required')\"\r\n                                                  class=\"text-danger\">{{'campoRequerido' | translate}}</span>\r\n                                            <span *ngIf=\"itemFormGroup.controls['txtcorrelativo'].hasError('pattern')\"\r\n                                                  class=\"text-danger\">{{'formatoInvalido' | translate}}</span>\r\n                                            <span *ngIf=\"itemFormGroup.controls['txtcorrelativo'].hasError('minlength')\"\r\n                                                  class=\"text-danger\">{{'minimoDigitos' | translate:{digito:'2'} }}</span>\r\n                                            <span *ngIf=\"itemFormGroup.controls['txtcorrelativo'].hasError('maxlength')\"\r\n                                                  class=\"text-danger\">{{'maximoDigitos' | translate:{digito:'12'} }}</span>\r\n              </span>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-4\">\r\n            <div class=\"form-group label-floating\">\r\n              <label class=\"control-label\">{{'fechaEmision' | translate}}<span class=\"star\">*</span> </label>\r\n              <input id=\"datefechaemision\" formControlName=\"datefechaemision\" type=\"text\" class=\"form-control\" datepicker/>\r\n              <span *ngIf=\"!itemFormGroup.get('datefechaemision').valid && itemFormGroup.get('datefechaemision').touched\">\r\n                                            <span *ngIf=\"itemFormGroup.controls['datefechaemision'].hasError('required')\"\r\n                                                  class=\"text-danger\">{{'campoRequerido' | translate}}</span>\r\n              </span>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-md-4\">\r\n            <div class=\"form-group label-floating\">\r\n              <label class=\"control-label\">{{'tipoMoneda' | translate}} <span class=\"star\">*</span></label>\r\n              <select name=\"cmbMoneda\" formControlName=\"cmbMoneda\" class=\"form-control\" (change)=\"seleccionarMoneda()\">\r\n                <option *ngFor=\"let moneda of todosTiposMonedas | async\" [value]=\"moneda.codigo\"> {{moneda.descripcionCorta}}</option>\r\n              </select>\r\n              <span *ngIf=\"!itemFormGroup.get('cmbMoneda').valid && itemFormGroup.get('cmbMoneda').touched\">\r\n                                            <span *ngIf=\"itemFormGroup.controls['cmbMoneda'].hasError('required')\"\r\n                                                  class=\"text-danger\">{{'campoRequerido' | translate}}</span>\r\n              </span>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-4\">\r\n            <div class=\"form-group label-floating\">\r\n              <label class=\"control-label\">{{'importeTotal' | translate}} <span class=\"star\">*</span></label>\r\n              <input precioDirectiva id=\"txtmonto\" formControlName=\"txtmonto\" class=\"form-control\" type=\"text\">\r\n              <span *ngIf=\"!itemFormGroup.get('txtmonto').valid && itemFormGroup.get('txtmonto').touched\">\r\n                                            <span *ngIf=\"itemFormGroup.controls['txtmonto'].hasError('required')\"\r\n                                                  class=\"text-danger\">{{'campoRequerido' | translate}}</span>\r\n                                            <span *ngIf=\"itemFormGroup.controls['txtmonto'].hasError('pattern')\"\r\n                                                  class=\"text-danger\">{{'formatoInvalido' | translate}}</span>\r\n                                            <span *ngIf=\"itemFormGroup.controls['txtmonto'].hasError('minlength')\"\r\n                                                  class=\"text-danger\">{{'minimoDigitos' | translate:{digito:'4'} }}</span>\r\n                                            <span *ngIf=\"itemFormGroup.controls['txtmonto'].hasError('maxlength')\"\r\n                                                  class=\"text-danger\">{{'maximoDigitos' | translate:{digito:'16'} }}</span>\r\n              </span>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-4\">\r\n            <div class=\"form-group label-floating\">\r\n              <label class=\"control-label\">{{'importeSoles' | translate}}</label>\r\n              <input precioDirectiva id=\"txtImporteSoles\" formControlName=\"txtImporteSoles\" class=\"form-control\" type=\"text\">\r\n              <span *ngIf=\"!itemFormGroup.get('txtImporteSoles').valid && itemFormGroup.get('txtImporteSoles').touched\">\r\n                                            <span *ngIf=\"itemFormGroup.controls['txtImporteSoles'].hasError('required')\"\r\n                                                  class=\"text-danger\">{{'campoRequerido' | translate}}</span>\r\n                                            <span *ngIf=\"itemFormGroup.controls['txtImporteSoles'].hasError('pattern')\"\r\n                                                  class=\"text-danger\">Ej. 10.00</span>\r\n                                            <span *ngIf=\"itemFormGroup.controls['txtImporteSoles'].hasError('minlength')\"\r\n                                                  class=\"text-danger\">{{'minimoDigitos' | translate:{digito:'4'} }}</span>\r\n                                            <span *ngIf=\"itemFormGroup.controls['txtImporteSoles'].hasError('maxlength')\"\r\n                                                  class=\"text-danger\">{{'maximoDigitos' | translate:{digito:'16'} }}</span>\r\n              </span>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"row\">\r\n          <div class=\"col-md-4\">\r\n            <div class=\"form-group label-floating\">\r\n              <label  class=\"control-label\">{{'tipoCambio' | translate}}</label>\r\n              <input precioDirectiva id=\"txtTipoCambio\" formControlName=\"txtTipoCambio\" class=\"form-control\" type=\"text\">\r\n              <span *ngIf=\"!itemFormGroup.get('txtTipoCambio').valid && itemFormGroup.get('txtTipoCambio').touched\">\r\n                                            <span *ngIf=\"itemFormGroup.controls['txtTipoCambio'].hasError('required')\"\r\n                                                  class=\"text-danger\">{{'campoRequerido' | translate}}</span>\r\n                                            <span *ngIf=\"itemFormGroup.controls['txtTipoCambio'].hasError('pattern')\"\r\n                                                  class=\"text-danger\">{{'formatoInvalido' | translate}}</span>\r\n                                            <span *ngIf=\"itemFormGroup.controls['txtTipoCambio'].hasError('minlength')\"\r\n                                                  class=\"text-danger\">{{'minimoDigitos' | translate:{digito:'4'} }}</span>\r\n                                            <span *ngIf=\"itemFormGroup.controls['txtTipoCambio'].hasError('maxlength')\"\r\n                                                  class=\"text-danger\">{{'maximoDigitos' | translate:{digito:'16'} }}</span>\r\n              </span>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-4\">\r\n              <div class=\"form-group label-floating\">\r\n                <label class=\"control-label\">{{'porcentajeRetencion' | translate}} <span class=\"star\">*</span> </label>\r\n                <input precioDirectiva id=\"txtretencionxciento\" formControlName=\"txtretencionxciento\" class=\"form-control\" type=\"text\">\r\n                <span *ngIf=\"!itemFormGroup.get('txtretencionxciento').valid && itemFormGroup.get('txtretencionxciento').touched\">\r\n                                              <span *ngIf=\"itemFormGroup.controls['txtretencionxciento'].hasError('required')\"\r\n                                                    class=\"text-danger\">{{'campoRequerido' | translate}}</span>\r\n                                              <span *ngIf=\"itemFormGroup.controls['txtretencionxciento'].hasError('pattern')\"\r\n                                                    class=\"text-danger\">{{'formatoInvalido' | translate}}</span>\r\n                                              <span *ngIf=\"itemFormGroup.controls['txtretencionxciento'].hasError('minlength')\"\r\n                                                    class=\"text-danger\">{{'minimoDigitos' | translate:{digito:'4'} }}</span>\r\n                                              <span *ngIf=\"itemFormGroup.controls['txtretencionxciento'].hasError('maxlength')\"\r\n                                                    class=\"text-danger\">{{'maximoDigitos' | translate:{digito:'16'} }}</span>\r\n                </span>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-4\">\r\n              <div class=\"form-group label-floating\">\r\n                <label class=\"control-label\">{{'retencion' | translate}} <span class=\"star\">*</span></label>\r\n                <input precioDirectiva id=\"txtretencion\" formControlName=\"txtretencion\" class=\"form-control\" type=\"text\">\r\n                <span *ngIf=\"!itemFormGroup.get('txtretencion').valid && itemFormGroup.get('txtretencion').touched\">\r\n                                              <span *ngIf=\"itemFormGroup.controls['txtretencion'].hasError('required')\"\r\n                                                    class=\"text-danger\">{{'campoRequerido' | translate}}</span>\r\n                                              <span *ngIf=\"itemFormGroup.controls['txtretencion'].hasError('pattern')\"\r\n                                                    class=\"text-danger\">Ej. 10.00</span>\r\n                                              <span *ngIf=\"itemFormGroup.controls['txtretencion'].hasError('minlength')\"\r\n                                                    class=\"text-danger\">{{'minimoDigitos' | translate:{digito:'4'} }}</span>\r\n                                              <span *ngIf=\"itemFormGroup.controls['txtretencion'].hasError('maxlength')\"\r\n                                                    class=\"text-danger\">{{'maximoDigitos' | translate:{digito:'16'} }}</span>\r\n                </span>\r\n              </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"row\">\r\n          <div class=\"col-md-12\" align=\"right\">\r\n            <button *ngIf=\"editable\" id=\"btnGuardar\" name=\"btnGuardar\" type=\"button\" class=\"btn btn-default\" (click)=\"editaritem()\"> {{buttonguardar}}\r\n            </button>\r\n            <button *ngIf=\"editableaceptar\" id=\"btnAceptar\" name=\"btnAceptar\" type=\"submit\" class=\"btn btn-default\"\r\n                    [disabled]=\"!itemFormGroup.valid\"> {{'aceptar' | translate}}\r\n            </button>\r\n            <button type=\"button\" id=\"btnCancelar\" name=\"btnCancelar\" class=\"btn btn-default\" (click)=\"cancelaritem()\"> {{'cancelar' | translate}}</button>\r\n          </div>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/facturacion-electronica/percepcion-retencion/percepcion-retencion-crear/item-crear-editar/item-crear-editar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemCrearEditarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_retencionebiz__ = __webpack_require__("../../../../../src/app/facturacion-electronica/percepcion-retencion/models/retencionebiz.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_persistencia_service__ = __webpack_require__("../../../../../src/app/facturacion-electronica/percepcion-retencion/services/persistencia.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__general_utils_tipos_service__ = __webpack_require__("../../../../../src/app/facturacion-electronica/general/utils/tipos.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__comprobantes_models_moneda__ = __webpack_require__("../../../../../src/app/facturacion-electronica/comprobantes/models/moneda.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_BehaviorSubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__general_services_documento_tablaMaestra_service__ = __webpack_require__("../../../../../src/app/facturacion-electronica/general/services/documento/tablaMaestra.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__general_models_documento_tablaMaestra__ = __webpack_require__("../../../../../src/app/facturacion-electronica/general/models/documento/tablaMaestra.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
///<reference path="../../models/retencionebiz.ts"/>










var ItemCrearEditarComponent = (function () {
    function ItemCrearEditarComponent(route, router, persistenciaService, _tipos, _tablaMaestraService) {
        this.route = route;
        this.router = router;
        this.persistenciaService = persistenciaService;
        this._tipos = _tipos;
        this._tablaMaestraService = _tablaMaestraService;
        this.buttonguardar = 'Editar';
        this.monedas = [];
        this.tiposComprobantes = new __WEBPACK_IMPORTED_MODULE_7_rxjs_BehaviorSubject__["BehaviorSubject"]([]);
        this.todosTiposComprobantes = new __WEBPACK_IMPORTED_MODULE_7_rxjs_BehaviorSubject__["BehaviorSubject"]([]);
        this.todosTiposMonedas = new __WEBPACK_IMPORTED_MODULE_7_rxjs_BehaviorSubject__["BehaviorSubject"]([]);
        this.cargarServiciosArranque();
        this.retencionEbiz = new __WEBPACK_IMPORTED_MODULE_3__models_retencionebiz__["a" /* Retencionebiz */]();
    }
    ItemCrearEditarComponent.prototype.deshabilitar = function () {
        this.itemFormGroup.disable();
    };
    ItemCrearEditarComponent.prototype.cargarServiciosArranque = function () {
        this.todosTiposComprobantes = this._tablaMaestraService.obtenerPorIdTabla(__WEBPACK_IMPORTED_MODULE_9__general_models_documento_tablaMaestra__["c" /* TABLA_MAESTRA_TIPO_COMPROBANTE */]);
        this.todosTiposMonedas = this._tablaMaestraService.obtenerPorIdTabla(__WEBPACK_IMPORTED_MODULE_9__general_models_documento_tablaMaestra__["b" /* TABLA_MAESTRA_MONEDAS */]);
    };
    ItemCrearEditarComponent.prototype.setTipoComprobante = function () {
        var codigosComprobantes = [];
        codigosComprobantes = [
            this._tipos.TIPO_DOCUMENTO_FACTURA,
            this._tipos.TIPO_DOCUMENTO_NOTA_CREDITO,
            this._tipos.TIPO_DOCUMENTO_NOTA_DEBITO
        ];
        this.tiposComprobantes = this._tablaMaestraService.obtenerPorCodigoDeTablaMaestra(this.todosTiposComprobantes, codigosComprobantes);
    };
    ItemCrearEditarComponent.prototype.setTipoItem = function () {
        switch (this.tipoaccion) {
            case 1:
                this.editable = false;
                this.editableaceptar = true;
                break;
            case 2:
                this.editable = true;
                this.editableaceptar = false;
                this.cargarProductoEditar();
                break;
        }
    };
    ItemCrearEditarComponent.prototype.obtenerParametros = function () {
        var _this = this;
        this.tipoAccion = this.route.snapshot.data['tipoAccion'];
        this.tipoDocumento = this.route.snapshot.data['tipoDocumento'];
        var sub = this.route
            .params
            .subscribe(function (params) {
            _this.idPosicion = +params['id'];
        });
        this.setTipoItem();
    };
    ItemCrearEditarComponent.prototype.ngOnInit = function () {
        this.obtenerParametros();
        this.initForm();
        this.titulo = this.route.snapshot.data['titulo'];
        this.tipoaccion = this.route.snapshot.data['tipoaccion'];
        this.setTipoItem();
        // cambiar por servicio
        this.listarMonedas();
    };
    ItemCrearEditarComponent.prototype.listarMonedas = function () {
        this.monedas = [
            new __WEBPACK_IMPORTED_MODULE_6__comprobantes_models_moneda__["a" /* Moneda */](),
            new __WEBPACK_IMPORTED_MODULE_6__comprobantes_models_moneda__["a" /* Moneda */]()
        ];
        this.monedas[0].id = 0;
        this.monedas[0].codigo = '001';
        this.monedas[0].nombre = 'Soles';
        this.monedas[0].sigla = 'PEN';
        this.monedas[1].id = 1;
        this.monedas[1].codigo = '002';
        this.monedas[1].nombre = 'Dolares';
        this.monedas[1].sigla = 'USD';
    };
    ItemCrearEditarComponent.prototype.seleccionarMoneda = function () {
        var codigoMoneda;
        codigoMoneda = this.itemFormGroup.controls['cmbMoneda'].value;
        console.log(codigoMoneda);
        switch (codigoMoneda) {
            case this._tipos.TIPO_MONEDA_SOL:
                this.itemFormGroup.controls['txtTipoCambio'].disable();
                this.itemFormGroup.controls['txtImporteSoles'].disable();
                break;
            default:
                this.itemFormGroup.controls['txtTipoCambio'].enable();
                this.itemFormGroup.controls['txtImporteSoles'].enable();
                break;
        }
    };
    ItemCrearEditarComponent.prototype.editaritem = function () {
        this.itemFormGroup.enable();
        if (this.buttonguardar === 'Editar') {
            this.buttonguardar = this.route.snapshot.data['button'];
        }
        else {
            this.editaritemproducto();
            swal({
                type: 'success',
                title: 'CORRECTO',
                html: '<div class="text-center"> El item fue editado correctamente. </div>',
                buttonsStyling: false,
                confirmButtonClass: 'btn btn-success',
                confirmButtonText: 'SI',
            });
            this.router.navigateByUrl('percepcion-retencion/crear-retencion');
        }
    };
    ItemCrearEditarComponent.prototype.editaritemproducto = function () {
        this.fillProducto();
        console.log('EDITANDO');
        this.persistenciaService.editarProducto(this.retencionEbiz, this.idPosicion);
        console.log(this.retencionEbiz);
        console.log(this.idPosicion);
        console.log(this.persistenciaService.editarProducto(this.retencionEbiz, this.idPosicion));
    };
    ItemCrearEditarComponent.prototype.agregaritem = function () {
        if (this.validarMontoMinimoRetencion()) {
            swal({
                type: 'success',
                title: 'CORRECTO',
                html: '<div class="text-center"> El/los item(s) fueron agregado(s) correctamente. </div>',
                buttonsStyling: false,
                confirmButtonColor: '#ffc107',
                confirmButtonText: 'SI',
            });
            this.grabar();
            this.router.navigateByUrl('percepcion-retencion/crear-retencion');
        }
        else {
            swal({
                title: 'Alerta',
                html: '<div class="text-center"> El Importe Total mínimo debe ser de 700.00 soles.</div>',
                type: 'warning',
                confirmButtonText: 'Ok',
                confirmButtonClass: 'btn btn-warning',
            });
        }
    };
    ItemCrearEditarComponent.prototype.validarMontoMinimoRetencion = function () {
        if (Number(this.itemFormGroup.controls['txtmonto'].value) > 700.00) {
            return true;
        }
        return false;
    };
    ItemCrearEditarComponent.prototype.cancelaritem = function () {
        this.router.navigateByUrl('percepcion-retencion/crear-retencion');
    };
    ItemCrearEditarComponent.prototype.initForm = function () {
        var fecha = new Date();
        var fecha_actual = fecha.getDate().toString() + '/' + fecha.getMonth().toString() + '/' + fecha.getFullYear().toString();
        this.itemFormGroup = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormGroup */]({
            'cmbtipodocrp': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('' /*,[Validators.required]*/),
            'txtserie': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', [
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].pattern('[A-Z0-9]{4}'),
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].minLength(4),
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].maxLength(4)
            ]),
            'txtcorrelativo': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', [
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].pattern('[0-9]+'),
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].minLength(8),
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].maxLength(8)
            ]),
            'txtmonto': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', [
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].pattern('[0-9]+[.][0-9]{2}'),
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].minLength(4),
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].maxLength(15)
            ]),
            'txtretencion': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', [
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].pattern('[0-9]+[.][0-9]{2}'),
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].minLength(4),
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].maxLength(15)
            ]),
            'txtretencionxciento': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', [
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].pattern('[0-9]+[.][0-9]{2}'),
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].minLength(4),
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].maxLength(15)
            ]),
            'datefechaemision': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](fecha_actual, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required]),
            'cmbMoneda': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('' /*, [Validators.required]*/),
            'txtTipoCambio': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', [
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].pattern('[0-9]+[.][0-9]{2}'),
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].minLength(4),
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].maxLength(15)
            ]),
            'txtImporteSoles': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', [
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].pattern('[0-9]+[.][0-9]{2}'),
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].minLength(4),
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].maxLength(15)
            ])
        });
        this.setTipoComprobante();
    };
    ItemCrearEditarComponent.prototype.cargarProductoEditar = function () {
        this.persistenciaService.getItemProducto(this.idPosicion);
        this.retencionEbizedit = this.persistenciaService.getItemProducto(this.idPosicion);
        console.log('Cargar Productos');
        console.log(this.retencionEbizedit);
        this.itemFormGroup.controls['cmbtipodocrp'].setValue(this.retencionEbizedit.idDocumentoDestino);
        this.itemFormGroup.controls['txtserie'].setValue(this.retencionEbizedit.serieDocumentoDestino);
        this.itemFormGroup.controls['txtcorrelativo'].setValue(this.retencionEbizedit.correlativoDocumentoDestino);
        this.itemFormGroup.controls['txtmonto'].setValue(this.retencionEbizedit.totalImporteDestino);
        this.itemFormGroup.controls['txtretencion'].setValue(this.retencionEbizedit.totalImporteAuxiliarDestino);
        this.itemFormGroup.controls['txtretencionxciento'].setValue(this.retencionEbizedit.totalPorcentajeAuxiliarDestino);
        this.itemFormGroup.controls['datefechaemision'].setValue(this.retencionEbizedit.fechaEmisionDestino);
        this.itemFormGroup.controls['cmbMoneda'].setValue(this.retencionEbizedit.monedaDestino);
        this.itemFormGroup.controls['txtImporteSoles'].setValue(this.retencionEbizedit.totalMonedaDestino);
        this.itemFormGroup.controls['txtTipoCambio'].setValue(this.retencionEbizedit.auxiliar1);
        console.log(this.itemFormGroup.value);
        setTimeout(function () {
            $('select').each(function () {
                $(this.parentElement).removeClass('is-empty');
            });
        }, 200);
        this.deshabilitar();
    };
    ItemCrearEditarComponent.prototype.limpiar = function ($event) {
        this.itemFormGroup.reset();
    };
    ItemCrearEditarComponent.prototype.filtro = function ($event) {
        this.fillProducto();
    };
    ItemCrearEditarComponent.prototype.fillProducto = function () {
        var _this = this;
        var indexTipo = this.tiposComprobantes.getValue().findIndex(function (element) { return element.codigo == _this.itemFormGroup.get('cmbtipodocrp').value; });
        this.retencionEbiz.tipoDocumentoDestino = this.itemFormGroup.get('cmbtipodocrp').value;
        this.retencionEbiz.tipoDocumentoDestinoDescripcion = indexTipo == -1 ? 'FACTURA' : this.tiposComprobantes.getValue()[indexTipo].descripcionLarga;
        this.retencionEbiz.correlativoDocumentoDestino = this.itemFormGroup.get('txtcorrelativo').value;
        this.retencionEbiz.serieDocumentoDestino = this.itemFormGroup.get('txtserie').value;
        this.retencionEbiz.fechaEmisionDestino = this.itemFormGroup.get('datefechaemision').value;
        this.retencionEbiz.totalImporteDestino = this.itemFormGroup.get('txtmonto').value;
        this.retencionEbiz.totalImporteAuxiliarDestino = this.itemFormGroup.get('txtretencion').value;
        this.retencionEbiz.totalPorcentajeAuxiliarDestino = this.itemFormGroup.get('txtretencionxciento').value;
        var indexTipoMoneda = this.todosTiposMonedas.getValue().findIndex(function (element) { return element.codigo == _this.itemFormGroup.get('cmbMoneda').value; });
        this.retencionEbiz.monedaDestino = indexTipo == -1 ? 'LIBRAS ESTERLINAS' : this.todosTiposMonedas.getValue()[indexTipoMoneda].descripcionCorta;
        this.retencionEbiz.totalMonedaDestino = this.itemFormGroup.get('txtImporteSoles').value;
        this.retencionEbiz.auxiliar1 = this.itemFormGroup.get('txtTipoCambio').value;
        console.log(this.retencionEbiz);
    };
    ItemCrearEditarComponent.prototype.grabar = function () {
        this.fillProducto();
        this.persistenciaService.agregarProducto(this.retencionEbiz);
    };
    return ItemCrearEditarComponent;
}());
ItemCrearEditarComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-item-crear-editar',
        template: __webpack_require__("../../../../../src/app/facturacion-electronica/percepcion-retencion/percepcion-retencion-crear/item-crear-editar/item-crear-editar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/facturacion-electronica/percepcion-retencion/percepcion-retencion-crear/item-crear-editar/item-crear-editar.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__services_persistencia_service__["a" /* PersistenciaServiceRetencion */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_persistencia_service__["a" /* PersistenciaServiceRetencion */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__general_utils_tipos_service__["a" /* TiposService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__general_utils_tipos_service__["a" /* TiposService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_8__general_services_documento_tablaMaestra_service__["a" /* TablaMaestraService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__general_services_documento_tablaMaestra_service__["a" /* TablaMaestraService */]) === "function" && _e || Object])
], ItemCrearEditarComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=item-crear-editar.component.js.map

/***/ }),

/***/ "../../../../../src/app/facturacion-electronica/percepcion-retencion/percepcion-retencion-crear/item-crear-editar/item-crear-editar.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "input.ng-invalid.ng-touched,\r\nmat-select.ng-invalid.ng-touched{\r\n  border-bottom: 1px solid red;\r\n}\r\nmat-select{\r\n  border-bottom: 1px solid #AAAAAA;\r\n}\r\ndiv.row{\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n}\r\n.text-danger{\r\n  font-size: 11px;\r\n  font-weight: 700;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/facturacion-electronica/percepcion-retencion/percepcion-retencion-crear/percepcion-retencion-crear.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row col-md-12\">\r\n  <div class=\"card\">\r\n    <div class=\"card-header card-header-text\" data-background-color=\"blue\">\r\n      <h4 class=\"card-title\">{{'crearRetenciontitle' | translate}}</h4>\r\n    </div>\r\n    <div class=\"card-content\">\r\n      <ul class=\"nav nav-pills nav-pills-circle nav-pills-warning\">\r\n        <li class=\"active\">\r\n          <a href=\"#retencionunitaria\" data-toggle=\"tab\">\r\n            {{'retencionUnitaria' | translate}}\r\n          </a>\r\n        </li>\r\n        <li>\r\n          <a href=\"#retencionmasiva\" data-toggle=\"tab\">\r\n            {{'retencionMasiva' | translate}}\r\n          </a>\r\n        </li>\r\n      </ul>\r\n      <div class=\"tab-content\">\r\n        <div class=\"tab-pane active\" id=\"retencionunitaria\">\r\n          <div class=\"card\">\r\n            <div class=\"card-content\">\r\n              <form [formGroup]=\"productFormGroup\">\r\n                <div class=\"row\">\r\n                  <div class=\"col-md-3\">\r\n                    <div class=\"form-group label-floating\">\r\n                      <label class=\"control-label\">{{'serie' | translate}}<span class=\"star\">*</span></label>\r\n                      <select name=\"cmbserie\" formControlName=\"cmbserie\" class=\"form-control\">\r\n                        <option *ngFor=\"let serie of series\" [value]=\"serie.id\"> {{serie.serie}}</option>\r\n                      </select>\r\n                      <span *ngIf=\"!productFormGroup.get('cmbserie').valid && productFormGroup.get('cmbserie').touched\">\r\n                                            <span *ngIf=\"productFormGroup.controls['cmbserie'].hasError('required')\"\r\n                                                  class=\"text-danger\">{{'formato' | translate}}</span>\r\n                          </span>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-md-3\">\r\n                    <div class=\"form-group label-floating\">\r\n                      <label class=\"control-label\"> <i class=\"material-icons\" style=\"font-size: 1.5rem;\r\n                  margin-right: 0.5rem;\">search</i> {{'ruc' | translate}} <span class=\"star\">*</span></label>\r\n                      <input rucDirective id=\"txtruc\" formControlName=\"txtruc\" class=\"form-control\" type=\"text\" (keydown)=\"busquedaruc($event)\">\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-md-6\">\r\n                    <div class=\"form-group label-floating\">\r\n                      <label class=\"control-label\"> <i class=\"material-icons\" style=\"font-size: 1.5rem;\r\n                  margin-right: 0.5rem;\">search</i>{{'razonSocial' | translate}}<span class=\"star\">*</span></label>\r\n                      <input id=\"txtrazonsocial\" formControlName=\"txtrazonsocial\" class=\"form-control\" type=\"text\">\r\n                      <span\r\n                        *ngIf=\"!productFormGroup.get('txtrazonsocial').valid && productFormGroup.get('txtrazonsocial').touched\">\r\n                            <span *ngIf=\"productFormGroup.controls['txtrazonsocial'].hasError('required')\"\r\n                                  class=\"text-danger\">{{'campoRequerido' | translate}}</span>\r\n                          </span>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                  <div class=\"col-md-3\">\r\n                    <div class=\"form-group label-floating\">\r\n                      <label class=\"control-label\">{{'fechaPago' | translate}} <span class=\"star\">*</span> </label>\r\n                      <input id=\"datefechapago\" formControlName=\"datefechapago\" type=\"text\" class=\"form-control\"\r\n                             name=\"fechadepago\"\r\n                             datepicker/>\r\n                      <span\r\n                        *ngIf=\"!productFormGroup.get('datefechapago').valid && productFormGroup.get('datefechapago').touched\">\r\n                            <span *ngIf=\"productFormGroup.controls['datefechapago'].hasError('required')\"\r\n                                  class=\"text-danger\">{{'campoRequerido' | translate}}</span>\r\n                          </span>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-md-3\">\r\n                    <div class=\"form-group label-floating\">\r\n                      <label class=\"control-label\">{{'tipoMoneda' | translate}} <span class=\"star\">*</span> </label>\r\n                      <input id=\"txttipomoneda\" formControlName=\"txttipomoneda\" class=\"form-control\" value=\"SOLES\"\r\n                             type=\"text\"\r\n                             [disabled]=\"true\">\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </form>\r\n              <div class=\"card\">\r\n                <div class=\"card-header card-header-icon\" data-background-color=\"blue\">\r\n                  <i class=\"material-icons\">list</i>\r\n                </div>\r\n                <div class=\"row\"><h3>{{'listaItems' | translate}}</h3></div>\r\n                <div class=\"row\"><p>&nbsp;</p></div>\r\n                <nav class=\"navbar navbar-info\" role=\"navigation\"></nav>\r\n\r\n                <div class=\"row \">\r\n                  <div class=\"col col-md-12\">\r\n                    <app-data-table (iniciarData)=\"iniciarData($event)\"\r\n                                    (accion)=\"ejecutarAccion($event)\"\r\n                                    (eliminar)=\"eliminar($event)\"\r\n                                    (agregar)=\"agregarItem($event)\"\r\n                                    #tablaNormal [idTabla]=\"'tabla1'\"\r\n                                    [cabecera]=\"cabecera\"\r\n                                    [atributos]=\"atributos\"\r\n                                    [acciones]=\"AccionesPrueba\"\r\n                                    [tipoAccion]=\"tipo\"\r\n                                    [habilitarAcciones]=\"true\"\r\n                                    [habilitarCheckBox]=\"true\"\r\n                                    [habilitarAgregar]=\"true\"\r\n                                    [habilitarEliminar]=\"true\" ></app-data-table>\r\n\r\n                    <form [formGroup]=\"productFormGroup\">\r\n                      <div class=\"row\">\r\n                        <div class=\"col-md-12\">\r\n                          <div class=\"col-md-9\">&nbsp;</div>\r\n                          <div class=\"col-md-3\">\r\n                            <div class=\"form-group label-floating\">\r\n                              <label class=\"control-label\">{{'total' | translate}}</label>\r\n                              <input type=\"text\" id=\"txttotal\" formControlName=\"txttotal\" disabled class=\"form-control\">\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </form>\r\n\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"row\"><p> &nbsp;</p></div>\r\n              <div class=\"row\">\r\n                <div class=\"col-md-12\">\r\n                  <form [formGroup]=\"productFormGroup\">\r\n                    <div class=\"label-floating\">\r\n                      <label class=\"control-label\">{{'observaciones' | translate}}</label>\r\n                      <input id=\"txtobservacion\" formControlName=\"txtobservacion\" class=\"form-control\" type=\"text\">\r\n                      <span\r\n                        *ngIf=\"!productFormGroup.get('txtobservacion').valid && productFormGroup.get('txtobservacion').touched\">\r\n                            <span *ngIf=\"productFormGroup.controls['txtobservacion'].hasError('maxLength')\"\r\n                                  class=\"text-danger\">{{'maximoCaracteres' | translate: {digito: 500} }}</span>\r\n                          </span>\r\n                    </div>\r\n                  </form>\r\n                </div>\r\n              </div>\r\n              <div class=\"row\"><p> &nbsp;</p></div>\r\n              <div class=\"row\">\r\n                <div class=\"col-md-12\" align=\"right\">\r\n                  <button type=\"submit\" class=\"btn btn-default\" (click)=\" vistaprevia()\"\r\n                          [disabled]=\"!productFormGroup.valid\">{{'vistaPrevia' | translate}}\r\n                  </button>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"tab-pane\" id=\"retencionmasiva\">\r\n          <div class=\"card\">\r\n            <div class=\"card-content\">\r\n              <div class=\"row\">\r\n                <div class=\"col-md-8\">\r\n                  <div class=\"col-md-1\"></div>\r\n                  <div class=\"col-md-11\">\r\n                    <div class=\"row\"><label><h3><b>{{'instrucciones' | translate}}</b></h3></label></div>\r\n                    <div class=\"row\">\r\n                      <label>{{'instruccionesRetencion' | translate}}</label>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                      <label><i class=\"material-icons\" style=\"font-size: 10px\">play_arrow</i>\r\n                        &nbsp; {{'regla1Retencion' | translate}}\r\n                      </label>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                      <label><i class=\"material-icons\" style=\"font-size: 10px\">play_arrow</i>\r\n                        &nbsp; {{'regla2Retencion' | translate}}\r\n                      </label>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                      <label><i class=\"material-icons\" style=\"font-size: 10px\">play_arrow</i>\r\n                        &nbsp; {{'regla3Retencion' | translate}}\r\n                      </label>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-md-4\">\r\n                  <div class=\"row\" style=\"text-align: center\">\r\n                    <div class=\"center-block\">\r\n                      <label><h3><b>{{'formato' | translate}}</b></h3></label>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"row\" style=\"text-align: center\">\r\n                    <div class=\"center-block\">\r\n                      <button class=\"btn btn-default btn-simple \"><i class=\"material-icons\"\r\n                                                                               style=\"font-size: 75px\">file_download</i>\r\n                      </button>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col-md-1\"></div>\r\n                <div class=\"col-md-11\">\r\n                  <div class=\"row\">\r\n                    <div class=\"col-md-3\"><label><h4><b>{{'seleccioneArchivo' | translate}}</b></h4></label></div>\r\n                    <div class=\"fileinput fileinput-new text-center\" data-provides=\"fileinput\">\r\n                      <div class=\"row\">\r\n                        <div>\r\n                                  <span class=\"btn btn-file btn-default blue\">\r\n                                      <span class=\"fileinput-new\">{{'seleccioneArchivo' | translate}}</span>\r\n                                      <span class=\"fileinput-exists\">{{'cambiar' | translate}}</span>\r\n                                      <input type=\"file\" name=\"...\"\r\n                                             [(ngModel)] = \"archivo\"\r\n                                             archivoDirectiva\r\n                                             #archivo1 = \"ngModel\"\r\n                                      />\r\n                                  </span>\r\n                          <a class=\"btn btn-danger fileinput-exists\" data-dismiss=\"fileinput\"><i\r\n                            class=\"fa fa-times\"></i> {{'eliminar' | translate}}</a>\r\n                        </div>\r\n                        <div class=\"fileinput-preview fileinput-exists\"></div>\r\n                        <div class=\"fileinput-new\">\r\n                          <label>{{'ningunArchivoSeleccionado' | translate}}</label>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"row\">\r\n                        <span style=\"color: red\" *ngIf=\"archivo1.invalid\">\r\n                          <strong *ngIf=\"archivo1.errors.tipo\">\r\n                            {{archivo1.errors.tipo}}\r\n                          </strong>\r\n                          <br>\r\n                          <strong *ngIf=\"archivo1.errors.tamanio\">\r\n                            {{archivo1.errors.tamanio}}\r\n                          </strong>\r\n                        </span>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col-md-12\" align=\"right\">\r\n                  <button type=\"submit\" class=\"btn btn-default\" (click)=\"cargarmasiva()\">{{'cargar' | translate}}</button>\r\n                </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"card\">\r\n                  <div class=\"card-content\">\r\n                    <app-data-table #tablamasiva\r\n                                    [id]=\"'tabla2'\"\r\n                                    [cabecera]=\"cabeceramasiva\"\r\n                                    [atributos]=\"atributosmasiva\"\r\n                                    [acciones]=\"AccionesMasiva\"\r\n                                    [tipoAccion]=\"tipomasiva\"\r\n                                    [habilitarAcciones]=\"true\"\r\n                                    (accion)=\"ejecutarAccionMasiva($event)\"\r\n                                    ></app-data-table>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/facturacion-electronica/percepcion-retencion/percepcion-retencion-crear/percepcion-retencion-crear.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PercepcionRetencionCrearComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__general_data_table_utils_accion__ = __webpack_require__("../../../../../src/app/facturacion-electronica/general/data-table/utils/accion.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__general_data_table_utils_tipo_accion__ = __webpack_require__("../../../../../src/app/facturacion-electronica/general/data-table/utils/tipo-accion.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__general_data_table_data_table_component__ = __webpack_require__("../../../../../src/app/facturacion-electronica/general/data-table/data-table.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__models_retencionebiz__ = __webpack_require__("../../../../../src/app/facturacion-electronica/percepcion-retencion/models/retencionebiz.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__general_data_table_utils_modo_vista_accion__ = __webpack_require__("../../../../../src/app/facturacion-electronica/general/data-table/utils/modo-vista-accion.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_persistencia_service__ = __webpack_require__("../../../../../src/app/facturacion-electronica/percepcion-retencion/services/persistencia.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__models_retencionmasivaebiz__ = __webpack_require__("../../../../../src/app/facturacion-electronica/percepcion-retencion/models/retencionmasivaebiz.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__models_retencion_cabecera__ = __webpack_require__("../../../../../src/app/facturacion-electronica/percepcion-retencion/models/retencion-cabecera.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_retencionpersiscabecera_service__ = __webpack_require__("../../../../../src/app/facturacion-electronica/percepcion-retencion/services/retencionpersiscabecera.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__models_principal_retencion__ = __webpack_require__("../../../../../src/app/facturacion-electronica/percepcion-retencion/models/principal-retencion.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__general_utils_estadoArchivo_service__ = __webpack_require__("../../../../../src/app/facturacion-electronica/general/utils/estadoArchivo.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__general_services_organizacion_entidad_service__ = __webpack_require__("../../../../../src/app/facturacion-electronica/general/services/organizacion/entidad.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__general_models_organizacion_entidad__ = __webpack_require__("../../../../../src/app/facturacion-electronica/general/models/organizacion/entidad.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
















var PercepcionRetencionCrearComponent = (function () {
    // Fin Data Table SuperSayayin Retencion Unitaria Y Masiva//
    function PercepcionRetencionCrearComponent(route, router, persistenciaService, RetencionCabecerapersistenciaService, _estadoArchivo, _entidadServices) {
        this.route = route;
        this.router = router;
        this.persistenciaService = persistenciaService;
        this.RetencionCabecerapersistenciaService = RetencionCabecerapersistenciaService;
        this._estadoArchivo = _estadoArchivo;
        this._entidadServices = _entidadServices;
        this.series = [];
        this.entidad = new __WEBPACK_IMPORTED_MODULE_15__general_models_organizacion_entidad__["a" /* Entidad */]();
        // Data Table SuperSayayin Retencion Unitaria y MASIVA //
        this.cabecera = [];
        this.atributos = [];
        this.tipo = __WEBPACK_IMPORTED_MODULE_7__general_data_table_utils_modo_vista_accion__["a" /* ModoVistaAccion */].ICONOS;
        this.AccionesPrueba = [
            new __WEBPACK_IMPORTED_MODULE_3__general_data_table_utils_accion__["a" /* Accion */]('editar', new __WEBPACK_IMPORTED_MODULE_3__general_data_table_utils_accion__["c" /* Icono */]('visibility', 'btn-info'), __WEBPACK_IMPORTED_MODULE_4__general_data_table_utils_tipo_accion__["a" /* TipoAccion */].EDITAR),
        ];
        // -----*----- //
        this.cabeceramasiva = [];
        this.atributosmasiva = [];
        this.tipomasiva = __WEBPACK_IMPORTED_MODULE_7__general_data_table_utils_modo_vista_accion__["a" /* ModoVistaAccion */].ICONOS;
        this.AccionesMasiva = [
            new __WEBPACK_IMPORTED_MODULE_3__general_data_table_utils_accion__["a" /* Accion */]('Visualizar', new __WEBPACK_IMPORTED_MODULE_3__general_data_table_utils_accion__["c" /* Icono */]('visibility', 'btn-info'), __WEBPACK_IMPORTED_MODULE_4__general_data_table_utils_tipo_accion__["a" /* TipoAccion */].VISUALIZAR)
        ];
        this.retencioncab = new __WEBPACK_IMPORTED_MODULE_10__models_retencion_cabecera__["a" /* RetencionCabecera */]();
        this.retencion_principal = new __WEBPACK_IMPORTED_MODULE_12__models_principal_retencion__["a" /* PrincipalRetencion */]();
        this.total_retencion = 0;
        // RETENCION UNITARIA
        this.listaitems = [];
        this.cabecera = ['tipo', 'serie', 'numeroCorrelativo', 'fechaEmision', 'Moneda Origen', 'importeTotal', 'importeTotalsoles', 'importeRetencionsoles'];
        this.atributos = ['tipoDocumentoDestinoDescripcion', 'serieDocumentoDestino', 'correlativoDocumentoDestino', 'fechaEmisionDestino', 'monedaDestino', 'totalImporteDestino', 'totalMonedaDestino', 'totalImporteAuxiliarDestino'];
        // RETENCION MASIVA
        this.listaitemsmasiva = [];
        this.cabeceramasiva = [
            'usuario', 'fecha', 'hora', 'nombreArchivo', 'tamañoArchivo',
            'ticket', 'estado'
        ];
        this.atributosmasiva = ['usuario', 'fecha', 'hora', 'nombrearchivo', 'tamañoarchivo', 'ticket',
            'estado'];
    }
    // Ciclo de Vida Angular //
    PercepcionRetencionCrearComponent.prototype.ngOnInit = function () {
        this.initForm();
        this.cargarProductoEditarLleno();
    };
    PercepcionRetencionCrearComponent.prototype.busquedaruc = function (event) {
        var _this = this;
        if (event.keyCode == 13) {
            if (this.productFormGroup.get('txtruc').value.length == 11) {
                var listaEntidades = this._entidadServices.buscarPorRuc(this.productFormGroup.get('txtruc').value);
                console.log(listaEntidades);
                if (listaEntidades != null) {
                    listaEntidades.subscribe(function (data) {
                        _this.entidad = data ? data : new __WEBPACK_IMPORTED_MODULE_15__general_models_organizacion_entidad__["a" /* Entidad */]();
                        _this.productFormGroup.controls['txtrazonsocial'].setValue(_this.entidad.vcDenominacion);
                        setTimeout(function () {
                            $('input').each(function () {
                                $(this.parentElement).removeClass('is-empty');
                            });
                        }, 200);
                    });
                }
                else {
                    swal('Oops...', 'Something went wrong!', 'error');
                }
            }
        }
    };
    PercepcionRetencionCrearComponent.prototype.ngOnDestroy = function () {
    };
    // FUNCIONES //
    PercepcionRetencionCrearComponent.prototype.iniciarData = function (event) {
        this.total_retencion = 0;
        this.listaitems = this.persistenciaService.getListaProductos();
        this.tabla.insertarData(this.listaitems);
        for (var i = 0; i < this.listaitems.length; i++) {
            this.total_retencion += Number(this.listaitems[i].totalImporteAuxiliarDestino);
        }
        this.productFormGroup.get('txttotal').setValue(parseFloat(this.total_retencion.toString()).toFixed(2));
    };
    PercepcionRetencionCrearComponent.prototype.cargarProductoEditarLleno = function () {
        var cabecera = new __WEBPACK_IMPORTED_MODULE_10__models_retencion_cabecera__["a" /* RetencionCabecera */]();
        cabecera = this.RetencionCabecerapersistenciaService.getCabeceraRetencion();
        console.log('SADASDASDASDASDASDASDASD DENTRO IF');
        console.log(cabecera);
        if (cabecera) {
            this.retencioncabedit = this.RetencionCabecerapersistenciaService.getCabeceraRetencion();
            this.productFormGroup.controls['cmbserie'].setValue(this.retencioncabedit.idserie);
            this.productFormGroup.controls['txtruc'].setValue(this.retencioncabedit.rucProveedor);
            this.productFormGroup.controls['txtrazonsocial'].setValue(this.retencioncabedit.razonSocialProveedor);
            this.productFormGroup.controls['txtobservacion'].setValue(this.retencioncabedit.observacionComprobante);
            this.productFormGroup.controls['datefechapago'].setValue(this.retencioncabedit.fecPago);
            setTimeout(function () {
                $('select').each(function () {
                    $(this.parentElement).removeClass('is-empty');
                });
            }, 200);
        }
        console.log('CARGAR FUERA IF');
        console.log(this.retencioncabedit);
    };
    PercepcionRetencionCrearComponent.prototype.cargarmasiva = function () {
        var _this = this;
        swal({
            title: '¿Está Seguro?',
            html: '<div class="text-center"> Desea cargar el/los archivos(s).  </div>',
            padding: '20',
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: 'SI',
            cancelButtonText: 'NO',
            confirmButtonClass: 'btn btn-success',
            cancelButtonClass: 'btn btn-danger',
            buttonsStyling: false
        })
            .catch(function (result) { return console.log('CANCEL'); })
            .then(function (result) {
            // Falta validar como mostrar los estados del archivo
            _this.cargarMasivaArchivo();
            swal({
                title: 'Acción Exitosa',
                html: '<div class="text-center"> Archivo(s) Cargado(s). </div>',
                type: 'success',
                confirmButtonClass: 'btn btn-success',
                buttonsStyling: false,
            });
        });
    };
    PercepcionRetencionCrearComponent.prototype.cargarMasivaArchivo = function () {
        this.listaitemsmasiva = [
            new __WEBPACK_IMPORTED_MODULE_9__models_retencionmasivaebiz__["a" /* Retencionmasivaebiz */]()
        ];
        this.listaitemsmasiva[0].id = 0;
        this.listaitemsmasiva[0].codigo = '1';
        this.listaitemsmasiva[0].usuario = 'DOOOON OMAR';
        this.listaitemsmasiva[0].fecha = new Date();
        this.listaitemsmasiva[0].hora = new Date();
        this.listaitemsmasiva[0].nombrearchivo = 'KING OF KING';
        this.listaitemsmasiva[0].tamañoarchivo = '123';
        this.listaitemsmasiva[0].ticket = '100';
        this.listaitemsmasiva[0].estadoId = 1;
        this.listaitemsmasiva[0].estado = this.setEstadoTicketRetencionMasiva(0);
        this.tablamasiva.insertarData(this.listaitemsmasiva);
    };
    PercepcionRetencionCrearComponent.prototype.setEstadoTicketRetencionMasiva = function (posicion) {
        switch (this.listaitemsmasiva[posicion].estadoId) {
            case this._estadoArchivo.TIPO_ESTADO_ARCHIVO_PROCESADO:
                return this._estadoArchivo.TIPO_ESTADO_ARCHIVO_PROCESADO_NOMBRE;
            case this._estadoArchivo.TIPO_ESTADO_ARCHIVO_CON_ERROR:
                this.listaitemsmasiva[posicion].ticket = '-';
                return this._estadoArchivo.TIPO_ESTADO_ARCHIVO_CON_ERROR_NOMBRE;
            case this._estadoArchivo.TIPO_ESTADO_ARCHIVO_EN_PROCESO:
                return this._estadoArchivo.TIPO_ESTADO_ARCHIVO_EN_PROCESO_NOMBRE;
        }
    };
    PercepcionRetencionCrearComponent.prototype.vistaprevia = function () {
        this.fillProducto();
        this.RetencionCabecerapersistenciaService.setCabeceraRetencion(this.retencioncab);
        this.router.navigateByUrl('percepcion-retencion/crear/vista-previa');
    };
    PercepcionRetencionCrearComponent.prototype.initForm = function () {
        var fecha = new Date();
        var fecha_actual = fecha.getDate().toString() + '/' + fecha.getMonth().toString() + '/' + fecha.getFullYear().toString();
        this.productFormGroup = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormGroup */]({
            'cmbserie': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('' /*, [Validators.required]*/),
            'txtruc': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', [
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].pattern('[0-9]{11}'),
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].minLength(11),
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].maxLength(11)
            ]),
            'txtrazonsocial': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required]),
            'txttipomoneda': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]({ value: 'SOLES', disabled: true }),
            'txtobservacion': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].maxLength(500)]),
            'datefechapago': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](fecha_actual, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required]),
            'txttotal': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]({ value: this.total_retencion, disabled: false }, [
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].min(0.01), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].minLength(3)
            ])
        });
    };
    PercepcionRetencionCrearComponent.prototype.limpiar = function ($event) {
        this.productFormGroup.reset();
    };
    PercepcionRetencionCrearComponent.prototype.filtro = function ($event) {
        this.fillProducto();
    };
    PercepcionRetencionCrearComponent.prototype.fillProducto = function () {
        var _this = this;
        this.retencioncab.idserie = this.productFormGroup.get('cmbserie').value;
        var indexSerie = this.series.findIndex(function (element) { return element.id == _this.productFormGroup.get('cmbserie').value; });
        this.retencioncab.serie = indexSerie == -1 ? '' : this.series[indexSerie].serie;
        this.retencioncab.rucProveedor = this.productFormGroup.get('txtruc').value;
        this.retencioncab.razonSocialProveedor = this.productFormGroup.get('txtrazonsocial').value;
        this.retencioncab.fecPago = this.productFormGroup.get('datefechapago').value;
        this.retencioncab.moneda = this.productFormGroup.get('txttipomoneda').value;
        this.retencioncab.observacionComprobante = this.productFormGroup.get('txtobservacion').value;
        this.retencioncab.total = this.productFormGroup.get('txttotal').value;
        console.log(this.retencioncab);
    };
    PercepcionRetencionCrearComponent.prototype.eliminar = function (elementos) {
        this.persistenciaService.setListaProductos(elementos);
        this.total_retencion = 0;
        this.listaitems = this.persistenciaService.getListaProductos();
        for (var i = 0; i < this.listaitems.length; i++) {
            this.total_retencion += Number(this.listaitems[i].totalImporteAuxiliarDestino);
        }
        this.productFormGroup.get('txttotal').setValue(parseFloat(this.total_retencion.toString()).toFixed(2));
    };
    PercepcionRetencionCrearComponent.prototype.agregarItem = function (agrego) {
        this.fillProducto();
        this.RetencionCabecerapersistenciaService.setCabeceraRetencion(this.retencioncab);
        this.router.navigateByUrl('percepcion-retencion/crear/agregar-item');
    };
    PercepcionRetencionCrearComponent.prototype.ejecutarAccion = function (evento) {
        var tipoAccion = evento[0];
        var producto = new __WEBPACK_IMPORTED_MODULE_6__models_retencionebiz__["a" /* Retencionebiz */]();
        producto = evento[1];
        switch (tipoAccion) {
            case __WEBPACK_IMPORTED_MODULE_4__general_data_table_utils_tipo_accion__["a" /* TipoAccion */].ELIMINAR:
                break;
            case __WEBPACK_IMPORTED_MODULE_4__general_data_table_utils_tipo_accion__["a" /* TipoAccion */].EDITAR:
                this.router.navigate(['percepcion-retencion/crear/editar-item', producto.id]);
                this.fillProducto();
                this.RetencionCabecerapersistenciaService.setCabeceraRetencion(this.retencioncab);
                break;
        }
    };
    PercepcionRetencionCrearComponent.prototype.ejecutarAccionMasiva = function (evento) {
        var tipoAccion = evento[0];
        var retencion = new __WEBPACK_IMPORTED_MODULE_9__models_retencionmasivaebiz__["a" /* Retencionmasivaebiz */]();
        retencion = evento[1];
        switch (tipoAccion) {
            case __WEBPACK_IMPORTED_MODULE_4__general_data_table_utils_tipo_accion__["a" /* TipoAccion */].VISUALIZAR:
                console.log('REDIRIGIR VISTA PREVIA RETENCION');
                this.router.navigate(['percepcion-retencion/retencion-masiva/detalle', retencion.codigo]);
        }
    };
    return PercepcionRetencionCrearComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('tablaNormal'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5__general_data_table_data_table_component__["a" /* DataTableComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__general_data_table_data_table_component__["a" /* DataTableComponent */]) === "function" && _a || Object)
], PercepcionRetencionCrearComponent.prototype, "tabla", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('tablamasiva'),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__general_data_table_data_table_component__["a" /* DataTableComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__general_data_table_data_table_component__["a" /* DataTableComponent */]) === "function" && _b || Object)
], PercepcionRetencionCrearComponent.prototype, "tablamasiva", void 0);
PercepcionRetencionCrearComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-percepcion-retencion-crear',
        template: __webpack_require__("../../../../../src/app/facturacion-electronica/percepcion-retencion/percepcion-retencion-crear/percepcion-retencion-crear.component.html"),
        styles: [__webpack_require__("../../../../../src/app/facturacion-electronica/percepcion-retencion/percepcion-retencion-crear/percepcion-retencion-crear.css")]
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_8__services_persistencia_service__["a" /* PersistenciaServiceRetencion */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__services_persistencia_service__["a" /* PersistenciaServiceRetencion */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_11__services_retencionpersiscabecera_service__["a" /* RetencionpersiscabeceraService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_11__services_retencionpersiscabecera_service__["a" /* RetencionpersiscabeceraService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_13__general_utils_estadoArchivo_service__["a" /* EstadoArchivoService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_13__general_utils_estadoArchivo_service__["a" /* EstadoArchivoService */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_14__general_services_organizacion_entidad_service__["a" /* EntidadService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_14__general_services_organizacion_entidad_service__["a" /* EntidadService */]) === "function" && _h || Object])
], PercepcionRetencionCrearComponent);

var _a, _b, _c, _d, _e, _f, _g, _h;
//# sourceMappingURL=percepcion-retencion-crear.component.js.map

/***/ }),

/***/ "../../../../../src/app/facturacion-electronica/percepcion-retencion/percepcion-retencion-crear/percepcion-retencion-crear.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "input.ng-invalid.ng-touched,\r\nmat-select.ng-invalid.ng-touched{\r\n  border-bottom: 1px solid red;\r\n}\r\nmat-select{\r\n  border-bottom: 1px solid #AAAAAA;\r\n}\r\ndiv.row{\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n}\r\n\r\n.control-label {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n}\r\n\r\n.text-danger{\r\n  font-size: 11px;\r\n  font-weight: 700;\r\n}\r\n.navbar.navbar-info {\r\n  margin: 0 15px;\r\n}\r\n.btn.btn-default.btn-simple{\r\n  color: #0079BF;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/facturacion-electronica/percepcion-retencion/percepcion-retencion-crear/retencion-masiva-detalle/retencion-masiva-detalle.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"row col-md-12\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header card-header-text\" data-background-color=\"blue\">\r\n          <h4 class=\"card-title\">{{'detalleRetencionEmitida' | translate}}</h4>\r\n        </div>\r\n        <div class=\"card-content\">\r\n          <div class=\"col-md-12\">\r\n            <div class=\"card\">\r\n              <div class=\"card-header card-header-text\"  data-background-color=\"blue\">\r\n                <h4 class=\"card-title\">{{'retencion' | translate}}</h4>\r\n              </div>\r\n              <div class=\"card-content\">\r\n                <div class=\"row\">\r\n                  <div class=\"col-md-12\">\r\n                    <div class=\"col-md-6\">\r\n                      <div class=\"row\"><label><h4>{{'retenciones' | translate}}</h4></label></div>\r\n                      <div class=\"row\"><h6><p class=\"text-info\"><b>Total: &nbsp; 22 </b></p></h6></div>\r\n                      <div class=\"row\"><h6><p class=\"text-danger\"><b>Erroneas: &nbsp; 5 </b></p></h6></div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                  <div class=\"col-md-12\">\r\n                    <div class=\"card\">\r\n                      <div class=\"card-header card-header-text\"  data-background-color=\"blue\">\r\n                        <h4 class=\"card-title\">{{'listaErrores' | translate}}</h4>\r\n                      </div>\r\n                      <div class=\"card-content\">\r\n                        <div class=\"material-datatables table-responsive\">\r\n                          <table id=\"dterrores\" class=\"table table-striped table-no-bordered table-hover\" cellspacing=\"0\"\r\n                                 width=\"100%\" style=\"width:100%\">\r\n                            <thead>\r\n                            <tr>\r\n                              <th>Fila</th>\r\n                              <th>Serie</th>\r\n                              <th>Numero</th>\r\n                              <th>Descripccion del Error</th>\r\n                            </thead>\r\n                          </table>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                  <div class=\"col-md-12\" align=\"right\">\r\n                    <button type=\"submit\" class=\"btn btn-info\" (click)=\"regresar()\"> {{'regresar' | translate}}  </button>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/facturacion-electronica/percepcion-retencion/percepcion-retencion-crear/retencion-masiva-detalle/retencion-masiva-detalle.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RetencionMasivaDetalleComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__general_utils_rutas_service__ = __webpack_require__("../../../../../src/app/facturacion-electronica/general/utils/rutas.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RetencionMasivaDetalleComponent = (function () {
    function RetencionMasivaDetalleComponent(route, router, _rutas) {
        this.route = route;
        this.router = router;
        this._rutas = _rutas;
        this.editMode = false;
    }
    RetencionMasivaDetalleComponent.prototype.ngOnInit = function () {
        this.initForm();
    };
    RetencionMasivaDetalleComponent.prototype.regresar = function () {
        this.router.navigateByUrl(this._rutas.URL_RETENCION_CREAR);
    };
    RetencionMasivaDetalleComponent.prototype.emitir = function () {
        this.router.navigateByUrl('percepcion-retencion/crear/emision');
    };
    RetencionMasivaDetalleComponent.prototype.ngOnDestroy = function () {
        // this.subscriptionTipoDocumentos.unsubscribe();
        // this.subscriptionSeries.unsubscribe();
    };
    RetencionMasivaDetalleComponent.prototype.initForm = function () {
        this.itemFormGroup = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormGroup */]({
            'tipodocumento': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](),
            'ncomprobante': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](),
            'monto': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](),
            'retencion': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](),
            'retencionxciento': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](),
        });
    };
    RetencionMasivaDetalleComponent.prototype.limpiar = function ($event) {
        this.itemFormGroup.reset();
    };
    RetencionMasivaDetalleComponent.prototype.filtro = function ($event) {
        this.fillProducto();
    };
    RetencionMasivaDetalleComponent.prototype.fillProducto = function () {
        //
        //
    };
    return RetencionMasivaDetalleComponent;
}());
RetencionMasivaDetalleComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-vistaprevia',
        template: __webpack_require__("../../../../../src/app/facturacion-electronica/percepcion-retencion/percepcion-retencion-crear/retencion-masiva-detalle/retencion-masiva-detalle.component.html"),
        styles: [__webpack_require__("../../../../../src/app/facturacion-electronica/percepcion-retencion/percepcion-retencion-crear/retencion-masiva-detalle/retencion-masiva-detalle.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__general_utils_rutas_service__["a" /* RutasService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__general_utils_rutas_service__["a" /* RutasService */]) === "function" && _c || Object])
], RetencionMasivaDetalleComponent);

var _a, _b, _c;
//# sourceMappingURL=retencion-masiva-detalle.component.js.map

/***/ }),

/***/ "../../../../../src/app/facturacion-electronica/percepcion-retencion/percepcion-retencion-crear/retencion-masiva-detalle/retencion-masiva-detalle.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "input.ng-invalid.ng-touched,\r\nmat-select.ng-invalid.ng-touched{\r\n  border-bottom: 1px solid red;\r\n}\r\nmat-select{\r\n  border-bottom: 1px solid #AAAAAA;\r\n}\r\ndiv.row{\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/facturacion-electronica/percepcion-retencion/percepcion-retencion-crear/vistaprevia-percepcion-retencion/vistaprevia-percepcion-retencion.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row col-md-12\">\r\n  <div class=\"card\">\r\n    <div class=\"card-header card-header-text\" data-background-color=\"blue\">\r\n      <h4 class=\"card-title\">{{'vistaPrevia' | translate}}</h4>\r\n    </div>\r\n    <div class=\"card-content\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-4\">\r\n          <label><h5><b>{{razonsocialemisor}}</b></h5></label>\r\n        </div>\r\n        <div class=\"col-md-4 col-md-offset-4\">\r\n          <div class=\"row\">\r\n            <div class=\"col-md-3\">\r\n              <label><h4><b>RUC N°:</b></h4></label>\r\n            </div>\r\n            <div class=\"col-md-6\">\r\n              <label><h5>{{rucremisor}}</h5></label>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-md-4\">\r\n          <label><h5><b>{{domiciliofiscalemisor}}</b></h5></label>\r\n        </div>\r\n        <div class=\"col-md-4 col-md-offset-4\">\r\n          <label><h3><b>RETENCION ELECTRONICA</b></h3></label>\r\n        </div>\r\n      </div>\r\n      <br>\r\n      <div class=\"row\">\r\n        <div class=\"col-md-3 col-md-offset-8\">\r\n          <div class=\"row\">\r\n            <div class=\"col-md-offset-4\">\r\n              <label><h3><b>Serie: </b>{{series}}</h3></label>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <br>\r\n      <div class=\"row\">\r\n        <div class=\"col-md-6\">\r\n          <div class=\"row\">\r\n            <div class=\"col-md-6\">\r\n              <label><b>Señor(es):</b></label>\r\n            </div>\r\n            <div class=\"col-md-6\">\r\n              <label>{{razonsocialreceptor}}</label>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-4 col-md-offset-2\">\r\n          <div class=\"row\">\r\n            <div class=\"col-md-6\">\r\n              <label><b>Tipo de Cambio:</b></label>\r\n            </div>\r\n            <div class=\"col-md-6\">\r\n              <label>{{tipocambio}}</label>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-md-6\">\r\n          <div class=\"row\">\r\n            <div class=\"col-md-6\">\r\n              <label><b>RUC:</b></label>\r\n            </div>\r\n            <div class=\"col-md-6\">\r\n              <label>{{rucreceptor}}</label>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-4 col-md-offset-2\">\r\n          <div class=\"row\">\r\n            <div class=\"col-md-6\">\r\n              <label><b>Banco</b></label>\r\n            </div>\r\n            <div class=\"col-md-6\">\r\n              <label>{{banco}}</label>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-md-6\">\r\n          <div class=\"row\">\r\n            <div class=\"col-md-6\">\r\n              <label><b>Domicilio Fiscal:</b></label>\r\n            </div>\r\n            <div class=\"col-md-6\">\r\n              <label>{{domiciliofiscalreceptor}}</label>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-md-6\">\r\n          <div class=\"row\">\r\n            <div class=\"col-md-6\">\r\n              <label><b>Fecha de Emisión:</b></label>\r\n            </div>\r\n            <div class=\"col-md-6\">\r\n              <label>{{fechaemisiones}}</label>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-md-6\">\r\n          <div class=\"row\">\r\n            <div class=\"col-md-6\">\r\n              <label><b>Tipo de Moneda:</b></label>\r\n            </div>\r\n            <div class=\"col-md-6\">\r\n              <label>{{tipo_moneda}}</label>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <br>\r\n      <app-data-table (iniciarData)=\"iniciarData($event)\"\r\n                      #tablaNormal [idTabla]=\"'tabla1'\"\r\n                      [cabecera]=\"cabecera\"\r\n                      [atributos]=\"atributos\"></app-data-table>\r\n      <br>\r\n      <br>\r\n      <div class=\"row\">\r\n        <div class=\"col-md-2 col-md-offset-5\">\r\n          <label><b>Total Importe:</b></label>\r\n        </div>\r\n        <div class=\"col-md-5\">\r\n          <label>{{total_importe}}</label>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-md-2 col-md-offset-5\">\r\n          <label><b>Total Importe Retención:</b></label>\r\n        </div>\r\n        <div class=\"col-md-5\">\r\n          <label>{{totales}}</label>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-md-2 col-md-offset-5\">\r\n          <label><b>Son:</b></label>\r\n        </div>\r\n        <div class=\"col-md-5\">\r\n          <label>{{totalespalabaras | uppercase}}</label>\r\n        </div>\r\n      </div>\r\n      <br>\r\n      <br>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12\" align=\"right\">\r\n        <button name=\"btnregresar\" type=\"button\" class=\"btn btn-default\" style=\"right: 15px;\" (click)=\"regresar()\">Regresar </button>\r\n        <button name=\"btnemitir\" type=\"button\" class=\"btn btn-default\" style=\"right: 15px;\" (click)=\"emitir()\">Emitir </button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/facturacion-electronica/percepcion-retencion/percepcion-retencion-crear/vistaprevia-percepcion-retencion/vistaprevia-percepcion-retencion.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VistapreviaPercepcionRetencionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__general_data_table_data_table_component__ = __webpack_require__("../../../../../src/app/facturacion-electronica/general/data-table/data-table.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_persistencia_service__ = __webpack_require__("../../../../../src/app/facturacion-electronica/percepcion-retencion/services/persistencia.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_retencionpersiscabecera_service__ = __webpack_require__("../../../../../src/app/facturacion-electronica/percepcion-retencion/services/retencionpersiscabecera.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_written_number__ = __webpack_require__("../../../../written-number/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_written_number___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_written_number__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__models_principal_retencion__ = __webpack_require__("../../../../../src/app/facturacion-electronica/percepcion-retencion/models/principal-retencion.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var VistapreviaPercepcionRetencionComponent = (function () {
    function VistapreviaPercepcionRetencionComponent(route, router, persistenciaService, RetencionCabecerapersistenciaService) {
        this.route = route;
        this.router = router;
        this.persistenciaService = persistenciaService;
        this.RetencionCabecerapersistenciaService = RetencionCabecerapersistenciaService;
        this.cabecera = [];
        this.atributos = [];
        this.retencion_principal = new __WEBPACK_IMPORTED_MODULE_6__models_principal_retencion__["a" /* PrincipalRetencion */]();
        this.listaitems = [];
        this.cabecera = ['tipo', 'serie', 'numeroCorrelativo', 'fechaEmision', 'Moneda Origen', 'importeTotal', 'importeTotalsoles', 'importeRetencionsoles', 'Nro Doc ERP'];
        this.atributos = ['tipoDocumentoDestinoDescripcion', 'serieDocumentoDestino', 'correlativoDocumentoDestino', 'fechaEmisionDestino', 'monedaDestino', 'totalImporteDestino', 'totalMonedaDestino', 'totalImporteAuxiliarDestino', 'numdocerp'];
    }
    VistapreviaPercepcionRetencionComponent.prototype.ngOnInit = function () {
        this.retencioncab = this.RetencionCabecerapersistenciaService.getCabeceraRetencion();
        this.total_importe = 0;
        this.listaitems = this.persistenciaService.getListaProductos();
        for (var i = 0; i < this.listaitems.length; i++) {
            this.total_importe += Number(this.listaitems[i].totalImporteDestino);
        }
        var arr = this.retencioncab.total.toString().split('.');
        var entero = arr[0];
        var decimal = arr[1];
        this.rucreceptor = this.retencioncab.rucProveedor;
        this.razonsocialreceptor = this.retencioncab.razonSocialProveedor;
        this.domiciliofiscalreceptor = 'Av. Falta este Dato Nº 666 Int No lo encuentro';
        this.fechaemisiones = this.retencioncab.fecPago;
        this.totales = this.retencioncab.total;
        this.total_importe = Number(parseFloat(this.total_importe.toString()).toFixed(2));
        this.tipo_moneda = this.retencioncab.moneda.toString();
        this.totalespalabaras = (__WEBPACK_IMPORTED_MODULE_5_written_number__(Number(entero), { lang: 'es' }) + ' ' + this.tipo_moneda + ' CON ' + __WEBPACK_IMPORTED_MODULE_5_written_number__(Number(decimal), { lang: 'es' }) + ' CENTÍMOS.');
        this.tipocambio = '';
        this.banco = '';
        this.rucremisor = '1234567897878789';
        this.razonsocialemisor = 'RAZON SOCIAL EMISOR';
        this.domiciliofiscalemisor = 'DOMICILIO FISCAL EMISOR';
        this.series = this.retencioncab.serie;
        this.armarjson();
    };
    VistapreviaPercepcionRetencionComponent.prototype.regresar = function () {
        this.router.navigateByUrl('percepcion-retencion/crear-retencion');
    };
    VistapreviaPercepcionRetencionComponent.prototype.armarjson = function () {
        this.retencion_principal.id = 0;
        this.retencion_principal.numeroComprobante = this.retencioncab.serie;
        this.retencion_principal.idProveedor = 0;
        this.retencion_principal.idOrganizacionCompradora = 0;
        this.retencion_principal.rucProveedor = this.retencioncab.rucProveedor;
        this.retencion_principal.rucComprador = this.retencioncab.rucComprador;
        this.retencion_principal.estadoComprobante = this.retencioncab.estadoComprobante;
        this.retencion_principal.idUsuarioCreacion = this.retencioncab.idUsuarioCreacion;
        this.retencion_principal.idUsuarioModificacion = this.retencioncab.idUsuarioModificacion;
        this.retencion_principal.razonSocialComprador = this.retencioncab.razonSocialComprador;
        this.retencion_principal.razonSocialProveedor = this.retencioncab.razonSocialProveedor;
        this.retencion_principal.moneda = this.retencioncab.moneda;
        this.retencion_principal.fechaCreacion = this.retencioncab.fecPago;
        this.retencion_principal.fechaRegistro = this.retencioncab.fecPago;
        this.retencion_principal.fechaEmision = this.retencioncab.fecPago;
        this.retencion_principal.observacionComprobante = this.retencioncab.observacionComprobante;
        this.retencion_principal.tipoComprobante = 'RETENCION';
        this.retencion_principal.estado = 'PENDIENTE';
        this.retencion_principal.version = '1';
        this.retencion_principal.montoComprobante = 0;
        this.retencion_principal.montoPagado = 0;
        this.retencion_principal.montoDescuento = this.retencioncab.total;
        this.retencion_principal.totalComprobante = 0;
        this.retencion_principal.documentoReferencia = this.persistenciaService.getListaProductos();
        console.log(this.retencion_principal);
    };
    VistapreviaPercepcionRetencionComponent.prototype.emitir = function () {
        this.armarjson();
        console.log(this.retencion_principal);
        this.router.navigateByUrl('percepcion-retencion/crear/emision');
    };
    VistapreviaPercepcionRetencionComponent.prototype.iniciarData = function (event) {
        this.listaitems = this.persistenciaService.getListaProductos();
        this.tabla.insertarData(this.listaitems);
    };
    return VistapreviaPercepcionRetencionComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('tablaNormal'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__general_data_table_data_table_component__["a" /* DataTableComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__general_data_table_data_table_component__["a" /* DataTableComponent */]) === "function" && _a || Object)
], VistapreviaPercepcionRetencionComponent.prototype, "tabla", void 0);
VistapreviaPercepcionRetencionComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-vistaprevia',
        template: __webpack_require__("../../../../../src/app/facturacion-electronica/percepcion-retencion/percepcion-retencion-crear/vistaprevia-percepcion-retencion/vistaprevia-percepcion-retencion.component.html"),
        styles: [__webpack_require__("../../../../../src/app/facturacion-electronica/percepcion-retencion/percepcion-retencion-crear/vistaprevia-percepcion-retencion/vistaprevia-percepcion-retencion.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_persistencia_service__["a" /* PersistenciaServiceRetencion */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_persistencia_service__["a" /* PersistenciaServiceRetencion */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__services_retencionpersiscabecera_service__["a" /* RetencionpersiscabeceraService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_retencionpersiscabecera_service__["a" /* RetencionpersiscabeceraService */]) === "function" && _e || Object])
], VistapreviaPercepcionRetencionComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=vistaprevia-percepcion-retencion.component.js.map

/***/ }),

/***/ "../../../../../src/app/facturacion-electronica/percepcion-retencion/percepcion-retencion-crear/vistaprevia-percepcion-retencion/vistaprevia-percepcion-retencion.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/facturacion-electronica/percepcion-retencion/percepcion-retencion.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/facturacion-electronica/percepcion-retencion/percepcion-retencion.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-12\">\r\n        <div class=\"card\">\r\n          <div class=\"card-header card-header-text\" data-background-color=\"blue\">\r\n            <h4 class=\"card-title\">{{titulo | translate}}</h4>\r\n          </div>\r\n          <div class=\"card-content\">\r\n            <div class=\"row\">\r\n              <div class=\"col-xs-12 col-sm-3 col-md-3 col-lg-2\">\r\n                <select name=\"cmbTiposComprobante\" class=\"form-control\" (change)=\"cargarComprobante()\"\r\n                        [(ngModel)]=\"RPSeleccionado\"\r\n                        [disabled]=\"!mostrarCombo\">\r\n                  <option *ngFor=\"let tipoRp of tiposRP.TipoRPs\" [ngValue]=\"tipoRp\"> {{tipoRp.descripcion | translate}} </option>\r\n                </select>\r\n              </div>\r\n            </div>\r\n              <router-outlet></router-outlet>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/facturacion-electronica/percepcion-retencion/percepcion-retencion.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PercepcionRetencionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_tipo_rp__ = __webpack_require__("../../../../../src/app/facturacion-electronica/percepcion-retencion/models/tipo-rp.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PercepcionRetencionComponent = (function () {
    function PercepcionRetencionComponent(router, route) {
        this.router = router;
        this.route = route;
        this.titulo = 'crearComprobantes';
        this.tiposRP = new __WEBPACK_IMPORTED_MODULE_1__models_tipo_rp__["a" /* TipoRPs */]();
        this.mostrarCombo = true;
        this.RPSeleccionado = this.tiposRP.getRetencion();
    }
    PercepcionRetencionComponent.prototype.ngOnInit = function () {
        this.cargarDataRutaComponente();
    };
    PercepcionRetencionComponent.prototype.ngDoCheck = function () {
        this.cargarDataRutaComponente();
    };
    PercepcionRetencionComponent.prototype.cargarDataRutaComponente = function () {
        if (this.route.snapshot && this.route.snapshot.children[0]) {
            this.active = this.route.snapshot.children[0];
            if (this.active.data['codigo'])
                this.RPSeleccionado = this.tiposRP.get(this.active.data['codigo']);
            this.mostrarCombo = this.active.data['mostrarCombo'];
        }
    };
    PercepcionRetencionComponent.prototype.cargarComprobante = function () {
        this.navegarHacia(this.RPSeleccionado);
    };
    PercepcionRetencionComponent.prototype.navegarHacia = function (tipoRp) {
        var ruta = tipoRp.ruta;
        this.router.navigate([ruta,], { relativeTo: this.route });
    };
    return PercepcionRetencionComponent;
}());
PercepcionRetencionComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-percepcion-retencion',
        template: __webpack_require__("../../../../../src/app/facturacion-electronica/percepcion-retencion/percepcion-retencion.component.html"),
        styles: [__webpack_require__("../../../../../src/app/facturacion-electronica/percepcion-retencion/percepcion-retencion.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object])
], PercepcionRetencionComponent);

var _a, _b;
//# sourceMappingURL=percepcion-retencion.component.js.map

/***/ }),

/***/ "../../../../../src/app/facturacion-electronica/percepcion-retencion/percepcion-retencion.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PercepcionRetencionModule", function() { return PercepcionRetencionModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__directives_datepicker_module__ = __webpack_require__("../../../../../src/app/directives/datepicker.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__percepcion_retencion_component__ = __webpack_require__("../../../../../src/app/facturacion-electronica/percepcion-retencion/percepcion-retencion.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__percepcion_retencion_crear_percepcion_retencion_crear_component__ = __webpack_require__("../../../../../src/app/facturacion-electronica/percepcion-retencion/percepcion-retencion-crear/percepcion-retencion-crear.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__percepcion_retencion_routing_module__ = __webpack_require__("../../../../../src/app/facturacion-electronica/percepcion-retencion/percepcion-retencion.routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__percepcion_retencion_crear_item_crear_editar_item_crear_editar_component__ = __webpack_require__("../../../../../src/app/facturacion-electronica/percepcion-retencion/percepcion-retencion-crear/item-crear-editar/item-crear-editar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__percepcion_retencion_crear_vistaprevia_percepcion_retencion_vistaprevia_percepcion_retencion_component__ = __webpack_require__("../../../../../src/app/facturacion-electronica/percepcion-retencion/percepcion-retencion-crear/vistaprevia-percepcion-retencion/vistaprevia-percepcion-retencion.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__percepcion_retencion_crear_emision_percepcion_retencion_emision_percepcion_retencion_component__ = __webpack_require__("../../../../../src/app/facturacion-electronica/percepcion-retencion/percepcion-retencion-crear/emision-percepcion-retencion/emision-percepcion-retencion.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__percepcion_retencion_crear_retencion_masiva_detalle_retencion_masiva_detalle_component__ = __webpack_require__("../../../../../src/app/facturacion-electronica/percepcion-retencion/percepcion-retencion-crear/retencion-masiva-detalle/retencion-masiva-detalle.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__general_data_table_data_table_module__ = __webpack_require__("../../../../../src/app/facturacion-electronica/general/data-table/data-table.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_persistencia_service__ = __webpack_require__("../../../../../src/app/facturacion-electronica/percepcion-retencion/services/persistencia.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__general_pdf_viewer_pdf_viewer_module__ = __webpack_require__("../../../../../src/app/facturacion-electronica/general/pdf-viewer/pdf-viewer.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__general_consulta_consulta_module__ = __webpack_require__("../../../../../src/app/facturacion-electronica/general/consulta/consulta.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ngx_translate_core__ = __webpack_require__("../../../../@ngx-translate/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__services_retencionpersiscabecera_service__ = __webpack_require__("../../../../../src/app/facturacion-electronica/percepcion-retencion/services/retencionpersiscabecera.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__general_directivas_directivas_module__ = __webpack_require__("../../../../../src/app/facturacion-electronica/general/directivas/directivas.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__general_utils_estadoArchivo_service__ = __webpack_require__("../../../../../src/app/facturacion-electronica/general/utils/estadoArchivo.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





















var PercepcionRetencionModule = (function () {
    function PercepcionRetencionModule() {
    }
    return PercepcionRetencionModule;
}());
PercepcionRetencionModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_8__percepcion_retencion_routing_module__["a" /* PercepcionRetencionRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["c" /* HttpClientModule */],
            __WEBPACK_IMPORTED_MODULE_5__directives_datepicker_module__["a" /* A2Edatetimepicker */],
            __WEBPACK_IMPORTED_MODULE_15__general_pdf_viewer_pdf_viewer_module__["a" /* PdfViewerModule */],
            __WEBPACK_IMPORTED_MODULE_13__general_data_table_data_table_module__["a" /* DataTableModule */],
            __WEBPACK_IMPORTED_MODULE_16__general_consulta_consulta_module__["a" /* ConsultaModule */],
            __WEBPACK_IMPORTED_MODULE_17__ngx_translate_core__["b" /* TranslateModule */],
            __WEBPACK_IMPORTED_MODULE_19__general_directivas_directivas_module__["a" /* DirectivasModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__percepcion_retencion_component__["a" /* PercepcionRetencionComponent */],
            __WEBPACK_IMPORTED_MODULE_7__percepcion_retencion_crear_percepcion_retencion_crear_component__["a" /* PercepcionRetencionCrearComponent */],
            __WEBPACK_IMPORTED_MODULE_9__percepcion_retencion_crear_item_crear_editar_item_crear_editar_component__["a" /* ItemCrearEditarComponent */],
            __WEBPACK_IMPORTED_MODULE_10__percepcion_retencion_crear_vistaprevia_percepcion_retencion_vistaprevia_percepcion_retencion_component__["a" /* VistapreviaPercepcionRetencionComponent */],
            __WEBPACK_IMPORTED_MODULE_11__percepcion_retencion_crear_emision_percepcion_retencion_emision_percepcion_retencion_component__["a" /* EmisionPercepcionRetencionComponent */],
            __WEBPACK_IMPORTED_MODULE_12__percepcion_retencion_crear_retencion_masiva_detalle_retencion_masiva_detalle_component__["a" /* RetencionMasivaDetalleComponent */],
            __WEBPACK_IMPORTED_MODULE_12__percepcion_retencion_crear_retencion_masiva_detalle_retencion_masiva_detalle_component__["a" /* RetencionMasivaDetalleComponent */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_14__services_persistencia_service__["a" /* PersistenciaServiceRetencion */],
            __WEBPACK_IMPORTED_MODULE_18__services_retencionpersiscabecera_service__["a" /* RetencionpersiscabeceraService */],
            __WEBPACK_IMPORTED_MODULE_20__general_utils_estadoArchivo_service__["a" /* EstadoArchivoService */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_6__percepcion_retencion_component__["a" /* PercepcionRetencionComponent */]
        ]
    })
], PercepcionRetencionModule);

//# sourceMappingURL=percepcion-retencion.module.js.map

/***/ }),

/***/ "../../../../../src/app/facturacion-electronica/percepcion-retencion/percepcion-retencion.routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PercepcionRetencionRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__percepcion_retencion_crear_percepcion_retencion_crear_component__ = __webpack_require__("../../../../../src/app/facturacion-electronica/percepcion-retencion/percepcion-retencion-crear/percepcion-retencion-crear.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__percepcion_retencion_component__ = __webpack_require__("../../../../../src/app/facturacion-electronica/percepcion-retencion/percepcion-retencion.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__percepcion_retencion_crear_item_crear_editar_item_crear_editar_component__ = __webpack_require__("../../../../../src/app/facturacion-electronica/percepcion-retencion/percepcion-retencion-crear/item-crear-editar/item-crear-editar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__percepcion_retencion_crear_vistaprevia_percepcion_retencion_vistaprevia_percepcion_retencion_component__ = __webpack_require__("../../../../../src/app/facturacion-electronica/percepcion-retencion/percepcion-retencion-crear/vistaprevia-percepcion-retencion/vistaprevia-percepcion-retencion.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__percepcion_retencion_crear_emision_percepcion_retencion_emision_percepcion_retencion_component__ = __webpack_require__("../../../../../src/app/facturacion-electronica/percepcion-retencion/percepcion-retencion-crear/emision-percepcion-retencion/emision-percepcion-retencion.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__percepcion_retencion_crear_retencion_masiva_detalle_retencion_masiva_detalle_component__ = __webpack_require__("../../../../../src/app/facturacion-electronica/percepcion-retencion/percepcion-retencion-crear/retencion-masiva-detalle/retencion-masiva-detalle.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__general_consulta_consulta_component__ = __webpack_require__("../../../../../src/app/facturacion-electronica/general/consulta/consulta.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_3__percepcion_retencion_component__["a" /* PercepcionRetencionComponent */],
        children: [
            {
                path: '', pathMatch: 'full', redirectTo: 'retencion'
            },
            {
                path: 'crear-retencion',
                component: __WEBPACK_IMPORTED_MODULE_2__percepcion_retencion_crear_percepcion_retencion_crear_component__["a" /* PercepcionRetencionCrearComponent */],
                data: {
                    codigo: '01',
                    mostrarCombo: true
                }
            },
            {
                path: 'crear-percepcion',
                component: __WEBPACK_IMPORTED_MODULE_2__percepcion_retencion_crear_percepcion_retencion_crear_component__["a" /* PercepcionRetencionCrearComponent */],
                data: {
                    codigo: '02',
                    mostrarCombo: true
                }
            },
            {
                path: 'crear/vista-previa',
                component: __WEBPACK_IMPORTED_MODULE_5__percepcion_retencion_crear_vistaprevia_percepcion_retencion_vistaprevia_percepcion_retencion_component__["a" /* VistapreviaPercepcionRetencionComponent */]
            },
            {
                path: 'crear/emision',
                component: __WEBPACK_IMPORTED_MODULE_6__percepcion_retencion_crear_emision_percepcion_retencion_emision_percepcion_retencion_component__["a" /* EmisionPercepcionRetencionComponent */]
            },
            {
                path: 'crear/agregar-item',
                component: __WEBPACK_IMPORTED_MODULE_4__percepcion_retencion_crear_item_crear_editar_item_crear_editar_component__["a" /* ItemCrearEditarComponent */],
                data: {
                    mostrarCombo: false,
                    tipoaccion: 1,
                    titulo: 'agregarItem'
                }
            },
            {
                path: 'retencion-masiva/detalle/:id',
                component: __WEBPACK_IMPORTED_MODULE_7__percepcion_retencion_crear_retencion_masiva_detalle_retencion_masiva_detalle_component__["a" /* RetencionMasivaDetalleComponent */],
                data: {
                    tipoaccion: 1,
                    titulo: 'detalleRetencionMasiva'
                }
            },
            {
                path: 'crear/editar-item/:id',
                component: __WEBPACK_IMPORTED_MODULE_4__percepcion_retencion_crear_item_crear_editar_item_crear_editar_component__["a" /* ItemCrearEditarComponent */],
                data: {
                    tipoaccion: 2,
                    titulo: 'editarItem',
                    button: 'guardar'
                }
            }
        ]
    },
    {
        path: 'consultar',
        component: __WEBPACK_IMPORTED_MODULE_8__general_consulta_consulta_component__["a" /* ConsultaComponent */],
        data: {
            titulo: 'consultaPercepcionRetencion',
            tipoConsulta: 2
        }
    }
];
var PercepcionRetencionRoutingModule = (function () {
    function PercepcionRetencionRoutingModule() {
    }
    return PercepcionRetencionRoutingModule;
}());
PercepcionRetencionRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes)
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]
        ]
    })
], PercepcionRetencionRoutingModule);

//# sourceMappingURL=percepcion-retencion.routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/facturacion-electronica/percepcion-retencion/services/persistencia.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PersistenciaServiceRetencion; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular_persistence__ = __webpack_require__("../../../../angular-persistence/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PersistenciaServiceRetencion = (function () {
    function PersistenciaServiceRetencion(persistenceService) {
        this.persistenceService = persistenceService;
        this.lista = [];
    }
    PersistenciaServiceRetencion.prototype.agregarProducto = function (item) {
        console.log(this.lista);
        this.lista = this.getListaProductos();
        console.log(this.lista);
        item.id = this.lista.length;
        this.lista.push(item);
        console.log(this.lista);
        this.persistenceService.remove('listaretencion', __WEBPACK_IMPORTED_MODULE_1_angular_persistence__["c" /* StorageType */].LOCAL);
        this.persistenceService.set('listaretencion', this.lista, { type: __WEBPACK_IMPORTED_MODULE_1_angular_persistence__["c" /* StorageType */].LOCAL, timeout: 3600000 });
    };
    PersistenciaServiceRetencion.prototype.getListaProductos = function () {
        var lista;
        lista = this.persistenceService.get('listaretencion', __WEBPACK_IMPORTED_MODULE_1_angular_persistence__["c" /* StorageType */].LOCAL);
        if (lista === undefined) {
            return [];
        }
        return lista;
    };
    PersistenciaServiceRetencion.prototype.setListaProductos = function (lista) {
        this.persistenceService.remove('listaretencion', __WEBPACK_IMPORTED_MODULE_1_angular_persistence__["c" /* StorageType */].LOCAL);
        this.persistenceService.set('listaretencion', lista, { type: __WEBPACK_IMPORTED_MODULE_1_angular_persistence__["c" /* StorageType */].LOCAL, timeout: 3600000 });
    };
    PersistenciaServiceRetencion.prototype.getItemProducto = function (index) {
        this.lista = this.getListaProductos();
        return this.lista[index];
    };
    PersistenciaServiceRetencion.prototype.editarProducto = function (item, posicion) {
        this.lista = this.getListaProductos();
        if (this.lista.length === 0) {
            return;
        }
        item.id = this.lista[posicion].id;
        this.lista[posicion] = item;
        this.persistenceService.remove('listaretencion', __WEBPACK_IMPORTED_MODULE_1_angular_persistence__["c" /* StorageType */].LOCAL);
        this.persistenceService.set('listaretencion', this.lista, { type: __WEBPACK_IMPORTED_MODULE_1_angular_persistence__["c" /* StorageType */].LOCAL });
        console.log('LISTA ');
        console.log(this.lista);
    };
    PersistenciaServiceRetencion.prototype.mostrar = function () {
        console.log(this.persistenceService.get('listaretencion', __WEBPACK_IMPORTED_MODULE_1_angular_persistence__["c" /* StorageType */].LOCAL));
    };
    PersistenciaServiceRetencion.prototype.eliminar = function (listaTmp) {
        this.persistenceService.remove('listaretencion', __WEBPACK_IMPORTED_MODULE_1_angular_persistence__["c" /* StorageType */].LOCAL);
        this.persistenceService.set('listaretencion', listaTmp, { type: __WEBPACK_IMPORTED_MODULE_1_angular_persistence__["c" /* StorageType */].LOCAL });
    };
    return PersistenciaServiceRetencion;
}());
PersistenciaServiceRetencion = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angular_persistence__["b" /* PersistenceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angular_persistence__["b" /* PersistenceService */]) === "function" && _a || Object])
], PersistenciaServiceRetencion);

var _a;
//# sourceMappingURL=persistencia.service.js.map

/***/ }),

/***/ "../../../../../src/app/facturacion-electronica/percepcion-retencion/services/retencionpersiscabecera.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RetencionpersiscabeceraService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular_persistence__ = __webpack_require__("../../../../angular-persistence/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_retencion_cabecera__ = __webpack_require__("../../../../../src/app/facturacion-electronica/percepcion-retencion/models/retencion-cabecera.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RetencionpersiscabeceraService = (function () {
    function RetencionpersiscabeceraService(persistenceService) {
        this.persistenceService = persistenceService;
        this.listacabecera = new __WEBPACK_IMPORTED_MODULE_2__models_retencion_cabecera__["a" /* RetencionCabecera */]();
    }
    RetencionpersiscabeceraService.prototype.setCabeceraRetencion = function (cabecera) {
        this.persistenceService.remove('retencioncabecera', __WEBPACK_IMPORTED_MODULE_1_angular_persistence__["c" /* StorageType */].LOCAL);
        this.persistenceService.set('retencioncabecera', cabecera, { type: __WEBPACK_IMPORTED_MODULE_1_angular_persistence__["c" /* StorageType */].LOCAL, timeout: 3600000 });
    };
    RetencionpersiscabeceraService.prototype.getCabeceraRetencion = function () {
        var item;
        item = this.persistenceService.get('retencioncabecera', __WEBPACK_IMPORTED_MODULE_1_angular_persistence__["c" /* StorageType */].LOCAL);
        console.log(item);
        if (item == undefined) {
            return null;
        }
        return item;
    };
    return RetencionpersiscabeceraService;
}());
RetencionpersiscabeceraService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angular_persistence__["b" /* PersistenceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angular_persistence__["b" /* PersistenceService */]) === "function" && _a || Object])
], RetencionpersiscabeceraService);

var _a;
//# sourceMappingURL=retencionpersiscabecera.service.js.map

/***/ }),

/***/ "../../../../written-number/lib/i18n/en-indian.json":
/***/ (function(module, exports) {

module.exports = {"useLongScale":false,"baseSeparator":"-","unitSeparator":"and ","base":{"0":"zero","1":"one","2":"two","3":"three","4":"four","5":"five","6":"six","7":"seven","8":"eight","9":"nine","10":"ten","11":"eleven","12":"twelve","13":"thirteen","14":"fourteen","15":"fifteen","16":"sixteen","17":"seventeen","18":"eighteen","19":"nineteen","20":"twenty","30":"thirty","40":"forty","50":"fifty","60":"sixty","70":"seventy","80":"eighty","90":"ninety"},"units":{"2":"hundred","3":"thousand","5":"lakh","7":"crore"},"unitExceptions":[]}

/***/ }),

/***/ "../../../../written-number/lib/i18n/en.json":
/***/ (function(module, exports) {

module.exports = {"useLongScale":false,"baseSeparator":"-","unitSeparator":"and ","base":{"0":"zero","1":"one","2":"two","3":"three","4":"four","5":"five","6":"six","7":"seven","8":"eight","9":"nine","10":"ten","11":"eleven","12":"twelve","13":"thirteen","14":"fourteen","15":"fifteen","16":"sixteen","17":"seventeen","18":"eighteen","19":"nineteen","20":"twenty","30":"thirty","40":"forty","50":"fifty","60":"sixty","70":"seventy","80":"eighty","90":"ninety"},"units":["hundred","thousand","million","billion","trillion","quadrillion","quintillion","sextillion","septillion","octillion","nonillion","decillion","undecillion","duodecillion","tredecillion","quattuordecillion","quindecillion"],"unitExceptions":[]}

/***/ }),

/***/ "../../../../written-number/lib/i18n/eo.json":
/***/ (function(module, exports) {

module.exports = {"useLongScale":false,"baseSeparator":" ","unitSeparator":"","base":{"0":"nulo","1":"unu","2":"du","3":"tri","4":"kvar","5":"kvin","6":"ses","7":"sep","8":"ok","9":"naŭ","10":"dek","20":"dudek","30":"tridek","40":"kvardek","50":"kvindek","60":"sesdek","70":"sepdek","80":"okdek","90":"naŭdek","100":"cent","200":"ducent","300":"tricent","400":"kvarcent","500":"kvincent","600":"sescent","700":"sepcent","800":"okcent","900":"naŭcent"},"units":[{"useBaseInstead":true,"useBaseException":[]},{"singular":"mil","avoidPrefixException":[1]},{"singular":"miliono","plural":"milionoj","avoidPrefixException":[1]},{"singular":"miliardo","plural":"miliardoj","avoidPrefixException":[1]},{"singular":"biliono","plural":"bilionoj","avoidPrefixException":[1]}],"unitExceptions":[]}

/***/ }),

/***/ "../../../../written-number/lib/i18n/es.json":
/***/ (function(module, exports) {

module.exports = {"useLongScale":true,"baseSeparator":" y ","unitSeparator":"","base":{"0":"cero","1":"uno","2":"dos","3":"tres","4":"cuatro","5":"cinco","6":"seis","7":"siete","8":"ocho","9":"nueve","10":"diez","11":"once","12":"doce","13":"trece","14":"catorce","15":"quince","16":"dieciséis","17":"diecisiete","18":"dieciocho","19":"diecinueve","20":"veinte","21":"veintiuno","22":"veintidós","23":"veintitrés","24":"veinticuatro","25":"veinticinco","26":"veintiséis","27":"veintisiete","28":"veintiocho","29":"veintinueve","30":"treinta","40":"cuarenta","50":"cincuenta","60":"sesenta","70":"setenta","80":"ochenta","90":"noventa","100":"cien","200":"doscientos","300":"trescientos","400":"cuatrocientos","500":"quinientos","600":"seiscientos","700":"setecientos","800":"ochocientos","900":"novecientos","1000":"mil"},"unitExceptions":{"1":"un"},"units":[{"singular":"ciento","useBaseInstead":true,"useBaseException":[1]},{"singular":"mil","avoidPrefixException":[1]},{"singular":"millón","plural":"millones"},{"singular":"billón","plural":"billones"},{"singular":"trillón","plural":"trillones"},{"singular":"cuatrillón","plural":"cuatrillones"},{"singular":"quintillón","plural":"quintillones"},{"singular":"sextillón","plural":"sextillones"},{"singular":"septillón","plural":"septillones"},{"singular":"octillón","plural":"octillones"},{"singular":"nonillón","plural":"nonillones"},{"singular":"decillón","plural":"decillones"},{"singular":"undecillón","plural":"undecillones"},{"singular":"duodecillón","plural":"duodecillones"},{"singular":"tredecillón","plural":"tredecillones"},{"singular":"cuatrodecillón","plural":"cuatrodecillones"},{"singular":"quindecillón","plural":"quindecillones"}]}

/***/ }),

/***/ "../../../../written-number/lib/i18n/fr.json":
/***/ (function(module, exports) {

module.exports = {"useLongScale":false,"baseSeparator":"-","unitSeparator":"","base":{"0":"zéro","1":"un","2":"deux","3":"trois","4":"quatre","5":"cinq","6":"six","7":"sept","8":"huit","9":"neuf","10":"dix","11":"onze","12":"douze","13":"treize","14":"quatorze","15":"quinze","16":"seize","17":"dix-sept","18":"dix-huit","19":"dix-neuf","20":"vingt","30":"trente","40":"quarante","50":"cinquante","60":"soixante","70":"soixante-dix","80":"quatre-vingt","90":"quatre-vingt-dix"},"units":[{"singular":"cent","plural":"cents","avoidInNumberPlural":true,"avoidPrefixException":[1]},{"singular":"mille","avoidPrefixException":[1]},{"singular":"million","plural":"millions"},{"singular":"milliard","plural":"milliards"},{"singular":"billion","plural":"billions"},{"singular":"billiard","plural":"billiards"},{"singular":"trillion","plural":"trillions"},{"singular":"trilliard","plural":"trilliards"},{"singular":"quadrillion","plural":"quadrillions"},{"singular":"quadrilliard","plural":"quadrilliards"},{"singular":"quintillion","plural":"quintillions"},{"singular":"quintilliard","plural":"quintilliards"},{"singular":"sextillion","plural":"sextillions"},{"singular":"sextilliard","plural":"sextilliards"},{"singular":"septillion","plural":"septillions"},{"singular":"septilliard","plural":"septilliards"},{"singular":"octillion","plural":"octillions"}],"unitExceptions":{"71":"soixante et onze","72":"soixante-douze","73":"soixante-treize","74":"soixante-quatorze","75":"soixante-quinze","76":"soixante-seize","77":"soixante-dix-sept","78":"soixante-dix-huit","79":"soixante-dix-neuf","80":"quatre-vingts","91":"quatre-vingt-onze","92":"quatre-vingt-douze","93":"quatre-vingt-treize","94":"quatre-vingt-quatorze","95":"quatre-vingt-quinze","96":"quatre-vingt-seize","97":"quatre-vingt-dix-sept","98":"quatre-vingt-dix-huit","99":"quatre-vingt-dix-neuf"}}

/***/ }),

/***/ "../../../../written-number/lib/i18n/hu.json":
/***/ (function(module, exports) {

module.exports = {"useLongScale":true,"baseSeparator":"","unitSeparator":"és ","base":{"0":"nulla","1":"egy","2":"kettő","3":"három","4":"négy","5":"öt","6":"hat","7":"hét","8":"nyolc","9":"kilenc","10":"tíz","11":"tizenegy","12":"tizenkettő","13":"tizenhárom","14":"tizennégy","15":"tizenöt","16":"tizenhat","17":"tizenhét","18":"tizennyolc","19":"tizenkilenc","20":"húsz","21":"huszonegy","22":"huszonkettő","23":"huszonhárom","24":"huszonnégy","25":"huszonöt","26":"huszonhat","27":"huszonhét","28":"huszonnyolc","29":"huszonkilenc","30":"harminc","40":"negyven","50":"ötven","60":"hatvan","70":"hetven","80":"nyolcvan","90":"kilencven","100":"száz","200":"kétszáz","300":"háromszáz","400":"négyszáz","500":"ötszáz","600":"hatszáz","700":"hétszáz","800":"nyolcszáz","900":"kilencszáz","1000":"ezer"},"unitExceptions":{"1":"egy"},"units":[{"singular":"száz","useBaseInstead":true,"useBaseException":[1]},{"singular":"ezer","avoidPrefixException":[1]},{"singular":"millió","avoidPrefixException":[1]},{"singular":"milliárd","avoidPrefixException":[1]},{"singular":"-billió","avoidPrefixException":[1]},{"singular":"billiárd","avoidPrefixException":[1]},{"singular":"trillió","avoidPrefixException":[1]},{"singular":"trilliárd","avoidPrefixException":[1]},{"singular":"kvadrillió","avoidPrefixException":[1]},{"singular":"kvadrilliárd","avoidPrefixException":[1]},{"singular":"kvintillió","avoidPrefixException":[1]},{"singular":"kvintilliárd","avoidPrefixException":[1]},{"singular":"szextillió","avoidPrefixException":[1]},{"singular":"szeptillió","avoidPrefixException":[1]},{"singular":"oktillió","avoidPrefixException":[1]},{"singular":"nonillió","avoidPrefixException":[1]}]}

/***/ }),

/***/ "../../../../written-number/lib/i18n/it.json":
/***/ (function(module, exports) {

module.exports = {"useLongScale":false,"baseSeparator":"","unitSeparator":"","generalSeparator":"","wordSeparator":"","base":{"0":"zero","1":"uno","2":"due","3":"tre","4":"quattro","5":"cinque","6":"sei","7":"sette","8":"otto","9":"nove","10":"dieci","11":"undici","12":"dodici","13":"tredici","14":"quattordici","15":"quindici","16":"sedici","17":"diciassette","18":"diciotto","19":"diciannove","20":"venti","21":"ventuno","23":"ventitré","28":"ventotto","30":"trenta","31":"trentuno","33":"trentatré","38":"trentotto","40":"quaranta","41":"quarantuno","43":"quaranta­tré","48":"quarantotto","50":"cinquanta","51":"cinquantuno","53":"cinquantatré","58":"cinquantotto","60":"sessanta","61":"sessantuno","63":"sessanta­tré","68":"sessantotto","70":"settanta","71":"settantuno","73":"settantatré","78":"settantotto","80":"ottanta","81":"ottantuno","83":"ottantatré","88":"ottantotto","90":"novanta","91":"novantuno","93":"novantatré","98":"novantotto","100":"cento","101":"centuno","108":"centootto","180":"centottanta","201":"duecentuno","301":"tre­cent­uno","401":"quattro­cent­uno","501":"cinque­cent­uno","601":"sei­cent­uno","701":"sette­cent­uno","801":"otto­cent­uno","901":"nove­cent­uno"},"unitExceptions":{"1":"un"},"units":[{"singular":"cento","avoidPrefixException":[1]},{"singular":"mille","plural":"mila","avoidPrefixException":[1]},{"singular":"milione","plural":"milioni"},{"singular":"miliardo","plural":"miliardi"},{"singular":"bilione","plural":"bilioni"},{"singular":"biliardo","plural":"biliardi"},{"singular":"trilione","plural":"trilioni"},{"singular":"triliardo","plural":"triliardi"},{"singular":"quadrilione","plural":"quadrilioni"},{"singular":"quadriliardo","plural":"quadriliardi"}]}

/***/ }),

/***/ "../../../../written-number/lib/i18n/pt-PT.json":
/***/ (function(module, exports) {

module.exports = {"useLongScale":true,"baseSeparator":" e ","unitSeparator":"e ","andWhenTrailing":true,"base":{"0":"zero","1":"um","2":"dois","3":"três","4":"quatro","5":"cinco","6":"seis","7":"sete","8":"oito","9":"nove","10":"dez","11":"onze","12":"doze","13":"treze","14":"catorze","15":"quinze","16":"dezasseis","17":"dezassete","18":"dezoito","19":"dezanove","20":"vinte","30":"trinta","40":"quarenta","50":"cinquenta","60":"sessenta","70":"setenta","80":"oitenta","90":"noventa","100":"cem","200":"duzentos","300":"trezentos","400":"quatrocentos","500":"quinhentos","600":"seiscentos","700":"setecentos","800":"oitocentos","900":"novecentos","1000":"mil"},"unitExceptions":{"1":"um"},"units":[{"singular":"cento","useBaseInstead":true,"useBaseException":[1],"useBaseExceptionWhenNoTrailingNumbers":true,"andException":true},{"singular":"mil","avoidPrefixException":[1],"andException":true},{"singular":"milhão","plural":"milhões"},{"singular":"bilião","plural":"biliões"},{"singular":"trilião","plural":"triliões"},{"singular":"quadrilião","plural":"quadriliões"},{"singular":"quintilião","plural":"quintiliões"},{"singular":"sextilião","plural":"sextiliões"},{"singular":"septilião","plural":"septiliões"},{"singular":"octilião","plural":"octiliões"},{"singular":"nonilião","plural":"noniliões"},{"singular":"decilião","plural":"deciliões"}]}

/***/ }),

/***/ "../../../../written-number/lib/i18n/pt.json":
/***/ (function(module, exports) {

module.exports = {"useLongScale":false,"baseSeparator":" e ","unitSeparator":"e ","andWhenTrailing":true,"base":{"0":"zero","1":"um","2":"dois","3":"três","4":"quatro","5":"cinco","6":"seis","7":"sete","8":"oito","9":"nove","10":"dez","11":"onze","12":"doze","13":"treze","14":"catorze","15":"quinze","16":"dezesseis","17":"dezessete","18":"dezoito","19":"dezenove","20":"vinte","30":"trinta","40":"quarenta","50":"cinquenta","60":"sessenta","70":"setenta","80":"oitenta","90":"noventa","100":"cem","200":"duzentos","300":"trezentos","400":"quatrocentos","500":"quinhentos","600":"seiscentos","700":"setecentos","800":"oitocentos","900":"novecentos","1000":"mil"},"unitExceptions":{"1":"um"},"units":[{"singular":"cento","useBaseInstead":true,"useBaseException":[1],"useBaseExceptionWhenNoTrailingNumbers":true,"andException":true},{"singular":"mil","avoidPrefixException":[1],"andException":true},{"singular":"milhão","plural":"milhões"},{"singular":"bilhão","plural":"bilhões"},{"singular":"trilhão","plural":"trilhões"},{"singular":"quadrilhão","plural":"quadrilhão"},{"singular":"quintilhão","plural":"quintilhões"},{"singular":"sextilhão","plural":"sextilhões"},{"singular":"septilhão","plural":"septilhões"},{"singular":"octilhão","plural":"octilhões"},{"singular":"nonilhão","plural":"nonilhões"},{"singular":"decilhão","plural":"decilhões"},{"singular":"undecilhão","plural":"undecilhões"},{"singular":"doudecilhão","plural":"doudecilhões"},{"singular":"tredecilhão","plural":"tredecilhões"}]}

/***/ }),

/***/ "../../../../written-number/lib/i18n/tr.json":
/***/ (function(module, exports) {

module.exports = {"useLongScale":false,"baseSeparator":" ","unitSeparator":"","base":{"0":"sıfır","1":"bir","2":"iki","3":"üç","4":"dört","5":"beş","6":"altı","7":"yedi","8":"sekiz","9":"dokuz","10":"on","20":"yirmi","30":"otuz","40":"kırk","50":"elli","60":"altmış","70":"yetmiş","80":"seksen","90":"doksan"},"units":[{"singular":"yüz","avoidPrefixException":[1]},{"singular":"bin","avoidPrefixException":[1]},"milyon","milyar","trilyon","katrilyon","kentilyon","sekstilyon","septilyon","oktilyon","nonilyon","desilyon","andesilyon","dodesilyon","tredesilyon","katordesilyon","kendesilyon"],"unitExceptions":[]}

/***/ }),

/***/ "../../../../written-number/lib/i18n/vi.json":
/***/ (function(module, exports) {

module.exports = {"useLongScale":false,"baseSeparator":" ","unitSeparator":"và ","base":{"0":"không","1":"một","2":"hai","3":"ba","4":"bốn","5":"năm","6":"sáu","7":"bảy","8":"tám","9":"chín","10":"mười","15":"mười lăm","20":"hai mươi","21":"hai mươi mốt","25":"hai mươi lăm","30":"ba mươi","31":"ba mươi mốt","40":"bốn mươi","41":"bốn mươi mốt","45":"bốn mươi lăm","50":"năm mươi","51":"năm mươi mốt","55":"năm mươi lăm","60":"sáu mươi","61":"sáu mươi mốt","65":"sáu mươi lăm","70":"bảy mươi","71":"bảy mươi mốt","75":"bảy mươi lăm","80":"tám mươi","81":"tám mươi mốt","85":"tám mươi lăm","90":"chín mươi","91":"chín mươi mốt","95":"chín mươi lăm"},"units":["trăm","ngàn","triệu","tỷ","nghìn tỷ"],"unitExceptions":[]}

/***/ }),

/***/ "../../../../written-number/lib/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports = module.exports = writtenNumber;
var util = __webpack_require__("../../../../written-number/lib/util.js");

var languages = ["en", "es", "pt", "fr", "eo", "it", "vi", "tr"];
var i18n = {
  en: __webpack_require__("../../../../written-number/lib/i18n/en.json"),
  es: __webpack_require__("../../../../written-number/lib/i18n/es.json"),
  pt: __webpack_require__("../../../../written-number/lib/i18n/pt.json"),
  ptPT: __webpack_require__("../../../../written-number/lib/i18n/pt-PT.json"),
  fr: __webpack_require__("../../../../written-number/lib/i18n/fr.json"),
  eo: __webpack_require__("../../../../written-number/lib/i18n/eo.json"),
  it: __webpack_require__("../../../../written-number/lib/i18n/it.json"),
  vi: __webpack_require__("../../../../written-number/lib/i18n/vi.json"),
  tr: __webpack_require__("../../../../written-number/lib/i18n/tr.json"),
  hu: __webpack_require__("../../../../written-number/lib/i18n/hu.json"),
  enIndian: __webpack_require__("../../../../written-number/lib/i18n/en-indian.json")
};
exports.i18n = i18n;

var shortScale = [100];
for (var i = 1; i <= 16; i++) {
  shortScale.push(Math.pow(10, i * 3));
}

var longScale = [100, 1000];
for (i = 1; i <= 15; i++) {
  longScale.push(Math.pow(10, i * 6));
}

writtenNumber.defaults = {
  noAnd: false,
  lang: "en"
};

/**
 * Converts numbers to their written form.
 *
 * @param {Number} n The number to convert
 * @param {Object} [options] An object representation of the options
 * @return {String} writtenN The written form of `n`
 */

function writtenNumber(n, options) {
  options = options || {};
  options = util.defaults(options, writtenNumber.defaults);

  if (n < 0) {
    return "";
  }

  n = Math.round(+n);

  var language = typeof options.lang === "string"
    ? i18n[options.lang]
    : options.lang;
  var scale = language.useLongScale ? longScale : shortScale;
  var units = language.units;
  var unit;

  if (!(units instanceof Array)) {
    var rawUnits = units;

    units = [];
    scale = Object.keys(rawUnits);

    for (var i in scale) {
      units.push(rawUnits[scale[i]]);
      scale[i] = Math.pow(10, parseInt(scale[i]));
    }
  }

  if (!language) {
    if (languages.indexOf(writtenNumber.defaults.lang) < 0) {
      writtenNumber.defaults.lang = "en";
    }

    language = i18n[writtenNumber.defaults.lang];
  }

  var baseCardinals = language.base;

  if (language.unitExceptions[n]) return language.unitExceptions[n];
  if (baseCardinals[n]) return baseCardinals[n];
  if (n < 100)
    return handleSmallerThan100(n, language, unit, baseCardinals, options);

  var m = n % 100;
  var ret = [];

  if (m) {
    if (
      options.noAnd &&
      !(language.andException && language.andException[10])
    ) {
      ret.push(writtenNumber(m, options));
    } else {
      ret.push(language.unitSeparator + writtenNumber(m, options));
    }
  }

  var firstSignificant;

  for (var i = 0, len = units.length; i < len; i++) {
    var r = Math.floor(n / scale[i]);
    var divideBy;

    if (i === len - 1) divideBy = 1000000;
    else divideBy = scale[i + 1] / scale[i];

    r %= divideBy;

    unit = units[i];

    if (!r) continue;
    firstSignificant = scale[i];

    if (unit.useBaseInstead) {
      var shouldUseBaseException =
        unit.useBaseException.indexOf(r) > -1 &&
        (unit.useBaseExceptionWhenNoTrailingNumbers
          ? i === 0 && ret.length
          : true);
      if (!shouldUseBaseException) {
        ret.push(baseCardinals[r * scale[i]]);
      } else {
        ret.push(r > 1 && unit.plural ? unit.plural : unit.singular);
      }
      continue;
    }

    var str;
    if (typeof unit === "string") {
      str = unit;
    } else {
      str = r > 1 && unit.plural && (!unit.avoidInNumberPlural || !m)
        ? unit.plural
        : unit.singular;
    }

    if (
      unit.avoidPrefixException &&
      unit.avoidPrefixException.indexOf(r) > -1
    ) {
      ret.push(str);
      continue;
    }

    var exception = language.unitExceptions[r];
    var number =
      exception ||
      writtenNumber(
        r,
        util.defaults(
          {
            // Languages with and exceptions need to set `noAnd` to false
            noAnd: !((language.andException && language.andException[r]) ||
              unit.andException) && true
          },
          options
        )
      );
    n -= r * scale[i];
    ret.push(number + " " + str);
  }

  var firstSignificantN = firstSignificant * Math.floor(n / firstSignificant);
  var rest = n - firstSignificantN;

  if (
    language.andWhenTrailing &&
    firstSignificant &&
    0 < rest &&
    ret[0].indexOf(language.unitSeparator) !== 0
  ) {
    ret = [ret[0], language.unitSeparator.replace(/\s+$/, "")].concat(
      ret.slice(1)
    );
  }

  return ret.reverse().join(" ");
}

function handleSmallerThan100(n, language, unit, baseCardinals, options) {
  var dec = Math.floor(n / 10) * 10;
  unit = n - dec;
  if (unit) {
    return (
      baseCardinals[dec] + language.baseSeparator + writtenNumber(unit, options)
    );
  }
  return baseCardinals[dec];
}


/***/ }),

/***/ "../../../../written-number/lib/util.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Merges a set of default keys with a target object
 * (Like _.defaults, but will also extend onto null/undefined)
 *
 * @param {Object} [target] The object to extend
 * @param {Object} defaults The object to default to
 * @return {Object} extendedTarget
 */

function defaults(target, defs) {
  if (target == null) target = {};
  var ret = {};
  var keys = Object.keys(defs);
  for (var i = 0, len = keys.length; i < len; i++) {
    var key = keys[i];
    ret[key] = target[key] || defs[key];
  }
  return ret;
}
exports.defaults = defaults;


/***/ })

});
//# sourceMappingURL=percepcion-retencion.module.chunk.js.map