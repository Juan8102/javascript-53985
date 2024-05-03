const productos = [
    {image: "",                        titulo: "Astroneer",              categoria1: "Espacio",          categoria2: "Mundo abierto",          categoria3: "Multijugador",  precio: 5.99,  stock: 20},
    {image: "",                        titulo: "Fallout 4",              categoria1: "Mundo abierto",    categoria2: "Posapocalípticos",       categoria3: "Supervivencia", precio: 11.99, stock: 17},
    {image: "",                        titulo: "Helldivers II",          categoria1: "PvE",              categoria2: "Acción",                 categoria3: "Cooperativo",   precio: 39.99, stock: 31},
    {image: "",                        titulo: "Demonologist",           categoria1: "Terror",           categoria2: "Misterio",               categoria3: "Multijugador",  precio: 7.99,  stock: 35},
    {image: "",                        titulo: "Resident Evil 7",        categoria1: "Terror",           categoria2: "Acción",                 categoria3: "Zombis",        precio: 19.99, stock: 22},
    {image: "",                        titulo: "Back 4 Blood",           categoria1: "Zombis",           categoria2: "Gore",                   categoria3: "Multijugador",  precio: 29.99, stock: 14},
    {image: "media/products/rdr2.png", titulo: "Red Dead Redemption 2",  categoria1: "Buena trama",      categoria2: "Mundo abierto",          categoria3: "Viejo oeste",   precio: 69.99, stock: 28},
    {image: "",                        titulo: "Baldur's Gate 3",        categoria1: "Rol",              categoria2: "Decisiones importantes", categoria3: "Buena trama",   precio: 34.99, stock: 20},
    {image: "",                        titulo: "Far Cry 5",              categoria1: "Mundo abierto",    categoria2: "FPS",                    categoria3: "Cooperativo",   precio: 47.99, stock: 23},
    {image: "",                        titulo: "Resident Evil 2",        categoria1: "Terror",           categoria2: "Acción",                 categoria3: "Zombis",        precio: 29.99, stock: 32},
    {image: "",                        titulo: "The Mortuary Assistant", categoria1: "Terror",           categoria2: "Misterio",               categoria3: "Un jugador",    precio: 12.49, stock: 16},
    {image: "",                        titulo: "Fallout: New Vegas",     categoria1: "Mundo abierto",    categoria2: "Posapocalípticos",       categoria3: "Supervivencia", precio: 5.99,  stock: 12},
    {image: "",                        titulo: "Resident Evil Village",  categoria1: "Terror",           categoria2: "Acción",                 categoria3: "Zombis",        precio: 29.99, stock: 46},
    {image: "",                        titulo: "Content Warning",        categoria1: "Terror",           categoria2: "Exploración",            categoria3: "Multijugador",  precio: 4.49,  stock: 35},
    {image: "",                        titulo: "Hogwarts Legacy",        categoria1: "Fantasía",         categoria2: "Mundo abierto",          categoria3: "Un jugador",    precio: 29.99, stock: 11},
    {image: "",                        titulo: "Lethal Company",         categoria1: "Terror",           categoria2: "PvE",                    categoria3: "Multijugador",  precio: 5.79,  stock: 47},
    {image: "",                        titulo: "Cyberpunk 2077",         categoria1: "Futurista",        categoria2: "Mundo abierto",          categoria3: "Un jugador",    precio: 44.99, stock: 19},
    {image: "",                        titulo: "Fallout 76",             categoria1: "Mundo abierto",    categoria2: "Posapocalípticos",       categoria3: "Supervivencia", precio: 4.79,  stock: 24},
    {image: "",                        titulo: "Hunt: Showdown",         categoria1: "Viejo oeste",      categoria2: "PvP",                    categoria3: "PvE",           precio: 18.99, stock: 45},
    {image: "",                        titulo: "Resident Evil 4 (2005)", categoria1: "Terror",           categoria2: "Acción",                 categoria3: "Zombis",        precio: 29.99, stock: 36},
    {image: "",                        titulo: "Buckshot Roulette",      categoria1: "Suspenso",         categoria2: "Estrategia",             categoria3: "Apuestas",      precio: 1.49,  stock: 12},
    {image: "",                        titulo: "Sons Of The Forest",     categoria1: "Terror",           categoria2: "Supervivencia",          categoria3: "Mundo abierto", precio: 14.99, stock: 18},
    {image: "",                        titulo: "Far Cry 6",              categoria1: "Mundo abierto",    categoria2: "FPS",                    categoria3: "Cooperativo",   precio: 47.99, stock: 37},
    {image: "",                        titulo: "Detroit: Become Human",  categoria1: "Futurista",        categoria2: "Decisiones importantes", categoria3: "Un jugador",    precio: 31.99, stock: 44},
    {image: "",                        titulo: "Resident Evil 4",        categoria1: "Terror",           categoria2: "Acción",                 categoria3: "Zombis",        precio: 29.99, stock: 26},
    {image: "",                        titulo: "DOOM Eternal",           categoria1: "Gore",             categoria2: "Acción",                 categoria3: "Buena trama",   precio: 23.99, stock: 11},
    {image: "",                        titulo: "Project Zomboid",        categoria1: "Zombis",           categoria2: "Realista",               categoria3: "Mundo abierto", precio: 10.49, stock: 28},
    {image: "",                        titulo: "Metro Exodus",           categoria1: "Posapocalípticos", categoria2: "Acción",                 categoria3: "Un jugador",    precio: 22.99, stock: 33},
    {image: "",                        titulo: "Shadows of Doubt",       categoria1: "Detectives",       categoria2: "Cyberpunk",              categoria3: "Puzzles",       precio: 9.99,  stock: 31},
    {image: "",                        titulo: "It Takes Two",           categoria1: "Cooperativo",      categoria2: "Buena trama",            categoria3: "Plataformas",   precio: 39.99, stock: 18},
    {image: "",                        titulo: "Resident Evil 3",        categoria1: "Terror",           categoria2: "Acción",                 categoria3: "Zombis",        precio: 29.99, stock: 21},
    {image: "",                        titulo: "Balatro",                categoria1: "Juegos de cartas", categoria2: "Estrategia",             categoria3: "Un jugador",    precio: 5.99,  stock: 29},
];

