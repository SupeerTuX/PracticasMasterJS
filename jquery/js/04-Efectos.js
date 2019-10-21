$(document).ready(function () {
    /*
       $('#mostrar').hide();
   
       $('#mostrar').click(function () {
           $(this).hide();
           $('#ocultar').show();
           $('#caja').fadeIn('slow');
       });
   
       $('#ocultar').click(function () {
           $(this).hide();
           $('#mostrar').show();
           $('#caja').fadeOut('slow');
       });
   */
    $('#toggle').click(function () {
        $('#caja').slideToggle('fast');
    });
});