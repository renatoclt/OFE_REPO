webpackJsonp([19],{"./src/app/facturacion-electronica/comprobantes/boleta/boleta.component.css":function(a,r,e){r=a.exports=e("./node_modules/css-loader/lib/css-base.js")(!1),r.push([a.i,".material-icons{font-size:1.5rem;margin-right:.5rem}.control-label{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}",""]),a.exports=a.exports.toString()},"./src/app/facturacion-electronica/comprobantes/boleta/boleta.component.html":function(a,r){a.exports='<div class="card">\r\n  <div class="card-header card-header-text" data-background-color="blue">\r\n    <h4 class="card-title">{{titulo | translate}}</h4>\r\n  </div>\r\n  <div class="card-content">\r\n    <form class="form-horizontal" [formGroup]="">\r\n      <div class="row">\r\n        <div class="col-md-2">\r\n          <div class="form-group label-floating">\r\n            <label class="control-label">{{\'tipoDocumento\' | translate}}<span class="star">*</span></label>\r\n            <select class="form-control"></select>\r\n          </div>\r\n        </div>\r\n\r\n        <div class="col-md-2">\r\n          <div class="form-group label-floating">\r\n            <label class="control-label">\r\n              <i class="material-icons">search</i>{{\'numeroDocumento\' | translate}}<span class="star">*</span>\r\n            </label>\r\n            <input type="text" class="form-control">\r\n          </div>\r\n        </div>\r\n        <div class="col-md-4">\r\n          <div class="form-group label-floating">\r\n            <label class="control-label">\r\n              <i class="material-icons">search</i>{{\'razonSocial\' | translate}}<span class="star">*</span>\r\n            </label>\r\n            <input type="text" class="form-control">\r\n          </div>\r\n        </div>\r\n        <div class="col-md-4">\r\n          <div class="form-group label-floating">\r\n            <label class="control-label">{{\'direccion\' | translate}}<span class="star">*</span></label>\r\n            <input type="text" class="form-control">\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class="row">\r\n        <div class="col-md-2">\r\n          <div class="form-group label-floating">\r\n            <label class="control-label">{{\'fechaEmision\' | translate}}<span class="star">*</span></label>\r\n            <input type="text" class="form-control" datepicker/>\r\n          </div>\r\n        </div>\r\n        <div class="col-md-2">\r\n          <div class="form-group label-floating">\r\n            <label class="control-label">{{\'fechaVencimiento\' | translate}}<span class="star">*</span></label>\r\n            <input type="text" class="form-control" datepicker>\r\n          </div>\r\n        </div>\r\n        <div class="col-md-2">\r\n          <div class="form-group label-floating">\r\n            <label class="control-label">{{\'serie\' | translate}}<span class="star">*</span></label>\r\n            <select\r\n                    id="cmbSerie"\r\n                    name="cmbSerie"\r\n                    formControlName="cmbSerie"\r\n                    class="form-control">\r\n                    <option *ngFor="let serie of series" [value]="serie.idSerie">\r\n                      {{serie.serie}}\r\n                    </option>\r\n            </select>\r\n\r\n\r\n          </div>\r\n        </div>\r\n        <div class="col-md-2">\r\n          <div class="form-group label-floating">\r\n            <label class="control-label">{{\'tipoMoneda\' | translate}}<span class="star">*</span></label>\r\n            <select class="form-control"></select>\r\n          </div>\r\n        </div>\r\n        <div class="col-md-4">\r\n          <div class="form-group">\r\n            <div class="checkbox">\r\n              <label>\r\n                <input type="checkbox">{{\'boletaAnticipo\' | translate}}\r\n              </label>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class="card">\r\n        <div class="row">\r\n          <div class="col-md-offset-6">\r\n            <div class="col-md-6">\r\n              <button class="btn btn-default btn-block">{{\'documentoRelacionado\' | translate}}</button>\r\n            </div>\r\n            <div class="col-md-6">\r\n              <div class="dropdown">\r\n                <button href="#" class="dropdown-toggle btn btn-default btn-block" data-toggle="dropdown">{{\'agregarItem\' | translate}}\r\n                  <b class="caret"></b>\r\n                </button>\r\n                <ul class="dropdown-menu dropdown-menu-left">\r\n                  <li class="dropdown-header">{{\'tiposItems\' | translate}}</li>\r\n                  <li>\r\n                    <a href="#">{{\'servicio\' | translate}}</a>\r\n                  </li>\r\n                  <li>\r\n                    <a href="#">{{\'bien\' | translate}}</a>\r\n                  </li>\r\n                </ul>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class="material-datatables table-responsive">\r\n          <table id="datatable" class="table table-striped table-no-bordered table-hover" cellspacing="0" width="100%" style="width:100%">\r\n            <thead>\r\n            <tr>\r\n              <th class="disabled-sorting text-right">\r\n                <div class="checkbox text-right">\r\n                  <label><input type="checkbox" name="optionsCheckboxes" class="checkall" ></label>\r\n                </div>\r\n              </th>\r\n              <th>N°</th>\r\n              <th>Cantidad</th>\r\n              <th>Código</th>\r\n              <th>Descripción</th>\r\n\r\n              <th>Unidad de Medida</th>\r\n              <th>Valor Unitario</th>\r\n              <th>IGV</th>\r\n              <th>ISC</th>\r\n              <th>Descuento</th>\r\n              <th>Valor Venta</th>\r\n              <th class="disabled-sorting text-center">Acciones</th>\r\n            </tr>\r\n            </thead>\r\n          </table>\r\n        </div>\r\n      </div>\r\n\r\n      <div class="row">\r\n        <div class="col-md-12">\r\n          <div class="form-group label-floating">\r\n            <label class="control-label">{{\'observaciones\' | translate}}</label>\r\n            <textarea class="form-control" rows="3"></textarea>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class="row">\r\n        <div class="col-md-2">\r\n          <div class="form-group label-floating">\r\n            <label class="control-label">{{\'operacionesGravadas\' | translate}}</label>\r\n            <input type="number" class="form-control" disabled>\r\n          </div>\r\n        </div>\r\n        <div class="col-md-2">\r\n          <div class="form-group label-floating">\r\n            <label class="control-label">{{\'operacionesInafectas\' | translate}}</label>\r\n            <input type="number" class="form-control" disabled>\r\n          </div>\r\n        </div>\r\n        <div class="col-md-2">\r\n          <div class="form-group label-floating">\r\n            <label class="control-label">{{\'operacionesExoneradas\' | translate}}</label>\r\n            <input type="number" class="form-control" disabled>\r\n          </div>\r\n        </div>\r\n        <div class="col-md-2">\r\n          <div class="form-group label-floating">\r\n            <label class="control-label">{{\'totalDescuentos\' | translate}}</label>\r\n            <input type="number" class="form-control" disabled>\r\n          </div>\r\n        </div>\r\n        <div class="col-md-2">\r\n          <div class="form-group label-floating">\r\n            <label class="control-label">{{\'sumatoriaOtrosTributos\' | translate}}</label>\r\n            <input type="number" class="form-control">\r\n          </div>\r\n        </div>\r\n        <div class="col-md-2">\r\n          <div class="form-group label-floating">\r\n            <label class="control-label">{{\'sumatoriaOtrosCargos\' | translate}}</label>\r\n            <input type="number" class="form-control">\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class="row">\r\n        <div class="col-md-2">\r\n          <div class="form-group label-floating">\r\n            <label class="control-label">{{\'totalAnticipos\' | translate}}</label>\r\n            <input type="number" class="form-control" disabled>\r\n          </div>\r\n        </div>\r\n        <div class="col-md-2">\r\n          <div class="form-group label-floating">\r\n            <label class="control-label">{{\'sumatoriaIsc\' | translate}}</label>\r\n            <input type="number" class="form-control" disabled>\r\n          </div>\r\n        </div>\r\n        <div class="col-md-2">\r\n          <div class="form-group label-floating">\r\n            <label class="control-label">{{\'sumatoriaIgv\' | translate}}</label>\r\n            <input type="number" class="form-control" disabled>\r\n          </div>\r\n        </div>\r\n        <div class="col-md-2">\r\n          <div class="form-group label-floating">\r\n            <label class="control-label">{{\'importeTotal\' | translate}}</label>\r\n            <input type="number" class="form-control" disabled>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class="row">\r\n        <div class="col-md-offset-6">\r\n          <div class="col-md-6 col-md-offset-6">\r\n            <button class="btn btn-default btn-block">{{\'vistaPrevia\' | translate}}</button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</div>\r\n'},"./src/app/facturacion-electronica/comprobantes/boleta/boleta.component.ts":function(a,r,e){"use strict";var t=e("./node_modules/@angular/core/@angular/core.es5.js"),n=e("./src/app/facturacion-electronica/general/services/configuracionDocumento/series.service.ts");e.d(r,"a",function(){return c});var o=this&&this.__decorate||function(a,r,e,t){var n,o=arguments.length,l=o<3?r:null===t?t=Object.getOwnPropertyDescriptor(r,e):t;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(a,r,e,t);else for(var c=a.length-1;c>=0;c--)(n=a[c])&&(l=(o<3?n(l):o>3?n(r,e,l):n(r,e))||l);return o>3&&l&&Object.defineProperty(r,e,l),l},l=this&&this.__metadata||function(a,r){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(a,r)},c=function(){function a(a){this.seriesService=a,this.titulo="boleta",this.series=[]}return a.prototype.ngOnInit=function(){var a=this;this.seriesService.obtenerTodo().subscribe(function(r){a.series=r}),this.cargarDataTable(),DatatableFunctions.registerCheckAll()},a.prototype.cargarDataTable=function(){var a=$("#datatable").on("init.dt",function(r,e,t){DatatableFunctions.initDatatable(r,e,t,a)}).DataTable({searching:!1,serverSide:!0})},a}();c=o([e.i(t.Component)({selector:"app-boleta",template:e("./src/app/facturacion-electronica/comprobantes/boleta/boleta.component.html"),styles:[e("./src/app/facturacion-electronica/comprobantes/boleta/boleta.component.css")]}),l("design:paramtypes",["function"==typeof(s=void 0!==n.a&&n.a)&&s||Object])],c);var s},"./src/app/facturacion-electronica/comprobantes/boleta/boleta.module.ts":function(a,r,e){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var t=e("./node_modules/@angular/core/@angular/core.es5.js"),n=e("./node_modules/@angular/common/@angular/common.es5.js"),o=e("./src/app/facturacion-electronica/comprobantes/boleta/boleta.routing.module.ts"),l=e("./src/app/facturacion-electronica/comprobantes/boleta/boleta.component.ts"),c=e("./node_modules/@angular/forms/@angular/forms.es5.js"),s=e("./src/app/directives/datepicker.module.ts"),i=e("./src/app/facturacion-electronica/comprobantes/comprobante-vista-previa/comprobante-vista-previa.module.ts"),d=e("./src/app/facturacion-electronica/comprobantes/comprobante-documento-relacionado/comprobante-documento-relacionado.module.ts"),p=e("./src/app/facturacion-electronica/general/consulta/consulta.module.ts"),b=e("./src/app/facturacion-electronica/comprobantes/comprobante-item/comprobante-item.module.ts"),m=e("./src/app/facturacion-electronica/comprobantes/comprobante-emitir/comprobante-emitir.module.ts"),u=e("./node_modules/@ngx-translate/core/index.js");e.d(r,"BoletaModule",function(){return v});var f=this&&this.__decorate||function(a,r,e,t){var n,o=arguments.length,l=o<3?r:null===t?t=Object.getOwnPropertyDescriptor(r,e):t;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(a,r,e,t);else for(var c=a.length-1;c>=0;c--)(n=a[c])&&(l=(o<3?n(l):o>3?n(r,e,l):n(r,e))||l);return o>3&&l&&Object.defineProperty(r,e,l),l},v=function(){function a(){}return a}();v=f([e.i(t.NgModule)({imports:[n.CommonModule,o.a,c.ReactiveFormsModule,s.a,b.a,i.a,d.a,p.a,m.a,u.a],declarations:[l.a]})],v)},"./src/app/facturacion-electronica/comprobantes/boleta/boleta.routing.module.ts":function(a,r,e){"use strict";var t=e("./node_modules/@angular/core/@angular/core.es5.js"),n=e("./node_modules/@angular/router/@angular/router.es5.js"),o=e("./src/app/facturacion-electronica/comprobantes/boleta/boleta.component.ts"),l=e("./src/app/facturacion-electronica/comprobantes/comprobante-vista-previa/comprobante-vista-previa.component.ts"),c=e("./src/app/facturacion-electronica/comprobantes/comprobante-item/comprobante-item.component.ts"),s=e("./src/app/facturacion-electronica/general/consulta/consulta.component.ts"),i=e("./src/app/facturacion-electronica/comprobantes/comprobante-documento-relacionado/comprobante-documento-relacionado.component.ts"),d=e("./src/app/facturacion-electronica/comprobantes/comprobante-emitir/comprobante-emitir.component.ts");e.d(r,"a",function(){return m});var p=this&&this.__decorate||function(a,r,e,t){var n,o=arguments.length,l=o<3?r:null===t?t=Object.getOwnPropertyDescriptor(r,e):t;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(a,r,e,t);else for(var c=a.length-1;c>=0;c--)(n=a[c])&&(l=(o<3?n(l):o>3?n(r,e,l):n(r,e))||l);return o>3&&l&&Object.defineProperty(r,e,l),l},b=[{path:"",children:[{path:"crear",component:o.a,data:{codigo:"03",mostrarCombo:!0}},{path:"crear/docRelacionado",component:i.a,data:{tipoDocumento:"03"}},{path:"crear/docRelacionado/buscar",component:s.a,data:{tipoConsulta:10,titulo:"Consulta Documento Relacionado Boleta"}},{path:"crear/servicio/agregar",component:c.a,data:{tipoAccion:1,tipoDocumento:"03"}},{path:"crear/servicio/editar",component:c.a,data:{tipoAccion:2,tipoDocumento:"03"}},{path:"crear/bien/agregar",component:c.a,data:{tipoAccion:3,tipoDocumento:"03"}},{path:"crear/bien/editar",component:c.a,data:{tipoAccion:4,tipoDocumento:"03"}},{path:"crear/vistaprevia",component:l.a,data:{tipoDocumento:"03",titulo:"Boleta"}},{path:"emitir",component:d.a,data:{tipoDocumento:"03",titulo:"Boleta"}}]}],m=function(){function a(){}return a}();m=p([e.i(t.NgModule)({imports:[n.a.forChild(b)],exports:[n.a]})],m)}});