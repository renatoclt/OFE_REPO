webpackJsonp(["common"],{

/***/ "../../../../../src/app/facturacion-electronica/comprobantes/comprobante-documento-relacionado/comprobante-documento-relacionado.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"row col-md-12\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header card-header-text\" data-background-color=\"blue\">\r\n                    <h4 class=\"card-title\">{{titulo}}</h4>\r\n                </div>\r\n                <div class=\"card-content\">\r\n                    <form [formGroup]=\"documentoRelacionadoFormGroup\" (ngSubmit)=\"agregar()\"> \r\n                        <div class=\"row\">\r\n                            <div class=\"col-xs-12 col-sm-4 col-md-4 col-lg-4\">\r\n                                <div class=\"form-group label-floating\">\r\n                                    <label class=\"control-label\">Tipo Comprobante</label>\r\n                                    <input id=\"cmbComprobante\" name=\"cmbComprobante\" formControlName=\"cmbComprobante\" type=\"text\" class=\"form-control\">\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-xs-12 col-sm-4 col-md-4 col-lg-4\">\r\n                                <div class=\"form-group label-floating\">\r\n                                    <label class=\"control-label\">Serie</label>\r\n                                    <input id=\"cmbSerie\" name=\"cmbSerie\" formControlName=\"cmbSerie\" type=\"text\" class=\"form-control\">\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-xs-12 col-sm-4 col-md-4 col-lg-4\">\r\n                                <div class=\"form-group label-floating\">\r\n                                    <label class=\"control-label\">Número Correlativo</label>\r\n                                    <input id=\"txtNumeroCorrelativo\" name=\"txtNumeroCorrelativo\" formControlName=\"txtNumeroCorrelativo\" type=\"text\" class=\"form-control\">\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"row\" *ngIf=\"estadoItem\">\r\n                                <div class=\"col-xs-12 col-sm-4 col-md-4 col-lg-4\">\r\n                                <div class=\"form-group label-floating\">\r\n                                    <label class=\"control-label\">Importe Total</label>\r\n                                    <input id=\"txtImporteTotal\" name=\"txtImporteTotal\" formControlName=\"txtImporteTotal\" type=\"text\" class=\"form-control\">\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-xs-12 col-sm-4 col-md-4 col-lg-4\">\r\n                                <div class=\"form-group label-floating\">\r\n                                    <label class=\"control-label required\">Importe a Usar</label>\r\n                                    <input id=\"txtImporteAUsar\" name=\"txtImporteAUsar\" formControlName=\"txtImporteAUsar\" type=\"text\" class=\"form-control\">\r\n                                    \r\n                                    <span *ngIf=\"!documentoRelacionadoFormGroup.get('txtImporteAUsar').valid && documentoRelacionadoFormGroup.get('txtImporteAUsar').touched\">\r\n                                        <span *ngIf=\"documentoRelacionadoFormGroup.get('txtImporteAUsar').errors['required']\" class=\"text-danger\">Importe a usar es requerido.</span>\r\n                                    </span>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"row pull-right\">\r\n                            <div class=\"form-group\">\r\n                                <div class=\"col-md-12\">\r\n                                    <button type=\"button\" name=\"btnBuscar\" class=\"btn blue\" (click)=\"buscar()\">Buscar</button>\r\n                                    <button type=\"button\" name=\"btnLimpiar\" class=\"btn blue\" [disabled]=\"!documentoRelacionadoFormGroup.valid\" (click)=\"limpiarFormulario()\">Limpiar</button>\r\n                                    <button type=\"submit\" name=\"btnAgregar\" [disabled]=\"!documentoRelacionadoFormGroup.valid\" class=\"btn blue\">Agregar</button>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </form>\r\n                </div>\r\n                \r\n                <div class=\"row\"><p>&nbsp;</p></div>\r\n                <div class=\"row\"><p>&nbsp;</p></div>\r\n                <div class=\"row\"><p>&nbsp;</p></div>\r\n                <div class=\"col-md-12\">\r\n                    <div class=\"card\">\r\n                        \r\n                        <div class=\"card-header card-header-icon\" data-background-color=\"blue\">\r\n                            <span class=\"input-group-addon\">\r\n                                <i class=\"fa fa-list-ul fa-1x fa-inverse\"></i>\r\n                            </span>\r\n                        </div>\r\n                        <div class=\"row\"><h3>Comprobantes</h3></div>\r\n                        <nav class=\"navbar navbar-info\" role=\"navigation\"></nav>\r\n                        <div class=\"row pull-right\">\r\n                                <div class=\"form-group\">\r\n                                    <div class=\"col-md-12\">\r\n                                        <button type=\"button\" name=\"btnEliminar\" class=\"btn blue\" (click)=\"eliminar()\">Eliminar</button>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        <br><br>\r\n                        <div class=\"table-responsive\">\r\n                                <table id=\"dtDocumentoRelacionado\" class=\"table table-striped table-no-bordered table-hover\" cellspacing=\"0\" width=\"100%\" style=\"width:100%\">\r\n                                    <thead>\r\n                                        <tr>\r\n                                            <th class=\"disabled-sorting text-right\">\r\n                                                <div class=\"checkbox text-right\">\r\n                                                    <label><input type=\"checkbox\" name=\"optionsCheckboxes\" class=\"checkall\" ></label>\r\n                                                </div>\r\n                                            </th>\r\n                                            <th>Comprobante</th>\r\n                                            <th>Serie</th>\r\n                                            <th>Número Correlativo</th>\r\n                                            <th>Importe Total</th>\r\n                                            <th>Importe a Usar</th>\r\n                                        </tr>\r\n                                    </thead>\r\n                                </table>\r\n                        </div>\r\n                                \r\n                    </div>\r\n                    <div class=\"row pull-right\">\r\n                        <div class=\"form-group\">\r\n                            <div class=\"col-md-12\">\r\n                                <button type=\"button\" name=\"btnRegresar\" class=\"btn blue\" (click)=\"regresar()\">Regresar</button>\r\n                                <button type=\"button\" name=\"btnEliminar\" [disabled]=\"true\" class=\"btn blue\" (click)=\"guardar()\">Guardar</button>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n        </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/facturacion-electronica/comprobantes/comprobante-documento-relacionado/comprobante-documento-relacionado.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComprobanteDocumentoRelacionadoComponent; });
/* unused harmony export Comprobante */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__general_utils_rutas_service__ = __webpack_require__("../../../../../src/app/facturacion-electronica/general/utils/rutas.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__general_utils_tipos_service__ = __webpack_require__("../../../../../src/app/facturacion-electronica/general/utils/tipos.service.ts");
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
var ComprobanteDocumentoRelacionadoComponent = (function () {
    function ComprobanteDocumentoRelacionadoComponent(_router, _route, _http, _tipos, _rutas) {
        this._router = _router;
        this._route = _route;
        this._http = _http;
        this._tipos = _tipos;
        this._rutas = _rutas;
        this.data = [
            {
                'Estado': true,
                'Comprobante': '0001-10000001',
                'Serie': '0001',
                'Correlativo': '10000001',
                'ImporteTotal': '10.20',
                'ImporteAUsar': '12.20'
            },
            {
                'Estado': true,
                'Comprobante': '0001-10000001',
                'Serie': '0001',
                'Correlativo': '10000001',
                'ImporteTotal': '10.20',
                'ImporteAUsar': '12.22'
            }
        ];
        this.titulo = 'Documento Relacionado';
        this.estadoItem = false;
    }
    ComprobanteDocumentoRelacionadoComponent.prototype.ngOnInit = function () {
        this.obtenerParametros();
        this.initForm();
        oGuiaBuscarComponent = this;
    };
    ComprobanteDocumentoRelacionadoComponent.prototype.ngAfterViewInit = function () {
        cargarDataTable(this.data);
    };
    ComprobanteDocumentoRelacionadoComponent.prototype.eliminar = function () { };
    ComprobanteDocumentoRelacionadoComponent.prototype.initForm = function () {
        var vacio = '';
        this.documentoRelacionadoFormGroup = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormGroup */]({
            'cmbComprobante': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]({ value: '', disabled: true }, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required]),
            'cmbSerie': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]({ value: '', disabled: true }, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required]),
            'txtNumeroCorrelativo': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]({ value: '', disabled: true }, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required]),
            'txtImporteTotal': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]({ value: '', disabled: true }, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required]),
            'txtImporteAUsar': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]({ value: '', disabled: true }, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].pattern(/^[1-9]+[0-9]*$/)])
        });
        // this.documentoRelacionadoFormGroup.controls['tipoComprobante'].disable();
    };
    ComprobanteDocumentoRelacionadoComponent.prototype.buscar = function () {
        var json;
        this._router.navigateByUrl(this._rutas.URL_COMPROBANTE_BOLETA_DOCUMENTO_RELACIONADO_BUSCAR);
        this._router.navigateByUrl(this._rutas.URL_COMPROBANTE_FACTURA_DOCUMENTO_RELACIONADO_BUSCAR);
        // this.documentoRelacionadoFormGroup.controls['importeAUsar'].enable();
        /*json = this._http
                .get<Comprobante[]>("https://console.firebase.google.com/project/facturacion-cb377/database/data/comprobante")
                .subscribe(
                    data => {
                        json = data;
                    }
                );
        console.log(json);*/
    };
    ComprobanteDocumentoRelacionadoComponent.prototype.agregar = function () {
        console.log('IMPLEMENTAR AGREGAR');
    };
    ComprobanteDocumentoRelacionadoComponent.prototype.regresar = function () {
        this._router.navigateByUrl(this._rutas.URL_COMPROBANTE_BOLETA_CREAR);
    };
    ComprobanteDocumentoRelacionadoComponent.prototype.guardar = function () {
    };
    ComprobanteDocumentoRelacionadoComponent.prototype.limpiarFormulario = function () {
        this.documentoRelacionadoFormGroup.reset();
        setTimeout(function () {
            $('input').each(function () {
                $(this.parentElement).addClass('is-empty');
            });
            $('select').each(function () {
                $(this.parentElement).addClass('is-empty');
            });
        }, 200);
    };
    ComprobanteDocumentoRelacionadoComponent.prototype.navigate = function (nav) {
        this._router.navigate(nav, { relativeTo: this._route });
    };
    ComprobanteDocumentoRelacionadoComponent.prototype.obtenerParametros = function () {
        this.tipoDocumento = this._route.snapshot.data['tipoAccion'];
        this.setTipoDocumento();
    };
    ComprobanteDocumentoRelacionadoComponent.prototype.setTipoDocumento = function () {
        switch (this.tipoDocumento) {
            case this._tipos.TIPO_DOCUMENTO_BOLETA:
                this.esFactura = false;
                break;
            case this._tipos.TIPO_DOCUMENTO_FACTURA:
                this.esFactura = true;
                break;
        }
    };
    return ComprobanteDocumentoRelacionadoComponent;
}());
ComprobanteDocumentoRelacionadoComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'comprobante-documento-relacionado',
        template: __webpack_require__("../../../../../src/app/facturacion-electronica/comprobantes/comprobante-documento-relacionado/comprobante-documento-relacionado.component.html"),
        styles: [__webpack_require__("../../../../../src/app/facturacion-electronica/comprobantes/comprobante-documento-relacionado/comprobante-documento-relacionado.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__general_utils_tipos_service__["a" /* TiposService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__general_utils_tipos_service__["a" /* TiposService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__general_utils_rutas_service__["a" /* RutasService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__general_utils_rutas_service__["a" /* RutasService */]) === "function" && _e || Object])
], ComprobanteDocumentoRelacionadoComponent);

function cargarDataTable(data) {
    datatable = $('#dtDocumentoRelacionado').DataTable({
        searching: false,
        /*serverSide: true,
        ajax: {
            beforeSend: function (request) {
                request.setRequestHeader('Authorization', 'Bearer ' + sessionStorage.getItem('token'));
                request.setRequestHeader('origen_datos', 'PEB2M');
            },
            url: 'http://b2miningdata.com/api/msguialistar/v1/guias/',
            dataSrc: 'data',
            data: d
        },
        columns: [
            {   data: 'Comprobante', name: 'Comprobante' },
            {   data: 'Serie', name: 'Serie' },
            {   data: 'Correlativo', name: 'Correlativo' },
            {   data: 'ImporteTotal', name: 'ImporteTotal' },
            {   data: 'ImporteAUsar', name: 'ImporteAUsar' },
        ],*/
        columns: [
            { data: 'Estado', name: 'Estado' },
            { data: 'Comprobante', name: 'Comprobante' },
            { data: 'Serie', name: 'Serie' },
            { data: 'Correlativo', name: 'Correlativo' },
            { data: 'ImporteTotal', name: 'ImporteTotal' },
            { data: 'ImporteAUsar', name: 'ImporteAUsar' },
        ],
        columnDefs: [
            { 'className': 'text-center', 'targets': [1, 2, 3, 4, 5] },
            {
                render: function (data, type, row) {
                    return '<div class="text-right" height="100%"><div class="checkbox text-right">' +
                        '<label><input type="checkbox" name="optionsCheckboxes"></label></div></div>';
                },
                targets: 0,
                orderable: false
            },
        ],
        data: data
    });
    datatable.on('click', '.edit', function (event) {
        var $tr = $(this).closest('tr');
        var row_id = $tr.find('a').attr('row-id');
        var nav = ['/guia/comprador/formulario', row_id];
        oGuiaBuscarComponent.navigate(nav);
        event.preventDefault();
    });
}
var Comprobante = (function () {
    function Comprobante() {
    }
    return Comprobante;
}());

var _a, _b, _c, _d, _e;
//# sourceMappingURL=comprobante-documento-relacionado.component.js.map

/***/ }),

/***/ "../../../../../src/app/facturacion-electronica/comprobantes/comprobante-documento-relacionado/comprobante-documento-relacionado.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".blue {\r\n  background: #0079BF;\r\n}\r\n.input-group-addon {\r\n  background: transparent;\r\n  border: 0;\r\n  padding: 0;\r\n}\r\n.card .card-header.card-header-icon{\r\n  width: 60px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/facturacion-electronica/comprobantes/comprobante-documento-relacionado/comprobante-documento-relacionado.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComprobanteDocumentoRelacionadoModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__comprobante_documento_relacionado_component__ = __webpack_require__("../../../../../src/app/facturacion-electronica/comprobantes/comprobante-documento-relacionado/comprobante-documento-relacionado.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ComprobanteDocumentoRelacionadoModule = (function () {
    function ComprobanteDocumentoRelacionadoModule() {
    }
    return ComprobanteDocumentoRelacionadoModule;
}());
ComprobanteDocumentoRelacionadoModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["e" /* ReactiveFormsModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__comprobante_documento_relacionado_component__["a" /* ComprobanteDocumentoRelacionadoComponent */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__comprobante_documento_relacionado_component__["a" /* ComprobanteDocumentoRelacionadoComponent */]
        ]
    })
], ComprobanteDocumentoRelacionadoModule);

//# sourceMappingURL=comprobante-documento-relacionado.module.js.map

/***/ }),

