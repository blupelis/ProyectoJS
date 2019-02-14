$( function() {
  $( "#button" ).on( "click", function() {
    $( ".newClass" ).switchClass( "newClass", "anotherNewClass", 1000 );
    $( ".anotherNewClass" ).switchClass( "anotherNewClass", "newClass", 1000 );
  });
} );

$(document).ready(function(){
  
  // Donde queremos cambiar el tamaño de la fuente
  var donde = $('.mitexto');
  var sizeFuenteOriginal = donde.css('font-size');
  
  // Resetear Font Size
  $(".resetearFont").click(function(){
  donde.css('font-size', sizeFuenteOriginal);
  });
 
  // Aumentar Font Size
  $(".aumentarFont").click(function(){s
  	var sizeFuenteActual = donde.css('font-size');
 	var sizeFuenteActualNum = parseFloat(sizeFuenteActual, 10);
    var sizeFuenteNuevo = sizeFuenteActualNum*1.2;
	donde.css('font-size', sizeFuenteNuevo);
	return false;
  });
 
  // Disminuir Font Size
  $(".disminuirFont").click(function(){
  	var sizeFuenteActual = donde.css('font-size');
 	var sizeFuenteActualNum = parseFloat(sizeFuenteActual, 10);
    var sizeFuenteNuevo = sizeFuenteActualNum*0.8;
	donde.css('font-size', sizeFuenteNuevo);
	return false;
  });
  
});