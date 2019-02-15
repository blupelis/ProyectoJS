$(document).ready(function(){
    /*
    $( window ).on( "load", function(){
        $.ajax({
            url: "js/pelis.json",
            type: "GET",
            dataType: "json",
            success: function(datos){
                for(i=0;i<3;i++){
                    $("#n"+i ).append(datos[i].nombre);
                    $("#d"+i ).append(datos[i].desc);
                }
            }
        });
    });
    */

    $("#myBtn").click(function(){
        $("#myModal").modal();
      });


      $("#btn-r").click(function(){
        
        var err;

        if($("#nombre").val() == ""){
            err = "El campo Nombre no puede estar vacío.</b>!";
            $("#err").html("El campo Nombre no puede estar vacío.</b>!");
            //alert("El campo Nombre no puede estar vacío.");
            $("#nombre").focus();       // Esta función coloca el foco de escritura del usuario en el campo Nombre directamente.
            return false;
        }
        
        if($("#email").val() == ""){
            err = "El campo email no puede estar vacío.</b>!";
            $("#err").html("El campo email no puede estar vacío.</b>!");
            //alert("El campo email no puede estar vacío.");
            $("#email").focus();
            return false;
        }

        if($("#pass").val() == ""){
            //err = "El campo email no puede estar vacío.</b>!";
            //alert("La contraseña no puede estar vacía.");
            $("#err").html("La contraseña no puede estar vacía</b>!");
            $("#pass").focus();
            return false;
        }

      });
    
});
   
   
