'use strict'

var categorias = ['Accion', 'Terror', 'Comedia'];
var peliculas = ['La verdad duele', 'La vida es bella', 'Gran torino'];
var lenguajes = ['C', 'C++', 'GO', 'PHP'];

peliculas.reverse();
console.log(peliculas);

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
var cadena = "texto1, texto2, texto3";
var cadenaArray = cadena.split(", ");
console.log(cadenaArray);
/*
for (let lenguaje in lenguajes) {
   console.log(lenguajes[lenguaje]);
}*/

var precios = [10, 20, 50, 80, 12];
//var busqueda = lenguajes.findIndex(lenguaje => lenguaje == "PHP");
var busqueda = precios.some(precio => precio < 10);

console.log(busqueda);