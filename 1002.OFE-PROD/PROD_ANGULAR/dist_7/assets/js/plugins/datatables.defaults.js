$.fn.dataTable.ext.errMode = 'throw';
$.extend(true, $.fn.dataTable.defaults, {
    pagingType: "full_numbers",
    lengthMenu: [[10, 25, 50, -1], [10, 25, 50, "Todos"]],
    /* responsive: {
         details: {
             display: $.fn.dataTable.Responsive.display.childRowImmediate,
             type: ''
         }
     },*/
    responsive: true,
    pageLength: 10,
    language: {
        sUrl: "assets/media/language/Spanish.json",
        search: "_INPUT_",
        searchPlaceholder: "Buscar Registros",
    },


});


jQuery.cachedScript = function (url, options) {

    // Allow user to set any option except for dataType, cache, and url
    var baseurl = $('#baseurl').val();
    // console.log(baseurl);
    options = $.extend(options || {}, {
        dataType: "script",
        cache: true,
        url: baseurl + url
    });

    // Use $.ajax() since it is more flexible than $.getScript
    // Return the jqXHR object so we can chain callbacks
    return jQuery.ajax(options);
};

function StyleCheckboxMaterial(e, repeat = false) {

    if ($(e.target).find('div.checkbox') && $(e.target).find('div.checkbox').length > 0) {


        var clientHeight = $(e.target).find('div.checkbox')[0].clientHeight;
        //console.log(clientHeight);
        if (clientHeight) {
            if (clientHeight >= 40)
                $($(e.target).find('div.checkbox')).find('.checkbox-material').removeClass("checkbox-material-25").addClass("checkbox-material-45");
            else
                $($(e.target).find('div.checkbox')).find('.checkbox-material').removeClass("checkbox-material-45").addClass("checkbox-material-25");
            if (repeat)
                setTimeout(function () { StyleCheckboxMaterial(e); }, 100);
        }

    }
}
function recalcular_columnas(e, datatable, columns) {
    //console.log(e.target);

    datatable.columns.adjust().responsive.recalc();

    StyleCheckboxMaterial(e);

    if (columns.find(a => a == false) == null) {
        $(e.target).find('th').css({
            "min-width": "10px",
        });
    }
    else {

        $(e.target).find('th').css({
            "min-width": "40px",
        });


    }

}

function responsive_resize_datatable() {

    $('.material-datatables .table').one('responsive-resize.dt', function (e, datatable, columns) {
        recalcular_columnas(e, datatable, columns);
        setTimeout(function () { recalcular_columnas(e, datatable, columns); }, 1000);
    });



}