/***/ "../../../../../src/app/facturacion-electronica/comprobantes/comprobante-item/comprobante-item.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".input-group-addon {\r\n    background: transparent;\r\n    cursor: pointer;\r\n}\r\n\r\n.input-group-addon:hover {\r\n    border-radius: 20px;\r\n    background-color: #4a94c0;\r\n}\r\n.input-group-addon:active {\r\n    border-radius: 20px;\r\n    background-color: #eeeeee;\r\n}\r\n.text-danger{\r\n    font-size: 11px;\r\n    font-weight: 700;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/facturacion-electronica/comprobantes/comprobante-item/comprobante-item.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-12\">\r\n                <div class=\"card\">\r\n                    <form [formGroup]=\"itemFormGroup\" (ngSubmit)=\"grabar()\" novalidate>\r\n                        <div class=\"card-header card-header-text\" data-background-color=\"blue\">\r\n                            <h4 class=\"card-title\">{{titulo}}</h4>\r\n                        </div>\r\n                        <div class=\"card-content\">\r\n                            <div class=\"row\">\r\n                                <div class=\"col-xs-12 col-sm-4 col-md-3 col-lg-3\">\r\n                                    <div class=\"form-group label-floating\">\r\n                                        <label id=\"lblCantidad\" class=\"control-label\">Cantidad<span class=\"star\">*</span></label>\r\n                                        <input type=\"text\" id=\"txtCantidad\" formControlName=\"txtCantidad\" class=\"form-control\">\r\n                                        <span *ngIf=\"!itemFormGroup.get('txtCantidad').valid && itemFormGroup.get('txtCantidad').touched\">\r\n                                            <span *ngIf=\"itemFormGroup.controls['txtCantidad'].hasError('required')\" class=\"text-danger\">Cantidad es requerida.</span>\r\n                                            <span *ngIf=\"itemFormGroup.controls['txtCantidad'].hasError('pattern')\" class=\"text-danger\">Formato invalido.</span>\r\n                                            <span *ngIf=\"itemFormGroup.controls['txtCantidad'].hasError('minlength')\" class=\"text-danger\">Minimo 4 digitos.</span>\r\n                                            <span *ngIf=\"itemFormGroup.controls['txtCantidad'].hasError('maxlength')\" class=\"text-danger\">Máximo 16 digitos.</span>\r\n                                        </span>\r\n                                        \r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-xs-12 col-sm-4 col-md-3 col-lg-3\">\r\n                                    <div class=\"form-group label-floating\">\r\n                                        <label id=\"lblCodigo\" class=\"control-label\">Código<span class=\"star\">*</span></label>\r\n                                        <input type=\"text\" id=\"txtCodigo\" formControlName=\"txtCodigo\" class=\"form-control\">\r\n                                        <span *ngIf=\"!itemFormGroup.get('txtCodigo').valid && itemFormGroup.get('txtCodigo').touched\">\r\n                                            <span *ngIf=\"itemFormGroup.controls['txtCodigo'].hasError('required')\" class=\"text-danger\">Código es requerido.</span>\r\n                                            <span *ngIf=\"itemFormGroup.controls['txtCodigo'].hasError('pattern')\" class=\"text-danger\">Caracteres invalidos.</span>\r\n                                            <span *ngIf=\"itemFormGroup.controls['txtCodigo'].hasError('minlength')\" class=\"text-danger\">Minimo de digitos 1.</span>\r\n                                            <span *ngIf=\"itemFormGroup.controls['txtCodigo'].hasError('maxlength')\" class=\"text-danger\">Minimo de digitos 12.</span>\r\n                                        </span>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-xs-12 col-sm-4 col-md-3 col-lg-3\">\r\n                                    <div class=\"form-group label-floating\">\r\n                                        <label id=\"lblDescripcion\" class=\"control-label\">Descripción<span class=\"star\">*</span></label>\r\n                                        <input type=\"text\" id=\"txtDescripcion\" formControlName=\"txtDescripcion\" class=\"form-control\">\r\n                                        <span *ngIf=\"!itemFormGroup.get('txtDescripcion').valid && itemFormGroup.get('txtDescripcion').touched\">\r\n                                            <span *ngIf=\"itemFormGroup.controls['txtDescripcion'].hasError('required')\" class=\"text-danger\">Descripción es requerida.</span>\r\n                                            <span *ngIf=\"itemFormGroup.controls['txtDescripcion'].hasError('pattern')\" class=\"text-danger\">Caracteres invalidos.</span>\r\n                                            <span *ngIf=\"itemFormGroup.controls['txtDescripcion'].hasError('minlength')\" class=\"text-danger\">Minimo de Digitos 1.</span>\r\n                                            <span *ngIf=\"itemFormGroup.controls['txtDescripcion'].hasError('maxlength')\" class=\"text-danger\">Minimo de Digitos 250.</span>\r\n                                        </span>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-xs-12 col-sm-4 col-md-3 col-lg-3\" *ngIf=\"esBien\">\r\n                                    <div class=\"form-group label-floating\">\r\n                                        <label id=\"lblUnidadMedida\" class=\"control-label\">Unidad de Medida<span class=\"star\">*</span></label>\r\n                                        <select id=\"cmbUnidadMedida\" formControlName=\"cmbUnidadMedida\" class=\"form-control\">\r\n                                            <option *ngFor=\"let unidadMedida of dtoOutUnidadMedida\" [value]=\"unidadMedida.id\">\r\n                                                {{unidadMedida.nombre}}\r\n                                            </option>\r\n                                        </select>\r\n                                        <span *ngIf=\"!itemFormGroup.get('cmbUnidadMedida').valid && itemFormGroup.get('cmbUnidadMedida').touched\">\r\n                                            <span *ngIf=\"itemFormGroup.controls['cmbUnidadMedida'].hasError('required')\" class=\"text-danger\">Seleccione una opción.</span>\r\n                                        </span>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-xs-12 col-sm-4 col-md-3 col-lg-3\">\r\n                                    <div class=\"form-group label-floating\">\r\n                                        <label id=\"lblTipoPrecioVenta\" class=\"control-label\">Tipo de Precio de Venta Unitario<span class=\"star\">*</span></label>\r\n                                        <select id=\"cmbTipoPrecioVenta\" formControlName=\"cmbTipoPrecioVenta\" class=\"form-control\">\r\n                                            <option *ngFor=\"let precioVenta of dtoOutPrecioVenta\" [value]=\"precioVenta.id\">\r\n                                                {{precioVenta.nombre}}\r\n                                            </option>\r\n                                        </select>\r\n                                        <span *ngIf=\"!itemFormGroup.get('cmbTipoPrecioVenta').valid && itemFormGroup.get('cmbTipoPrecioVenta').touched\">\r\n                                            <span *ngIf=\"itemFormGroup.controls['cmbTipoPrecioVenta'].hasError('required')\" class=\"text-danger\">Seleccione una opción.</span>\r\n                                        </span>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-xs-12 col-sm-4 col-md-3 col-lg-3\">\r\n                                    <div class=\"form-group label-floating\">\r\n                                        <label id=\"lblValorUnitario\" class=\"control-label\">Valor Unitario<span class=\"star\">*</span></label>\r\n                                        <input type=\"text\" id=\"txtValorUnitario\" formControlName=\"txtValorUnitario\" class=\"form-control\">\r\n                                        <span *ngIf=\"!itemFormGroup.get('txtValorUnitario').valid && itemFormGroup.get('txtValorUnitario').touched\">\r\n                                            <span *ngIf=\"itemFormGroup.controls['txtValorUnitario'].hasError('required')\" class=\"text-danger\">Valor Unitario es requerido.</span>\r\n                                            <span *ngIf=\"itemFormGroup.controls['txtValorUnitario'].hasError('pattern')\" class=\"text-danger\">Formato invalido.</span>\r\n                                            <span *ngIf=\"itemFormGroup.controls['txtValorUnitario'].hasError('minLength')\" class=\"text-danger\">Minimo 4 dígitos.</span>\r\n                                            <span *ngIf=\"itemFormGroup.controls['txtValorUnitario'].hasError('maxlength')\" class=\"text-danger\">Minimo de dígitos.</span>\r\n                                        </span>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-xs-12 col-sm-4 col-md-3 col-lg-3\">\r\n                                    <div class=\"form-group label-floating\">\r\n                                        <label id=\"lblDescuento\" class=\"control-label\">Descuento<span class=\"star\">*</span></label>\r\n                                        <input type=\"text\" id=\"txtDescuento\" formControlName=\"txtDescuento\" class=\"form-control\">\r\n                                        <span *ngIf=\"!itemFormGroup.get('txtDescuento').valid && itemFormGroup.get('txtDescuento').touched\">\r\n                                            <span *ngIf=\"itemFormGroup.controls['txtDescuento'].hasError('required')\" class=\"text-danger\">Descuento es requerido.</span>\r\n                                            <span *ngIf=\"itemFormGroup.controls['txtDescuento'].hasError('pattern')\" class=\"text-danger\">Formato invalido.</span>\r\n                                            <span *ngIf=\"itemFormGroup.controls['txtDescuento'].hasError('minLength')\" class=\"text-danger\">Minimo 4 dígitos.</span>\r\n                                            <span *ngIf=\"itemFormGroup.controls['txtDescuento'].hasError('maxlength')\" class=\"text-danger\">Minimo 15 dígitos.</span>\r\n                                        </span>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-xs-12 col-sm-4 col-md-3 col-lg-3\">\r\n                                    <div class=\"form-group label-floating\">\r\n                                        <label id=\"lblCalculoIsc\" class=\"control-label\">Cálculo de ISC<span class=\"star\">*</span></label>\r\n                                        <select id=\"cmbCalculoIsc\" formControlName=\"cmbCalculoIsc\" class=\"form-control\">\r\n                                            <option *ngFor=\"let calculoIsc of dtoOutCalculoISC\" [value]=\"calculoIsc.id\">\r\n                                                {{calculoIsc.nombre}}\r\n                                            </option>\r\n                                        </select>\r\n                                        <span *ngIf=\"!itemFormGroup.get('cmbCalculoIsc').valid && itemFormGroup.get('cmbCalculoIsc').touched\">\r\n                                            <span *ngIf=\"itemFormGroup.controls['cmbCalculoIsc'].hasError('required')\" class=\"text-danger\">Seleccione una opción.</span>\r\n                                        </span>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-xs-12 col-sm-4 col-md-3 col-lg-3\">\r\n                                    <div class=\"form-group label-floating input-group\">\r\n                                        <label id=\"lblIsc\" class=\"control-label\">ISC</label>\r\n                                        <input type=\"text\" id=\"txtIsc\" formControlName=\"txtIsc\" class=\"form-control\">\r\n                                        <span class=\"input-group-addon\" (click)=\"cambiarEstadoIsc()\">\r\n                                            <i class=\"fa fa-lock\"></i>\r\n                                        </span>\r\n                                        <span *ngIf=\"!itemFormGroup.get('txtIsc').valid && itemFormGroup.get('txtIsc').touched\">\r\n                                            <span *ngIf=\"itemFormGroup.controls['txtIsc'].hasError('required')\" class=\"text-danger\">Isc es requerida.</span>\r\n                                            <span *ngIf=\"itemFormGroup.controls['txtIsc'].hasError('pattern')\" class=\"text-danger\">Formato invalido.</span>\r\n                                            <span *ngIf=\"itemFormGroup.controls['txtIsc'].hasError('minLength')\" class=\"text-danger\">Minimo 4 dígitos.</span>\r\n                                            <span *ngIf=\"itemFormGroup.controls['txtIsc'].hasError('maxlength')\" class=\"text-danger\">Minimo 15 dígitos.</span>\r\n                                        </span>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-xs-12 col-sm-4 col-md-3 col-lg-3\">\r\n                                    <div class=\"form-group label-floating\">\r\n                                        <label id=\"lblIgv\" class=\"control-label\">IGV<span class=\"star\">*</span></label>\r\n                                        <select id=\"cmbIgv\" formControlName=\"cmbIgv\" class=\"form-control\" (change)=\"selectIgv($event.target.value)\">\r\n                                            <option *ngFor=\"let igv of dtoOutIgvBase\" [value]=\"igv.id\">\r\n                                                {{igv.nombre}}\r\n                                            </option>\r\n                                        </select>\r\n                                        <span *ngIf=\"!itemFormGroup.get('cmbIgv').valid && itemFormGroup.get('cmbIgv').touched\">\r\n                                            <span *ngIf=\"itemFormGroup.controls['cmbIgv'].hasError('required')\" class=\"text-danger\">Seleccione una opción.</span>\r\n                                        </span>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-xs-12 col-sm-4 col-md-3 col-lg-3\">\r\n                                    <div class=\"form-group label-floating\">\r\n                                        <label id=\"lblDescripcionIgv\" class=\"control-label\">Descripción IGV<span class=\"star\">*</span></label>\r\n                                        <select id=\"cmbDescripcionIgv\" formControlName=\"cmbDescripcionIgv\" class=\"form-control\">\r\n                                            <option *ngFor=\"let igv of dtoOutIgvDescripcion\" [value]=\"igv.id\">\r\n                                                {{igv.nombre}}\r\n                                            </option>\r\n                                        </select>\r\n                                        <span *ngIf=\"!itemFormGroup.get('cmbDescripcionIgv').valid && itemFormGroup.get('cmbDescripcionIgv').touched\">\r\n                                            <span *ngIf=\"itemFormGroup.controls['cmbDescripcionIgv'].hasError('required')\" class=\"text-danger\">Seleccione una opción.</span>\r\n                                        </span>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-xs-12 col-sm-4 col-md-3 col-lg-3\">\r\n                                    <div class=\"form-group label-floating\">\r\n                                        <label id=\"lblValorVenta\" class=\"control-label\">Valor Venta<span class=\"star\">*</span></label>\r\n                                        <input type=\"text\" id=\"txtValorVenta\" formControlName=\"txtValorVenta\" class=\"form-control\">\r\n                                        <span *ngIf=\"!itemFormGroup.get('txtValorVenta').valid && itemFormGroup.get('txtValorVenta').touched\">\r\n                                            <span *ngIf=\"itemFormGroup.get('txtValorVenta').errors['required']\" class=\"text-danger\">Cantidad es requerida.</span>\r\n                                            <span *ngIf=\"itemFormGroup.get('txtValorVenta').errors['pattern']\" class=\"text-danger\">Solo se permiten números.</span>\r\n                                            <span *ngIf=\"itemFormGroup.get('txtValorVenta').errors['minLength']\" class=\"text-danger\">Minimo de Digitos 5.</span>\r\n                                            <span *ngIf=\"itemFormGroup.get('txtValorVenta').errors['maxLength']\" class=\"text-danger\">Minimo de Digitos 16.</span>\r\n                                        </span>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            \r\n                            <div class=\"row\">\r\n                                <div class=\"col-sm-12\">\r\n                                    <div class=\"form-group pull-right\">\r\n                                        <button type=\"button\" class=\"btn btn-default blue\" id=\"btnRegresar\" (click)=\"regresar()\">Regresar</button>\r\n                                        <button type=\"submit\" class=\"btn btn-default blue\" id=\"btnGrabar\" [disabled]=\"!itemFormGroup.valid\" >Grabar</button>\r\n                                        <button *ngIf=\"!editable\" type=\"button\" class=\"btn btn-default blue\" id=\"btnSeguirGrabando\" [disabled]=\"!itemFormGroup.valid\" (click)=\"seguirGrabando()\">Seguir Grabando</button>\r\n                                        <button *ngIf=\"!editable\" type=\"button\" class=\"btn btn-default blue\" id=\"btnLimpiar\" [disabled]=\"true\" (click)=\"limpiar()\">Limpiar</button>\r\n                                        <button *ngIf=\"editable\" type=\"button\" class=\"btn btn-default blue\" id=\"btnEditar\" (click)=\"editar()\">Editar</button>                                    \r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </form>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/facturacion-electronica/comprobantes/comprobante-item/comprobante-item.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComprobanteItemComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__general_utils_rutas_service__ = __webpack_require__("../../../../../src/app/facturacion-electronica/general/utils/rutas.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_producto__ = __webpack_require__("../../../../../src/app/facturacion-electronica/comprobantes/models/producto.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_comprobante_productos_service__ = __webpack_require__("../../../../../src/app/facturacion-electronica/comprobantes/services/comprobante.productos.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__models_igv__ = __webpack_require__("../../../../../src/app/facturacion-electronica/comprobantes/models/igv.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__general_productos_comprobante_service__ = __webpack_require__("../../../../../src/app/facturacion-electronica/comprobantes/general/productos-comprobante.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__general_utils_constantes_service__ = __webpack_require__("../../../../../src/app/facturacion-electronica/general/utils/constantes.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var ComprobanteItemComponent = (function () {
    function ComprobanteItemComponent(_comprobanteService, _const, _route, _router, _rutas, _itemsFactura) {
        this._comprobanteService = _comprobanteService;
        this._const = _const;
        this._route = _route;
        this._router = _router;
        this._rutas = _rutas;
        this._itemsFactura = _itemsFactura;
        this.dtoOutIgvBase = [];
        this.dtoOutIgvDescripcionTmp = [];
        this.dtoOutIgvDescripcion = [];
        this.cmbIgvSeleccionado = 1;
        this.estadoIsc = true;
        this.item = new __WEBPACK_IMPORTED_MODULE_4__models_producto__["a" /* Producto */]();
        this.productoEditar = this._itemsFactura.getItemEditar();
        this.initForm();
        this.cargarServicios();
    }
    ComprobanteItemComponent.prototype.ngOnInit = function () {
        this.obtenerParametros();
        console.log(this.productoEditar);
    };
    ComprobanteItemComponent.prototype.ngOnDestroy = function () {
        this.subscriptionCalculoIsc.unsubscribe();
        this.subscriptionIgv.unsubscribe();
        this.subscriptionTipoPrecioVenta.unsubscribe();
        this.subscriptionUnidadMedida.unsubscribe();
    };
    ComprobanteItemComponent.prototype.cargarServicios = function () {
        var _this = this;
        this.subscriptionUnidadMedida = this._comprobanteService.unidadMedidaChanged
            .subscribe(function (data) {
            _this.dtoOutUnidadMedida = data;
        });
        this.subscriptionTipoPrecioVenta = this._comprobanteService.tipoPrecioVentaChanged
            .subscribe(function (data) {
            _this.dtoOutPrecioVenta = data;
        });
        this.subscriptionCalculoIsc = this._comprobanteService.calculoIscChanged
            .subscribe(function (data) {
            _this.dtoOutCalculoISC = data;
        });
        this.subscriptionIgv = this._comprobanteService.igvChanged
            .subscribe(function (data) {
            _this.dtoOutIgv = data;
            _this.setIgvDescripcion();
        });
    };
    ComprobanteItemComponent.prototype.setIgvDescripcion = function () {
        var idPadre = 0;
        var nombrePadre = '';
        for (var a = 0; a < this.dtoOutIgv.length; a++) {
            var tmpIgvPadre = new __WEBPACK_IMPORTED_MODULE_6__models_igv__["a" /* Igv */]();
            var tmpIgvHijo = new __WEBPACK_IMPORTED_MODULE_6__models_igv__["a" /* Igv */]();
            tmpIgvPadre.nombre = this.dtoOutIgv[a].nombre.slice(0, this.dtoOutIgv[a].nombre.search('-') - 1);
            if (idPadre === 0) {
                idPadre += 1;
                nombrePadre = tmpIgvPadre.nombre;
                tmpIgvPadre.id = idPadre;
                this.dtoOutIgvBase.push(tmpIgvPadre);
            }
            else {
                if (nombrePadre != tmpIgvPadre.nombre) {
                    idPadre += 1;
                    tmpIgvPadre.id = idPadre;
                    nombrePadre = tmpIgvPadre.nombre;
                    this.dtoOutIgvBase.push(tmpIgvPadre);
                }
            }
            tmpIgvHijo.id = this.dtoOutIgv[a].id;
            tmpIgvHijo.nombre = this.dtoOutIgv[a].nombre.slice(this.dtoOutIgv[a].nombre.search('-') + 2);
            tmpIgvHijo.idPadre = idPadre;
            this.dtoOutIgvDescripcionTmp.push(tmpIgvHijo);
        }
        console.log(this.dtoOutIgv);
        console.log(this.dtoOutIgvBase);
        console.log(this.dtoOutIgvDescripcionTmp);
    };
    ComprobanteItemComponent.prototype.selectIgv = function (idIgvPadre) {
        this.dtoOutIgvDescripcion = [];
        for (var a = 0; a < this.dtoOutIgvDescripcionTmp.length; a++) {
            var tmpIgv = new __WEBPACK_IMPORTED_MODULE_6__models_igv__["a" /* Igv */]();
            if (this.dtoOutIgvDescripcionTmp[a].idPadre == idIgvPadre) {
                tmpIgv.id = this.dtoOutIgvDescripcionTmp[a].id;
                tmpIgv.nombre = this.dtoOutIgvDescripcionTmp[a].nombre;
                this.dtoOutIgvDescripcion.push(tmpIgv);
            }
        }
    };
    ComprobanteItemComponent.prototype.obtenerParametros = function () {
        this.tipoAccion = this._route.snapshot.data['tipoAccion'];
        this.setTipoItem();
    };
    ComprobanteItemComponent.prototype.deshabilitar = function () {
        this.itemFormGroup.disable();
    };
    ComprobanteItemComponent.prototype.habilitar = function () {
        this.itemFormGroup.enable();
        this.itemFormGroup.controls['txtIsc'].disable();
        this.itemFormGroup.controls['txtValorVenta'].disable();
    };
    ComprobanteItemComponent.prototype.setTipoItem = function () {
        switch (this.tipoAccion) {
            case this._const.ITEM_SERVICIO_CREAR:
                this.titulo = this._const.ITEM_SERVICIO_CREAR_TITULO;
                this.esBien = false;
                this.editable = false;
                break;
            case this._const.ITEM_SERVICIO_EDITAR:
                this.titulo = this._const.ITEM_SERVICIO_EDITAR_TITULO;
                this.esBien = false;
                this.editable = true;
                this.deshabilitar();
                this.cargarProductoEditar();
                break;
            case this._const.ITEM_BIEN_CREAR:
                this.titulo = this._const.ITEM_BIEN_CREAR_TITULO;
                this.esBien = true;
                this.editable = false;
                break;
            case this._const.ITEM_BIEN_EDITAR:
                this.titulo = this._const.ITEM_BIEN_EDITAR_TITULO;
                this.esBien = true;
                this.editable = true;
                this.deshabilitar();
                this.cargarProductoEditar();
                break;
        }
    };
    ComprobanteItemComponent.prototype.cargarProductoEditar = function () {
        this.itemFormGroup.controls['txtCantidad'].setValue(this.productoEditar.txtCantidad);
        this.itemFormGroup.controls['txtCodigo'].setValue(this.productoEditar.txtCodigo);
        this.itemFormGroup.controls['txtDescripcion'].setValue(this.productoEditar.txtDescripcion);
        this.itemFormGroup.controls['cmbUnidadMedida'].setValue(this.productoEditar.cmbUnidadMedida);
        this.itemFormGroup.controls['cmbTipoPrecioVenta'].setValue(this.productoEditar.cmbTipoPrecioVenta);
        this.itemFormGroup.controls['txtValorUnitario'].setValue(this.productoEditar.txtValorUnitario);
        this.itemFormGroup.controls['txtDescuento'].setValue(this.productoEditar.txtDescuento);
        this.itemFormGroup.controls['cmbCalculoIsc'].setValue(this.productoEditar.cmbCalculoIsc);
        this.itemFormGroup.controls['txtIsc'].setValue(this.productoEditar.txtIsc);
        this.itemFormGroup.controls['cmbIgv'].setValue(this.productoEditar.cmbIgv);
        this.itemFormGroup.controls['cmbDescripcionIgv'].setValue(this.productoEditar.cmbDescripcionIgv);
        this.itemFormGroup.controls['txtValorVenta'].setValue(this.productoEditar.txtValorVenta);
    };
    ComprobanteItemComponent.prototype.initForm = function () {
        this.itemFormGroup = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormGroup */]({
            'txtCantidad': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', [
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern('[0-9]+[.][0-9]{2}'),
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(4),
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(16)
            ]),
            'txtCodigo': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', [
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern('[0-9/-]+'),
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(3),
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(12)
            ]),
            'txtDescripcion': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', [
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern('[A-Za-z0-9áéíóúÁÉÍÓÚ/%\\s-]+'),
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(1),
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(250)
            ]),
            'cmbUnidadMedida': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]),
            'cmbTipoPrecioVenta': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]),
            'txtValorUnitario': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', [
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern('[0-9]+[.][0-9]{2}'),
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(4),
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(15)
            ]),
            'txtDescuento': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', [
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern('[0-9]+[.][0-9]{2}'),
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(4),
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(15)
            ]),
            'cmbCalculoIsc': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]),
            'txtIsc': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', [
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern('[0-9]+[.][0-9]{2}'),
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(4),
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(15)
            ]),
            'cmbIgv': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]),
            'cmbDescripcionIgv': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]),
            'txtValorVenta': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', [
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern('[0-9]+[.][0-9]{2}'),
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(4),
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(15)
            ]),
        });
        this.itemFormGroup.controls['txtIsc'].disable();
        if (!this.esBien) {
            this.itemFormGroup.controls['cmbUnidadMedida'].disable();
        }
    };
    ComprobanteItemComponent.prototype.regresar = function () {
        this._router.navigateByUrl(this._rutas.URL_COMPROBANTE_BOLETA_CREAR);
    };
    ComprobanteItemComponent.prototype.grabar = function () {
        this.getDataFormulario();
        this._itemsFactura.agregarItem(this.item);
        this._router.navigateByUrl(this._rutas.URL_COMPROBANTE_BOLETA_CREAR);
    };
    ComprobanteItemComponent.prototype.seguirGrabando = function () {
        console.log('ITEM GRABADO');
        this.getDataFormulario();
        this._itemsFactura.agregarItem(this.item);
        this.limpiar();
    };
    ComprobanteItemComponent.prototype.setTipoProducto = function () {
        if (this.esBien) {
            this.item.tipoProducto = this._const.TIPO_PRODUCTO_BIEN;
        }
        else {
            this.item.tipoProducto = this._const.TIPO_PRODUCTO_SERVICIO;
        }
    };
    ComprobanteItemComponent.prototype.cambiarEstadoIsc = function () {
        if (this.estadoIsc) {
            this.estadoIsc = false;
            this.itemFormGroup.controls['txtIsc'].disable();
        }
        else {
            this.estadoIsc = true;
            this.itemFormGroup.controls['txtIsc'].enable();
        }
    };
    ComprobanteItemComponent.prototype.limpiar = function () {
        this.itemFormGroup.reset();
        setTimeout(function () {
            $('input').each(function () {
                $(this.parentElement).addClass('is-empty');
            });
            $('select').each(function () {
                $(this.parentElement).addClass('is-empty');
            });
        }, 200);
    };
    ComprobanteItemComponent.prototype.editar = function () {
        this.habilitar();
        console.log('EDITANDO');
    };
    ComprobanteItemComponent.prototype.getDataFormulario = function () {
        this.item = this.itemFormGroup.value;
        this.setTipoProducto();
    };
    return ComprobanteItemComponent;
}());
ComprobanteItemComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'comprobante-item-component',
        template: __webpack_require__("../../../../../src/app/facturacion-electronica/comprobantes/comprobante-item/comprobante-item.component.html"),
        styles: [__webpack_require__("../../../../../src/app/facturacion-electronica/comprobantes/comprobante-item/comprobante-item.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5__services_comprobante_productos_service__["a" /* ComprobanteProductosService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_comprobante_productos_service__["a" /* ComprobanteProductosService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_8__general_utils_constantes_service__["a" /* ConstantesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__general_utils_constantes_service__["a" /* ConstantesService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__general_utils_rutas_service__["a" /* RutasService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__general_utils_rutas_service__["a" /* RutasService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_7__general_productos_comprobante_service__["a" /* ProductosComprobanteService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__general_productos_comprobante_service__["a" /* ProductosComprobanteService */]) === "function" && _f || Object])
], ComprobanteItemComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=comprobante-item.component.js.map

/***/ }),

