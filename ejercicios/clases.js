// EJERCICIO 1
/*class Cancion {
    constructor(titulo, autor) {
        this.titulo = titulo;
        this.autor = autor;
    }

    mostrarTitulo(){
        alert(this.titulo);
    }

    mostrarAutor(){
        alert(this.autor);
    }
}

const cancion1 = new Cancion("Blinding Lights", "The Weekend");
const cancion2 = new Cancion("Beat it", "Michael Jackson");
const cancion3 = new Cancion("Natural", "Imagine Dragons");

cancion1.mostrarTitulo();
cancion1.mostrarAutor();*/

// EJERCICIO 2
/*class Persona{
    constructor(nombre, edad, dni) {
        this.nombre = nombre;
        this.edad = edad;
        this.dni = dni;
    }

    mostrar(){
        alert("Nombre: " + this.nombre + "\nEdad: " + this.edad + "\nDNI: " + this.dni)
    }

    esMayor(){
        if (this.edad >= 18) {
            return true;
        }
        else {
            return false;
        }
    }
}

const persona1 = new Persona("Lucas", 18, 48484393)
const persona2 = new Persona("Martin", 23, 28549254)
const persona3 = new Persona("Lucas", 17, 48367215)

//Persona 1
persona1.mostrar()
alert(persona1.esMayor())

//Persona 2
persona2.mostrar()
alert(persona2.esMayor())

//Persona 3
persona3.mostrar()
alert(persona3.esMayor())*/

//EJERCICIO 3
/*class Cuenta{
    constructor(titular, cantidad) {
        this.titular = titular;
        this.cantidad = cantidad;
    }

    mostrar(){
        alert("Titular: " + this.titular + "\n" + "Cantidad: " + this.cantidad)
    }

    ingresar(cantidad){
        if (cantidad > 0) {
            this.cantidad += cantidad;
            alert("Has ingresado $" + cantidad + " a tu cuenta.")
        }
    }

    retirar(cantidad){
        if (cantidad > 0 && cantidad <= this.cantidad) {
            this.cantidad -= cantidad;
            alert("Has retirado $" + cantidad + " de tu cuenta.")
        }
    }
}

const titular1 = new Cuenta("Juan", 100000)

titular1.ingresar(10000);
titular1.retirar(5000);
titular1.mostrar();*/

//EJERCICIO 4
/**/
