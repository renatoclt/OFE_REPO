webpackJsonp([20],{"./src/app/facturacion-electronica/general/models/sincronizacion/estadoSincronizacion.ts":function(o,a,r){"use strict";r.d(a,"a",function(){return n});var n=function(){function o(){}return o}()},"./src/app/facturacion-electronica/general/models/sincronizacion/tipoSincronizacion.ts":function(o,a,r){"use strict";r.d(a,"a",function(){return n});var n=function(){function o(){}return o}()},"./src/app/facturacion-electronica/sincronizacion/sincronizacion-bitacora/sincronizacion-bitacora.component.html":function(o,a){o.exports='<div class="main-content">\r\n    <div class="container-fluid">\r\n        <div class="row">\r\n            <div class="col-lg-12">\r\n                <div class="card">\r\n                    <div class="card-header card-header-text" data-background-color="blue">\r\n                        <h4 class="card-title">{{\'bitacora\' | translate}}</h4>\r\n                    </div>\r\n                    <div class="card-content">\r\n                        <form [formGroup]="bitacoraFormGroup">\r\n                            <div class="row">\r\n                                <div class="col-md-4">\r\n                                    <div class="form-group label-floating">\r\n                                        <label class="control-label">{{\'numeroComprobante\' | translate}}\r\n                                            <span class="star">*</span>\r\n                                        </label>\r\n                                        <input id="txtComprobante" formControlName="txtComprobante" class="form-control" type="text">\r\n                                    </div>\r\n                                </div>\r\n                                <div class="col-md-4">\r\n                                    <div class="form-group label-floating">\r\n                                        <label class="control-label">{{\'generado\' | translate}}\r\n                                            <span class="star">*</span>\r\n                                        </label>\r\n                                        <select name="cmbGenerado" formControlName="cmbGenerado" class="form-control">\r\n                                            <option *ngFor="let generado of tiposSincronizacion" [value]="generado.idTipo"> {{generado.tipo}}</option>\r\n                                        </select>\r\n                                    </div>\r\n                                </div>\r\n                                <div class="col-md-4">\r\n                                    <div class="form-group label-floating">\r\n                                        <label class="control-label">{{\'estadoDocumento\' | translate}}\r\n                                            <span class="star">*</span>\r\n                                        </label>\r\n                                        <select name="cmbEstadoDocumento" formControlName="cmbEstadoDocumento" class="form-control">\r\n                                            <option *ngFor="let estado of estadosDocumentos" [value]="estado.idEstadoComprobante"> {{estado.abreviacion}}</option>\r\n                                        </select>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class="row">\r\n                                <div class="col-md-4">\r\n                                    <div class="form-group label-floating">\r\n                                        <label class="control-label">{{\'fechaSincronizacion\' | translate}} {{\'del\' | translate}}\r\n                                            <span class="star">*</span>\r\n                                        </label>\r\n                                        <input id="datefechaInicio" formControlName="datefechaInicio" type="text" class="form-control" datepicker/>\r\n                                        <span *ngIf="!bitacoraFormGroup.get(\'datefechaInicio\').valid && bitacoraFormGroup.get(\'datefechaInicio\').touched">\r\n                                            <span *ngIf="bitacoraFormGroup.controls[\'datefechaInicio\'].hasError(\'required\')" class="text-danger">{{\'campoRequerido\' | translate}}</span>\r\n                                        </span>\r\n                                    </div>\r\n                                </div>\r\n                                <div class="col-md-4">\r\n                                    <div class="form-group label-floating">\r\n                                        <label class="control-label">{{\'a\' | translate}}\r\n                                            <span class="star">*</span>\r\n                                        </label>\r\n                                        <input id="datefechaFin" formControlName="datefechaFin" type="text" class="form-control" datepicker/>\r\n                                        <span *ngIf="!bitacoraFormGroup.get(\'datefechaFin\').valid && bitacoraFormGroup.get(\'datefechaFin\').touched">\r\n                                            <span *ngIf="bitacoraFormGroup.controls[\'datefechaFin\'].hasError(\'required\')" class="text-danger">{{\'campoRequerido\' | translate}}</span>\r\n                                        </span>\r\n                                    </div>\r\n                                </div>\r\n                                <div class="col-md-4">\r\n                                    <div class="form-group label-floating">\r\n                                        <label class="control-label">{{\'estadoSincronizacion\' | translate}}\r\n                                            <span class="star">*</span>\r\n                                        </label>\r\n                                        <select id="cmbEstadoSincronizacion" name="cmbEstadoSincronizacion" formControlName="cmbEstadoSincronizacion" class="form-control">\r\n                                            <option *ngFor="let estado of estadosSincronizacion" [(value)]="estado.idEstado"> {{estado.estado}}</option>\r\n                                        </select>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class="row">\r\n                                <div class="col-md-12">\r\n                                    <button type="button" class="btn btn-default" (click)="buscar()">Buscar</button>\r\n                                </div>\r\n                            </div>\r\n                            <div class="row">\r\n                                <div class="col-md-12">\r\n                                    <label style="color:red">{{mensaje}}</label>\r\n                                </div>\r\n                            </div>\r\n                        </form>\r\n                        <div class="row">\r\n                            <div class="col-lg-12">\r\n                                <div class="card">\r\n                                    <div class="card-content">\r\n                                        <app-data-table #tablaNormal \r\n                                            [idTabla]="\'tablaBitacora\'" \r\n                                            [columnas]="columna" \r\n                                            [usaServicio]="true"\r\n                                            [servicio]="sincronizacionService"\r\n                                            [parametros]="parametros"\r\n                                            [tipoAtributoServicio]="tipoAtributos"\r\n                                            [ordenarPorElCampo]="\'Fecha\'"\r\n                                            [urlServicio]="urlSincronizado"\r\n                                            (iniciarData)="iniciarData($event)"\r\n                                            >\r\n                                        </app-data-table>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <hr>\r\n                        \x3c!--\r\n                        <div class="row">\r\n                            <div class="col-lg-6">\r\n                                <div class="card">\r\n                                    <div class="card-header card-header-text" data-background-color="blue">\r\n                                        <h4 class="card-title">{{\'leyenda\' | translate}}</h4>\r\n                                    </div>\r\n                                    <div class="card-content">\r\n                                        <div class="col-lg-2">\r\n                                            <label style="color:green">\r\n                                                <i class="material-icons">fiber_manual_record</i>\r\n                                            </label>\r\n                                        </div>\r\n                                        <div class="col-lg-4">\r\n                                            {{\'sincronizado\' | translate}}\r\n                                        </div>\r\n                                        <div class="col-lg-2">\r\n                                            <label style="color:red">\r\n                                                <i class="material-icons">fiber_manual_record</i>\r\n                                            </label>\r\n                                        </div>\r\n                                        <div class="col-lg-4">\r\n                                            {{\'noEnviado\' | translate}}\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    --\x3e\r\n                        <div class="row">\r\n                            <div class="col-lg-12">\r\n                                <button type="button" class="btn btn-default" (click)="volver()">Volver</button>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>'},"./src/app/facturacion-electronica/sincronizacion/sincronizacion-bitacora/sincronizacion-bitacora.component.ts":function(o,a,r){"use strict";var n=r("./node_modules/@angular/core/@angular/core.es5.js"),t=r("./node_modules/@angular/forms/@angular/forms.es5.js"),i=r("./node_modules/@angular/router/@angular/router.es5.js"),e=r("./src/app/facturacion-electronica/general/models/sincronizacion/estadoSincronizacion.ts"),c=r("./src/app/facturacion-electronica/general/models/sincronizacion/tipoSincronizacion.ts"),s=r("./src/app/facturacion-electronica/general/data-table/data-table.component.ts"),l=r("./src/app/facturacion-electronica/general/services/documento/estadoDocumento.service.ts"),d=r("./src/app/facturacion-electronica/general/services/sincronizacion/sincronizacion.service.ts"),u=r("./src/app/facturacion-electronica/general/utils/tipos.service.ts"),p=r("./node_modules/@angular/common/@angular/common/http.es5.js"),m=r("./src/app/facturacion-electronica/general/data-table/utils/columna-data-table.ts");r.d(a,"a",function(){return v});var b=this&&this.__decorate||function(o,a,r,n){var t,i=arguments.length,e=i<3?a:null===n?n=Object.getOwnPropertyDescriptor(a,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)e=Reflect.decorate(o,a,r,n);else for(var c=o.length-1;c>=0;c--)(t=o[c])&&(e=(i<3?t(e):i>3?t(a,r,e):t(a,r))||e);return i>3&&e&&Object.defineProperty(a,r,e),e},f=this&&this.__metadata||function(o,a){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(o,a)},v=function(){function o(o,a,r,n){this.router=o,this.tipos=a,this.sincronizacionService=r,this.estadoDocumentoService=n,this.cabecera=[],this.atributos=[],this.estadosSincronizacion=[],this.tiposSincronizacion=[],this.estadosDocumentos=[],this.sincronizado=new e.a,this.noSincronizado=new e.a,this.onLine=new c.a,this.offLine=new c.a,this.sincronizado.idEstado=1,this.sincronizado.estado="Sincronizado",this.noSincronizado.idEstado=0,this.noSincronizado.estado="No Sincronizado",this.estadosSincronizacion=[this.sincronizado,this.noSincronizado],this.onLine.idTipo=1,this.onLine.tipo="OnLine",this.offLine.idTipo=0,this.offLine.tipo="OffLine",this.tiposSincronizacion=[this.onLine,this.offLine]}return o.prototype.ngOnInit=function(){var o=this;this.initForm(),this.columna=[new m.a("Fecha","fechaCreacion"),new m.a("Hora","fechaCreacion"),new m.a("Usuario","idUsuarioCreacion"),new m.a("NroComprobante","numeroComprobante"),new m.a("Generado","generado"),new m.a("Estado Sincronización","estadoSincronizado"),new m.a("Estado Documento","estadoComprobante")],this.estadoDocumentoService.obtenerEstadosComprobantes().subscribe(function(a){o.estadosDocumentos=a}),this.bitacoraSincronizado=this.sincronizacionService.getBitacoraSincronizado(),this.bitacoraSincronizado==this.tipos.TIPO_DOCUMENTO_RETENCION&&(this.tipoAtributos=this.tipos.CABECERA_RETENCIONES,this.urlSincronizado=this.sincronizacionService.getUrlObjeto(),this.tabla.urlServicio="http://localhost:3000/v1/retenciones",console.log(this.urlSincronizado)),this.bitacoraSincronizado==this.tipos.TIPO_DOCUMENTO_PERCEPCION&&(this.urlSincronizado=this.sincronizacionService.getUrlObjeto(),this.tabla.urlServicio="http://localhost:3000/v1/percepcion"),this.bitacoraSincronizado==this.tipos.TIPO_DOCUMENTO_FACTURA&&(console.log("ingreseeeee"),this.urlSincronizado=this.sincronizacionService.getUrlObjeto(),this.tabla.urlServicio="http://localhost:3000/v1/factura"),this.bitacoraSincronizado==this.tipos.TIPO_DOCUMENTO_BOLETA&&(this.urlSincronizado=this.sincronizacionService.getUrlObjeto(),this.tabla.urlServicio="http://localhost:3000/v1/boleta")},o.prototype.iniciarData=function(){switch(this.parametros=new p.d,this.bitacoraSincronizado){case this.tipos.TIPO_DOCUMENTO_FACTURA:console.log("ingreseeeee"),this.tabla.urlServicio="http://localhost:3000/v1/factura";break;case this.tipos.TIPO_DOCUMENTO_BOLETA:this.tabla.urlServicio="http://localhost:3000/v1/boleta";break;case this.tipos.TIPO_DOCUMENTO_RETENCION:this.tabla.urlServicio="http://localhost:3000/v1/retenciones";break;case this.tipos.TIPO_DOCUMENTO_PERCEPCION:this.tabla.urlServicio="http://localhost:3000/v1/percepcion"}this.tabla.setParametros(this.parametros),this.tabla.cargarData()},o.prototype.initForm=function(){var o=new Date,a=o.getDate().toString()+"/"+o.getMonth().toString()+"/"+o.getFullYear().toString();this.bitacoraFormGroup=new t.FormGroup({txtComprobante:new t.FormControl("",[t.Validators.required]),cmbGenerado:new t.FormControl("",[t.Validators.required]),cmbEstadoDocumento:new t.FormControl("",[t.Validators.required]),datefechaInicio:new t.FormControl(a,[t.Validators.required]),datefechaFin:new t.FormControl(a,[t.Validators.required]),cmbEstadoSincronizacion:new t.FormControl("",[t.Validators.required])})},o.prototype.volver=function(){this.router.navigateByUrl("sincronizacion/sincronizar")},o.prototype.buscar=function(){var o=this.bitacoraFormGroup.get("datefechaInicio").value,a=this.bitacoraFormGroup.get("datefechaFin").value;if(""==o&&""==a)this.mensajeBusqueda="Ingrese la fecha inicio y la fecha fin";else{var r=new Date(Number.parseInt(o.split("/",3)[2]),Number.parseInt(o.split("/",2)[1])-1,Number.parseInt(o.split("/",1)[0]));new Date(Number.parseInt(a.split("/",3)[2]),Number.parseInt(a.split("/",2)[1])-1,Number.parseInt(a.split("/",1)[0]));if(r.getTime()>=r.getTime()){o=o.split("/",3)[2]+"-"+o.split("/",2)[1]+"-"+o.split("/",1)[0],a=a.split("/",3)[2]+"-"+a.split("/",2)[1]+"-"+a.split("/",1)[0];var n="";""!=this.bitacoraFormGroup.get("cmbGenerado").value&&(n=this.bitacoraFormGroup.get("cmbGenerado").value.toString());var t="";if(""!=this.bitacoraFormGroup.get("cmbEstadoDocumento").value)for(var i=this.bitacoraFormGroup.get("cmbEstadoDocumento").value,e=0,c=this.estadosDocumentos;e<c.length;e++){var s=c[e];if(s.idEstadoComprobante==i){t=s.idEstadoComprobante.toString();break}}var l="";""!=this.bitacoraFormGroup.get("cmbEstadoSincronizacion").value&&(l=this.bitacoraFormGroup.get("cmbEstadoSincronizacion").value);var d="";""!=this.bitacoraFormGroup.get("txtComprobante").value&&(d=this.bitacoraFormGroup.get("txtComprobante").value),this.parametros=(new p.d).set("numeroComprobante",null==d?"":d.toString()).set("generado",null==n?"":n.toString()).set("estado",null==t?"":t.toString()).set("estadoSincronizado",null==l?"":l.toString()).set("fechaInicio",o).set("fechaFin",a),this.tabla.urlServicio="http://localhost:3000/v1/retenciones/search/buscar",this.tabla.setParametros(this.parametros),this.tabla.cargarData()}else this.mensajeBusqueda="La fecha inicio no puede ser mayor a la fecha fin"}},o}();b([r.i(n.ViewChild)("tablaNormal"),f("design:type","function"==typeof(h=void 0!==s.a&&s.a)&&h||Object)],v.prototype,"tabla",void 0),v=b([r.i(n.Component)({selector:"app-bitacora",template:r("./src/app/facturacion-electronica/sincronizacion/sincronizacion-bitacora/sincronizacion-bitacora.component.html"),providers:[d.a],styleUrls:[]}),f("design:paramtypes",["function"==typeof(g=void 0!==i.c&&i.c)&&g||Object,"function"==typeof(z=void 0!==u.a&&u.a)&&z||Object,"function"==typeof(S=void 0!==d.a&&d.a)&&S||Object,"function"==typeof(C=void 0!==l.a&&l.a)&&C||Object])],v);var h,g,z,S,C},"./src/app/facturacion-electronica/sincronizacion/sincronizacion-bitacora/sincronizacion-bitacora.module.ts":function(o,a,r){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=r("./node_modules/@angular/core/@angular/core.es5.js"),t=r("./node_modules/@angular/common/@angular/common.es5.js"),i=r("./node_modules/@ngx-translate/core/index.js"),e=r("./src/app/facturacion-electronica/general/services/sincronizacion/sincronizacion.service.ts"),c=r("./src/app/facturacion-electronica/sincronizacion/sincronizacion-bitacora/sincronizacion-bitacora.component.ts"),s=r("./src/app/facturacion-electronica/sincronizacion/sincronizacion-bitacora/sincronizacion-bitacora.routing.module.ts"),l=r("./src/app/facturacion-electronica/general/data-table/data-table.module.ts"),d=r("./node_modules/@angular/forms/@angular/forms.es5.js"),u=r("./src/app/directives/datepicker.module.ts"),p=r("./src/app/facturacion-electronica/general/services/documento/estadoDocumento.service.ts"),m=r("./src/app/facturacion-electronica/general/utils/tipos.service.ts");r.d(a,"BitacoraModule",function(){return f});var b=this&&this.__decorate||function(o,a,r,n){var t,i=arguments.length,e=i<3?a:null===n?n=Object.getOwnPropertyDescriptor(a,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)e=Reflect.decorate(o,a,r,n);else for(var c=o.length-1;c>=0;c--)(t=o[c])&&(e=(i<3?t(e):i>3?t(a,r,e):t(a,r))||e);return i>3&&e&&Object.defineProperty(a,r,e),e},f=function(){function o(){}return o}();f=b([r.i(n.NgModule)({imports:[t.CommonModule,i.a,s.a,l.a,d.ReactiveFormsModule,u.a],declarations:[c.a],providers:[e.a,p.a,m.a]})],f)},"./src/app/facturacion-electronica/sincronizacion/sincronizacion-bitacora/sincronizacion-bitacora.routing.module.ts":function(o,a,r){"use strict";var n=r("./node_modules/@angular/core/@angular/core.es5.js"),t=r("./node_modules/@angular/router/@angular/router.es5.js"),i=r("./src/app/facturacion-electronica/sincronizacion/sincronizacion-bitacora/sincronizacion-bitacora.component.ts");r.d(a,"a",function(){return s});var e=this&&this.__decorate||function(o,a,r,n){var t,i=arguments.length,e=i<3?a:null===n?n=Object.getOwnPropertyDescriptor(a,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)e=Reflect.decorate(o,a,r,n);else for(var c=o.length-1;c>=0;c--)(t=o[c])&&(e=(i<3?t(e):i>3?t(a,r,e):t(a,r))||e);return i>3&&e&&Object.defineProperty(a,r,e),e},c=[{path:"",children:[{path:"",pathMatch:"full",redirectTo:"sincronizar"},{path:"bitacora",component:i.a}]}],s=function(){function o(){}return o}();s=e([r.i(n.NgModule)({imports:[t.a.forChild(c)],exports:[t.a]})],s)}});