webpackJsonp([16],{"./src/app/facturacion-electronica/sincronizacion/sincronizacion.component.html":function(n,o){n.exports='<div class="main-content">\r\n    <div class="container-fluid">\r\n        <div class="row">\r\n            <div class="col-lg-12">\r\n                <div class="card">\r\n                    <div class="card-header card-header-text" data-background-color="blue">\r\n                        <h4 class="card-title">{{\'sincronizacion\' | translate}}</h4>\r\n                    </div>\r\n                    <div class="card-content">\r\n                        <div class="col-lg-12">\r\n                            <div class="card">\r\n                                <div class="card-content">\r\n                                    <table class="table">\r\n                                        <thead>\r\n                                            <tr>\r\n                                                <th scope="col">{{\'documento\' | translate}}</th>\r\n                                                <th scope="col">{{\'ultimaFechaSincronizacion\' | translate}}</th>\r\n                                                <th scope="col">{{\'accion\' | translate}}</th>\r\n                                            </tr>\r\n                                        </thead>\r\n                                        <tbody>\r\n                                            <tr *ngFor="let item of listSincronizacion">\r\n                                                <th scope="col">{{item.descripcion}}</th>\r\n                                                <th scope="col">{{item.fecha}}</th>\r\n                                                <th scope="col">\r\n                                                    <button type="button" (click)="verBitacora()">\r\n                                                        <i class="material-icons">book</i>\r\n                                                    </button>\r\n                                                    <button type="button" (click)="verBitacora()">\r\n                                                        <i class="material-icons">autorenew</i>\r\n                                                    </button>\r\n                                                </th>\r\n                                            </tr>\r\n                                        </tbody>\r\n                                    </table>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>'},"./src/app/facturacion-electronica/sincronizacion/sincronizacion.component.ts":function(n,o,t){"use strict";var c=t("./node_modules/@angular/core/@angular/core.es5.js"),e=t("./node_modules/@angular/router/@angular/router.es5.js"),r=t("./src/app/facturacion-electronica/general/services/sincronizacion/sincronizacion.service.ts"),i=t("./src/app/facturacion-electronica/general/data-table/data-table.component.ts"),a=t("./src/app/facturacion-electronica/general/models/configuracionDocumento/idioma.ts");t.d(o,"a",function(){return u});var s=this&&this.__decorate||function(n,o,t,c){var e,r=arguments.length,i=r<3?o:null===c?c=Object.getOwnPropertyDescriptor(o,t):c;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(n,o,t,c);else for(var a=n.length-1;a>=0;a--)(e=n[a])&&(i=(r<3?e(i):r>3?e(o,t,i):e(o,t))||i);return r>3&&i&&Object.defineProperty(o,t,i),i},l=this&&this.__metadata||function(n,o){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(n,o)},u=function(){function n(n,o){this.router=n,this.sincronizacionService=o,this.listSincronizacion=[],this.cabecera=[],this.atributos=[],this.cabecera=["Documento","Ultima Fecha Sincronizacion","Acciones"],this.atributos=["TipoComprobante","FechaSincronizacion","Acciones"]}return n.prototype.ngOnInit=function(){this.obtenerSincronizaciones()},n.prototype.verBitacora=function(){this.router.navigateByUrl("sincronizacion/bitacora")},n.prototype.obtenerSincronizaciones=function(){var n=this,o=a.a.idIdioma;this.sincronizacionService.buscarPorIdioma(o).subscribe(function(o){n.listSincronizacion=o})},n.prototype.sincronizar=function(){},n}();s([t.i(c.ViewChild)("tablaNormal"),l("design:type","function"==typeof(d=void 0!==i.a&&i.a)&&d||Object)],u.prototype,"tabla",void 0),u=s([t.i(c.Component)({selector:"app-sincronizacion",template:t("./src/app/facturacion-electronica/sincronizacion/sincronizacion.component.html"),styleUrls:[]}),l("design:paramtypes",["function"==typeof(p=void 0!==e.b&&e.b)&&p||Object,"function"==typeof(f=void 0!==r.a&&r.a)&&f||Object])],u);var d,p,f},"./src/app/facturacion-electronica/sincronizacion/sincronizacion.module.ts":function(n,o,t){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var c=t("./node_modules/@angular/core/@angular/core.es5.js"),e=t("./node_modules/@angular/common/@angular/common.es5.js"),r=t("./node_modules/@ngx-translate/core/index.js"),i=t("./src/app/facturacion-electronica/general/services/sincronizacion/sincronizacion.service.ts"),a=t("./src/app/facturacion-electronica/sincronizacion/sincronizacion.component.ts"),s=t("./src/app/facturacion-electronica/sincronizacion/sincronizacion.routing.module.ts");t.d(o,"SincronizacionModule",function(){return u});var l=this&&this.__decorate||function(n,o,t,c){var e,r=arguments.length,i=r<3?o:null===c?c=Object.getOwnPropertyDescriptor(o,t):c;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(n,o,t,c);else for(var a=n.length-1;a>=0;a--)(e=n[a])&&(i=(r<3?e(i):r>3?e(o,t,i):e(o,t))||i);return r>3&&i&&Object.defineProperty(o,t,i),i},u=function(){function n(){}return n}();u=l([t.i(c.NgModule)({imports:[e.CommonModule,r.a,s.a],declarations:[a.a],providers:[i.a]})],u)},"./src/app/facturacion-electronica/sincronizacion/sincronizacion.routing.module.ts":function(n,o,t){"use strict";var c=t("./node_modules/@angular/core/@angular/core.es5.js"),e=t("./node_modules/@angular/router/@angular/router.es5.js"),r=t("./src/app/facturacion-electronica/sincronizacion/sincronizacion.component.ts");t.d(o,"a",function(){return s});var i=this&&this.__decorate||function(n,o,t,c){var e,r=arguments.length,i=r<3?o:null===c?c=Object.getOwnPropertyDescriptor(o,t):c;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(n,o,t,c);else for(var a=n.length-1;a>=0;a--)(e=n[a])&&(i=(r<3?e(i):r>3?e(o,t,i):e(o,t))||i);return r>3&&i&&Object.defineProperty(o,t,i),i},a=[{path:"",children:[{path:"",pathMatch:"full",redirectTo:"sincronizar"},{path:"sincronizar",component:r.a}]}],s=function(){function n(){}return n}();s=i([t.i(c.NgModule)({imports:[e.a.forChild(a)],exports:[e.a]})],s)}});