/***/ "../../../../../src/app/facturacion-electronica/comprobantes/comprobante-item/comprobante-item.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComprobanteItemModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__comprobante_item_component__ = __webpack_require__("../../../../../src/app/facturacion-electronica/comprobantes/comprobante-item/comprobante-item.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ComprobanteItemModule = (function () {
    function ComprobanteItemModule() {
    }
    return ComprobanteItemModule;
}());
ComprobanteItemModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["e" /* ReactiveFormsModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__comprobante_item_component__["a" /* ComprobanteItemComponent */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__comprobante_item_component__["a" /* ComprobanteItemComponent */]
        ]
    })
], ComprobanteItemModule);

//# sourceMappingURL=comprobante-item.module.js.map

/***/ }),

/***/ "../../../../../src/app/facturacion-electronica/comprobantes/comprobante-vista-previa/comprobante-vista-previa.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\r\n    <div class=\"container-fluid\">\r\n      <div class=\"row col-md-12\">\r\n        <div class=\"card\">\r\n          <div class=\"card-header card-header-text\" data-background-color=\"blue\">\r\n            <h4 class=\"card-title\">Vista Previa</h4>\r\n          </div>\r\n          <div class=\"card-content\">\r\n              <div class=\"row\">\r\n                <div class=\"col-md-offset-8\">\r\n                  <div class=\"row\"><h3><b>{{titulo}}</b></h3></div>\r\n                    <div class=\"row\"><h4><b>RUC (Proveedor):</b> </h4> &nbsp;<h4> XXXXXXXXX</h4></div>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-md-12\" style=\"padding: 40px\">\r\n                <div class=\"row\"><label><b>Razón Social (Proveedor):</b></label>&nbsp;<label>XXXXXXXXXX XXXXXXXXXX S.A.C</label></div>\r\n                <div class=\"row\"><label><b>Dirección: (Proveedor)</b></label>&nbsp;<label>Av. XXXXXX Nº XXX XXXXXXX-XXXXXXXX</label></div>\r\n                <hr>\r\n                <div class=\"row\"><label><b>Fecha de Emisión: </b></label></div>\r\n                <div class=\"row\"><label>XX-XX-XXXX</label></div>\r\n                <div class=\"row\"><label><b>Razón Social (Cliente): </b></label></div>\r\n                <div class=\"row\"><label>XXXXXXXXX  XXXXXXXXXX  XXXXXXXXX  XXXXXXXX</label></div>\r\n                <div class=\"row\"><label><b>RUC (Cliente): </b></label></div>\r\n                <div class=\"row\"><label>XXXXXXXXX</label></div>\r\n                <div class=\"row\"><label><b>Tipo de Moneda: </b></label></div>\r\n                <div class=\"row\"><label>XX.XX PEN</label></div>                \r\n                <div class=\"row\"><label><b>Lugar de Entrega: </b></label></div>\r\n                <div class=\"row\"><label>Av. XXXXXXX-XXXXXXXX XXXXXXX-XXXXXXXX XXXXXXX-XXXXXXXX</label></div>\r\n                <hr>\r\n                    \r\n                <div class=\"alert alert-info\" role=\"alert\">\r\n                    Documentos Relacionados\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-12\">\r\n                        <table>\r\n                            <tbody>\r\n                                <th class=\"grilla\">\r\n                                    <span class=\"documentoRelacionadoTitulo\">Guía de Remisión de Transportista</span><br>\r\n                                    <span class=\"documentoRelacionadoDescripcion\">123 - 123</span>\r\n                                </th>\r\n                            </tbody>\r\n                        </table>\r\n                    </div>\r\n                </div>\r\n\r\n                <hr>\r\n                <div class=\"material-datatables table-responsive\">\r\n                  <table id=\"dtresumencomprobantes\" class=\"table table-striped table-no-bordered table-hover\" cellspacing=\"0\"\r\n                         width=\"100%\" style=\"width:100%\">\r\n                    <thead>\r\n                    <tr>\r\n                      <th>Cantidad</th>\r\n                      <th>Unidad de Medida</th>\r\n                      <th>Código</th>\r\n                      <th>Descripción</th>\r\n                      <th>IGV</th>\r\n                      <th>Importe del Item</th>\r\n                    </thead>\r\n                  </table>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-md-12\" style=\"padding: 40px\">\r\n  \r\n              </div>\r\n              <div class=\"col-md-12\" align=\"right\">\r\n                <button type=\"submit\" class=\"btn btn-info blue\" (click)=\"regresar()\">  Volver  </button>\r\n                <button type=\"submit\" class=\"btn btn-info blue\" (click)=\"emitir()\"> Emitir Factura </button>\r\n              </div>\r\n        </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  "

/***/ }),

/***/ "../../../../../src/app/facturacion-electronica/comprobantes/comprobante-vista-previa/comprobante-vista-previa.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComprobanteVistaPreviaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__general_utils_rutas_service__ = __webpack_require__("../../../../../src/app/facturacion-electronica/general/utils/rutas.service.ts");
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
var ComprobanteVistaPreviaComponent = (function () {
    function ComprobanteVistaPreviaComponent(_rutas, route, router) {
        this._rutas = _rutas;
        this.route = route;
        this.router = router;
        this.editMode = false;
        this.data = [
            {
                'cantidad': '1.00',
                'unidadMedida': 'Bobinas',
                'codigo': '123',
                'descripcion': 'Producto de Muestra 1',
                'igv': '2.16',
                'importeItem': '14.16',
            },
            {
                'cantidad': '1.00',
                'unidadMedida': 'Bobinas',
                'codigo': '456',
                'descripcion': 'Producto de Muestra 2',
                'igv': '2.16',
                'importeItem': '14.16',
            },
        ];
        this.obtenerParametros();
    }
    ComprobanteVistaPreviaComponent.prototype.ngOnInit = function () {
        cargarDataTable(this.data);
    };
    ComprobanteVistaPreviaComponent.prototype.obtenerParametros = function () {
        this.titulo = this.route.snapshot.data['titulo'];
    };
    ComprobanteVistaPreviaComponent.prototype.regresar = function () {
        this.router.navigateByUrl(this._rutas.URL_COMPROBANTE_BOLETA_CREAR);
    };
    ComprobanteVistaPreviaComponent.prototype.emitir = function () {
        this.router.navigateByUrl(this._rutas.URL_COMPROBANTE_FACTURA_EMITIR);
    };
    ComprobanteVistaPreviaComponent.prototype.ngOnDestroy = function () {
    };
    return ComprobanteVistaPreviaComponent;
}());
ComprobanteVistaPreviaComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-vistaprevia',
        template: __webpack_require__("../../../../../src/app/facturacion-electronica/comprobantes/comprobante-vista-previa/comprobante-vista-previa.component.html"),
        styles: [__webpack_require__("../../../../../src/app/facturacion-electronica/comprobantes/comprobante-vista-previa/comprobante-vista-previa.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__general_utils_rutas_service__["a" /* RutasService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__general_utils_rutas_service__["a" /* RutasService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _c || Object])
], ComprobanteVistaPreviaComponent);

function cargarDataTable(data) {
    datatable = $('#dtresumencomprobantes').DataTable({
        searching: false,
        columns: [
            { data: 'cantidad', name: 'cantidad' },
            { data: 'unidadMedida', name: 'unidadMedida' },
            { data: 'codigo', name: 'codigo' },
            { data: 'descripcion', name: 'descripcion' },
            { data: 'igv', name: 'igv' },
            { data: 'importeItem', name: 'importeItem' },
        ],
        columnDefs: [
            { 'className': 'text-center', 'targets': [0, 1, 2, 3, 4, 5] },
        ],
        data: data
    });
}
var _a, _b, _c;
//# sourceMappingURL=comprobante-vista-previa.component.js.map

/***/ }),

/***/ "../../../../../src/app/facturacion-electronica/comprobantes/comprobante-vista-previa/comprobante-vista-previa.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "input.ng-invalid.ng-touched,\r\nmat-select.ng-invalid.ng-touched{\r\n  border-bottom: 1px solid red;\r\n}\r\nmat-select{\r\n  border-bottom: 1px solid #AAAAAA;\r\n}\r\ndiv.row{\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n}\r\n.alert-info{\r\n  background: #0079bf;\r\n}\r\n.grilla{\r\n  padding-left: 10px;\r\n  padding-right: 10px;\r\n  padding-top: 5px;\r\n  padding-bottom: 5px;\r\n}\r\n.documentoRelacionadoDescripcion{\r\n  font-weight: 200;\r\n}\r\n.documentoRelacionadoTitulo{\r\n  font-weight: 700;\r\n}\r\n.blue{\r\n  background: #0079bf;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/facturacion-electronica/comprobantes/comprobante-vista-previa/comprobante-vista-previa.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComprobanteVistaPreviaModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__comprobante_vista_previa_component__ = __webpack_require__("../../../../../src/app/facturacion-electronica/comprobantes/comprobante-vista-previa/comprobante-vista-previa.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ComprobanteVistaPreviaModule = (function () {
    function ComprobanteVistaPreviaModule() {
    }
    return ComprobanteVistaPreviaModule;
}());
ComprobanteVistaPreviaModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__comprobante_vista_previa_component__["a" /* ComprobanteVistaPreviaComponent */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__comprobante_vista_previa_component__["a" /* ComprobanteVistaPreviaComponent */]
        ]
    })
], ComprobanteVistaPreviaModule);

//# sourceMappingURL=comprobante-vista-previa.module.js.map

/***/ }),

/***/ "../../../../../src/app/facturacion-electronica/comprobantes/general/productos-comprobante.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductosComprobanteService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_producto__ = __webpack_require__("../../../../../src/app/facturacion-electronica/comprobantes/models/producto.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProductosComprobanteService = (function () {
    function ProductosComprobanteService() {
        this.items = [];
        this.itemEditar = new __WEBPACK_IMPORTED_MODULE_1__models_producto__["a" /* Producto */]();
        // this.items = null;
    }
    ProductosComprobanteService.prototype.agregarItem = function (item) {
        this.items.push(item);
    };
    ProductosComprobanteService.prototype.getItems = function () {
        return this.items;
    };
    ProductosComprobanteService.prototype.setItemEditar = function (item) {
        this.itemEditar = item;
    };
    ProductosComprobanteService.prototype.getItemEditar = function () {
        return this.itemEditar;
    };
    return ProductosComprobanteService;
}());
ProductosComprobanteService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], ProductosComprobanteService);

//# sourceMappingURL=productos-comprobante.service.js.map

/***/ }),

/***/ "../../../../../src/app/facturacion-electronica/comprobantes/models/igv.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Igv; });
var Igv = (function () {
    function Igv() {
        this.id = null;
        this.nombre = null;
        this.idPadre = null;
    }
    return Igv;
}());

//# sourceMappingURL=igv.js.map

/***/ }),

/***/ "../../../../../src/app/facturacion-electronica/comprobantes/models/producto.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Producto; });
var Producto = (function () {
    function Producto() {
        this.tipoProducto = null;
        this.txtCantidad = null;
        this.txtCodigo = null;
        this.txtDescripcion = null;
        this.cmbUnidadMedida = null;
        this.cmbTipoPrecioVenta = null;
        this.txtValorUnitario = null;
        this.txtDescuento = null;
        this.cmbCalculoIsc = null;
        this.txtIsc = null;
        this.cmbIgv = null;
        this.cmbDescripcionIgv = null;
        this.txtValorVenta = null;
    }
    return Producto;
}());

//# sourceMappingURL=producto.js.map

/***/ }),

/***/ "../../../../../src/app/facturacion-electronica/comprobantes/services/comprobante.productos.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComprobanteProductosService; });
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




var ComprobanteProductosService = (function () {
    function ComprobanteProductosService(httpClient) {
        this.httpClient = httpClient;
        this.urlUnidadMedida = 'https://facturacion-cb377.firebaseio.com/unidadMedida.json';
        this.urlTipoPrecioVenta = 'https://facturacion-cb377.firebaseio.com/tipoPrecioVentaUnitario.json';
        this.urlCalculoIsc = 'https://facturacion-cb377.firebaseio.com/isc.json';
        this.urlIgv = 'https://facturacion-cb377.firebaseio.com/igv.json';
        this.unidadMedidaChanged = new __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__["BehaviorSubject"]([]);
        this.tipoPrecioVentaChanged = new __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__["BehaviorSubject"]([]);
        this.calculoIscChanged = new __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__["BehaviorSubject"]([]);
        this.igvChanged = new __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__["BehaviorSubject"]([]);
        this.getUnidadMedida();
        this.getTipoPrecioVenta();
        this.getCalculoIsc();
        this.getIgv();
    }
    ComprobanteProductosService.prototype.getUnidadMedida = function () {
        var _this = this;
        this.getTipos(this.urlUnidadMedida).
            subscribe(function (data) {
            _this.unidadMedida = data;
            _this.unidadMedidaChanged.next(data.slice());
        });
    };
    ComprobanteProductosService.prototype.getTipoPrecioVenta = function () {
        var _this = this;
        this.getTipos(this.urlTipoPrecioVenta).
            subscribe(function (data) {
            _this.tipoPrecioVenta = data;
            _this.tipoPrecioVentaChanged.next(data.slice());
        });
    };
    ComprobanteProductosService.prototype.getCalculoIsc = function () {
        var _this = this;
        this.getTipos(this.urlCalculoIsc)
            .subscribe(function (data) {
            _this.calculoIsc = data;
            _this.calculoIscChanged.next(data.slice());
        });
    };
    ComprobanteProductosService.prototype.getIgv = function () {
        var _this = this;
        this.getTipos(this.urlIgv)
            .subscribe(function (data) {
            _this.igv = data;
            _this.igvChanged.next(data.slice());
        });
    };
    ComprobanteProductosService.prototype.getTipos = function (url) {
        return this.httpClient.get(url, {
            observe: 'body',
            responseType: 'json'
        }).
            map(function (tipos) {
            return tipos;
        });
    };
    return ComprobanteProductosService;
}());
ComprobanteProductosService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object])
], ComprobanteProductosService);

var _a;
//# sourceMappingURL=comprobante.productos.service.js.map

/***/ }),

