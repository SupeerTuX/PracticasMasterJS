'use strict'

//Arrays, arreglos, matrices

var nombre = "Victor Robles";
var nombres = ["Victor Robles", "Juan Lopez", "Manolo Garcia", "Jose Martin", 52, true];

var lenguajes = new Array("PHP", "JS", "Go", "Java");

/*

var elemento = parseInt(prompt("Que elemento del array quieres??", 0));

if (elemento >= nombres.length) {
    alert("Introduce el numero correcto menor que " + nombres.length)
}
else {
    alert(nombres[elemento]);
}
*/

document.write("<h1>Lenguajes de programacion del 2018 </h1>");
document.write("<ul>");
for (let index = 0; index < lenguajes.length; index++) {
    document.write("<li>" + lenguajes[index] + "</li>");
}
document.write("</ul>");

