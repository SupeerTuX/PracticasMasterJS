'use strict'

var categorias = ['Accion', 'Terror', 'Comedia'];
var peliculas = ['La verdad duele', 'La vida es bella', 'Gran torino'];

var cine = [categorias, peliculas];

/*
var elemento = "";
do {
    elemento = prompt("Introduce tu pelicula: ");
    peliculas.push(elemento);
} while (elemento != "ACABAR");

peliculas.pop();
console.log(peliculas);
*/

var index = peliculas.indexOf('Gran torino');

if (index > -1) {
    peliculas.splice(index, 1);
}

var peliculasStr = peliculas.join();
console.log(peliculasStr);