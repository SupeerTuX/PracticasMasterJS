'use strict'

//DOM

function cambiaColor(color) {
    caja.style.background = color;
}

//var caja = document.getElementById("miCaja");
var caja = document.querySelector("#miCaja");

caja.innerHTML = "Texto en la caja desde JS";
caja.style.background = "red";
caja.style.padding = "20px";
caja.style.color = 'white';

console.log(caja);