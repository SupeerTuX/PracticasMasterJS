'use strict'

//Condicional IF

var edad = 19;
var nombre = 'David Suarez';


if (edad >= 18) {
    console.log(nombre + " tiene " + edad + " años, es mayor de edad");

    if (edad <= 33) {
        console.log("Todavia eres millenial");
    }
    else if (edad >= 70) {
        console.log("Eres anciano");
    }
    else {
        console.log("Ya no eres millenial");
    }
}
else {
    console.log(nombre + " tiene " + edad + " años, es menor de edad");
}
