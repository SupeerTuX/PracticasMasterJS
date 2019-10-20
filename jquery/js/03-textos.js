
$(document).ready(function () {

    reloadLinks();
    $('#addButton')
        .removeAttr('disabled')
        .click(function () {
            $('#menu').append('<li><a href="' + $("#addLink").val() + '"></a></li>');
            $("#addLink").val('');
            reloadLinks();
        });



});

function reloadLinks() {
    $('a').each(function () {
        var that = $(this);
        var enlace = that.attr("href");
        that.attr('target', '_blank');
        that.attr('target', '_blank');
        that.text(enlace);
    });
}