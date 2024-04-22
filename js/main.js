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
    respuestaPago = respuestaPago.toLowerCase(); //Transformación del input a minúsculas para que las siguientes comprobaciones sean efectivas
    if (respuestaPago.trim() === "pagar") { //Se utiliza el método trim() por si el usuario ingresa inintencionadamente espacios al querer pagar
        if (cliente.dinero >= totalAPagar) { //Si el dinero del cliente es igual o mayor al total a pagar
            alert("¡Listo! Tu compra se ha completado con exito. En breves te enviaremos un correo electronico con las claves de tus juegos.\n\n¡Gracias por confiar en nosotros! Esperamos verte pronto :)");
            comprando = false;
        }
        else { //Si el dinero del cliente es menor al total a pagar
            alert("¡Ups! No tienes el dinero suficiente para completar el pago.\nElimina productos de tu carrito e intentalo de nuevo.\n\n\nSe te redirigirá al panel de gestión de tu carrito.");
        }
    }
    else if (respuestaPago.trim() === "cancelar") { //Se utiliza el método trim() por si el usuario ingresa inintencionadamente espacios al querer cancelar
        mostrarCarrito();
    }
    else { //Si el input no es "pagar" ni "cancelar"
        alert("Se ha producido un error.\nPor favor, intentalo de nuevo.\n\nSe te redirigirá al panel de gestión de tu carrito.");
        mostrarCarrito();
    }
}

function mostrarCarrito() {
    let carritoEscrito = ""; //Instanciación de la variable que va a mostrarle al cliente los productos que contiene su carrito
    carrito.forEach((el) => { //Cada producto que haya en el carrito, será mostrado con nombre y precio
        carritoEscrito += "[$" + el.precio + "] " + el.titulo + "\n";
    })
    const totalAPagar = carrito.reduce((acc, el) => acc += el.precio, 0); //Suma de los precios de cada producto

    let respuestaCompra = parseInt(prompt("Este es tu carrito:\n" + carritoEscrito + "El total a pagar es: $" + totalAPagar + "\n\nIngresa 1 para proceder al pago.\nIngresa 2 para editar tu carrito.\nIngresa 3 para seguir comprando."));
    if (respuestaCompra === 1) { //Si el cliente ingresa 1 para proceder al pago
        pago(carritoEscrito, totalAPagar);
    }
    else if (respuestaCompra === 2) { //Si el cliente ingresa 2 para editar su carrito
        editarCarrito(carritoEscrito);
    }
    else if (respuestaCompra !== 3) { //Si el cliente ingresa otra cosa que no sea 3 (si es 3 se vovlerá al menú principal con la función mostrarJuegos())
        alert("Se ha producido un error.\nPor favor, intentalo de nuevo.\nSe te redirigirá al menú principal.");
    }
}

function editarCarrito(carritoEscrito) {
    let productoABorrar = prompt("Elige el juego que quieres eliminar de tu carrito.\n\n" + carritoEscrito + "\nIngresa 0 para cancelar.");
    if (productoABorrar.trim() !== "0") { //Se utiliza el método trim() por si el usuario ingresa inintencionadamente espacios al querer cancelar
        buscarJuegos(carrito, productoABorrar, eliminarDelCarrito);
    }
    else {
        mostrarCarrito();
    }
}

function agregarAlCarrito(juegosEncontrados) {
    const espacioCarrito = limiteCarrito - carrito.length; //Cálculo del espacio restante del carrito
    if (juegosEncontrados[0].disponibilidad) {
        const cantidadJuegos = parseInt(prompt("¿Cuantas unidades de este juego quieres agregar a tu carrito?\nTe quedan " + espacioCarrito + " espacios en tu carrito." + "\nIngresa 0 para cancelar."));
        if (cantidadJuegos > 1 && cantidadJuegos <= espacioCarrito) { //Si el cliente quiere agregar mas de un producto a su carrito, se mostrará el mensaje en plural
            for(let i = 1; i <= cantidadJuegos; i++) { //Se agrega el producto la cantidad de veces que el cliente ingresó
                carrito.push(juegosEncontrados[0]);
            }
            alert("Se han agregado " + cantidadJuegos + "x " + juegosEncontrados[0].titulo + " a tu carrito");
        }
        else if (cantidadJuegos === 1) { //Si el cliente solo quiere agregar un producto a su carrito, se mostrará el mensaje en singular
            carrito.push(juegosEncontrados[0]);
            alert("Se ha agregado " + juegosEncontrados[0].titulo + " a tu carrito");
        }
        else if (cantidadJuegos > espacioCarrito) { //Si la cantidad de juegos que el cliente quiere agregar a su carrito excede el limite
            alert("La cantidad de unidades que quieres agregar a tu carrito exceden su límite. Recuerda que tu carrito tiene un límite de " + limiteCarrito + " unidades.\nTe quedan " + espacioCarrito + " espacios.\n\nSe te redirigirá al menú principal.");
        }
        else if (cantidadJuegos !== 0) { //Si el cliente ingresa un número negativo u otro tipo de dato
            alert("Se ha producido un error.\nPor favor, intentalo de nuevo.\nSe te redirigirá al menú principal.");
        }
    }
    else {
        alert(juegosEncontrados[0].titulo + " no esta disponible en este momento.\nPor favor, intentalo mas tarde.");
    }
}