/***/ "../../../../../src/app/facturacion-electronica/general/consulta/consulta.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".blue {\r\n  background: #0079BF;\r\n}\r\n.input-group-addon {\r\n  background: transparent;\r\n  border: 0;\r\n  padding: 0;\r\n}\r\n.card .card-header.card-header-icon{\r\n  width: 60px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/facturacion-electronica/general/consulta/consulta.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"row col-md-12\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header card-header-text\" data-background-color=\"blue\">\r\n                    <h4 class=\"card-title\">{{titulo}}</h4>\r\n                </div>\r\n                <div class=\"card-content\">\r\n                    <form [formGroup]=\"consultaFormGroup\" (ngSubmit)=\"buscar()\">\r\n                        <div class=\"row\">\r\n                            <div class=\"col-sm-3\" *ngIf=\"tipoComprobanteFlag\">\r\n                                <div class=\"form-group label-floating\">\r\n                                    <label class=\"control-label\">Tipo Comprobante<span class=\"star\">*</span></label>\r\n                                    <select id=\"cmbTipoComprobante\" name=\"cmbTipoComprobante\" formControlName=\"cmbTipoComprobante\" class=\"form-control\">\r\n                                        <option *ngFor=\"let tipoComprobante of tiposComprobantes\" [value]=\"tipoComprobante.id\">\r\n                                            {{tipoComprobante.nombre}}\r\n                                        </option>\r\n                                    </select>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-sm-3\" *ngIf=\"tipoDocumentoFlag\">\r\n                                <div class=\"form-group label-floating\">\r\n                                    <label class=\"control-label\">Tipo Documento</label>\r\n                                    <select id=\"cmbTipoDocumento\" \r\n                                            name=\"cmbTipoDocumento\" \r\n                                            formControlName=\"cmbTipoDocumento\" \r\n                                            class=\"form-control\"\r\n                                            (change)=\"setTipoDocumentoValidaciones()\">\r\n                                        <option *ngFor=\"let tipoDocumento of dtoOutListarTipoDocumento\" [value]=\"tipoDocumento.id\">\r\n                                            {{tipoDocumento.nombre}}\r\n                                        </option>\r\n                                    </select>\r\n                                </div> \r\n                            </div>\r\n                            <div class=\"col-sm-3\">\r\n                                <div class=\"form-group label-floating\">\r\n                                    <label class=\"control-label\">Número de Documento</label>\r\n                                    <input id=\"txtNumeroDocumento\" type=\"text\" name=\"txtNumeroDocumento\" formControlName=\"txtNumeroDocumento\" class=\"form-control\">\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-sm-3\" *ngIf=\"ticketFlag\">\r\n                                <div class=\"form-group label-floating\">\r\n                                    <label class=\"control-label\">Ticket</label>\r\n                                    <input id=\"txtTicket\" type=\"text\" name=\"txtTicket\" formControlName=\"txtTicket\" class=\"form-control\">\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-sm-3\">\r\n                                <div class=\"form-group label-floating\">\r\n                                    <label class=\"control-label\">N° Serie</label>\r\n                                    <select id=\"cmbSerie\" formControlName=\"cmbSerie\" name=\"cmbSerie\" class=\"form-control\">\r\n                                        <option *ngFor=\"let serie of series\" [value]=\"serie.id\">\r\n                                            {{serie.nombre}}\r\n                                        </option>\r\n                                    </select>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-sm-3\" *ngIf=\"estadoFlag\">\r\n                                <div class=\"form-group label-floating\">\r\n                                    <label class=\"control-label\">Estado</label>\r\n                                    <select id=\"cmbEstado\" formControlName=\"cmbEstado\" name=\"cmbEstado\" class=\"form-control\">\r\n                                        <option *ngFor=\"let estado of estados\" [value]=\"estado.id\">\r\n                                            {{estado.nombre}}\r\n                                        </option>\r\n                                    </select>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-sm-3\">\r\n                                <div class=\"form-group label-floating\">\r\n                                    <label class=\"control-label\">Correlativo Inicial</label>\r\n                                    <input id=\"txtNúmeroCorrelativoInicial\" name=\"txtNúmeroCorrelativoInicial\" type=\"text\" formControlName=\"txtNúmeroCorrelativoInicial\" class=\"form-control\">\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-sm-3\">\r\n                                <div class=\"form-group label-floating\">\r\n                                    <label class=\"control-label\">Correlativo Final</label>\r\n                                    <input id=\"txtNúmeroCorrelativoFinal\" name=\"txtNúmeroCorrelativoFinal\" type=\"text\" formControlName=\"txtNúmeroCorrelativoFinal\" class=\"form-control\">\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-md-12\">\r\n                                <label class=\"control-label\">Fecha Emisión</label>\r\n                            </div>\r\n                            <div class=\"col-sm-3\">\r\n                                <div class=\"form-group label-floating\">\r\n                                    <label class=\"control-label\">Del</label>\r\n                                    <input id=\"dateFechaEmisionDel\" type=\"text\" name=\"dateFechaEmisionDelv\" formControlName=\"dateFechaEmisionDel\" class=\"form-control\" datepicker/>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-sm-3\">\r\n                                <div class=\"form-group label-floating\">\r\n                                    <label class=\"control-label\">Al</label>\r\n                                    <input id=\"dateFechaEmisionAl\" type=\"text\" name=\"dateFechaEmisionAl\" formControlName=\"dateFechaEmisionAl\" class=\"form-control\" datepicker />\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"row\">\r\n                            <div class=\"col-sm-12\">\r\n                                <div class=\"form-group pull-right\">\r\n                                    <button type=\"button\" class=\"btn btn-default blue\" name=\"btnRegresar\" (click)=\"regresar()\">Regresar</button>\r\n                                    <button type=\"submit\" class=\"btn btn-default blue\" name=\"btnBuscar\" >Buscar</button>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"row\">\r\n                            <div class=\"col-md-12\">\r\n                                <table>\r\n                                    <thead>\r\n                                        <tr>\r\n                                            <th>Fecha</th>\r\n                                            <th>Hora</th>\r\n                                            <th>Usuario</th>\r\n                                            <th>Descripción</th>\r\n                                        </tr>\r\n                                    </thead>\r\n                                </table>\r\n                            </div>\r\n                        </div>\r\n                    </form>\r\n                </div>\r\n                <button class=\"btn btn-primary btn-fill\" (click)=\"showBitacora()\">Modal Tabla</button>\r\n\r\n                <div class=\"col-md-12\">\r\n                    <div class=\"card\">\r\n                        <div class=\"card-header card-header-icon\" data-background-color=\"blue\">\r\n                            <span class=\"input-group-addon\">\r\n                                <i class=\"fa fa-list-ul fa-1x fa-inverse\"></i>\r\n                            </span>\r\n                        </div>\r\n                        <div class=\"row\"><h3>Comprobantes</h3></div>\r\n                        <nav class=\"navbar navbar-info\" role=\"navigation\"></nav>\r\n                        <div class=\"table-responsive\">\r\n                                <table id=\"consulta\" class=\"table table-striped table-no-bordered table-hover\" cellspacing=\"0\" width=\"100%\" style=\"width:100%\">\r\n                                    <thead>\r\n                                        <tr>\r\n                                            <th class=\"disabled-sorting text-right\">\r\n                                                <div class=\"checkbox text-right\">\r\n                                                    <label><input type=\"checkbox\" name=\"optionsCheckboxes\" class=\"checkall\" ></label>\r\n                                                </div>\r\n                                            </th>\r\n                                            <th>Comprobante</th>\r\n                                            <th>Tipo Documento</th>\r\n                                            <th>Número de Documento</th>\r\n                                            <th>Número de Serie</th>\r\n                                            <th>Correlativo</th>\r\n                                            \r\n                                            <th>Fecha de Emisión</th>\r\n                                            <th>Fecha de Envio</th>\r\n                                            <th>Estado</th>\r\n                                            <th>Observaciones</th>\r\n                                            <th>\r\n                                                <div class=\"checkbox text-right\">\r\n                                                    <label><input type=\"checkbox\" name=\"optionsCheckboxes\" class=\"checkall\" ></label>\r\n                                                </div>\r\n                                            </th>\r\n                                        </tr>\r\n                                    </thead>\r\n                                </table>\r\n                        </div>      \r\n                    </div>\r\n                </div>\r\n                \r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/facturacion-electronica/general/consulta/consulta.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConsultaComponent; });
/* unused harmony export Comprobante */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_tipos_service__ = __webpack_require__("../../../../../src/app/facturacion-electronica/general/utils/tipos.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_general_consulta_service__ = __webpack_require__("../../../../../src/app/facturacion-electronica/general/services/general.consulta.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_rutas_service__ = __webpack_require__("../../../../../src/app/facturacion-electronica/general/utils/rutas.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ConsultaComponent = (function () {
    function ConsultaComponent(_route, _router, _tipos, _generalConsultaService, _rutas) {
        this._route = _route;
        this._router = _router;
        this._tipos = _tipos;
        this._generalConsultaService = _generalConsultaService;
        this._rutas = _rutas;
        this.dtoOutListarTipoDocumento = [];
        this.data = [
            {
                'Estado': true,
                'Comprobante': '0001-10000001',
                'Serie': '0001',
                'Correlativo': '10000001',
                'ImporteTotal': '10.20',
                'ImporteAUsar': '12.20'
            },
            {
                'Estado': true,
                'Comprobante': '0001-10000001',
                'Serie': '0001',
                'Correlativo': '10000001',
                'ImporteTotal': '10.20',
                'ImporteAUsar': '12.22'
            }
        ];
        this.obtenerParametros();
        this.cargarServiciosArranque();
    }
    ConsultaComponent.prototype.ngOnInit = function () {
        this.InitForm();
        this.cargarServiciosArranque();
        this.setCamposFormulario();
    };
    ConsultaComponent.prototype.ngOnDestroy = function () {
        // this.subscriptionTipoDocumento.unsubscribe();
    };
    ConsultaComponent.prototype.cargarServiciosArranque = function () {
        var _this = this;
        this.subscriptionTipoDocumento = this._generalConsultaService.listarTipoDocumento()
            .subscribe(function (data) {
            _this.dtoOutListarTipoDocumento = data;
            console.log('SERVICIO', _this.dtoOutListarTipoDocumento);
        });
    };
    ConsultaComponent.prototype.obtenerParametros = function () {
        this.titulo = this._route.snapshot.data['titulo'];
        this.tipoConsulta = this._route.snapshot.data['tipoConsulta'];
    };
    ConsultaComponent.prototype.setCamposFormulario = function () {
        switch (this.tipoConsulta) {
            case this._tipos.TIPO_CONSULTA_FACTURA_DOCUMENTO_RELACIONADO:
                this.tipoComprobanteFlag = true;
                this.tipoDocumentoFlag = false;
                this.ticketFlag = false;
                this.estadoFlag = false;
                break;
            case this._tipos.TIPO_CONSULTA_BOLETA_DOCUMENTO_RELACIONADO:
                this.tipoComprobanteFlag = true;
                this.tipoDocumentoFlag = false;
                this.ticketFlag = false;
                this.estadoFlag = false;
                break;
        }
    };
    ConsultaComponent.prototype.setTipoComprobante = function () {
        switch (this.tipoConsulta) {
            case this._tipos.TIPO_CONSULTA_FACTURA_DOCUMENTO_RELACIONADO:
                this.tiposComprobantes = [
                    new Comprobante(),
                    new Comprobante()
                ];
                this.tiposComprobantes[0].id = this._tipos.TIPO_DOCUMENTO_FACTURA_ANTICIPO;
                this.tiposComprobantes[0].nombre = this._tipos.TIPO_DOCUMENTO_FACTURA_ANTICIPO_NOMBRE;
                this.tiposComprobantes[1].id = this._tipos.TIPO_DOCUMENTO_GUIA_REMISION_REMITENTE;
                this.tiposComprobantes[1].nombre = this._tipos.TIPO_DOCUMENTO_GUIA_REMISION_REMITENTE_NOMBRE;
                break;
            case this._tipos.TIPO_CONSULTA_BOLETA_DOCUMENTO_RELACIONADO:
                this.tiposComprobantes = [
                    new Comprobante()
                ];
                this.tiposComprobantes[0].id = this._tipos.TIPO_DOCUMENTO_BOLETA_ANTICIPO;
                break;
        }
    };
    ConsultaComponent.prototype.InitForm = function () {
        this.consultaFormGroup = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormGroup */]({
            'cmbTipoComprobante': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', [
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required
            ]),
            'cmbTipoDocumento': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', [
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required
            ]),
            'txtNumeroDocumento': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', [
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern('[0-9]+[.][0-9]{2}'),
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(4),
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(16)
            ]),
            'txtTicket': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', [
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern('[0-9]+'),
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(1),
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(20)
            ]),
            'cmbSerie': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', [
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required
            ]),
            'cmbEstado': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', [
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required
            ]),
            'txtNúmeroCorrelativoInicial': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', [
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required
            ]),
            'txtNúmeroCorrelativoFinal': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', [
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required
            ]),
            'dateFechaEmisionDel': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', [
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required
            ]),
            'dateFechaEmisionAl': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', [
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required
            ])
        });
        this.setTipoComprobante();
    };
    ConsultaComponent.prototype.setTipoDocumentoValidaciones = function () {
    };
    ConsultaComponent.prototype.buscar = function () {
        console.log('buscar');
        this._generalConsultaService.buscar();
    };
    ConsultaComponent.prototype.ngAfterViewInit = function () {
        cargarDataTable(this.data);
    };
    ConsultaComponent.prototype.navigate = function (nav) {
        this._router.navigate(nav, { relativeTo: this._route });
    };
    ConsultaComponent.prototype.regresar = function () {
        switch (this.tipoConsulta) {
            // agregar mas tipos de consulta
            case this._tipos.CONSULTAS_BUSQUEDA_BOLETAS:
                this._router.navigateByUrl(this._rutas.URL_COMPROBANTE_BOLETA_DOCUMENTO_RELACIONADO);
                break;
            case this._tipos.CONSULTAS_BUSQUEDA_FACTURAS:
                this._router.navigateByUrl(this._rutas.URL_COMPROBANTE_FACTURA_DOCUMENTO_RELACIONADO);
                break;
        }
    };
    ConsultaComponent.prototype.showBitacora = function () {
        swal({
            title: 'Bitácora',
            html: '<div class="col-md-12">' +
                '<table style="width:100%">' +
                '<thead>' +
                '<tr>' +
                '<th>Fecha</th>' +
                '<th>Hora</th>' +
                '<th>Usuario</th>' +
                '<th>Descripción</th>' +
                '</tr>' +
                '</thead>' +
                '<tbody>' +
                '<tr style="border:1px">' +
                '<td>19/10/2017</td>' +
                '<td>08:05:55</td> ' +
                '<td>Usuario 1</td>' +
                '</tr>' +
                '</tbody>' +
                '</table>' +
                '</div>' +
                '</br>' +
                '</br>',
            confirmButtonText: 'Regresar'
        });
    };
    return ConsultaComponent;
}());
ConsultaComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'consulta-component',
        template: __webpack_require__("../../../../../src/app/facturacion-electronica/general/consulta/consulta.component.html"),
        styles: [__webpack_require__("../../../../../src/app/facturacion-electronica/general/consulta/consulta.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__utils_tipos_service__["a" /* TiposService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__utils_tipos_service__["a" /* TiposService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_general_consulta_service__["a" /* GeneralConsultaService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_general_consulta_service__["a" /* GeneralConsultaService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__utils_rutas_service__["a" /* RutasService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__utils_rutas_service__["a" /* RutasService */]) === "function" && _e || Object])
], ConsultaComponent);

function cargarDataTable(data) {
    datatable = $('#consulta').DataTable({
        searching: false,
        /*serverSide: true,
        ajax: {
            beforeSend: function (request) {
                request.setRequestHeader('Authorization', 'Bearer ' + sessionStorage.getItem('token'));
                request.setRequestHeader('origen_datos', 'PEB2M');
            },
            url: 'http://b2miningdata.com/api/msguialistar/v1/guias/',
            dataSrc: 'data',
            data: d
        },
        columns: [
            {   data: 'Comprobante', name: 'Comprobante' },
            {   data: 'Serie', name: 'Serie' },
            {   data: 'Correlativo', name: 'Correlativo' },
            {   data: 'ImporteTotal', name: 'ImporteTotal' },
            {   data: 'ImporteAUsar', name: 'ImporteAUsar' },
        ],*/
        columns: [
            { data: 'Estado', name: 'Estado' },
            { data: 'Comprobante', name: 'Comprobante' },
            { data: 'Serie', name: 'Serie' },
            { data: 'Correlativo', name: 'Correlativo' },
            { data: 'ImporteTotal', name: 'ImporteTotal' },
            { data: 'ImporteAUsar', name: 'ImporteAUsar' },
        ],
        columnDefs: [
            { 'className': 'text-center', 'targets': [1, 2, 3, 4, 5] },
            {
                render: function (data, type, row) {
                    return '<div class="text-right" height="100%"><div class="checkbox text-right">' +
                        '<label><input type="checkbox" name="optionsCheckboxes"></label></div></div>';
                },
                targets: 0,
                orderable: false
            },
        ],
        data: data
    });
    datatable.on('click', '.edit', function (event) {
        var $tr = $(this).closest('tr');
        var row_id = $tr.find('a').attr('row-id');
        var nav = ['/guia/comprador/formulario', row_id];
        oGuiaBuscarComponent.navigate(nav);
        event.preventDefault();
    });
}
var Comprobante = (function () {
    function Comprobante() {
    }
    return Comprobante;
}());

var _a, _b, _c, _d, _e;
//# sourceMappingURL=consulta.component.js.map

/***/ }),

/***/ "../../../../../src/app/facturacion-electronica/general/consulta/consulta.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConsultaModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__consulta_component__ = __webpack_require__("../../../../../src/app/facturacion-electronica/general/consulta/consulta.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ConsultaModule = (function () {
    function ConsultaModule() {
    }
    return ConsultaModule;
}());
ConsultaModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["e" /* ReactiveFormsModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__consulta_component__["a" /* ConsultaComponent */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__consulta_component__["a" /* ConsultaComponent */]
        ]
    })
], ConsultaModule);

//# sourceMappingURL=consulta.module.js.map

/***/ }),

/***/ "../../../../../src/app/facturacion-electronica/general/services/general.consulta.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GeneralConsultaService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GeneralConsultaService = (function () {
    function GeneralConsultaService(_httpClient) {
        this._httpClient = _httpClient;
        this.urlConsultaDocumentoRelacionado = 'https://facturacion-cb377.firebaseio.com/comprobante.json';
        this.urlListarTipoDocumento = 'https://facturacion-cb377.firebaseio.com/tipoDocumento.json';
        this.consultarDocRelacionado = new __WEBPACK_IMPORTED_MODULE_1_rxjs__["BehaviorSubject"]([]);
        this.getTiposMoneda();
    }
    GeneralConsultaService.prototype.listarTipoDocumento = function () {
        return this._httpClient.get(this.urlListarTipoDocumento);
    };
    GeneralConsultaService.prototype.buscar = function () {
        var _this = this;
        this._httpClient.get(this.urlListarTipoDocumento).
            subscribe(function (data) {
            _this.dtoOutListarTipoDocumento = data;
            console.log('Servicio', _this.dtoOutListarTipoDocumento);
        });
    };
    GeneralConsultaService.prototype.getdtoOutListarTipoDocumento = function () {
        return this.dtoOutListarTipoDocumento;
    };
    /*get(): Promise<Bundle> {
        return this._httpClient
        .get<TipoDocumento>(`${this.urlListarTipoDocumento}`)
        .toPromise();
    }*/
    GeneralConsultaService.prototype.getTipos = function (url) {
        return this._httpClient.get(url, {
            observe: 'body',
            responseType: 'json'
        }).
            map(function (tipos) {
            return tipos;
        });
    };
    GeneralConsultaService.prototype.getTiposMoneda = function () {
        var _this = this;
        this.getTipos(this.urlListarTipoDocumento).subscribe(function (tipos) {
            _this.dtoOutListarTipoDocumento = tipos;
            _this.consultarDocRelacionado.next(tipos.slice());
        });
    };
    return GeneralConsultaService;
}());
GeneralConsultaService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object])
], GeneralConsultaService);

var _a;
//# sourceMappingURL=general.consulta.service.js.map

/***/ }),

/***/ "../../../../../src/app/facturacion-electronica/general/utils/constantes.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConstantesService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ConstantesService = (function () {
    function ConstantesService() {
        this.TIPO_COMPROBANTE_CONSULTA_FACTURA = 1;
        this.ITEM_SERVICIO_CREAR = 1;
        this.ITEM_SERVICIO_EDITAR = 2;
        this.ITEM_BIEN_CREAR = 3;
        this.ITEM_BIEN_EDITAR = 4;
        this.ITEM_SERVICIO_CREAR_TITULO = 'Ingresar Servicio';
        this.ITEM_SERVICIO_EDITAR_TITULO = 'Editar Servicio';
        this.ITEM_BIEN_CREAR_TITULO = 'Ingresar Bien';
        this.ITEM_BIEN_EDITAR_TITULO = 'Editar Bien';
        this.TIPO_PRODUCTO_SERVICIO = 1;
        this.TIPO_PRODUCTO_BIEN = 2;
    }
    return ConstantesService;
}());
ConstantesService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], ConstantesService);

//# sourceMappingURL=constantes.service.js.map

/***/ }),

/***/ "../../../../../src/app/facturacion-electronica/general/utils/rutas.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RutasService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var RutasService = (function () {
    function RutasService() {
        // public URL_COMPROBANTE_BOLETA_CREAR = 'comprobantes/boleta/crear';
        this.URL_COMPROBANTE_BOLETA_CREAR = 'comprobantes/crear';
        this.URL_COMPROBANTE_BOLETA_DOCUMENTO_RELACIONADO = 'comprobantes/boleta/crear/docRelacionado';
        this.URL_COMPROBANTE_BOLETA_DOCUMENTO_RELACIONADO_BUSCAR = 'comprobantes/boleta/crear/docRelacionado/buscar';
        this.URL_COMPROBANTE_BOLETA_SERVICIO_AGREGAR = 'comprobantes/boleta/crear/servicio/agregar';
        this.URL_COMPROBANTE_BOLETA_SERVICIO_EDITAR = 'comprobantes/boleta/crear/servicio/editar';
        this.URL_COMPROBANTE_BOLETA_BIEN_AGREGAR = 'comprobantes/boleta/crear/bien/agregar';
        this.URL_COMPROBANTE_BOLETA_BIEN_EDITAR = 'comprobantes/boleta/crear/bien/editar';
        this.URL_COMPROBANTE_BOLETA_EMITIR = 'comprobantes/boleta/emitir';
        // public URL_COMPROBANTE_FACTURA_CREAR = 'comprobantes/factura/crear';
        this.URL_COMPROBANTE_FACTURA_DOCUMENTO_RELACIONADO = 'comprobantes/factura/crear/docRelacionado';
        this.URL_COMPROBANTE_FACTURA_DOCUMENTO_RELACIONADO_BUSCAR = 'comprobantes/factura/crear/docRelacionado/buscar';
        this.URL_COMPROBANTE_FACTURA_SERVICIO_AGREGAR = 'comprobantes/factura/crear/servicio/agregar';
        this.URL_COMPROBANTE_FACTURA_SERVICIO_EDITAR = 'comprobantes/factura/crear/servicio/editar';
        this.URL_COMPROBANTE_FACTURA_BIEN_AGREGAR = 'comprobantes/factura/crear/bien/agregar';
        this.URL_COMPROBANTE_FACTURA_BIEN_EDITAR = 'comprobantes/factura/crear/bien/editar';
        this.URL_COMPROBANTE_FACTURA_VISTA_PREVIA = 'comprobantes/factura/crear/vistaprevia';
        this.URL_COMPROBANTE_FACTURA_EMITIR = 'comprobantes/factura/emitir';
    }
    return RutasService;
}());
RutasService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], RutasService);

//# sourceMappingURL=rutas.service.js.map

/***/ }),

/***/ "../../../../../src/app/facturacion-electronica/general/utils/tipos.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TiposService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TiposService = (function () {
    function TiposService() {
        this.CONSULTAS_BUSQUEDA_BOLETAS = 10;
        this.CONSULTAS_BUSQUEDA_FACTURAS = 9;
        this.CONSULTAS_RESUMEN_BOLETAS = 8;
        this.CONSULTAS_GUIA_REMISION = 7;
        this.CONSULTAS_RETENCION = 6;
        this.CONSULTAS_PERCEPCION = 5;
        this.CONSULTAS_NOTA_DEBITO = 4;
        this.CONSULTAS_BOLETA = 3;
        this.CONSULTAS_FACTURA = 2;
        this.TIPO_DOCUMENTO_FACTURA = '01';
        this.TIPO_DOCUMENTO_FACTURA_NOMBRE = 'Factura';
        this.TIPO_DOCUMENTO_BOLETA = '03';
        this.TIPO_DOCUMENTO_BOLETA_NOMBRE = 'Boelta de Venta';
        this.TIPO_DOCUMENTO_NOTA_CREDITO = '07';
        this.TIPO_DOCUMENTO_NOTA_CREDITO_NOMBRE = 'Nota de Crédito';
        this.TIPO_DOCUMENTO_NOTA_DEBITO = '08';
        this.TIPO_DOCUMENTO_NOTA_DEBITO_NOMBRE = 'Nota de Débito';
        this.TIPO_DOCUMENTO_PERCEPCION = '2001';
        this.TIPO_DOCUMENTO_PERCEPCION_NOMBRE = 'Comprobante de Percepción';
        this.TIPO_DOCUMENTO_RETENCION = '2002';
        this.TIPO_DOCUMENTO_RETENCION_NOMBRE = 'Comprobante de Retención';
        this.TIPO_DOCUMENTO_GUIA_REMISION_REMITENTE = '09';
        this.TIPO_DOCUMENTO_GUIA_REMISION_REMITENTE_NOMBRE = 'Guia Remisión Remitente';
        this.TIPO_DOCUMENTO_GUIA_REMISION_TRANSPORTISTA = '31';
        this.TIPO_DOCUMENTO_GUIA_REMISION_TRANSPORTISTA_NOMBRE = 'Guia Remisión Transportista';
        this.TIPO_DOCUMENTO_FACTURA_ANTICIPO = '1000';
        this.TIPO_DOCUMENTO_FACTURA_ANTICIPO_NOMBRE = 'Factura de Anticipo';
        this.TIPO_DOCUMENTO_BOLETA_ANTICIPO = '2000';
        this.TIPO_DOCUMENTO_BOLETA_ANTICIPO_NOMBRE = 'Boleta de Anticipo';
        this.TIPO_CONSULTA_COMPROBANTE = 1;
        this.TIPO_CONSULTA_PERCEPCION_RETENCION = 2;
        this.TIPO_CONSULTA_GUIA_REMISION = 3;
        this.TIPO_CONSULTA_RESUMEN_BOLETAS = 4;
        this.TIPO_CONSULTA_RESUMEN_BAJAS = 5;
        this.TIPO_CONSULTA_FACTURA_DOCUMENTO_RELACIONADO = 9;
        this.TIPO_CONSULTA_BOLETA_DOCUMENTO_RELACIONADO = 10;
    }
    return TiposService;
}());
TiposService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], TiposService);

