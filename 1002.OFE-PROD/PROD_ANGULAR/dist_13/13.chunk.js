webpackJsonp([13],{"./src/app/facturacion-electronica/percepcion-retencion/models/tipo-rp.ts":function(e,r,o){"use strict";var n=o("./src/app/facturacion-electronica/general/models/documento/tablaMaestra.ts");o.d(r,"a",function(){return t});var c=function(){function e(e,r,o,n,c){this.codigo=e,this.descripcion=r,this.ruta=o,this.codigosunat=n,this.tablamaestra=c}return e}(),t=function(){function e(){this.TipoRPs=[new c("01","Retención","retencion/crear/masiva","RT",n.a.toString()),new c("02","Percepción","percepcion/crear","PC",n.a.toString())]}return e.prototype.get=function(e){return this.TipoRPs.find(function(r){return r.codigo===e})},e.prototype.getRetencion=function(){return this.get("01")},e.prototype.getPercepcion=function(){return this.get("02")},e}()},"./src/app/facturacion-electronica/percepcion-retencion/percepcion-retencion-visualizar/percepcion-retencion-visualizar.component.css":function(e,r,o){r=e.exports=o("./node_modules/css-loader/lib/css-base.js")(!1),r.push([e.i,"@media (min-width:992px){.border{padding-right:5px;padding-left:5px}}",""]),e.exports=e.exports.toString()},"./src/app/facturacion-electronica/percepcion-retencion/percepcion-retencion-visualizar/percepcion-retencion-visualizar.component.html":function(e,r){e.exports='<div class="main-content">\r\n  <div class="container-fluid">\r\n    <div class="row col-md-12">\r\n      <div class="card">\r\n        <div class="card-header card-header-text" data-background-color="blue">\r\n          <h4 class="card-title">{{\'visualizar\' | translate}}</h4>\r\n        </div>\r\n        <div class="card-content">\r\n          <div class="row">\r\n            <div class="col-md-4">\r\n              <label>\r\n                <h5>\r\n                  <b>{{razonsocialemisor}}</b>\r\n                </h5>\r\n              </label>\r\n            </div>\r\n            <div class="col-md-4 col-md-offset-4">\r\n              <div class="row">\r\n                <div class="col-md-6">\r\n                  <label>\r\n                    <h4>\r\n                      <b>RUC N°:</b>\r\n                    </h4>\r\n                  </label>\r\n                </div>\r\n                <div class="col-md-6">\r\n                  <label>\r\n                    <h5>{{rucemisor}}</h5>\r\n                  </label>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class="row">\r\n            <div class="col-md-4">\r\n              <label>\r\n                <h5>\r\n                  <b>{{domiciliofiscalemisor}}</b>\r\n                </h5>\r\n              </label>\r\n            </div>\r\n            <div class="col-md-4 col-md-offset-4">\r\n              <label>\r\n                <h3>\r\n                  <b>RETENCIÓN ELECTRÓNICA</b>\r\n                </h3>\r\n              </label>\r\n            </div>\r\n          </div>\r\n          <br>\r\n          <div class="row">\r\n            <div class="col-md-4 col-md-offset-8">\r\n              <div class="row">\r\n                <div class="col-md-12">\r\n                  <label>\r\n                    <h3>{{series}} - {{correlativo}}</h3>\r\n                  </label>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <br>\r\n          <div class="row">\r\n            <div class="col-md-6">\r\n              <div class="row">\r\n                <div class="col-md-6">\r\n                  <label>\r\n                    <b>Señor(es):</b>\r\n                  </label>\r\n                </div>\r\n                <div class="col-md-6">\r\n                  <label>{{razonsocialreceptor}}</label>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class="col-md-4 col-md-offset-2">\r\n              <div class="row">\r\n                <div class="col-md-6">\r\n                  <label>\r\n                    <b>Tipo de Cambio:</b>\r\n                  </label>\r\n                </div>\r\n                <div class="col-md-6">\r\n                  <label>{{tipocambio}}</label>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class="row">\r\n            <div class="col-md-6">\r\n              <div class="row">\r\n                <div class="col-md-6">\r\n                  <label>\r\n                    <b>RUC:</b>\r\n                  </label>\r\n                </div>\r\n                <div class="col-md-6">\r\n                  <label>{{rucreceptor}}</label>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class="col-md-4 col-md-offset-2">\r\n              <div class="row">\r\n                <div class="col-md-6">\r\n                  <label>\r\n                    <b>Banco:</b>\r\n                  </label>\r\n                </div>\r\n                <div class="col-md-6">\r\n                  <label>{{banco}}</label>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class="row">\r\n            <div class="col-md-6">\r\n              <div class="row">\r\n                <div class="col-md-6">\r\n                  <label>\r\n                    <b>Domicilio Fiscal:</b>\r\n                  </label>\r\n                </div>\r\n                <div class="col-md-6">\r\n                  <label>{{domiciliofiscalreceptor}}</label>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class="row">\r\n            <div class="col-md-6">\r\n              <div class="row">\r\n                <div class="col-md-6">\r\n                  <label>\r\n                    <b>Fecha de Emisión:</b>\r\n                  </label>\r\n                </div>\r\n                <div class="col-md-6">\r\n                  <label>{{fechaemisiones}}</label>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class="row">\r\n            <div class="col-md-6">\r\n              <div class="row">\r\n                <div class="col-md-6">\r\n                  <label>\r\n                    <b>Tipo de Moneda:</b>\r\n                  </label>\r\n                </div>\r\n                <div class="col-md-6">\r\n                  <label>{{monedacabe}}</label>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <br>\r\n          <app-data-table\r\n            (iniciarData)="iniciarData($event)"\r\n            #tablaNormal\r\n            [idTabla]="\'tabla1\'"\r\n            [cabecera]="cabecera"\r\n            [atributos]="atributos"\r\n\r\n            [usaServicio]="true"\r\n            [servicio]="_percepcionRetencionReferenciasService"\r\n            [parametros]="parametrosVisualizar"\r\n            [tipoAtributoServicio]="tipoConsultaVisualizarRetencion"\r\n            [urlServicio]="urlVisualizarRetencion"></app-data-table>\r\n          <br>\r\n          <br>\r\n          <div class="row">\r\n            <div class="col-md-2 col-md-offset-5">\r\n              <label>\r\n                <b>Total Importe:</b>\r\n              </label>\r\n            </div>\r\n            <div class="col-md-5">\r\n              <label>{{totalImporte}}</label>\r\n            </div>\r\n          </div>\r\n          <div class="row">\r\n            <div class="col-md-2 col-md-offset-5">\r\n              <label>\r\n                <b>Total Importe Retención:</b>\r\n              </label>\r\n            </div>\r\n            <div class="col-md-5">\r\n              <label>{{totalRetencion}}</label>\r\n            </div>\r\n          </div>\r\n          <div class="row">\r\n            <div class="col-md-2 col-md-offset-5">\r\n              <label>\r\n                <b>Son:</b>\r\n              </label>\r\n            </div>\r\n            <div class="col-md-5">\r\n              <label>{{totalespalabaras | uppercase}}</label>\r\n            </div>\r\n          </div>\r\n          <br>\r\n          <br>\r\n        </div>\r\n        <div class="row">\r\n          <div class="col-lg-8 col-md-12 col-sm-12 col-xs-12 col-lg-offset-4">\r\n            <div class=" col-xs-12 col-sm-6 col-md-3 col-lg-3 border">\r\n              <button name="btnregresar" type="button" class="btn btn-default btn-block" (click)="regresar()">Regresar\r\n              </button>\r\n            </div>\r\n            <div class=" col-xs-12 col-sm-6 col-md-3 col-lg-3 border">\r\n              <button type="btnEnviarCorreo" class="btn btn-default btn-block" (click)="showSwal()"> {{\'enviarCorreo\' |\r\n                translate}}\r\n              </button>\r\n            </div>\r\n            <div class="dropdown col-xs-12 col-sm-6 col-md-3 col-lg-3 border">\r\n              <button class="dropdown-toggle btn btn-default btn-block" data-toggle="dropdown"\r\n                      style="padding-left: 17px;">\r\n                {{\'descargar\' | translate}}\r\n                <b class="caret"></b>\r\n                <ul class="dropdown-menu">\r\n                  <li *ngFor="let archivo of tiposArchivos">\r\n                    <a (click)="guardarArchivo(archivo)">{{archivo.descripcion}}</a>\r\n                  </li>\r\n                </ul>\r\n              </button>\r\n            </div>\r\n            <div class="col-xs-12 col-sm-6 col-md-3 col-lg-3 border">\r\n              <button type="btnimprimir" class="btn btn-default btn-block" (click)="imprimir()"> Imprimir</button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n'},"./src/app/facturacion-electronica/percepcion-retencion/percepcion-retencion-visualizar/percepcion-retencion-visualizar.component.ts":function(e,r,o){"use strict";var n=o("./node_modules/@angular/core/@angular/core.es5.js"),c=o("./node_modules/@angular/router/@angular/router.es5.js"),t=o("./node_modules/written-number/lib/index.js"),i=(o.n(t),o("./node_modules/@angular/common/@angular/common/http.es5.js")),a=o("./src/app/facturacion-electronica/general/data-table/data-table.component.ts"),s=o("./src/app/facturacion-electronica/percepcion-retencion/models/retencionebiz.ts"),l=o("./src/app/facturacion-electronica/general/models/organizacion/entidad.ts"),p=o("./src/app/facturacion-electronica/percepcion-retencion/models/rdetalle.ts"),d=o("./src/app/facturacion-electronica/percepcion-retencion/models/principal-retencion.ts"),u=o("./src/app/facturacion-electronica/percepcion-retencion/services/persistencia.service.ts"),v=o("./src/app/facturacion-electronica/percepcion-retencion/services/persistencia.entidad.service.ts"),m=o("./src/app/facturacion-electronica/percepcion-retencion/services/retencionpersiscabecera.service.ts"),f=o("./src/app/facturacion-electronica/general/services/documento/nuevoDocumento.ts"),b=o("./src/app/facturacion-electronica/percepcion-retencion/services/persistencia-post.ts"),h=o("./src/app/facturacion-electronica/general/services/comprobantes/comprobantes.service.ts"),g=o("./src/app/facturacion-electronica/general/models/archivos/tipoArchivo.ts"),R=o("./src/app/facturacion-electronica/general/services/servidores.ts"),y=o("./src/app/facturacion-electronica/general/services/correo/correo.service.ts"),w=o("./src/app/facturacion-electronica/general/services/archivos/archivo.service.ts"),C=o("./src/app/facturacion-electronica/general/services/comprobantes/retencion.service.ts"),D=o("./src/app/facturacion-electronica/general/models/consultaDocumentoQuery.ts"),_=o("./src/app/facturacion-electronica/percepcion-retencion/services/percepcion-retencion-referencias.service.ts"),j=o("./src/app/service/spinner.service.ts");o.d(r,"a",function(){return P});var S=this&&this.__decorate||function(e,r,o,n){var c,t=arguments.length,i=t<3?r:null===n?n=Object.getOwnPropertyDescriptor(r,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,r,o,n);else for(var a=e.length-1;a>=0;a--)(c=e[a])&&(i=(t<3?c(i):t>3?c(r,o,i):c(r,o))||i);return t>3&&i&&Object.defineProperty(r,o,i),i},O=this&&this.__metadata||function(e,r){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,r)},P=function(){function e(e,r,o,n,c,t,i,a,s,u,v,m,f,b,h){this.route=e,this.router=r,this.persistenciaService=o,this.RetencionCabecerapersistenciaService=n,this._nuevodocumento=c,this._entidadPersistenciaService=t,this.httpClient=i,this._postpersisservice=a,this._retencionService=s,this._comprobantesService=u,this._servidores=v,this.correoService=m,this._percepcionRetencionReferenciasService=f,this.archivoServicio=b,this._spinner=h,this.comprobantes_query=[],this.tiposArchivos=g.e,this.documentoreferenciaunit=new p.a,this.cabecera=[],this.atributos=[],this.retencion_principal=new d.a,this.entidadlogueo=new l.a,this.entidadreceptora=new l.a,this.listaitems=[],this.cabecera=["tipo","serie","numeroCorrelativo","fechaEmision","Moneda Origen","importeTotal","importeTotalsoles","importeRetencionsoles","Nro Doc ERP"],this.atributos=["vcTdocDesDesc","chSerieDest","chCorrDest","daFecEmiDest","vcMonedaDestino","deTotMoneDes","nuTotImpDest","nuTotImpAux","vcPolizaFactura"]}return e.prototype.ngOnInit=function(){var e=this;this.uuid=this.persistenciaService.getUUIDConsultaRetenecion(),console.log("UUID"),console.log(this.uuid);var r=this._servidores.HOSTLOCAL+"/documento?id="+this.uuid;this._spinner.set(!0),this.httpClient.get(r,{responseType:"text"}).subscribe(function(r){e.documentos_query=JSON.parse(r),e.cargarData(r),e._spinner.set(!1)},function(r){e._spinner.set(!1)})},e.prototype.cargarData=function(e){e=JSON.parse(e),console.log(e),this.razonsocialemisor=e.entidadproveedora.vcNomComercia,this.rucemisor=e.entidadproveedora.vcDocumento,this.domiciliofiscalemisor=e.entidadproveedora.vcDirFiscal,this.series=e.vcSerie,this.correlativo=e.vcCorrelativo,this.razonsocialreceptor=e.entidadcompradora.vcNomComercia,this.rucreceptor=e.entidadcompradora.vcDocumento,this.banco=e.vcPagobanco,this.monedacabe=e.chMonedacomprobantepago,this.domiciliofiscalreceptor=e.entidadcompradora.vcDirFiscal,this.uuid_pdf=e.inIdcomprobantepago,this.fechaemisiones=e.tsFechaenvio,this.tipocambio="",this.totalImporte=e.deTotalcomprobantepago,this.totalRetencion=e.deDctomonto.toFixed(2);for(var r=0;r<e.referencias.length;r++){this.tipocambio=e.referencias[r].vcAuxiliar1;var o=new s.a;o.id=r,o.tipoDocumentoDestinoDescripcion=e.referencias[r].vcTdocDesDesc,o.serieDocumentoDestino=e.referencias[r].chSerieDest,o.correlativoDocumentoDestino=e.referencias[r].chCorrDest,o.fechaEmisionDestino=e.referencias[r].daFecEmiDest,o.monedaDestino=e.referencias[r].vcMonedaDestino,o.deTotMoneDes=this.formatearNumeroFormatoMoneda(e.referencias[r].deTotMoneDes),o.totalImporteDestino=this.formatearNumeroFormatoMoneda(e.referencias[r].nuTotImpDest),o.totalImporteAuxiliarDestino=this.formatearNumeroFormatoMoneda(e.referencias[r].nuTotImpAux),o.vcPolizaFactura=e.referencias[r].vcPolizaFactura,this.listaitems.push(o)}this.tipocambio=this.formatearNumeroFormatoMoneda(Number(this.tipocambio)),this.calcularTotales()},e.prototype.cargarDataTabla=function(){new D.a;this.parametrosVisualizar=(new i.e).set("comprobanteID",this.uuid),this.urlVisualizarRetencion=this._percepcionRetencionReferenciasService.urlQry,this.tabla.setParametros(this.parametrosVisualizar),console.log("LA SUPER CONSULTA"),this.tipoConsultaVisualizarRetencion=this._percepcionRetencionReferenciasService.TIPO_ATRIBUTO_REFERENCIAS},e.prototype.formatearNumeroFormatoMoneda=function(e){return e.toFixed(2)},e.prototype.calcularTotales=function(){this.totalespalabaras=this.formatearNumeroFormatoMoneda(Number(this.totalRetencion));var e=this.totalespalabaras.split("."),r=e[0],o=e[1];this.totalespalabaras=t(Number(r),{lang:"es"})+"  CON "+o+"/100 SOLES."},e.prototype.guardarArchivo=function(e){console.log("DESCARGA DE ARCHIVOS TIPOS"),console.log(e.idArchivo),console.log(this.uuid),this.archivoServicio.descargararchivotipo(this.uuid,e.idArchivo)},e.prototype.regresar=function(){this.router.navigateByUrl("percepcion-retencion/consultar")},e.prototype.emitir=function(){window.open(this._servidores.FILEQRY+"/archivos/download?nombre="+this.uuid_pdf+"-1.pdf","_blank")},e.prototype.imprimir=function(){this.archivoServicio.retornarArchivoRetencionPercepcionbase(this.uuid).subscribe(function(e){if(console.log(e),e){var r='<embed width=100% height=100% type="application/pdf" src="data:application/pdf;base64,'+e+'"> </embed>';window.open("","PDF","dependent = yes, locationbar = no, menubar = yes, resizable, screenX = 50, screenY = 50, width = 800, height = 800").document.write(r)}}),console.log(this.uuid)},e.prototype.iniciarData=function(e){this.cargarDataTabla(),this.calcularTotales()},e.prototype.showSwal=function(){var e=this;swal({title:"Agregar Correos Electrónicos",html:'<div class="form-group label-floating" xmlns="http://www.w3.org/1999/html"><label class="control-label">Correos Electrónicos<span class="star">*</span> </label><textarea id="correos" type="text" class="form-control"/></textarea> <label>Para separar correos se deberán separar por comas(,).</label></div>',allowOutsideClick:!1,preConfirm:function(){return new Promise(function(e,r){setTimeout(function(){var o=!0,n=/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,c=$("#correos").val();c=c.split(",");var t=c.filter(function(e){return!n.test(e)&&(o=!1,!0)});o?e(c):(swal.showValidationError(),r(new Error(t)))},500)})},showCancelButton:!0,confirmButtonClass:"btn btn-success",cancelButtonClass:"btn btn-danger",confirmButtonText:"SÍ",cancelButtonText:"NO",buttonsStyling:!1}).then(function(r){var o=(e.uuid,e.series),n=e.correlativo,c=new Date(e.fechaemisiones).toISOString(),t=e.uuid+"-1.pdf",i=e.uuid+"-2.xml";console.log(r,"Retencion",o,n,c,t,i);e.correoService.enviarNotificacion(r,"Retencion",o,n,c,t,i).value})},e}();S([o.i(n.ViewChild)("tablaNormal"),O("design:type","function"==typeof(T=void 0!==a.a&&a.a)&&T||Object)],P.prototype,"tabla",void 0),P=S([o.i(n.Component)({selector:"visualizar-retencion",template:o("./src/app/facturacion-electronica/percepcion-retencion/percepcion-retencion-visualizar/percepcion-retencion-visualizar.component.html"),styles:[o("./src/app/facturacion-electronica/percepcion-retencion/percepcion-retencion-visualizar/percepcion-retencion-visualizar.component.css")]}),O("design:paramtypes",["function"==typeof(x=void 0!==c.c&&c.c)&&x||Object,"function"==typeof(z=void 0!==c.b&&c.b)&&z||Object,"function"==typeof(M=void 0!==u.a&&u.a)&&M||Object,"function"==typeof(N=void 0!==m.a&&m.a)&&N||Object,"function"==typeof(I=void 0!==f.a&&f.a)&&I||Object,"function"==typeof(A=void 0!==v.a&&v.a)&&A||Object,"function"==typeof(F=void 0!==i.b&&i.b)&&F||Object,"function"==typeof(E=void 0!==b.a&&b.a)&&E||Object,"function"==typeof(k=void 0!==C.a&&C.a)&&k||Object,"function"==typeof(V=void 0!==h.a&&h.a)&&V||Object,"function"==typeof(U=void 0!==R.a&&R.a)&&U||Object,"function"==typeof(B=void 0!==y.a&&y.a)&&B||Object,"function"==typeof(L=void 0!==_.a&&_.a)&&L||Object,"function"==typeof(H=void 0!==w.a&&w.a)&&H||Object,"function"==typeof(J=void 0!==j.a&&j.a)&&J||Object])],P);var T,x,z,M,N,I,A,F,E,k,V,U,B,L,H,J},"./src/app/facturacion-electronica/percepcion-retencion/percepcion-retencion.component.css":function(e,r,o){r=e.exports=o("./node_modules/css-loader/lib/css-base.js")(!1),r.push([e.i,"",""]),e.exports=e.exports.toString()},"./src/app/facturacion-electronica/percepcion-retencion/percepcion-retencion.component.html":function(e,r){e.exports='<div class="main-content">\r\n  <div class="container-fluid">\r\n    <div class="row">\r\n      <div class="col-sm-12">\r\n        <div class="card">\r\n          <div class="card-header card-header-text" data-background-color="blue">\r\n            <h4 class="card-title">{{titulo | translate}}</h4>\r\n          </div>\r\n          <div class="card-content">\r\n            <div class="row">\r\n              <div class="col-xs-12 col-sm-3 col-md-3 col-lg-2">\r\n                <select name="cmbTiposComprobante" class="form-control" (change)="cargarComprobante()" [disabled]="!mostrarCombo"\r\n                        [(ngModel)]="RPSeleccionado">\r\n                  <option *ngFor="let tipoRp of tiposRP.TipoRPs" [ngValue]="tipoRp"> {{tipoRp.descripcion | translate}} </option>\r\n                </select>\r\n              </div>\r\n            </div>\r\n              <router-outlet></router-outlet>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n'},"./src/app/facturacion-electronica/percepcion-retencion/percepcion-retencion.component.ts":function(e,r,o){"use strict";var n=o("./node_modules/@angular/core/@angular/core.es5.js"),c=o("./src/app/facturacion-electronica/percepcion-retencion/models/tipo-rp.ts"),t=o("./node_modules/@angular/router/@angular/router.es5.js");o.d(r,"a",function(){return s});var i=this&&this.__decorate||function(e,r,o,n){var c,t=arguments.length,i=t<3?r:null===n?n=Object.getOwnPropertyDescriptor(r,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,r,o,n);else for(var a=e.length-1;a>=0;a--)(c=e[a])&&(i=(t<3?c(i):t>3?c(r,o,i):c(r,o))||i);return t>3&&i&&Object.defineProperty(r,o,i),i},a=this&&this.__metadata||function(e,r){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,r)},s=function(){function e(e,r){this.router=e,this.route=r,this.titulo="crearComprobantes",this.tiposRP=new c.a,this.seleccionComprobante="",this.mostrarCombo=!0,"percepcion"==this.route.snapshot.children[0].url[0].path&&(this.RPSeleccionado=this.tiposRP.getPercepcion(),this.seleccionComprobante=this.RPSeleccionado.codigosunat),"retencion"==this.route.snapshot.children[0].url[0].path&&(this.RPSeleccionado=this.tiposRP.getRetencion(),this.seleccionComprobante=this.RPSeleccionado.codigosunat)}return e.prototype.ngOnInit=function(){this.cargarDataRutaComponente()},e.prototype.ngDoCheck=function(){this.cargarDataRutaComponente()},e.prototype.cargarDataRutaComponente=function(){"RT"==this.seleccionComprobante&&0!=this.route.snapshot.children[0].children[0].children[0].children.length?this.mostrarCombo=this.route.snapshot.children[0].children[0].children[0].children[0].data.mostrarCombo:this.route.snapshot.children[0].children[0].children[0].data&&(this.mostrarCombo=this.route.snapshot.children[0].children[0].children[0].data.mostrarCombo)},e.prototype.cargarComprobante=function(){this.navegarHacia(this.RPSeleccionado)},e.prototype.navegarHacia=function(e){var r=e.ruta;this.router.navigate([r],{relativeTo:this.route}),this.seleccionComprobante=e.codigosunat,console.log(this.seleccionComprobante)},e}();s=i([o.i(n.Component)({selector:"app-percepcion-retencion",template:o("./src/app/facturacion-electronica/percepcion-retencion/percepcion-retencion.component.html"),styles:[o("./src/app/facturacion-electronica/percepcion-retencion/percepcion-retencion.component.css")]}),a("design:paramtypes",["function"==typeof(l=void 0!==t.b&&t.b)&&l||Object,"function"==typeof(p=void 0!==t.c&&t.c)&&p||Object])],s);var l,p},"./src/app/facturacion-electronica/percepcion-retencion/percepcion-retencion.module.ts":function(e,r,o){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n=o("./node_modules/@angular/core/@angular/core.es5.js"),c=o("./node_modules/@angular/common/@angular/common.es5.js"),t=o("./node_modules/@angular/forms/@angular/forms.es5.js"),i=o("./node_modules/@angular/http/@angular/http.es5.js"),a=o("./node_modules/@angular/common/@angular/common/http.es5.js"),s=o("./src/app/directives/datepicker.module.ts"),l=o("./src/app/facturacion-electronica/percepcion-retencion/percepcion-retencion.component.ts"),p=o("./src/app/facturacion-electronica/percepcion-retencion/percepcion-retencion.routing.module.ts"),d=o("./src/app/facturacion-electronica/general/data-table/data-table.module.ts"),u=o("./src/app/facturacion-electronica/percepcion-retencion/services/persistencia.service.ts"),v=o("./src/app/facturacion-electronica/general/pdf-viewer/pdf-viewer.module.ts"),m=o("./src/app/facturacion-electronica/general/consulta/consulta.module.ts"),f=o("./node_modules/@ngx-translate/core/index.js"),b=o("./src/app/facturacion-electronica/percepcion-retencion/services/retencionpersiscabecera.service.ts"),h=o("./src/app/facturacion-electronica/general/directivas/directivas.module.ts"),g=o("./src/app/facturacion-electronica/general/utils/estadoArchivo.service.ts"),R=o("./src/app/facturacion-electronica/percepcion-retencion/services/archivoMasiva.service.ts"),y=o("./src/app/facturacion-electronica/general/services/documento/nuevoDocumento.ts"),w=o("./src/app/facturacion-electronica/percepcion-retencion/services/persistencia.entidad.service.ts"),C=o("./src/app/facturacion-electronica/general/services/comprobantes/retenciones.service.ts"),D=o("./src/app/facturacion-electronica/percepcion-retencion/percepcion-retencion-visualizar/percepcion-retencion-visualizar.component.ts"),_=o("./src/app/facturacion-electronica/percepcion-retencion/services/persistencia-post.ts"),j=o("./src/app/facturacion-electronica/general/services/archivos/archivo.service.ts"),S=o("./src/app/facturacion-electronica/general/services/comprobantes/comprobantes.service.ts"),O=o("./src/app/facturacion-electronica/general/services/comprobantes/retencion.service.ts"),P=o("./src/app/facturacion-electronica/percepcion-retencion/services/percepcion-retencion-referencias.service.ts"),T=o("./node_modules/ng2-completer/index.js"),x=o("./node_modules/ng2-auto-complete/dist/index.js");o.n(x);o.d(r,"PercepcionRetencionModule",function(){return M});var z=this&&this.__decorate||function(e,r,o,n){var c,t=arguments.length,i=t<3?r:null===n?n=Object.getOwnPropertyDescriptor(r,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,r,o,n);else for(var a=e.length-1;a>=0;a--)(c=e[a])&&(i=(t<3?c(i):t>3?c(r,o,i):c(r,o))||i);return t>3&&i&&Object.defineProperty(r,o,i),i},M=function(){function e(){}return e}();M=z([o.i(n.NgModule)({imports:[p.a,c.CommonModule,t.FormsModule,i.HttpModule,t.ReactiveFormsModule,a.a,s.a,v.a,d.a,m.a,f.a,h.a,T.a,x.Ng2AutoCompleteModule],declarations:[l.a,D.a],providers:[u.a,b.a,g.a,R.a,y.a,w.a,C.a,C.a,j.a,_.a,S.a,O.a,P.a],exports:[l.a]})],M)},"./src/app/facturacion-electronica/percepcion-retencion/percepcion-retencion.routing.module.ts":function(e,r,o){"use strict";var n=o("./node_modules/@angular/core/@angular/core.es5.js"),c=o("./node_modules/@angular/router/@angular/router.es5.js"),t=o("./src/app/facturacion-electronica/percepcion-retencion/percepcion-retencion.component.ts"),i=o("./src/app/facturacion-electronica/general/consulta/consulta.component.ts"),a=o("./src/app/facturacion-electronica/percepcion-retencion/percepcion-retencion-visualizar/percepcion-retencion-visualizar.component.ts");o.d(r,"a",function(){return p});var s=this&&this.__decorate||function(e,r,o,n){var c,t=arguments.length,i=t<3?r:null===n?n=Object.getOwnPropertyDescriptor(r,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,r,o,n);else for(var a=e.length-1;a>=0;a--)(c=e[a])&&(i=(t<3?c(i):t>3?c(r,o,i):c(r,o))||i);return t>3&&i&&Object.defineProperty(r,o,i),i},l=[{path:"",component:t.a,children:[{path:"",pathMatch:"full",redirectTo:"retencion"},{path:"retencion",loadChildren:"../percepcion-retencion/retencion/retencion.module#RetencionModule"},{path:"percepcion",loadChildren:"../percepcion-retencion/percepcion/percepcion.module#PercepcionModule"}]},{path:"consultar",component:i.a,data:{titulo:"consultaPercepcionRetencion",tipoConsulta:2}},{path:"consultar/visualizar",component:a.a,data:{titulo:"visualizarConsultaRetencion"}}],p=function(){function e(){}return e}();p=s([o.i(n.NgModule)({imports:[c.a.forChild(l)],exports:[c.a]})],p)}});