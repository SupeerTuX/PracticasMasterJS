$(document).ready(function () {

    //Slider
    $('.bxslider').bxSlider({
        mode: 'fade',
        captions: false,
        slideWidth: 1200,
        responsive: true
    });

    //Posts
    var posts = [
        {
            title: 'Prieba de titulo1',
            date: 'Publicado el dia ' + moment().date() + ' de ' + moment().format("MMMM") + ' del ' + moment().format("YYYY"),
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris maximus blandit metus. Ut ante leo, tempor condimentum mollis ac, egestas non mauris. Aliquam erat volutpat. Duis fringilla tempus ligula id finibus. In cursus faucibus fringilla. Duis consectetur elit quis risus dignissim commodo. Nunc ut vestibulum quam. Proin turpis est, imperdiet vitae consectetur a, viverra in felis. Suspendisse elementum mattis faucibus. Aenean non egestas dolor, vel tincidunt nibh. Maecenas volutpat eget nisl sit amet ornare.'

        },
        {
            title: 'Prieba de titulo2',
            date: 'Publicado el dia ' + moment().date() + ' de ' + moment().format("MMMM") + ' del ' + moment().format("YYYY"),
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris maximus blandit metus. Ut ante leo, tempor condimentum mollis ac, egestas non mauris. Aliquam erat volutpat. Duis fringilla tempus ligula id finibus. In cursus faucibus fringilla. Duis consectetur elit quis risus dignissim commodo. Nunc ut vestibulum quam. Proin turpis est, imperdiet vitae consectetur a, viverra in felis. Suspendisse elementum mattis faucibus. Aenean non egestas dolor, vel tincidunt nibh. Maecenas volutpat eget nisl sit amet ornare.'

        },
        {
            title: 'Prieba de titulo3',
            date: 'Publicado el dia ' + moment().date() + ' de ' + moment().format("MMMM") + ' del ' + moment().format("YYYY"),
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris maximus blandit metus. Ut ante leo, tempor condimentum mollis ac, egestas non mauris. Aliquam erat volutpat. Duis fringilla tempus ligula id finibus. In cursus faucibus fringilla. Duis consectetur elit quis risus dignissim commodo. Nunc ut vestibulum quam. Proin turpis est, imperdiet vitae consectetur a, viverra in felis. Suspendisse elementum mattis faucibus. Aenean non egestas dolor, vel tincidunt nibh. Maecenas volutpat eget nisl sit amet ornare.'

        },
        {
            title: 'Prieba de titulo4',
            date: 'Publicado el dia ' + moment().date() + ' de ' + moment().format("MMMM") + ' del ' + moment().format("YYYY"),
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris maximus blandit metus. Ut ante leo, tempor condimentum mollis ac, egestas non mauris. Aliquam erat volutpat. Duis fringilla tempus ligula id finibus. In cursus faucibus fringilla. Duis consectetur elit quis risus dignissim commodo. Nunc ut vestibulum quam. Proin turpis est, imperdiet vitae consectetur a, viverra in felis. Suspendisse elementum mattis faucibus. Aenean non egestas dolor, vel tincidunt nibh. Maecenas volutpat eget nisl sit amet ornare.'

        },
        {
            title: 'Prieba de titulo5',
            date: 'Publicado el dia ' + moment().date() + ' de ' + moment().format("MMMM") + ' del ' + moment().format("YYYY"),
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris maximus blandit metus. Ut ante leo, tempor condimentum mollis ac, egestas non mauris. Aliquam erat volutpat. Duis fringilla tempus ligula id finibus. In cursus faucibus fringilla. Duis consectetur elit quis risus dignissim commodo. Nunc ut vestibulum quam. Proin turpis est, imperdiet vitae consectetur a, viverra in felis. Suspendisse elementum mattis faucibus. Aenean non egestas dolor, vel tincidunt nibh. Maecenas volutpat eget nisl sit amet ornare.'

        }

    ];

    posts.forEach((item, index) => {
        var post = `
        <article class="post">
                    <h2>${item.title}</h2>
                    <span class="date">${item.date}</span>
                    <p>${item.content}</p>
                    <a href="#" class="buttonMore">Leer mas</a>
                </article>
        `;

        $("#posts").append(post);

    });

    //Selector de tema
    var theme = $("#theme");
    $('#toGreen').click(function () {
        theme.attr("href", "css/green.css");
    });

    $('#toRed').click(function () {
        theme.attr("href", "css/red.css");
    });

    $('#toBlue').click(function () {
        theme.attr("href", "css/blue.css");
    });

    //Scroll Arriba
    $('.subir').click(function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, 500);

        return false;
    });

    //Login falso

    $('#login form').submit(function () {
        var formName = $("#formName").val();
        console.log(formName);
        localStorage.setItem("form_name", formName);
    });

    var formName = localStorage.getItem("form_name");
    if (formName != null) {
        var aboutParrafo = $("#about p");
        aboutParrafo.html("<br><hr><strong>Bienvenido, " + formName + "</strong>");
        aboutParrafo.append("<a href='#' id='logout'>Cerrar sesion</a>");
        $("#login").hide();

        $("#logout").click(function () {
            localStorage.clear();
            location.reload();
        });
    }

});