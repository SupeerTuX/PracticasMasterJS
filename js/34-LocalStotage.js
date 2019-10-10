'use strict'

//Local storage

//Comprobar compatibilidad del navegador
if (typeof (Storage) !== 'undefined') {
    console.log("Local storage disponible");
} else {
    console.log("Incompatible con Local storage");
}

//Guardar datos 
localStorage.setItem("titulo", "Curso de symfony");


//recuperar elemento
console.log(localStorage.getItem("titulo"));
document.querySelector("#peliculas").innerHTML = localStorage.getItem("titulo");

//Guardar onjeto
var usuario = {
    nombre: 'Victor Robles',
    email: 'supertux@tuxdevelop.com',
    web: 'www.ditg.mx'
};

localStorage.setItem('usuario', JSON.stringify(usuario));

//Recuperar el objeto

var userJS = JSON.parse(localStorage.getItem('usuario'));
console.log(userJS);
document.querySelector('#peliculas').append(' ' + userJS.web);

