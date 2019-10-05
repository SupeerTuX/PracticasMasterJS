'use strict'

//Funciones

function calculadora(numero1, numero2) {
    console.log("Suma: " + (numero1 + numero2));
    console.log("Resta: " + (numero1 - numero2));
    console.log("Multiplicacion: " + (numero1 * numero2));
    console.log("Divicion: " + (numero1 / numero2));
    console.log("**************************************");

    //return "Hola soy calculadora!!";
}

//llamar a la funcion

for (let i = 0; i < 10; i++) {
    console.log(i);
    calculadora(i, 8);
}