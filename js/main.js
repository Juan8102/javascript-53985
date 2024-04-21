const juegos = [
    /* {titulo: "", precio: 0, stock: 0, disponibilidad: true}, */
    {titulo: "Astroneer",              precio: 5.99,  stock: 20, disponibilidad: true},
    {titulo: "Fallout 4",              precio: 11.99, stock: 17, disponibilidad: true},
    {titulo: "Helldivers II",          precio: 39.99, stock: 31, disponibilidad: false},
    {titulo: "Demonologist",           precio: 7.99,  stock: 35, disponibilidad: true},
    {titulo: "Resident Evil 7",        precio: 19.99, stock: 22, disponibilidad: true},
    /*{titulo: "Back 4 Blood",           precio: 30,    stock: 14, disponibilidad: true},
    {titulo: "Red Dead Redemption 2",  precio: 69.99, stock: 28, disponibilidad: true},
    {titulo: "Baldur's Gate 3",        precio: 34.99, stock: 20, disponibilidad: true},
    {titulo: "Far Cry 5",              precio: 47.99, stock: 23, disponibilidad: false},
    {titulo: "Resident Evil 2",        precio: 29.99, stock: 32, disponibilidad: true},
    {titulo: "The Mortuary Assistant", precio: 12.49, stock: 16, disponibilidad: true},
    {titulo: "Fallout: New Vegas",     precio: 5.99,  stock: 12, disponibilidad: true},
    {titulo: "Resident Evil Village",  precio: 29.99, stock: 46, disponibilidad: false},
    {titulo: "Content Warning",        precio: 4.49,  stock: 35, disponibilidad: true},
    {titulo: "Hogwarts Legacy",        precio: 30,    stock: 11, disponibilidad: true},
    {titulo: "Lethal Company",         precio: 5.79,  stock: 47, disponibilidad: true},
    {titulo: "Cyberpunk 2077",         precio: 44.99, stock: 19, disponibilidad: true},
    {titulo: "Fallout 76",             precio: 4.79,  stock: 24, disponibilidad: true},
    {titulo: "Hunt: Showdown",         precio: 18.99, stock: 45, disponibilidad: false},
    {titulo: "Resident Evil 4",        precio: 29.99, stock: 36, disponibilidad: true},
    {titulo: "Buckshot Roulette",      precio: 1.49,  stock: 12, disponibilidad: true},
    {titulo: "Sons Of The Forest",     precio: 14.99, stock: 18, disponibilidad: true},
    {titulo: "Forza Horizon 5",        precio: 32.78, stock: 51, disponibilidad: false},
    {titulo: "Far Cry 6",              precio: 47.99, stock: 37, disponibilidad: true},
    {titulo: "Detroit: Become Human",  precio: 31.99, stock: 44, disponibilidad: true},
    {titulo: "DOOM Eternal",           precio: 23.99, stock: 11, disponibilidad: true},
    {titulo: "Project Zomboid",        precio: 10.49, stock: 28, disponibilidad: false},
    {titulo: "Metro Exodus",           precio: 22.99, stock: 33, disponibilidad: true},
    {titulo: "Shadows of Doubt",       precio: 9.99,  stock: 31, disponibilidad: true},
    {titulo: "It Takes Two",           precio: 39.99, stock: 18, disponibilidad: true},
    {titulo: "Resident Evil 3",        precio: 29.99, stock: 21, disponibilidad: true},*/
];
const limiteCarrito = 5;
let carrito = [];
let comprando = true;

//Simulación de clientes
class Cliente {
    constructor(nombre, apellido, dinero) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.dinero = dinero;
    }
}

//Elegí el tuyo ;) (solo uno a la vez)
const cliente = new Cliente("Lucas", "Lopez", 47);
//const cliente = new Cliente("Rodrigo", "Rio", 60);

function pago(carritoEscrito, totalAPagar) {
    let respuestaPago = prompt("¡Hola " + cliente.nombre + " " + cliente.apellido + "!\n\nAl confirmar tu compra recibirás:\n" + carritoEscrito + '\nIngresa la palabra "PAGAR" para confirmar el pago de $' + totalAPagar + '\nIngresa la palabra "CANCELAR" para volver al menú principal');
    respuestaPago = respuestaPago.toLowerCase()
    if (respuestaPago === "pagar") {
        if (cliente.dinero < totalAPagar) {
            alert("¡Ups! No tienes el dinero suficiente para completar el pago.\nElimina productos de tu carrito e intentalo de nuevo.");
        }
        else {
            alert("¡Listo! Tu compra se ha completado con exito. En breves te enviaremos un correo electronico con las claves de tus juegos.\n\n¡Gracias por confiar en nosotros! Esperamos verte pronto :)")
            comprando = false;
        }
    }
    else if (respuestaPago === "cancelar") {
        mostrarCarrito();
    }
    else {
        alert("Se ha producido un error.\nPor favor, intentalo de nuevo.");
        mostrarCarrito();
    }
}

