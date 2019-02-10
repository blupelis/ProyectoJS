$(document).ready(function(){

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

    $("#myBtn").click(function(){
        $("#myModal").modal();
      });

});
   
   