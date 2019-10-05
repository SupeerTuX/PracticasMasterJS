'use strict'

//Parametros opcionales

function calculadora(numero1, numero2, mostrar = false) {

    if (mostrar == false) {
        console.log("Suma: " + (numero1 + numero2));
        console.log("Resta: " + (numero1 - numero2));
        console.log("Multiplicacion: " + (numero1 * numero2));
        console.log("Divicion: " + (numero1 / numero2));
        console.log("**************************************");
    } else {
        document.write("Suma: " + (numero1 + numero2) + "<br/>");
        document.write("Resta: " + (numero1 - numero2) + "<br/>");
        document.write("Multiplicacion: " + (numero1 * numero2) + "<br/>");
        document.write("Divicion: " + (numero1 / numero2) + "<br/>");
        document.write("**************************************");
    }


    //return "Hola soy calculadora!!";
}


calculadora(1, 4);
calculadora(2, 5, true);