function agregarAlCarrito(juegos) {
    const espacioCarrito = limiteCarrito - carrito.length; //Cálculo del espacio restante del carrito
    const cantidadJuegos = parseInt(prompt("¿Cuantas unidades de este juego quieres agregar a tu carrito?\nTe quedan " + espacioCarrito + " espacios en tu carrito." + "\nIngresa 0 para cancelar."))
    if (cantidadJuegos > 1 && cantidadJuegos <= espacioCarrito) { //Si el cliente quiere agregar mas de un producto a su carrito, se mostrará el mensaje en plural
        for(let i = 1; i <= cantidadJuegos; i++) {
            carrito.push(juegos[0]);
        }
        alert("Se han agregado " + cantidadJuegos + "x " + juegos[0].titulo + " a tu carrito")
    }
    else if (cantidadJuegos === 1) { //Si el cliente solo quiere agregar un producto a su carrito, se mostrará el mensaje en singular
        carrito.push(juegos[0]);
        alert("Se ha agregado " + juegos[0].titulo + " a tu carrito")
    }
    else if (cantidadJuegos > espacioCarrito) { //Si la cantidad de juegos que el cliente quiere agregar a su carrito excede el limite
        alert("La cantidad de unidades que quieres agregar a tu carrito exceden su límite. Recuerda que tu carrito tiene un límite de " + limiteCarrito + " unidades.\nTe quedan " + espacioCarrito + " espacios.")
    }
    else if (cantidadJuegos !== 0) { //Si el cliente ingresa un número negativo u otro tipo de dato
        alert("Se ha producido un error.\nPor favor, intentalo de nuevo.");
    }
}

function eliminarDelCarrito(juegos) {
    if (juegos.length > 1) {
        const cantidadJuegos = parseInt(prompt("¿Cuantas unidades de este juego quieres eliminar de tu carrito?\nIngresa 0 para cancelar."));
        if (cantidadJuegos > 0 && cantidadJuegos <= juegos.length) {
            for(let i = 1; i <= cantidadJuegos; i++) {
                const indexJuego = carrito.indexOf(juegos[i]);
                carrito.splice(indexJuego, 1);
            }
            if (cantidadJuegos > 1) {
                alert("Se han eliminado " + "x" + cantidadJuegos + " " + juegos[0].titulo + " de tu carrito.");
            }
            else {
                alert("Se ha eliminado " + juegos[0].titulo + " de tu carrito.");
            }
        }
        else if (cantidadJuegos > juegos.length) {
            alert("La cantidad de juegos que quieres eliminar de tu carrito supera la cantidad que realmente tienes. Por favor, ingresa un valor numérico válido.");
            mostrarCarrito();
        }
        else if (cantidadJuegos === 0) {
            mostrarCarrito();
        }
        else {
            alert("Debes ingresar un valor numérico positivo.\nPor favor, intentalo de nuevo.");
            mostrarCarrito();
        }
    }
    else {
        const indexJuego = carrito.indexOf(juegos[0]);
        carrito.splice(indexJuego, 1);
        alert("Se ha eliminado " + juegos[0].titulo + " de tu carrito.");
    }
    if (carrito.length > 0) {
        mostrarCarrito();
    }
}

function editarCarrito(carritoEscrito) {
    let productoABorrar = prompt("Elige el juego que quieres eliminar de tu carrito.\n\n" + carritoEscrito + "\nIngresa 0 para cancelar.");
    if (productoABorrar !== "0") {
        buscarJuegos(carrito, productoABorrar, "eliminarDelCarrito");
    }
    else {
        mostrarCarrito();
    }
}

function mostrarCarrito() {
    let carritoEscrito = ""; //Instanciación de la variable que va a mostrarle al cliente los productos que contiene su carrito
    carrito.forEach((el) => {
        carritoEscrito += "[$" + el.precio + "] " + el.titulo + "\n";
    })
    const totalAPagar = carrito.reduce((acc, el) => acc += el.precio, 0);

    let respuestaCompra = parseInt(prompt("Este es tu carrito:\n" + carritoEscrito + "El total a pagar es: $" + totalAPagar + "\n\nIngresa 1 para proceder al pago.\nIngresa 2 para editar tu carrito.\nIngresa 3 para seguir comprando."));
    if (respuestaCompra === 1) {
        pago(carritoEscrito, totalAPagar);
    }
    else if (respuestaCompra === 2) {
        editarCarrito(carritoEscrito);
    }
    else if (respuestaCompra !== 3) {
        alert("Se ha producido un error.\nPor favor, intentalo de nuevo.");
    }
}

