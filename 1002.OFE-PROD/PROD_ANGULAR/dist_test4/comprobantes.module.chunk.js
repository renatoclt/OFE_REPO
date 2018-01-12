webpackJsonp(["comprobantes.module"],{

/***/ "../../../../../src/app/facturacion-electronica/comprobantes/comprobante/comprobante.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"row col-md-12\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header card-header-text\" data-background-text=\"blue\">\r\n                    <h4 class=\"card-title\">Comprobante</h4>\r\n                </div>\r\n                <div class=\"card-content\">\r\n                    <a class=\"btn\" (click)=\"irDocumentoRelacionado()\">Documento Relacionado</a>\r\n                    <br>\r\n                    <a class=\"btn\" (click)=\"irVistaPrevia()\">Vista Previa</a>\r\n                    <br>\r\n                    <a class=\"btn\" (click)=\"irAgregarServicio()\">Crear Servicio</a>\r\n                    <br>\r\n                    <a class=\"btn\" (click)=\"irEditarServicio()\">Editar Servicio</a>\r\n                    <br>\r\n                    <a class=\"btn\" (click)=\"irAgregarBien()\">Crear Bien</a>\r\n                    <br>\r\n                    <a class=\"btn\" (click)=\"irEditarBien()\">Editar Bien</a>\r\n                    <button class=\"btn\" (click)=\"verProductos()\">VER PRODUCTOS</button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/facturacion-electronica/comprobantes/comprobante/comprobante.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComprobanteComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__general_productos_comprobante_service__ = __webpack_require__("../../../../../src/app/facturacion-electronica/comprobantes/general/productos-comprobante.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_producto__ = __webpack_require__("../../../../../src/app/facturacion-electronica/comprobantes/models/producto.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__general_utils_rutas_service__ = __webpack_require__("../../../../../src/app/facturacion-electronica/general/utils/rutas.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ComprobanteComponent = (function () {
    function ComprobanteComponent(_itemsFactura, _router, _rutas) {
        this._itemsFactura = _itemsFactura;
        this._router = _router;
        this._rutas = _rutas;
        this.cargarDataPrueba();
        // console.log( this.productitoMuestraEditar );
    }
    ComprobanteComponent.prototype.verProductos = function () {
        console.log(this._itemsFactura.getItems());
    };
    ComprobanteComponent.prototype.cargarDataPrueba = function () {
        this.productitoMuestraEditar = new __WEBPACK_IMPORTED_MODULE_2__models_producto__["a" /* Producto */]();
        this.productitoMuestraEditar.cmbCalculoIsc = 1;
        this.productitoMuestraEditar.cmbDescripcionIgv = 1;
        this.productitoMuestraEditar.cmbIgv = 10;
        this.productitoMuestraEditar.cmbTipoPrecioVenta = 1;
        this.productitoMuestraEditar.cmbUnidadMedida = 1;
        this.productitoMuestraEditar.tipoProducto = 1;
        this.productitoMuestraEditar.txtCantidad = '20.00';
        this.productitoMuestraEditar.txtCodigo = '10-00';
        this.productitoMuestraEditar.txtDescripcion = 'Productito el mejor';
        this.productitoMuestraEditar.txtDescuento = '2.00';
        this.productitoMuestraEditar.txtIsc = '0.00';
        this.productitoMuestraEditar.txtValorUnitario = '0.00';
        this.productitoMuestraEditar.txtValorVenta = '50.00';
        console.log('PRODUCTO ');
        console.log(this.productitoMuestraEditar);
    };
    ComprobanteComponent.prototype.irDocumentoRelacionado = function () {
        this._router.navigateByUrl(this._rutas.URL_COMPROBANTE_FACTURA_DOCUMENTO_RELACIONADO);
    };
    ComprobanteComponent.prototype.irAgregarServicio = function () {
        this._router.navigateByUrl(this._rutas.URL_COMPROBANTE_FACTURA_SERVICIO_AGREGAR);
    };
    ComprobanteComponent.prototype.irEditarServicio = function () {
        this._itemsFactura.setItemEditar(this.productitoMuestraEditar);
        this._router.navigateByUrl(this._rutas.URL_COMPROBANTE_FACTURA_SERVICIO_EDITAR);
    };
    ComprobanteComponent.prototype.irAgregarBien = function () {
        this._router.navigateByUrl(this._rutas.URL_COMPROBANTE_FACTURA_BIEN_AGREGAR);
    };
    ComprobanteComponent.prototype.irEditarBien = function () {
        this._itemsFactura.setItemEditar(this.productitoMuestraEditar);
        this._router.navigateByUrl(this._rutas.URL_COMPROBANTE_FACTURA_BIEN_EDITAR);
    };
    ComprobanteComponent.prototype.irVistaPrevia = function () {
        this._router.navigateByUrl(this._rutas.URL_COMPROBANTE_FACTURA_VISTA_PREVIA);
    };
    return ComprobanteComponent;
}());
ComprobanteComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'comprobante_component',
        template: __webpack_require__("../../../../../src/app/facturacion-electronica/comprobantes/comprobante/comprobante.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__general_productos_comprobante_service__["a" /* ProductosComprobanteService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__general_productos_comprobante_service__["a" /* ProductosComprobanteService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__general_utils_rutas_service__["a" /* RutasService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__general_utils_rutas_service__["a" /* RutasService */]) === "function" && _c || Object])
], ComprobanteComponent);

var _a, _b, _c;
//# sourceMappingURL=comprobante.component.js.map

/***/ }),