//# sourceMappingURL=tipos.service.js.map

/***/ }),

/***/ "../../../../../src/app/model/ordencompra.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export OrdenCompraBuscar */
/* unused harmony export OrdenCompraFiltros */
/* unused harmony export CambioEstado */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrdenCompra; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Producto; });
var OrdenCompraBuscar = (function () {
    function OrdenCompraBuscar() {
    }
    return OrdenCompraBuscar;
}());

var OrdenCompraFiltros = (function () {
    function OrdenCompraFiltros() {
        this.fechacreacioninicio = new Date();
        this.fechacreacionfin = new Date();
    }
    return OrdenCompraFiltros;
}());

var CambioEstado = (function () {
    function CambioEstado() {
    }
    return CambioEstado;
}());

var OrdenCompra = (function () {
    function OrdenCompra() {
        this.fecharegistro = new Date();
        this.fechainiciocontrato = new Date();
        this.fechafincontrato = new Date();
    }
    return OrdenCompra;
}());

var Producto = (function () {
    function Producto() {
    }
    return Producto;
}());

//# sourceMappingURL=ordencompra.js.map

/***/ }),

/***/ "../../../../../src/app/service/ordencompraservice.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrdenCompraService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_model_ordencompra__ = __webpack_require__("../../../../../src/app/model/ordencompra.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_throw__ = __webpack_require__("../../../../rxjs/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_throw__);
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


var OrdenCompraService = (function () {
    function OrdenCompraService(http) {
        this.http = http;
        this.urlAdd = 'http://b2miningdata.com/irfq/v1/postrfq/';
        this.urlGet = "http://b2miningdata.com/api/msocd/v1/ocs/";
        this.urlCambioEstado = 'http://40.76.86.5:8080/api/msproductor/v1/comandos/oc/';
    }
    OrdenCompraService.prototype.convertStringToDate = function (strDate) {
        return new Date(strDate);
    };
    OrdenCompraService.prototype.obtener = function (idRfq) {
        idRfq = 'c7c0051e-a575-4009-95d2-56cfc6da8250';
        var items$ = this.http
            .get(this.urlGet + idRfq, { headers: this.getHeaders() })
            .map(this.extractData2)
            .catch(this.handleError);
        return items$;
    };
    OrdenCompraService.prototype.cambioEstado = function (org_id, item) {
        var headers = this.getHeaders();
        headers.append('origen_datos', 'PEB2M');
        headers.append('tipo_empresa', 'P');
        headers.append('org_id', org_id);
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.put(this.urlCambioEstado, item, options)
            .catch(this.handleError);
    };
    /*
      add(item: RFQCompradorInsert): Observable<any> {
        let headers = this.getHeaders();
        let options = new RequestOptions({ headers: headers });
        return this.http.post(this.urlAdd, item, options)
          .map(this.extractData)
          .catch(this.handleError);
      }*/
    OrdenCompraService.prototype.extractData2 = function (res) {
        //console.log('extractData2', res);
        var respuesta = {
            status: res ? res.status : -1,
            statusText: res ? res.statusText : "ERROR",
            data: res ? res.json() || {} : {},
        };
        var oc_json = res.json();
        var oc = new __WEBPACK_IMPORTED_MODULE_4_app_model_ordencompra__["a" /* OrdenCompra */]();
        oc.id = oc_json.data.IdOc;
        //oc.comprador =  oc_json.data.UsuarioComprador;
        oc.ruccomprador = oc_json.data.RucComprador;
        oc.tipo = 'Material'; //oc_json.data.tipooc;//falta
        oc.nroordencompra = oc_json.data.NumeroOrden;
        //oc.proveedor=  oc_json.data.razonsocialproveedor;//falta
        // oc.rucproveedor=  oc_json.data.rucproveedor;//falta
        oc.fecharegistro = oc_json.data.FechaRegistro;
        //oc.codigoproveedor= oc_json.data.in_codigoproveedor;//falta
        oc.version = oc_json.data.Version;
        oc.moneda = oc_json.data.MonedaOrden;
        oc.comprador = oc_json.data.RazonSocialComprador;
        oc.atenciona = oc_json.data.AtencionA;
        oc.contactarcon = oc_json.data.EmailContacto;
        oc.preparadapor = oc_json.data.CreadoPor,
            oc.estadocomprador = oc_json.data.EstadoComprador,
            oc.estadocomprador = oc_json.data.EstadoComprador,
            oc.facturara = oc_json.data.EmitirA;
        oc.enviarfacturaa = oc_json.data.EnviarFactura;
        oc.formapago = oc_json.data.CondicionPago;
        oc.fechainiciocontrato = new Date(oc_json.data.FechaIniContrato);
        oc.fechafincontrato = new Date(oc_json.data.FechaFinContrato);
        oc.grupocompra = oc_json.data.GrupoCompra;
        oc.autorizadopor = oc_json.data.AprobadoPor;
        oc.comentarioproveedor = oc_json.data.ComentarioProveedor;
        //oc.subtotal=  oc_json.data.subtotal;//falta
        //oc.utilidades=  oc_json.data.utilidades;//falta
        oc.valorventa = oc_json.data.ValorVenta;
        //oc.gastosgenerales=  oc_json.data.gastosgenerales;//falta
        oc.impuestos = oc_json.data.Impuestos;
        oc.valortotal = oc_json.data.ValorVentaNeto;
        //oc.condiciones= oc_json.data.condicionpago;
        oc.direccionfactura = oc_json.data.DireccionFactura;
        oc.productos = [];
        for (var _i = 0, _a = oc_json.data.ProductosOrden; _i < _a.length; _i++) {
            var item = _a[_i];
            var p = new __WEBPACK_IMPORTED_MODULE_4_app_model_ordencompra__["b" /* Producto */]();
            p.posicion = item.PosicionProducto;
            p.micodigo = item.CodigoProducto;
            p.nombre = item.DescripcionProducto;
            p.cantidad = item.CantidadProducto;
            p.unidad = item.UnidadProducto;
            p.preciounitario = item.PrecioUnitarioProducto;
            p.total = item.PrecioProducto;
            p.igv = "0.0"; //falta
            p.fechaentrega = item.FechaEntregaProducto;
            oc.productos.push(p);
        }
        return oc;
        //return body.data || {};
    };
    OrdenCompraService.prototype.extractData = function (res) {
        var respuesta = {
            status: res ? res.status : -1,
            statusText: res ? res.statusText : "ERROR",
            data: res ? res.json() || {} : {},
        };
        return respuesta;
        //return body.data || {};
    };
    OrdenCompraService.prototype.handleError = function (error) {
        console.error('handleError', error.message || error);
        return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].throw(error.message || error);
    };
    OrdenCompraService.prototype.getHeaders = function () {
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
    return OrdenCompraService;
}());
OrdenCompraService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], OrdenCompraService);

var _a;
//# sourceMappingURL=ordencompraservice.js.map

/***/ }),

/***/ "../../../../../src/assets/js/plugins/jquery.PrintArea.js":
/***/ (function(module, exports) {

/**
 *  Version 2.4.0 Copyright (C) 2013
 *  Tested in IE 11, FF 28.0 and Chrome 33.0.1750.154
 *  No official support for other browsers, but will TRY to accommodate challenges in other browsers.
 *  Example:
 *      Print Button: <div id="print_button">Print</div>
 *      Print Area  : <div class="PrintArea" id="MyId" class="MyClass"> ... html ... </div>
 *      Javascript  : <script>
 *                       $("div#print_button").click(function(){
 *                           $("div.PrintArea").printArea( [OPTIONS] );
 *                       });
 *                     </script>
 *  options are passed as json (example: {mode: "popup", popClose: false})
 *
 *  {OPTIONS}   | [type]     | (default), values      | Explanation
 *  ---------   | ---------  | ---------------------- | -----------
 *  @mode       | [string]   | (iframe),popup         | printable window is either iframe or browser popup
 *  @popHt      | [number]   | (500)                  | popup window height
 *  @popWd      | [number]   | (400)                  | popup window width
 *  @popX       | [number]   | (500)                  | popup window screen X position
 *  @popY       | [number]   | (500)                  | popup window screen Y position
 *  @popTitle   | [string]   | ('')                   | popup window title element
 *  @popClose   | [boolean]  | (false),true           | popup window close after printing
 *  @extraCss   | [string]   | ('')                   | comma separated list of extra css to include
 *  @retainAttr | [string[]] | ["id","class","style"] | string array of attributes to retain for the containment area. (ie: id, style, class)
 *  @standard   | [string]   | strict, loose, (html5) | Only for popup. For html 4.01, strict or loose document standard, or html 5 standard
 *  @extraHead  | [string]   | ('')                   | comma separated list of extra elements to be appended to the head tag
 */
(function($) {
    var counter = 0;
    var modes = { iframe : "iframe", popup : "popup" };
    var standards = { strict : "strict", loose : "loose", html5 : "html5" };
    var defaults = { mode       : modes.iframe,
                     standard   : standards.loose,
                     popHt      : 500,
                     popWd      : 400,
                     popX       : 200,
                     popY       : 200,
                     popTitle   : '',
                     popClose   : false,
                     extraCss   : '',
                     extraHead  : '',
                     retainAttr : ["id","class","style"] };

    var settings = {};//global settings

    $.fn.printArea = function( options )
    {
        $.extend( settings, defaults, options );

        counter++;
        var idPrefix = "printArea_";
        $( "[id^=" + idPrefix + "]" ).remove();

        settings.id = idPrefix + counter;

        var $printSource = $(this);

        var PrintAreaWindow = PrintArea.getPrintWindow();

        PrintArea.write( PrintAreaWindow.doc, $printSource );

        setTimeout( function () { PrintArea.print( PrintAreaWindow ); }, 1000 );
    };

    var PrintArea = {
        print : function( PAWindow ) {
            var paWindow = PAWindow.win;

            $(PAWindow.doc).ready(function(){
                paWindow.focus();
                paWindow.print();

                if ( settings.mode == modes.popup && settings.popClose )
                    setTimeout(function() { paWindow.close(); }, 2000);
            });
        },
        write : function ( PADocument, $ele ) {
            PADocument.open();
            PADocument.write( PrintArea.docType() + "<html>" + PrintArea.getHead() + PrintArea.getBody( $ele ) + "</html>" );
            PADocument.close();
        },
        docType : function() {
            if ( settings.mode == modes.iframe ) return "";

            if ( settings.standard == standards.html5 ) return "<!DOCTYPE html>";

            var transitional = settings.standard == standards.loose ? " Transitional" : "";
            var dtd = settings.standard == standards.loose ? "loose" : "strict";

            return '<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01' + transitional + '//EN" "http://www.w3.org/TR/html4/' + dtd +  '.dtd">';
        },
        getHead : function() {
            var extraHead = "";
            var links = "";

            if ( settings.extraHead ) settings.extraHead.replace( /([^,]+)/g, function(m){ extraHead += m });

            $(document).find("link")
                .filter(function(){ // Requirement: <link> element MUST have rel="stylesheet" to be considered in print document
                        var relAttr = $(this).attr("rel");
                        return ($.type(relAttr) === 'undefined') == false && relAttr.toLowerCase() == 'stylesheet';
                    })
                .filter(function(){ // Include if media is undefined, empty, print or all
                        var mediaAttr = $(this).attr("media");
                        return $.type(mediaAttr) === 'undefined' || mediaAttr == "" || mediaAttr.toLowerCase() == 'print' || mediaAttr.toLowerCase() == 'all'
                    })
                .each(function(){
                       
                        /*var href=$(this).attr("href");
                        href= href.replace('./',$("#baseurl").attr("href"));
                         console.log('href',href);
                        //links += '<link type="text/css" rel="stylesheet" href="' + href + '" >';*/
                    });
            if ( settings.extraCss ) settings.extraCss.replace( /([^,\s]+)/g, function(m){ links += '<link type="text/css" rel="stylesheet" href="' + m + '">' });

            return "<head><title>" + settings.popTitle + "</title>" + extraHead + links + "</head>";
            //return "<head><title>" + settings.popTitle + "</title>"+ "</head>";
        },
        getBody : function ( elements ) {
            var htm = "";
            var attrs = settings.retainAttr;
            elements.each(function() {
                var ele = PrintArea.getFormData( $(this) );

                var attributes = ""
                for ( var x = 0; x < attrs.length; x++ )
                {
                    var eleAttr = $(ele).attr( attrs[x] );
                    if ( eleAttr ) attributes += (attributes.length > 0 ? " ":"") + attrs[x] + "='" + eleAttr + "'";
                }

                htm += '<div ' + attributes + '>' + $(ele).html() + '</div>';
            });

            return "<body>" + htm + "</body>";
        },
        getFormData : function ( ele ) {
            var copy = ele.clone();
            var copiedInputs = $("input,select,textarea", copy);
            $("input,select,textarea", ele).each(function( i ){
                var typeInput = $(this).attr("type");
                if ($.type(typeInput) === 'undefined') typeInput = $(this).is("select") ? "select" : $(this).is("textarea") ? "textarea" : "";
                var copiedInput = copiedInputs.eq( i );

                if ( typeInput == "radio" || typeInput == "checkbox" ) copiedInput.attr( "checked", $(this).is(":checked") );
                else if ( typeInput == "text" ) copiedInput.attr( "value", $(this).val() );
                else if ( typeInput == "select" )
                    $(this).find( "option" ).each( function( i ) {
                        if ( $(this).is(":selected") ) $("option", copiedInput).eq( i ).attr( "selected", true );
                    });
                else if ( typeInput == "textarea" ) copiedInput.text( $(this).val() );
            });
            return copy;
        },
        getPrintWindow : function () {
            switch ( settings.mode )
            {
                case modes.iframe :
                    var f = new PrintArea.Iframe();
                    return { win : f.contentWindow || f, doc : f.doc };
                case modes.popup :
                    var p = new PrintArea.Popup();
                    return { win : p, doc : p.doc };
            }
        },
        Iframe : function () {
            var frameId = settings.id;
            var iframeStyle = 'border:0;position:absolute;width:1600px;height:0px;right:0px;top:0px;';
            var iframe;

            try
            {
                iframe = document.createElement('iframe');
                document.body.appendChild(iframe);
                $(iframe).attr({ style: iframeStyle, id: frameId, src: "#" + new Date().getTime() });
                iframe.doc = null;
                iframe.doc = iframe.contentDocument ? iframe.contentDocument : ( iframe.contentWindow ? iframe.contentWindow.document : iframe.document);
            }
            catch( e ) { throw e + ". iframes may not be supported in this browser."; }

            if ( iframe.doc == null ) throw "Cannot find document.";

            return iframe;
        },
        Popup : function () {
            var windowAttr = "location=yes,statusbar=no,directories=no,menubar=no,titlebar=no,toolbar=no,dependent=no";
            windowAttr += ",width=" + settings.popWd + ",height=" + settings.popHt;
            windowAttr += ",resizable=yes,screenX=" + settings.popX + ",screenY=" + settings.popY + ",personalbar=no,scrollbars=yes";

            var newWin = window.open( "", "_blank",  windowAttr );

            newWin.doc = newWin.document;

            return newWin;
        }
    };
})(jQuery);

/***/ }),

