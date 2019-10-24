$(document).ready(function () {

    //Mover elemento por la pagina
    $('.elemento').draggable();

    //redimencionar
    $('.elemento').resizable();

    //Seleccionar elementos
    //$('.listaSeleccion').selectable();

    //Listar y ordenar
    $('.listaSeleccion').sortable({
        update: function (event, ui) {
            console.log('Ha cambiado la lista');
        }
    });

    //Drop
    $("#elementoMovido").draggable();
    $("#area").droppable({
        drop: function () {
            console.log('Has soltado algo dentro del area');
        }
    });

    //Efectos
    $('#mostrar').click(function () {
        $('.caja').toggle('shake', 'slow');
    })

    //tooltip
    $(document).tooltip();

});