/***/ "../../../../../src/app/facturacion-electronica/comprobantes/comprobantes-editar/comprobantes-editar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/facturacion-electronica/comprobantes/comprobantes-editar/comprobantes-editar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-sm-3\">\r\n  <div class=\"form-group label-floating\">\r\n    <label class=\"control-label\">Moneda</label>\r\n    <select  name=\"moneda\" class=\"form-control\">\r\n      <option value=\"NONE\" >TODOS</option>\r\n    </select>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/facturacion-electronica/comprobantes/comprobantes-editar/comprobantes-editar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComprobantesEditarComponent; });
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

var ComprobantesEditarComponent = (function () {
    function ComprobantesEditarComponent() {
    }
    ComprobantesEditarComponent.prototype.ngOnInit = function () {
    };
    return ComprobantesEditarComponent;
}());
ComprobantesEditarComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-comprobantes-editar',
        template: __webpack_require__("../../../../../src/app/facturacion-electronica/comprobantes/comprobantes-editar/comprobantes-editar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/facturacion-electronica/comprobantes/comprobantes-editar/comprobantes-editar.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ComprobantesEditarComponent);

//# sourceMappingURL=comprobantes-editar.component.js.map

/***/ }),

/***/ "../../../../../src/app/facturacion-electronica/comprobantes/comprobantes.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/facturacion-electronica/comprobantes/comprobantes.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-12\">\r\n        <div class=\"card\">\r\n          <div class=\"card-header card-header-text\" data-background-color=\"blue\">\r\n            <h4 class=\"card-title\">{{titulo}}</h4>\r\n          </div>\r\n          <div class=\"card-content\">\r\n            <div class=\"row\">\r\n              <div class=\"col-sm-3\">\r\n                <select name=\"cmbTiposComprobante\" class=\"form-control\" (change)=\"cargarComprobante()\" [(ngModel)]=\"comprobanteSeleccionado\">\r\n                  <option *ngFor=\"let tipoComprobante of tiposComprobante.tiposComprobantes\" [ngValue]=\"tipoComprobante\"> {{tipoComprobante.descripcion}} </option>\r\n                </select>\r\n              </div>\r\n            </div>\r\n            <div>\r\n              <router-outlet></router-outlet>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/facturacion-electronica/comprobantes/comprobantes.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComprobantesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modelos_tipos_comprobantes__ = __webpack_require__("../../../../../src/app/facturacion-electronica/comprobantes/modelos/tipos-comprobantes.ts");
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



var ComprobantesComponent = (function () {
    function ComprobantesComponent(router, route) {
        this.router = router;
        this.route = route;
        this.titulo = 'Crear Comprobante';
        this.tiposComprobante = new __WEBPACK_IMPORTED_MODULE_1__modelos_tipos_comprobantes__["a" /* TiposComprobantes */]();
    }
    ComprobantesComponent.prototype.ngOnInit = function () {
        this.comprobanteSeleccionado = this.tiposComprobante.getFactura();
        this.navegarHacia(this.comprobanteSeleccionado);
    };
    ComprobantesComponent.prototype.cargarComprobante = function () {
        this.navegarHacia(this.comprobanteSeleccionado);
    };
    ComprobantesComponent.prototype.navegarHacia = function (tipoComprobante) {
        var ruta = tipoComprobante.ruta;
        this.router.navigate([ruta + '/crear'], { relativeTo: this.route });
    };
    return ComprobantesComponent;
}());
ComprobantesComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-comprobantes',
        template: __webpack_require__("../../../../../src/app/facturacion-electronica/comprobantes/comprobantes.component.html"),
        styles: [__webpack_require__("../../../../../src/app/facturacion-electronica/comprobantes/comprobantes.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object])
], ComprobantesComponent);

var _a, _b;
//# sourceMappingURL=comprobantes.component.js.map

/***/ }),