/***/ "../../../common/@angular/common/http.es5.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export HttpBackend */
/* unused harmony export HttpHandler */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpClient; });
/* unused harmony export HttpHeaders */
/* unused harmony export HTTP_INTERCEPTORS */
/* unused harmony export JsonpClientBackend */
/* unused harmony export JsonpInterceptor */
/* unused harmony export HttpClientJsonpModule */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return HttpClientModule; });
/* unused harmony export HttpClientXsrfModule */
/* unused harmony export ɵinterceptingHandler */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return HttpParams; });
/* unused harmony export HttpUrlEncodingCodec */
/* unused harmony export HttpRequest */
/* unused harmony export HttpErrorResponse */
/* unused harmony export HttpEventType */
/* unused harmony export HttpHeaderResponse */
/* unused harmony export HttpResponse */
/* unused harmony export HttpResponseBase */
/* unused harmony export HttpXhrBackend */
/* unused harmony export XhrFactory */
/* unused harmony export HttpXsrfTokenExtractor */
/* unused harmony export ɵa */
/* unused harmony export ɵb */
/* unused harmony export ɵc */
/* unused harmony export ɵd */
/* unused harmony export ɵg */
/* unused harmony export ɵh */
/* unused harmony export ɵe */
/* unused harmony export ɵf */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__("../../../../tslib/tslib.es6.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__ = __webpack_require__("../../../../rxjs/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operator_concatMap__ = __webpack_require__("../../../../rxjs/operator/concatMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operator_concatMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_operator_concatMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_operator_filter__ = __webpack_require__("../../../../rxjs/operator/filter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_operator_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_operator_filter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_operator_map__ = __webpack_require__("../../../../rxjs/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__);

/**
 * @license Angular v4.4.6
 * (c) 2010-2017 Google, Inc. https://angular.io/
 * License: MIT
 */







/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Transforms an `HttpRequest` into a stream of `HttpEvent`s, one of which will likely be a
 * `HttpResponse`.
 *
 * `HttpHandler` is injectable. When injected, the handler instance dispatches requests to the
 * first interceptor in the chain, which dispatches to the second, etc, eventually reaching the
 * `HttpBackend`.
 *
 * In an `HttpInterceptor`, the `HttpHandler` parameter is the next interceptor in the chain.
 *
 * \@experimental
 * @abstract
 */
var HttpHandler = (function () {
    function HttpHandler() {
    }
    /**
     * @abstract
     * @param {?} req
     * @return {?}
     */
    HttpHandler.prototype.handle = function (req) { };
    return HttpHandler;
}());
/**
 * A final `HttpHandler` which will dispatch the request via browser HTTP APIs to a backend.
 *
 * Interceptors sit between the `HttpClient` interface and the `HttpBackend`.
 *
 * When injected, `HttpBackend` dispatches requests directly to the backend, without going
 * through the interceptor chain.
 *
 * \@experimental
 * @abstract
 */
var HttpBackend = (function () {
    function HttpBackend() {
    }
    /**
     * @abstract
     * @param {?} req
     * @return {?}
     */
    HttpBackend.prototype.handle = function (req) { };
    return HttpBackend;
}());
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * A `HttpParameterCodec` that uses `encodeURIComponent` and `decodeURIComponent` to
 * serialize and parse URL parameter keys and values.
 *
 * \@experimental
 */
var HttpUrlEncodingCodec = (function () {
    function HttpUrlEncodingCodec() {
    }
    /**
     * @param {?} k
     * @return {?}
     */
    HttpUrlEncodingCodec.prototype.encodeKey = function (k) { return standardEncoding(k); };
    /**
     * @param {?} v
     * @return {?}
     */
    HttpUrlEncodingCodec.prototype.encodeValue = function (v) { return standardEncoding(v); };
    /**
     * @param {?} k
     * @return {?}
     */
    HttpUrlEncodingCodec.prototype.decodeKey = function (k) { return decodeURIComponent(k); };
    /**
     * @param {?} v
     * @return {?}
     */
    HttpUrlEncodingCodec.prototype.decodeValue = function (v) { return decodeURIComponent(v); };
    return HttpUrlEncodingCodec;
}());
/**
 * @param {?} rawParams
 * @param {?} codec
 * @return {?}
 */
function paramParser(rawParams, codec) {
    var /** @type {?} */ map$$1 = new Map();
    if (rawParams.length > 0) {
        var /** @type {?} */ params = rawParams.split('&');
        params.forEach(function (param) {
            var /** @type {?} */ eqIdx = param.indexOf('=');
            var _a = eqIdx == -1 ?
                [codec.decodeKey(param), ''] :
                [codec.decodeKey(param.slice(0, eqIdx)), codec.decodeValue(param.slice(eqIdx + 1))], key = _a[0], val = _a[1];
            var /** @type {?} */ list = map$$1.get(key) || [];
            list.push(val);
            map$$1.set(key, list);
        });
    }
    return map$$1;
}
/**
 * @param {?} v
 * @return {?}
 */
function standardEncoding(v) {
    return encodeURIComponent(v)
        .replace(/%40/gi, '@')
        .replace(/%3A/gi, ':')
        .replace(/%24/gi, '$')
        .replace(/%2C/gi, ',')
        .replace(/%3B/gi, ';')
        .replace(/%2B/gi, '+')
        .replace(/%3D/gi, '=')
        .replace(/%3F/gi, '?')
        .replace(/%2F/gi, '/');
}
/**
 * An HTTP request/response body that represents serialized parameters,
 * per the MIME type `application/x-www-form-urlencoded`.
 *
 * This class is immuatable - all mutation operations return a new instance.
 *
 * \@experimental
 */
var HttpParams = (function () {
    /**
     * @param {?=} options
     */
    function HttpParams(options) {
        if (options === void 0) { options = {}; }
        this.updates = null;
        this.cloneFrom = null;
        this.encoder = options.encoder || new HttpUrlEncodingCodec();
        this.map = !!options.fromString ? paramParser(options.fromString, this.encoder) : null;
    }
    /**
     * Check whether the body has one or more values for the given parameter name.
     * @param {?} param
     * @return {?}
     */
    HttpParams.prototype.has = function (param) {
        this.init();
        return ((this.map)).has(param);
    };
    /**
     * Get the first value for the given parameter name, or `null` if it's not present.
     * @param {?} param
     * @return {?}
     */
    HttpParams.prototype.get = function (param) {
        this.init();
        var /** @type {?} */ res = ((this.map)).get(param);
        return !!res ? res[0] : null;
    };
    /**
     * Get all values for the given parameter name, or `null` if it's not present.
     * @param {?} param
     * @return {?}
     */
    HttpParams.prototype.getAll = function (param) {
        this.init();
        return ((this.map)).get(param) || null;
    };
    /**
     * Get all the parameter names for this body.
     * @return {?}
     */
    HttpParams.prototype.keys = function () {
        this.init();
        return Array.from(/** @type {?} */ ((this.map)).keys());
    };
    /**
     * Construct a new body with an appended value for the given parameter name.
     * @param {?} param
     * @param {?} value
     * @return {?}
     */
    HttpParams.prototype.append = function (param, value) { return this.clone({ param: param, value: value, op: 'a' }); };
    /**
     * Construct a new body with a new value for the given parameter name.
     * @param {?} param
     * @param {?} value
     * @return {?}
     */
    HttpParams.prototype.set = function (param, value) { return this.clone({ param: param, value: value, op: 's' }); };
    /**
     * Construct a new body with either the given value for the given parameter
     * removed, if a value is given, or all values for the given parameter removed
     * if not.
     * @param {?} param
     * @param {?=} value
     * @return {?}
     */
    HttpParams.prototype.delete = function (param, value) { return this.clone({ param: param, value: value, op: 'd' }); };
    /**
     * Serialize the body to an encoded string, where key-value pairs (separated by `=`) are
     * separated by `&`s.
     * @return {?}
     */
    HttpParams.prototype.toString = function () {
        var _this = this;
        this.init();
        return this.keys()
            .map(function (key) {
            var /** @type {?} */ eKey = _this.encoder.encodeKey(key);
            return ((((_this.map)).get(key))).map(function (value) { return eKey + '=' + _this.encoder.encodeValue(value); })
                .join('&');
        })
            .join('&');
    };
    /**
     * @param {?} update
     * @return {?}
     */
    HttpParams.prototype.clone = function (update) {
        var /** @type {?} */ clone = new HttpParams({ encoder: this.encoder });
        clone.cloneFrom = this.cloneFrom || this;
        clone.updates = (this.updates || []).concat([update]);
        return clone;
    };
    /**
     * @return {?}
     */
    HttpParams.prototype.init = function () {
        var _this = this;
        if (this.map === null) {
            this.map = new Map();
        }
        if (this.cloneFrom !== null) {
            this.cloneFrom.init();
            this.cloneFrom.keys().forEach(function (key) { return ((_this.map)).set(key, /** @type {?} */ ((((((_this.cloneFrom)).map)).get(key)))); }); /** @type {?} */
            ((this.updates)).forEach(function (update) {
                switch (update.op) {
                    case 'a':
                    case 's':
                        var /** @type {?} */ base = (update.op === 'a' ? ((_this.map)).get(update.param) : undefined) || [];
                        base.push(/** @type {?} */ ((update.value))); /** @type {?} */
                        ((_this.map)).set(update.param, base);
                        break;
                    case 'd':
                        if (update.value !== undefined) {
                            var /** @type {?} */ base_1 = ((_this.map)).get(update.param) || [];
                            var /** @type {?} */ idx = base_1.indexOf(update.value);
                            if (idx !== -1) {
                                base_1.splice(idx, 1);
                            }
                            if (base_1.length > 0) {
                                ((_this.map)).set(update.param, base_1);
                            }
                            else {
                                ((_this.map)).delete(update.param);
                            }
                        }
                        else {
                            ((_this.map)).delete(update.param);
                            break;
                        }
                }
            });
            this.cloneFrom = null;
        }
    };
    return HttpParams;
}());
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Immutable set of Http headers, with lazy parsing.
 * \@experimental
 */
var HttpHeaders = (function () {
    /**
     * @param {?=} headers
     */
    function HttpHeaders(headers) {
        var _this = this;
        /**
         * Internal map of lowercased header names to the normalized
         * form of the name (the form seen first).
         */
        this.normalizedNames = new Map();
        /**
         * Queued updates to be materialized the next initialization.
         */
        this.lazyUpdate = null;
        if (!headers) {
            this.headers = new Map();
        }
        else if (typeof headers === 'string') {
            this.lazyInit = function () {
                _this.headers = new Map();
                headers.split('\n').forEach(function (line) {
                    var index = line.indexOf(':');
                    if (index > 0) {
                        var name = line.slice(0, index);
                        var key = name.toLowerCase();
                        var value = line.slice(index + 1).trim();
                        _this.maybeSetNormalizedName(name, key);
                        if (_this.headers.has(key)) {
                            _this.headers.get(key).push(value);
                        }
                        else {
                            _this.headers.set(key, [value]);
                        }
                    }
                });
            };
        }
        else {
            this.lazyInit = function () {
                _this.headers = new Map();
                Object.keys(headers).forEach(function (name) {
                    var values = headers[name];
                    var key = name.toLowerCase();
                    if (typeof values === 'string') {
                        values = [values];
                    }
                    if (values.length > 0) {
                        _this.headers.set(key, values);
                        _this.maybeSetNormalizedName(name, key);
                    }
                });
            };
        }
    }
    /**
     * Checks for existence of header by given name.
     * @param {?} name
     * @return {?}
     */
    HttpHeaders.prototype.has = function (name) {
        this.init();
        return this.headers.has(name.toLowerCase());
    };
    /**
     * Returns first header that matches given name.
     * @param {?} name
     * @return {?}
     */
    HttpHeaders.prototype.get = function (name) {
        this.init();
        var /** @type {?} */ values = this.headers.get(name.toLowerCase());
        return values && values.length > 0 ? values[0] : null;
    };
    /**
     * Returns the names of the headers
     * @return {?}
     */
    HttpHeaders.prototype.keys = function () {
        this.init();
        return Array.from(this.normalizedNames.values());
    };
    /**
     * Returns list of header values for a given name.
     * @param {?} name
     * @return {?}
     */
    HttpHeaders.prototype.getAll = function (name) {
        this.init();
        return this.headers.get(name.toLowerCase()) || null;
    };
    /**
     * @param {?} name
     * @param {?} value
     * @return {?}
     */
    HttpHeaders.prototype.append = function (name, value) {
        return this.clone({ name: name, value: value, op: 'a' });
    };
    /**
     * @param {?} name
     * @param {?} value
     * @return {?}
     */
    HttpHeaders.prototype.set = function (name, value) {
        return this.clone({ name: name, value: value, op: 's' });
    };
    /**
     * @param {?} name
     * @param {?=} value
     * @return {?}
     */
    HttpHeaders.prototype.delete = function (name, value) {
        return this.clone({ name: name, value: value, op: 'd' });
    };
    /**
     * @param {?} name
     * @param {?} lcName
     * @return {?}
     */
    HttpHeaders.prototype.maybeSetNormalizedName = function (name, lcName) {
        if (!this.normalizedNames.has(lcName)) {
            this.normalizedNames.set(lcName, name);
        }
    };
    /**
     * @return {?}
     */
    HttpHeaders.prototype.init = function () {
        var _this = this;
        if (!!this.lazyInit) {
            if (this.lazyInit instanceof HttpHeaders) {
                this.copyFrom(this.lazyInit);
            }
            else {
                this.lazyInit();
            }
            this.lazyInit = null;
            if (!!this.lazyUpdate) {
                this.lazyUpdate.forEach(function (update) { return _this.applyUpdate(update); });
                this.lazyUpdate = null;
            }
        }
    };
    /**
     * @param {?} other
     * @return {?}
     */
    HttpHeaders.prototype.copyFrom = function (other) {
        var _this = this;
        other.init();
        Array.from(other.headers.keys()).forEach(function (key) {
            _this.headers.set(key, /** @type {?} */ ((other.headers.get(key))));
            _this.normalizedNames.set(key, /** @type {?} */ ((other.normalizedNames.get(key))));
        });
    };
    /**
     * @param {?} update
     * @return {?}
     */
    HttpHeaders.prototype.clone = function (update) {
        var /** @type {?} */ clone = new HttpHeaders();
        clone.lazyInit =
            (!!this.lazyInit && this.lazyInit instanceof HttpHeaders) ? this.lazyInit : this;
        clone.lazyUpdate = (this.lazyUpdate || []).concat([update]);
        return clone;
    };
    /**
     * @param {?} update
     * @return {?}
     */
    HttpHeaders.prototype.applyUpdate = function (update) {
        var /** @type {?} */ key = update.name.toLowerCase();
        switch (update.op) {
            case 'a':
            case 's':
                var /** @type {?} */ value = ((update.value));
                if (typeof value === 'string') {
                    value = [value];
                }
                if (value.length === 0) {
                    return;
                }
                this.maybeSetNormalizedName(update.name, key);
                var /** @type {?} */ base = (update.op === 'a' ? this.headers.get(key) : undefined) || [];
                base.push.apply(base, value);
                this.headers.set(key, base);
                break;
            case 'd':
                var /** @type {?} */ toDelete_1 = (update.value);
                if (!toDelete_1) {
                    this.headers.delete(key);
                    this.normalizedNames.delete(key);
                }
                else {
                    var /** @type {?} */ existing = this.headers.get(key);
                    if (!existing) {
                        return;
                    }
                    existing = existing.filter(function (value) { return toDelete_1.indexOf(value) === -1; });
                    if (existing.length === 0) {
                        this.headers.delete(key);
                        this.normalizedNames.delete(key);
                    }
                    else {
                        this.headers.set(key, existing);
                    }
                }
                break;
        }
    };
    /**
     * \@internal
     * @param {?} fn
     * @return {?}
     */
    HttpHeaders.prototype.forEach = function (fn) {
        var _this = this;
        this.init();
        Array.from(this.normalizedNames.keys())
            .forEach(function (key) { return fn(/** @type {?} */ ((_this.normalizedNames.get(key))), /** @type {?} */ ((_this.headers.get(key)))); });
    };
    return HttpHeaders;
}());
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Determine whether the given HTTP method may include a body.
 * @param {?} method
 * @return {?}
 */
function mightHaveBody(method) {
    switch (method) {
        case 'DELETE':
        case 'GET':
        case 'HEAD':
        case 'OPTIONS':
        case 'JSONP':
            return false;
        default:
            return true;
    }
}
/**
 * Safely assert whether the given value is an ArrayBuffer.
 *
 * In some execution environments ArrayBuffer is not defined.
 * @param {?} value
 * @return {?}
 */
function isArrayBuffer(value) {
    return typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer;
}
/**
 * Safely assert whether the given value is a Blob.
 *
 * In some execution environments Blob is not defined.
 * @param {?} value
 * @return {?}
 */
function isBlob(value) {
    return typeof Blob !== 'undefined' && value instanceof Blob;
}
/**
 * Safely assert whether the given value is a FormData instance.
 *
 * In some execution environments FormData is not defined.
 * @param {?} value
 * @return {?}
 */
function isFormData(value) {
    return typeof FormData !== 'undefined' && value instanceof FormData;
}
/**
 * An outgoing HTTP request with an optional typed body.
 *
 * `HttpRequest` represents an outgoing request, including URL, method,
 * headers, body, and other request configuration options. Instances should be
 * assumed to be immutable. To modify a `HttpRequest`, the `clone`
 * method should be used.
 *
 * \@experimental
 */
var HttpRequest = (function () {
    /**
     * @param {?} method
     * @param {?} url
     * @param {?=} third
     * @param {?=} fourth
     */
    function HttpRequest(method, url, third, fourth) {
        this.url = url;
        /**
         * The request body, or `null` if one isn't set.
         *
         * Bodies are not enforced to be immutable, as they can include a reference to any
         * user-defined data type. However, interceptors should take care to preserve
         * idempotence by treating them as such.
         */
        this.body = null;
        /**
         * Whether this request should be made in a way that exposes progress events.
         *
         * Progress events are expensive (change detection runs on each event) and so
         * they should only be requested if the consumer intends to monitor them.
         */
        this.reportProgress = false;
        /**
         * Whether this request should be sent with outgoing credentials (cookies).
         */
        this.withCredentials = false;
        /**
         * The expected response type of the server.
         *
         * This is used to parse the response appropriately before returning it to
         * the requestee.
         */
        this.responseType = 'json';
        this.method = method.toUpperCase();
        // Next, need to figure out which argument holds the HttpRequestInit
        // options, if any.
        var options;
        // Check whether a body argument is expected. The only valid way to omit
        // the body argument is to use a known no-body method like GET.
        if (mightHaveBody(this.method) || !!fourth) {
            // Body is the third argument, options are the fourth.
            this.body = third || null;
            options = fourth;
        }
        else {
            // No body required, options are the third argument. The body stays null.
            options = third;
        }
        // If options have been passed, interpret them.
        if (options) {
            // Normalize reportProgress and withCredentials.
            this.reportProgress = !!options.reportProgress;
            this.withCredentials = !!options.withCredentials;
            // Override default response type of 'json' if one is provided.
            if (!!options.responseType) {
                this.responseType = options.responseType;
            }
            // Override headers if they're provided.
            if (!!options.headers) {
                this.headers = options.headers;
            }
            if (!!options.params) {
                this.params = options.params;
            }
        }
        // If no headers have been passed in, construct a new HttpHeaders instance.
        if (!this.headers) {
            this.headers = new HttpHeaders();
        }
        // If no parameters have been passed in, construct a new HttpUrlEncodedParams instance.
        if (!this.params) {
            this.params = new HttpParams();
            this.urlWithParams = url;
        }
        else {
            // Encode the parameters to a string in preparation for inclusion in the URL.
            var params = this.params.toString();
            if (params.length === 0) {
                // No parameters, the visible URL is just the URL given at creation time.
                this.urlWithParams = url;
            }
            else {
                // Does the URL already have query parameters? Look for '?'.
                var qIdx = url.indexOf('?');
                // There are 3 cases to handle:
                // 1) No existing parameters -> append '?' followed by params.
                // 2) '?' exists and is followed by existing query string ->
                //    append '&' followed by params.
                // 3) '?' exists at the end of the url -> append params directly.
                // This basically amounts to determining the character, if any, with
                // which to join the URL and parameters.
                var sep = qIdx === -1 ? '?' : (qIdx < url.length - 1 ? '&' : '');
                this.urlWithParams = url + sep + params;
            }
        }
    }
    /**
     * Transform the free-form body into a serialized format suitable for
     * transmission to the server.
     * @return {?}
     */
    HttpRequest.prototype.serializeBody = function () {
        // If no body is present, no need to serialize it.
        if (this.body === null) {
            return null;
        }
        // Check whether the body is already in a serialized form. If so,
        // it can just be returned directly.
        if (isArrayBuffer(this.body) || isBlob(this.body) || isFormData(this.body) ||
            typeof this.body === 'string') {
            return this.body;
        }
        // Check whether the body is an instance of HttpUrlEncodedParams.
        if (this.body instanceof HttpParams) {
            return this.body.toString();
        }
        // Check whether the body is an object or array, and serialize with JSON if so.
        if (typeof this.body === 'object' || typeof this.body === 'boolean' ||
            Array.isArray(this.body)) {
            return JSON.stringify(this.body);
        }
        // Fall back on toString() for everything else.
        return ((this.body)).toString();
    };
    /**
     * Examine the body and attempt to infer an appropriate MIME type
     * for it.
     *
     * If no such type can be inferred, this method will return `null`.
     * @return {?}
     */
    HttpRequest.prototype.detectContentTypeHeader = function () {
        // An empty body has no content type.
        if (this.body === null) {
            return null;
        }
        // FormData bodies rely on the browser's content type assignment.
        if (isFormData(this.body)) {
            return null;
        }
        // Blobs usually have their own content type. If it doesn't, then
        // no type can be inferred.
        if (isBlob(this.body)) {
            return this.body.type || null;
        }
        // Array buffers have unknown contents and thus no type can be inferred.
        if (isArrayBuffer(this.body)) {
            return null;
        }
        // Technically, strings could be a form of JSON data, but it's safe enough
        // to assume they're plain strings.
        if (typeof this.body === 'string') {
            return 'text/plain';
        }
        // `HttpUrlEncodedParams` has its own content-type.
        if (this.body instanceof HttpParams) {
            return 'application/x-www-form-urlencoded;charset=UTF-8';
        }
        // Arrays, objects, and numbers will be encoded as JSON.
        if (typeof this.body === 'object' || typeof this.body === 'number' ||
            Array.isArray(this.body)) {
            return 'application/json';
        }
        // No type could be inferred.
        return null;
    };
    /**
     * @param {?=} update
     * @return {?}
     */
    HttpRequest.prototype.clone = function (update) {
        if (update === void 0) { update = {}; }
        // For method, url, and responseType, take the current value unless
        // it is overridden in the update hash.
        var /** @type {?} */ method = update.method || this.method;
        var /** @type {?} */ url = update.url || this.url;
        var /** @type {?} */ responseType = update.responseType || this.responseType;
        // The body is somewhat special - a `null` value in update.body means
        // whatever current body is present is being overridden with an empty
        // body, whereas an `undefined` value in update.body implies no
        // override.
        var /** @type {?} */ body = (update.body !== undefined) ? update.body : this.body;
        // Carefully handle the boolean options to differentiate between
        // `false` and `undefined` in the update args.
        var /** @type {?} */ withCredentials = (update.withCredentials !== undefined) ? update.withCredentials : this.withCredentials;
        var /** @type {?} */ reportProgress = (update.reportProgress !== undefined) ? update.reportProgress : this.reportProgress;
        // Headers and params may be appended to if `setHeaders` or
        // `setParams` are used.
        var /** @type {?} */ headers = update.headers || this.headers;
        var /** @type {?} */ params = update.params || this.params;
        // Check whether the caller has asked to add headers.
        if (update.setHeaders !== undefined) {
            // Set every requested header.
            headers =
                Object.keys(update.setHeaders)
                    .reduce(function (headers, name) { return headers.set(name, /** @type {?} */ ((update.setHeaders))[name]); }, headers);
        }
        // Check whether the caller has asked to set params.
        if (update.setParams) {
            // Set every requested param.
            params = Object.keys(update.setParams)
                .reduce(function (params, param) { return params.set(param, /** @type {?} */ ((update.setParams))[param]); }, params);
        }
        // Finally, construct the new HttpRequest using the pieces from above.
        return new HttpRequest(method, url, body, {
            params: params, headers: headers, reportProgress: reportProgress, responseType: responseType, withCredentials: withCredentials,
        });
    };
    return HttpRequest;
}());
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var HttpEventType = {};
HttpEventType.Sent = 0;
HttpEventType.UploadProgress = 1;
HttpEventType.ResponseHeader = 2;
HttpEventType.DownloadProgress = 3;
HttpEventType.Response = 4;
HttpEventType.User = 5;
HttpEventType[HttpEventType.Sent] = "Sent";
HttpEventType[HttpEventType.UploadProgress] = "UploadProgress";
HttpEventType[HttpEventType.ResponseHeader] = "ResponseHeader";
HttpEventType[HttpEventType.DownloadProgress] = "DownloadProgress";
HttpEventType[HttpEventType.Response] = "Response";
HttpEventType[HttpEventType.User] = "User";
/**
 * Base class for both `HttpResponse` and `HttpHeaderResponse`.
 *
 * \@experimental
 * @abstract
 */
var HttpResponseBase = (function () {
    /**
     * Super-constructor for all responses.
     *
     * The single parameter accepted is an initialization hash. Any properties
     * of the response passed there will override the default values.
     * @param {?} init
     * @param {?=} defaultStatus
     * @param {?=} defaultStatusText
     */
    function HttpResponseBase(init, defaultStatus, defaultStatusText) {
        if (defaultStatus === void 0) { defaultStatus = 200; }
        if (defaultStatusText === void 0) { defaultStatusText = 'OK'; }
        // If the hash has values passed, use them to initialize the response.
        // Otherwise use the default values.
        this.headers = init.headers || new HttpHeaders();
        this.status = init.status !== undefined ? init.status : defaultStatus;
        this.statusText = init.statusText || defaultStatusText;
        this.url = init.url || null;
        // Cache the ok value to avoid defining a getter.
        this.ok = this.status >= 200 && this.status < 300;
    }
    return HttpResponseBase;
}());
/**
 * A partial HTTP response which only includes the status and header data,
 * but no response body.
 *
 * `HttpHeaderResponse` is a `HttpEvent` available on the response
 * event stream, only when progress events are requested.
 *
 * \@experimental
 */
var HttpHeaderResponse = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __extends */](HttpHeaderResponse, _super);
    /**
     * Create a new `HttpHeaderResponse` with the given parameters.
     * @param {?=} init
     */
    function HttpHeaderResponse(init) {
        if (init === void 0) { init = {}; }
        var _this = _super.call(this, init) || this;
        _this.type = HttpEventType.ResponseHeader;
        return _this;
    }
    /**
     * Copy this `HttpHeaderResponse`, overriding its contents with the
     * given parameter hash.
     * @param {?=} update
     * @return {?}
     */
    HttpHeaderResponse.prototype.clone = function (update) {
        if (update === void 0) { update = {}; }
        // Perform a straightforward initialization of the new HttpHeaderResponse,
        // overriding the current parameters with new ones if given.
        return new HttpHeaderResponse({
            headers: update.headers || this.headers,
            status: update.status !== undefined ? update.status : this.status,
            statusText: update.statusText || this.statusText,
            url: update.url || this.url || undefined,
        });
    };
    return HttpHeaderResponse;
}(HttpResponseBase));
/**
 * A full HTTP response, including a typed response body (which may be `null`
 * if one was not returned).
 *
 * `HttpResponse` is a `HttpEvent` available on the response event
 * stream.
 *
 * \@experimental
 */
