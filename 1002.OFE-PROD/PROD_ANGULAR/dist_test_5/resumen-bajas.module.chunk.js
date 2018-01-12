webpackJsonp(["resumen-bajas.module"],{

/***/ "../../../../../src/app/facturacion-electronica/general/models/tipoComprobante.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TipoComprobante; });
var TipoComprobante = (function () {
    function TipoComprobante(id, nombre) {
        this.id = id;
        this.nombre = nombre;
    }
    return TipoComprobante;
}());

//# sourceMappingURL=tipoComprobante.js.map

/***/ }),

/***/ "../../../../../src/app/facturacion-electronica/general/services/comprobantes/comprobantes.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComprobantesService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__servidores__ = __webpack_require__("../../../../../src/app/facturacion-electronica/general/services/servidores.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_documento_tablaMaestra__ = __webpack_require__("../../../../../src/app/facturacion-electronica/general/models/documento/tablaMaestra.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ComprobantesService = (function () {
    function ComprobantesService(httpClient, servidores) {
        this.httpClient = httpClient;
        this.servidores = servidores;
        this.url = '/documento/query';
        this.url = this.servidores.DOCUQRY + this.url;
    }
    ComprobantesService.prototype.buscar = function (parametros) {
        var comprobantes = new __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__["BehaviorSubject"]([]);
        this.httpClient.get(this.url, {
            params: parametros
        }).map(function (data) {
            var prueba = data['content'];
            return prueba;
        })
            .subscribe(function (data) {
            comprobantes.next(data);
            console.log(comprobantes.getValue());
        });
        return comprobantes;
    };
    ComprobantesService.prototype.filtroxdefecto = function (tipoComprobanteRegistro, fechadel, fechaal, nropagina, regxpagina, ordenar) {
        var parametros = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpParams */]()
            .set('tipoComprobanteTabla', __WEBPACK_IMPORTED_MODULE_4__models_documento_tablaMaestra__["d" /* TABLA_MAESTRA_TIPO_DOCUMENTO */].toString())
            .set('tipoComprobanteRegistro', tipoComprobanteRegistro)
            .set('fechaEmisionDel', fechadel)
            .set('fechaEmisionAl', fechaal)
            .set('nroPagina', nropagina)
            .set('regXPagina', regxpagina)
            .set('ordenar', ordenar);
        return this.buscar(parametros);
    };
    ComprobantesService.prototype.filtroxcorrelativos = function (tipoComprobanteRegistro, fechadel, fechaal, nropagina, regxpagina, ordenar, correlativoinicial, correlativofinal, serie) {
        var fecha_del = fechadel.getDate().toString() + '/' + fechadel.getMonth().toString() + '/' + fechadel.getFullYear().toString();
        var fecha_al = fechaal.getDate().toString() + '/' + fechaal.getMonth().toString() + '/' + fechaal.getFullYear().toString();
        var parametros = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpParams */]()
            .set('tipoComprobanteTabla', __WEBPACK_IMPORTED_MODULE_4__models_documento_tablaMaestra__["d" /* TABLA_MAESTRA_TIPO_DOCUMENTO */].toString())
            .set('tipoComprobanteRegistro', tipoComprobanteRegistro)
            .set('fechaEmisionDel', fecha_del)
            .set('fechaEmisionAl', fecha_al)
            .set('nroPagina', nropagina)
            .set('regXPagina', regxpagina)
            .set('ordenar', ordenar)
            .set('correlativoInicial', correlativoinicial)
            .set('correlativoFinal', correlativofinal)
            .set('nroSerie', serie);
        return this.buscar(parametros);
    };
    ComprobantesService.prototype.filtroxcorrealivo = function (tipoComprobanteRegistro, fechadel, fechaal, nropagina, regxpagina, ordenar, correlativoinicial, serie) {
        var fecha_del = fechadel.getDate().toString() + '/' + fechadel.getMonth().toString() + '/' + fechadel.getFullYear().toString();
        var fecha_al = fechaal.getDate().toString() + '/' + fechaal.getMonth().toString() + '/' + fechaal.getFullYear().toString();
        var parametros = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpParams */]()
            .set('tipoComprobanteTabla', __WEBPACK_IMPORTED_MODULE_4__models_documento_tablaMaestra__["d" /* TABLA_MAESTRA_TIPO_DOCUMENTO */].toString())
            .set('tipoComprobanteRegistro', tipoComprobanteRegistro)
            .set('fechaEmisionDel', fecha_del)
            .set('fechaEmisionAl', fecha_al)
            .set('nroPagina', nropagina)
            .set('regXPagina', regxpagina)
            .set('ordenar', ordenar)
            .set('correlativoInicial', correlativoinicial)
            .set('correlativoFinal', correlativoinicial)
            .set('nroSerie', serie);
        return this.buscar(parametros);
    };
    return ComprobantesService;
}());
ComprobantesService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__servidores__["a" /* Servidores */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__servidores__["a" /* Servidores */]) === "function" && _b || Object])
], ComprobantesService);

