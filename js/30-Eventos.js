'use strict'

//Eventos del raton



function cambiarColor() {
    var bg = boton.style.background;
    if (bg == "green") {
        boton.style.background = "red";
    }
    else {
        boton.style.background = "green";
    }

    boton.style.padding = "10px";
    boton.style.border = "1px solid #ccc";

    return true;
}

var boton = document.querySelector("#boton");
boton.addEventListener('click', function () {
    cambiarColor();
});

//Mouse over
boton.addEventListener('mouseover', function () {
    boton.style.background = "yellow";
});

//Mouse out
boton.addEventListener('mouseout', function () {
    boton.style.background = "#ccc";
});


//Focus
var input = document.querySelector("#campoNombre");
input.addEventListener('focus', function () {
    boton.style.background = "#ccc";
    console.log("[Focus]Foco en el input");
});

//Blur
input.addEventListener('blur', function () {
    boton.style.background = "#ccc";
    console.log("[Blur]Fuera del input");
});

//keydown
input.addEventListener('keydown', function (event) {
    boton.style.background = "#ccc";
    console.log("[Keydown]Pulsando la tecla", String.fromCharCode(event.keyCode));
});

//Keypress
input.addEventListener('keypress', function (event) {
    boton.style.background = "#ccc";
    console.log("[Keypress]Tecla presionada", String.fromCharCode(event.keyCode));
});

//Keyup
input.addEventListener('keyup', function (event) {
    boton.style.background = "#ccc";
    console.log("[Keyup]Tecla soltada", String.fromCharCode(event.keyCode));
});
