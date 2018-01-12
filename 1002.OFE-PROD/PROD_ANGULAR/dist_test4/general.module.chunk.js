webpackJsonp(["general.module"],{

/***/ "../../../../../src/app/facturacion-electronica/general/general.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneralModule", function() { return GeneralModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__directives_datepicker_module__ = __webpack_require__("../../../../../src/app/directives/datepicker.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_utils_module__ = __webpack_require__("../../../../../src/app/utils/utils.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_general_consulta_service__ = __webpack_require__("../../../../../src/app/facturacion-electronica/general/services/general.consulta.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__utils_tipos_service__ = __webpack_require__("../../../../../src/app/facturacion-electronica/general/utils/tipos.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__utils_catalogo_documento_identidad_service__ = __webpack_require__("../../../../../src/app/facturacion-electronica/general/utils/catalogo-documento-identidad.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__consulta_consulta_module__ = __webpack_require__("../../../../../src/app/facturacion-electronica/general/consulta/consulta.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var GeneralModule = (function () {
    function GeneralModule() {
    }
    return GeneralModule;
}());
GeneralModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_4__utils_utils_module__["a" /* UtilsModule */],
            __WEBPACK_IMPORTED_MODULE_2__directives_datepicker_module__["a" /* A2Edatetimepicker */],
            __WEBPACK_IMPORTED_MODULE_8__consulta_consulta_module__["a" /* ConsultaModule */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_5__services_general_consulta_service__["a" /* GeneralConsultaService */],
            __WEBPACK_IMPORTED_MODULE_6__utils_tipos_service__["a" /* TiposService */],
            __WEBPACK_IMPORTED_MODULE_7__utils_catalogo_documento_identidad_service__["a" /* CatalogoDocumentoIdentidadService */]
        ]
    })
], GeneralModule);

//# sourceMappingURL=general.module.js.map

/***/ }),

/***/ "../../../../../src/app/facturacion-electronica/general/utils/catalogo-documento-identidad.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CatalogoDocumentoIdentidadService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CatalogoDocumentoIdentidadService = (function () {
    function CatalogoDocumentoIdentidadService() {
        this.TIPO_DOCUMENTO_IDENTIDAD_DNI = '1';
        this.TIPO_DOCUMENTO_IDENTIDAD_DNI_NOMBRE = 'Documento Nacional de Identidad';
        this.TIPO_DOCUMENTO_IDENTIDAD_CARNET_EXTRANJERIA = '4';
        this.TIPO_DOCUMENTO_IDENTIDAD_CARNET_EXTRANJERIA_NOMBRE = 'Carnet de Extranjeria';
        this.TIPO_DOCUMENTO_IDENTIDAD_RUC = '6';
        this.TIPO_DOCUMENTO_IDENTIDAD_RUC_NOMBRE = 'Registro Unico del Contribuyente';
        this.TIPO_DOCUMENTO_IDENTIDAD_PASAPORTE = '7';
        this.TIPO_DOCUMENTO_IDENTIDAD_PASAPORTE_NOMBRE = 'Pasaporte';
        this.TIPO_DOCUMENTO_IDENTIDAD_CEDULA_DIPLOMATICA_IDENTIDAD = 'A';
        this.TIPO_DOCUMENTO_IDENTIDAD_CEDULA_DIPLOMATICA_IDENTIDAD_NOMBRE = 'Ced. Diplomática de Identidad';
        this.TIPO_DOCUMENTO_IDENTIDAD_OTROS = '0';
        this.TIPO_DOCUMENTO_IDENTIDAD_OTROS_NOMBRE = 'Otros';
    }
    return CatalogoDocumentoIdentidadService;
}());
CatalogoDocumentoIdentidadService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], CatalogoDocumentoIdentidadService);

//# sourceMappingURL=catalogo-documento-identidad.service.js.map

/***/ })

});
//# sourceMappingURL=general.module.chunk.js.map