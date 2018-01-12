$.fn.dataTable.ext.errMode = 'throw';
$.extend(true, $.fn.dataTable.defaults, {
    pagingType: "full_numbers",
    lengthMenu: [[10, 25, 50, -1], [10, 25, 50, "Todos"]],
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
            console.log('initDatatable',type);
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
        return moment(fecha)
    };
    this.FormatDatetimeForMicroService = function (fecha) {
        return moment(fecha).format('YYYY-MM-DD');
        //return moment(fecha).format('YYYY-MM-DD HH:mm:ss');
    };

    this.AddDayEndDatetime = function (fecha) {

        fecha.setDate(fecha.getDate() + 1);
        fecha.setMilliseconds(fecha.getMilliseconds() - 1);

        return fecha;
    };
}

$(window).bind('resize', function () {
    responsive_resize_datatable();

});


/*

var stompClientProducer = null;
var stompClientConsumer = null;

var subscriptionHeaders = {
    id: ""
};

function connectCallbackProducer(frame) {
    console.log('Connected: ' + frame);
    subscriptionHeaders.id = "client-123";
    stompClientProducer.subscribe('/send/' + subscriptionHeaders.id, respuestaHandler, subscriptionHeaders);
}

function errorCallbackProducer(error) {
    stompClientProducer = null;
}

function connectCallbackConsumer(frame) {
    console.log('Connected: ' + frame);
    subscriptionHeaders.id = "client-123";
    stompClientConsumer.subscribe('/send/' + subscriptionHeaders.id, respuestaHandler, subscriptionHeaders);
}

function errorCallbackConsumer(error) {
    stompClientConsumer = null;
}

function connect() {
    var socket1 = new SockJS('http://40.76.86.5:8080/api/msproductor/v1/envio_kafka');
    var socket2 = new SockJS('http://13.82.145.97:8080/api/msconsumidor/v1/respuestas');
    stompClientProducer = Stomp.over(socket1);
    stompClientConsumer = Stomp.over(socket2);
    //stompClient.debug = null;  //para eliminar los mensajes en la consola del navegador
    stompClientProducer.connect({}, connectCallbackProducer, errorCallbackProducer);
    stompClientConsumer.connect({}, connectCallbackConsumer, errorCallbackConsumer);
}

function respuestaHandler(msg) {

    var respuesta = JSON.parse(msg.body);


  $.notify({
      icon: "notifications",
      message: respuesta.message + ". " + (respuesta.num_doc != null && respuesta.num_doc != "" ? "<b><u><a href=\"javascript:alert(\'Navegar\')\">Ir al documento " + respuesta.num_doc +  " .</a></u></b>" : "" )

    },{
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
*/
