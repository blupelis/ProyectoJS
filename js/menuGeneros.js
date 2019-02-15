// Función para mostrar el menú Géneros de películas
$(".select").on("click", "li", function() {
    $("#opened").click();
    var $t = $(this),
      $f = $(".field");
    (text = $t.text()), (icon = $t.find("i").attr("class"));
    $f.find("label").text(text);
    $f.find("i").attr("class", icon);
    });
    $(".field").click(function(e) {
    e.preventDefault();
    $("#opened").click();
    });