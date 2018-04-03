webpackJsonp([18],{"./src/app/facturacion-electronica/comprobantes/nota-debito/nota-debito.component.css":function(o,e,t){e=o.exports=t("./node_modules/css-loader/lib/css-base.js")(!1),e.push([o.i,"",""]),o.exports=o.exports.toString()},"./src/app/facturacion-electronica/comprobantes/nota-debito/nota-debito.component.html":function(o,e){o.exports='<div class="card">\r\n  <div class="card-header card-header-text" data-background-color="blue">\r\n    <h4 class="card-title">{{titulo | translate}}</h4>\r\n  </div>\r\n  <div class="card-content">\r\n    <form [formGroup]="notaDeDebitoFormGroup" (ngSubmit)="vistaPrevia()" autocomplete="off">\r\n      <div class="row">\r\n        <div class="col-md-3">\r\n          <div class="form-group label-floating">\r\n            <label class="control-label">{{\'serie\' | translate}}<span class="star">*</span></label>\r\n            <select id="cmbSerie"\r\n                    name="cmbSerie"\r\n                    formControlName="cmbSerie"\r\n                    class="form-control">\r\n              <option *ngFor="let serie of series | async" [value]="serie.idSerie">\r\n                {{serie.serie}}\r\n              </option>\r\n            </select>\r\n          </div>\r\n        </div>\r\n        <div class="col-md-3">\r\n          <div class="form-group label-floating">\r\n            <label class="control-label">{{\'tipoComprobante\' | translate}}<span class="star">*</span></label>\r\n            <select id="cmbTipoComprobante"\r\n                    name="cmbTipoComprobante"\r\n                    formControlName="cmbTipoComprobante"\r\n                    class="form-control"\r\n                    (change)="cambioTipoComprobante()">\r\n              <option *ngFor="let tipoComprobante of tiposDeComprobantes | async" [value]="tipoComprobante.codigo">\r\n                {{tipoComprobante.descripcionLarga | translate}}\r\n              </option>\r\n            </select>\r\n          </div>\r\n        </div>\r\n        <div class="col-md-3">\r\n          <div class="form-group label-floating">\r\n            <label id="lblCodigo" class="control-label">{{\'numeroComprobante\' | translate}}<span class="star">*</span></label>\r\n            <input  ng2-auto-complete\r\n                    type="text"\r\n                    id="txtNumeroComprobante"\r\n                    formControlName="txtNumeroComprobante"\r\n                    [source]="listarProductosDeAutcompletado.bind(this)"\r\n                    [list-formatter]="formatoDeListaAutocompletado"\r\n                    [value-formatter] = "formatoDeValorAutocompletado"\r\n                    [no-match-found-text] = "\'noSeEncontraronResultados\' | translate"\r\n\r\n                    open-on-focus = true\r\n                    close-on-focus = true\r\n                    auto-select-first-item = false\r\n                    min-chars = 1\r\n                    [loading-text] = "\'cargando\' | translate"\r\n\r\n                    (valueChanged)="cambioLaSeleccionDelComprobante($event)"\r\n                    (change)="cambioLaBusquedaDeAutocompleteDeComprobante()"\r\n                    class="form-control">\r\n          </div>\r\n        </div>\r\n        <div class="col-md-3">\r\n          <div class="form-group">\r\n            <button id="btnVisualizar" type="button" class="btn btn-xs btn-default"\r\n                    (click)="visualizarComprobanteSeleccionado()"\r\n                    [disabled]="!(escogioUnComprobante | async)">\r\n              <span class="btn-label ">\r\n                  <i class="material-icons">visibility</i>\r\n              </span>\r\n              {{\'verComprobante\' | translate}}\r\n            </button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class="row">\r\n        <div class="col-md-3">\r\n          <div class="form-group label-floating">\r\n            <label class="control-label">{{\'tipoNotaDebito\' | translate}}<span class="star">*</span></label>\r\n            <select id="cmbTipoNotaDebito"\r\n                    name="cmbTipoNotaDebito"\r\n                    formControlName="cmbTipoNotaDebito"\r\n                    class="form-control"\r\n                    (change)="cambioTipoNotaDebito()">\r\n              <option *ngFor="let tipoDeNotaDeDebito of tiposDeNotasDeDebito | async" [value]="tipoDeNotaDeDebito.codigo_dominio">\r\n                {{tipoDeNotaDeDebito.descripcion_dominio | translate}}\r\n              </option>\r\n            </select>\r\n          </div>\r\n        </div>\r\n        <div class="col-md-3">\r\n          <div class="form-group label-floating">\r\n            <label class="control-label">{{\'documento\' | translate}}</label>\r\n            <input type="text" class="form-control"\r\n                   id="txtDocumento"\r\n                   formControlName="txtDocumento">\r\n          </div>\r\n        </div>\r\n        <div class="col-md-6">\r\n          <div class="form-group label-floating">\r\n            <label class="control-label">{{\'razonSocial\' | translate}}</label>\r\n            <input type="text" class="form-control"\r\n                   id="txtRazonSocial"\r\n                   formControlName="txtRazonSocial">\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class="row">\r\n        <div class="col-md-12">\r\n          <div class="form-group label-floating">\r\n            <label id="lblMotivo" class="control-label">{{\'motivoNotaDeDebito\' | translate}}<span class="star">*</span></label>\r\n            <input class="form-control" type="text" formControlName="txtMotivoNotaDebito">\r\n          </div>\r\n        </div>\r\n      </div>\r\n      \x3c!--<ng-container [ngSwitch]="habilitarPorTipoDeNotaDeDebito | async">\r\n        <ng-container *ngSwitchCase="TiposVistasNotaDebito.NORMAL">\r\n          <app-tipo-nota-credito-normal\r\n            #tipoVistaNormalNotaDebito\r\n            [habilitarImporteTotal]= "habilitarImporteTotal | async"\r\n            [habilitarDescuentos]= "habilitarDescuentos | async"\r\n            (seInicio)="seInicioVistaNormal($event)"\r\n          >\r\n          </app-tipo-nota-credito-normal>\r\n        </ng-container>\r\n        <ng-container *ngSwitchCase="TiposVistasNotaDebito.TABLA">\r\n          <div class="card">\r\n            <div class="card-header card-header-icon" data-background-color="blue">\r\n              <i class="material-icons">list</i>\r\n            </div>\r\n            <div class="row"><h3>{{\'listaItems\' | translate}}</h3></div>\r\n            <div class="row"><p>&nbsp;</p></div>\r\n            <nav class="navbar navbar-info" role="navigation"></nav>\r\n            <div class="card-content">\r\n              <app-tipo-nota-credito-datatable\r\n                #tipoVistaTablaNotaDebito\r\n              >\r\n              </app-tipo-nota-credito-datatable>\r\n            </div>\r\n          </div>\r\n        </ng-container>\r\n      </ng-container>--\x3e\r\n\r\n      <div class="row">\r\n        <div class="col-md-12">\r\n          <div class="label-floating">\r\n            <label class="control-label">{{\'observaciones\' | translate}}</label>\r\n            <textarea id="txtObservacion" name="txtObservacion" formControlName="txtObservacionesNotaDebito" class="form-control" rows="3"></textarea>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class="row pull-right">\r\n        \x3c!--[disabled]="!(notaDeDebitoFormGroup.valid && estaValidadoLosTiposComponentesIncluidos())"--\x3e\r\n        <button id="btnVistaPrevia" type="submit" class="btn btn-default" >\r\n          {{\'vistaPrevia\' | translate}}\r\n        </button>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</div>\r\n'},"./src/app/facturacion-electronica/comprobantes/nota-debito/nota-debito.component.ts":function(o,e,t){"use strict";var r=t("./node_modules/@angular/core/@angular/core.es5.js"),a=t("./node_modules/@angular/forms/@angular/forms.es5.js"),n=t("./src/app/facturacion-electronica/general/services/comprobantes/comprobantes.service.ts"),i=t("./src/app/facturacion-electronica/general/services/configuracionDocumento/parametros.service.ts"),c=t("./src/app/facturacion-electronica/general/services/documento/tablaMaestra.service.ts"),s=t("./src/app/facturacion-electronica/general/utils/estilos.services.ts"),l=t("./node_modules/@angular/router/@angular/router.es5.js"),p=t("./src/app/facturacion-electronica/general/utils/tipos.service.ts"),d=t("./src/app/facturacion-electronica/general/services/archivos/archivo.service.ts"),u=t("./src/app/facturacion-electronica/general/services/configuracionDocumento/series.service.ts"),m=t("./src/app/facturacion-electronica/general/models/documento/tablaMaestra.ts"),b=t("./node_modules/rxjs/BehaviorSubject.js"),v=(t.n(b),t("./node_modules/@angular/common/@angular/common/http.es5.js")),f=t("./node_modules/rxjs/Observable.js");t.n(f);t.d(e,"a",function(){return D});var g=this&&this.__decorate||function(o,e,t,r){var a,n=arguments.length,i=n<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,t):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(o,e,t,r);else for(var c=o.length-1;c>=0;c--)(a=o[c])&&(i=(n<3?a(i):n>3?a(e,t,i):a(e,t))||i);return n>3&&i&&Object.defineProperty(e,t,i),i},h=this&&this.__metadata||function(o,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(o,e)},D=function(){function o(o,e,t,r,a,n,i,c,s){this._comprobantesService=o,this._tablaMaestraService=e,this._tiposService=t,this._parametrosServicie=r,this._archivoService=a,this._seriesService=n,this.router=i,this.route=c,this._estilosService=s,this.titulo="notaDebito"}return o.prototype.ngOnInit=function(){this.iniciarNotaDeDebitoFormGroup(),this.inicializarVariables(),this.cargarSeries()},o.prototype.iniciarNotaDeDebitoFormGroup=function(){this.notaDeDebitoFormGroup=new a.FormGroup({cmbSerie:new a.FormControl("",[a.Validators.required]),cmbTipoComprobante:new a.FormControl("",[a.Validators.required]),txtNumeroComprobante:new a.FormControl({value:"",disabled:!0},[a.Validators.required]),cmbTipoNotaDebito:new a.FormControl({value:"",disabled:!0},[a.Validators.required]),txtMotivoNotaDebito:new a.FormControl("",[a.Validators.required,,a.Validators.maxLength(250)]),txtObservacionesNotaDebito:new a.FormControl,txtDocumento:new a.FormControl({value:"",disabled:!0},[a.Validators.required]),txtRazonSocial:new a.FormControl({value:"",disabled:!0},[a.Validators.required])})},o.prototype.inicializarVariables=function(){this.escogioUnComprobante=new b.BehaviorSubject(!1),this.habilitarPorTipoDeNotaDeDebito=new b.BehaviorSubject(-1),this.todosTiposDeNotasDeDebito=this._parametrosServicie.obtenerParametrosPorId(this._tiposService.PARAMETRO_TIPO_NOTA_DEBITO_ELECTRONICA)},o.prototype.formatoDeListaAutocompletado=function(o){return o.vcSerie+" - "+o.vcCorrelativo},o.prototype.formatoDeValorAutocompletado=function(o){return o.vcSerie+" - "+o.vcCorrelativo},o.prototype.listarProductosDeAutcompletado=function(o){if(!o)return f.Observable.of([]);var e=this.notaDeDebitoFormGroup.get("cmbTipoComprobante").value;if(null!=e){var t=(new v.e).set("idEntidadEmisora",localStorage.getItem("id_entidad")).set("tipoComprobanteTabla",m.a.toString()).set("tipoComprobanteRegistro",e).set("fechaEmisionDel","").set("fechaEmisionAl","").set("ticketBaja","").set("nroPagina","0").set("regXPagina","10").set("ordenar","inIdcomprobantepago").set("tipoDocumento","").set("correlativoInicial","").set("correlativoFinal","").set("fechaBajaDel","").set("fechaBajaAl","").set("nroDocumento","").set("nroSerie","").set("estado","").set("ticket","");return this._comprobantesService.buscar(t)}},o.prototype.cambioLaSeleccionDelComprobante=function(o){console.log("-------entrodddd"),this.escogioUnComprobante.next(!0),this._comprobantesService.buscarPorUuid(o.inIdcomprobantepago).subscribe(function(o){o!==[]&&o[0]}),this.notaDeDebitoFormGroup.get("txtDocumento").setValue(o.entidadcompradora.vcDocumento),this.notaDeDebitoFormGroup.get("txtRazonSocial").setValue(o.entidadcompradora.vcDenominacion),this._estilosService.eliminarEstiloInput("txtDocumento","is-empty"),this._estilosService.eliminarEstiloInput("txtRazonSocial","is-empty"),console.log(o)},o.prototype.cambioLaBusquedaDeAutocompleteDeComprobante=function(){console.log("---------------comprobante"),"object"==typeof this.notaDeDebitoFormGroup.get("txtNumeroComprobante").value?this.escogioUnComprobante.next(!0):(this.notaDeDebitoFormGroup.get("txtDocumento").reset(),this.notaDeDebitoFormGroup.get("txtRazonSocial").reset(),this.escogioUnComprobante.next(!1)),console.log(this.escogioUnComprobante)},o.prototype.cargarSeries=function(){this.series=this._seriesService.filtroSeries(localStorage.getItem("id_entidad"),this._tiposService.TIPO_DOCUMENTO_NOTA_DEBITO,this._tiposService.TIPO_SERIE_ONLINE.toString())},o.prototype.vistaPrevia=function(){this.router.navigate(["./vistaPrevia"],{relativeTo:this.route})},o}();D=g([t.i(r.Component)({selector:"app-nota-debito",template:t("./src/app/facturacion-electronica/comprobantes/nota-debito/nota-debito.component.html"),styles:[t("./src/app/facturacion-electronica/comprobantes/nota-debito/nota-debito.component.css")]}),h("design:paramtypes",["function"==typeof(C=void 0!==n.a&&n.a)&&C||Object,"function"==typeof(y=void 0!==c.a&&c.a)&&y||Object,"function"==typeof(_=void 0!==p.a&&p.a)&&_||Object,"function"==typeof(S=void 0!==i.a&&i.a)&&S||Object,"function"==typeof(x=void 0!==d.a&&d.a)&&x||Object,"function"==typeof(N=void 0!==u.a&&u.a)&&N||Object,"function"==typeof(j=void 0!==l.b&&l.b)&&j||Object,"function"==typeof(O=void 0!==l.c&&l.c)&&O||Object,"function"==typeof(T=void 0!==s.a&&s.a)&&T||Object])],D);var C,y,_,S,x,N,j,O,T},"./src/app/facturacion-electronica/comprobantes/nota-debito/nota-debito.module.ts":function(o,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=t("./node_modules/@angular/core/@angular/core.es5.js"),a=t("./node_modules/@angular/common/@angular/common.es5.js"),n=t("./src/app/facturacion-electronica/comprobantes/nota-debito/nota-debito.routing.module.ts"),i=t("./src/app/facturacion-electronica/comprobantes/nota-debito/nota-debito.component.ts"),c=t("./node_modules/@ngx-translate/core/index.js"),s=t("./src/app/facturacion-electronica/general/services/comprobantes/comprobantes.service.ts"),l=t("./src/app/facturacion-electronica/general/services/configuracionDocumento/parametros.service.ts"),p=t("./src/app/facturacion-electronica/general/services/utils/persistenciaDatos.service.ts"),d=t("./src/app/facturacion-electronica/general/services/documento/tablaMaestra.service.ts"),u=t("./src/app/facturacion-electronica/general/services/servidores.ts"),m=t("./src/app/facturacion-electronica/general/utils/estilos.services.ts"),b=t("./src/app/facturacion-electronica/general/utils/tipos.service.ts"),v=t("./src/app/facturacion-electronica/general/services/archivos/archivo.service.ts"),f=t("./src/app/facturacion-electronica/general/services/configuracionDocumento/series.service.ts"),g=t("./node_modules/ng2-auto-complete/dist/index.js"),h=(t.n(g),t("./node_modules/@angular/forms/@angular/forms.es5.js")),D=t("./src/app/facturacion-electronica/general/vista-previa-comprobantes/vista-previa-comprobantes.module.ts");t.d(e,"NotaDebitoModule",function(){return y});var C=this&&this.__decorate||function(o,e,t,r){var a,n=arguments.length,i=n<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,t):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(o,e,t,r);else for(var c=o.length-1;c>=0;c--)(a=o[c])&&(i=(n<3?a(i):n>3?a(e,t,i):a(e,t))||i);return n>3&&i&&Object.defineProperty(e,t,i),i},y=function(){function o(){}return o}();y=C([t.i(r.NgModule)({imports:[a.CommonModule,n.a,c.a,h.ReactiveFormsModule,g.Ng2AutoCompleteModule,D.a],declarations:[i.a],providers:[s.a,u.a,d.a,b.a,l.a,v.a,p.a,f.a,m.a]})],y)},"./src/app/facturacion-electronica/comprobantes/nota-debito/nota-debito.routing.module.ts":function(o,e,t){"use strict";var r=t("./node_modules/@angular/core/@angular/core.es5.js"),a=t("./node_modules/@angular/router/@angular/router.es5.js"),n=t("./src/app/facturacion-electronica/comprobantes/nota-debito/nota-debito.component.ts"),i=t("./src/app/facturacion-electronica/general/vista-previa-comprobantes/vista-previa-comprobantes.component.ts");t.d(e,"a",function(){return l});var c=this&&this.__decorate||function(o,e,t,r){var a,n=arguments.length,i=n<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,t):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(o,e,t,r);else for(var c=o.length-1;c>=0;c--)(a=o[c])&&(i=(n<3?a(i):n>3?a(e,t,i):a(e,t))||i);return n>3&&i&&Object.defineProperty(e,t,i),i},s=[{path:"",children:[{path:"",pathMatch:"full",redirectTo:"crear"},{path:"crear",component:n.a,data:{codigo:"08",mostrarCombo:!0}},{path:"crear/vistaPrevia",component:i.a,data:{codigo:"08",mostrarCombo:!1}}]}],l=function(){function o(){}return o}();l=c([t.i(r.NgModule)({imports:[a.a.forChild(s)],exports:[a.a]})],l)}});