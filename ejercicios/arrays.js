//EJERCICIO 1
/*let numeros = [];
let seguir = true;

let numeroMayor = 0;
let numeroMenor = 0;
let media = 0;

function esMayor() {
    for (let i = 0; i < numeros.length; i++) {
        let numeroActual = numeros[i];
        if (numeroActual >= numeros[0]) {
            numeroMayor = numeroActual;
        }
    }
}

function esMenor() {
    for (let i = 0; i < numeros.length; i++) {
        let numeroActual = numeros[i];
        if (numeroActual <= numeros[0]) {
            numeroMenor = numeroActual;
        }
    }
}

function laMedia() {
    for (const numero of numeros) {
        media += numero;
    }
    media = media / numeros.length;
}

function main() {
    while (seguir) {
        let numeroElegido = parseInt(prompt("Ingresa un número.\nIngresa 0 para mostrar resultados."));
        if (numeroElegido !== 0) {
            numeros.push(numeroElegido);
        }
        else {
            if (numeros.length < 2) {
                alert("Necesitas ingresar al menos dos números para obtener los resultados.")
            }
            else {
                esMayor();
                esMenor();
                laMedia();

                alert("El número mas alto es: " + numeroMayor + "\nEl número mas bajo es: " + numeroMenor + "\nLa media es: " + media);
            }
        }
    }
}

main();*/