// Carrito
let carrito = [];
const indicadorCantidadJuegos = document.getElementById("cart__quantity__text");
if (localStorage.carrito !== undefined) {
    let carritoLS = JSON.parse(localStorage.carrito);
    carrito = carritoLS;
    indicadorCantidadJuegos.innerText = `${carrito.length}`;
}

//Variables
const contenedorCarrito = document.getElementById("cart__sidebar__container");
const contenedorItemsCarrito = document.getElementById("cart__sidebar__items__container");

const scrollCuerpo = document.getElementById("body");
const overlay = document.getElementById("cart__sidebar__overlay");
const botonMostrarCarrito = document.getElementById("show__cart__button");
const botonCerrarCarrito = document.getElementById("close__cart__button");
const botonVaciarCarrito = document.getElementById("empty__cart__button");

// Eventos
botonVaciarCarrito.addEventListener("click", vaciarCarrito);
botonMostrarCarrito.addEventListener("click", () => verCarrito(1));
botonCerrarCarrito.addEventListener("click", () => verCarrito(2));
overlay.addEventListener("click", () => verCarrito(3));

function verCarrito(action) {
    let claseContenedorCarrito;
    let claseScrollCuerpo;
    let claseOverlay;
    if (action === 1) {
        claseContenedorCarrito = "shown";
        claseScrollCuerpo = "noscroll";
        claseOverlay = "overlay";
    }
    else {
        claseContenedorCarrito = "closed";   
        claseScrollCuerpo = "scroll";
        claseOverlay = "no-overlay";
    }
    contenedorCarrito.className = claseContenedorCarrito;
    scrollCuerpo.className = claseScrollCuerpo;
    overlay.className = claseOverlay;
    renderizarCarrito();
}