var HttpResponse = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __extends */](HttpResponse, _super);
    /**
     * Construct a new `HttpResponse`.
     * @param {?=} init
     */
    function HttpResponse(init) {
        if (init === void 0) { init = {}; }
        var _this = _super.call(this, init) || this;
        _this.type = HttpEventType.Response;
        _this.body = init.body || null;
        return _this;
    }
    /**
     * @param {?=} update
     * @return {?}
     */
    HttpResponse.prototype.clone = function (update) {
        if (update === void 0) { update = {}; }
        return new HttpResponse({
            body: (update.body !== undefined) ? update.body : this.body,
            headers: update.headers || this.headers,
            status: (update.status !== undefined) ? update.status : this.status,
            statusText: update.statusText || this.statusText,
            url: update.url || this.url || undefined,
        });
    };
    return HttpResponse;
}(HttpResponseBase));
/**
 * A response that represents an error or failure, either from a
 * non-successful HTTP status, an error while executing the request,
 * or some other failure which occurred during the parsing of the response.
 *
 * Any error returned on the `Observable` response stream will be
 * wrapped in an `HttpErrorResponse` to provide additional context about
 * the state of the HTTP layer when the error occurred. The error property
 * will contain either a wrapped Error object or the error response returned
 * from the server.
 *
 * \@experimental
 */
var HttpErrorResponse = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __extends */](HttpErrorResponse, _super);
    /**
     * @param {?} init
     */
    function HttpErrorResponse(init) {
        var _this = 
        // Initialize with a default status of 0 / Unknown Error.
        _super.call(this, init, 0, 'Unknown Error') || this;
        _this.name = 'HttpErrorResponse';
        /**
         * Errors are never okay, even when the status code is in the 2xx success range.
         */
        _this.ok = false;
        // If the response was successful, then this was a parse error. Otherwise, it was
        // a protocol-level failure of some sort. Either the request failed in transit
        // or the server returned an unsuccessful status code.
        if (_this.status >= 200 && _this.status < 300) {
            _this.message = "Http failure during parsing for " + (init.url || '(unknown url)');
        }
        else {
            _this.message =
                "Http failure response for " + (init.url || '(unknown url)') + ": " + init.status + " " + init.statusText;
        }
        _this.error = init.error || null;
        return _this;
    }
    return HttpErrorResponse;
}(HttpResponseBase));
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Construct an instance of `HttpRequestOptions<T>` from a source `HttpMethodOptions` and
 * the given `body`. Basically, this clones the object and adds the body.
 * @template T
 * @param {?} options
 * @param {?} body
 * @return {?}
 */
function addBody(options, body) {
    return {
        body: body,
        headers: options.headers,
        observe: options.observe,
        params: options.params,
        reportProgress: options.reportProgress,
        responseType: options.responseType,
        withCredentials: options.withCredentials,
    };
}
/**
 * Perform HTTP requests.
 *
 * `HttpClient` is available as an injectable class, with methods to perform HTTP requests.
 * Each request method has multiple signatures, and the return type varies according to which
 * signature is called (mainly the values of `observe` and `responseType`).
 *
 * \@experimental
 */
var HttpClient = (function () {
    /**
     * @param {?} handler
     */
    function HttpClient(handler) {
        this.handler = handler;
    }
    /**
     * Constructs an `Observable` for a particular HTTP request that, when subscribed,
     * fires the request through the chain of registered interceptors and on to the
     * server.
     *
     * This method can be called in one of two ways. Either an `HttpRequest`
     * instance can be passed directly as the only parameter, or a method can be
     * passed as the first parameter, a string URL as the second, and an
     * options hash as the third.
     *
     * If a `HttpRequest` object is passed directly, an `Observable` of the
     * raw `HttpEvent` stream will be returned.
     *
     * If a request is instead built by providing a URL, the options object
     * determines the return type of `request()`. In addition to configuring
     * request parameters such as the outgoing headers and/or the body, the options
     * hash specifies two key pieces of information about the request: the
     * `responseType` and what to `observe`.
     *
     * The `responseType` value determines how a successful response body will be
     * parsed. If `responseType` is the default `json`, a type interface for the
     * resulting object may be passed as a type parameter to `request()`.
     *
     * The `observe` value determines the return type of `request()`, based on what
     * the consumer is interested in observing. A value of `events` will return an
     * `Observable<HttpEvent>` representing the raw `HttpEvent` stream,
     * including progress events by default. A value of `response` will return an
     * `Observable<HttpResponse<T>>` where the `T` parameter of `HttpResponse`
     * depends on the `responseType` and any optionally provided type parameter.
     * A value of `body` will return an `Observable<T>` with the same `T` body type.
     * @param {?} first
     * @param {?=} url
     * @param {?=} options
     * @return {?}
     */
    HttpClient.prototype.request = function (first, url, options) {
        var _this = this;
        if (options === void 0) { options = {}; }
        var /** @type {?} */ req;
        // Firstly, check whether the primary argument is an instance of `HttpRequest`.
        if (first instanceof HttpRequest) {
            // It is. The other arguments must be undefined (per the signatures) and can be
            // ignored.
            req = (first);
        }
        else {
            // It's a string, so it represents a URL. Construct a request based on it,
            // and incorporate the remaining arguments (assuming GET unless a method is
            // provided.
            req = new HttpRequest(first, /** @type {?} */ ((url)), options.body || null, {
                headers: options.headers,
                params: options.params,
                reportProgress: options.reportProgress,
                // By default, JSON is assumed to be returned for all calls.
                responseType: options.responseType || 'json',
                withCredentials: options.withCredentials,
            });
        }
        // Start with an Observable.of() the initial request, and run the handler (which
        // includes all interceptors) inside a concatMap(). This way, the handler runs
        // inside an Observable chain, which causes interceptors to be re-run on every
        // subscription (this also makes retries re-run the handler, including interceptors).
        var /** @type {?} */ events$ = __WEBPACK_IMPORTED_MODULE_3_rxjs_operator_concatMap__["concatMap"].call(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__["of"])(req), function (req) { return _this.handler.handle(req); });
        // If coming via the API signature which accepts a previously constructed HttpRequest,
        // the only option is to get the event stream. Otherwise, return the event stream if
        // that is what was requested.
        if (first instanceof HttpRequest || options.observe === 'events') {
            return events$;
        }
        // The requested stream contains either the full response or the body. In either
        // case, the first step is to filter the event stream to extract a stream of
        // responses(s).
        var /** @type {?} */ res$ = __WEBPACK_IMPORTED_MODULE_4_rxjs_operator_filter__["filter"].call(events$, function (event) { return event instanceof HttpResponse; });
        // Decide which stream to return.
        switch (options.observe || 'body') {
            case 'body':
                // The requested stream is the body. Map the response stream to the response
                // body. This could be done more simply, but a misbehaving interceptor might
                // transform the response body into a different format and ignore the requested
                // responseType. Guard against this by validating that the response is of the
                // requested type.
                switch (req.responseType) {
                    case 'arraybuffer':
                        return __WEBPACK_IMPORTED_MODULE_5_rxjs_operator_map__["map"].call(res$, function (res) {
                            // Validate that the body is an ArrayBuffer.
                            if (res.body !== null && !(res.body instanceof ArrayBuffer)) {
                                throw new Error('Response is not an ArrayBuffer.');
                            }
                            return res.body;
                        });
                    case 'blob':
                        return __WEBPACK_IMPORTED_MODULE_5_rxjs_operator_map__["map"].call(res$, function (res) {
                            // Validate that the body is a Blob.
                            if (res.body !== null && !(res.body instanceof Blob)) {
                                throw new Error('Response is not a Blob.');
                            }
                            return res.body;
                        });
                    case 'text':
                        return __WEBPACK_IMPORTED_MODULE_5_rxjs_operator_map__["map"].call(res$, function (res) {
                            // Validate that the body is a string.
                            if (res.body !== null && typeof res.body !== 'string') {
                                throw new Error('Response is not a string.');
                            }
                            return res.body;
                        });
                    case 'json':
                    default:
                        // No validation needed for JSON responses, as they can be of any type.
                        return __WEBPACK_IMPORTED_MODULE_5_rxjs_operator_map__["map"].call(res$, function (res) { return res.body; });
                }
            case 'response':
                // The response stream was requested directly, so return it.
                return res$;
            default:
                // Guard against new future observe types being added.
                throw new Error("Unreachable: unhandled observe type " + options.observe + "}");
        }
    };
    /**
     * Constructs an `Observable` which, when subscribed, will cause the configured
     * DELETE request to be executed on the server. See the individual overloads for
     * details of `delete()`'s return type based on the provided options.
     * @param {?} url
     * @param {?=} options
     * @return {?}
     */
    HttpClient.prototype.delete = function (url, options) {
        if (options === void 0) { options = {}; }
        return this.request('DELETE', url, /** @type {?} */ (options));
    };
    /**
     * Constructs an `Observable` which, when subscribed, will cause the configured
     * GET request to be executed on the server. See the individual overloads for
     * details of `get()`'s return type based on the provided options.
     * @param {?} url
     * @param {?=} options
     * @return {?}
     */
    HttpClient.prototype.get = function (url, options) {
        if (options === void 0) { options = {}; }
        return this.request('GET', url, /** @type {?} */ (options));
    };
    /**
     * Constructs an `Observable` which, when subscribed, will cause the configured
     * HEAD request to be executed on the server. See the individual overloads for
     * details of `head()`'s return type based on the provided options.
     * @param {?} url
     * @param {?=} options
     * @return {?}
     */
    HttpClient.prototype.head = function (url, options) {
        if (options === void 0) { options = {}; }
        return this.request('HEAD', url, /** @type {?} */ (options));
    };
    /**
     * Constructs an `Observable` which, when subscribed, will cause a request
     * with the special method `JSONP` to be dispatched via the interceptor pipeline.
     *
     * A suitable interceptor must be installed (e.g. via the `HttpClientJsonpModule`).
     * If no such interceptor is reached, then the `JSONP` request will likely be
     * rejected by the configured backend.
     * @template T
     * @param {?} url
     * @param {?} callbackParam
     * @return {?}
     */
    HttpClient.prototype.jsonp = function (url, callbackParam) {
        return this.request('JSONP', url, {
            params: new HttpParams().append(callbackParam, 'JSONP_CALLBACK'),
            observe: 'body',
            responseType: 'json',
        });
    };
    /**
     * Constructs an `Observable` which, when subscribed, will cause the configured
     * OPTIONS request to be executed on the server. See the individual overloads for
     * details of `options()`'s return type based on the provided options.
     * @param {?} url
     * @param {?=} options
     * @return {?}
     */
    HttpClient.prototype.options = function (url, options) {
        if (options === void 0) { options = {}; }
        return this.request('OPTIONS', url, /** @type {?} */ (options));
    };
    /**
     * Constructs an `Observable` which, when subscribed, will cause the configured
     * PATCH request to be executed on the server. See the individual overloads for
     * details of `patch()`'s return type based on the provided options.
     * @param {?} url
     * @param {?} body
     * @param {?=} options
     * @return {?}
     */
    HttpClient.prototype.patch = function (url, body, options) {
        if (options === void 0) { options = {}; }
        return this.request('PATCH', url, addBody(options, body));
    };
    /**
     * Constructs an `Observable` which, when subscribed, will cause the configured
     * POST request to be executed on the server. See the individual overloads for
     * details of `post()`'s return type based on the provided options.
     * @param {?} url
     * @param {?} body
     * @param {?=} options
     * @return {?}
     */
    HttpClient.prototype.post = function (url, body, options) {
        if (options === void 0) { options = {}; }
        return this.request('POST', url, addBody(options, body));
    };
    /**
     * Constructs an `Observable` which, when subscribed, will cause the configured
     * POST request to be executed on the server. See the individual overloads for
     * details of `post()`'s return type based on the provided options.
     * @param {?} url
     * @param {?} body
     * @param {?=} options
     * @return {?}
     */
    HttpClient.prototype.put = function (url, body, options) {
        if (options === void 0) { options = {}; }
        return this.request('PUT', url, addBody(options, body));
    };
    return HttpClient;
}());
HttpClient.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"] },
];
/**
 * @nocollapse
 */
HttpClient.ctorParameters = function () { return [
    { type: HttpHandler, },
]; };
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * `HttpHandler` which applies an `HttpInterceptor` to an `HttpRequest`.
 *
 * \@experimental
 */
var HttpInterceptorHandler = (function () {
    /**
     * @param {?} next
     * @param {?} interceptor
     */
    function HttpInterceptorHandler(next, interceptor) {
        this.next = next;
        this.interceptor = interceptor;
    }
    /**
     * @param {?} req
     * @return {?}
     */
    HttpInterceptorHandler.prototype.handle = function (req) {
        return this.interceptor.intercept(req, this.next);
    };
    return HttpInterceptorHandler;
}());
/**
 * A multi-provider token which represents the array of `HttpInterceptor`s that
 * are registered.
 *
 * \@experimental
 */
var HTTP_INTERCEPTORS = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["InjectionToken"]('HTTP_INTERCEPTORS');
var NoopInterceptor = (function () {
    function NoopInterceptor() {
    }
    /**
     * @param {?} req
     * @param {?} next
     * @return {?}
     */
    NoopInterceptor.prototype.intercept = function (req, next) {
        return next.handle(req);
    };
    return NoopInterceptor;
}());
NoopInterceptor.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"] },
];
/**
 * @nocollapse
 */
NoopInterceptor.ctorParameters = function () { return []; };
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// Every request made through JSONP needs a callback name that's unique across the
// whole page. Each request is assigned an id and the callback name is constructed
// from that. The next id to be assigned is tracked in a global variable here that
// is shared among all applications on the page.
var nextRequestId = 0;
// Error text given when a JSONP script is injected, but doesn't invoke the callback
// passed in its URL.
var JSONP_ERR_NO_CALLBACK = 'JSONP injected script did not invoke callback.';
// Error text given when a request is passed to the JsonpClientBackend that doesn't
// have a request method JSONP.
var JSONP_ERR_WRONG_METHOD = 'JSONP requests must use JSONP request method.';
var JSONP_ERR_WRONG_RESPONSE_TYPE = 'JSONP requests must use Json response type.';
/**
 * DI token/abstract type representing a map of JSONP callbacks.
 *
 * In the browser, this should always be the `window` object.
 *
 * \@experimental
 * @abstract
 */
var JsonpCallbackContext = (function () {
    function JsonpCallbackContext() {
    }
    return JsonpCallbackContext;
}());
/**
 * `HttpBackend` that only processes `HttpRequest` with the JSONP method,
 * by performing JSONP style requests.
 *
 * \@experimental
 */
var JsonpClientBackend = (function () {
    /**
     * @param {?} callbackMap
     * @param {?} document
     */
    function JsonpClientBackend(callbackMap, document) {
        this.callbackMap = callbackMap;
        this.document = document;
    }
    /**
     * Get the name of the next callback method, by incrementing the global `nextRequestId`.
     * @return {?}
     */
    JsonpClientBackend.prototype.nextCallback = function () { return "ng_jsonp_callback_" + nextRequestId++; };
    /**
     * Process a JSONP request and return an event stream of the results.
     * @param {?} req
     * @return {?}
     */
    JsonpClientBackend.prototype.handle = function (req) {
        var _this = this;
        // Firstly, check both the method and response type. If either doesn't match
        // then the request was improperly routed here and cannot be handled.
        if (req.method !== 'JSONP') {
            throw new Error(JSONP_ERR_WRONG_METHOD);
        }
        else if (req.responseType !== 'json') {
            throw new Error(JSONP_ERR_WRONG_RESPONSE_TYPE);
        }
        // Everything else happens inside the Observable boundary.
        return new __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["Observable"](function (observer) {
            // The first step to make a request is to generate the callback name, and replace the
            // callback placeholder in the URL with the name. Care has to be taken here to ensure
            // a trailing &, if matched, gets inserted back into the URL in the correct place.
            var /** @type {?} */ callback = _this.nextCallback();
            var /** @type {?} */ url = req.urlWithParams.replace(/=JSONP_CALLBACK(&|$)/, "=" + callback + "$1");
            // Construct the <script> tag and point it at the URL.
            var /** @type {?} */ node = _this.document.createElement('script');
            node.src = url;
            // A JSONP request requires waiting for multiple callbacks. These variables
            // are closed over and track state across those callbacks.
            // The response object, if one has been received, or null otherwise.
            var /** @type {?} */ body = null;
            // Whether the response callback has been called.
            var /** @type {?} */ finished = false;
            // Whether the request has been cancelled (and thus any other callbacks)
            // should be ignored.
            var /** @type {?} */ cancelled = false;
            // Set the response callback in this.callbackMap (which will be the window
            // object in the browser. The script being loaded via the <script> tag will
            // eventually call this callback.
            _this.callbackMap[callback] = function (data) {
                // Data has been received from the JSONP script. Firstly, delete this callback.
                delete _this.callbackMap[callback];
                // Next, make sure the request wasn't cancelled in the meantime.
                if (cancelled) {
                    return;
                }
                // Set state to indicate data was received.
                body = data;
                finished = true;
            };
            // cleanup() is a utility closure that removes the <script> from the page and
            // the response callback from the window. This logic is used in both the
            // success, error, and cancellation paths, so it's extracted out for convenience.
            var /** @type {?} */ cleanup = function () {
                // Remove the <script> tag if it's still on the page.
                if (node.parentNode) {
                    node.parentNode.removeChild(node);
                }
                // Remove the response callback from the callbackMap (window object in the
                // browser).
                delete _this.callbackMap[callback];
            };
            // onLoad() is the success callback which runs after the response callback
            // if the JSONP script loads successfully. The event itself is unimportant.
            // If something went wrong, onLoad() may run without the response callback
            // having been invoked.
            var /** @type {?} */ onLoad = function (event) {
                // Do nothing if the request has been cancelled.
                if (cancelled) {
                    return;
                }
                // Cleanup the page.
                cleanup();
                // Check whether the response callback has run.
                if (!finished) {
                    // It hasn't, something went wrong with the request. Return an error via
                    // the Observable error path. All JSONP errors have status 0.
                    observer.error(new HttpErrorResponse({
                        url: url,
                        status: 0,
                        statusText: 'JSONP Error',
                        error: new Error(JSONP_ERR_NO_CALLBACK),
                    }));
                    return;
                }
                // Success. body either contains the response body or null if none was
                // returned.
                observer.next(new HttpResponse({
                    body: body,
                    status: 200,
                    statusText: 'OK', url: url,
                }));
                // Complete the stream, the resposne is over.
                observer.complete();
            };
            // onError() is the error callback, which runs if the script returned generates
            // a Javascript error. It emits the error via the Observable error channel as
            // a HttpErrorResponse.
            var /** @type {?} */ onError = function (error) {
                // If the request was already cancelled, no need to emit anything.
                if (cancelled) {
                    return;
                }
                cleanup();
                // Wrap the error in a HttpErrorResponse.
                observer.error(new HttpErrorResponse({
                    error: error,
                    status: 0,
                    statusText: 'JSONP Error', url: url,
                }));
            };
            // Subscribe to both the success (load) and error events on the <script> tag,
            // and add it to the page.
            node.addEventListener('load', onLoad);
            node.addEventListener('error', onError);
            _this.document.body.appendChild(node);
            // The request has now been successfully sent.
            observer.next({ type: HttpEventType.Sent });
            // Cancellation handler.
            return function () {
                // Track the cancellation so event listeners won't do anything even if already scheduled.
                cancelled = true;
                // Remove the event listeners so they won't run if the events later fire.
                node.removeEventListener('load', onLoad);
                node.removeEventListener('error', onError);
                // And finally, clean up the page.
                cleanup();
            };
        });
    };
    return JsonpClientBackend;
}());
JsonpClientBackend.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"] },
];
/**
 * @nocollapse
 */
