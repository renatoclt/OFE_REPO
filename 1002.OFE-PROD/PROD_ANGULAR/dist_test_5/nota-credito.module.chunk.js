webpackJsonp(["nota-credito.module"],{

/***/ "../../../../../src/app/facturacion-electronica/comprobantes/nota-credito/nota-credito.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/facturacion-electronica/comprobantes/nota-credito/nota-credito.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\r\n  <form method=\"#\" action=\"#\">\r\n    <div class=\"card-header card-header-text\" data-background-color=\"blue\">\r\n      <h4 class=\"card-title\">{{titulo | translate}}</h4>\r\n    </div>\r\n    <div class=\"card-content\">\r\n      <div class=\"row\">\r\n\r\n      </div>\r\n    </div>\r\n  </form>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/facturacion-electronica/comprobantes/nota-credito/nota-credito.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotaCreditoComponent; });
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

var NotaCreditoComponent = (function () {
    function NotaCreditoComponent() {
        this.titulo = 'notaCredito';
    }
    NotaCreditoComponent.prototype.ngOnInit = function () {
    };
    return NotaCreditoComponent;
}());
NotaCreditoComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-nota-credito',
        template: __webpack_require__("../../../../../src/app/facturacion-electronica/comprobantes/nota-credito/nota-credito.component.html"),
        styles: [__webpack_require__("../../../../../src/app/facturacion-electronica/comprobantes/nota-credito/nota-credito.component.css")]
    }),
    __metadata("design:paramtypes", [])
], NotaCreditoComponent);

//# sourceMappingURL=nota-credito.component.js.map

/***/ }),

/***/ "../../../../../src/app/facturacion-electronica/comprobantes/nota-credito/nota-credito.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotaCreditoModule", function() { return NotaCreditoModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__nota_credito_routing_module__ = __webpack_require__("../../../../../src/app/facturacion-electronica/comprobantes/nota-credito/nota-credito.routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__nota_credito_component__ = __webpack_require__("../../../../../src/app/facturacion-electronica/comprobantes/nota-credito/nota-credito.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__ = __webpack_require__("../../../../@ngx-translate/core/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var NotaCreditoModule = (function () {
    function NotaCreditoModule() {
    }
    return NotaCreditoModule;
}());
NotaCreditoModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_2__nota_credito_routing_module__["a" /* NotaCreditoRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["b" /* TranslateModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__nota_credito_component__["a" /* NotaCreditoComponent */]
        ]
    })
], NotaCreditoModule);

//# sourceMappingURL=nota-credito.module.js.map

/***/ }),

/***/ "../../../../../src/app/facturacion-electronica/comprobantes/nota-credito/nota-credito.routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotaCreditoRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__nota_credito_component__ = __webpack_require__("../../../../../src/app/facturacion-electronica/comprobantes/nota-credito/nota-credito.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__nota_credito_component__["a" /* NotaCreditoComponent */],
        children: [
            {
                path: 'crear',
                component: __WEBPACK_IMPORTED_MODULE_2__nota_credito_component__["a" /* NotaCreditoComponent */],
                data: {
                    codigo: '07',
                    mostrarCombo: true
                }
            }
        ]
    }
];
var NotaCreditoRoutingModule = (function () {
    function NotaCreditoRoutingModule() {
    }
    return NotaCreditoRoutingModule;
}());
NotaCreditoRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes)
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]
        ]
    })
], NotaCreditoRoutingModule);

//# sourceMappingURL=nota-credito.routing.module.js.map

/***/ })

});
//# sourceMappingURL=nota-credito.module.chunk.js.map