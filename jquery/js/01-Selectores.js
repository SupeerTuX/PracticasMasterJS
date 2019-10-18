$(document).ready(function () {

    //Selector de ID
    $("#rojo").css("background", "red")
        .css("color", "white");

    $("#amarillo").css("background", "yellow")
        .css("color", "green");

    $("#verde").css("background", "green")
        .css("color", "white");


    //selector de clase
    var miClase = $('.zebra');
    miClase.css("padding", "5px");

    $('.sinBorde').click(function () {
        console.log('Clicl');
        $(this).addClass('zebra');
    });

    //Selectores de etiqueta
    var parrafos = $("p").css("cursor", "pointer");

    parrafos.click(function () {
        var it = $(this);
        if (!it.hasClass('grande')) {
            it.addClass('grande');
        } else {
            it.removeClass('grande');
        }

    });

    //Selectores de atributo
    $('[title="Google"]').css('background', '#ccc');
    $('[title="FaceBook"]').css('background', 'blue');

    //Otros
    //$('p, a').addClass('margenSuperior');

    var busqueda = $('#caja').find('.resaltado');
    console.log(busqueda);

});