var _a, _b;
//# sourceMappingURL=comprobantes.service.js.map

/***/ }),

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

/***/ "../../../../../src/app/facturacion-electronica/resumen-bajas/models/detalle-baja-consulta.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetalleBajaConsulta; });
var DetalleBajaConsulta = (function () {
    function DetalleBajaConsulta() {
    }
    return DetalleBajaConsulta;
}());

//# sourceMappingURL=detalle-baja-consulta.js.map

/***/ }),

/***/ "../../../../../src/app/facturacion-electronica/resumen-bajas/models/tipo_documento.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TipoDocumento; });
var TipoDocumento = (function () {
    function TipoDocumento(id, nombre) {
        this.id = id;
        this.nombre = nombre;
    }
    return TipoDocumento;
}());

//# sourceMappingURL=tipo_documento.js.map

/***/ }),

/***/ "../../../../../src/app/facturacion-electronica/resumen-bajas/resumen-bajas-crear/resumen-bajas-crear.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"row col-md-12\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header card-header-text\" data-background-color=\"blue\">\r\n          <h4 class=\"card-title\">Crear Resumen de Bajas</h4>\r\n        </div>\r\n        <div class=\"card-content\">\r\n          <form [formGroup]=\"productFormGroup\" (ngSubmit)=\"onSubmit()\">\r\n            <div class=\"row\">\r\n              <div class=\"col-md-3\">\r\n                <div class=\"form-group label-floating\">\r\n                  <label class=\"control-label\">Tipo de Comprobante <span class=\"star\">*</span> </label>\r\n                    <select name=\"cmbtipodoc\" formControlName=\"cmbtipodoc\" class=\"form-control\">\r\n                     <option  *ngFor=\"let tipoDocumento of tipoDocumento\"[value]=\"tipoDocumento.id\"> {{tipoDocumento.nombre}} </option>\r\n                    </select>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-md-3\">\r\n                <div class=\"form-group label-floating\">\r\n                  <label class=\"control-label\">Serie</label>\r\n                  <select name=\"cmbserie\" formControlName=\"cmbserie\" class=\"form-control\">\r\n                    <option *ngFor=\"let serie of serie\"[value]=\"serie.id\"> {{serie.serie}} </option>\r\n                  </select>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-md-3\">\r\n                <div class=\"form-group label-floating\">\r\n                  <label class=\"control-label\">Correlativo Inicial </label>\r\n                  <input  correlativoDirective id=\"correlativoinicio\"\r\n                          formControlName=\"correlativoinicio\" type=\"text\" class=\"form-control\">\r\n                </div>\r\n              </div>\r\n              <div class=\"col-md-3\">\r\n                <div class=\"form-group label-floating\">\r\n                  <label class=\"control-label\">Correlativo Final </label>\r\n                  <input  correlativoDirective id=\"correlativofinal\"\r\n                          formControlName=\"correlativofinal\" type=\"text\" class=\"form-control\">\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"row\">\r\n              <div class=\"col-md-3\">\r\n                <div class=\"form-group label-floating\">\r\n                  <label class=\"control-label\">Fecha de Emisión Del </label>\r\n                  <input id=\"fechaemisioninicio\" formControlName=\"fechaemisioninicio\" type=\"text\" class=\"form-control\"  name=\"fechaemisiondel\" datepicker />\r\n                </div>\r\n              </div>\r\n              <div class=\"col-md-3\">\r\n                <div class=\"form-group label-floating\">\r\n                  <label class=\"control-label\">al </label>\r\n                 <input  id=\"fechaemisionfin\" formControlName=\"fechaemisionfin\" type=\"text\" class=\"form-control\"  name=\"fechaemisional\" datepicker />\r\n                </div>\r\n              </div>\r\n              <div class=\"col-md-1\" align=\"right\">\r\n                <p>&nbsp;</p>\r\n              </div>\r\n              <div class=\"col-md-5\" align=\"right\">\r\n                <button type=\"submit\" class=\"btn btn-default\" [disabled]=\"!productFormGroup.valid\" >Filtro</button>\r\n                <button type=\"button\" class=\"btn btn-default\"  (click)=\"limpiar()\">Limpiar</button>\r\n              </div>\r\n            </div>\r\n          </form>\r\n\r\n          <div class=\"card\">\r\n            <div class=\"card-header card-header-icon\" data-background-color=\"blue\">\r\n              <i class=\"material-icons\">list</i>\r\n            </div>\r\n\r\n            <div class=\"row\"><h3>Comprobantes</h3></div>\r\n            <div class=\"row\"><p>&nbsp;</p></div>\r\n            <nav class=\"navbar navbar-info\" role=\"navigation\"></nav>\r\n\r\n\r\n            <div class=\"row \">\r\n              <div class=\"col col-md-12\">\r\n                <app-data-table\r\n                  (iniciarData)=\"iniciarData($event)\"\r\n                  (eliminar)=\"eliminar($event)\"\r\n                  #tablaNormal\r\n                  [idTabla]=\"'tablaNormal'\"\r\n                  [habilitarAgregar]=\"false\"\r\n                  [cabecera]=\"cabeceraNormal\"\r\n                  [atributos]=\"atributosNormal\"\r\n                  [acciones]=\"AccionesPrueba\"\r\n                  [tipoAccion]=\"tipo\"\r\n                  [habilitarAcciones]=\"false\"\r\n                  [habilitarCheckBox]=\"true\">\r\n                </app-data-table>\r\n              </div>\r\n            </div>\r\n\r\n          </div>\r\n          <div class=\"row\"> <p> &nbsp;</p></div>\r\n          <div class=\"row\">\r\n            <div class=\"col-md-12\">\r\n              <form  [formGroup]=\"productFormGroup\">\r\n              <div class=\"label-floating\">\r\n                <label class=\"control-label\">Motivo <span class=\"star\">*</span> </label>\r\n                <input id=\"motivo\" formControlName=\"motivo\" class=\"form-control\" type=\"text\">\r\n              </div>\r\n              </form>\r\n            </div>\r\n          </div>\r\n          <div class=\"row\"> <p> &nbsp;</p></div>\r\n          <div class=\"row\">\r\n            <div class=\"col-md-12\" align=\"right\">\r\n              <button class=\"btn btn-info\" (click)=\"filtro()\">\r\n                Crear Comunicación de Baja\r\n              </button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/facturacion-electronica/resumen-bajas/resumen-bajas-crear/resumen-bajas-crear.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResumenBajasCrearComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_resumen_bajas_service__ = __webpack_require__("../../../../../src/app/facturacion-electronica/resumen-bajas/services/resumen-bajas.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_tipo_documento__ = __webpack_require__("../../../../../src/app/facturacion-electronica/resumen-bajas/models/tipo_documento.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_bajas_filtro__ = __webpack_require__("../../../../../src/app/facturacion-electronica/resumen-bajas/models/bajas_filtro.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__general_utils_tipos_service__ = __webpack_require__("../../../../../src/app/facturacion-electronica/general/utils/tipos.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__general_data_table_data_table_component__ = __webpack_require__("../../../../../src/app/facturacion-electronica/general/data-table/data-table.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__general_data_table_utils_modo_vista_accion__ = __webpack_require__("../../../../../src/app/facturacion-electronica/general/data-table/utils/modo-vista-accion.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__general_data_table_utils_accion__ = __webpack_require__("../../../../../src/app/facturacion-electronica/general/data-table/utils/accion.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__general_data_table_utils_tipo_accion__ = __webpack_require__("../../../../../src/app/facturacion-electronica/general/data-table/utils/tipo-accion.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__models_detalle_baja_consulta__ = __webpack_require__("../../../../../src/app/facturacion-electronica/resumen-bajas/models/detalle-baja-consulta.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__general_services_comprobantes_comprobantes_service__ = __webpack_require__("../../../../../src/app/facturacion-electronica/general/services/comprobantes/comprobantes.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var ResumenBajasCrearComponent = (function () {
    function ResumenBajasCrearComponent(anulacionService, route, router, _tipos, _comprobantes) {
        this.anulacionService = anulacionService;
        this.route = route;
        this.router = router;
        this._tipos = _tipos;
        this._comprobantes = _comprobantes;
        this.detallebaja = new __WEBPACK_IMPORTED_MODULE_11__models_detalle_baja_consulta__["a" /* DetalleBajaConsulta */]();
        this.detalleBajalist = [];
        this.cabeceraNormal = [];
        this.atributosNormal = [];
        this.listaBajas = [];
        this.tipo = __WEBPACK_IMPORTED_MODULE_8__general_data_table_utils_modo_vista_accion__["a" /* ModoVistaAccion */].ICONOS;
        this.AccionesPrueba = [
            new __WEBPACK_IMPORTED_MODULE_9__general_data_table_utils_accion__["a" /* Accion */]('editar', new __WEBPACK_IMPORTED_MODULE_9__general_data_table_utils_accion__["c" /* Icono */]('edit', 'btn-success'), __WEBPACK_IMPORTED_MODULE_10__general_data_table_utils_tipo_accion__["a" /* TipoAccion */].EDITAR),
            new __WEBPACK_IMPORTED_MODULE_9__general_data_table_utils_accion__["a" /* Accion */]('eliminar', new __WEBPACK_IMPORTED_MODULE_9__general_data_table_utils_accion__["c" /* Icono */]('delete', 'btn-danger'), __WEBPACK_IMPORTED_MODULE_10__general_data_table_utils_tipo_accion__["a" /* TipoAccion */].ELIMINAR),
        ];
        this.filtroBajas = new __WEBPACK_IMPORTED_MODULE_5__models_bajas_filtro__["a" /* Bajasfiltro */]();
        this.cabeceraNormal = ['Serie', 'Correlativo', 'Fecha de Emisión', 'Total Importe'];
        this.atributosNormal = ['serie', 'correlativo', 'fechaEmision', 'totalImporte'];
    }
    ResumenBajasCrearComponent.prototype.showSwal = function () {
        swal({
            title: '¿Está Seguro?',
            html: '<div class="text-center"> Desea dar de baja a el/los comprobante(s) </div>',
            padding: '20',
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: 'SÍ',
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
        this.route.params
            .subscribe(function (params) {
            _this.tipoDocumento = [
                new __WEBPACK_IMPORTED_MODULE_4__models_tipo_documento__["a" /* TipoDocumento */](_this._tipos.TIPO_DOCUMENTO_RETENCION, 'Retencion')
            ];
            _this.initForm();
        });
    };
    ResumenBajasCrearComponent.prototype.ngOnDestroy = function () {
    };
    ResumenBajasCrearComponent.prototype.initForm = function () {
        var fecha = new Date();
        var fechaActual = fecha.getDate().toString() + '/' + (fecha.getMonth() + 1).toString() + '/' + fecha.getFullYear().toString();
        this.productFormGroup = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormGroup */]({
            'cmbtipodoc': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required),
            'cmbserie': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](),
            'correlativoinicio': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', [
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].pattern('[0-9]+'),
            ]),
            'correlativofinal': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](''),
            'fechaemisioninicio': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](fechaActual, [
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required
            ]),
            'fechaemisionfin': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](fechaActual, [
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required
            ]),
            'motivo': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](''),
        });
    };
    ResumenBajasCrearComponent.prototype.onSubmit = function () {
        if (this.productFormGroup.get('cmbtipodoc').value == 7 || this.productFormGroup.get('cmbtipodoc').value == 6) {
            this.esguia = 1;
        }
        else {
            this.esguia = 0;
        }
    };
    ResumenBajasCrearComponent.prototype.filtro = function () {
        console.log(this._comprobantes.filtroxdefecto('06', '01/01/2017', '30/12/2017', '0', '5', 'inIdcomprobantepago'));
    };
    ResumenBajasCrearComponent.prototype.comunicacionbaja = function () {
        for (var i = 0; i <= this.tablaNormal.getItemsSeleccionados().length; i++) {
            this.detallebaja.correlativo = Number(this.tablaNormal.getItemsSeleccionados()[i].correlativo);
            this.detallebaja.serie = this.tablaNormal.getItemsSeleccionados()[i].serie;
            this.detallebaja.idComprobante = this.comunicacionBaja.idTipoComprobante;
            this.detallebaja.motivo = this.productFormGroup.get('motivo').value;
            this.detalleBajalist.push(this.detallebaja);
        }
        this.fillProducto();
        console.log(this.detalleBajalist);
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
    ResumenBajasCrearComponent.prototype.iniciarData = function (event) {
        this.tablaNormal.insertarData(this.listaBajas);
    };
    ResumenBajasCrearComponent.prototype.eliminar = function () { };
    ResumenBajasCrearComponent.prototype.fillProducto = function () {
        this.comunicacionBaja.idTipoComprobante = this.productFormGroup.get('cmbtipodoc').value;
        this.comunicacionBaja.numeroComprobante = '';
        this.comunicacionBaja.fechaBaja = Date.prototype;
        this.comunicacionBaja.detalleBaja = this.detalleBajalist;
    };
    return ResumenBajasCrearComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('tablaNormal'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_7__general_data_table_data_table_component__["a" /* DataTableComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__general_data_table_data_table_component__["a" /* DataTableComponent */]) === "function" && _a || Object)
], ResumenBajasCrearComponent.prototype, "tablaNormal", void 0);
ResumenBajasCrearComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-resumen-bajas-crear',
        template: __webpack_require__("../../../../../src/app/facturacion-electronica/resumen-bajas/resumen-bajas-crear/resumen-bajas-crear.component.html"),
        styles: [__webpack_require__("../../../../../src/app/facturacion-electronica/resumen-bajas/resumen-bajas-crear/resumen-bajas-crear.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_resumen_bajas_service__["a" /* ResumenBajasService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_resumen_bajas_service__["a" /* ResumenBajasService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_6__general_utils_tipos_service__["a" /* TiposService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__general_utils_tipos_service__["a" /* TiposService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_12__general_services_comprobantes_comprobantes_service__["a" /* ComprobantesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_12__general_services_comprobantes_comprobantes_service__["a" /* ComprobantesService */]) === "function" && _f || Object])
], ResumenBajasCrearComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=resumen-bajas-crear.component.js.map

/***/ }),

