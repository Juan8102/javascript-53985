//EJERCICIO 1
/* const listaNumeros = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];

const todosLosNumeros = listaNumeros.map((el) => el);

alert(todosLosNumeros); */

//EJERCICIO 2
/*const listaPersonas = [
    {nombre: "Matias", genero: "M", edad: 25 },
    {nombre: "Fernanda", genero: "F", edad: 27 },
    {nombre: "Federico", genero: "M", edad: 32 },
    {nombre: "Camila", genero: "F", edad: 12 },
    {nombre: "Gabriela", genero: "F", edad: 42 },
];

const personasFemeninas = listaPersonas.filter((el) => el.genero === "F");

let mediaEdad = 0;
personasFemeninas.forEach((el) => {
    mediaEdad += el.edad;
});
mediaEdad = mediaEdad / personasFemeninas.length;*/

//EJERCICIO 3
/*const letras = ["a", "a", "d", "a", "f", "a", "g", "d", "g", "a", "g", "d"];

function encontrarLetras(arr, letra) {
    const letrasEncontradas = arr.filter((el) => el === letra);
    console.log("Hay " + letrasEncontradas.length + " letras " + '"' + letra + '"');
}

encontrarLetras(letras, "a");*/

//EJERCICIO 4
/*const numeros = [1, -4, 12, 0, -3, 29, -150];
const numerosPositivos = numeros.filter((el) => el > 0);

const totalPositivos = numerosPositivos.reduce((acc, el) => {
    return acc + el;
}, 0)
console.log(totalPositivos);*/

//EJERCICIO 5
/*const productos = [
    {nombre: "Arroz", precio: 20},
    {nombre: "Fideos", precio: 15},
    {nombre: "Tomate", precio: 5}
];

productos.forEach((el) => el.precio = el.precio * 1.15);

console.log(productos);*/

//EJERCICIO 6
/*const poblaciones = [
    {pais: "Argentina", provincia: "Santa Fe", poblacion: 1000},
    {pais: "Argentina", provincia: "Córdoba", poblacion: 3500},
    {pais: "Argentina", provincia: "Buenos Aires", poblacion: 2000},
    {pais: "España", provincia: "Cataluña", poblacion: 5000},
    {pais: "España", provincia: "Valencia", poblacion: 2500},
    {pais: "España", provincia: "Madrid", poblacion: 3000},
];

//PROVINCIAS ARGENTINAS Y SU ORDENADO DE MENOR A MAYOR
const provinciasArgentinas = poblaciones.filter((el) => el.pais === "Argentina");
const provinciasArgentinasOrdenadas = provinciasArgentinas.sort((a, b) => a.poblacion - b.poblacion);

//PROVINCIAS ESPAÑOLAS Y SU ORDENADO DE MENOR A MAYOR
const provinciasEspanolas = poblaciones.filter((el) => el.pais === "España");
const provinciasEspanolasOrdenadas = provinciasEspanolas.sort((a, b) => a.poblacion - b.poblacion);

//POBLACIÓN TOTAL DE ARGENTINA
const poblacionTotalArgentina = provinciasArgentinas.reduce((acc, el) => acc + el.poblacion, 0)
console.log("Argentina tiene una población total de: " + poblacionTotalArgentina);

//PROVINCIAS ARGENTINAS CON MAS DE 1500 HABITANTES
const provinciasArgentinasPoblacionMas1500 = provinciasArgentinas.filter((el) => el.poblacion > 1500);
console.log(provinciasArgentinasPoblacionMas1500);

//PROVINCIAS ESPAÑOLAS CON MAS DE 4000 HABITANTES
const provinciasEspanolasPoblacionMas4000 = provinciasEspanolas.filter((el) => el.poblacion > 4000);
console.log(provinciasEspanolasPoblacionMas4000);

//PROVINCIA ARGENTINA MAS POBLADA
const provinciaArgentinaMasPoblada = provinciasArgentinas[provinciasArgentinas.length - 1];
console.log(provinciaArgentinaMasPoblada.provincia);

//PROVINCIA ESPAÑOLA MAS POBLADA
const provinciaEspanolaMasPoblada = provinciasEspanolas[provinciasEspanolas.length - 1];
console.log(provinciaEspanolaMasPoblada.provincia);*/

//EJERCICIO 7
/*const palabras = ['casa', 'perro', 'gato', 'elefante', "ratón", "lata"]

const palabrasMas5 = palabras.filter((el) => el.length >= 5);
console.log(palabrasMas5)*/

//EJERCICIO 8
/*const personas = [
    {nombre: 'Juan', apellido: "Fernandez", edad: 30},
    {nombre: 'María', apellido: "Gomez", edad: 25},
    {nombre: 'Pedro', apellido: "Rodriguez", edad: 35},
    {nombre: 'Tomas', apellido: "Ramirez", edad: 20},
    {nombre: 'Matias', apellido: "Mendez", edad: 40},
];

const ordenarPersonas = ((arr, att) => {
    arr.sort((a, b) => {
        if (a[att] > b[att]) {
            return 1;
        }
        else if (a[att] < b[att]) {
            return -1;
        }

        return 0;
    });
    console.log(personas);
});

const ordenarPersonasPorEdad = ordenarPersonas(personas, "edad");*/