/***/ "../../../../../src/app/facturacion-electronica/comprobantes/comprobantes.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComprobantesModule", function() { return ComprobantesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__comprobantes_editar_comprobantes_editar_component__ = __webpack_require__("../../../../../src/app/facturacion-electronica/comprobantes/comprobantes-editar/comprobantes-editar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__comprobantes_routing_module__ = __webpack_require__("../../../../../src/app/facturacion-electronica/comprobantes/comprobantes.routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__comprobantes_component__ = __webpack_require__("../../../../../src/app/facturacion-electronica/comprobantes/comprobantes.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__comprobante_comprobante_component__ = __webpack_require__("../../../../../src/app/facturacion-electronica/comprobantes/comprobante/comprobante.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__general_utils_tipos_service__ = __webpack_require__("../../../../../src/app/facturacion-electronica/general/utils/tipos.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__general_services_general_consulta_service__ = __webpack_require__("../../../../../src/app/facturacion-electronica/general/services/general.consulta.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__general_utils_rutas_service__ = __webpack_require__("../../../../../src/app/facturacion-electronica/general/utils/rutas.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__general_productos_comprobante_service__ = __webpack_require__("../../../../../src/app/facturacion-electronica/comprobantes/general/productos-comprobante.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_comprobante_productos_service__ = __webpack_require__("../../../../../src/app/facturacion-electronica/comprobantes/services/comprobante.productos.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__directives_datepicker_module__ = __webpack_require__("../../../../../src/app/directives/datepicker.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__general_utils_constantes_service__ = __webpack_require__("../../../../../src/app/facturacion-electronica/general/utils/constantes.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var ComprobantesModule = (function () {
    function ComprobantesModule() {
    }
    return ComprobantesModule;
}());
ComprobantesModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_3__comprobantes_routing_module__["a" /* ComprobantesRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_forms__["c" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_forms__["e" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_8__angular_common_http__["b" /* HttpClientModule */],
            __WEBPACK_IMPORTED_MODULE_14__directives_datepicker_module__["a" /* A2Edatetimepicker */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__comprobantes_editar_comprobantes_editar_component__["a" /* ComprobantesEditarComponent */],
            __WEBPACK_IMPORTED_MODULE_4__comprobantes_component__["a" /* ComprobantesComponent */],
            __WEBPACK_IMPORTED_MODULE_5__comprobante_comprobante_component__["a" /* ComprobanteComponent */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_9__general_utils_tipos_service__["a" /* TiposService */],
            __WEBPACK_IMPORTED_MODULE_10__general_services_general_consulta_service__["a" /* GeneralConsultaService */],
            __WEBPACK_IMPORTED_MODULE_15__general_utils_constantes_service__["a" /* ConstantesService */],
            __WEBPACK_IMPORTED_MODULE_11__general_utils_rutas_service__["a" /* RutasService */],
            __WEBPACK_IMPORTED_MODULE_12__general_productos_comprobante_service__["a" /* ProductosComprobanteService */],
            __WEBPACK_IMPORTED_MODULE_13__services_comprobante_productos_service__["a" /* ComprobanteProductosService */]
        ]
    })
], ComprobantesModule);

//# sourceMappingURL=comprobantes.module.js.map

/***/ }),

/***/ "../../../../../src/app/facturacion-electronica/comprobantes/comprobantes.routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComprobantesRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__comprobantes_component__ = __webpack_require__("../../../../../src/app/facturacion-electronica/comprobantes/comprobantes.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__comprobantes_component__["a" /* ComprobantesComponent */],
        children: [
            {
                path: 'factura',
                loadChildren: '../comprobantes/factura/factura.module#FacturaModule'
            },
            {
                path: 'boleta',
                loadChildren: './boleta/boleta.module#BoletaModule'
            },
            {
                path: 'notaCredito',
                loadChildren: './nota-credito/nota-credito.module#NotaCreditoModule'
            },
            {
                path: 'notaDebito',
                loadChildren: './nota-debito/nota-debito.module#NotaDebitoModule'
            }
        ]
    }
];
var ComprobantesRoutingModule = (function () {
    function ComprobantesRoutingModule() {
    }
    return ComprobantesRoutingModule;
}());
ComprobantesRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes)
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]
        ]
    })
], ComprobantesRoutingModule);

//# sourceMappingURL=comprobantes.routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/facturacion-electronica/comprobantes/modelos/tipos-comprobantes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export TipoComprobante */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TiposComprobantes; });
var TipoComprobante = (function () {
    function TipoComprobante(codigo, descripcion, ruta) {
        this.codigo = codigo;
        this.descripcion = descripcion;
        this.ruta = ruta;
    }
    return TipoComprobante;
}());

var TiposComprobantes = (function () {
    function TiposComprobantes() {
        this.tiposComprobantes = [
            new TipoComprobante('01', 'Factura', 'factura'),
            new TipoComprobante('03', 'Boleta', 'boleta'),
            new TipoComprobante('07', 'Nota de Crédito', 'notaCredito'),
            new TipoComprobante('08', 'Nota de Débito', 'notaDebito')
        ];
    }
    TiposComprobantes.prototype.get = function (codigo) {
        return this.tiposComprobantes.find(function (item) { return item.codigo === codigo; });
    };
    TiposComprobantes.prototype.getFactura = function () {
        return this.get('01');
    };
    TiposComprobantes.prototype.getBoleta = function () {
        return this.get('03');
    };
    TiposComprobantes.prototype.getNotaCredito = function () {
        return this.get('07');
    };
    TiposComprobantes.prototype.getNotaDebito = function () {
        return this.get('08');
    };
    return TiposComprobantes;
}());

;
//# sourceMappingURL=tipos-comprobantes.js.map

/***/ })

});
//# sourceMappingURL=comprobantes.module.chunk.js.map