var DataHardCode = new function () {
    this.getDefault = function () {

        return [
            {
                nroordencompra: 4590015491,
                estado: 'Activa',
                comentarioproveedor: ''
            },

            {
                nroordencompra: 4531046368,
                estado: 'Activa',//'Rechazada',
                comentarioproveedor: ''
            },

            {
                nroordencompra: 4531046371,
                estado: 'Activa',//'Visualizada',
                comentarioproveedor: ''
            },
            {
                nroordencompra: 4531046600,
                estado: 'Activa',//'Aceptada',
                comentarioproveedor: ''
            },
        ];
    }
    this.getAll = function () {
        var OCs;
        if (localStorage.getItem('OCs'))
            OCs = JSON.parse(localStorage.getItem('OCs'));
        else {
            OCs = this.getDefault();
            localStorage.setItem('OCs', JSON.stringify(OCs));
        }

        return OCs;

    }
    this.get = function (nroordencompra) {
        if (this.getAll().find(a => a.nroordencompra == nroordencompra))
            return this.getAll().find(a => a.nroordencompra == nroordencompra);
        else
            return this.getAll().find(a => a.nroordencompra == 4590015491);

    }

    this.update = function (item) {
        var lista = this.getAll();
        var oc = lista.find(a => a.nroordencompra == item.nroordencompra);
        if (item.estado)
            oc.estado = item.estado;
        if (item.comentarioproveedor)
            oc.comentarioproveedor = item.comentarioproveedor;
        //console.log(lista);
        localStorage.setItem('OCs', JSON.stringify(lista));

    }

    this.clearStorage = function () {
        localStorage.removeItem('OCs');
    }


}
var DatatableFunctions = new function () {
    this.initDatatable = function (e, settings, json, datatable) {

        setTimeout(function () {
            //console.log($(e.target).find('th'));
            if (datatable.responsive.hasHidden()) {

                jQuery(e.target).find('th').css({
                    "min-width": "40px",
                });
            }
            datatable.columns.adjust().responsive.recalc();
            StyleCheckboxMaterial(e, true);
            //console.log($(e.target).find('.checkall'));
            //console.log(datatable.ajax.url());
            let type = typeof datatable.ajax.url();
            
            if (type === 'string')
                $(e.target).find('.checkall').prop("checked", false);
        }, 100);
    };

    this.registerCheckAll = function () {

        jQuery('.material-datatables .table').on('click', '.checkall', function (event) {
            //console.log(event.delegateTarget);
            if (event.target.checked) {
                jQuery(event.delegateTarget).find(':checkbox').prop("checked", true);
            }
            else {
                jQuery(event.delegateTarget).find(':checkbox').prop("checked", false);
            }
        });
    };

    this.newUUID = function () {
    
        // http://www.ietf.org/rfc/rfc4122.txt
        var s = [];
        var hexDigits = "0123456789abcdef";
        for (var i = 0; i < 36; i++) {
          s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
        }
        s[14] = "4"; // bits 12-15 of the time_hi_and_version field to 0010
        s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1); // bits 6-7 of the clock_seq_hi_and_reserved to 01
        s[8] = s[13] = s[18] = s[23] = "-";
        return s.join("");
      };
    this.ModalSettings = function () {

        $(function () {
            function reposition() {
                var modal = $(this),
                    dialog = modal.find('.modal-dialog');
                modal.css('display', 'block');

                // Dividing by two centers the modal exactly, but dividing by three 
                // or four works better for larger screens.
                dialog.css("margin-top", Math.max(0, ($(window).height() - dialog.height()) / 2));
            }
            // Reposition when a modal is shown
            $('.modal').on('show.bs.modal', reposition);
            // Reposition when the window is resized
            $(window).on('resize', function () {
                $('.modal:visible').each(reposition);
            });


        });
        $('.modal-dialog').draggable({
            handle: ".modal-header"
        });

    };
    this.ConvertStringToDatetimeLong = function (fecha) {

        return (fecha && fecha != '') ? new Date(fecha) : null;
    };
    this.ConvertStringToRUC = function (ruc) {
        
                return (ruc && ruc != '') ? ruc.replace("PE", "") : '';
            };
    this.ConvertStringToDatetime = function (fecha) {
        //var fecha = '16/12/2017';
        if (fecha) {
            var fechas = fecha.split('/');

            if (fechas && fechas.length == 3) {
                var dia = fechas[0];
                var mes = fechas[1];
                var anho = fechas[2];
                return new Date(anho, mes - 1, dia, 0, 0, 0, 0);
            }
        }
        return null;
    };
    this.ConvertStringToDatetime2 = function (fecha) {
        //var fecha = '16/12/2017';
        if (fecha && fecha!='')
            return moment(fecha);
        else return null;
    };
    this.FormatDatetimeForMicroService = function (fecha) {
        return moment(fecha).format('YYYY-MM-DD');
        //return moment(fecha).format('YYYY-MM-DD HH:mm:ss');
    };
    
    this.FormatDatetimeForMicroServiceProducer = function (fecha) {
        return moment(fecha).format();
        //return moment(fecha).format('YYYY-MM-DD HH:mm:ss');
    };

    this.FormatDatetimeForDisplay = function (fecha) {
        return moment(fecha).format('DD/MM/YYYY');
        //return moment(fecha).format('YYYY-MM-DD HH:mm:ss');
    };

    this.AddDayEndDatetime = function (fecha) {

        fecha.setDate(fecha.getDate() + 1);
        //fecha.setMilliseconds(fecha.getMilliseconds() - 1);

        return fecha;
    };

    this.ParseFieldHtml = function (texto) {

        var matches;
        var myRegexp = /%CMP%%POS%C%TIT%(.*?):%EBD%/ig;
        if (texto) {
            texto= texto.replace('<![CDATA[','');
            texto= texto.replace(']]>','');
            texto = texto.replace(myRegexp, '');

            myRegexp = /%CMP%%POS%C%TIT%(.*?):/ig;
            texto = texto.replace(myRegexp, '');

            myRegexp = /%END%/ig;
            texto = texto.replace(myRegexp, '');
   
            myRegexp = /^%ITM%/ig;
            texto = texto.replace(myRegexp, '');

            myRegexp = /^(%ITM%)*/ig;
            texto = texto.replace(myRegexp, '');

            myRegexp = /%ITM%/ig;
            texto = texto.replace(myRegexp, '<br>');

        }
        return texto;
    };


    this.FormatNumber = function (value, fractionSize = 4) {
        
        var PADDING = "000000";
        var DECIMAL_SEPARATOR = ".";
        var THOUSANDS_SEPARATOR = ",";
        if ( value==0)
            return '0.0000';
        if (!value )
            return '';
        var [integer, fraction = ""] = (value || "").toString()
            .split(DECIMAL_SEPARATOR);

        fraction = fractionSize > 0
            ? DECIMAL_SEPARATOR + (fraction + PADDING).substring(0, fractionSize)
            : "";

        integer = integer.replace(/\B(?=(\d{3})+(?!\d))/g, THOUSANDS_SEPARATOR);

        return integer + fraction;
    };

    this.ParseNumber = function (value, fractionSize = 4) {

        var PADDING = "000000";
        var DECIMAL_SEPARATOR = ".";
        var THOUSANDS_SEPARATOR = ",";

        let [integer, fraction = ""] = (value || "").split(DECIMAL_SEPARATOR);

        integer = integer.replace(new RegExp(THOUSANDS_SEPARATOR, "g"), "");

        fraction = parseInt(fraction, 10) > 0 && fractionSize > 0
            ? DECIMAL_SEPARATOR + (fraction + PADDING).substring(0, fractionSize)
            : "";

        return integer + fraction;
    }


    this.ConvertToText = function (texto) {
        if (texto) {
            texto = texto.replace(/\<br\\?>/ig, "\n");
            texto = texto.replace(/<\/?[^>]+(>|$)/g, "");
            texto= texto.replace(/&nbsp/g,' ');
        }
        return texto;
    };

    this.ReplaceToken = function (texto) {
        var tokens = [
            { TOKEN_ENTRADA: '%ITM%', TOKEN_SALIDA: '<BR>' },
            { TOKEN_ENTRADA: '%TAB%', TOKEN_SALIDA: '&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp' },
            { TOKEN_ENTRADA: '%BBD%', TOKEN_SALIDA: '<B>' },
            { TOKEN_ENTRADA: '%EBD%', TOKEN_SALIDA: '</B>' },
            { TOKEN_ENTRADA: '%BUL%', TOKEN_SALIDA: '<U>' },
            { TOKEN_ENTRADA: '%EUL%', TOKEN_SALIDA: '</U>' },
            { TOKEN_ENTRADA: '%BIT%', TOKEN_SALIDA: '<I>' },
            { TOKEN_ENTRADA: '%EIT%', TOKEN_SALIDA: '</I>' },
            { TOKEN_ENTRADA: '%BSUP%', TOKEN_SALIDA: '<SUP>' },
            { TOKEN_ENTRADA: '%ESUP%', TOKEN_SALIDA: '</SUP>' },
            { TOKEN_ENTRADA: '%BSUB%', TOKEN_SALIDA: '<SUB>' },
            { TOKEN_ENTRADA: '%ESUB%', TOKEN_SALIDA: '</SUB>' },
            { TOKEN_ENTRADA: '%BBIG%', TOKEN_SALIDA: '<BIG>' },
            { TOKEN_ENTRADA: '%EBIG%', TOKEN_SALIDA: '</BIG>' },
            { TOKEN_ENTRADA: '%WSP%', TOKEN_SALIDA: '&nbsp' },
            { TOKEN_ENTRADA: '%BSP%', TOKEN_SALIDA: '<span class="fontreg10">' },
            { TOKEN_ENTRADA: '%ESP%', TOKEN_SALIDA: '</span>' },
            { TOKEN_ENTRADA: '%BST%', TOKEN_SALIDA: '<strong>' },
            { TOKEN_ENTRADA: '%EST%', TOKEN_SALIDA: '</strong>' },
            { TOKEN_ENTRADA: '%BTB%', TOKEN_SALIDA: '<table>' },
            { TOKEN_ENTRADA: '%BTBB%', TOKEN_SALIDA: '<table border=1>' },
            { TOKEN_ENTRADA: '%ETB%', TOKEN_SALIDA: '</table>' },
            { TOKEN_ENTRADA: '%BTR%', TOKEN_SALIDA: '<tr>' },
            { TOKEN_ENTRADA: '%ETR%', TOKEN_SALIDA: '</tr>' },
            { TOKEN_ENTRADA: '%BTD%', TOKEN_SALIDA: '<td>' },
            { TOKEN_ENTRADA: '%ETD%', TOKEN_SALIDA: '</td>' },
            { TOKEN_ENTRADA: '%BTD2%', TOKEN_SALIDA: '<td colspan=2>' },
            { TOKEN_ENTRADA: '%BFT%', TOKEN_SALIDA: '<font size = 4 color=BLUE>' },
            { TOKEN_ENTRADA: '%EFT%', TOKEN_SALIDA: '</font>' },
            { TOKEN_ENTRADA: '%B2FT%', TOKEN_SALIDA: '<font size = 4>' },
            { TOKEN_ENTRADA: '%E2FT%', TOKEN_SALIDA: '</font>' },
            { TOKEN_ENTRADA: '&gt', TOKEN_SALIDA: '>' },
            { TOKEN_ENTRADA: 'ygt', TOKEN_SALIDA: '>' },
            { TOKEN_ENTRADA: '&lt', TOKEN_SALIDA: '<' },
            { TOKEN_ENTRADA: 'ylt', TOKEN_SALIDA: '<' },
            { TOKEN_ENTRADA: '%BTRC%', TOKEN_SALIDA: '<tr BGCOLOR' },
            
            
           

        ];
        if (texto) {

            var output =  this.ParseFieldHtml(texto);


            for (index = 0; index < tokens.length; ++index) {
                var token = tokens[index];

                output = output.replace(new RegExp(token.TOKEN_ENTRADA, 'g'), token.TOKEN_SALIDA);

            }
          
            output=  output.replace(/^\<br\\?>/ig, "");
            output=  output.replace(/^\<br\>/ig, "");
            return output;
        }
        return null;
    }
}

