'use strict'

//funciuones anonimas

function sumame(numero1, numero2, sumaMuestra, sumaPorDos) {
    var sumar = numero1 + numero2;

    sumaMuestra(sumar);
    sumaPorDos(sumar);

    return sumar;
}

sumame(5, 7, dato => {
    console.log("La suma es : ", dato);
},
    dato => {
        console.log("La suma por 2 es: ", (dato * 2));
    });