'use strict'

//JSON

var pelicula = {
    titulo: 'Batmas vs Superman',
    year: 2017,
    pais: 'Estados Unidos'
};

var peliculas = [
    { titulo: "La verdad duele", year: 2016, pais: "Francia" },
    pelicula
];

var cajaPeliculas = document.querySelector("#peliculas");
for (let i in peliculas) {
    var p = document.createElement("p");
    p.append(peliculas[i].titulo + " - " + peliculas[i].year)
    cajaPeliculas.append(p);
}
console.log(peliculas);