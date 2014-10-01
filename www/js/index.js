$(document).ready(function(){

    $("#btnIniciarSesion").on("click", function(){

        var correo =  $("#inputCorreo").val();
        var clave =  $("#inputClave").val();

        $.ajax({
            url: "http://www.mocky.io/v2/542c78c81c4e97120f338aa7",
            dataType: "json",
            type: "POST",
            data: { correo: correo, clave:clave },
            success: function(data){

            },
            error: function(a, b, c){
                alert("Error iniciando sesión");
            }
        })
        .then( function ( response ) {
            if(response.respuesta){
                $.mobile.changePage("#paginaHome", {transition: "none"});
            }else{
                $("#popupError").popup('open');
            }
        });
    });
});

var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicity call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};
