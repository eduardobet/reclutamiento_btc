/* En este archivo debe agregar las clases JS que considere necesarias para la realización de las pruebas de páginas Estáticas */
$(function(){

  $("#id_del_form").submit(function(e) {

    e.preventDefault();

    var nombre = $.trim( $("#id_campo_nombre").val() );
    var apellido = $.trim( $("#id_campo_apellido").val() );
    var telefono = $.trim( $("#id_campo_telefono").val() );
    var email = $.trim( $("#id_campo_email").val() );
    var interes = $.trim( $("#id_campo_interes").val() );
    var observaciones = $.trim( $("#id_campo_observaciones").val() );

    var $notificacion = $("#id_contenedor_del_mesaje_debajo_del_form");

    if (!nombre || !email) {
        $notificacion.show().addClass("clase_que_hace_que_se_vea_rojo").html("Error, revisar campos obligatorios.");
    } else {
      var msg = "Nombre: " + nombre + " " + apellido + "\nTeléfono: "+telefono + "\Email: "+email + "\Estás interesado en: "+interes + "\Observaciones: "+observaciones;
      alert(msg);
      $notificacion.show().addClass("clase_que_hace_que_se_vea_verde").html("Mensaje enviado");
    }

  });

});