$(window).bind('resize', function () {
    responsive_resize_datatable();

});

var stompClientProducer = null;
var stompClientConsumer = null;

var subscriptionHeaders = {
    id: ""
};

function connectCallbackProducer(frame) {
    console.log('Connected: ' + frame);
    subscriptionHeaders.id = "client-123";
    //subscriptionHeaders.id = localStorage.getItem('access_token');
    stompClientProducer.subscribe('/send/' + subscriptionHeaders.id, respuestaHandler, subscriptionHeaders);
}

function errorCallbackProducer(error) {
    stompClientProducer = null;
}

function connectCallbackConsumer(frame) {
    console.log('Connected: ' + frame);
    subscriptionHeaders.id = "client-123";
    //subscriptionHeaders.id = localStorage.getItem('access_token');
    stompClientConsumer.subscribe('/send/' + subscriptionHeaders.id, respuestaHandler, subscriptionHeaders);
}

function errorCallbackConsumer(error) {
    stompClientConsumer = null;
}

function connect() {
    var socket1 = new SockJS('http://52.170.84.241:8080/api/msproductor/v1/envio_kafka');
    var socket2 = new SockJS('http://52.170.232.83:8080/api/msconsumidor/v1/respuestas');
    stompClientProducer = Stomp.over(socket1);
    stompClientConsumer = Stomp.over(socket2);
    //stompClient.debug = null;  //para eliminar los mensajes en la consola del navegador
    stompClientProducer.connect({}, connectCallbackProducer, errorCallbackProducer);
    stompClientConsumer.connect({}, connectCallbackConsumer, errorCallbackConsumer);
}

function respuestaHandler(msg) {

    var respuesta = JSON.parse(msg.body);
    //alert(respuesta.message);
    /*$("#status").val(respuesta.statuscode);
    $("#message").val(respuesta.message);
    $("#id_doc").val(respuesta.id_doc);
    $("#num_doc").val(respuesta.num_doc);*/

    $.notify({
        icon: "notifications",
        message: respuesta.message + ". " + (respuesta.num_doc != null && respuesta.num_doc != "" ? "<b><u><a href=\"javascript:alert(\'Navegar\')\">Ir al documento " + respuesta.num_doc + " .</a></u></b>" : "")

    }, {
            type: "info",
            timer: 3000,
            placement: {
                from: "top",
                align: "center"
            }
        });
}

function disconnect() {
    if (stompClient != null) {
        stompClient.disconnect();
    }
    console.log("Disconnected");
}

$(function () {
    connect();
});

window.onbeforeunload = function () {
    disconnect();
};