/***/ "../../../../../src/app/facturacion-electronica/resumen-bajas/resumen-bajas-crear/resumen-bajas-crear.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "input.ng-invalid.ng-touched,\r\nmat-select.ng-invalid.ng-touched{\r\n  border-bottom: 1px solid red;\r\n}\r\nmat-select{\r\n  border-bottom: 1px solid #AAAAAA;\r\n}\r\ndiv.row{\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n}\r\n.navbar.navbar-info {\r\n  margin: 0 15px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/facturacion-electronica/resumen-bajas/resumen-bajas-listar/resumen-bajas-listar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"row col-md-12\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header card-header-text\" data-background-color=\"blue\">\r\n          <h4 class=\"card-title\">Consultar Resumen de Bajas</h4>\r\n        </div>\r\n        <div class=\"card-content\">\r\n          <form [formGroup]=\"productFormGroup\" (ngSubmit)=\"onSubmit()\">\r\n            <div class=\"row\">\r\n              <div class=\"col-md-4\">\r\n                <div class=\"form-group label-floating\">\r\n                  <label class=\"control-label\">Tipo de Comprobante <span class=\"star\">*</span></label>\r\n                  <select name=\"cmbtipodoc\" formControlName=\"cmbtipodoc\" class=\"form-control\">\r\n                    <option  *ngFor=\"let tipoComprobante of tipoComprobante\"[value]=\"tipoComprobante.id\"> {{tipoComprobante.nombre}} </option>\r\n                  </select>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-md-4\">\r\n                <div class=\"form-group label-floating\">\r\n                  <label class=\"control-label\">Estado</label>\r\n                  <select name=\"cmbserie\" formControlName=\"cmbserie\" class=\"form-control\">\r\n                    <option *ngFor=\"let serie of serie\"[value]=\"serie.id\"> {{serie.serie}} </option>\r\n                  </select>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-md-4\" align=\"right\">\r\n                <div class=\"form-group label-floating\">\r\n                  <label class=\"control-label\">Ticket </label>\r\n                  <input ticketDirective id=\"ticket\" formControlName=\"ticket\" type=\"text\" class=\"form-control\">\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"row\">\r\n              <div class=\"col-md-4\">\r\n                <div class=\"form-group label-floating\">\r\n                  <label class=\"control-label\">Fecha Emision Del </label>\r\n                  <input type=\"text\" formControlName=\"fechaemisioninicio\" class=\"form-control\"  name=\"fechaemisiondel\" datepicker />\r\n                </div>\r\n              </div>\r\n              <div class=\"col-md-4\">\r\n                <div class=\"form-group label-floating\">\r\n                  <label class=\"control-label\">Al</label>\r\n                  <input type=\"text\" formControlName=\"fechaemisionfin\" class=\"form-control\"  name=\"fechaemisional\" datepicker />\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"row\">\r\n              <div class=\"col-md-4\" align=\"right\">\r\n                <div class=\"form-group label-floating\">\r\n                  <label class=\"control-label\">Fecha Baja Del </label>\r\n                  <input type=\"text\" formControlName=\"fechabajaini\" class=\"form-control\"  name=\"fechaemisional\" datepicker />\r\n                </div>\r\n              </div>\r\n              <div class=\"col-md-4\" align=\"right\">\r\n                <div class=\"form-group label-floating\">\r\n                  <label class=\"control-label\">Al</label>\r\n                  <input type=\"text\" formControlName=\"fechabajafin\" class=\"form-control\"  name=\"fechaemisional\" datepicker />\r\n                </div>\r\n              </div>\r\n\r\n              <!--<div class=\"col-md-offset-9\" align=\"right\">\r\n                <button type=\"submit\" class=\"btn btn-info\" >Filtro</button>\r\n                <button type=\"submit\" class=\"btn btn-info\"  (click)=\"limpiar($event)\"  >Limpiar</button>\r\n              </div>-->\r\n            </div>\r\n          </form>\r\n          <div class=\"row\"><p>&nbsp;</p></div>\r\n          <div class=\"card\">\r\n            <div class=\"card-header card-header-icon\" data-background-color=\"blue\">\r\n              <i class=\"material-icons\">list</i>\r\n            </div>\r\n\r\n            <div class=\"row\"><h3>Resumen de Bajas</h3></div>\r\n            <div class=\"row\"><p>&nbsp;</p></div>\r\n            <nav class=\"navbar navbar-info\" role=\"navigation\"></nav>\r\n\r\n\r\n            <div class=\"row \">\r\n              <div class=\"col col-md-12\">\r\n                <div class=\"material-datatables table-responsive\">\r\n                  <table id=\"dtresumencomprobantes\" class=\"table table-striped table-no-bordered table-hover\" cellspacing=\"0\"\r\n                         width=\"100%\" style=\"width:100%\">\r\n                    <thead>\r\n                    <tr>\r\n                      <th>Nº</th>\r\n                      <th>Fecha de Baja</th>\r\n                      <th>Fecha del Documento</th>\r\n                      <th>Documento</th>\r\n                      <th>Motivo</th>\r\n                      <th>Ticket</th>\r\n                      <th>PDF</th>\r\n                      <th>XML</th>\r\n                      <th>CDR</th>\r\n                      <th>Estado</th>\r\n                    </tr>\r\n                    </thead>\r\n                  </table>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__general_models_tipoComprobante__ = __webpack_require__("../../../../../src/app/facturacion-electronica/general/models/tipoComprobante.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__general_utils_tipos_service__ = __webpack_require__("../../../../../src/app/facturacion-electronica/general/utils/tipos.service.ts");
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
    function ResumenBajasListarComponent(anulacionService, route, router, _tipos) {
        this.anulacionService = anulacionService;
        this.route = route;
        this.router = router;
        this._tipos = _tipos;
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
            /*this.subscriptionTipoDocumentos = this.anulacionService.tipoDocumentoChanged
              .subscribe(
                (tipos: TipoDocumento[]) => {
                  this.tipoDocumento = tipos;
                }
              );*/
            _this.tipoComprobante = [
                new __WEBPACK_IMPORTED_MODULE_5__general_models_tipoComprobante__["a" /* TipoComprobante */](_this._tipos.TIPO_DOCUMENTO_RETENCION, 'Retencion')
            ];
            _this.subscriptionSeries = _this.anulacionService.serieChanged
                .subscribe(function (tipos) {
                _this.serie = tipos;
            });
            _this.initForm();
        });
    };
    ResumenBajasListarComponent.prototype.ngOnDestroy = function () {
        // this.subscriptionTipoDocumentos.unsubscribe();
        this.subscriptionSeries.unsubscribe();
    };
    ResumenBajasListarComponent.prototype.initForm = function () {
        var fecha = new Date();
        var fechaActual = fecha.getDate().toString() + '/' + (fecha.getMonth() + 1).toString() + '/' + fecha.getFullYear().toString();
        this.productFormGroup = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormGroup */]({
            'cmbtipodoc': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required),
            'cmbserie': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](),
            'correlativoinicio': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](),
            'correlativofinal': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](),
            'fechaemisioninicio': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](fechaActual, [
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].pattern('[0-9]{2}[/][0-9]{2}[/][0-9]{4}'),
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].maxLength(10),
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].minLength(10)
            ]),
            'fechaemisionfin': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](fechaActual, [
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].pattern('[0-9]{2}[/][0-9]{2}[/][0-9]{4}'),
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].maxLength(10),
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].minLength(10)
            ]),
            'fechabajaini': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', [
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].pattern('[0-9]{2}[/][0-9]{2}[/][0-9]{4}'),
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].maxLength(10),
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].minLength(10)
            ]),
            'fechabajafin': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', [
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].pattern('[0-9]{2}[/][0-9]{2}[/][0-9]{4}'),
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].maxLength(10),
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].minLength(10)
            ]),
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
        this.filtroBajas.tipodocumento = this.tipoComprobante[this.tipoComprobante.findIndex(function (element) { return element.id === _this.productFormGroup.get('cmbtipodoc').value; })];
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
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_resumen_bajas_service__["a" /* ResumenBajasService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_resumen_bajas_service__["a" /* ResumenBajasService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_6__general_utils_tipos_service__["a" /* TiposService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__general_utils_tipos_service__["a" /* TiposService */]) === "function" && _d || Object])
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
var _a, _b, _c, _d;
//# sourceMappingURL=resumen-bajas-listar.component.js.map