JsonpClientBackend.ctorParameters = function () { return [
    { type: JsonpCallbackContext, },
    { type: undefined, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Inject"], args: [__WEBPACK_IMPORTED_MODULE_6__angular_common__["c" /* DOCUMENT */],] },] },
]; };
/**
 * An `HttpInterceptor` which identifies requests with the method JSONP and
 * shifts them to the `JsonpClientBackend`.
 *
 * \@experimental
 */
var JsonpInterceptor = (function () {
    /**
     * @param {?} jsonp
     */
    function JsonpInterceptor(jsonp) {
        this.jsonp = jsonp;
    }
    /**
     * @param {?} req
     * @param {?} next
     * @return {?}
     */
    JsonpInterceptor.prototype.intercept = function (req, next) {
        if (req.method === 'JSONP') {
            return this.jsonp.handle(/** @type {?} */ (req));
        }
        // Fall through for normal HTTP requests.
        return next.handle(req);
    };
    return JsonpInterceptor;
}());
JsonpInterceptor.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"] },
];
/**
 * @nocollapse
 */
JsonpInterceptor.ctorParameters = function () { return [
    { type: JsonpClientBackend, },
]; };
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var XSSI_PREFIX = /^\)\]\}',?\n/;
/**
 * Determine an appropriate URL for the response, by checking either
 * XMLHttpRequest.responseURL or the X-Request-URL header.
 * @param {?} xhr
 * @return {?}
 */
function getResponseUrl(xhr) {
    if ('responseURL' in xhr && xhr.responseURL) {
        return xhr.responseURL;
    }
    if (/^X-Request-URL:/m.test(xhr.getAllResponseHeaders())) {
        return xhr.getResponseHeader('X-Request-URL');
    }
    return null;
}
/**
 * A wrapper around the `XMLHttpRequest` constructor.
 *
 * \@experimental
 * @abstract
 */
var XhrFactory = (function () {
    function XhrFactory() {
    }
    /**
     * @abstract
     * @return {?}
     */
    XhrFactory.prototype.build = function () { };
    return XhrFactory;
}());
/**
 * A factory for \@{link HttpXhrBackend} that uses the `XMLHttpRequest` browser API.
 *
 * \@experimental
 */
var BrowserXhr = (function () {
    function BrowserXhr() {
    }
    /**
     * @return {?}
     */
    BrowserXhr.prototype.build = function () { return ((new XMLHttpRequest())); };
    return BrowserXhr;
}());
BrowserXhr.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"] },
];
/**
 * @nocollapse
 */
BrowserXhr.ctorParameters = function () { return []; };
/**
 * An `HttpBackend` which uses the XMLHttpRequest API to send
 * requests to a backend server.
 *
 * \@experimental
 */
var HttpXhrBackend = (function () {
    /**
     * @param {?} xhrFactory
     */
    function HttpXhrBackend(xhrFactory) {
        this.xhrFactory = xhrFactory;
    }
    /**
     * Process a request and return a stream of response events.
     * @param {?} req
     * @return {?}
     */
    HttpXhrBackend.prototype.handle = function (req) {
        var _this = this;
        // Quick check to give a better error message when a user attempts to use
        // HttpClient.jsonp() without installing the JsonpClientModule
        if (req.method === 'JSONP') {
            throw new Error("Attempted to construct Jsonp request without JsonpClientModule installed.");
        }
        // Everything happens on Observable subscription.
        return new __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["Observable"](function (observer) {
            // Start by setting up the XHR object with request method, URL, and withCredentials flag.
            var /** @type {?} */ xhr = _this.xhrFactory.build();
            xhr.open(req.method, req.urlWithParams);
            if (!!req.withCredentials) {
                xhr.withCredentials = true;
            }
            // Add all the requested headers.
            req.headers.forEach(function (name, values) { return xhr.setRequestHeader(name, values.join(',')); });
            // Add an Accept header if one isn't present already.
            if (!req.headers.has('Accept')) {
                xhr.setRequestHeader('Accept', 'application/json, text/plain, */*');
            }
            // Auto-detect the Content-Type header if one isn't present already.
            if (!req.headers.has('Content-Type')) {
                var /** @type {?} */ detectedType = req.detectContentTypeHeader();
                // Sometimes Content-Type detection fails.
                if (detectedType !== null) {
                    xhr.setRequestHeader('Content-Type', detectedType);
                }
            }
            // Set the responseType if one was requested.
            if (req.responseType) {
                var /** @type {?} */ responseType = req.responseType.toLowerCase();
                // JSON responses need to be processed as text. This is because if the server
                // returns an XSSI-prefixed JSON response, the browser will fail to parse it,
                // xhr.response will be null, and xhr.responseText cannot be accessed to
                // retrieve the prefixed JSON data in order to strip the prefix. Thus, all JSON
                // is parsed by first requesting text and then applying JSON.parse.
                xhr.responseType = (((responseType !== 'json') ? responseType : 'text'));
            }
            // Serialize the request body if one is present. If not, this will be set to null.
            var /** @type {?} */ reqBody = req.serializeBody();
            // If progress events are enabled, response headers will be delivered
            // in two events - the HttpHeaderResponse event and the full HttpResponse
            // event. However, since response headers don't change in between these
            // two events, it doesn't make sense to parse them twice. So headerResponse
            // caches the data extracted from the response whenever it's first parsed,
            // to ensure parsing isn't duplicated.
            var /** @type {?} */ headerResponse = null;
            // partialFromXhr extracts the HttpHeaderResponse from the current XMLHttpRequest
            // state, and memoizes it into headerResponse.
            var /** @type {?} */ partialFromXhr = function () {
                if (headerResponse !== null) {
                    return headerResponse;
                }
                // Read status and normalize an IE9 bug (http://bugs.jquery.com/ticket/1450).
                var /** @type {?} */ status = xhr.status === 1223 ? 204 : xhr.status;
                var /** @type {?} */ statusText = xhr.statusText || 'OK';
                // Parse headers from XMLHttpRequest - this step is lazy.
                var /** @type {?} */ headers = new HttpHeaders(xhr.getAllResponseHeaders());
                // Read the response URL from the XMLHttpResponse instance and fall back on the
                // request URL.
                var /** @type {?} */ url = getResponseUrl(xhr) || req.url;
                // Construct the HttpHeaderResponse and memoize it.
                headerResponse = new HttpHeaderResponse({ headers: headers, status: status, statusText: statusText, url: url });
                return headerResponse;
            };
            // Next, a few closures are defined for the various events which XMLHttpRequest can
            // emit. This allows them to be unregistered as event listeners later.
            // First up is the load event, which represents a response being fully available.
            var /** @type {?} */ onLoad = function () {
                // Read response state from the memoized partial data.
                var _a = partialFromXhr(), headers = _a.headers, status = _a.status, statusText = _a.statusText, url = _a.url;
                // The body will be read out if present.
                var /** @type {?} */ body = null;
                if (status !== 204) {
                    // Use XMLHttpRequest.response if set, responseText otherwise.
                    body = (typeof xhr.response === 'undefined') ? xhr.responseText : xhr.response;
                }
                // Normalize another potential bug (this one comes from CORS).
                if (status === 0) {
                    status = !!body ? 200 : 0;
                }
                // ok determines whether the response will be transmitted on the event or
                // error channel. Unsuccessful status codes (not 2xx) will always be errors,
                // but a successful status code can still result in an error if the user
                // asked for JSON data and the body cannot be parsed as such.
                var /** @type {?} */ ok = status >= 200 && status < 300;
                // Check whether the body needs to be parsed as JSON (in many cases the browser
                // will have done that already).
                if (ok && req.responseType === 'json' && typeof body === 'string') {
                    // Attempt the parse. If it fails, a parse error should be delivered to the user.
                    body = body.replace(XSSI_PREFIX, '');
                    try {
                        body = JSON.parse(body);
                    }
                    catch (error) {
                        // Even though the response status was 2xx, this is still an error.
                        ok = false;
                        // The parse error contains the text of the body that failed to parse.
                        body = ({ error: error, text: body });
                    }
                }
                else if (!ok && req.responseType === 'json' && typeof body === 'string') {
                    try {
                        // Attempt to parse the body as JSON.
                        body = JSON.parse(body);
                    }
                    catch (error) {
                        // Cannot be certain that the body was meant to be parsed as JSON.
                        // Leave the body as a string.
                    }
                }
                if (ok) {
                    // A successful response is delivered on the event stream.
                    observer.next(new HttpResponse({
                        body: body,
                        headers: headers,
                        status: status,
                        statusText: statusText,
                        url: url || undefined,
                    }));
                    // The full body has been received and delivered, no further events
                    // are possible. This request is complete.
                    observer.complete();
                }
                else {
                    // An unsuccessful request is delivered on the error channel.
                    observer.error(new HttpErrorResponse({
                        // The error in this case is the response body (error from the server).
                        error: body,
                        headers: headers,
                        status: status,
                        statusText: statusText,
                        url: url || undefined,
                    }));
                }
            };
            // The onError callback is called when something goes wrong at the network level.
            // Connection timeout, DNS error, offline, etc. These are actual errors, and are
            // transmitted on the error channel.
            var /** @type {?} */ onError = function (error) {
                var /** @type {?} */ res = new HttpErrorResponse({
                    error: error,
                    status: xhr.status || 0,
                    statusText: xhr.statusText || 'Unknown Error',
                });
                observer.error(res);
            };
            // The sentHeaders flag tracks whether the HttpResponseHeaders event
            // has been sent on the stream. This is necessary to track if progress
            // is enabled since the event will be sent on only the first download
            // progerss event.
            var /** @type {?} */ sentHeaders = false;
            // The download progress event handler, which is only registered if
            // progress events are enabled.
            var /** @type {?} */ onDownProgress = function (event) {
                // Send the HttpResponseHeaders event if it hasn't been sent already.
                if (!sentHeaders) {
                    observer.next(partialFromXhr());
                    sentHeaders = true;
                }
                // Start building the download progress event to deliver on the response
                // event stream.
                var /** @type {?} */ progressEvent = {
                    type: HttpEventType.DownloadProgress,
                    loaded: event.loaded,
                };
                // Set the total number of bytes in the event if it's available.
                if (event.lengthComputable) {
                    progressEvent.total = event.total;
                }
                // If the request was for text content and a partial response is
                // available on XMLHttpRequest, include it in the progress event
                // to allow for streaming reads.
                if (req.responseType === 'text' && !!xhr.responseText) {
                    progressEvent.partialText = xhr.responseText;
                }
                // Finally, fire the event.
                observer.next(progressEvent);
            };
            // The upload progress event handler, which is only registered if
            // progress events are enabled.
            var /** @type {?} */ onUpProgress = function (event) {
                // Upload progress events are simpler. Begin building the progress
                // event.
                var /** @type {?} */ progress = {
                    type: HttpEventType.UploadProgress,
                    loaded: event.loaded,
                };
                // If the total number of bytes being uploaded is available, include
                // it.
                if (event.lengthComputable) {
                    progress.total = event.total;
                }
                // Send the event.
                observer.next(progress);
            };
            // By default, register for load and error events.
            xhr.addEventListener('load', onLoad);
            xhr.addEventListener('error', onError);
            // Progress events are only enabled if requested.
            if (req.reportProgress) {
                // Download progress is always enabled if requested.
                xhr.addEventListener('progress', onDownProgress);
                // Upload progress depends on whether there is a body to upload.
                if (reqBody !== null && xhr.upload) {
                    xhr.upload.addEventListener('progress', onUpProgress);
                }
            }
            // Fire the request, and notify the event stream that it was fired.
            xhr.send(reqBody);
            observer.next({ type: HttpEventType.Sent });
            // This is the return from the Observable function, which is the
            // request cancellation handler.
            return function () {
                // On a cancellation, remove all registered event listeners.
                xhr.removeEventListener('error', onError);
                xhr.removeEventListener('load', onLoad);
                if (req.reportProgress) {
                    xhr.removeEventListener('progress', onDownProgress);
                    if (reqBody !== null && xhr.upload) {
                        xhr.upload.removeEventListener('progress', onUpProgress);
                    }
                }
                // Finally, abort the in-flight request.
                xhr.abort();
            };
        });
    };
    return HttpXhrBackend;
}());
HttpXhrBackend.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"] },
];
/**
 * @nocollapse
 */
HttpXhrBackend.ctorParameters = function () { return [
    { type: XhrFactory, },
]; };
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var XSRF_COOKIE_NAME = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["InjectionToken"]('XSRF_COOKIE_NAME');
var XSRF_HEADER_NAME = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["InjectionToken"]('XSRF_HEADER_NAME');
/**
 * Retrieves the current XSRF token to use with the next outgoing request.
 *
 * \@experimental
 * @abstract
 */
var HttpXsrfTokenExtractor = (function () {
    function HttpXsrfTokenExtractor() {
    }
    /**
     * Get the XSRF token to use with an outgoing request.
     *
     * Will be called for every request, so the token may change between requests.
     * @abstract
     * @return {?}
     */
    HttpXsrfTokenExtractor.prototype.getToken = function () { };
    return HttpXsrfTokenExtractor;
}());
/**
 * `HttpXsrfTokenExtractor` which retrieves the token from a cookie.
 */
var HttpXsrfCookieExtractor = (function () {
    /**
     * @param {?} doc
     * @param {?} platform
     * @param {?} cookieName
     */
    function HttpXsrfCookieExtractor(doc, platform, cookieName) {
        this.doc = doc;
        this.platform = platform;
        this.cookieName = cookieName;
        this.lastCookieString = '';
        this.lastToken = null;
        /**
         * \@internal for testing
         */
        this.parseCount = 0;
    }
    /**
     * @return {?}
     */
    HttpXsrfCookieExtractor.prototype.getToken = function () {
        if (this.platform === 'server') {
            return null;
        }
        var /** @type {?} */ cookieString = this.doc.cookie || '';
        if (cookieString !== this.lastCookieString) {
            this.parseCount++;
            this.lastToken = Object(__WEBPACK_IMPORTED_MODULE_6__angular_common__["k" /* ɵparseCookieValue */])(cookieString, this.cookieName);
            this.lastCookieString = cookieString;
        }
        return this.lastToken;
    };
    return HttpXsrfCookieExtractor;
}());
HttpXsrfCookieExtractor.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"] },
];
/**
 * @nocollapse
 */
HttpXsrfCookieExtractor.ctorParameters = function () { return [
    { type: undefined, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Inject"], args: [__WEBPACK_IMPORTED_MODULE_6__angular_common__["c" /* DOCUMENT */],] },] },
    { type: undefined, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Inject"], args: [__WEBPACK_IMPORTED_MODULE_1__angular_core__["PLATFORM_ID"],] },] },
    { type: undefined, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Inject"], args: [XSRF_COOKIE_NAME,] },] },
]; };
/**
 * `HttpInterceptor` which adds an XSRF token to eligible outgoing requests.
 */
var HttpXsrfInterceptor = (function () {
    /**
     * @param {?} tokenService
     * @param {?} headerName
     */
    function HttpXsrfInterceptor(tokenService, headerName) {
        this.tokenService = tokenService;
        this.headerName = headerName;
    }
    /**
     * @param {?} req
     * @param {?} next
     * @return {?}
     */
    HttpXsrfInterceptor.prototype.intercept = function (req, next) {
        var /** @type {?} */ lcUrl = req.url.toLowerCase();
        // Skip both non-mutating requests and absolute URLs.
        // Non-mutating requests don't require a token, and absolute URLs require special handling
        // anyway as the cookie set
        // on our origin is not the same as the token expected by another origin.
        if (req.method === 'GET' || req.method === 'HEAD' || lcUrl.startsWith('http://') ||
            lcUrl.startsWith('https://')) {
            return next.handle(req);
        }
        var /** @type {?} */ token = this.tokenService.getToken();
        // Be careful not to overwrite an existing header of the same name.
        if (token !== null && !req.headers.has(this.headerName)) {
            req = req.clone({ headers: req.headers.set(this.headerName, token) });
        }
        return next.handle(req);
    };
    return HttpXsrfInterceptor;
}());
HttpXsrfInterceptor.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"] },
];
/**
 * @nocollapse
 */
HttpXsrfInterceptor.ctorParameters = function () { return [
    { type: HttpXsrfTokenExtractor, },
    { type: undefined, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Inject"], args: [XSRF_HEADER_NAME,] },] },
]; };
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Constructs an `HttpHandler` that applies a bunch of `HttpInterceptor`s
 * to a request before passing it to the given `HttpBackend`.
 *
 * Meant to be used as a factory function within `HttpClientModule`.
 *
 * \@experimental
 * @param {?} backend
 * @param {?=} interceptors
 * @return {?}
 */
function interceptingHandler(backend, interceptors) {
    if (interceptors === void 0) { interceptors = []; }
    if (!interceptors) {
        return backend;
    }
    return interceptors.reduceRight(function (next, interceptor) { return new HttpInterceptorHandler(next, interceptor); }, backend);
}
/**
 * Factory function that determines where to store JSONP callbacks.
 *
 * Ordinarily JSONP callbacks are stored on the `window` object, but this may not exist
 * in test environments. In that case, callbacks are stored on an anonymous object instead.
 *
 * \@experimental
 * @return {?}
 */
function jsonpCallbackContext() {
    if (typeof window === 'object') {
        return window;
    }
    return {};
}
/**
 * `NgModule` which adds XSRF protection support to outgoing requests.
 *
 * Provided the server supports a cookie-based XSRF protection system, this
 * module can be used directly to configure XSRF protection with the correct
 * cookie and header names.
 *
 * If no such names are provided, the default is to use `X-XSRF-TOKEN` for
 * the header name and `XSRF-TOKEN` for the cookie name.
 *
 * \@experimental
 */
var HttpClientXsrfModule = (function () {
    function HttpClientXsrfModule() {
    }
    /**
     * Disable the default XSRF protection.
     * @return {?}
     */
    HttpClientXsrfModule.disable = function () {
        return {
            ngModule: HttpClientXsrfModule,
            providers: [
                { provide: HttpXsrfInterceptor, useClass: NoopInterceptor },
            ],
        };
    };
    /**
     * Configure XSRF protection to use the given cookie name or header name,
     * or the default names (as described above) if not provided.
     * @param {?=} options
     * @return {?}
     */
    HttpClientXsrfModule.withOptions = function (options) {
        if (options === void 0) { options = {}; }
        return {
            ngModule: HttpClientXsrfModule,
            providers: [
                options.cookieName ? { provide: XSRF_COOKIE_NAME, useValue: options.cookieName } : [],
                options.headerName ? { provide: XSRF_HEADER_NAME, useValue: options.headerName } : [],
            ],
        };
    };
    return HttpClientXsrfModule;
}());
HttpClientXsrfModule.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"], args: [{
                providers: [
                    HttpXsrfInterceptor,
                    { provide: HTTP_INTERCEPTORS, useExisting: HttpXsrfInterceptor, multi: true },
                    { provide: HttpXsrfTokenExtractor, useClass: HttpXsrfCookieExtractor },
                    { provide: XSRF_COOKIE_NAME, useValue: 'XSRF-TOKEN' },
                    { provide: XSRF_HEADER_NAME, useValue: 'X-XSRF-TOKEN' },
                ],
            },] },
];
/**
 * @nocollapse
 */
HttpClientXsrfModule.ctorParameters = function () { return []; };
/**
 * `NgModule` which provides the `HttpClient` and associated services.
 *
 * Interceptors can be added to the chain behind `HttpClient` by binding them
 * to the multiprovider for `HTTP_INTERCEPTORS`.
 *
 * \@experimental
 */
var HttpClientModule = (function () {
    function HttpClientModule() {
    }
    return HttpClientModule;
}());
HttpClientModule.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"], args: [{
                imports: [
                    HttpClientXsrfModule.withOptions({
                        cookieName: 'XSRF-TOKEN',
                        headerName: 'X-XSRF-TOKEN',
                    }),
                ],
                providers: [
                    HttpClient,
                    // HttpHandler is the backend + interceptors and is constructed
                    // using the interceptingHandler factory function.
                    {
                        provide: HttpHandler,
                        useFactory: interceptingHandler,
                        deps: [HttpBackend, [new __WEBPACK_IMPORTED_MODULE_1__angular_core__["Optional"](), new __WEBPACK_IMPORTED_MODULE_1__angular_core__["Inject"](HTTP_INTERCEPTORS)]],
                    },
                    HttpXhrBackend,
                    { provide: HttpBackend, useExisting: HttpXhrBackend },
                    BrowserXhr,
                    { provide: XhrFactory, useExisting: BrowserXhr },
                ],
            },] },
];
/**
 * @nocollapse
 */
HttpClientModule.ctorParameters = function () { return []; };
/**
 * `NgModule` which enables JSONP support in `HttpClient`.
 *
 * Without this module, Jsonp requests will reach the backend
 * with method JSONP, where they'll be rejected.
 *
 * \@experimental
 */
var HttpClientJsonpModule = (function () {
    function HttpClientJsonpModule() {
    }
    return HttpClientJsonpModule;
}());
HttpClientJsonpModule.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"], args: [{
                providers: [
                    JsonpClientBackend,
                    { provide: JsonpCallbackContext, useFactory: jsonpCallbackContext },
                    { provide: HTTP_INTERCEPTORS, useClass: JsonpInterceptor, multi: true },
                ],
            },] },
];
/**
 * @nocollapse
 */
HttpClientJsonpModule.ctorParameters = function () { return []; };
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Generated bundle index. Do not edit.
 */

//# sourceMappingURL=http.es5.js.map


/***/ })

});
//# sourceMappingURL=common.chunk.js.map