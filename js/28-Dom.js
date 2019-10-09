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


//conseguir elemento por su etiqueta 

var todosLosDiv = document.getElementsByTagName('div');
var seccion = document.querySelector("#miSection");
var hr = document.createElement("hr");

console.log(todosLosDiv);


for (var valor in todosLosDiv) {
    if (typeof todosLosDiv[valor].textContent == "string") {
        var parrafo = document.createElement("p");
        var texto = document.createTextNode(todosLosDiv[valor].textContent);
        parrafo.append(texto);
        seccion.append(parrafo);
    }
}

seccion.append(hr);

//conseguir elementos por su clase
var divsRojos = document.getElementsByClassName('rojo');
var divsAmarillo = document.getElementsByClassName('amarillo');

divsAmarillo[0].style.background = "yellow";


for (let div in divsRojos) {
    if (divsRojos[div].className == "rojo") {
        divsRojos[div].style.background = "red";
    }
}