function renderizarCarrito() {
    contenedorItemsCarrito.innerHTML = "";
    for (const producto of carrito) {
        const div = document.createElement("div");
        div.id = "cart__item";

        const imgDiv = document.createElement("div");
        imgDiv.id = "cart__img";

        let image;
        if (producto.image !== "") {
            const img = document.createElement("img");
            img.setAttribute("src", `${producto.image}`);

            imgDiv.append(img);
            image = imgDiv;
        }
        else {
            const p = document.createElement("p");
            p.id = "cart__img__replace__text";
            p.innerText = "Image not found"

            imgDiv.append(p);

            image = imgDiv;
        }

        const itemsDiv = document.createElement("div");
        itemsDiv.id = "cart__item__texts";

        const h3 = document.createElement("h3");
        h3.innerText = producto.titulo;
        h3.className = "cart__item__text";
        
        const h4 = document.createElement("h4");
        h4.innerText = `$${producto.precio}`;
        h4.className = "cart__item__text";

        const h42 = document.createElement("p");
        h42.innerText = `Quantity: ${producto.stock}`;
        h42.className = "cart__item__text";

        itemsDiv.append(h3, h4, h42);

        const imgButton = document.createElement("img");
        imgButton.id = "cart__delete__item__button";
        imgButton.setAttribute("src", "media/trash_can.png");
        imgButton.addEventListener("click", () => {
            eliminarDelCarrito(producto);
        })

        div.append(image, itemsDiv, imgButton);
        contenedorItemsCarrito.append(div);
    }
}

function agregarAlCarrito(producto) {
    const buscarProductoCarrito = carrito.find((el) => el.titulo.toLowerCase() === producto.titulo.toLowerCase());
    if (buscarProductoCarrito !== undefined) {
        console.log(buscarProductoCarrito);
    }
    else {
        carrito.push(producto);
        const carritoJson = JSON.stringify(carrito);
        localStorage.setItem("carrito", carritoJson);
        indicadorCantidadJuegos.innerText = `${carrito.length}`;
    }
}

function vaciarCarrito() {
    carrito.splice(0, carrito.length);
    const carritoJSON = JSON.stringify(carrito);
    localStorage.carrito = carritoJSON;
    indicadorCantidadJuegos.innerText = `${carrito.length}`;
    renderizarCarrito();
}

function eliminarDelCarrito(producto) {
    const indexProducto = carrito.indexOf(producto);
    carrito.splice(indexProducto, 1);
    const carritoJSON = JSON.stringify(carrito);
    localStorage.carrito = carritoJSON;
    indicadorCantidadJuegos.innerText = `${carrito.length}`;
    renderizarCarrito();
}

//Renderización de productos
const contenedorProductos = document.getElementById("cards__container");
const barraDeBusqueda = document.getElementById("search__bar");

function renderizarProductos(array) {
    contenedorProductos.innerHTML = "";
    for (const producto of productos) {
        const div = document.createElement("div");
        div.className = "card";

        let image;
        if (producto.image !== "") {
            const img = document.createElement("img");
            img.src = producto.image;
            image = img;
        }
        else {
            const div = document.createElement("div");
            const p = document.createElement("p");

            p.innerText = "Image not found"
            p.id = "img__replace__text";

            div.id = "img__replace";
            div.append(p);
            image = div;
        }

        const h3 = document.createElement("h3");
        h3.innerText = producto.titulo;
        
        const h4 = document.createElement("h4");
        h4.innerText = `$${producto.precio}`;

        const p = document.createElement("p");
        p.innerText = `Stock: ${producto.stock}`;

        const button = document.createElement("button");
        button.className = "card__button";
        button.innerHTML = `<img src="media/add-to-cart.png" />`
        button.addEventListener("click", () => {
            agregarAlCarrito(producto);
        })

        div.append(image, h3, h4, p, button);
        contenedorProductos.append(div);
    }
}

renderizarProductos(productos);