function mostrarJuegos() {
    const espacioCarrito = limiteCarrito - carrito.length; //Cálculo del espacio restante del carrito
    let mostrarJuegos = ""; //Instanciación de la variable que va a mostrarle al cliente los productos
    juegos.forEach((el) => {
        if (el.disponibilidad) { //Si el producto esta disponible, se mostrarán todas sus propiedades
            mostrarJuegos += "[$" + el.precio + "] " + el.titulo + " (stock: " + el.stock + ")\n";
        }
        else { //Si el producto NO esta disponible, se mostrarán todas sus propiedades excepto el stock, el cuál será reemplazado con el texto "no disponible"
            mostrarJuegos += "[$" + el.precio + "] " + el.titulo + " (no disponible)\n";
        }
    })

    let juegoElegido = prompt("Ingresa el título del juego que quieres agregar a tu carrito.\nEl límite de tu carrito es de 5 unidades.\n\nProductos:\n" + mostrarJuegos + '\nIngresa "CART" para gestionar tu carrito.\nIngresa "ESC" para salir del sistema.');
    if (juegoElegido.trim() !== "") { //Si el input no esta vacío o formado solo por espacios
        if (juegoElegido.length >= 3) { //Si el input tiene al menos 3 caracteres
            juegoElegido = juegoElegido.toLowerCase(); //Transformación del input a minúsculas para que las siguientes comprobaciones sean efectivas
            if (juegoElegido !== "cart" && juegoElegido !== "esc") {
                if (espacioCarrito === 0) { //Si al cliente no le queda espacio en su carrito, no se hará la busqueda del producto
                    alert("Has alcanzado el límite de productos en tu carrito.\nElimina algún producto de tu carrito para poder agregar otro.");
                }
                else {
                    buscarJuegos(juegos, juegoElegido, "agregarAlCarrito");
                }
            }
            else if (juegoElegido.trim() === "cart") {
                if (carrito.length > 0) { //Si el carrito contiene al menos 1 producto
                    mostrarCarrito();
                }
                else { //
                    alert("Tu carrito esta vacío :(");
                }
            }
            else if (juegoElegido.trim() === "esc") { // Si el cliente decide salir del sistema ingresando "esc"
                alert("¡Gracias por visitar nuestra tienda!");
                comprando = false;
            }
        }
        else { //Si el input tiene menos de 3 caracteres
            alert("Has ingresado muy pocos caracteres.\nPor favor, intentalo de nuevo.");
        }
    }
    else { //Si el input esta vacío o formado solo por espacios
        alert("No has ingresado el título de ningún juego.\nPor favor, intentalo de nuevo.");
    }
}

function buscarJuegos(array, juego, funcion) {
    juego = juego.toLowerCase(); //Transformación del input a minúsculas para que las siguientes comprobaciones sean efectivas
    const juegoEncontrado = array.filter((el) => el.titulo.toLowerCase() === juego);
    if (juegoEncontrado.length > 0) { //Si el input coincide completamente con algún producto
        if (funcion === "agregarAlCarrito") {
            verificarDisponibilidad(juegoEncontrado);
        }
        else {
            eliminarDelCarrito(juegoEncontrado);
        }
    }
    else { //Si el input NO coincide completamente con algún producto
        const juegosEncontrados = array.filter((el) => el.titulo.toLowerCase().includes(juego)); //Busqueda de todos los juegos que CONTENGAN el input
        if (juegosEncontrados.length > 0) { //Si algún producto CONTIENE el input
            let respuestaJuegoIncompleto = prompt("¿Te refieres a " + juegosEncontrados[0].titulo + "?\nResponde con SI o NO.");
            respuestaJuegoIncompleto = respuestaJuegoIncompleto.toLowerCase();
            if (respuestaJuegoIncompleto === "si") {
                if (funcion === "agregarAlCarrito") {
                    verificarDisponibilidad(juegosEncontrados);
                }
                else {
                    eliminarDelCarrito(juegosEncontrados);
                }
            }
            else if (respuestaJuegoIncompleto === "no") {
                if (funcion === "agregarAlCarrito") {
                    mostrarJuegos();
                }
                else {
                    mostrarCarrito();
                }
            }
            else { //Si el input no es "si" ni "no"
                alert("Se ha producido un error. Por favor, intentalo de nuevo.");
            }
        }
        else { //Si ningún producto CONTIENE el input
            alert("Juego no encontrado. Por favor, intentalo de nuevo.");
        }
    }
}

function verificarDisponibilidad(juegos) {
    if (juegos[0].disponibilidad) {
        agregarAlCarrito(juegos);
    }
    else {
        alert(juegos[0].titulo + " no esta disponible en este momento.\nPor favor, intentalo mas tarde.");
    }
}

while (comprando) {
    mostrarJuegos();
}