function eliminarDelCarrito(juegosEncontrados) {
    if (juegosEncontrados.length > 1) {
        const cantidadJuegos = parseInt(prompt("¿Cuantas unidades de este juego quieres eliminar de tu carrito?\nIngresa 0 para cancelar."));
        if (cantidadJuegos > 0 && cantidadJuegos <= juegosEncontrados.length) {
            for(let i = 1; i <= cantidadJuegos; i++) {
                const indexJuego = carrito.indexOf(juegosEncontrados[0]);
                carrito.splice(indexJuego, 1);
            }
            if (cantidadJuegos > 1) {
                alert("Se han eliminado " + "x" + cantidadJuegos + " " + juegosEncontrados[0].titulo + " de tu carrito.");
            }
            else {
                alert("Se ha eliminado " + juegosEncontrados[0].titulo + " de tu carrito.");
            }
        }
        else if (cantidadJuegos > juegosEncontrados.length) { //Si la cantidad de juegos que el cliente quiere eliminar de su carrito supera la cantidad real que tiene
            alert("La cantidad de juegos que quieres eliminar de tu carrito supera la cantidad que realmente tienes. Por favor, ingresa un valor numérico válido.\nSe te redirigirá al panel de gestión de tu carrito.");
        }
        else if (cantidadJuegos !== 0) { //Si el cliente ingresa un número negativo u otro tipo de dato
            alert("Debes ingresar un valor numérico positivo.\nPor favor, intentalo de nuevo.\nSe te redirigirá al panel de gestión de tu carrito.");
        }
    }
    else { //Si se encuentra un solo juego en el carrito se eliminará directamente sin preguntar la cantidad
        const indexJuego = carrito.indexOf(juegosEncontrados[0]);
        carrito.splice(indexJuego, 1);
        alert("Se ha eliminado " + juegosEncontrados[0].titulo + " de tu carrito.");
    }
    if (carrito.length > 0) { //Si al terminar, el carrito quedó vacío, no se mostrará, en el caso contrario, si se mostrará 
        mostrarCarrito();
    }
}

function buscarJuegos(array, juego, funcion) {
    juego = juego.toLowerCase(); //Transformación del input a minúsculas para que las siguientes comprobaciones sean efectivas
    const juegoEncontrado = array.filter((el) => el.titulo.toLowerCase() === juego); //Se busca el juego que coincida completamente con el input
    if (juegoEncontrado.length > 0) { //Si el input coincide completamente con algún producto
        funcion(juegoEncontrado); //Se llama a la función traída de mostrarJuegos() o editarCarrito()
    }
    else { //Si el input NO coincide completamente con ningún producto
        const juegosEncontrados = array.filter((el) => el.titulo.toLowerCase().includes(juego)); //Busqueda de los juegos que CONTENGAN el input
        if (juegosEncontrados.length > 0) { //Si algún producto CONTIENE el input
            let respuestaJuegoIncompleto = prompt("¿Te refieres a " + juegosEncontrados[0].titulo + "?\nResponde con SI o NO.");
            if (respuestaJuegoIncompleto.trim() !== "") {
                respuestaJuegoIncompleto = respuestaJuegoIncompleto.toLowerCase();
                if (respuestaJuegoIncompleto === "si") {
                    funcion(juegosEncontrados); //Se llama a la función traída de mostrarJuegos() o editarCarrito()
                }
                else if (respuestaJuegoIncompleto === "no") {
                    if (funcion === agregarAlCarrito) { //Si la función buscarJuegos() es llamada desde mostrarJuegos(), lo que significa que el cliente estaba AGREGANDO productos a su carrito
                        mostrarJuegos();
                    }
                    else { //Si la función buscarJuegos() es llamada desde editarCarrito(), lo que significa que el cliente estaba ELIMINANDO productos de su carrito
                        mostrarCarrito();
                    }
                }
                else { //Si el input no es "si" ni "no"
                    alert("Se ha producido un error. Por favor, intentalo de nuevo.\nSe te redirigirá al menú principal.");
                }
            }
            else { //Si el input esta vacío o formado solo por espacios
                alert("No has ingresado ninguna respuesta.\nPor favor, intentalo de nuevo escribiendo.\nSe te redirigirá al menú principal.");
            }
        }
        else { //Si ningún producto CONTIENE el input
            alert("Juego no encontrado. Por favor, intentalo de nuevo.\nSe te redirigirá al menú principal.");
        }
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
                    buscarJuegos(juegos, juegoElegido, agregarAlCarrito);
                }
            }
            else if (juegoElegido.trim() === "cart") {
                if (carrito.length > 0) { //Si el carrito contiene al menos 1 producto
                    mostrarCarrito();
                }
                else { //Si el carrito no tiene ningún producto
                    alert("Tu carrito esta vacío.");
                }
            }
            else if (juegoElegido.trim() === "esc") { // Si el cliente decide salir del sistema ingresando "ESC"
                alert("¡Gracias por visitar nuestra tienda!");
                comprando = false;
            }
        }
        else { //Si el input tiene menos de 3 caracteres
            alert("Has ingresado muy pocos caracteres.\nPor favor, intentalo de nuevo.\nSe te redirigirá al menú principal.");
        }
    }
    else { //Si el input esta vacío o formado solo por espacios
        alert("No has ingresado el título de ningún juego.\nPor favor, intentalo de nuevo.\nSe te redirigirá al menú principal.");
    }
}

while (comprando) {
    mostrarJuegos();
}