/***/ }),

/***/ "../../../../../src/app/facturacion-electronica/resumen-bajas/resumen-bajas-listar/resumen-bajas-listar.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".form-group{\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n}\r\n.btn-small{\r\n  width: 1rem;\r\n}\r\n.highlight{\r\n  background: #00bcd4;\r\n  color: white;\r\n}\r\n.mat-header-cell,.mat-cell{\r\n  margin: 0 0.6rem;\r\n}\r\n\r\n.mat-table {\r\n  overflow: auto;\r\n  max-height: 500px;\r\n}\r\n.material-icons.color {\r\n  color: #58a4fb;\r\n}\r\n.navbar.navbar-info {\r\n  margin: 0 15px;\r\n}\r\n", ""]);

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__general_utils_tipos_service__ = __webpack_require__("../../../../../src/app/facturacion-electronica/general/utils/tipos.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__general_data_table_data_table_module__ = __webpack_require__("../../../../../src/app/facturacion-electronica/general/data-table/data-table.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__general_directivas_directivas_module__ = __webpack_require__("../../../../../src/app/facturacion-electronica/general/directivas/directivas.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__general_services_comprobantes_comprobantes_service__ = __webpack_require__("../../../../../src/app/facturacion-electronica/general/services/comprobantes/comprobantes.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__general_services_servidores__ = __webpack_require__("../../../../../src/app/facturacion-electronica/general/services/servidores.ts");
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
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["c" /* HttpClientModule */],
            __WEBPACK_IMPORTED_MODULE_10__directives_datepicker_module__["a" /* A2Edatetimepicker */],
            __WEBPACK_IMPORTED_MODULE_12__general_data_table_data_table_module__["a" /* DataTableModule */],
            __WEBPACK_IMPORTED_MODULE_13__general_directivas_directivas_module__["a" /* DirectivasModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__resumen_bajas_component__["a" /* ResumenBajasComponent */],
            __WEBPACK_IMPORTED_MODULE_6__resumen_bajas_crear_resumen_bajas_crear_component__["a" /* ResumenBajasCrearComponent */],
            __WEBPACK_IMPORTED_MODULE_7__resumen_bajas_listar_resumen_bajas_listar_component__["a" /* ResumenBajasListarComponent */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_9__services_resumen_bajas_service__["a" /* ResumenBajasService */],
            __WEBPACK_IMPORTED_MODULE_11__general_utils_tipos_service__["a" /* TiposService */],
            __WEBPACK_IMPORTED_MODULE_14__general_services_comprobantes_comprobantes_service__["a" /* ComprobantesService */],
            __WEBPACK_IMPORTED_MODULE_15__general_services_servidores__["a" /* Servidores */]
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
        //  const fer = new HttpHeaders().set('Ocp-Apim-Subscription-Key', '07a12d074c714f62ab037bb2f88e30d3' );
        this.httpClient.put(this.urlAnulacion, this.anulaciones, {
            observe: 'body',
            responseType: 'json',
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
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]) === "function" && _a || Object])
], ResumenBajasService);

var _a;
//# sourceMappingURL=resumen-bajas.service.js.map

/***/ })

});
//# sourceMappingURL=resumen-bajas.module.chunk.js.map