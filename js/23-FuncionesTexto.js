'use strict'

//Trandormacion de textos

var numero = 444;
var texto1 = "Bienvenido al curso de JavaScript";
var texto2 = "es muy buen curso";

var dato = numero.toString();
dato = texto1.toUpperCase();
console.log(dato);

//calcular longitud

var nombre = "Super TuX";
console.log(nombre.length);

//concatenar
//var textoTotal = texto1 + " " + texto2;
var textoTotal = texto1.concat(" " + texto2);
console.log(textoTotal);